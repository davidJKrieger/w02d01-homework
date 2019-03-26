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

// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }

// Use crazyObject to log the following.

// //     * "omg my mouth is burning"
//     console.log(crazyObject.taco[1].salsa[5])
// //     * "Pretty pretty prettayyyyy good"
//     console.log(crazyObject.larry.quotes[0])
// //     * "Swearing at Larry and Jeff"
//     console.log(crazyObject.larry.characters[2].favourtieHobby)
// //     * "Chicken Teriyaki Boyyyyyy"
//     console.log(crazyObject.larry.nicknames[1])
// //     * The object the contains the name`funkhauser`
//     console.log(crazyObject.larry.characters[1])


// &#x1F534; ** Commit:** "crazyObject"

// ### 4. Object - ception

// With the following object:


// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }


// //Change the value of`limbo` to`null`.
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)


const bondFilms = [
    { "title": "Skyfall", "year": 2012, "actor": "Daniel Craig", "gross": "$1,108,561,008" },
    { "title": "Thunderball", "year": 1965, "actor": "Sean Connery", "gross": "$1,014,941,117" },
    { "title": "Goldfinger", "year": 1964, "actor": "Sean Connery", "gross": "$912,257,512" },
    { "title": "Live and Let Die", "year": 1973, "actor": "Roger Moore", "gross": "$825,110,761" },
    { "title": "You Only Live Twice", "year": 1967, "actor": "Sean Connery", "gross": "$756,544,419" },
    { "title": "The Spy Who Loved Me", "year": 1977, "actor": "Roger Moore", "gross": "$692,713,752" },
    { "title": "Casino Royale", "year": 2006, "actor": "Daniel Craig", "gross": "$669,789,482" },
    { "title": "Moonraker", "year": 1979, "actor": "Roger Moore", "gross": "$655,872,400" },
    { "title": "Diamonds Are Forever", "year": 1971, "actor": "Sean Connery", "gross": "$648,514,469" },
    { "title": "Quantum of Solace", "year": 2008, "actor": "Daniel Craig", "gross": "$622,246,378" },
    { "title": "From Russia with Love", "year": 1963, "actor": "Sean Connery", "gross": "$576,277,964" },
    { "title": "Die Another Day", "year": 2002, "actor": "Pierce Brosnan", "gross": "$543,639,638" },
    { "title": "Goldeneye", "year": 1995, "actor": "Pierce Brosnan", "gross": "$529,548,711" },
    { "title": "On Her Majesty's Secret Service", "year": 1969, "actor": "George Lazenby", "gross": "$505,899,782" },
    { "title": "The World is Not Enough", "year": 1999, "actor": "Pierce Brosnan", "gross": "$491,617,153" },
    { "title": "For Your Eyes Only", "year": 1981, "actor": "Roger Moore", "gross": "$486,468,881" },
    { "title": "Tomorrow Never Dies", "year": 1997, "actor": "Pierce Brosnan", "gross": "$478,946,402" },
    { "title": "The Man with the Golden Gun", "year": 1974, "actor": "Roger Moore", "gross": "$448,249,281" },
    { "title": "Dr. No", "year": 1962, "actor": "Sean Connery", "gross": "$440,759,072" },
    { "title": "Octopussy", "year": 1983, "actor": "Roger Moore", "gross": "$426,244,352" },
    { "title": "The Living Daylights", "year": 1987, "actor": "Timothy Dalton", "gross": "$381,088,866" },
    { "title": "A View to a Kill", "year": 1985, "actor": "Roger Moore", "gross": "$321,172,633" },
    { "title": "License to Kill", "year": 1989, "actor": "Timothy Dalton", "gross": "$285,157,191" }
];

// 5. Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.
//const bondTitles = [];

// before
// for (let i = 0; i < bondFilms.length; i++) {
//     bondTitles.push(bondFilms[i].title);
// }


//   &#x1F534; **Commit:** "bondTitles array"


// 6. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
// const oddBonds = []
// for (i=0; i< bondFilms.length; i++)
//     if (bondFilms[i].year % 2 != 0 ){
//         oddBonds.push(bondFilms[i].year)
//     }

// //   &#x1F534; **Commit:** "oddBonds"


// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result. 
//   > _Hint_: To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt()` also.  

//   &#x1F534; **Commit:** "bond films gross"

let grossTotal = 0;
let temp = ""
let temp2 = ''
let noMoreExplitiveCommas = ''
for (let i = 0; i < bondFilms.length; i++){
   temp = bondFilms[i].gross.replace('$', "")
   temp2 = temp.replace(",","")
   noMoreExplitiveCommas = temp2.replace(',','')
   noMoreExplitiveCommas = parseInt(noMoreExplitiveCommas);
   grossTotal += noMoreExplitiveCommas;
}
console.log(grossTotal)
// I figured out that I need to clean up the string before turning it into a number
// I thought the next part would be easy, but Im missing something. 
// Im going to commit and push for now.  Ill take a fresh look at it tommorow (maybe i'll try to clean up the variables too)

// stringNumber = "12345456789";
// stringNumber = parseInt(stringNumber);
// //Number(stringNumber);
// console.log(typeof stringNumber);