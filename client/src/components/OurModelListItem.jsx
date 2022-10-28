import React, { useState } from "react";

const OurModelListItem = ({ title, text, link, modelInterface }) => {
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
            <div className="main_article-img">{modelInterface}</div>
          </div>
        )}
      </article>
    </li>
  );
};

export default OurModelListItem;
