import Controls from "../Controls/Controls";

import { Options } from "../../types/types";

import css from "./FeedbackOptions.module.css";

type Props = {
	options: Array<keyof typeof Options>;
	onLeaveFeedback(title: keyof typeof Options): void;
};

const FeedbackOptions = ({ options, onLeaveFeedback }: Props) => {
	return (
		<div className={css.controls}>
			{options.map(key => (
				<Controls key={key} title={key} onControlClick={onLeaveFeedback} />
			))}
		</div>
	);
};

export default FeedbackOptions;
