import React from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react'

export default function Login() {

    const submit = () => {

    }
    return (
        <Grid.Column>
            <Segment>
                <Form>
                    <Form.Group >
                        <Form.Field label="User Name" />
                        <Form.Input icon="user"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field label="Password" />
                        <Form.Input type="password" icon="lock" />
                    </Form.Group>
                    <Form.Button submit={submit}>Login</Form.Button>
                </Form>
            </Segment>
        </Grid.Column>

    )
}