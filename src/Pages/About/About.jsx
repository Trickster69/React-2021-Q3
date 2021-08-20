import React from 'react';
import s from './About.module.css';

const About = () => (
  <div className={s.about_wrapper}>
    <div className={s.about_title}>
      <h2>Why do we use it?</h2>
    </div>
    <div className={s.about_content}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro optio illo incidunt culpa laboriosam magni sapiente recusandae sed nobis molestias, veniam a quaerat enim ad accusamus iusto doloremque! Necessitatibus.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur aperiam laboriosam labore iure iusto maiores ut tempore aut? Accusamus qui, aperiam nostrum voluptas dignissimos corrupti dolorem molestias nulla a.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, animi aspernatur. Omnis ullam odit, non illo debitis nobis aliquid molestiae ad, labore inventore minima, at magni ipsum voluptatem saepe dolores.

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, eaque blanditiis accusamus voluptatum perferendis asperiores iusto earum cumque reiciendis, repudiandae cupiditate, sint minus libero modi accusantium mollitia optio possimus ducimus?
    </div>
  </div>
);

export default About;
