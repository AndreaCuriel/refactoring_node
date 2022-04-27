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

    test("3) getExplorersAmonutByMission Método ", () => {
        const NumAmonut = ExplorerController.getExplorersAmonutByMission("node");

        expect(typeof NumAmonut).toBe("number");
    });

    test("4) getValidationInNumber Método ", () => {
        const trick = ExplorerController.getValidationInNumber(3);

        expect(trick).toBe("FIZZ");
    });
});
