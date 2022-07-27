import React from 'react';
import Layout from '../../Component/layout';
import styles from './home.module.css';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import styleRoot from '../../style.module.css';

const HomePage = () => {
    return(
        <Layout home>
            <Row className={styles.home}>
                <Col span = {20} offset = {2}>
                    <h3>HI THERE !!!</h3>
                    <h1>I'M <span>Hieu Nguyen</span></h1>
                    <p>Hieu passionate about writing web apps that span consumer productivity software to mission-critical financial trading platforms. He has extensive knowledge of front-end JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React and Redux. He always wants to learn a lot from everyone</p> 
                    <Link className={styleRoot.btn} to={"/myCvApp/AboutPage"}>about me</Link>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(HomePage);