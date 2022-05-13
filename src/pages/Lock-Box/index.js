import React from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';
import Post from '../../components/Post';
import { Col, Container, Row, Image, Stack } from 'react-bootstrap';
import { Routes } from 'react-router-dom';
import game from '../../assets/post-img/Lock.svg'
import './index.css'

const LockBox = () => {
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col lg="2">
                        <SideBar />
                    </Col>
                    <Col lg="10" >
                        <Container className='lock-screen'>
                            <Row className='game-page'>
                                <Col xs={12} className="game-page-topics">
                                    <p className='lock'>LOCK-BOX</p>
                                </Col>
                                <Col xs={12} className="game-page-topics">
                                    <Image className='lock-imgs' src={game} />
                                </Col>
                                <Col xs={12} className="game-page-topics">
                                        <p className='game-lands'>COMING SOON</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default LockBox