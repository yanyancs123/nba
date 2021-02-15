import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import { Radio, Row, Col, Switch, Slider, InputNumber } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount:2,
        displayTooltip: true,
        chartType: "hexbin"
    }

    onMinCountChange = (value) => {
        const cleanValue = Number(value) ? value: this.state.inputValue;
        this.setState({
          minCount: value
        });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    }
     
    onTooltipChange = (displayTooltip) => {
        this.setState({ displayTooltip });
    }

    debounce = (callback, delay) => {
        let timer;
        let context = this;
        return function(val) {
            clearTimeout(timer);
            timer = setTimeout(function() {
                callback.call(context, val);
            }, delay);
        };
    }
     
    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount} displayTooltip={this.state.displayTooltip} chartType={this.state.chartType}/>
                <div className="filters">
                    {
                        this.state.chartType === "hexbin" ? (
                            <CountSlider value={this.state.minCount} onMinCountChange={this.debounce(this.onMinCountChange, 500)}/>

                        ) : null
                    }                  
                    <Row>
                        <Col span={9}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                            <Radio value="hexbin">Hexbin</Radio>
                            <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={4}>
                            <Switch
                            checkedChildren="On"
                            unCheckedChildren="Off"
                            onChange={this.onTooltipChange}
                            defaultChecked />
                        </Col>
                    </Row>
                </div>

            </div>
        ); 
    }
}