import { Profile } from './User/Profile';
import user from './User/user.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <Profile user={user} />
      </div>
      React homework template
    </div>
  );
};
