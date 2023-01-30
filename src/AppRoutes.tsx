import { ROUTES } from "config/app-routes";
import { Collections, ProductDetails } from "pages";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

// todo: dodaj brakujące routy/page Contcat&About
export const AppRoutes: FC = () => {
  return (
    <main className="page-container">
      <Routes>
        <Route path={ROUTES.COLLECTIONS} element={<Collections />} />
        <Route path={ROUTES.MEN} element={<Collections />} />
        <Route path={ROUTES.WOMAN} element={<Collections />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
      </Routes>
    </main>
  );
};
