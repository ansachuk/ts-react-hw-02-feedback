import { Options } from "../../types/types";
import css from "./Controls.module.css";

type Props = {
	title: keyof typeof Options;
	onControlClick(title: keyof typeof Options): void;
};

const Controls = ({ title, onControlClick }: Props) => {
	return (
		<button
			className={css.control__button}
			onClick={() => {
				onControlClick(title);
			}}
		>
			{title}
		</button>
	);
};
export default Controls;
