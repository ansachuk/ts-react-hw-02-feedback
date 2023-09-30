import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const FeedbackPercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(FeedbackPercentage);
  };

  onControlClick = title => {
    Notify.info('Thank for your feedback!');
    this.setState(prevState => {
      return {
        [title]: prevState[title] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onControlClick}
          />

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
