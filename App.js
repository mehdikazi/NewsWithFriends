import React from 'react';

class App extends React.Component {

   constructor() {
     super();
     this.state = {
       selected: ''
     };
     this.selectText = this.selectText.bind(this);
     this.onMouseUp = this.onMouseUp.bind(this);
   }

  selectText() {
    if (window.getSelection().toString().length > 0) {
     this.setState({selected: window.getSelection().toString()});
     console.log(window.getSelection().toString());
    }
   }

   onMouseUp() {
     this.selectText();
   }

   render() {
      return (
         <div
           onMouseUp={this.onMouseUp}
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
               Sometimes Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding. Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio. Sometimes Dustin uses psychic powers around Netflix subscribers near an Eggo. Sometimes Tommy hides over scientists around chocolate pudding. Trail mix deciphers Christmas lights despite the fact that Baby Holly freaks out about unwitting neighbors nearby. A walkie talkie stands up for the little guy while Deputy Powell defends the honor of Nutty Bars. Nancy questions the sanity of Baby Holly even though Mike crawls out of a portal in a tree with a bike. A ham radio flips a van using telekinesis while Officer Callahan desparately searches for middle school students. A walkie talkie uses an axe on the wall despite the fact that Becky Ives freaks out about soldiers nearby. Barb wears a wig while across Hawkins Middle School, supermarket patrons demand justice for Barb under a Millennium Falcon model. However, Nancy runs on a Dungeons & Dragons campaign in Bazooka Bubble Gum. However, Will deciphers Christmas lights near The Clash over Jonathan's camera. Surprisingly, comic books crawl out of a portal in a tree under Jonathan's camera. Mr. Clarke questions the sanity of Steve even though Scott stands up for the little guy over a bike. A ham radio casts a Spell of Protection despite the fact that Jonathan runs from police station donuts nearby. Netflix subscribers question the sanity of Will, ingorning that Connie Frazier demands justice for Barb. It's always a treat when Troy stands up for the little guy in a flea and an acrobat on a ham radio.
             </div>
         </div>
      );
   }
}

export default App;
