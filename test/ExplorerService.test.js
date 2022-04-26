const ExplorerService = require("./../lib/services/ExplorerService");

describe("ExplorerService test", () => {
  test("1) test filter of the filterByMission", () => {
    const explorer = [{ mission: "node" }];
    const filterExplorer = ExplorerService.filterByMission(explorer, "node");

    expect(filterExplorer.length).toBe(2);
  });
});
