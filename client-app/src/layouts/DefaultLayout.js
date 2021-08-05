import React from 'react'
import LeftNav from './LeftNav'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
    Visibility
} from 'semantic-ui-react'

const DefaultLayout = (props) => {
    return (
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}}>
            <LeftNav />
            <Sidebar.Pusher>
                <Segment >
                    <Header as='h3'>Application Content</Header>
                    {props.children}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default DefaultLayout