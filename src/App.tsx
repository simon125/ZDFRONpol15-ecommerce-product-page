import { AppRoutes } from "AppRoutes";
import { Header } from "components/Header/Header";
import { FC } from "react";

/**
 * http://localhost:3000/products/283esyxu89328x3x
 */

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
