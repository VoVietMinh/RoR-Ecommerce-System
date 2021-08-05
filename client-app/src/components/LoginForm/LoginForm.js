import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types';


const LoginForm = ({ setToken }) => {
    const [username, setUserName] = useState('admin@demo')
    const [password, setPassword] = useState('b')

    const handleSubmit = async e => {
        const token = await loginUser({
          email: username,
          password
        });
        setToken(token);
      }

    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Log-in to E-commerce system -
                Create Website Automatically
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={username} onChange={e => setUserName(e.target.value)}/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                Admin account: admin@demo/b
            </Message>
            <Message>
                Agent account: agent@demo/b
            </Message>
        </Grid.Column>
    </Grid>
    )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}

async function loginUser(credentials) {
    return fetch('http://localhost:3333/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default LoginForm
