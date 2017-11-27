import React from 'react';
import StatByReactionByUser from './StatByReactionByUser.js';
import StatByUser from './StatByUser.js';

class StatByReaction extends React.Component {

  render() {
    const toggleButton = (
      <button
        type="button"
        onClick = {() => {this.setState({isByUser: !this.state.isByUser})}}
        style={style.button}
      >
       {this.state.isByUser ? "See Reactions By Reaction!" : "See Reactions By User!"}
      </button>
     );

    if (this.state.isByUser) {
      const currentUserReactions = this.state.userSelected == 'Me'
        ? this.props.currentUser
        : (this.state.userSelected == 'Rochelle'
          ? this.props.centerUser
          : this.props.rightUser
        );
      return (
        <StatByUser
          userSelected={this.state.userSelected}
          fileName={"./client/images/like.svg"}
          prevUser={this.prevUser}
          nextUser={this.nextUser}
          userReactions={currentUserReactions}
          toggleButton={toggleButton}
        />
      )
    }
    return (
      <div style={{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        borderStyle: 'solid',
        width: "50%",
        padding: 24,
        margin: '0px auto',
        fontFamily: 'Lato',
      }}>
        {toggleButton}
        <div style={{
          fontWeight: 'bold',
          fontSize: 32,
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
          margin: 'auto',
          marginTop: '2%',
          letterSpacing: '0.05em',
          fontFamily: 'Lato',
        }}>
          {this.props.reactionSelected.toUpperCase()}
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
            onClick={this.props.prevReaction}
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
            onClick={this.props.nextReaction}
          />

        </div>
        <div style={{
          width: '70%',
          margin: '0px auto',
          fontSize: 20,
          fontFamily: 'Lato',
        }}>
          <StatByReactionByUser
            name={'Me'}
            articleLink={'https://www.huffingtonpost.com/entry/syria-paris-agreement_us_5a01b87fe4b0368a4e86ed4d'}
            articleSrc={'Huffingtonpost'}
            listOfReactions={this.props.currentUser[this.props.reactionSelected]}
          />
          <StatByReactionByUser
            name={'Rochelle'}
            articleLink={'http://www.bbc.com/news/world-middle-east-41904650'}
            articleSrc={'BBC'}
            listOfReactions={this.props.centerUser[this.props.reactionSelected]}
          />
          <StatByReactionByUser
            name={'Jessica'}
            articleLink={'http://www.washingtonexaminer.com/syria-joins-paris-climate-deal-leaving-us-as-the-only-country-opposed/article/2639852'}
            articleSrc={'Washington Examiner'}
            listOfReactions={this.props.rightUser[this.props.reactionSelected]}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        </div>
      </div>
    )
  }

  constructor() {
    super();
    this.state = {
      userSelected: "Me",
      isByUser: false,
      allUserNames: ["Me", "Rochelle", "Jessica"],
    }
    this.prevUser = this.prevUser.bind(this);
    this.nextUser = this.nextUser.bind(this);
  }

  prevUser() {
    const currentIndex = this.state.allUserNames.indexOf(this.state.userSelected);
    const nextIndex = (currentIndex - 1) == -1 ?
      this.state.allUserNames.length - 1
      : (currentIndex - 1) % this.state.allUserNames.length
    this.setState({
      userSelected: this.state.allUserNames[nextIndex],
    });
  }

  nextUser() {
    const currentIndex = this.state.allUserNames.indexOf(this.state.userSelected);
    const nextIndex = (currentIndex + 1) % this.state.allUserNames.length
    this.setState({
      userSelected: this.state.allUserNames[nextIndex],
    });
  }
}

const style = {
  button: {
    width: 200,
    fontSize: 16,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: '4%',
    marginTop: '1%',
  },
};

export default StatByReaction;
