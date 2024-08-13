import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="login-page">
        <div className="login-outer-class">
            <div className="login-inner-class">
                <header className="login">
                    <h1>Digital <span>Library</span></h1>
                </header>
                <main className="login-body">
                    <form>
                        <p>
                            <label htmlFor="username">Username or email</label>
                            <input type="text" id="username" placeholder="jhon@1234" required />
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Your Password" required />
                        </p>
                        <Link to="#" className="forgot-password">Forgot password?</Link>
                        <p>
                            <input type="submit" id="submit" value="Login" />
                        </p>
                    </form>
                </main>
            </div>
        </div>
        </div>
    );
}

export default Login;
