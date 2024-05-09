import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.header_post}>
          <img src="./user_post_picture.jpg" />
          <div className={styles.info_user}>
            <h1>Alexandre</h1>
            <p>Web Developer</p>
          </div>
        </div>
        <span>Publicado há 1h</span>
      </header>
      <div className={styles.post_content}>
        <h1>Post de </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores eius eligendi nemo adipisci tenetur qui
          animi tempora laboriosam fugit aspernatur error, iste autem fugiat voluptatibus, et repellat culpa delectus.
        </p>
      </div>
    </article>
  );
}
