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
      const data = msg.text;
      const numData = parseInt(data);

      if (!isNaN(numData)) {
        return ExplorerController.getFizzBuzzBot(chatId, bot, numData);
      } else {
        return ExplorerController.getUsernameBot(chatId, bot, data);
      }
    });
  }

  static getFizzBuzzBot(chatId, bot, numData) {
    const fizzbuzzTrick = ExplorerController.getValidationInNumber(numData);
    const responseBot = `Tu número es: ${numData}. Validación: ${fizzbuzzTrick}`;
    return bot.sendMessage(chatId, responseBot);
  }

  static getUsernameBot(chatId, bot, dataChat) {
    const data = dataChat.toLowerCase();

    if (data === "node") {
      const username = ExplorerController.getExplorersUsernamesByMission(data);
      const responseBot = `La mision es Node. Validación: ${username}`;
      return bot.sendMessage(chatId, responseBot);
    } else if (data === "java") {
      const username = ExplorerController.getExplorersUsernamesByMission(data);
      const responseBot = `La mision es Java. Validación: ${username}`;
      return bot.sendMessage(chatId, responseBot);
    } else {
      return bot.sendMessage(chatId, `No se encontro la missión ${data}`);
    }
  }
}

module.exports = ExplorerController;
