import React from 'react';
import Layout from '../../Component/layout';
import styles from './protfolio.module.css';
import styleRoot from '../../style.module.css';
import {Row, Col, Image } from 'antd';
import { clsx } from 'clsx'; 
import './style.css';
import project1 from '../../img/meal.png';
import project2 from '../../img/DbMovie.png';
import project3 from '../../img/travel.png';
import project4 from '../../img/music.png';
import project5 from '../../img/pokemon.png';
const ProtfolioPage = () => {
    return(
        <Layout portfolio>
            <Row className={clsx(styles.portfolio)} >
                <Col span={20} offset={2}>
                    <Row>
                        <Col className={styleRoot.heading} span = {24}>
                            <h1> My <span>protfolio</span> </h1>
                        </Col>
                    </Row>
                    <Row className={styles.list}>
                        <Col span = {18} offset={3}>
                            <Row gutter={[52, 52]}>
                                <Col className={clsx(styles.box,styles.box1)} xl={12}>
                                    <div className={styles.headingBox}>DiscoverMeals</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/DiscoverMeals/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://github.com/hieuleo/DiscoverMeals'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: React, Redux, antd, Scss, persist...</p>
                                    </div>
                                    <Image
                                        src={`${project1}`}
                                    />
                                </Col>
                                <Col className={clsx(styles.box,styles.box2)} xl={12}>
                                    <div className={styles.headingBox}>DB Movie</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/react_DbMovie/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://github.com/hieuleo/react_DbMovie'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: Html/Css, Reactjs, Hook, antd...</p>
                                    </div>
                                    <Image
                                        src={`${project2}`}
                                    />
                                </Col>
                                <Col className={clsx(styles.box,styles.box3)} xl={12}>
                                    <div className={styles.headingBox}>Travel App</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/Travel/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://github.com/hieuleo/Travel'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: JavaScript, Html, Css</p>
                                    </div>
                                    <Image
                                        src={`${project3}`}
                                    />
                                </Col>
                                <Col className={clsx(styles.box,styles.box4)} xl={12}>
                                    <div className={styles.headingBox}>Heading</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/PlayMusic/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://github.com/hieuleo/PlayMusic'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: JavaScript, Html, Css</p>
                                    </div>
                                    <Image
                                        src={`${project4}`}
                                    />
                                </Col>
                                <Col className={clsx(styles.box,styles.box5)} xl={12}>
                                    <div className={styles.headingBox}>Pokemon</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/pokemon/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://github.com/hieuleo/pokemon'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: TypeScript, ReactJs</p>
                                    </div>
                                    <Image
                                        src={project5}
                                    />
                                </Col>
                                <Col className={clsx(styles.box,styles.box6)} xl={12}>
                                    <div className={styles.headingBox}>Heading</div>
                                    <div className={styles.boxShadow}>
                                        <a className={styles.link} href={'https://hieuleo.github.io/Travel/'} target="_blank" rel="noreferrer" >
                                            view Pages
                                            <i className={clsx(styles.icons,"fa-solid","fa-file")}></i>    
                                        </a>
                                        <a className={styles.link} href={'https://hieuleo.github.io/Travel/'} target="_blank" rel="noreferrer" >
                                            view Source
                                            <i className={clsx(styles.icons,"fa-solid","fa-eye")}></i>
                                        </a>
                                        <p className={styles.dec}>description: JavaScript, Html, Css</p>
                                    </div>
                                    <Image
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
};

export default React.memo(ProtfolioPage);