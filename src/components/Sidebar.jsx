import { Pencil } from "lucide-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar({}) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="./cover_perfil.jpg" />
      <div className={styles.profile}>
        <Avatar hasBorder src={"./profile_picture.jpg"} />

        <strong>Albert Allan</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <Pencil size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
