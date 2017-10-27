import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import ConnectedCamperList from './modules/campers/ConnectedCamperList'
import { connect } from 'react-redux'

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active href=".">
        Home
      </Menu.Item>
      <Menu.Item as="a">Work</Menu.Item>
      <Menu.Item as="a">Company</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedMenu />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ConnectedCamperList />
      </div>
    )
  }
}

// "state" can be any name and still return the state, but it has to be the same
// on both sides of the lambda function. The connect function connects the state into
// the app component.
export default connect(state => state)(App)
