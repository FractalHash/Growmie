require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const router = express.Router()
const PORT = process.env.PORT || 5050;

const { google } = require('googleapis')
const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
)

oAuth2Client.setCredentials({
  refresh_token: process.env.refresh_token
})


const calendar = google.calendar({
  version: 'v3',
  auth: oAuth2Client,
})


const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 18)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 21)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
  summary: 'Test growmie event',
  location: '278A Queen St W, Toronto, ON M5V 2A1',
  description: 'Testing the growmie scheduler',
  start: {
    dateTime: eventStartTime,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  },
  end: {
    dateTime: eventEndTime,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  },
  colorId: 2,
}

calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Toronto',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
  if (err) return console.error("Free Busy Query Error: ", err)
  
  const eventsArr = res.data.calendars.primary.busy

  if (eventsArr.length === 0)
    return calendar.events.insert(
      { calendarId: 'primary', resource: event },
      err => {
        if (err) return console.error("Calendar event creation error: ", err)
      
        return console.log("Calendar event created")
      }
    )
      return console.log("Sorry I'm busy")
  }
)

require('dotenv').config();

app.use(express.json());
app.use(cors());


app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the Growmie API!")
})

const scopes = ['https://www.googleapis.com/auth/calendar']

app.get("/google", (req, res) => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes
  })
  res.redirect(url);
});

app.get("/google/redirect", async (req, res) => {
  const code = req.query.code;

  const { tokens } = await oAuth2Client.getToken(code)
  oAuth2Client.setCredentials(tokens)
  console.log(tokens)

  res.send("Successfully logged in!")
})


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

module.exports = router;