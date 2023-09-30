import { Component } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

import { Options } from "../types/types";

export default class App extends Component {
	state = {
		[Options.bad]: 0,
		[Options.good]: 0,
		[Options.neutral]: 0,
	};

	countTotalFeedback = (): number => {
		return Object.values(this.state).reduce((acc, value) => acc + value, 0);
	};

	countPositiveFeedbackPercentage = (): number => {
		const FeedbackPercentage = (this.state.good / this.countTotalFeedback()) * 100;
		return Math.round(FeedbackPercentage);
	};

	onControlClick = (title: keyof typeof Options): void => {
		Notify.info("Thank for your feedback!");
		this.setState(prevState => {
			return {
				[title]: prevState[title as keyof typeof prevState] + 1,
			};
		});
	};

	render() {
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={Object.keys(this.state) as Array<keyof typeof Options>} onLeaveFeedback={this.onControlClick} />

					{this.countTotalFeedback() ? (
						<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message="There is no feedback!" />
					)}
				</Section>
			</>
		);
	}
}
