import css from "./Section.module.css";

type Props = {
	title: string;
	children: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
	return (
		<section className={css.section}>
			{title && <h1 className={css.title}>{title}</h1>}
			{children}
		</section>
	);
};

export default Section;
