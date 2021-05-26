const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.reduce((newArray, kitty) => {
      if (kitty.color === 'orange') {
        newArray.push(kitty.name);
      }
      return newArray;
    }, []);
    return result;

    // Annotation:
    // iterate through kitties  --> reduce()
    // if kitty.color is orange
    // push kitty.name into array
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // iterate through kitties and sort my age --> sort()
    // oldest to youngest
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.sort((a, b) => b.age - a.age);
    result.forEach(kitty => kitty.age = kitty.age + 2);
    return result;

    // sort kitties oldest to youngest --> sort()
    // iterate through and increase kitty.age by 2
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    // let newObj = {};
    // const result = clubs.map(club => {
    //   club.members.forEach(member => {
    //     if (!newObj[member]) {
    //       newObj[member] = [];
    //     }
    //     newObj[member].push(club.club)
    //   })
    // })
    // return newObj;

    const result = clubs.reduce((newObj, currentClub) => {
      currentClub.members.forEach(member => {
        if (!newObj[member]) {
          newObj[member] = [];
        }
        newObj[member].push(currentClub.club);
      });
      return newObj;
    }, {});

    return result;

    // Annotation:
    // i dunno
    // iterate through clubs with map
    // let a new empty object
    // iterate through club.members
    // if emptyObject[member] doesn't exist
    // create the key and assign an empty array to it

    // push club.club into each array
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      let rObj = {};
      rObj.mod = mod.mod,
      rObj.studentsPerInstructor = (mod.students / mod.instructors);
      return rObj;
    });
    return result;

    // Annotation:
    // Create a new array of objects
    // first key and value are the same
    // second key is studentsPerInstructor whos value is mod.students/mod.instructors
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      let rObj = {};
      rObj.flavor = cake.cakeFlavor,
      rObj.inStock = cake.inStock;
      return rObj;
    });
    return result;

    // Annotation:
    // iterate through cakes return an array of objects --> map()
    // that have key of flavor with value cake.cakeFlavor,
    // and another key of inStock with a value of cake.inStock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // iterate through cakes using filter
    // push each cake that has a cake.inStock value greater than 0 into acc
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((accumulator, cake) => {
      return accumulator + cake.inStock;
    }, 0);
    return result;

    // Annotation:
    // iterate through cakes using reduce
    // add each cake.inStock to the acc
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = [];
    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if (!result.includes(topping)) {
          result.push(topping);
        }
      });
    });
    return result;

    // Annotation:
    // create an empty array
    // iterate through cakes
    // iterate through each cake.toppings
    // if empty array !doesn't include cake.topping push it
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    let rObj = {};
    const result = cakes.forEach(cake => {
      cake.toppings.map(topping => {
        if (!rObj[topping]) {
          rObj[topping] = 1;
          return rObj;
        } else {
          rObj[topping]++;
          return rObj;
        }
      });
    });
    return rObj;

    // Annotation:
    // make empty object
    // iterate through cakes --> forEach?
    // iterate through toppings --> map?
    // does empty object have a key of topping?
    // if yes increment value by 1
    // if no create key with value of 1
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    // Annotation:
    // iterate through classrooms with --> filter
    // filter only for rooms with .program = 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let aObj = { feCapacity: 0, beCapacity: 0};
    const result = classrooms.map(room => {
      if (room.program === 'FE') {
        aObj.feCapacity += room.capacity;
        console.log(room.capacity);
      } else {
        aObj.beCapacity += room.capacity;
      }
    });
    return aObj;

    // Annotation:
    // create an empty object
    // iterate through classrooms using map
    // if room.program === 'FE'
    // object.feCapacity += room.capacity
    // else
    // object.beCapacity += room.capacity
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // iterate through classrooms using sort
    // 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const result = books.reduce((newArray, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        newArray.push(book.title);
      }
      return newArray;
    }, []);
    return result;


    // const result = books.filter(book => {
    //   return (book.genre !== 'Horror' && book.genre !== 'True Crime');
    // }).map(book => {
    //   return book.title;
    // });
    // return result;

    // Annotation:
    // iterate through books
    // for every book who's book.genre !== horror || true crime
    // add to acc
    // return acc

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.filter(book => {
      return (book.published >= 1990 && book.published <= 2009);
    }).map(book => {
      let rObj = {};
      rObj.title = book.title;
      rObj.year = book.published;
      return rObj;
    });

    return result;

    // Annotation:
    // iterate through books using filter
    // if book.published is between 1990 and 2009 return book
    // then use map to iterate over the returned books
    // and return each books title and pubslished
    // with keys of title and year
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // const result = weather.map(town => {
    //   return (town.temperature.high + town.temperature.low) / 2;
    // });
    // return result;

    const result = weather.reduce((newArray, town) => {
      newArray.push((town.temperature.high + town.temperature.low) / 2);
      return newArray;
    }, []);
    return result;

    //why couldn't I just return that line like below?
    // const result = weather.reduce((newArray, town) => {
    //   return newArray.push((town.temperature.high + town.temperature.low) / 2);
    // }, []);
    // return result;

    // Annotation:
    // iterate through weather using map
    // create an empty array
    // for every town push the average of town.temperature.high and town.temperature.low
    // into the empty array
    // return the array
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.filter(town => {
      return (town.type === 'sunny' || town.type === 'mostly sunny');
    }).map(town => {
      return `${town.location} is ${town.type}.`;
    });
    return result;

    // Annotation:
    // iterate through weather using filter?
    // and for every town who's .type is sunny or mostly sunny
    // return a string using interpolation
    // `${town.location} is ${town.type}.`
    // looking for an array of stings
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity)[0];
    return result;

    // Annotation:
    // sort the array by .humidity in ascending order using sort
    // use slice to return a shallow copy at start index of (array.length-1)


  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((newObject, park) => {
      if (!newObject.parksVisited && !newObject.parksToVisit) {
        newObject.parksVisited = [];
        newObject.parksToVisit = [];
      }
      if (park.visited) {
        newObject.parksVisited.push(park.name);
      } else {
        newObject.parksToVisit.push(park.name);
      }
      return newObject;
    }, {});
    return result;

    // Annotation:
    // iterate through parks with reduce (because they want an object back)
    // create an object with keys of parksToVisit and parksVisited
    // with empty arrays assigned to them
    // if park.visited is true array.parksVisited.push(park)
    // else array.parksToVisit.push(park)
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(park => {
      let newObj = {};
      newObj[park.location] = park.name;
      return newObj;
    });
 
    return result;

    // Annotation:
    // iterate through parks using map
    // let a new object
    // for each park assign a key to the new object that is the park.location
    // assigned a value of the park.name
    // return the object
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((newArray, park) => {
      park.activities.forEach(activity => {
        if (!newArray.includes(activity)) {
          newArray.push(activity);
        }
      });
      return newArray;
    }, []);

    return result;

    // Annotation:
    // iterate through parks using reduce
    // then iterate through each park's .activities using filter
    // check to see if reduce array includes activity
    // if it doesn't push it into reduce array
    // return array
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      return acc + brewery.beers.length;
    }, 0);

    return result;

    // Annotation:
    // Iterate through breweries using reduce
    // add each breweries' beers.length to the acc
    // return the acc
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
      let newObj = {};
      newObj.name = brewery.name,
      newObj.beerCount = brewery.beers.length;
      return newObj;
    });

    return result;

    // Annotation:
    // iterate through breweries using map
    // let a new empty object
    // for each brewery assign .name to a key of name,
    // and .beers.length to a key of beerCount
    // return the object
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries
      .map(brewery => brewery.beers.sort((a, b) => b.abv - a.abv)[0])
      .sort((a, b) => b.abv - a.abv)[0];

    return result;

    // Annotation:
    // I want to create an array of all the objects in beers of each brewery
    // and then sort them in descending order of .abv and return the one at 0 index
    // because that will be the beer with the highest abv

    // use filter on breweries
    // then reduce on beers
    // then sort()[0]
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // const result = instructors.map(instructor => {
    //   let newObj = {};
    //   cohorts.find(cohort => {
    //     cohort.module === instructor.module
    //     console.log('INSTRUCTOR', instructor.module)
    //     console.log('COHORT', cohort.module)
    //     newObj.name = instructor.name,
    //     newObj.studentCount = cohort.studentCount
    //   })
    //   return newObj;
    // })
    // console.log(result)
    // return result;


    const result = instructors.map(instructor => {
      let newObj = {};
      newObj.name = instructor.name,
      cohorts.forEach(cohort => {
        if (cohort.module === instructor.module) {
          newObj.studentCount = cohort.studentCount;
        }
      });
      return newObj;
    });

    return result;

    // Annotation:
    // return an array of objects
    // with a key of name assigned to instructors[].name
    // and another key of studentCount assigned to cohorts[].studentCount
    // the thing that both arrays share is a key of .module

    // iterate through instructors using map
    // iterate through cohorts using find
    // find the cohort.module === instructor[].module
    // return that object

    // let newObj = {}
    // newObj.name = instructor[].name,
    // newObj.studentCount = cohort.studentCount
    // return newObj
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((newObj, currentInstructor) => {
      newObj[currentInstructor.name] = [];
      currentInstructor.teaches.forEach(skill => {
        cohorts.forEach(cohort => {
          if (cohort.curriculum.includes(skill)) {
            if (!newObj[currentInstructor.name].includes(cohort.module)) {
              newObj[currentInstructor.name].push(cohort.module);
            }
          }
        });
      });
      newObj[currentInstructor.name].sort((a, b) => a - b);
      return newObj;
    }, {});

    return result;

    // Annotation:
    // iterate through instructors using reduce to create a new object
    // create keys for each instructor.name
    // iterate through instructor.teaches (skill)
    // iterate through cohorts
    // if cohort.curriculum.includes skill
    // then newObj[currentInstructor.name].push cohort.module
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((newObj, currentInstructor) => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(topic => {
          if (!newObj[topic]) {
            newObj[topic] = [];
          }
        });
      });
      currentInstructor.teaches.forEach(skill => {
        newObj[skill].push(currentInstructor.name);
      });
      return newObj;
    }, {});

    return result;

    // Annotation:
    // iterate through cohorts with reduce creating a new object
    // iterate through .curriculum
    // if newObject[topic] doesn't exist create it with an empty array assigned to it
    // iterate through instructors
    // iterate through teaches
    // newObject[skill].push instructor.name
    // return that mofo
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    // ]

    const result = Object.values(bosses).map(leader => {
      return {
        bossName: leader.name,
        sidekickLoyalty: sidekicks.reduce((sum, sidekick) => {
          if (sidekick.boss === leader.name) {
            sum += sidekick.loyaltyToBoss;
          }
          return sum;
        }, 0)
      };
    });

    return result;

    // Annotation:
    // reverse the order of bosses
    // iterate through bosses using reduce to create an array of objects
    // with a key of bossName assigned to boss.name
    // and a key of sidekickLoyalty assigned to
    // the accumulation of sidekick.loyaltyToBoss
    // which have a sidekick.boss === boss.name

    // within reduce let a new empty object
    // use a forEach to get into sidekicks

    // if sidekick.boss === boss.name

    // if (Obj.bossName = sidekick.boss) doesn't exist
    // create it

    // sidekickLoyalty += sidekick.loyaltyToBoss
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    // const result = Object.values(constellations).reduce((newArray, currentConstellation) => {

    //   currentConstellation.stars.forEach(starName => {
    //     return stars.filter(star => star.name === starName)
    //   })
    //   return newArray
    // }, [])
    // console.log(result)
    // return result;

    // Annotation:
    // iterate through constellations using reduce to create a new array
    //iterate through stars using find to return a matching object
    //use forEach to iterate through constellation.stars
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((newObj, currentStar) => {
      if (!newObj[currentStar.color]) {
        newObj[currentStar.color] = [];
      }
      newObj[currentStar.color].push(currentStar);
      return newObj;
    }, {});

    return result;

    // Annotation:
    // I have an array of objects
    // I want an object with keys equal to star.color
    // that is assigned an array of objects that have star.color matching obj.key

    // use reduce to create a newObj and iterate through stars

    // use an if statement to create the key:
    // if object[key] of star.color doesn't exist
    // make it and assign it an empty array

    // push star into object[star.color]
    // profit
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
