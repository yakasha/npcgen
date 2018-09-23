import React, { Component } from 'react';
import PropTypes from 'prop-types';
import wtr from '../helpers/WeightedTableRoller.js';

export class Race extends Component {
  constructor(props) {
    super(props);
    this.state   = props;
    this.racewtr = new wtr(raceTable);
  }

  buildRaceOptionList(races) {
    const raceOptions = Object.keys(races).map(k => <option value={k} key={k}>{races[k].name}</option>);
    return (<select name="race" value={this.props.race} onChange={this.props.onRaceChange}>
      {raceOptions}
      </select>);
  }

  render() {
    const raceOptions = this.buildRaceOptionList(raceTable);

    return (
      <div className="npcblock">
        <div className="fields">
          <div><label htmlFor="race">Race</label></div>
        </div>
        <div className="data">
          <div>
      {raceOptions}
          </div>
        </div>
      </div>
    );
  }
}

export const raceTable = {
  human:    {weight: 14, name: "Human"},
  elf:      {weight: 2,  name: "Elf"},
  dwarf:    {weight: 1,  name: "Dwarf"},
  halfling: {weight: 1,  name: "Halfling"},
  halfelf:  {weight: 1,  name: "Half Elf"},
  halforc:  {weight: 1,  name: "Half Orc"},
  random:   {weight: 0,  name: "Random!"}
};

Race.propTypes = {
  race: PropTypes.oneOf(Object.keys(raceTable))
};

Race.defaultProps = {
  race: 'random'
};
