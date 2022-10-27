import React from 'react'
import '../../OtherModelsPage/OtherModelsPage.css';
import MathJax from 'react-mathjax';

const SkyrmsText = () => {
  const expectedUtility = "EU_i(s) = \sum_{t \in S_{-i}}P_i(t)u_i(s, t)";
  const statusQuo = "SQ_i = \sum_{s_i \in S_i}I_i(s_i) * EU_i(s_i)";
  const nashDynamics = "I'_i(s) =  \frac{k \cdot I_i(s) + cov_i(s) }{k+\sum_{s \in S_i} cov_i (s)}";
  const covariance = "cov_i (s) = max(EU_i(s) - SQ_i, 0)";
  const bayesDynamics = "I'_(s) = I_i(s) + \frac{1}{k} * I_i(s) * \frac{EU_i(s) - SQ_i}{SQ_i}";

  return (
    <div className='main_article-block-text'>
      <p>
      Динамика Скёрмса описывает делиберативную процедуру поиска смешанного равновесия в теории игр. Важность данного подхода отлично резюмирует цитата из работы Роберта Ауманна и Жака Дрезе: “Фундаментальное понимание теории игр заключается в том, что рациональный игрок, решая, как играть, должен учитывать, что другие игроки рассуждают о нём и друг о друге” (Aumann, Dreze, 2008).
      </p>
      <p>
      Динамика Скёрмса представляет собой модель делиберации игроков в теории игр. Делиберация понимается как последовательное изменение мнения игроков о действиях, которые им стоит выбрать, и действиях, которые выберут другие игроки.
      </p>
      <p>
      Приведём основные понятия и формулы динамики Сёрмса (для более подробного изучения смотрите список литературы). 
      </p>    
      <MathJax.Provider>
          <MathJax.Node formula={expectedUtility} />
      </MathJax.Provider>
      <p>
      Статус-кво - ожидаемая полезность текущих склонностей (inclinations) игрока по отношению к его убеждениям о том, что будут делать другие игроки:</p>
      <MathJax.Provider>
          <MathJax.Node formula={statusQuo} />
      </MathJax.Provider>
      <p>В процессе делиберации игроки меняют убеждения и выберают стратегии с более высокой ожидаемой полезностью, чем статус-кво.</p>
      <p>Данная делиберация агента может описываться правилом <strong>динамики Нэша</strong> (Nash dynamics):</p>
      <MathJax.Provider>
          <MathJax.Node formula={nashDynamics} />
      </MathJax.Provider>
      <p>где  k - коэффициент склонности к изменениям,</p>
      <MathJax.Provider>
          <MathJax.Node formula={covariance} />
      </MathJax.Provider>
      <p>и правилом <strong>Байесовской динамики</strong> (Bayes dynamics):</p>
      <MathJax.Provider>
          <MathJax.Node formula={bayesDynamics} />
      </MathJax.Provider>
      <h3>Калькулятор</h3>
      <p>Данная модель визуализирует делиберативную динамику игр 
      <MathJax.Provider>
          <MathJax.Node inline formula={"2 \times 2"} />
      </MathJax.Provider>, описанную в работе Скёрмса (Skerms, 1990).</p>
      <p>В таблице устанавливается выигрыш игроков (аналогично числам в матрице $2 \times 2$). </p>
      <h3>Список литературы</h3>
      <ol>
        <li>Pacuit E. Dynamic Models of Rational Deliberation in Games // Journal of Applied Non-Classical Logics. 2015. P. 3–33.</li>
        <li>Skyrms B. The Dynamics of Rational Deliberation. Harvard University Press, 1990.</li>
        <li>3. Skyrms B. Correlated equilibria and the dynamics of rational deliberation // Erkenntnis. 1989. Vol. 31. № 2–3. P. 347–364.</li>
      </ol>
    </div>
  )
}

export default SkyrmsText