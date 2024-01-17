import css from './FriendListItem.module.css'

export const FriendListItem = ({ friend: { avatar, name, isOnline} }) => {
    const statusClass = isOnline ? css.online : css.offline;

    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};