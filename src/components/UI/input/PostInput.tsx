import React, { FC } from 'react';
import styles from './PostInput.module.scss';

interface PostInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PostInput: FC<PostInputProps> = (props) => {
  return (
    <input className={styles.postInput} value={props.value} onChange={props.onChange} type='text' placeholder={props.placeholder}/>
  );
};

export default PostInput;