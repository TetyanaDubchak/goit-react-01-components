import { FriendListItem } from "./FriendListItem/FriendListItem"
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => {
    
    return <ul className={css.list}>
        {friends.map(elem => {
            return <FriendListItem key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} id={elem.id} />
        })}
        </ul>
}