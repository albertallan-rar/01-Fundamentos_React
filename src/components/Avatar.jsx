import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder }) {
  return (
    <div>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    </div>
  );
}
