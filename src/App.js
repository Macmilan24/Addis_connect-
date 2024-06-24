import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobe,
  faLightbulb,
  faUsers,
  faChartBar,
  faNewspaper,
  faChartLine,
  faStar,
  faTrophy,
  faComment,
  faUserSecret,
  faBell,
  faPaintBrush,
  faLanguage,
  faPlug,
  faProjectDiagram,
  faUtensils,
  faTrain,
  faHome,
  faExclamationTriangle,
  faBriefcase,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./container/navBar/NavBar";
import React from "react";
import WelcomeSection from "./container/WelcomeSections/WelcomeSections";

// Add all the icons to the library
library.add(
  faGlobe,
  faLightbulb,
  faUsers,
  faChartBar,
  faNewspaper,
  faChartLine,
  faStar,
  faTrophy,
  faComment,
  faUserSecret,
  faBell,
  faPaintBrush,
  faLanguage,
  faPlug,
  faProjectDiagram,
  faUtensils,
  faTrain,
  faHome,
  faExclamationTriangle,
  faBriefcase,
  faEuroSign
);

export default function App() {
  return (
    <div className="">
      <NavBar />
      <WelcomeSection />
    </div>
  );
}
