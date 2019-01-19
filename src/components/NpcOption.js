import React, { Component } from 'react';

export default class NpcOption extends Component {
  buildOptionList(datatable) {
    const options = Object.keys(datatable).map(k => <option value={k} key={k}>{datatable[k].name}</option>);
    let choice = this.props.choice;

    options.push(<option value="random" key="random">Random!</option>);

    return (<select name={this.props.name} value={choice} onChange={this.props.onChange}>
      {options}
      </select>);
  }

  render() {
    const options = this.buildOptionList(this.props.wdt);
    const name    = this.props.name;
    const label   = this.props.label;

    return (
      <div className="npcblock">
        <div className="fields">
          <div><label htmlFor={name}>{label}</label></div>
        </div>
        <div className="data">
          <div>
      {options}
          </div>
        </div>
      </div>
    );
  }
}
