const ExplorerController = require("../lib/controllers/ExplorerController");

describe("ExplorerController test", () => {
  test("1) Método getExplorersByMission", () => {
    const List = ExplorerController.getExplorersByMission("node");

    expect(List[0].name).toBe("Woopa1");
  });

  test("2) getExplorersUsernamesByMission Método ", () => {
    const ListNames = ExplorerController.getExplorersUsernamesByMission("node");

    expect(ListNames[0]).toBe("ajolonauta1");
  });
});
