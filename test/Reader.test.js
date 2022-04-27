const Reader = require("./../lib/utils/Reader");

describe("Reader test", () => {
  test("1) Reading and getting a objet", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorer = explorers[0].name;
    expect(explorer).toBe("Woopa2");
  });
});
