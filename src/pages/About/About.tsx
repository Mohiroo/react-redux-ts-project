import React from 'react';
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about_page}>
      <h1 className={styles.about_title}>Учебный проект</h1>
      <section>
      <h2>О чем проект?</h2>
      <p>Сайт Посты и Пользователи - одностраничный сайт, созданный с помощью React (Router), Redux(Toolkit)</p>
      </section>
      <section>
      <h2>Зачем нужен проект?</h2>
      <p>Проект - практика верстки SPA из компонентов</p>
      <p><strong>Чтобы посмотреть полный функционал сайта, нужно авторизироваться. Введите любые значения (БД нет)</strong></p>
      <p>Сайт создан под Google Chrome!</p>
      <p>Практика навыков:</p>
      <ul>     
        <li>Использование React, Redux</li>
        <li>Создание SPA</li>
        <li>Работа с HTTP запросами с помощью Redux Toolkit (RTK Query - /posts и /post, AsyncThunk - /users и /user)</li>
        <li>Работа с анимацией - React Transition Group</li>
        <li>Работа с авторизацией и навигацией - React Router</li>
        <li>Практика TypeScript</li>
        <li>Практика верстки, декомпозиции, React-хуков</li>
        <li>Создание React-компонентов на TypeScript</li>
      </ul>
      </section>
      <section>
      <h2>Используемые фреймворки и/или библиотеки</h2>
      <ul>
        <li><a href="https://ru.reactjs.org/" target="_blank" rel="noreferrer">React</a></li>
        <li><a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a></li>
        <li><a href="http://reactcommunity.org/react-transition-group/" target="_blank" rel="noreferrer">React Transition Group</a></li>
        <li><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a></li>
        <li><a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">Redux ToolKit</a></li>
        <li><a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios</a></li>
        <li><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a></li>
        <li><a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noreferrer">normalize.css</a></li>
      </ul>
      </section>
    </div>
  );
};

export default About;