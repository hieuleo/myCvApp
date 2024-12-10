import React from 'react';
import Layout from '../../Component/layout';
import {Row, Col} from 'antd';
import styles from './about.module.css';
import styleRoot from '../../style.module.css';

const AbountPage = () => {
    return(
        <Layout abount>
            <Row className={styles.about}>
                <Col span = {20} offset = {2}>
                    <Row>
                        <Col className={styleRoot.heading} span = {24}>
                            <h1> <span>about</span> me </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.content} xl={12} sm={24}>
                            <h3 className={styles.content1}> <span> name : </span> Nguyen Quoc Hieu </h3>
                            <h3 className={styles.content2}> <span> age : </span> 24 </h3>
                            <h3 className={styles.content3}> <span> qualification : </span> PTIT </h3>
                            <h3 className={styles.content4}> <span> post : </span> front end developer </h3>
                            <h3 className={styles.content5}> <span> language : </span> Vietnamese </h3>
                            <a target="_blank" href="https://www.topcv.vn/xem-cv/UFZUCl1VUFNcClRRUwVRAVUDVgpeXFABV1EFAg4bc4"><button className={styleRoot.btn} type="button"> download CV <i className="fas fa-download"></i> </button></a>
                        </Col>
                        <Col className={styles.counter} xl={12} sm={24}>
                            <Row gutter={[16, 16]}>
                                <Col className={styles.box} lg={11} sm={24}>
                                        <span>1</span>
                                        <h3>years of experience</h3>
                                </Col>
                                <Col className={styles.box} lg={11} sm={24} offset={1}>
                                        <span>+</span>
                                        <h3>happy clients</h3>
                                </Col>
                                <Col className={styles.box} lg={11} sm={24}>
                                        <span>20+</span>
                                        <h3>porject completed</h3>
                                </Col>
                                <Col className={styles.box} lg={11} sm={24} offset={1}>
                                        <span>2+</span>
                                        <h3>programming language</h3>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(AbountPage);