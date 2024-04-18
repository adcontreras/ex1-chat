import '../styles/login.scss';

export const Login = () => {
  return (
    <form className="login-form" action="">
      <h2>Login</h2>
      <div>
        <input type="text" name="" id="" placeholder="Name"/>
        <input type="password" name="" id="" placeholder="*******"/>
        <button>Login</button>
      </div>
      <small> Dont have an account? Register</small>
    </form>
    
  )
}
