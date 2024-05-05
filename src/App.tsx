import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import './styles/main.scss';
import DetailUser from "./components/DetailUser";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<p>Main</p>} />
          <Route path="user/:id" element={<DetailUser />} />
          <Route path="user/:id/:category" element={<DetailUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;