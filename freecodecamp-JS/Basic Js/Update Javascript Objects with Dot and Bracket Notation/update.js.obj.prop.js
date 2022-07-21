// setup of js objects
const myProject = {
    "name": "Subha",
    "date": "2 July 2022",
    "time": 1900,
    "teams": 5,
    "raining": false,
    "members": ["yogesh", "dilli"]
};

// accessing obj properties
myProject.name;
myProject.members[0];
myProject["teams"];


// updating obj properties
myProject.raining = true;
console.log(myProject.raining); // should be "raining": true
myProject["name"] = "Subha Aarambha";
console.log(myProject.name);