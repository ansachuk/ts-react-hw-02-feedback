import css from "./Notification.module.css";

type Props = { message: string };

const Notification = ({ message }: Props) => <p className={css.notification}>{message}</p>;

export default Notification;
