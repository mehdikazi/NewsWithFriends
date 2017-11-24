import React from 'react';
import Article from './Article.js'
import { FacebookSelector } from './react-reactions/src/components/facebook/FacebookSelector.js';
import ReactModal from 'react-modal';
import StatChart from './StatChart.js';
import StatByReaction from './StatByReaction.js';


class App extends React.Component {

  render() {
    return (
      <div>
        {this.openReactPopover()}
        {this.renderSetupModal()}
        <Article
          onMouseUp={this.selectText}
          currentUser={this.state.currentUser}
          centerUser={this.state.centerUser}
          rightUser={this.state.rightUser}
        />
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      isSetupModalOpen: true,
      isReactModalOpen: false,
      currentSelectedText: '',
      currentSelectedRange: '',
      x_pos: 0,
      y_pos: 0,
      center_pos: 0,
      currentUser: {
        like: [],
        love: [],
        haha: [],
        wow: [],
        sad: [],
        angry: [],
      },
      centerUser: {
        like: ["Syria would seek foreign aid to help it meet its commitments under the deal", "work to implement the Paris accord must be stepped up if it is to have any chance of success"],
        love: ["Limit the amount of greenhouse gases", "Enable rich countries to help poorer nations by providing climate finance"],
        haha: [],
        wow: ["the U.S. is set to become isolated in its stance on the Paris climate agreement", "US said it would withdraw, but the rules of the agreement state that this cannot be done until 2020"],
        sad: ["He claimed that the accord would cost the US 6.5 million jobs and $3tn (£2.2tn) in lost GDP - while rival economies like China and India were treated more favourably"],
        angry: ["while Donald Trump has isolated the United States on the world stage in an embarrassing and dangerous position."]
      },
      rightUser: {
        like: ["stop the temperature of the Earth from rising 2 degrees Celsius above pre-industrial levels"],
        love: [],
        haha: [],
        wow: ["re-enter on terms more favorable for our country", "Paris deal will result in the temperature of the Earth rising three degrees, find a way to fill that gap in commitments caused by Trumps announcement"],
        sad: [],
        angry: ["leaving the United States as the only remaining country opposed to the deal after President Trumps June 1 decision to exit from the accord."]
      }
    };
    this.selectText = this.selectText.bind(this);
    this.getReactions = this.getReactions.bind(this);
    this.openReactPopover = this.openReactPopover.bind(this);
    this.renderSetupModal = this.renderSetupModal.bind(this);
  }

  selectText() {
    if (window.getSelection().toString().length > 0) {
      var a = window.getSelection()
      var rect_window = a.getRangeAt(0).getBoundingClientRect();
      this.setState({
       currentSelectedText: window.getSelection().toString(),
       isReactModalOpen: true,
       y_pos: rect_window.y,
       right_pos: rect_window.right,
       currentSelectedRange: window.getSelection().getRangeAt(0),
      });
    }
  }

  // apiCall(reaction) {
  //   return (
  //     fetch('http://localhost:3000/posts/' + reaction.toString(), {
  //      'headers': { 'content-type': 'application/json' },
  //      'credentials': 'same-origin',
  //      'method': 'PUT',
  //      'body': JSON.stringify({ "id": reaction.toString(), "text": this.state.currentSelectedText})
  //     })
  //     .then(response => {
  //      return response.json();
  //     })
  //   )
  // }

  getReactions() {
    return (
      <FacebookSelector
        iconSize={32}
        onSelect={(reaction) => {
          const newNode = document.createElement(reaction);
          this.state.currentSelectedRange.surroundContents(newNode);
          this.state.currentUser[reaction].push(this.state.currentSelectedText);
          this.setState({
            isReactModalOpen: false,
          });
        }}
      />
    )
  }

  renderSetupModal() {
    return (
      <ReactModal
        isOpen={this.state.isSetupModalOpen}
        onRequestClose={() => {
          this.setState({isSetupModalOpen: false});
        }}
        style={{
          content: {
            height: 200,
            width: 500,
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 90,
            overflow: 'hidden',
          }
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          How to start:
          <ol>
            <li>Highlight a sentence with your mouse</li>
            <li>Select a reaction</li>
            <li>Repeat!</li>
            <li>Submit your reactions and see how your friends feel about their article on the topic!</li>
          </ol>
          <button
            type="button"
            onClick = {() => {this.setState({
              isSetupModalOpen: false
            })}}
            style={{
            width: 200,
            fontSize: 16,
            backgroundColor: 'transparent',
            borderColor: 'black',
            borderRadius: 4,
            borderWidth: 1,
            height: 40,
            cursor: 'pointer',
            marginTop: 24,
          }}
          >
            Sounds Good!
          </button>
        </div>
      </ReactModal>
    )
  }

  openReactPopover() {
    return (
      <ReactModal
        isOpen={this.state.isReactModalOpen}
        onRequestClose={() => {
          this.setState({isReactModalOpen: false});
        }}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            overflow: 'hidden',
          },
          content: {
            backgroundColor: 'transparent',
            height: 36,
            width: 260,
            position: 'absolute',
            left: this.state.center_pos - 200 + 'px',
            top: this.state.y_pos - 90 + 'px',
            borderColor: 'transparent',
            margin: '0 auto',
            overflow: 'hidden',
          }
        }}
      >
        <div
          style = {{
            marginTop: 9,
          }}>
          {this.getReactions()}
        </div>
      </ReactModal>
    );
  }
}

export default App;
