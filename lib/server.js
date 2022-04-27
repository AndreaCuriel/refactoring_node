const ExplorerController = require("./controllers/ExplorerController");
const express = require("express"); //Inicializando express
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorerinMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorerinMission);
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorerNamesinMission =
    ExplorerController.getExplorersUsernamesByMission(mission);
  response.json(explorerNamesinMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorerAmonutsinMission =
    ExplorerController.getExplorersAmonutByMission(mission);
  response.json({
    mission: request.params.mission,
    quantity: explorerAmonutsinMission,
  });
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
  const respTrick = request.params.score;
  const respTrickGet = ExplorerController.getValidationInNumber(respTrick);
  response.json({ score: respTrick, trick: respTrickGet });
});

app.listen(port, () => {
  //Inicializando el server
  console.log(`FizzBuzz API in localhost:${port}`);
});
