import { FC } from "react";
import classes from "./Footer.module.scss";

interface FooterProps {
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={classes.footer}>
      <p>Copyright © 2022. Все права защищены.</p>
      <p>
        Design by{" "}
        <a
          href="https://d-e-n.ru/"
          target="_blank"
        >
          d-e-n.ru
        </a>
      </p>
    </footer>
  );
};
export default Footer;
