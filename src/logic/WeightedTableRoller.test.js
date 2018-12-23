// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import weightedTableRoller from './WeightedTableRoller';

describe('flat archetype table', () => {
  const at = {
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

  const wtr     = new weightedTableRoller(at);
  const maxroll = wtr.getMaxRoll(at);

  test('gets max roll of 14', () => {
    expect(maxroll).toBe(14);
  });

  test('roll 1 gets first entry', () => {
    const roller  = wtr.getWeightedTableRoller(at, maxroll);
    const theRoll = roller(1);
    expect(theRoll).toBe("adventurer");
  });

  test('roll 14 gets last entry', () => {
    const roller  = wtr.getWeightedTableRoller(at, maxroll);
    const theRoll = roller(14);
    expect(theRoll).toBe("wizard");
  });
});

describe('weighted race table', () => {
  const wt = {
    human:    {weight: 14, name: "Human"},
    elf:      {weight: 2,  name: "Elf"},
    dwarf:    {weight: 1,  name: "Dwarf"},
    halfling: {weight: 1,  name: "Halfling"},
    halfelf:  {weight: 1,  name: "Half Elf"},
    halforc:  {weight: 1,  name: "Half Orc"}
  };
  const wtr = new weightedTableRoller(wt);
  const maxroll = wtr.getMaxRoll(wt);

  test('get max roll of 20', () => {
    expect(maxroll).toBe(20);
  });

  test('roll 1 gets first entry', () => {
    const roller  = wtr.getWeightedTableRoller(wt, maxroll);
    const theRoll = roller(1);
    expect(theRoll).toBe("human");
  });

  test('roll 14 gets first entry', () => {
    const roller  = wtr.getWeightedTableRoller(wt, maxroll);
    const theRoll = roller(14);
    expect(theRoll).toBe("human");
  });

  test('roll 20 gets last entry', () => {
    const roller  = wtr.getWeightedTableRoller(wt, maxroll);
    const theRoll = roller(20);
    expect(theRoll).toBe("halforc");
  });
});
