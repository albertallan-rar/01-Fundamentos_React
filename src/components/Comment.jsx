import { PartyPopper, Trash } from "lucide-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ comments, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    console.log("deletar");

    deleteComment(comments);
  }

  function handleCommentLike() {
    setLikeCount((likeNumber) => {
      return likeNumber + 1;
    });
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
          <button onClick={handleCommentLike}>
            <PartyPopper size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
