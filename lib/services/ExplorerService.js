const Reader = require("./../utils/Reader");

class ExplorerService {
  static filterByMission(obj, mission) {
    const explorersInNode = obj.filter(
      (explorer) => explorer.mission === mission
    );
    return explorersInNode;
  }
}

module.exports = ExplorerService;
