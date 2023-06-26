import PropTypes from 'prop-types';
import css from "./friends.module.css";
import { FriendsListItem } from 'components/Friends/FriendListItem';


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return <FriendsListItem key={friend.id} {...friend} />;
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};