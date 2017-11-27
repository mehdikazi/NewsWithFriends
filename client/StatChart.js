import React from 'react';
import StatChartReaction from './StatChartReaction.js';
import StatByReaction from './StatByReaction.js';

class StatChart extends React.Component {
  render() {
    const prevPageButton = (
      <img
        src={"./client/images/prevPage.png"}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          top: 0,
          left: 0,
          marginLeft: '2%',
        }}
        onClick={() => {this.setState({goToByReaction: false})}}
      />
    );
    if (this.state.goToByReaction) {
      return (
        <div>
          <StatByReaction
            currentUser={this.props.currentUser}
            centerUser={this.props.centerUser}
            rightUser={this.props.rightUser}
            reactionSelected={this.state.selectedReaction}
            fileName={"./client/images/" + this.state.selectedReaction + ".svg"}
            prevReaction={this.prevReaction}
            nextReaction={this.nextReaction}
          />
          {prevPageButton}
        </div>
      );
    }
    const likeCount = this.props.currentUser.like.length + this.props.centerUser.like.length + this.props.rightUser.like.length;
    const loveCount = this.props.currentUser.love.length + this.props.centerUser.love.length + this.props.rightUser.love.length;
    const hahaCount = this.props.currentUser.haha.length + this.props.centerUser.haha.length + this.props.rightUser.haha.length;
    const wowCount = this.props.currentUser.wow.length + this.props.centerUser.wow.length + this.props.rightUser.wow.length;
    const sadCount = this.props.currentUser.sad.length + this.props.centerUser.sad.length + this.props.rightUser.sad.length;
    const angryCount = this.props.currentUser.angry.length + this.props.centerUser.angry.length + this.props.rightUser.angry.length;
    return (
      <div>
        <div
          style={{
            fontWeight: 'bold',
            fontSize: 32,
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 40,
            width: '70%',
            height: '100%',
            margin: 'auto',
            marginTop: '2%',
            fontSize: 32,
            fontFamily: 'Lato',
            letterSpacing: '0.05em',
            lineHeight: '1.5em',
          }}
        >
          React Reactions
        </div>
        <div
          style={{
            textIndent: 50,
            width: '70%',
            height: '100%',
            margin: 'auto',
            marginTop: '2%',
            marginBottom: '2%',
            fontSize: 16,
            fontFamily: 'Lato',
            letterSpacing: '0.05em',
            lineHeight: '1.5em',
          }}
        >
          Congrats! Your entire group has finished reading the top article of today. Todays topic was about "Syria Signs Paris Climate Accord, U.S. Only Country Opposed" and today you were assigned a Left leaning article from huffingtonpost. Below are the total stats on how you and your friends reacted to your article! Click on a reaction to see what your friends reacted to!
        </div>
        <div style={{
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 4,
          borderStyle: 'solid',
          width: 240,
          padding: 24,
          margin: '0px auto',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
          }}>
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'like'}
              image={"./client/images/like.svg"}
              numberOfReactions={likeCount}
            />
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'love'}
              image={"./client/images/love.svg"}
              numberOfReactions={loveCount}
            />
          </div>
          <div style={{
            display: 'flex',
            marginTop: 32,
          }}>
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'haha'}
              image={"./client/images/haha.svg"}
              numberOfReactions={hahaCount}
            />
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'wow'}
              image={"./client/images/wow.svg"}
              numberOfReactions={wowCount}
            />
          </div>
          <div style={{
            display: 'flex',
            marginTop: 32,
          }}>
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'sad'}
              image={"./client/images/sad.svg"}
              numberOfReactions={sadCount}
            />
            <StatChartReaction
              onClickReaction={this.onReactionSelected}
              reactionName={'angry'}
              image={"./client/images/angry.svg"}
              numberOfReactions={angryCount}
            />
          </div>
        </div>
      </div>
    )
  }

  constructor() {
    super();
    this.state = {
      goToByReaction: false,
      selectedReaction: "",
      allReactionNames: ["like", "love", "haha", "wow", "sad", "angry"],
    }
    this.onReactionSelected = this.onReactionSelected.bind(this);
    this.prevReaction = this.prevReaction.bind(this);
    this.nextReaction = this.nextReaction.bind(this);
  }

  onReactionSelected(reaction) {
    this.setState({
      selectedReaction: reaction,
      goToByReaction: true,
    });
  }

  prevReaction() {
    const currentIndex = this.state.allReactionNames.indexOf(this.state.selectedReaction);
    const nextIndex = (currentIndex - 1) == -1 ?
      this.state.allReactionNames.length - 1
      : (currentIndex - 1) % this.state.allReactionNames.length
    this.setState({
      selectedReaction: this.state.allReactionNames[nextIndex],
    });
  }

  nextReaction() {
    const currentIndex = this.state.allReactionNames.indexOf(this.state.selectedReaction);
    const nextIndex = (currentIndex + 1) % this.state.allReactionNames.length
    this.setState({
      selectedReaction: this.state.allReactionNames[nextIndex],
    });
  }

}

export default StatChart;
