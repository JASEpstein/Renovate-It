import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => (
      <Menu>
        <Menu.Item name='home' active={props.activeItem === 'home'} onClick={props.handleItemClick}>
          Browse
        </Menu.Item>

        <Menu.Item name='submit' active={props.activeItem === 'submit'} onClick={props.handleItemClick}>
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={props.activeItem === 'signup'} onClick={props.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' active={props.activeItem === 'help'} onClick={props.handleItemClick}>
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  
export default Navbar;