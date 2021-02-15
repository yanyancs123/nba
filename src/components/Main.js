import React from 'react';
import { Profile } from './Profile';
import nba from 'nba';
import { DataViewContainer } from './DataViewContainer';
import { SearchBar } from './SearchBar';
import { DEFAULT_PLAYER_INFO } from '../constant';

window.nba = nba;

export class Main extends React.Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.PLAYER_NAME);
    }

    loadPlayerInfo = (playerName) => {
        const { playerId } = nba.findPlayer(playerName);
        fetch("http://localhost:80/getPlayerInfo?id=" + playerId)
        .then(response => response.json())
        .then((response) => {
            const {data} = response;
            let commonPlayerInfo = {};
            data.resultSets[0]['headers'].forEach((element, index, arr) => {
                commonPlayerInfo[element] = data.resultSets[0]['rowSet'][0][index];
            });
            let playerHeadlineStats = {};
            data.resultSets[1]['headers'].forEach((element, index, arr) => {
                playerHeadlineStats[element] = data.resultSets[1]['rowSet'][0][index];
            });
            
            const playerInfo = {
                ...commonPlayerInfo,
                ...playerHeadlineStats
            }
            this.setState({playerInfo});
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.PERSON_ID} />
                </div>
            </div>
        );
    }
}