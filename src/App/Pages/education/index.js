import React from 'react';
import Layout from '../../Component/layout';
import { Row, Col} from 'antd';
import styles from './education.module.css';
import styleRoot from '../../style.module.css';
import { clsx } from 'clsx'; 

const EducationPage = () => {
    return(
        <Layout education>
            <Row className={styles.education}>
                <Col span={20} offset = {2}>
                    <Row>
                        <Col className={styleRoot.heading} span = {24}>
                            <h1> My <span>Education</span> </h1>
                        </Col>
                    </Row>
                    <Row gutter={[16, 24]} className={clsx(styles.counter)}>
                        <Col className={clsx(styles.box, styles.box1)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box2)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box3)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box4)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box5)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box6)} xxl={7} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>front end development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(EducationPage);