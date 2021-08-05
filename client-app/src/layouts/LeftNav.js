import React from 'react'
import useToken from '../components/App/useToken'

import {
    Button,
    Menu,
    Sidebar,
} from 'semantic-ui-react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const LeftNav = () => {
    const { token, setToken } = useToken()
    let history = useHistory()

    const handleSignOut = () => {
        setToken('')
        history.push('/')
    }

    return (

        <Sidebar
            as={Menu}
            icon='labeled'
            animation='push'
            inverted
            vertical
            visible
            width='thin'
        >
            <Menu.Item>
                Ecommerce System V1.0
            </Menu.Item>
            <Menu.Item as={Link} to='/dashboard' active={history.location.pathname === '/dashboard'}>
                Dashboard
            </Menu.Item>
            <Menu.Item as={Link} to='/users'  active={history.location.pathname === '/users'}>
                User
            </Menu.Item>
            <Menu.Item as='a'>
                Agent
            </Menu.Item>
            <Menu.Item as='a'>
                Profile
            </Menu.Item>
            <Menu.Item>
                <Button onClick={handleSignOut}>Sign out</Button>
            </Menu.Item>
        </Sidebar>
    )
}

export default LeftNav