const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbussService = require("./../services/FizzbuzzService");

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, mission);
    return explorersInNode;
  }

  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersNames = ExplorerService.getExplorersUsernamesByMission(
      explorers,
      mission
    );
    return explorersNames;
  }

  static getExplorersAmonutByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorersAmonut = ExplorerService.getAmountOfExplorersByMission(
      explorers,
      mission
    );
    return explorersAmonut;
  }

  static getValidationInNumber(numberScore) {
    const number = FizzbussService.applyValidationInNumber(numberScore);
    return number;
  }
}

module.exports = ExplorerController;
