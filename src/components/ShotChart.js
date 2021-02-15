import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';
// import { data } from "./playershotchart";


window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

export class ShotChart extends React.Component {
 static propTypes = {
   playerId: PropTypes.number.isRequired,
   minCount: PropTypes.number.isRequired,
   chartType: PropTypes.string.isRequired,
   displayTooltip: PropTypes.bool.isRequired
 }

 componentDidUpdate() {
    fetch("http://localhost:80/getShotChart?id=" + this.props.playerId)
    .then(response => response.json())
    .then(result => {
        let { data } = result;
        let response = data['resultSets'];
        const final_shots = response[0]['rowSet'].map(shot => ({
            x: (shot[17] + 250) / 10,
            y: (shot[18] + 50) / 10,
            action_type: shot[11],
            shot_distance: shot[16],
            shot_made_flag: shot[20],
        }));

        const courtSelection = d3.select("#shot-chart");
        courtSelection.html('');
        const chart_court = court().width(500);
        const chart_shots = shots().shotRenderThreshold(this.props.minCount).displayToolTips(this.props.displayTooltip).displayType(this.props.chartType);
        courtSelection.call(chart_court);
        courtSelection.datum(final_shots).call(chart_shots);
    }).catch(err => {
        console.log(err);
    });
 }

 render() {
   return (
       <div id="shot-chart"></div>
   );
 }
}
