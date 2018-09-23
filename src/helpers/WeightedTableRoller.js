// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class WeightedTableRoller {
  constructor(weightedTable) {
    const maxroll = Object.keys(weightedTable).reduce((acc,cur) => acc += weightedTable[cur].weight);

    this.randomWeightedTableEntry = this.getRandomWeightedTableEntryRoller(weightedTable,maxroll);
    this.roller                   = this.getRoller(maxroll);
  }

  getRandomWeightedTableEntryRoller(weightedTable,maxroll) {
    return roll => {
      if (! Number.isInteger(roll) || roll > maxroll)
        throw new Error('Bad roll...');

      for (var entryId in weightedTable) {
        if (roll < weightedTable[entryId].weight)
          return entryId;
        roll -= weightedTable[entryId].weight;
      }

      throw new Error('Could not pick an entry... weird...');
    };
  }

  getRoller(maxroll) {
    return () => Math.floor(Math.random() * Math.floor(maxroll)) + 1;
  }
}
