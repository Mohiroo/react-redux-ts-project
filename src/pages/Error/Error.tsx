import React from 'react';
import styles from './Error.module.scss'

const Error = () => {
  return (
    <h1 className={styles.error_page}>
      Данной страницы не существует
    </h1>
  );
};

export default Error;