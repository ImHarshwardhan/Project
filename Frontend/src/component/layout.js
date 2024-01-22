import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Top Menu */}
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item as="a" header>
            <Icon name="diamond" color="yellow" />
            Your Brand
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a"><Icon name="home" href="/"/>Home</Menu.Item>
            <Menu.Item as="a"><Icon name="info" />About</Menu.Item>
            <Menu.Item as="a"><Icon name="user circle" />Services</Menu.Item>
            <Menu.Item as="a"><Icon name="phone" />Contact</Menu.Item>
            <Menu.Item as="a">
              <Icon name="sign-in" />
              Sign In
            </Menu.Item>
            <Menu.Item as="a" primary>
            <Icon name="signup" />
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>

      {/* Page Content */}
      <Container style={{ marginTop: '5em' }}>
        {children}
      </Container>

      {/* Footer (Add your footer content here) */}
      <footer style={{ marginTop: '2em', padding: '1em', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
        © 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;