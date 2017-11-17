import React from 'react';

class SmallStats extends React.Component {
	constructor() {
		super()
		this.state = {
			reactionSet: ["like", "love", "haha", "wow", "sad", "angry"]
		}
		this.makeUL = this.makeUL.bind(this);
	}

	makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
				console.log(array[i]);
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
		console.log(list);
    return list;
	}

	render() {
		const currState = this.props.appState;
		const currentUser =
		console.log(currState[currState.reactionSelected]);
		const fileName = "images/" + currState.reactionSelected + ".svg";
		const nextIndex = (this.state.reactionSet.indexOf(currState.reactionSelected) + 1) % 6
		var prevIndex = (this.state.reactionSet.indexOf(currState.reactionSelected) - 1) % 6
		if (prevIndex == -1) {
			prevIndex = 5
		}
		console.log(currState.reactionSelected)
		console.log("curr: " + this.state.reactionSet.indexOf(currState.reactionSelected) + " next: " + nextIndex + " prev: " + prevIndex)
			if (currState.reactionSelected) {
				return(
					<div style={{
						borderColor: 'black',
						borderWidth: 2,
						borderRadius: 4,
						borderStyle: 'solid',
						width: "50%",
						padding: 24,
						margin: '0px auto',
					}}>
						<div style={{
							fontWeight: 'bold',
							fontSize: 32,
							display: 'flex',
							justifyContent: 'center',
							marginBottom: 40,
							width: '70%',
							height: '100%',
							margin: 'auto',
							marginTop: '2%',
							fontSize: 32,
							fontFamily: 'Georgia',
							letterSpacing: '0.05em',
							lineHeight: '1.5em',
						}}>
							{currState.reactionSelected.toUpperCase()}
						</div>
						<div style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 24,
							marginBottom: 24,
						}}>
							<div>
								<img src="images/back.svg" style={{
									width:50,
									height:50,
								}}
								onClick={() => {this.props.onClickStatReactions(this.state.reactionSet[prevIndex])}}
								/>
							</div>

							<div style={{
								margin: '0px 24px',
							}}>
								<img src={fileName}
									style={{
										width:100,
										height:100
									}}/>
							</div>

							<div>
								<img src="images/next.svg" style={{
									width:50,
									height:50,
								}}
								onClick={() => {this.props.onClickStatReactions(this.state.reactionSet[prevIndex])}}
								/>
							</div>
						</div>
						<div style={{
							width: '70%',
							margin: '0px auto',
							fontSize: 20,
							fontFamily: 'Georgia',
						}}>
							<div>
								<strong>Me:</strong> <a target="_blank" href="https://www.huffingtonpost.com/entry/syria-paris-agreement_us_5a01b87fe4b0368a4e86ed4d">Article By Huffingtonpost</a>
								<ul>
									<li>{currState[currState.reactionSelected].map(function(listValue){
											return <li>{listValue}</li>;
										})}
									</li>
								</ul>
							</div>
							<div>
								<strong>Rochelle:</strong> <a target="_blank" href="http://www.bbc.com/news/world-middle-east-41904650">Article By BBC</a>
								<ul>
									<li>{currState.centerUser[currState.reactionSelected].map(function(listValue){
											return <li>{listValue}</li>;
										})}
									</li>
								</ul>
							</div>
							<div>
								<strong>Jessica:</strong> <a target="_blank" href="http://www.washingtonexaminer.com/syria-joins-paris-climate-deal-leaving-us-as-the-only-country-opposed/article/2639852">Article By Washington Examiner</a>
								<ul>
									<li>{currState.rightUser[currState.reactionSelected].map(function(listValue){
											return <li>{listValue}</li>;
										})}
									</li>
								</ul>
							</div>
							<div style = {{
								display: "flex",
    						justifyContent: "center",
							}}>
							<img src="images/return.svg" style={{
								width:50,
								height:50,
							}}
							onClick={() => {this.props.onClickStatReactions(false)}}
							/>
							</div>
						</div>
					</div>
				);
			}
			else {
				return (
					<div>
						<div style={{
							fontWeight: 'bold',
							fontSize: 32,
							display: 'flex',
							justifyContent: 'center',
							marginBottom: 40,
							width: '70%',
							height: '100%',
							margin: 'auto',
							marginTop: '2%',
							fontSize: 32,
							fontFamily: 'Georgia',
							letterSpacing: '0.05em',
							lineHeight: '1.5em',
						}}>
						React Reactions
						</div>
						<div style={{
							textIndent: 50,
							width: '70%',
              height: '100%',
              margin: 'auto',
              marginTop: '2%',
							marginBottom: '2%',
              fontSize: 16,
              fontFamily: 'Georgia',
              letterSpacing: '0.05em',
              lineHeight: '1.5em',
						}}>
							Congrats! Your entire group has finished reading the top article of today. Todays topic was about "Syria Signs Paris Climate Accord, U.S. Only Country Opposed" and today you were assigned a Left leaning article from huffingtonpost. Below are the total stats on how you and your friends reacted to your article! Click on a reaction to see what your friends reacted to!
						</div>
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
							</div>

						</div>
							<div style = {{
								display: "flex",
								justifyContent: "center",
							}}>
							<img src="images/return.svg" style={{
								width:50,
								height:50,
								marginTop: 10
							}}
							onClick={() => {this.props.backToMain()}}
							/>
							</div>
					</div>
				);
			}

	}
}


export default SmallStats;
