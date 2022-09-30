const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
      } else {
        if (!body.includes(breedName)) {
          callback("Breed Not Found");
        } else {
          const data = JSON.parse(body);
          const desc = data[0].description;
          callback(error, desc);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
