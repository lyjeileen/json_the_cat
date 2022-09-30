const args = process.argv.slice(2);
const request = require("request");
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    }

    if (!body.includes(args[0])) {
      console.log("Breed Not Found");
      process.exit();
    }

    const data = JSON.parse(body);
    console.log(data[0]);
  }
);
