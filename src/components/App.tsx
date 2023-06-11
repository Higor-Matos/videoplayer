import React from "react";
import MediaQuery from "react-responsive";

import ScreenStream from "./ScreenStream";

const App: React.FC = () => {
  return (
    <div className="App">
      <MediaQuery minDeviceWidth={1224}>
        <div>
          <ScreenStream />
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div>
          <ScreenStream />
        </div>
      </MediaQuery>
    </div>
  );
};

export default App;
