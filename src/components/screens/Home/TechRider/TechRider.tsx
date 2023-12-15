import {FC} from "react";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "~@ui/SectionHeading";
import List from "~@screens/Home/TechRider/List";
import SoundEngineers from "~@screens/Home/TechRider/SoundEngineers";


interface TechRiderProps {

}

const TechRider: FC<TechRiderProps> = ({}) => {
    return (
        <section>
          <SectionHeading title={'party'} heading={'техрайдер'} />
          <Row>
            <Col>
              <List/>
            </Col>
            <Col>
              <SoundEngineers/>
            </Col>
          </Row>
        </section>
    )
}
export default TechRider