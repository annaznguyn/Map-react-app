function writeData(name, lat, long) {
    const fs = require('fs');

    // read JSON file
    const file = require('../data/data.json');

    let newData = {
        "name": name,
        "latitude": lat,
        "longitude": long
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
}