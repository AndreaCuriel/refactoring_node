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

  static getFizzBuzzBot(bot) {
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      const numberToApplyFb = parseInt(msg.text);

      if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick =
          ExplorerController.getValidationInNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        return bot.sendMessage(chatId, responseBot);
      } else {
        return bot.sendMessage(chatId, "Envía un número válido");
      }
    });
  }
}

module.exports = ExplorerController;
