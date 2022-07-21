// creating nested js objects
const myDetails = {
    "name": {
         "firstName": "Dilli",
         "MiddleName": "Hang",
         "Surname": "Rai"
     },
    "description": {
        "education": {
            "school level": "passed",
            "higher secondary": "passed",
            "bachelor": "running"
        },

        "gender": "male"
    }
}

// accessing obj with dot notation
myDetails.name;
myDetails.name.firstName;
myDetails.description;

// accessing nested obj
myDetails.description.education["school level"];
myDetails.name["firstName"];