
// Raw Objects:

const seedlingScheduleSoil = {
  1: null,
  2: "water",
  3: null,
  4: "water",
  5: null,
  6: null,
  7: "water",
  8: null,
  9: "water",
  10: "checkPH",
  11: null,
  12: "water",
  13: null,
  14: "water",
  15: null,
  16: null,
  17: "water",
  18: null,
  19: "water",
  20: "transplant"
}

const seedlingScheduleSoilless = {
  1: null,
  2: "water",
  3: null,
  4: "water",
  5: null,
  6: "feed",
  7: null,
  8: "water",
  9: null,
  10: "water",   
  11: "checkPH",
  12: "water",
  13: null,
  14: "feed",
  15: null,
  16: "water",
  17: null,
  18: "water",
  19: null,
  20: "transplant"
}

const seedlingScheduleHydroponic = {
  1: null,
  2: null,
  3: "water",
  4: null,
  5: null,
  6: "feedWater",
  7: "checkPH",
  8: null,
  9: "water",
  10: null,
  11: null,
  12: "feedWater",
  13: "checkPH",
  14: null,
  15: null,
  16: "water",
  17: null,
  18: null,
  19: null,
  20: "replaceResevoir"
}

const vegetativeScheduleSoil = {
 1: null,
2: "water",
3: null,
4: null,
5: "water",
6: null,
7: null,
8: "feed",
9: null,
10: null,
11: "water",
12: null,
13: null,
14: "water",
15: null,
16: null,
17: "feed",
18: null,
19: "transplant",
20: "water",
21: null,
22: null,
23: "water",
24: null,
25: null,
26:"feed",
27: null,
28: null,
29: "water",
30: null,
31: null,
32: "water",
33: null,
34: null,
35: "feed",
36: null,
37: null,
38: "water",
39: null,
40: "transplant",
41: "water",
42: null,
43: null,
44: "water",
45: null,
46: null,
47: "feed",
48: "defoliate",
49: null,
50: "water"
}

const vegetativeScheduleSoilless = {
1: "water",
2: "feed",
3:  null,
4: "water",
5: "feed",
6:  null,
7: "water",
8: "feed",
9: null,
10: "water",
11: "feed",
12: null,
13: "water",
14: "feed",
15: null,
16: "water",
17: "feed",
18: null,
19: "water",
20: "transplant",
21: "feed",
22: null,
23: "water",
24: "feed",
25: null,
26: "water",
27: "feed",
28: null,
29: "water",
30: "feed",
31: null,
32: "water",
33: "feed",
34: null,
35: "water",
36: "feed",
37: null,
38: "water",
39: "feed",
40: "transplant",
41: "water",
42: null,
43: "water",
44: "feed",
45: null,
46: "water",
47: "feed",
48: null,
49: "water",
50: "defoliate"
}

const vegetativeScheduleHydroponic = {
  1: null,
  2: null,
  3: "water",
  4: "checkPH",
  5: "feed",
  6: null,
  7: null,
  8: "water",
  9: null,
  10: null,
  11: "feed",
  12: "checkPH",
  13: null,
  14: null,
  15: "water",
  16: null,
  17: "feed",
  18: "checkPH",
  19: null,
  20: null,
  21: "replaceResevoir",
  22: null,
  23: null,
  24: "water",
  25: null,
  26: "checkPH",
  27: null,
  28: "feed",
  29: null,
  30: null,
  31: "water",
  32: "checkPH",
  33: null,
  34: null,
  35: "feed",
  36: null,
  37: "checkPH",
  38: "water",
  39: null,
  40: null,
  41: "replaceResevoir",
  42: null,
  43: null,
  44: "water",
  45: "checkPH",
  46: null,
  47: "feed",
  48: null,
  49: "defoliate",
  50: "water"
}

const floweringScheduleSoil = {
  1: null,
  2: null,
  3: "feed",
  4: null,
  5: null,
  6: "water",
  7: null,
  8: null,
  9: "feed",
  10: "checkPH",
  11: null, 
  12: "water",
  13: null,
  14: null,
  15: "feed",
  16: null,
  17: null,
  18: "water",
  19: null,
  20: null,
  21: "feed",
  22: "defoliate",
  23: null,
  24: "water",
  25: "checkPH",
  26: null,
  27: "feed",
  28: null,
  29: null,
  30: "water",
  31: null,
  32: null,
  33: "feed",
  34: null,
  35: null,
  36: "water",
  37: null,
  38: null,
  39: "feed",
  40: null,
  41: null,
  42: "water",
  43: "checkPH",
  44: null,
  45: "feed",
  46: null,
  47: "defoliate",
  48: "water",
  49: null,
  50: null,
  51: "feed",
  52: null,
  53: null,
  54: "water",
  55: null,
  56: null,
  57: "feed",
  58: null,
  59: null,
  60: "water",
  61: null,
  62: null,
  63: "water",
  64: null,
  65: null,
  66: "water",
  67: null,
  68: null,
  69: "water",
  70: "harvest"
}

