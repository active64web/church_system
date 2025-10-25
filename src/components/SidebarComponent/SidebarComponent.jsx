import "./SidebarComponent.scss";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaLink, FaRegHeart, } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { MdFamilyRestroom, MdOutlineAddBox } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const SidebarComponent = ({ openSideBar, setOpenSideBar }) => {
    const location = useLocation();
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const found = SidebarRow.find(item =>
            item.sub && item.sub.some(sub => sub.path === location.pathname)
        );
        if (found) {
            setOpenSubMenu(found.id);
        } else {
            setOpenSubMenu(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setOpenSideBar(false);
            }
        };

        if (openSideBar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openSideBar, setOpenSideBar]);

    const SidebarRow = [
        {
            id: 1,
            title: "الرئيسية",
            icon: <FaHome />,
            path: "/",
            permission: true,
        },
        {
            id: 2,
            title: "قسم الاسر",
            icon: <MdFamilyRestroom />,
            path: "/familys",
            permission: true,
            sub: [
                { id: 2, title: "اضافة اسرة", icon: <FaLink />, path: "/families/add-familie", permission: true },
                { id: 1, title: "الاسر", icon: <FaLink />, path: "/families/all-families", permission: true },
            ]
        },
        {
            id: 3,
            title: "قسم اخوة الرب",
            icon: <FaRegHeart />,
            path: "/brothers-of-the-lord",
            permission: true,
            sub: [
                {
                    id: 1,
                    title: "اضافة اسرة",
                    icon: <FaLink />,
                    path: "/brothers-of-the-lord/add-brother",
                    permission: true
                },
                {
                    id: 2,
                    title: "اخوة الرب",
                    icon: <FaLink />,
                    path: "/brothers-of-the-lord/all-brothers",
                    permission: true
                },
            ]
        },
        {
            id: 4,
            title: "اضافات",
            icon: <MdOutlineAddBox />,
            path: "/settings",
            permission: true,
            sub: [
                { id: 1, title: "المناطق", icon: <FaLink />, path: "/additions/areas", permission: true },
                { id: 2, title: "الشوارع", icon: <FaLink />, path: "/additions/streets", permission: true },
                { id: 7, title: "الطوائف", icon: <FaLink />, path: "/additions/religious-sects", permission: true },
                { id: 4, title: "المؤهلات الدراسية", icon: <FaLink />, path: "/additions/qualifications", permission: true },
                { id: 3, title: "الحالات المادية", icon: <FaLink />, path: "/additions/financial-cases", permission: true },
                { id: 5, title: "الحالات الصحية", icon: <FaLink />, path: "/additions/health-conditions", permission: true },
                { id: 6, title: "الحالات الاجتماعية", icon: <FaLink />, path: "/additions/social-situations", permission: true },
            ]
        },
        {
            id: 5,
            title: "اعدادات",
            icon: <IoSettingsSharp />,
            path: "/familys",
            permission: true,
        },
    ];

    return (
        <div className={`sidebar ${openSideBar ? "active" : ""}`} ref={sidebarRef}>
            <div className="head">
                <h3>لوحة التحكم</h3>
            </div>

            <Sidebar className="sidebar-links" width="100%">
                <Menu accordion>
                    {SidebarRow.map((ele) =>
                        ele.permission && (
                            !ele.sub ? (
                                <MenuItem
                                    key={ele.id}
                                    icon={ele.icon}
                                    active={location.pathname === ele.path}
                                    component={<Link to={ele.path} />}
                                    onClick={() => {
                                        setOpenSubMenu(null)
                                        setOpenSideBar(false)
                                    }}
                                >
                                    {ele.title}
                                </MenuItem>
                            ) : (
                                <SubMenu
                                    key={ele.id}
                                    label={<span>{ele.title}</span>}
                                    prefix={<span className="menu-icon">{ele.icon}</span>}
                                    suffix={<IoIosArrowDown className="submenu-arrow" />}
                                    open={openSubMenu === ele.id}
                                    onOpenChange={(isOpen) =>
                                        setOpenSubMenu(isOpen ? ele.id : null)
                                    }
                                >
                                    {ele.sub.map(
                                        (el) =>
                                            el.permission && (
                                                <MenuItem
                                                    key={el.id}
                                                    icon={el.icon}
                                                    active={location.pathname === el.path}
                                                    component={<Link to={el.path} />}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenSubMenu(ele.id);
                                                        setOpenSideBar(false)
                                                    }}
                                                >
                                                    {el.title}
                                                </MenuItem>
                                            )
                                    )}
                                </SubMenu>
                            )
                        )
                    )}
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SidebarComponent;