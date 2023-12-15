import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import infoImage from '~@assets/images/manhattan_info.jpg';
import Column from '~@screens/Home/Info/Column';
import classes from './Info.module.scss';

interface InfoProps {}

const Info: FC<InfoProps> = ({}) => {
	return (
		<section className='section'>
			<Row sm={2} xs={1} lg={3}>
        <Col sm={{span: "12"}} lg={{order: 2}}>
          <img
            className={classes.image}
            src={infoImage}
            alt='Manhattan info'
          />
        </Col>
				<Col>
					<Column
						title={'Events'}
						heading={'Банкеты'}
						onClick={() => {}}
						_class={classes.column}
          >
            <div className={classes.columnContent}>
              <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
              <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
              <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
            </div>
          </Column>
				</Col>
				<Col lg={{order: 3}}>
					<Column
						title={'Tourists'}
						heading={'Туристы'}
						onClick={() => {}}
						_class={classes.column}
          >
            <div className={classes.columnContent}>
              <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
              <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
              <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
            </div>
          </Column>
				</Col>
			</Row>
		</section>
	);
};
export default Info;
