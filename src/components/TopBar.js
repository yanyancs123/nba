import React from 'react';
import App from './App';
import logo from '../assets/images/logo-nba.svg';

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        );
    }
}

