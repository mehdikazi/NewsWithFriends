import React from 'react';
import StatChart from './StatChart.js';

class Article extends React.Component {

  render() {
    if (this.state.submitted) {
      return (
        <StatChart
          currentUser={this.props.currentUser}
          centerUser={this.props.centerUser}
          rightUser={this.props.rightUser}
        />
      );
    }
    return (
      <div onMouseUp={this.props.onMouseUp}
        style={{
          width: '55%',
          height: '100%',
          margin: 'auto',
          marginTop: '2%',
          fontSize: 16,
          fontFamily: 'Lato',
          letterSpacing: '0.05em',
          lineHeight: '1.5em',
        }}>
        <div style={style.title}>
         House Passes $4 Trillion Budget, Clears Way for Trump Tax Plan
        </div>
        <br></br>
        October 26, 2017 | 11:19am
        <br></br>
        <br></br>
        <div style={style.paragraph}>
         <strong>WASHINGTON</strong> — House Republicans on Thursday narrowly adopted the Senate’s $4 trillion budget blueprint, despite grumblings about the impact on the deficit and the elimination of state and local tax deductions.With 20 Republicans joining all Democrats in voting no, the budget passed 216-212.The House had already passed its own budget that directed upcoming tax reform legislation to be deficit-neutral. But to speed up the process toward their ultimate goal of tax cuts, the House passed the Senate plan that would allow tax cuts to add $1.5 trillion to the deficit.
        </div>
        <br></br>
        <div>
          <img src="./client/images/gop-house.jpg" style={{
             width: '100%',
           }}/>
        </div>
        <div style={style.paragraph}>
        “By passing this budget today, we can send a clear message to the American people: Real tax reform is on the way,” said Rep. Kevin Brady (R-Texas).
        The budget vote opened a process called reconciliation that will allow the upcoming tax reform legislation to pass the Senate with a simple majority vote — and without any Democrats.
        Democrats blasted the plan as “the billionaires’ budget” that will roll back Medicaid and Medicare spending to deliver tax relief to the wealthiest Americans.
        </div>
        <br></br>

        <div style={style.paragraph}>
        “Snake oil is all that this Republican budget will give to the American middle class and working families,” said Rep. Salud Carbajal (D-Calif.). “This Republican budget is squarely aimed at ramming through a tax plan without bipartisan consensus or input. … Eighty percent of the tax cuts in this plan benefits only the wealthiest 1 percent of Americans.” Rep. Diane Black (R-Tenn.) said Democrats shouldn’t make assumptions about a tax plan that hasn’t even been written yet. “The devil’s in the details and those details have not yet been released yet,” Black said.
        </div>
        <br></br>

        <div style={style.paragraph}>
         Republicans and President Trump believe they can deliver a massive tax cut to Americans and businesses this year that will create economic growth and deliver relief to the middle class. “We’re going to make history,” Black said. One major sticking point is how to pay for those tax cuts.
        </div>
        <br></br>

        <div style={style.paragraph}>
         In September ― the most active month on record for hurricanes in the Atlantic ― Nicaragua vowed to sign the agreement in solidarity with other nations already struggling with the effects of climate change, including more violent, less predictable storms and drought. The Central American nation made it official last month. The addition of Syria, whose strongman President Bashar Assad became de facto winner of the ongoing civil war in July as Trump ended U.S. support for rebel groups, makes his country look somewhat more stable, and offers a poetic recognition of a cause of the conflict. Beginning in 2006, Syria suffered its worst droughts in roughly 900 years, forcing as many as 1.5 million Syrians to move from the countryside to cities. The migration sowed some of the civil strife that boiled over into the pro-democracy protests that started the war. Some have called the conflict a “climate war.”
        </div>
        <br></br>

        <div style={style.paragraph}>
         The current plan would eliminate the deductibility of state and local taxes to save about $1.3 trillion over the decade.More than 44 million people rely on those deductions, especially in high-taxes states like New York, New Jersey and California.New York Republicans voting “no” were Dan Donovan, Claudia Tenney, Lee Zeldin, Elise Stefanik, John Katko, Peter King and John Faso. Faso said he couldn’t support “a budget resolution that singled out for elimination the ability of New York families to deduct state and local taxes.”
        </div>
        <br></br>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <button
            type="button"
            onClick = {() => {this.setState({submitted: true})}}
            style={style.button}
          >
           Submit Reactions!
          </button>
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      submitted: false,
    }
  }

}

const style = {
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  paragraph: {
    textIndent: 50,
  },
  button: {
    width: 200,
    fontSize: 16,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    cursor: 'pointer',
  },
};

export default Article;
