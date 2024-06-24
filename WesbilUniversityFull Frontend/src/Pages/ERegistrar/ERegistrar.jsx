import './ERegistrar.css'

const ERegistrar = () => {
  return (
    <div className='registrar'>
      <div className="registrar-form">
        <form className='form'>
            <h2>Login</h2>
            <label htmlFor="username">Enter your username: </label>
            <input type="text" name='name' placeholder='username' id='username'/>
            <label htmlFor="password">Enter your password: </label>
            <input type="password" name="password" id="password" placeholder='password' />
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default ERegistrar