import React, { useState } from "react";

const OtherModelListItem = ({ title, img, text, link }) => {
  const [shown, setShown] = useState(false);

  const handleClick = () => {
    setShown(!shown);
  };

  return (
    <li>
      <article className="main_article">
        <p onClick={handleClick} className="main_article-title">
          {title}
        </p>
        {shown && (
          <div className="main_article-block" id="philosophers-web">
            <div className="main_article-block-text">
              <div className="main_article-p">{text}</div>
              <p className="main_article-link">
                <a href={link} target="_blank">
                  Ссылка
                </a>
              </p>
            </div>
            <a href={link} target="_blank">
              <img src={img} alt="Philosopher's Web" className="main_article-img" />
            </a>
          </div>
        )}
      </article>
    </li>
  );
};

export default OtherModelListItem;
