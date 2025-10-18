import "./Header.scss";
import { LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { removeUserToken } from "../../utils/CookisAuth";

const Header = ({ setOpenSideBar }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        removeUserToken()
        navigate("/login")
    }

    return (
        <div className="header">
            <button onClick={() => setOpenSideBar(true)}>
                <LuMenu />
            </button>
            <h3>مستخدم : Super Admin</h3>
            <button onClick={handleLogout}>خروج</button>
        </div>
    );
}

export default Header;