// import PropTypes from 'prop-types';
import css from "./transaction.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactioHistory}>
            <thead>
                <tr>
                    <th className={css.head}>Type</th>
                    <th className={css.head}>Amount</th>
                    <th className={css.head}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                        <td className={css.list}>{item.type}</td>
                        <td className={css.list}>{item.amount}</td>
                        <td className={css.list}>{item.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
};

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.exact({
//             id: PropTypes.number.isRequired,
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             isOnline: PropTypes.bool.isRequired,
//         })
//     ).isRequired,
// };