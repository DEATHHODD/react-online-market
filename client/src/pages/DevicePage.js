import React from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../assets/star.png"

const DevicePage = () => {
    const device = {id: 1, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`}
    const description = [
        {id:1, title:'Оперативная память', description:'12 гб'},
        {id:2, title:'Камера', description:'100 мп'},
        {id:3, title:'Процессор', description:'Pentium IV'},
        {id:4, title:'Кол-во ядер', description:'4'},
        {id:5, title:'Аккумулятор', description:'2400 mAh' },
    ]
    return(
        
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 
                            className="d-flex align-items-center justify-content-center"
                        >
                            {device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background:`url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize:32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column justify-content-around mt-3 ms-2">
                <h1 className="align-self-start">Характеристики</h1>
                {description.map((info, index) => 
                    <Row style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10, fontSize: 25}} key={info.id}>
                        {info.title} : {info.description}
                    </Row>    
                )}
            </Row>   
        </Container>
    )
}

export default DevicePage;