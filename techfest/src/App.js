import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import TalentRace from "./Events/TalentRace";
import ArQrHunt from "./Events/ArQrHunt";
import PaperCupRace from "./Events/PaperCupRace";
import WeightBalancing from "./Events/WeightBalancing";
import ValorantGaming from "./Events/ValorantGaming";
import MadAds from "./Events/MadAds";
import Football from "./Events/Football";
import PehchanoKaun from "./Events/PehchanoKaun";
import MakeFromScrap from "./Events/MakeFromScrap";
import TreasureHunt from "./Events/TreasureHunt";
import TeamTechCoorditionGame from "./Events/TeamTechCoorditionGame";
import ProveYourEngg from "./Events/ProveYourEngg";

import { Route, Switch } from "react-router-dom";
import CutTheChase from "./Events/CutTheChase";
import SharkTank from "./Events/SharkTank";
import RelayCode from "./Events/RelayCode";
import PlayWithCodes from "./Events/PlayWithCodes";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/cut-the-chase" component={CutTheChase} />
        <Route exact path="/shark-tank" component={SharkTank} />
        <Route exact path="/relay-code" component={RelayCode} />
        <Route exact path="/play-with-codes" component={PlayWithCodes} />
        <Route exact path="/" component={Home} />
        <Route exact path="/talent-race" component={TalentRace} />
        <Route exact path="/paper-cup-race" component={PaperCupRace} />
        <Route exact path="/ar-qr-hunt" component={ArQrHunt} />
        <Route exact path="/valorant-gaming-event" component={ValorantGaming} />
        <Route exact path="/weight-balancing" component={WeightBalancing} />
        <Route exact path="/football-tic-tac-toe" component={Football} />
        <Route exact path="/pehchano-kon" component={PehchanoKaun} />
        <Route exact path="/make-from-scrap" component={MakeFromScrap} />
        <Route exact path="/tresure-hunt" component={TreasureHunt} />
        <Route exact path="/mad-ads" component={MadAds} />
        <Route exact path="/prove-your-engineering" component={ProveYourEngg} />
        <Route
          exact
          path="/team-tech-coordination-games"
          component={TeamTechCoorditionGame}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
