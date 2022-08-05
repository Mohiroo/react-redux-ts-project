import React, { FC } from "react";
import { IComment } from "../../models/IComment";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <h4 className={styles.comment_title}>
        {comment.name} ({comment.email})
      </h4>
      <p className={styles.comment_body}>{comment.body}</p>
    </div>
  );
};

export default CommentItem;
