const fs = require('fs');

// read JSON file
const file = require('../data/data.json');

let newData = {
    "name": "University of Sydney",
    "latitude": -33.88768206154317,
    "longitude": 151.18669575105514
};

// add new data to file object
file.push(newData);

// write into the file, using 4 for pretty-print
fs.writeFile("../data/data.json", JSON.stringify(file, null, 4),
    err => {
        if (err)
            throw err;
        else   
            console.log("Hehehehe");
    });