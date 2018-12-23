// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import weightedTableRoller from './WeightedTableRoller';

describe('roller basics...', () => {
  const wt = {
    human:    {weight: 14, name: "Human"},
    elf:      {weight: 2,  name: "Elf"},
    dwarf:    {weight: 1,  name: "Dwarf"},
    halfling: {weight: 1,  name: "Halfling"},
    halfelf:  {weight: 1,  name: "Half Elf"},
    halforc:  {weight: 1,  name: "Half Orc"}
  };

  test('build a roller', () => {
    const wtr = new weightedTableRoller(wt);
  });

  test('get max roll of 20', () => {
    const wtr = new weightedTableRoller(wt);
    const maxroll = wtr.getMaxRoll(wt);
    expect(maxroll).toBe(20);
  });
});
