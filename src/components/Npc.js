import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Npc.css';
import {SimpleNpc} from './SimpleNpc.js';
import {FullNpc} from './FullNpc.js';

class Npc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generationMethod: props.generationMethod
    }

    this.handleGenerationMethodChange = this.handleGenerationMethodChange.bind(this);
  }

  handleGenerationMethodChange(e) {
    this.setState({generationMethod: e.target.value});
  }

  generateSimple() {
    return (<SimpleNpc />);
  }

  generateFull() {
    return (<FullNpc />);
  }

  render() {
    const generationForm = ((this.state.generationMethod === 'simple') ? 
      this.generateSimple() :
      this.generateFull());

    return (
      <form>
        <div className="npcblock">
          <div className="fields">
            <div><label htmlFor="generationMethod">Generation Method</label></div>
          </div>
          <div className="data">
            <div>
              <select name="generationMethod" value={this.state.generationMethod}
                onChange={this.handleGenerationMethodChange}
              >
                <option value="simple">Simple NPC</option>
                <option value="full">Full NPC</option>
              </select>
            </div>
          </div>
          {generationForm}
        </div>
      </form>
    );
  }
}

// Could also do static I think, inside the class
Npc.propTypes = {
  generationMethod: PropTypes.oneOf(['simple','full'])
};

Npc.defaultProps = {
  generationMethod: 'simple'
};

export default Npc;
