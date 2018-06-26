import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Input, Menu, Segment } from 'semantic-ui-react'

class App extends Component {
    state = { activeItem: 'home' };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
      const { activeItem } = this.state;

    return (
        <div>
            <Menu pointing>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                    name='menu 1'
                    active={activeItem === 'menu 1'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='menu 2'
                    active={activeItem === 'menu 2'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='menu 3'
                    active={activeItem === 'menu 3'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <Segment>
                <p> DTB Homepage</p>
            </Segment>
        </div>
    );
  }
}

export default App;
