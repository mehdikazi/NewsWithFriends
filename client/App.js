import React from 'react';
import Article from './Article.js'
import { FacebookSelector } from './react-reactions/src/components/facebook/FacebookSelector.js';
import ReactModal from 'react-modal';
import StatChart from './StatChart.js';
import StatByReaction from './StatByReaction.js';


class App extends React.Component {

  render() {
    return (
      <div style = {{
          fontFamily: "Lato"
        }}>
          <div style = {{
            position: "fixed",
            marginLeft: 40,
           }}>
           <img src = "./images/logo.png" width = "110" height="110"/>
        </div>
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
         like: ["Passing the Senate budget resolution was key for tax reform because the measure includes instructions for budget reconciliation."],
         love: [],
         haha: [],
         wow: ["Every Democrat voted against the bill, along with 20 Republicans.", "But Republicans from high-tax states like California, New York, and Massachusetts, where many people take the deduction, expressed last-minute concerns about the elimination of the deduction"],
         sad: ["Today is a historic day — and we are ready to deliver tax relief that improves the lives of middle-income Americans and struggling families who have been left behind in our slow-growing economy,"],
         angry: ["Big news - Budget just passed! Trump said."]
       },
       rightUser: {
         like: [],
         love: [],
         haha: ["Republicans struggled on Wednesday with key parts of their plan"],
         wow: ["A failure on taxes, after the Republicans did not succeed in repealing the Affordable Care Act, could jeopardize its congressional majorities in the 2018 midterms.", "Republicans were not especially unified in support of tax cuts,"],
         sad: ["Finding common ground will only get more difficult as the effects of specific tax changes on constituents become clearer."],
         angry: ["The budget resolution that is supposed to win final approval on Thursday would allow for $1.5 trillion in additional deficits from tax cuts over the next decade, but the proposed tax cuts already revealed would cost well over $2 trillion.", "Cutting rates unifies Republicans."]
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
            fontFamily: 'Lato',
          },
          content: {
            fontFamily: 'Lato',
            overflow: 'hidden',
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
