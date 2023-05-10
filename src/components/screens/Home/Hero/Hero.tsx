import cn from "classnames";
import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import hero_bg from "~@assets/images/hero_bg.jpg";
import Events from "~@screens/Home/Hero/Events";
import classes from "./Hero.module.scss";

interface HeroProps {
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className='section' style={{ paddingTop: "3.3em" }}>
      <Row className='gap-4 gap-lg-0'>
        <Col lg={8}>
          <div
            className={classes.hero}
            style={{ backgroundImage: `url(${hero_bg})` }}
          >
            <span className={cn("section__title")}>Since 1996</span>
            <h1 className={cn(classes.heading, "section__heading")}>True. Fontanka. Underground.</h1>
          </div>
        </Col>
        <Col lg={4} style={{ maxHeight: "100%" }}>
          <Events />
        </Col>
      </Row>
    </section>
  );
};
export default Hero;