const floweringScheduleSoilless = {
  1: "feed",
  2: "water",
  3: null,
  4: "feed",
  5: "water",
  6: null,
  7: "feed",
  8: "water",
  9: null,
  10: "feed",
  11: "water",
  12: "defoliate",
  13: "water",
  14: null,
  15: "feed",
  16: "water",
  17: null,
  18: "feed",
  19: "water",
  20: null,
  21: "feed",
  22: "water",
  23: null,
  24: "feed",
  25: "water",
  26: null,
  27: "feed",
  28: "water",
  29: null,
  30: "feed",
  31: "water",
  32: "defoliate",
  33: "feed",
  34: "water",
  35: null,
  36: "feed",
  37: "water",
  38: null,
  39: "feed",
  40: "water",
  41: null,
  42: "feed",
  43: "water",
  44: null,
  45: "feed",
  46: "water",
  47: null,
  48: "feed",
  49: "water",
  50: "defoliate",
  51: "feed",
  52: "water",
  53: null,
  54: "feed",
  55: "water",
  56: null,
  57: "feed",
  58: "water",
  59: null,
  60: "feed",
  61: "water",
  62: null,
  63: "feed",
  64: "water",
  65: null,
  66: "feed",
  67: "water",
  68: null,
  69: "feed",
  70: "harvest"
};

const floweringScheduleHydroponic =  {
1: "feed",
2: null,
3: "checkPH",
4: "water",
5: null,
6: null,
7: "feed",
8: "checkPH",
9:  null,
10: "water",
11: null,
12: null,
13: "replaceResevoir",
14: null,
15: null,
16: "water",
17: "checkPH",
18: null,
19: "feed",
20: null,
21: null,
22: "water",
23: "checkPH",
24: null,
25: "feed",
26: null,
27: "defoliate",
28: "water",
29: "checkPH",
30: null,
31: "feed",
32: null,
33: null,
34: "replaceResevoir",
35: null,
36: null,
37: "water",
38: null,
39: "checkPH",
40: "feed",
41: null,
42: null,
43: "water",
44: null,
45: "checkPH",
46: "feed",
47: null,
48: "defoliate",
49: "water",
50: null,
51: null,
52: "feed",
53: null,
54: null,
55: "replaceResevour",
56: null,
57: null,
58: "water",
59: "checkPH",
60: null,
61: "feed",
62: null,
63: null,
64: "water",
65:"checkPH",
66: null,
67: null,
68: "water",
69: null,
70: "harvest"
}


const seedlingScheduleSoilArr = Object.values(seedlingScheduleSoil);
const seedlingScheduleSoillessArr = Object.values(seedlingScheduleSoilless)
const seedlingScheduleHydroponicArr = Object.values(seedlingScheduleHydroponic)

const vegetativeScheduleSoilArr = Object.values(vegetativeScheduleSoil)
const vegetativeScheduleSoillessArr = Object.values(vegetativeScheduleSoilless)
const vegetativeScheduleHydroponicArr = Object.values(vegetativeScheduleHydroponic)

const floweringScheduleSoilArr = Object.values(floweringScheduleSoil)
const floweringScheduleSoillessArr = Object.values(floweringScheduleSoilless)
const floweringScheduleHydroponicArr = Object.values(floweringScheduleHydroponic)


const scheduleMap = {
  seedling: {
    soil: () => seedlingScheduleSoilArr,
    soilless: () => seedlingScheduleSoillessArr,
    hydroponic: () => seedlingScheduleHydroponicArr,
  },
  vegetative: {
    soil: () => vegetativeScheduleSoilArr,
    soilless: () => vegetativeScheduleSoillessArr,
    hydroponic: () => vegetativeScheduleHydroponicArr,
  },
  flowering: {
    soil: () => floweringScheduleSoilArr,
    soilless: () => floweringScheduleSoillessArr,
    hydroponic: () => floweringScheduleHydroponicArr,
  }
}

