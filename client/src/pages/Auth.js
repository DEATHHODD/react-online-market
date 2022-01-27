import React from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return(
       <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}} 
       >
           <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                    />
                    <Row className="justify-content-between mt-3">
                        {isLogin ? 
                            <div className="col-md-auto">
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div className="col-md-auto">
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button 
                            className="col-md-auto me-3" 
                            variant="outline-success" 
                        >
                            {isLogin ? 
                                'Войти'
                                :
                                'Регистрация'
                            }
                        </Button>
                    </Row> 
                </Form>
           </Card>
       </Container>
    )
}

export default Auth;