import React, { FC } from 'react';
import styles from './PostButton.module.scss';

interface PostButtonProps {
  delete?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const PostButton: FC<PostButtonProps> = (props) => {
  if (props.delete) {
    return (
      <button className={styles.post__btn_delete} disabled={props.disabled} onClick={props.onClick}>
        Скрыть
      </button>
    );
  }

  return (
      <button className={styles.post__btn} disabled={props.disabled} onClick={props.onClick}>
        Посмотреть
      </button>
  );
};

export default PostButton;