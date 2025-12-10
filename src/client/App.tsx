import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/ListPage";
import { DetailPage } from "./pages/DetailPage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/items/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
