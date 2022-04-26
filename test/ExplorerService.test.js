const ExplorerService = require("./../lib/services/ExplorerService");

describe("ExplorerService test", () => {
  test("1) test filter of the filterByMission", () => {
    const explorer = [{ mission: "node" }];
    const filterExplorer = ExplorerService.filterByMission(explorer, "node");

    expect(filterExplorer.length).toBe(1);
  });

  test("2) test method of the getAmountOfExplorersByMission", () => {
    const explorer = [{ mission: "node" }, { mission: "node" }];
    const filterExplorer = ExplorerService.getAmountOfExplorersByMission(
      explorer,
      "node"
    );

    expect(filterExplorer).toBe(2);
  });

  test("3) test method of the getExplorersUsernamesByMission", () => {
    const explorer = [
      { mission: "node", githubUsername: "Andrea" },
      { mission: "node", githubUsername: "Carlo" },
    ];
    const filterExplorer = ExplorerService.getExplorersUsernamesByMission(
      explorer,
      "node"
    );

    expect(filterExplorer[0]).toBe("Andrea1");
  });
});
