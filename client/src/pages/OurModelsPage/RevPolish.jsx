import React from 'react'
import TexInline from '../../components/TexInline'
import MathJax from 'react-mathjax'

const RevPolish = () => {
  return (
    <div className='main_article-block-text'>
      <p>Как правило, двухместные логические связки записываются в инфиксной нотации. В инфиксной записи сязка стоит между двумя пропозициональными переменными. 
      <MathJax.Provider>
        <MathJax.Node formula="p \vee q" />
      </MathJax.Provider>  
      </p>    
      <p>В инфиксной записи оператор располагается между операндами.</p>
      <p>Существуют также префиксная нотация, в которой связка стоит перед пропозициональными переменными. Второй вариант ее названия - (прямая) польская запись.
      <MathJax.Provider>
        <MathJax.Node formula="\vee p q" />
      </MathJax.Provider>  
      В префиксной записи оператор располагается перед операндами.
      </p>cd 
      <p>И постфиксная нотация, в которой связка стоит после пропозициональных операторов. Она еще называется обратная польская запись (или сокращенно RPN). 
      <MathJax.Provider>
        <MathJax.Node formula="p q \vee" />
      </MathJax.Provider>  
      В постфиксной записи оператор располагается после операнд.</p>

      <p>Прямая и обратная польские нотации хороши тем, что для записи выражений не нужны скобки. Однако их главное преимущество - это ускорение обработки и подсчетов компьютером.</p>
      
      <p>Прямую польскую нотацию придумал польский логик и математик Ян Лукасевич. Исторически в польской нотации вместо привычных символов для логических связок использовались польские буквы (как правило, первые буквы названия логических связок на польском).</p>

      <table>
        <tbody>
          <tr>
            <td>
              <p>
                Название оператора
              </p>
            </td>
            <td>
              <p>
                Оригинальное обозначение
              </p>
            </td>
            <td>
              <p>
                Польская нотация
              </p>
            </td>
            <td>
              <p>
                Инфиксная нотация
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                негация
              </p>
            </td>
            <td>
              <p>
                <strong>
                  N
                </strong>
              </p>
            </td>
            <td>
              <p>
                Np
              </p>
            </td>
            <td>
              <p>
                $\neg p$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                конъюнкция
              </p>
            </td>
            <td>
              <p>
                <strong>
                  K
                </strong>
              </p>
            </td>
            <td>
              <p>
                Kpq
              </p>
            </td>
            <td>
              <p>
                $p \wedge q$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                дезъюнкция
              </p>
            </td>
            <td>
              <p>
                <strong>
                  A
                </strong>
              </p>
            </td>
            <td>
              <p>
                Apq
              </p>
            </td>
            <td>
              <p>
                $p \vee q$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                импликация
              </p>
            </td>
            <td>
              <p>
                <strong>
                  C
                </strong>
              </p>
            </td>
            <td>
              <p>
                Cpq
              </p>
            </td>
            <td>
              <p>
                $p \rightarrow q$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                эквиваленция
              </p>
            </td>
            <td>
              <p>
                <strong>
                  E
                </strong>
              </p>
            </td>
            <td>
              <p>
                Epq
              </p>
            </td>
            <td>
              <p>
                $p \leftrightarrow q$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                штрих Шеффера
              </p>
            </td>
            <td>
              <p>
                <strong>
                  D
                </strong>
              </p>
            </td>
            <td>
              <p>
                Dpq
              </p>
            </td>
            <td>
              <p>
                $p | q$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                возможность
              </p>
            </td>
            <td>
              <p>
                <strong>
                  M
                </strong>
              </p>
            </td>
            <td>
              <p>
                Mp
              </p>
            </td>
            <td>
              <p>
                $\Diamond p$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                необходимость
              </p>
            </td>
            <td>
              <p>
                <strong>
                  L
                </strong>
              </p>
            </td>
            <td>
              <p>
                Lp
              </p>
            </td>
            <td>
              <p>
                $\Box p$
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                константа ложь
              </p>
            </td>
            <td>
              <p>
                <strong>
                  O
                </strong>
              </p>
            </td>
            <td>
              <p>
                O
              </p>
            </td>
            <td>
              <p>
                $\bot$
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <p>Для реализации перевода из инфиксной записи в польскую используется алгоритм сортировочной станции (shunting yard). </p>
  
      <h2>Для дальнейшего изучения</h2>
      <ol>
        <li>Simons P. <a href="https://plato.stanford.edu/entries/lukasiewicz/polish-notation.html">Łukasiewicz's Parenthesis-Free or Polish Notation // Stanford Encyclopedia of Philosophy.</a></li>
        <li><a href="https://www.youtube.com/watch?v=7ha78yWRDlE">Computerphile. Reverse Polish Notation and The Stack.</a></li>
        <li><a href="https://www.youtube.com/watch?v=TrfcJCulsF4">Computerphile. Reverse Polish Grows on Trees.</a></li>
        <li><a href="https://www.youtube.com/watch?v=PHO11on-x7o">Перевод в польскую инверсную запись (алгоритм Дейкстры).</a></li>
        <li><a href="https://isaaccomputerscience.org/concepts/dsa_toc_rpn?examBoard=all&stage=all">Алгоритм перевода из польской в инфиксную</a></li>
      </ol>
    </div>
  )
}

export default RevPolish