import React from 'react';

class StatByReactionByUser extends React.Component {

  render() {
    if (this.props.listOfReactions.length == 0) {
      return (
        <div style={{
          marginBottom: 16,
        }}>
          <strong>{this.props.name}:</strong> <a target="_blank" href={this.props.articleLink}>Article By {" " + this.props.articleSrc}</a>
        </div>
      );
    }
    return (
      <div>
        <strong>{this.props.name}:</strong> <a target="_blank" href={this.props.articleLink}>Article By {" " + this.props.articleSrc}</a>
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

export default StatByReactionByUser;
