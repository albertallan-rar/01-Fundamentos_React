import styles from "./Header.module.css";
import HeaderIcon from "./icons/HeaderIcon";

export function Header({}) {
  return (
    <div>
      <header className={styles.header}>
        <HeaderIcon size={50} />
        <span className="roboto-regular">Ignite Feed</span>
      </header>
    </div>
  );
}
