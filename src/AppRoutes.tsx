import { ROUTES } from "config/app-routes";
import { Collections, ProductDetails, About, Contact } from "pages";
import { Order } from "pages/ProductDetails/types";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

// todo: dodaj brakujące routy/page Contcat&About
export const AppRoutes: FC<{
  onAddOrderClick: (order: Order) => void;
}> = (props) => {
  return (
    <main className="page-container">
      <Routes>
        <Route path={ROUTES.COLLECTIONS} element={<Collections />} />
        <Route path={ROUTES.MEN} element={<Collections />} />
        <Route path={ROUTES.WOMAN} element={<Collections />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />

        <Route
          path={ROUTES.PRODUCT_DETAILS}
          element={<ProductDetails onAddOrderClick={props.onAddOrderClick} />}
        />
      </Routes>
    </main>
  );
};
