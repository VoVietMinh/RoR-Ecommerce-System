import React from 'react';
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import DefaultLayout from '../../layouts/DefaultLayout'
import UserList from '../User/UserList'
import { Redirect } from 'react-router-dom'


export default function buildPages() {

    const withLayout = (component, layout) => {
        const Layout = layout || DefaultLayout
        return (
            <Layout>
                {component}
            </Layout>
        )
    }
    return [
        {
            path: '/dashboard',
            key: 'dashboard',
            render: (props) => withLayout(<Dashboard {...props} />)
        },
        {
            path: '/preferences',
            key: 'preferences',
            render: (props) => withLayout(<Preferences {...props} />)
        },
        {
            path: '/users',
            key: 'users',
            render: (props) => withLayout(<UserList {...props} />)
        },
        {
            key: 'default',
            render: () => <Redirect to='/dashboard' />
        }
    ]
}