const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbussService = require("./../services/FizzbuzzService");

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, mission);
    return explorersInNode;
  }
}

module.exports = ExplorerController;
