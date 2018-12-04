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
    this.handleGenerateNpc            = this.buildHandleGenerateNpc(this.state.generationMethod).bind(this);
  }

  handleGenerationMethodChange(e) {
    this.setState({generationMethod: e.target.value});
  }

  buildHandleGenerateNpc(type) {
    return (e) => {
      // foreach prop in type (simple or full)
      // if set to random, call randomizer
      //   randomizer value can be "roll x from table y", so
      //   randomizer returns "1 or more props" to merge, so
      //   each field must accept "1 or more values"
      // else skip?
    };
  }

  buildSimple() {
    return (<SimpleNpc />);
  }

  buildFull() {
    return (<FullNpc />);
  }

  render() {
    const generationForm = ((this.state.generationMethod === 'simple') ? 
      this.buildSimple() :
      this.buildFull());

    return (
      <div className="sitelayout">
        <div className="form">
          <form>
            <div className="controlPanel">
              <div><button className="reset">Reset Form</button></div>
              <div><button className="save">Save Settings</button></div>
              <div><button className="generate" onClick={this.handleGenerateNpc}>Generate NPC!</button></div>
            </div>
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
        </div>
        <div className="outputArea">
          <div className="controlPanel">
            <div><p>Character...</p></div>
            <div><button className="text">Plain Text</button></div>
            <div><button className="bbcode">bbcode</button></div>
          </div>
          <div><textarea className="outputField" /></div>
        </div>
      </div>
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
