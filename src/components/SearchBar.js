import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constant';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: []
    }

    handleSearch = (value) => {
        const players = nba.searchPlayers(value);
        console.log(players);
        this.setState({
            dataSource: players.map(({playerId, fullName}) => {
                return <Option key={fullName}>
                    <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}/>
                    <span className="player-option-label">{fullName}</span>
                </Option>
            })
        });
    
    }

    onSelect = (playerName) => {
        this.props.loadPlayerInfo(playerName);
    }
     

    render() {
        //window.nba = nba;
        const { dataSource } = this.state;
        return (
          <AutoComplete
            className="search-bar"
            size="large"
            dataSource={dataSource}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="Search NBA Player"
            optionLabelProp="value"
          >
            {/* <Input suffix={<Icon type="search" className="certain-category-icon" />} /> */}

          </AutoComplete>
        );
    }
}