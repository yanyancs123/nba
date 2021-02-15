import React from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from '../constant';

export class Profile extends React.Component {
    render() {
        const {
            PERSON_ID,
            TEAM_ABBREVIATION,
            PLAYER_NAME,
            TEAM_NAME,
            TEAM_CITY,
            WEIGHT,
            HEIGHT,
            AST,
            PTS,
            REB,
            PIE
        } = this.props.playerInfo;
        return (
            <div className="profile">
                <div className="player-name">
                    {`${PLAYER_NAME}`}
                </div>
                <img src={`${PROFILE_PIC_URL_PREFIX}/${PERSON_ID}.png`} className="profile-pic" />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${TEAM_CITY} ${TEAM_NAME}`}</div>
                </div>
                <img src={`${TEAM_PIC_URL_PREFIX}/${TEAM_ABBREVIATION}_logo.svg`} className="team-logo" />
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{`${HEIGHT}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">WEIGHT</div>
                    <div className="profile-entry-right">{`${WEIGHT}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PTS</div>
                    <div className="profile-entry-right">{`${PTS}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">REB</div>
                    <div className="profile-entry-right">{`${REB}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">AST</div>
                    <div className="profile-entry-right">{`${AST}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${PIE}`}</div>
                </div>
            </div>
        );
    }
}