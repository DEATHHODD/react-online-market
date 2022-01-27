import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateDevice from "../modals/CreateDevice";
import CreateType from "../modals/CreateType";
import CreateBrand from "../modals/CreateBrand";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return(
        <Container className="d-flex flex-column">
            <Button
            onClick={() => setTypeVisible(true)} 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            >
                Добавить тип
            </Button>
            <Button
            onClick={() => setBrandVisible(true)} 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            >
                Добавить бренд
            </Button>
            <Button
            onClick={() => setDeviceVisible(true)} 
            variant={"outline-dark"} 
            className="mt-4 p-2"
            >
                Добавить устройство
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        </Container>
    )
}

export default Admin;