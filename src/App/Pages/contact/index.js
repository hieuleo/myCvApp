import React from 'react';
import Layout from '../../Component/layout';
import styles from './contact.module.css';
import styleRoot from '../../style.module.css';
import { clsx } from 'clsx'; 
import { Row, Col} from 'antd';

const ContactPage = () => {
    return(
        <Layout contact>
            <Row className={styles.contact}>
                <Col span={20} offset={2}>
                    <Row>
                        <Col className={styleRoot.heading} span={24}>
                            <h1><span>contact</span> me </h1>
                        </Col>
                    </Row>
                    <Row className={clsx(styles.content)}>
                        <Col xl={12} sm={24}>
                            <h3 className={clsx(styles.title)}>Contact info</h3>
                            <div className={styles.info}>
                                <h3> <i className={clsx("fas","fa-envelope")}></i> nguyenquochieu617@gmail.com </h3>
                                <h3> <i className={clsx("fas","fa-phone")}></i> +84-038-442-7799 </h3>
                                <h3><i className={clsx("fas","fa-phone")}></i>  +038-442-7799 (zalo) </h3>
                                <h3> <i className={clsx("fas","fa-map-marker-alt")}></i> Ho Chi Minh City, Vietnam - 008428. </h3>
                            </div>
                            <div className={clsx(styles.icons)}>
                                <a target="_blank" className={clsx(styles.link)} href="https://www.facebook.com/leonatdodvensi/">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a target="_blank" className={clsx(styles.link)} href="https://github.com/hieuleo">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </Col>
                        <Col xl={12} sm={24}>
                            <form action="" className={clsx(styles.form)}>
                                <input type="text" placeholder="name" className={clsx(styleRoot.box, styles.box)}/>
                                <input type="email" placeholder="email" className={clsx(styleRoot.box, styles.box)}/>
                                <input type="text" placeholder="project" className={clsx(styleRoot.box, styles.box)}/>
                                <textarea name="" id="" rows="6" className={clsx(styleRoot.box, styles.box)} placeholder="message"></textarea>
                                <button disabled type="submit" className={clsx(styleRoot.btn,styles.btn)}> send <i className="fas fa-paper-plane"></i> </button>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}

export default React.memo(ContactPage);