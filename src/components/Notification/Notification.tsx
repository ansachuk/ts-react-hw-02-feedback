import css from "./Notification.module.css";

const Notification = ({ message }) => <p className={css.notification}>{message}</p>;

export default Notification;
