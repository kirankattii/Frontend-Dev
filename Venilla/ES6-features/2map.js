// 1. Map Examples
// A Map is an ordered collection of key–value pairs, 
// where keys can be any type (object, primitive, etc.).

// Example 1 — Basic Map usage
/*
const newRoles = new Map()

newRoles.set("name1","kiran")
newRoles.set("name2","Katti")

console.log("Length of map",newRoles.size);
console.log(newRoles.get("name2"))
*/

// Example 2 — Object as key
/*
const user = {id:1}

const map = new Map()

map.set(user,"Active")
console.log(map.get(user)); 
*/


// Example 3 — Iterating over Map

// const fruits = new Map([
//     ["apple","1"],
//     ["banana","2"],
//     ["Grapes","3"],
// ])

// for(const [fruit, qty] of fruits ){
//     console.log(`${fruit}:${qty}`)
//     console.log(fruit,qty);
// }


// Example 4 — Checking keys
/*
const map = new Map()
map.set('x',1)
console.log(map.has("x"))
console.log(map.has("y"))
*/

// Example 5 — Converting Map to Array
/*
const map = new Map([
    ["apple","21"],
    ["ball","22"]
])
const mapArray = [...map]
console.log(mapArray)
*/
