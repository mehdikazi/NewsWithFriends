import React from 'react';

class SmallStats extends React.Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
		const currState = this.props.appState
		const fileName = "images/" + currState.selected + ".svg"
			if (currState.selected) {
				return(
					<div>
						<div>
							<img src={fileName} style={{
								width:100,
								height:100
							}}/>
						</div>
						<div>
							{currState.selected}
						</div>
						<button
							type="button"
							style={{
								width: 70,
								// fontSize: 16,
								backgroundColor: 'transparent',
								borderColor: 'black',
								borderRadius: 4,
								borderWidth: 1,
								height: 40,
								margin: '10 auto'
							}}
							>
						 Next Reaction!
						</button>
						<div>
							Me: {currState[currState.selected]}
						<div>
						</div>
							Mehdi: {currState.centerUser[currState.selected]}
						</div>
						<div>
							Kamgucci: {currState.rightUser[currState.selected]}
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
