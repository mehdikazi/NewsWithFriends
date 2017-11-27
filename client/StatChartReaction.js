import React from 'react';

class StatChartReaction extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.onClickReaction(this.props.reactionName)}
        style={{
          display: 'flex',
          alignContent: 'center',
          cursor: 'pointer',
        }}
      >
        <img
          src={this.props.image}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <div style={{
          margin: 'auto 0px',
          marginLeft: 20,
          fontSize: 20,
          marginRight: 60,
        }}>
          {this.props.numberOfReactions}
        </div>
      </div>
    );
  }
  constructor() {
    super();
  }
}

export default StatChartReaction;
