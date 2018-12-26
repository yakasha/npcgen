import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleNpc.css';
import Option from './Option.js';
/* import {Race,weightedDataTable as RaceData} from './Race.js'; */
import wtr from '../logic/WeightedTableRoller.js';

export class SimpleNpc extends Component {
  constructor(props) {
    super(props);
    this.state = {race: this.props.race, archetype: this.props.archetype};
    this.handleArchetypeChange = this.handleArchetypeChange.bind(this);
    this.handleRaceChange      = this.handleRaceChange.bind(this);
  }

  buildArchetypeOptionList(archetypes) {
    const archetypeOptions = Object.keys(archetypes).map(k => <option value={k} key={k}>{archetypes[k]}</option>);

    return (<select name="archetype" value={this.props.archetype} onChange={this.handleArchetypeChange}>
      {archetypeOptions}
      </select>);
  }

  handleRaceChange(e) {
    this.setState({race: e.target.value});
  }

  handleArchetypeChange(e) {
    this.setState({archetype: e.target.value});
  }

  getRandomizer(weightedTable) {
    return new wtr(weightedTable);
  }

  render() {
    const race      = this.state.race;
    const archetype = this.state.archetype;

    return (
      <div>
        <Option onChange={this.handleArchetypeChange} choice={archetype} name="archetype" label="Archetype" wdt={ArchetypeData} />
        <Option onChange={this.handleRaceChange} choice={race} name="race" label="Race" wdt={RaceData} />
      </div>
    );
  }
}

export const RaceData = {
  human:    {weight: 14, name: "Human"},
  elf:      {weight: 2,  name: "Elf"},
  dwarf:    {weight: 1,  name: "Dwarf"},
  halfling: {weight: 1,  name: "Halfling"},
  halfelf:  {weight: 1,  name: "Half Elf"},
  halforc:  {weight: 1,  name: "Half Orc"}
};

export const ArchetypeData = {
  adventurer: {weight: 1, name: "Adventurer"},
  bartender:  {weight: 1, name: "Bartender / Server"},
  beggar:     {weight: 1, name: "Beggar"},
  commoner:   {weight: 1, name: "Commoner"},
  criminal:   {weight: 1, name: "Criminal"},
  geezer:     {weight: 1, name: "Old Coot"},
  mercenary:  {weight: 1, name: "Mercenary, Guard, Soldier"},
  merchant:   {weight: 1, name: "Merchant"},
  monster:    {weight: 1, name: "Monster"},
  noble:      {weight: 1, name: "Noble"},
  priest:     {weight: 1, name: "Priest / Shaman"},
  random:     {weight: 1, name: "Random!"},
  urchin:     {weight: 1, name: "Kid, Street Urchin, Punk"},
  wizard:     {weight: 1, name: "Wizard"}
};

SimpleNpc.propTypes = {
  archetype: PropTypes.oneOf(Object.keys(ArchetypeData))
};

SimpleNpc.defaultProps = {
  archetype: 'random',
  race: null
};
