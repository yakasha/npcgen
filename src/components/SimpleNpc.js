import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleNpc.css';

export class SimpleNpc extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  buildArchetypeOptionList(archetypes) {
    const archetypeOptions = Object.keys(archetypes).map(k => <option value={k}>{archetypes[k]}</option>);

    return (<select name="archetype" value={this.props.archetype}>
      {archetypeOptions}
      </select>);
  }

  render() {
    const archetypeOptions = this.buildArchetypeOptionList(archetypes);

    return (
      <div className="npcblock">
        <div className="fields">
          <div><label htmlFor="archetype">Archetype</label></div>
        </div>
        <div className="data">
          <div>
      {archetypeOptions}
          </div>
        </div>
      </div>
    );
  }
}

export const archetypes = {
  adventurer: "Adventurer",
  bartender:  "Bartender / Server",
  beggar:     "Beggar",
  commoner:   "Commoner",
  criminal:   "Criminal",
  geezer:     "Old Coot",
  mercenary:  "Mercenary, Guard, Soldier",
  merchant:   "Merchant",
  monster:    "Monster",
  noble:      "Noble",
  priest:     "Priest / Shaman",
  random:     "Random!",
  urchin:     "Kid, Street Urchin, Punk",
  wizard:     "Wizard"
};

SimpleNpc.propTypes = {
  archetype: PropTypes.oneOf(['random'])
};

SimpleNpc.defaultProps = {
  archetype: 'random'
};
