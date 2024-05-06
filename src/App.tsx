import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import './styles/main.scss';
import DetailUser from "./components/DetailUser";
import UserPage from "./components/UserPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DetailUser />} />
          <Route path="user/:id" element={<DetailUser />}>
            <Route path=":category" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;