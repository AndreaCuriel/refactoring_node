const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbussService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

const explorersInNode = ExplorerService.filterByMission(explorers, "node");

const ExplorersLen = ExplorerService.getAmountOfExplorersByMission(
    explorers,
    "node"
);
console.log(ExplorersLen);

const ExplorersNames = ExplorerService.getExplorersUsernamesByMission(
    explorers,
    "node"
);
console.log(ExplorersNames);

const explorersInNodeAndFIZZOrBUZZOrFIZZBUUZZTrick = explorersInNode.map(
    (explorer) => FizzbussService.applyValidationInExplorer(explorer)
);

console.log(explorersInNodeAndFIZZOrBUZZOrFIZZBUUZZTrick);
