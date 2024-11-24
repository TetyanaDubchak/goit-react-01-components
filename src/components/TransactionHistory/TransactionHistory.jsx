import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {

    return <table className={css.history}>
    <thead className={css.title}>
        <tr>
        <th className={css.column}>Type</th>
        <th className={css.column}>Amount</th>
        <th className={css.column}>Currency</th>
        </tr>
    </thead>

    <tbody>
            {items.map(item => {
            return  <tr key={item.id} className = {css.info}>
                <td>{item.type }</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
        })}    
   
  </tbody>
</table>
}