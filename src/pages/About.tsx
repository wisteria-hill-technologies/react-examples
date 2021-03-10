import { FC, useContext } from 'react';
import { UserContext } from '../UserContext';

const About: FC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <p>Username: { user?.username }</p>
    </div>
  );
};

export default About;