// import PropTypes from 'prop-types';
import css from "./friends.module.css";

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.online : css.offline} />
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

// FriendsListItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// };