const ExplorerService = require("./../lib/services/ExplorerService");

describe("ExplorerService test", () => {
  test("2) test filter of the filterByMission", () => {
    const explorer = [{ mission: "node" }];
    const filterExplorer = ExplorerService.filterByMission(explorer, "node");

    expect(filterExplorer.length).toBe(1);
  });

  test("1) test method of the getAmountOfExplorersByMission", () => {
    const explorer = [{ mission: "node" }, { mission: "node" }];
    const filterExplorer = ExplorerService.getAmountOfExplorersByMission(
      explorer,
      "node"
    );

    expect(filterExplorer).toBe(2);
  });
});
