import React from "react";
import Tab from "./Tab";

export default class TabBar extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			titles: [],
			clickedTab: -1
		};
		this.wasClicked = this.wasClicked.bind(this);
	}

	render() {
		return (
			<div>
				{this.props.titles.map((title, i) => {
					return <span onClick={() => {this.wasClicked(i); this.props.switchCallback(title);}} key={i}>
						<Tab title={title} key={i} active={(i===this.state.clickedTab)}/>
					</span>
				})}
			</div>
		);
	}

	wasClicked(i) {
		this.setState({
			clickedTab: i
		});
	}

}