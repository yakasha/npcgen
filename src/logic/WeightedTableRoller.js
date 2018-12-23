// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class weightedTableRoller {
  constructor(weightedTable) {
    const maxroll = this.getRandomWeightedTableEntryRoller(weightedTable);

    this.randomWeightedTableEntry = this.getRandomWeightedTableEntryRoller(weightedTable,maxroll);
    this.roller                   = this.getRoller(maxroll);
  }

  getMaxRoll(weightedTable) {
    return Object.keys(weightedTable).reduce((acc,cur) => acc + weightedTable[cur].weight, 0);
  }

  getRandomWeightedTableEntryRoller(weightedTable,maxroll) {
    return roll => {
      if (! Number.isInteger(roll)) {
        throw new Error('Bad roll... (not a number)');
      }

      // Move this out so we don't ever have to execute it twice?
      // But we won't ever have to anyways because people don't roll more than once per execution
      let runningTotal = 0;
      for (var entryId in weightedTable) {
        runningTotal += weightedTable[entryId].weight;
        if (roll <= runningTotal) {
          return entryId;
        }
      }

      throw new Error('Bad roll... (' + roll + ' too high for max ' + runningTotal + ')');
    };
  }

  getRoller(maxroll) {
    return () => Math.floor(Math.random() * Math.floor(maxroll)) + 1;
  }
}
