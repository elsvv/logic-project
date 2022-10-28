import React from 'react'
import TexInline from '../../../components/TexInline'

const DeGrootText = () => {
  return (
    <div className='main_article-block-text'>
      <p>Модель де Гроота описывает динамику социального влияния и установление консенсуса, процесс достижения которого зависит от степени доверия участников группы друг к другу.</p>
      
      <p>Поскольку модель показывает, как мнение агентов меняется во времени, она определяется на дискретной временной последовательности <TexInline formula={"t"} /> шагов, причем <TexInline formula={"t \in mathbb{N}"} />, где <TexInline formula={"mathbb{N} \geqslant 0"} />. Соответственно, <TexInline formula={"t = 0"} /> обозначает начальное состояние.</p>
      
      <p>Мнение <TexInline formula={"p_i(t) \in [0,1]"} /> показывает степень убеждения в чем-либо агента <TexInline formula={"i"} /> в момент <TexInline formula={"t"} />. Соответственно, <TexInline formula={"p_i(0)"} /> – это изначальное мнение агента <TexInline formula={"i"} />. Для <TexInline formula={"n"} /> агентов из группы задается вектор из мнений каждого участника <TexInline formula={"p(t) = (p_1(t), …, p_n(t))"} />.</p>

      <p>Матрица влияния <TexInline formula={"T"} />размера <TexInline formula={"n \times n"} /> (n = количество участников группы) показывает степени доверия агентов друг к другу: коэффициенты матрицы определяются на отрезке от 0 (минимальная степень доверия) до 1 (максимальная степень доверия). Сумма всех коэффициентов в каждой строке матрицы влияний должна быть равна 1. Строки и столбцы матрицы соответствуют агентам, например, коэффициент из i-й строки и j-го столбца – степень доверия агента i к агенту j.</p>

      <p>Степени доверия агентов друг к другу не меняются в отличие от вектора мнений, который записывается как вектор-столбец и задается следующим образом:</p>

      <div>
        <TexInline formula={"p(t+1) = T \cdot p(t)"} />
      </div>

      <p>Так, процесс умножения матрицы влияния на вектор-столбец мнения показывает, как на каждом шаге меняется мнение агентов из группы в зависимости от того, кому и в какой степени они доверяют.</p>
      <h2>Ссылки</h2>
      <ol>
        <li>Franke M., Rooij R. van. Strategies of Persuasion, Manipulation and Propaganda: Psychological and Social Aspects // Journal of Applied Non-Classical Logics. , 2015. С. 255–291.</li>
        <li>Zhukov L. <a href="https://www.youtube.com/watch?v=GrIToRd2TmI">Network Analysis. Lecture 16. Social learning</a></li>
        <li>Jackson M. O. <a href="https://www.youtube.com/watch?v=zcd1ckJ_GgQ">Social and Economic Networks 6.2 Week 6: DeGroot Model</a></li>
      </ol>
      
      <h2>Как работает калькулятор</h2>
      <p>
      В ячейке «Мнения» для каждого агента задается его степень убежденности. В остальных ячейках задаются коэффициенты строк матрицы влияния. Чтобы сумма коэффициентов в строке была равна 1, нажмите кнопку «Нормировать».
      </p>
      <p>На графике по ось ординат соответствует мнениям агентов, ось абсцисс – моментам времени.</p>
    </div>
  )
}

export default DeGrootText