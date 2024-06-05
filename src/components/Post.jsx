import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Massa"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBr });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function deleteComment(comment) {
    console.log("DELETAR", comment);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedAt}>
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line, index) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={index}>
                  <a href="#"> {line.content}</a>
                </p>
              );
            }
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name="comment"
            value={newCommentText}
            onChange={(event) => setNewCommentText(event.target.value)}
            placeholder="Deixe um comentário"
          />
          <footer>
            {" "}
            <button type="submit">Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment, index) => (
            <div key={index}>
              <Comment comments={comment} deleteComment={deleteComment} />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
