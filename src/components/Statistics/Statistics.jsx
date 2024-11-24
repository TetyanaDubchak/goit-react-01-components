import css from './Statistics.module.css'

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
export const Statistics = ({ title, stats }) => {
    
    
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.list}>
            {stats.map(elem => {
                return <li key={elem.id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                    <span className={css.label}>{elem.label}</span>
                    <span className={css.percentage}>{elem.percentage }%</span>
                    </li>
            })}

  </ul>
</section>
}