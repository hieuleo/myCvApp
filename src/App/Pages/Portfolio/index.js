import React from 'react';
import Layout from '../../Component/layout';
import styles from './protfolio.module.css';
import styleRoot from '../../style.module.css';
import {Row, Col, Image } from 'antd';
import { clsx } from 'clsx'; 
import './style.css';

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
                                <Col className={clsx(styles.box,styles.box2)} xl={12}>
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
                                <Col className={clsx(styles.box,styles.box3)} xl={12}>
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
                                <Col className={clsx(styles.box,styles.box4)} xl={12}>
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
                                <Col className={clsx(styles.box,styles.box5)} xl={12}>
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