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
                    <p>I'm a front-end developer. I was born in Quang Ngai and I live Ho Chi Minh city. I would like to be a Full-stack developer in future. I like E-sports/movies/technology. I want to learn more from everyone. Thank you for being here with me. I hope you will contact me. </p> 
                    <Link className={styleRoot.btn} to={"/myCvApp/AboutPage"}>about me</Link>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(HomePage);