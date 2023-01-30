import { AppRoutes } from "AppRoutes";
import { Header } from "components/Header/Header";
import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