const scheduleMaker = ({ stageOfLife, growingMedium }) => {
  const scheduleFn = scheduleMap[stageOfLife][growingMedium]
  const schedule = scheduleFn()

  if (stageOfLife === "seedling") {
    schedule.push(...scheduleMaker({ stageOfLife: "vegetative", growingMedium }))
  } else if (stageOfLife === "vegetative") {
    schedule.push(...scheduleMaker({ stageOfLife: "flowering", growingMedium }))
  }

  return schedule
}

const createEvents = (schedule, { stageOfLife, startTime, name, growingMedium, color }) => {
  const events = schedule.map((eventType, index) => {
    console.log('eventType', eventType)
    if (eventType) {
      return createEvent({
        startTime,
        name,
        stageOfLife,
        growingMedium,
        eventType,
        color,
        startTimeIncrement: index,
      })
    }
  })
  console.log('events 2', events)

  return events.filter((event) => !!event)
}

const createEvent = ({ startTime, startTimeIncrement, name, stageOfLife, growingMedium, eventType, color }) => {
  const time = startTime.split(/[- :]/);
  const eventStartTime = new Date(Date.UTC(time[0], time[1] - 1, time[2], time[3], time[4], time[5]));
  eventStartTime.setDate(eventStartTime.getDate() + startTimeIncrement)
  const eventEndTime = new Date(Date.UTC(time[0], time[1] - 1, time[2], time[3], time[4], time[5]));
  eventEndTime.setDate(eventEndTime.getDate() + startTimeIncrement)
  eventEndTime.setHours(eventEndTime.getHours() + 1)

  const event = {
    summary: `Growmie: ${eventType} ${name}`,
    description: `Today you need to ${eventType} your plant ${name}, that is in ${stageOfLife} stage and is growing in ${growingMedium}.`,
    start: {
      dateTime: eventStartTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    end: {
      dateTime: eventEndTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    colorId: color,
  }
  return event
}

module.exports = {
  scheduleMaker,
  createEvents
}





// // Soil:


// const createSeedlingScheduleSoil = () => {
//   let seedlingScheduleSoil = [null]
  
//   for (let i = 0; i < 20; i++) {
//     if (seedlingScheduleSoil[i - 1] === "water" || (seedlingScheduleSoil[i -2] === "water" && seedlingScheduleSoil[i -4] ==="water")) {
//       seedlingScheduleSoil.push(null)
//     } else if (seedlingScheduleSoil[i - 1] === null) {
//       seedlingScheduleSoil.push("water")
//     } 
//   }
//   seedlingScheduleSoil[9] = "checkPH"
//   seedlingScheduleSoil[19] = "transplant"
//   return seedlingScheduleSoil;
// }

// // TODO: fix
// const createVegetativeScheduleSoil = () => {
//   const vegetativeScheduleSoil = {};

//   for (let i = 1; i <= 50; i++) {
//     if (
//       vegetativeScheduleSoil[i - 1] === "water" ||
//       (vegetativeScheduleSoil[i - 2] === "water" &&
//         vegetativeScheduleSoil[i - 4] === "water")
//     ) {
//       vegetativeScheduleSoil[i] = null;
//     } else if (i === 1 || vegetativeScheduleSoil[i - 1] === null) {
//       vegetativeScheduleSoil[i] = "water";
//     } else if ([7, 16, 34, 46].includes(i)) {
//       vegetativeScheduleSoil[i] = "feed";
//     } else if ([19, 40].includes(i)) {
//       vegetativeScheduleSoil[i] = "transplant";
//     } else if (i === 48) {
//       vegetativeScheduleSoil[i] = "defoliate";
//     } else {
//       vegetativeScheduleSoil[i] = null;
//     }
//   }

//   return vegetativeScheduleSoil;
// };

// const createFloweringScheduleSoil = () => {
//   const floweringScheduleSoil = {};

//   for (let i = 1; i <= 70; i++) {
//     if (
//       floweringScheduleSoil[i - 1] === "water" ||
//       (floweringScheduleSoil[i - 2] === "water" &&
//         floweringScheduleSoil[i - 4] === "water")
//     ) {
//       floweringScheduleSoil[i] = null;
//     } else if (floweringScheduleSoil[i - 1] === null) {
//       floweringScheduleSoil[i] = "water";
//     }
//   }

//   floweringScheduleSoil[10] = "checkPH";
//   floweringScheduleSoil[20] = "transplant";
//   floweringScheduleSoil[22] = "defoliate";
//   floweringScheduleSoil[25] = "checkPH";
//   floweringScheduleSoil[47] = "defoliate";
//   floweringScheduleSoil[70] = "harvest";

//   return floweringScheduleSoil;
// };

// // Soilless:

// const createSeedlingScheduleSoilless = () => {
//   const seedlingScheduleSoilless = {};

//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 2) {
//       seedlingScheduleSoilless[i] = "water";
//     } else if (i % 3 === 0) {
//       seedlingScheduleSoilless[i] = "feed";
//     } else if (i === 11) {
//       seedlingScheduleSoilless[i] = "checkPH";
//     } else if (i === 20) {
//       seedlingScheduleSoilless[i] = "transplant";
//     } else {
//       seedlingScheduleSoilless[i] = null;
//     }
//   }

//   return seedlingScheduleSoilless;
// };



// const createVegetativeScheduleSoilless = () => {
//   const vegetativeScheduleSoilless = {};

//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 1) {
//       vegetativeScheduleSoilless[i] = "water";
//     } else if (i % 6 === 2 || i % 6 === 5) {
//       vegetativeScheduleSoilless[i] = "feed";
//     } else if (i % 6 === 0 && i <= 40) {
//       vegetativeScheduleSoilless[i] = "transplant";
//     } else if (i === 50) {
//       vegetativeScheduleSoilless[i] = "defoliate";
//     } else {
//       vegetativeScheduleSoilless[i] = null;
//     }
//   }

//   return vegetativeScheduleSoilless;
// };

// const createFloweringScheduleSoilless = () => {
//   const floweringScheduleSoilless = {};
//   for (let i = 1; i <= 70; i++) {
//     if (i % 3 === 0) {
//       floweringScheduleSoilless[i] = null;
//     } else {
//       if (i % 6 === 0) {
//         floweringScheduleSoilless[i] = "defoliate";
//       } else if (i % 10 === 0) {
//         floweringScheduleSoilless[i] = "harvest";
//       } else {
//         floweringScheduleSoilless[i] = "feed";
//       }
//     }
//   }
//   return floweringScheduleSoilless;
// }


// // Hydroponic:


// const createSeedlingScheduleHydroponic = () => {
//   const seedlingScheduleHydroponic = {};

//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//       seedlingScheduleHydroponic[i] = "water";
//     } else if (i % 6 === 0) {
//       seedlingScheduleHydroponic[i] = "feed";
//     } else if (i === 7 || i === 13) {
//       seedlingScheduleHydroponic[i] = "checkPH";
//     } else if (i === 20) {
//       seedlingScheduleHydroponic[i] = "replaceResevoir";
//     } else {
//       seedlingScheduleHydroponic[i] = null;
//     }
//   }

//   return seedlingScheduleHydroponic;
// };



// const createVegetativeScheduleHydroponic = () => {
//   const vegetativeScheduleHydroponic = {};

//   for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 3 || i % 7 === 4) {
//       vegetativeScheduleHydroponic[i] = "water";
//     } else if (i % 7 === 5) {
//       vegetativeScheduleHydroponic[i] = "feed";
//     } else if (i % 7 === 0 && i <= 42) {
//       vegetativeScheduleHydroponic[i] = "replaceResevoir";
//     } else if (i === 49) {
//       vegetativeScheduleHydroponic[i] = "defoliate";
//     } else {
//       vegetativeScheduleHydroponic[i] = null;
//     }
//   }

//   return vegetativeScheduleHydroponic;
// };



// const createFloweringScheduleHydroponic = () => {
//   const floweringScheduleHydroponic = {};

//   for (let i = 1; i <= 70; i++) {
//     if (i % 4 === 1) {
//       floweringScheduleHydroponic[i] = "feed";
//     } else if (i % 4 === 2) {
//       floweringScheduleHydroponic[i] = null;
//     } else if (i % 4 === 3) {
//       floweringScheduleHydroponic[i] = "checkPH";
//     } else {
//       floweringScheduleHydroponic[i] = "water";
//     }
//   }

//   floweringScheduleHydroponic[27] = "defoliate";
//   floweringScheduleHydroponic[34] = "replaceResevoir";
//   floweringScheduleHydroponic[48] = "defoliate";
//   floweringScheduleHydroponic[55] = "replaceResevour";
//   floweringScheduleHydroponic[70] = "harvest";

//   return floweringScheduleHydroponic;
// };