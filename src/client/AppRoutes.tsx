import { Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/ListPage";
import { DetailPage } from "./pages/DetailPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/items/:id" element={<DetailPage />} />
    </Routes>
  );
};
