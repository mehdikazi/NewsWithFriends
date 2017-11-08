import React from 'react';

class SmallStats extends React.Component {
	constructor() {
		super()
		this.state = {
			reaction: ""
		}
	}

	render() {
		const currState = this.props.appState;
		const fileName = "images/" + currState.reactionSelected + ".svg";
		console.log(currState.reactionSelected)
			if (currState.reactionSelected) {
				return(
					<div>
						<div>
							<img src={fileName} style={{
								width:100,
								height:100
							}}/>
						</div>
						<div>
							{currState.reactionSelected}
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
							Me: {currState[currState.reactionSelected]} bruh
							{currState.reactionSelected}
						<div>
						</div>
							Mehdi: {currState.centerUser[currState.reactionSelected]}
						</div>
						<div>
							Kamgucci: {currState.rightUser[currState.reactionSelected]}
						</div>
					</div>
				);
			}
			else {
				return (
					<div style={{
						borderColor: 'black',
						borderWidth: 2,
						borderRadius: 4,
						borderStyle: 'solid',
						width: 220,
						padding: 24,
						margin: '0px auto',
					}}>
						<div style={{
							display: 'flex',
						}}>
							<div
							  onClick={() => {this.props.onClickStatReactions('like')}}
								style={{
									display: 'flex',
									alignContent: 'center',
									cursor: 'pointer',
								}}
							>
								<div>
									<img src={"images/like.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
									marginRight: 60,
								}}>
									{currState.like.length + currState.centerUser.like.length + currState.rightUser.like.length}
								</div>
							</div>
							<div
							  onClick={() => {this.props.onClickStatReactions('love')}}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignContent: 'center',
								}}
							>
								<div>
									<img src={"images/love.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
								}}>
									{currState.love.length + currState.centerUser.love.length + currState.rightUser.love.length}
								</div>
							</div>
						</div>

						<div style={{
							display: 'flex',
							marginTop: 32,
						}}>
							<div
							  onClick={() => {this.props.onClickStatReactions('haha')}}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignContent: 'center',
								}}
							>
								<div>
									<img src={"images/haha.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
									marginRight: 60,
								}}>
									{currState.haha.length + currState.centerUser.haha.length + currState.rightUser.haha.length}
								</div>
							</div>
							<div
							  onClick={() => {this.props.onClickStatReactions('wow')}}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignContent: 'center',
								}}
							>
								<div>
									<img src={"images/wow.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
								}}>
									{currState.wow.length + currState.centerUser.wow.length + currState.rightUser.wow.length}
								</div>
							</div>
						</div>

						<div
							style={{
								cursor: 'pointer',
								display: 'flex',
								marginTop: 32,
							}}
						>
							<div
							  onClick={() => {this.props.onClickStatReactions('sad')}}
								style={{
									display: 'flex',
									alignContent: 'center',
								}}
							>
								<div>
									<img src={"images/sad.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
									marginRight: 60,
								}}>
									{currState.sad.length + currState.centerUser.sad.length + currState.rightUser.sad.length}
								</div>
							</div>

							<div
							  onClick={() => {this.props.onClickStatReactions('angry')}}
								style={{
									cursor: 'pointer',
									display: 'flex',
									alignContent: 'center',
								}}
							>
								<div>
									<img src={"images/angry.svg"} style={{
										width:50,
										height:50
									}}/>
								</div>
								<div style={{
									margin: 'auto 0px',
									marginLeft: 20,
									fontSize: 20,
								}}>
									{currState.angry.length + currState.centerUser.angry.length + currState.rightUser.angry.length}
								</div>
							</div>
						</div>
						<div style={{
							display: 'flex',
							justifyContent: 'center',
						}}>
							<button
								type="button"
								onClick={() => {this.props.onClickStatReactions('like')}}
								style={{
									width: 80,
									fontSize: 12,
									backgroundColor: 'transparent',
									borderColor: 'black',
									borderRadius: 4,
									borderWidth: 1,
									height: 28,
									marginTop: 20,
									marginBottom: -12,
									cursor: 'pointer',
								}}
							>
							 More Stats!
							</button>
						</div>
					</div>
				);
			}

	}
}
// <div>
// 	like {currState.like.length + currState.centerUser.like.length + currState.rightUser.like.length}
// 	love {currState.love.length + currState.centerUser.love.length + currState.rightUser.love.length}
// 	haha {currState.haha.length + currState.centerUser.haha.length + currState.rightUser.haha.length}
// 	wow {currState.wow.length + currState.centerUser.wow.length + currState.rightUser.wow.length}
// 	sad {currState.sad.length + currState.centerUser.sad.length + currState.rightUser.sad.length}
// 	angry {currState.angry.length + currState.centerUser.angry.length + currState.rightUser.angry.length}
// </div>

export default SmallStats;
