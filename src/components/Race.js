import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Race extends Component {
  buildRaceOptionList(races) {
    const raceOptions = Object.keys(races).map(k => <option value={k} key={k}>{races[k].name}</option>);
    let race = this.props.race;

    if (! race) {
      race = 'random';
      raceOptions.push(<option value="random" key={race}>Random!</option>);
    }

    return (<select name="race" value={race} onChange={this.props.onRaceChange}>
      {raceOptions}
      </select>);
  }

  render() {
    const raceOptions = this.buildRaceOptionList(weightedDataTable);

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

export const weightedDataTable = {
  human:    {weight: 14, name: "Human"},
  elf:      {weight: 2,  name: "Elf"},
  dwarf:    {weight: 1,  name: "Dwarf"},
  halfling: {weight: 1,  name: "Halfling"},
  halfelf:  {weight: 1,  name: "Half Elf"},
  halforc:  {weight: 1,  name: "Half Orc"}
};

Race.propTypes = {
  race: PropTypes.oneOf([null,...Object.keys(weightedDataTable)])
};

Race.defaultProps = {
  race: null
};
