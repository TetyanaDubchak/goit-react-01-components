import { clsx } from 'clsx';
import css from './FriendListItem.module.css';


export const FriendListItem = ({avatar, name,isOnline, id}) => {

    return <li className={css.item} >
                <span className={clsx(css.status, {
                    [css.isOnline]: isOnline,
                    [css.isOfline]: !isOnline,
                } )}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
}