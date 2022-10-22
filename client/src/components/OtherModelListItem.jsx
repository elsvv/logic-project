import React, { useState } from "react";

const OtherModelListItem = ({ title, img, text, link }) => {
  const [shown, setShown] = useState(false);

  const handleClick = () => {
    setShown(!shown);
  };

  return (
    <li>
      <article class="main_article">
        <p onClick={handleClick} class="main_article-title">
          {title}
        </p>
        {shown && (
          <div class="main_article-block" id="philosophers-web">
            <div class="main_article-block-text">
              <p class="main_article-p">{text}</p>
              <p class="main_article-link">
                <a href={link} target="_blank">
                  Ссылка
                </a>
              </p>
            </div>
            <a href={link} target="_blank">
              <img src={img} alt="Philosopher's Web" class="main_article-img" />
            </a>
          </div>
        )}
      </article>
    </li>
  );
};

export default OtherModelListItem;
