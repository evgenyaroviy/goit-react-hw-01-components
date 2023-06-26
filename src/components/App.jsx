import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />;
    </div >
  );
};
