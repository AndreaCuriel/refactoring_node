class ExplorerService {
    static filterByMission(obj, mission) {
        const explorersInNode = obj.filter(
            (explorer) => explorer.mission === mission
        );
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(obj, mission) {
        const explorersInNode = obj.filter(
            (explorer) => explorer.mission === mission
        );
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(obj, mission) {
        const explorersInNode = obj.filter(
            (explorer) => explorer.mission === mission
        );
        const explorersNameList = explorersInNode.map(
            (nameExplorer) => nameExplorer.githubUsername
        );
        return explorersNameList;
    }
}

module.exports = ExplorerService;
