import "./Families.scss";
import { Outlet } from "react-router-dom";

const Families = () => {
    return (
        <div className="familys">
            <Outlet />
        </div>
    );
}

export default Families;