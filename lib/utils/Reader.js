const fs = require("fs");

class Reader {
  static readJsonFile(explorers) {
    const rawdata = fs.readFileSync(explorers);
    return JSON.parse(rawdata);
  }
}

module.exports = Reader;
