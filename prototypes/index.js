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

    // fara's mentor's solution:
    // const result = kitties
    //   .filter(el => el.color === 'orange')
    //   .map(el => el.name);
    // return result;
    
    const result = kitties.reduce((newArray, currentKitten) => {
      if (currentKitten.color === 'orange') {
        newArray.push(currentKitten.name);
      }
      return newArray;
    }, []);
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // I have an array of objects and
    // I want a sorted array of objects
    // use sort to sort cat.age in descending order
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

    // const result = kitties.sort((a, b) => b.age - a.age);
    // result.forEach(kitty => kitty.age = kitty.age + 2);

    const result = kitties.map(currentCat => {
      currentCat.age += 2;
      return currentCat;
    }).sort((a, b) => b.age - a.age);
    
    return result;

    // I have an array of objects
    // and I want back an ordered array of objects
    // in which all the cat.ages have increased by 2 --> map?
    // and they are sorted cat.age in descending order

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
    // I have an array of objects

    // I want an object
    // with keysnames === club.member

    // use reduce to instantiate an empty object
    // use forEach to iterate through members
    // if() object[club.member] doesn't exist
    // create it and assign an empty array to it

    // object[club.member].push club.club

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

    // fara's mentor's solution:
    // const result = mods.map(obj => {
    //   return {
    //     mod: obj.mod,
    //     studentsPerInstructor: obj.students / obj.instructors;
    //   };
    // });

    const result = mods.map(mod => {
      let newObj = {};
      newObj.mod = mod.mod,
      newObj.studentsPerInstructor = (mod.students / mod.instructors);
      return newObj;
    });

    return result;

    // Annotation:
    // I have an array of objects
    // I want an array of objects
    // the new array has a different 2nd key and no 3rd key

    // use map to iterate through mods
    // let a new object
    // declare an object.key of mod and assign the value of mod.mod
    // declare an object.key of studentsPerInstructor and
    // assign it a value of mod.instructors / mod.students
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

    // fara's mentor's solution:
    // const result = cakes.map(obj => {
    //   return {
    //     flavor: obj.cakeFlavor,
    //     inStock: obj.inStock
    //   };
    // });

    const result = cakes.map(cake => {
      let newObj = {};
      newObj.flavor = cake.cakeFlavor,
      newObj.inStock = cake.inStock;
      return newObj;
    });
    
    return result;

    // Annotation:
    // I have an array of cake objects
    // I want an array of objects

    // use map to iterate through cakes
    // let a new empty object
    // create a key of flavor and assign cake.cakeFlavor to it
    // create a key of inStock and assign cake.inStock to it
    // return said object

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

    const result = cakes.filter(cake => (cake.inStock));
    
    return result;

    // Annotation:
    // I have an array of cake objects
    // and I want an array of only the cake objects that are in stock

    // use filter
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, currentCake) => {
      return acc += currentCake.inStock;
    }, 0);
    
    return result;

    // Annotation:
    // I have an array of cake objects
    // I want to return an accumulated number

    // use reduce to iterate through cakes
    // and add each cake.inStock value to the acc
    // return the acc
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((newArray, currentCake) => {
      currentCake.toppings.forEach(topping => {
        if (!newArray.includes(topping)) {
          newArray.push(topping);
        }
      });
      return newArray;
    }, []);

    return result;

    // Annotation:
    // I have an array of objects with a nested toppings array
    // I want an array of unique topping strings
    // use reduce to iterate through cakes and instantiate an empty array
    // use forEach to iterate through toppings
    // if() newArray doesn't include topping
    // push it into the newArray
    // return array
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

    const result = cakes.reduce((newObj, currentCake) => {
      currentCake.toppings.forEach(topping => {
        if (!newObj[topping]) {
          newObj[topping] = 1;
        } else {
          newObj[topping]++;
        }
      });
      return newObj;
    }, {});
    
    return result;

    // Annotation:
    // I have an array of cake objects
    // I want an object
    // with key.names === cake.cakeFlavor
    // assigned a number that represent how many total times they show up across all cakes

    // use reduce to iterate through cakes and instantiate an empty object

    // use forEach to iterate through cake.toppings
    // if () object[topping] doesn't exist
    // make it and assign it a value of 1

    // if it does (else) exist increment it's value by 1
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

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    
    return result;

    // Annotation:
    // I have an array of objects
    // I want an array of those same objects
    // but only the ones that have object.program=FE
    // use filter
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((newObj, currentClassroom) => {
      if (!newObj.feCapacity && !newObj.beCapacity) {
        newObj.feCapacity = 0,
        newObj.beCapacity = 0;
      }
      if (currentClassroom.program === 'FE') {
        newObj.feCapacity += currentClassroom.capacity;
      } else {
        newObj.beCapacity += currentClassroom.capacity;
      }
      return newObj;
    }, {});
    
    return result;

    // Annotation:
    // I have an array of classroom objects
    // I want an object
    // with two keys (feCapacity and beCapacity) that total up
    // their respective classroom.capacity

    // use reduce to iterate through classrooms and instantiate an empty object
    // create keys and assign a value of 0 to them

    // if() classroom.program === 'FE'
    // then feCapacity += classroom.capacity

    // else beCapacity += classroom.capacity

    //return object
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    
    return result;

    // Annotation:
    // I have an array of objects and
    // I want to return an array of the same objects
    // use sort to sort classroom.capacity in ascending order
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


    const result = books.reduce((newArray, currentBook) => {
      if (currentBook.genre !== 'Horror' && currentBook.genre !== 'True Crime') {
        newArray.push(currentBook.title);
      }
      return newArray;
    }, []);
    
    return result;

    // Annotation:
    // I have an array of objects
    // I want an array of strings (from book.title)
    // of all that aren't horror or true crime

    // use reduce to iterate through books and instantiate an empty array
    // if() book.genre isn't horror or true crime
    // push book.title into array
    // return array

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.filter(book => book.published >= 1990 && book.published < 2010)
      .map(book => {
        let rObj = {};
        rObj.title = book.title;
        rObj.year = book.published;
        return rObj;
      });
    
    return result;

    // Annotation:
    // I have an array of objects
    // and I want to return an array of the same objects but fewer
    // use filter to select just those books
    // that have book.published between 1990 and 2009
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

    // const result = weather.reduce((newArray, town) => {
    //   newArray.push((town.temperature.high + town.temperature.low) / 2);
    //   return newArray;
    // }, []);

    const result = weather.map(eachCity => {
      return (eachCity.temperature.high + eachCity.temperature.low) / 2;
    });
    
    return result;

    // Annotation:
    // I have an array of objects
    // I want an array of numbers
    // that are averages of two numbers found in each object

    // use map to iterate through weather and return an array
    // add the two numbers up and divide by two
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // fara's mentor's solution:
    // const result = weather.filter(elem => elem.type.includes('sunny'))
    //   .map(loc => loc.location + ` is ${loc.type}.`);

    // const result = weather.filter(town => {
    //   return (town.type === 'sunny' || town.type === 'mostly sunny');
    // }).map(town => {
    //   return `${town.location} is ${town.type}.`;
    // });

    const result = weather.filter(currentCity => {
      if (currentCity.type === 'sunny' || currentCity.type === 'mostly sunny') {
        return currentCity;
      }
    }).map(currentCity => `${currentCity.location} is ${currentCity.type}.`);
    
    return result;

    // Annotation:
    // I have an array of weather objects
    // I want an array of strings
    // of only the city.names and city.type interpolated
    // for only those cities that have a type of sunny or mostly sunny

    // use filter to iterate through weather and return an array
    // of only the objects I'm looking for
    // and then use map to return just the interpolated string
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
    // I have an array of objects
    // I want just one object
    // the one with the highest object.humidity
    // can sort[0] do this?
    // sort descending so [0] is highest humidity

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

    const result = nationalParks.reduce((newObj, currentPark) => {
      if (!newObj.parksToVisit && !newObj.parksVisited) {
        newObj.parksToVisit = [];
        newObj.parksVisited = [];
      }
      if (currentPark.visited) {
        newObj.parksVisited.push(currentPark.name);
      } else {
        newObj.parksToVisit.push(currentPark.name);
      }
      return newObj;
    }, {});
    
    return result;

    // Annotation:
    // I have an array of objects
    // I want an object with two keys
    // the first key (parksToVisit) is an array of park.name strings of the parks that have park.visited false
    // the 2nd key (parksVisited) same thing but parks.visited is true

    // use reduce to iterate through parks and instantiate an empty object
    // create the keys with empty arrays assigned to them

    // if() park.visited === true
    // object.parksVisited.push park.name

    // else
    // object.parksToVisit.push park.name
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

    const result = nationalParks.reduce((newArray, currentPark) => {
      currentPark.activities.forEach(activity => {
        if (!newArray.includes(activity)) {
          newArray.push(activity);
        }
      });
      return newArray;
    }, []);
    
    return result;

    // Annotation:
    // I have an array of park objects
    // I want an array of strings from each park.activities without duplication

    // use reduce to iterate through parks and instantiate an empty array
    // use forEach to iterate through each park.activities
    // if() newarray doesn't INCLUDE park.activity
    // push it into newarray
    // return newarray
  },
  
  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // fara's mentor's solution:
    // const result = nationalParks.map(park => {
    //   return {
    //     [park.location]: park.name
    //   };
    // });

    const result = nationalParks.map(currentPark => {
      let newObj = {};
      newObj[currentPark.location] = currentPark.name;
      return newObj;
    });
    
    return result;

    // Annotation:
    // I have an array of park objects
    // I want an array of the same length
    // of modified park odjects

    // use map to iterate through parks and return an array
    // for each park return an object with a key of [park.location]
    // and assign it a value of park.name
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

    const result = breweries.reduce((acc, currentBrewery) => {
      return acc += currentBrewery.beers.length;
    }, 0);
    
    return result;

    // Annotation:
    // I have an array of brewery objects with a nestled array of beer objects
    // I want a total number of beers

    // use reduce to iterate through breweries and return an accumulator that is a number
    // use beer.length?
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // fara's mentor's solution:
    // const result = breweries.map(brew => {
    //   return {
    //     name: brew.name,
    //     beerCount: brew.beers.length
    //   };
    // });

    const result = breweries.map(brewery => {
      let newObj = {};
      newObj.name = brewery.name,
      newObj.beerCount = brewery.beers.length;
      return newObj;
    });
    
    return result;

    // Annotation:
    // I have an array of brewery objects
    // I want an arry of the same length
    // that has two keys
    // key of name = brewery.name
    // key of beerCount = brewery.beers.length

    // use map to iterate through breweries
    // let a new object
    // create keys and assignments
    // return object
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.map(brew => brew.beers.sort((a, b) => b.abv - a.abv)[0])
      .sort((a, b) => b.abv - a.abv)[0];
    
    return result;

    // Annotation:
    // I have an array of brewery objects with a nestled array of beer objects
    // I want one beer object returned. The one that has the highest abv of all beers at all breweries

    // chain a sort with[0]
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
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