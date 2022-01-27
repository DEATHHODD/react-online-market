import React, { useContext } from "react";
import { Context } from "..";
import {Navbar, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Онлайн магазин электронных товаров</NavLink>
                    {
                        user.isAuth 
                        ? 
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button 
                                variant={'outline-light'}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button 
                                className="ms-3" 
                                variant={'outline-light'}  
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    )
})

export default NavBar;