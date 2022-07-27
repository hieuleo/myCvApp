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
                        <Col className={clsx(styles.box, styles.box1)} xxl={11} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2016</span>
                            <h3>Student</h3>
                            <p>Posts and Telecommunications
                                Institute of Technology, Ho Chi
                                Minh City
                                Major: Electronics and Communication technology</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box2)} xxl={11} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2020</span>
                            <h3>network engineer</h3>
                            <p>network engineer at Tri Anh Solutions</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box3)} xxl={11} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2021</span>
                            <h3>network &amp; system administrator</h3>
                            <p>network &amp; system administrator at TPCLOUD</p>
                        </Col>
                        <Col className={clsx(styles.box, styles.box5)} xxl={11} xl={11} lg={23} sm={11} offset={1}>
                            <i className="fas fa-graduation-cap"></i>
                            <span>2021</span>
                            <h3>front end development</h3>
                            <p>work as a front-end developer</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(EducationPage);