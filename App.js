import React from 'react';
import { FacebookSelector } from './react-reactions/src/components/facebook/FacebookSelector.js';
import ReactModal from 'react-modal';
import SmallStats from './SmallStats.js';
import {renderArticle} from './renderArticle';


class App extends React.Component {

   constructor() {
     super();
     this.state = {
       page: false,
       intialSetup: true,
       selected: false,
       reactionSelected: false,
       isOpen: false,
       lastSelectedRange: '',
       x_pos: 0,
       y_pos: 0,
       center_pos: 0,
       like: [],
       love: [],
       haha: [],
       wow: [],
       sad: [],
       angry: [],
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
     this.onMouseUp = this.onMouseUp.bind(this);
     this.toggle = this.toggle.bind(this);
     this.getReactions = this.getReactions.bind(this);
     this.openPopover = this.openPopover.bind(this);
     this.apiCall = this.apiCall.bind(this);
     this.onClickStatReactions = this.onClickStatReactions.bind(this);
     this.renderSetupModal = this.renderSetupModal.bind(this);
     this.backToMain = this.backToMain.bind(this)
   }

  selectText() {
    if (window.getSelection().toString().length > 0) {
     var a = window.getSelection()
     var rect_window = a.getRangeAt(0).getBoundingClientRect();
//        commented out for testing purposes -- delete comments in future
//     console.log(a.getRangeAt(0).getBoundingClientRect());
     this.setState({
       selected: window.getSelection().toString(),
       isOpen: true,
       y_pos: rect_window.y,
       right_pos: rect_window.right,
       lastSelectedRange: window.getSelection().getRangeAt(0),
     });
     console.log(window.getSelection().toString());
    }
   }

   apiCall(reaction) {
     return (
       fetch('http://localhost:3000/posts/' + reaction.toString(), {
         'headers': { 'content-type': 'application/json' },
         'credentials': 'same-origin',
         'method': 'PUT',
         'body': JSON.stringify({ "id": reaction.toString(), "text": this.state.selected})
       })
       .then(response => {
         return response.json();
       })
     )
   }

   onMouseUp() {
     this.selectText();
   }

   toggle() {
     this.setState({
       isOpen: !this.state.isOpen,
     });
   }
   //
   // componentDidMount() {
   //   alert("Try highlighting part of the article!");
   // }

   getReactions() {
      return (
        <FacebookSelector
          iconSize={32}
          onSelect={(reaction) => {
            const newNode = document.createElement(reaction);
            this.state.lastSelectedRange.surroundContents(newNode);
            console.log(reaction);
            this.state[reaction].push(this.state.selected)
            this.setState({
              isOpen: false,
            });
            // this.apiCall(reaction);
          }}
        />
      )
   }

   renderSetupModal() {
     return (
       <div>
          <ReactModal
              isOpen={this.state.intialSetup}
              onRequestClose={() => {
                this.setState({isOpen: false});
              }}
              style={{
                content: {
                  height: 200,
                  width: 500,
                  position: 'absolute',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 90,
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
                  intialSetup: false
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
       </div>
     )
   }

   openPopover() {
     if (this.state.isOpen) {
       return (
         <div>
           <ReactModal
              isOpen={this.state.isOpen}
              onRequestClose={() => {
                this.setState({isOpen: false});
              }}
              style={{
                overlay: {
                  backgroundColor: 'transparent',
                },
                content: {
                  backgroundColor: 'transparent',
                  height: 36,
                  width: 260,
                  position: 'absolute',
                  left: this.state.center_pos - 200 + 'px',
                  top: this.state.y_pos - 90 + 'px',
                  borderColor: 'transparent',
                  margin: '0 auto'
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
        </div>
      );
    }
   }

   onClickStatReactions(reaction) {
     this.setState({
       reactionSelected: reaction
     });
   }

   backToMain() {
     this.setState({
       page: false
     });
   }

   render() {
      if (this.state.page) {
        return (
          <SmallStats
            appState={this.state}
            onClickStatReactions={this.onClickStatReactions}
            backToMain={this.backToMain}
          />
          );
      }
      else {
        return (
         <div
           onMouseUp={this.onMouseUp}
           id={"hello"}
           style={{
             width: '50%',
             height: '100%',
             margin: 'auto',
             marginTop: '2%',
             fontSize: 16,
             fontFamily: 'Georgia',
             letterSpacing: '0.05em',
             lineHeight: '1.5em',
          }}>
             {this.openPopover()}
             {renderArticle()}
             {this.renderSetupModal()}
             <div style={{
               display: 'flex',
               justifyContent: 'center',
             }}>
               <button
                 type="button"
                 onClick = {() => {this.setState({
                   page: true
                 })}}
                 style={{
                   width: 200,
                   fontSize: 16,
                   backgroundColor: 'transparent',
                   borderColor: 'black',
                   borderRadius: 4,
                   borderWidth: 1,
                   height: 40,
                   cursor: 'pointer'
                 }}
               >
                Submit Reactions!
               </button>
             </div>
         </div>
        );
      }
   }
}

export default App;
