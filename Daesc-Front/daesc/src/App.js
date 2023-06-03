import React from "react";
import Routes from "./routes/routes";

import { AuthProvider } from "./contexts/auth";

const App = () => {
  return (
    <div>

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </div>
  );
};

export default App;

