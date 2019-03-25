// #### Refresher

// So far we have seen:

//     * Strings
//     * Numbers
//     * Booleans
//     * Arrays
//     * Objects

// When these datatypes are combined, we get a ** data structure **, for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to ** you ** to determine which datatypes and what data structure to use.For each of the following, write which ** data types ** you would use to represent the data, and then give a small example of the ** data structure **:

//* A light switch that can be either on or off.
    // booleans
//* A user's email address.
    // strings
//* A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    // object
//* A list of student names from our class.
    // array
//* A list of student names from our class, each with a location.
    // object
//* A list of student names from our class, each with a location and each with a list of favorite tv shows.
    // object

// 2. Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
//     const rainbow = ["red", "orange","yellow","green","blue","violet"];
// // 2. Write code that will access "blue"
//     rainbow[4];
// // 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
//     const dave = {
//     favoriteFood: "Pizza",
//     hobby: "Hiking",
//     currentTown:"Denver",
//     favoriteDataType: "objects",
//     }
// // 4. Write code that will access your hobby from the object that you just created.
//     dave.hobby

//### 3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// Use crazyObject to log the following.

//     * "omg my mouth is burning"
    console.log(crazyObject.taco[1].salsa[5])
//     * "Pretty pretty prettayyyyy good"
    console.log(crazyObject.larry.quotes[0])
//     * "Swearing at Larry and Jeff"
    console.log(crazyObject.larry.characters[2].favourtieHobby)
//     * "Chicken Teriyaki Boyyyyyy"
    console.log(crazyObject.larry.nicknames[1])
//     * The object the contains the name`funkhauser`
    console.log(crazyObject.larry.characters[1])


// &#x1F534; ** Commit:** "crazyObject"