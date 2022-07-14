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
                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed mafnam tenetur!!</p> 
                    <Link className={styleRoot.btn} to={"/AboutPage"}>about me</Link>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(HomePage);