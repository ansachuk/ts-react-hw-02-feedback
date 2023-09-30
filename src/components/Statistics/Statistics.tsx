import css from "./Statistics.module.css";

type Props = {
	good: number;
	neutral: number;
	bad: number;
	total: number;
	positivePercentage: number;
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }: Props) => {
	return (
		<>
			<h2 className={css.title}>Statistics</h2>
			<ul className={css.list}>
				<li className={css.listItem}>
					Good:<span className={css.number}>{good}</span>
				</li>

				<li className={css.listItem}>
					Neutral:<span className={css.number}>{neutral}</span>
				</li>

				<li className={css.listItem}>
					Bad:<span className={css.number}>{bad}</span>
				</li>

				<li className={css.listItem}>
					Total:<span className={css.number}>{total}</span>
				</li>

				<li className={css.listItem}>
					Positive feedback:
					<span className={css.number}>{positivePercentage || 0}%</span>
				</li>
			</ul>
		</>
	);
};

export default Statistics;
