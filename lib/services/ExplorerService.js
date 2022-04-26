const Reader = require("./../utils/Reader");

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
}

module.exports = ExplorerService;
