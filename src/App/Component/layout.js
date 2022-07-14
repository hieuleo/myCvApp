import React, { useState, useRef } from 'react';
import { Col, Row } from 'antd';
import styles from './layout.module.css';
import './layout.css';
import { clsx } from 'clsx';
import avatar from '../img/avatar.jpg';
import { Link } from "react-router-dom";

const Layout = ({children ,home ,abount ,education ,portfolio ,contact}) => {
    const [buttonMenu, setButtonMenu] = useState(true);
    let [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const changeMenu = () => {
        setButtonMenu(!buttonMenu)
    }
    window.addEventListener('resize', function(event) {
        setWidthScreen(window.innerWidth);
        console.log(widthScreen)
    }, true);

    return(
            <Row  className={clsx(styles.layout)}>
                {/* header// navbar */}
                <Col style={widthScreen >= 992 || !buttonMenu ?{left: "0%"}:{left: "-120%"}} className={clsx(styles.header)} xl={6} lg={10}>
                    <Row className={clsx(styles.user)}>
                        <Col span={24}>
                            <img src={`${avatar}`} className={clsx(styles.avatar)} alt ="avatar"/>
                            <h3 className={clsx(styles.name)}> Nguyễn Quốc Hiếu</h3>
                            <p className={clsx(styles.post)}> front end developer </p>

                        </Col>
                    </Row>
                    <Row className={clsx(styles.navbar)}>
                        <Col span={24} >
                            <nav>
                                <ul className={clsx(styles.list)}>
                                    <li>
                                        <p className={clsx(styles.item, {[styles.active]: home})} ><Link className={styles.link} to={"/myCvApp"}>Home</Link></p></li>
                                    <li>
                                        <p className={clsx(styles.item, {[styles.active]: abount})}><Link className={styles.link} to={"/AboutPage"}>About</Link></p></li>
                                    <li>
                                        <p className={clsx(styles.item, {[styles.active]: education})}><Link className={styles.link} to={"/EducationPage"}>Education</Link></p></li>
                                    <li>
                                        <p className={clsx(styles.item, {[styles.active]: portfolio})}><Link className={styles.link} to={"/ProtfolioPage"}>Portfolio</Link></p></li>
                                    <li>
                                        <p className={clsx(styles.item, {[styles.active]: contact})}><Link className={styles.link} to={"/ContactPage"}>Contact</Link></p></li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Col>
                {/* content */}
                <Col style={widthScreen >= 992 || !buttonMenu ?{left: "0%"}:{left: "-120%"}} xl={6} lg={10}>
                </Col>
                <Col xl={18} lg={14} xs={24}>
                    {children}
                </Col>
                {buttonMenu?<i className={clsx(styles.menu,"fa-solid"," fa-bars ")}onClick={()=>{changeMenu()}}></i>: <i className={clsx(styles.menu,"fa-solid"," fa-xmark ")}onClick={()=>{changeMenu()}}></i>}
            </Row>
        )
};

export default React.memo(Layout);