import React from 'react';

class SmallStats extends React.Component {
	constructor() {
		super()
		this.state = {
			reaction: "angry"
		}
	}

	render() {
		const currState = this.props.appState
		const fileName = "images/" + this.state.reaction + ".svg"
		console.log(this.state.reaction)
			if (this.state.reaction) {
				return(
					<div>
						<div>
							<img src={fileName} style={{
								width:100,
								height:100
							}}/>
						</div>
						<div>
							{this.state.reaction}
						</div>
						<div>
							<img src="images/back.svg" style={{
								width:50,
								height:50
							}}
							onClick = {() => {this.setState({
								reaction: "sad"
							})}}
							/>
							<img src="images/next.svg" style={{
								width:50,
								height:50
							}}
							onClick = {() => {this.setState({
								reaction: "haha"
							})}}
							/>
						</div>
						<div>
							Me: {currState[this.state.reaction]} bruh
							{this.state.reaction}
						<div>
						</div>
							Mehdi: {currState.centerUser[this.state.reaction]}
						</div>
						<div>
							Kamgucci: {currState.rightUser[this.state.reaction]}
						</div>
					</div>
				);
			}
			else {
				return (
					<div>
						like {currState.like.length + currState.centerUser.like.length + currState.rightUser.like.length}
						love {currState.love.length + currState.centerUser.love.length + currState.rightUser.love.length}
						haha {currState.haha.length + currState.centerUser.haha.length + currState.rightUser.haha.length}
						wow {currState.wow.length + currState.centerUser.wow.length + currState.rightUser.wow.length}
						sad {currState.sad.length + currState.centerUser.sad.length + currState.rightUser.sad.length}
						angry {currState.angry.length + currState.centerUser.angry.length + currState.rightUser.angry.length}
					</div>
				);
			}

	}
}

export default SmallStats;
