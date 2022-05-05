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

  static startbot(bot) {
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const data = parseInt(msg.text);

      if (!isNaN(data)) {
        return ExplorerController.getFizzBuzzBot(chatId, bot, data);
      } else {
        return ExplorerController.getUsernameBot(chatId, bot, data);
      }
    });
  }

  static getFizzBuzzBot(chatId, bot, data) {
    const fizzbuzzTrick = ExplorerController.getValidationInNumber(data);
    const responseBot = `Tu número es: ${data}. Validación: ${fizzbuzzTrick}`;
    return bot.sendMessage(chatId, responseBot);
  }

  static getUsernameBot(chatId, bot, data) {
    bot.sendMessage(chatId, "1 node, 2 java");
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const data = parseInt(msg.text);

      if (data === "node") {
        const username =
          ExplorerController.getExplorersUsernamesByMission(data);
        const responseBot = `La mision es Node. Validación: ${username}`;
        return bot.sendMessage(chatId, responseBot);
      } else {
        return bot.sendMessage(chatId, `entramos ${data}`);
      }
    });
  }
}

module.exports = ExplorerController;
