import { ROUTES } from "config/app-routes";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export const Navigation: FC = () => {
  return (
    <nav className={classes.container}>
      <NavLink className={classes.navLink} to={ROUTES.COLLECTIONS}>
        Collections
      </NavLink>
      <NavLink className={classes.navLink} to={ROUTES.MEN}>
        Men
      </NavLink>
      <NavLink className={classes.navLink} to={ROUTES.WOMAN}>
        Women
      </NavLink>
      <NavLink className={classes.navLink} to={ROUTES.ABOUT}>
        About
      </NavLink>
      <NavLink className={classes.navLink} to={ROUTES.CONTACT}>
        Contact
      </NavLink>
    </nav>
  );
};
