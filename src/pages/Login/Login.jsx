import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../../utils/CookisAuth";

const Login = () => {
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        // const email = e.target.elements.email.value
        // const password = e.target.elements.password.value

        setUserToken("123456789");
        navigate("/")
    }

    return (
        <div className="login">
            <form onSubmit={login}>
                <h2>الكنيسة العذراء مريم <br /> برك الخيام</h2>

                <input
                    type="text"
                    placeholder="البريد الإلكتروني"
                    name="email"
                    autoComplete="email"
                />

                <input
                    type="password"
                    placeholder="كلمة السر"
                    name="password"
                    autoComplete="current-password"
                />

                <button type="submit" className="submit">دخول</button>
            </form>
        </div>
    );
}

export default Login;