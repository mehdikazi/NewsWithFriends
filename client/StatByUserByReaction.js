import React from 'react';

class StatByUserByReaction extends React.Component {

  render() {
    if (this.props.listOfReactions.length == 0) {
      return (<div></div>);
    }
    return (
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: -36,
        }}>
          <img
            src={this.props.fileName}
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
            }}
          />
          <strong>{this.props.name}</strong>
        </div>
        <ul>
          <li>{this.props.listOfReactions.map(
            function(listValue) {
              return <li>{listValue}</li>;
            })}
          </li>
        </ul>
      </div>
    );
  }

  constructor() {
    super();
  }
}

export default StatByUserByReaction;
