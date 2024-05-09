import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={"./user_post_picture.jpg"} />
            <div className={styles.authorInfo}>
              <strong>Alexandre</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="8 de maio de 2024" dateTime="2024-05-08 22:11:28">
            Publicado há 1h
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
            nome do projeto é DoctorCare 🚀
          </p>
          <a href="#">👉 jane.design/doctorcare</a>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário" />
          <footer>
            {" "}
            <button type="submit">Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
        </div>
      </article>
    </>
  );
}
