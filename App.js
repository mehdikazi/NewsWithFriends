import React from 'react';
import { FacebookSelector } from './react-reactions/src/components/facebook/FacebookSelector.js';
import ReactModal from 'react-modal';

class App extends React.Component {

   constructor() {
     super();
     this.state = {
       selected: '',
       isOpen: false,
       x_pos: 0,
       y_pos: 0,
       right_pos: 0,
       like: [],
       love: [],
       haha: [],
       wow: [],
       sad: [],
       angry: []
     };
     this.selectText = this.selectText.bind(this);
     this.onMouseUp = this.onMouseUp.bind(this);
     this.toggle = this.toggle.bind(this);
     this.getReactions = this.getReactions.bind(this);
     this.openPopover = this.openPopover.bind(this);
     this.modalPlacement = this.modalPlacement.bind(this);
     this.apiCall = this.apiCall.bind(this);
   }

  selectText() {
    if (window.getSelection().toString().length > 0) {
     var a = window.getSelection()
     var rect_window = a.getRangeAt(0).getBoundingClientRect();
     console.dir(window.getSelection().anchorNode.parentNode);
     console.log(a.getRangeAt(0).getBoundingClientRect());
     this.setState({
       selected: window.getSelection().toString(),
       isOpen: true,
       x_pos: rect_window.x,
       y_pos: rect_window.y,
       right_pos: rect_window.right,
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
            console.log(reaction);
            this.setState({
              reaction: this.state[reaction].push(this.state.selected),
              isOpen: false,
            });
            this.apiCall(reaction);
          }}
        />
      )
   }
   
   modalPlacement() {
       const modal_class = document.getElementsByClassName("ReactModal__Content ReactModal__Content--after-open");
       modal_class.style.position = "absolute";
       modal_class.style.left = this.state.x_pos+'px';
       modal_class.style.top = this.state.y_pos+'px';
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
                  left: (this.state.x_pos + this.state.right_pos) / 2 + 'px',
                  // or what I did earlier was just left: this.state.x_pos + 'px',
                  top: this.state.y_pos - 90 + 'px',
                  borderColor: 'transparent',
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

   render() {
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
             <div style={{
               textIndent: 50,
             }}>
               Sometimes Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding.
               Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio. Sometimes Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding. Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio.
             </div>
             <br></br>
             <br></br>
             <div style={{
               textIndent: 50,
             }}>
               Sometimesd Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding. Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio. Sometimes Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding. Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio.
             </div>
             <div style={{
               display: 'flex',
               justifyContent: 'center',
             }}>
               <button
                 type="button"
                 style={{
                   width: 200,
                   fontSize: 16,
                   backgroundColor: 'transparent',
                   borderColor: 'black',
                   borderRadius: 4,
                   borderWidth: 1,
                   height: 40,
                 }}
               >
                Submit Reactions!
               </button>
             </div>
         </div>
      );
   }
}

export default App;
