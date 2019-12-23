import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SingIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
