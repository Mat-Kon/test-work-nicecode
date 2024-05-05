import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<p>Main</p>} />
          <Route path="user/:id" element={<p>Detail</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;