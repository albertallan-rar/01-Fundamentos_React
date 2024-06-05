import { ThumbsUp, Trash } from "lucide-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ comments, deleteComment }) {
  function handleDeleteComment() {
    console.log("deletar");

    deleteComment(comments);
  }
  return (
    <div className={styles.comment}>
      <Avatar src={"./user_post_picture.jpg"} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div>
              <div className={styles.authorAndTime}>
                <strong>Devon Lane (você)</strong>
                <time title="8 de maio de 2024" dateTime="2024-05-08 22:11:28">
                  Cerca de 1h atrás
                </time>
              </div>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comments}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
