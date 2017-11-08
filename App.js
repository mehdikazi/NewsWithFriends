import React from 'react';
import { FacebookSelector } from './react-reactions/src/components/facebook/FacebookSelector.js';
import ReactModal from 'react-modal';
import SmallStats from './SmallStats.js'


class App extends React.Component {

   constructor() {
     super();
     this.state = {
       page: false,
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
     this.onMouseUp = this.onMouseUp.bind(this);
     this.toggle = this.toggle.bind(this);
     this.getReactions = this.getReactions.bind(this);
     this.openPopover = this.openPopover.bind(this);
     this.apiCall = this.apiCall.bind(this);
     this.renderArticle = this.renderArticle.bind(this);
     this.onClickStatReactions = this.onClickStatReactions.bind(this);
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
         'body': JSON.stringify({ "id": reaction.toString(), "text": this.state[reaction]})
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
            this.apiCall(reaction);
          }}
        />
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

   renderArticle() {
     return (
       <div>
         <div style={{
           fontWeight: 'bold',
           fontSize: 24,
         }}>
          Syria Vows To Sign Paris Agreement, Leaving U.S. Alone In Climate Denial
         </div>
         <br></br>

         <div
           style={{
             textIndent: 50,
           }}
         >
          Nicaragua, the other holdout, signed the deal last month in solidarity with nations already suffering from climate change. Syria took a break on Tuesday from its gruesome six-year civil war to announce plans to sign the Paris climate agreement, leaving the United States as the only country to reject the emissions-cutting deal. The announcement came at the 23rd Conference of the Parties in Bonn, Germany, the world’s biggest climate conference. The non-binding Paris accord, through which signatories pledge to reduce emissions of planet-warming gases over the coming decades, was brokered in 2015, when the annual conference was held in the French capital.
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          The deal was considered historic because it was the first climate agreement to include the U.S. ―  the world’s biggest historic emitter, with by far the largest per-capita carbon footprint ― and China, which currently produces the most carbon pollution on a national level. The U.S. took a lead role in shaping the deal.
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          Only war-torn Syria and Nicaragua, which protested the agreement’s failure to impose strict demands on major polluters, refused to sign. But President Donald Trump, who rejects scientists’ warnings about climate change, announced plans to withdraw from the pact in June, insisting developing nations received more benefits and the U.S. got none. In his announcement ― which, under the terms of the deal, fully can’t go into effect until November 2020 ― Trump seemed to conflate the accord with a trade deal, demonstrating what was widely described as a poor understanding of how the Paris agreement actually works.
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          “Like the playground bully that eventually loses all his friends, Donald Trump has isolated himself on the world stage,” Joe Ware, a spokesman for the charity Christian Aid, said in a statement. “When even Syria, with all its problems, can see the sense of a global climate agreement it really shows how ideologically wedded to climate denialism the US Republican Party has become.”
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          In September ― the most active month on record for hurricanes in the Atlantic ― Nicaragua vowed to sign the agreement in solidarity with other nations already struggling with the effects of climate change, including more violent, less predictable storms and drought. The Central American nation made it official last month. The addition of Syria, whose strongman President Bashar Assad became de facto winner of the ongoing civil war in July as Trump ended U.S. support for rebel groups, makes his country look somewhat more stable, and offers a poetic recognition of a cause of the conflict. Beginning in 2006, Syria suffered its worst droughts in roughly 900 years, forcing as many as 1.5 million Syrians to move from the countryside to cities. The migration sowed some of the civil strife that boiled over into the pro-democracy protests that started the war. Some have called the conflict a “climate war.”
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          Meanwhile, in the U.S., Environmental Protection Agency Administrator Scott Pruitt last month proposed eliminating the Clean Power Plan, the only federal regulations aimed at reducing the country’s carbon footprint and bringing it in line with goals set in the Paris agreement. Pruitt also has vowed to host a red team-blue team debate on climate science, essentially giving the tiny minority of researchers who doubt overwhelming scientific evidence that global warming is man-made equal standing with scientists who accept the peer-reviewed conclusion. Burning fossil fuels, industrial farming and deforestation are rapidly increasing the amount of heat-trapping gases in the atmosphere, causing the planet to warm, according to 97 percent of peer-reviewed climate research. A research review published last November found significant flaws in the methodologies, assumptions or analyses used by the 3 percent of scientists who concluded otherwise.
         </div>
         <br></br>

         <div style={{
           textIndent: 50,
         }}>
          The announcement came at the 23rd Conference of the Parties in Bonn, Germany, the world’s biggest climate conference. The non-binding Paris accord, through which signatories pledge to reduce emissions of planet-warming gases over the coming decades, was brokered in 2015, when the annual conference was held in the French capital. Yet the U.S. delegation at this year’s COP 23 conference in Germany plans to advocate increased use of coal, the dirtiest fossil fuel, and natural gas ― a major source of methane, which traps about 30 times more heat than carbon dioxide. “This discussion is a follow-up to the Administration’s success at the G20, where the United States expressed its support for helping countries meet their climate objectives through the use of cleaner and more efficient fossil fuels and other clean energy sources and technologies,” a White House spokesman, Raj Shah, said in a statement to The New York Times last week. “It is undeniable that fossil fuels will be used for the foreseeable future, and it is in everyone’s interest that they be efficient and clean.
         </div>
         <br></br>
         <br></br>
       </div>
     );
   }

   onClickStatReactions(reaction) {
     this.setState({
       reactionSelected: reaction
     });
   }

   render() {
      if (this.state.page) {
        return (
          <SmallStats
            appState={this.state}
            onClickStatReactions={this.onClickStatReactions}
          />
          );
      }
      else {
        return (
         <div
           onMouseUp={this.onMouseUp}
           id={"hello"}
           style={{
             width: '70%',
             height: '100%',
             margin: 'auto',
             marginTop: '2%',
             fontSize: 16,
             fontFamily: 'Georgia',
             letterSpacing: '0.05em',
             lineHeight: '1.5em',
          }}>
             {this.openPopover()}
             {this.renderArticle()}
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
