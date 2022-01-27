import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import star from "../assets/star.png"
import { DEVICE_ROUTE } from "../utils/consts";



const DeviceItem = observer(({device}) => {
    const history = useHistory()
    return(
        <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="mt-3" style={{width:170, cursor:'pointer'}} border={"lightgray"}>
                <Image width={150} height={150} src={device.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div className="text-black-50 ms-2">
                        item
                    </div>
                    <div className="me-2">
                        {device.rating}
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div className="ms-2">{device.name}</div>
            </Card>
        </Col>  
    )
})

export default DeviceItem;