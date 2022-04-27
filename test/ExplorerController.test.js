const ExplorerController = require("../lib/controllers/ExplorerController");

describe("ExplorerController test", () => {
  test("1) Método getExplorersByMission", () => {
    const List = ExplorerController.getExplorersByMission("node");

    expect(List[0].name).toBe("Woopa2");
  });
});
