import React, { Component } from 'react';
import './SimpleNpc.css';
import NpcOption from './NpcOption.js';
import wtr from '../logic/WeightedTableRoller.js';

export class SimpleNpc extends Component {
  constructor(props) {
    super(props);
    this.state = {race: this.props.race, archetype: this.props.archetype, culture: this.props.culture};
  }

  buildArchetypeOptionList(archetypes) {
    const archetypeOptions = Object.keys(archetypes).map(k => <option value={k} key={k}>{archetypes[k]}</option>);

    return (<select name="archetype" value={this.props.archetype} onChange={this.handleArchetypeChange}>
      {archetypeOptions}
      </select>);
  }

  getChangeHandler(name) {
    return (e) => {
      const newstate = {};
      newstate[name] = e.target.value;
      this.setState(newstate);
    };
  }

  getRandomizer(weightedTable) {
    return new wtr(weightedTable);
  }

  render() {
    const race      = this.state.race;
    const archetype = this.state.archetype;
    const culture   = this.state.culture;

    console.log(this.state.culture);

    return (
      <div>
        <NpcOption onChange={this.getChangeHandler("archetype")} choice={archetype} name="archetype" label="Archetype" wdt={ArchetypeData} />
        <NpcOption onChange={this.getChangeHandler("race")} choice={race} name="race" label="Race" wdt={RaceData} />
        <NpcOption onChange={this.getChangeHandler("culture")} choice={culture} name="culture" label="Culture" wdt={CultureData} />
      </div>
    );
  }
}

// need to indicate/control:
// display?
// # rolls
// adjustments
// skills
// rerolls
export const workflow = {
  // shows by default
  required: ["archetype","race","culture","social","age","noteworthy","personality","alignment"]
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
  urchin:     {weight: 1, name: "Kid, Street Urchin, Punk"},
  wizard:     {weight: 1, name: "Wizard"}
};

export const RaceData = {
  human:    {weight: 14, name: "Human"},
  elf:      {weight: 2,  name: "Elf"},
  dwarf:    {weight: 1,  name: "Dwarf"},
  halfling: {weight: 1,  name: "Halfling"},
  halfelf:  {weight: 1,  name: "Half Elf"},
  halforc:  {weight: 1,  name: "Half Orc"}
};

export const CultureData = {
  primitive:         {weight: 1, name: "Primitive",          mod: -3},
  nomad:             {weight: 2, name: "Nomad",              mod: 0},
  barbarian:         {weight: 1, name: "Barbarian",          mod: 2},
  civilized:         {weight: 1, name: "Civilized",          mod: 4},
  civilizedDecadent: {weight: 1, name: "Civilized Decadent", mod: 7}
};

export const SocialStatusData = {
  destitute:   {weight: 12, name: "Destitute",         mod: -3},
  poor:        {weight: 28, name: "Poor",              mod: -1},
  comfortable: {weight: 43, name: "Comfortable",       mod: 0},
  reroll:      {weight: 1,  name: "Reroll"},
  welltodo:    {weight: 10, name: "Well-to-Do",        mod: 2},
  wealthy:     {weight: 4,  name: "Wealthy",           mod: 4},
  nobility:    {weight: 2,  name: "Nobility",          mod: 5},
  extreme:     {weight: 0,  name: "Extremely Wealthy", mod: 8},
};

export const Workflow = {
  archetype: ArchetypeData,
  race:      RaceData,
  culture:   CultureData
};

SimpleNpc.defaultProps = {
  archetype: "random",
  race:      "random",
  culture:   "random"
};

/**
 * Data (race):
 * values: {human: {weight, label},...,other: {weight,label,reference}}
 *  reference: {table,remove,add,mod}
 ** */
