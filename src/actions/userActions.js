const Signup = 'Signup';
const Logout = 'Logout';

export const SignUp = (user) => {
    return {
      type: Signup,
      payload: user,
      
    };
  };
  
  export const logout = () => {
    return {
      type: Logout,
    };
  };
  