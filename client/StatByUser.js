import React from 'react';
import StatByUserByReaction from './StatByUserByReaction.js';

class StatByUser extends React.Component {

  render() {
    return (
      <div style={{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        borderStyle: 'solid',
        width: "50%",
        padding: 24,
        margin: '0px auto',
      }}>
        {this.props.toggleButton}
        <div style={{
          fontWeight: 'bold',
          fontSize: 32,
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
          margin: 'auto',
          marginTop: '2%',
          letterSpacing: '0.05em',
        }}>
          {this.props.userSelected.toUpperCase()}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 24,
          marginBottom: 24,
        }}>

          <img
            src={"./client/images/back.svg"}
            style={{
              width: 50,
              height: 50,
            }}
            onClick={this.props.prevUser}
          />

          <div style={{
            margin: '0px 24px'
          }}>
            <img
              src={this.props.fileName}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </div>

          <img
            src={"./client/images/next.svg"}
            style={{
              width:50,
              height:50,
            }}
            onClick={this.props.nextUser}
          />

        </div>
        <div style={{
          width: '70%',
          margin: '0px auto',
          fontSize: 20,
          fontFamily: 'Lato',
        }}>
          <StatByUserByReaction
            name={'Like'}
            listOfReactions={this.props.userReactions.like}
            fileName={"./client/images/like.svg"}
          />
          <StatByUserByReaction
            name={'Love'}
            listOfReactions={this.props.userReactions.love}
            fileName={"./client/images/love.svg"}
          />
          <StatByUserByReaction
            name={'Haha'}
            listOfReactions={this.props.userReactions.haha}
            fileName={"./client/images/haha.svg"}
          />
          <StatByUserByReaction
            name={'Wow'}
            listOfReactions={this.props.userReactions.wow}
            fileName={"./client/images/wow.svg"}
          />
          <StatByUserByReaction
            name={'Sad'}
            listOfReactions={this.props.userReactions.sad}
            fileName={"./client/images/sad.svg"}
          />
          <StatByUserByReaction
            name={'Angry'}
            listOfReactions={this.props.userReactions.angry}
            fileName={"./client/images/angry.svg"}
          />
        </div>
      </div>
    )
  }

  constructor() {
    super();
  }
}

export default StatByUser;
