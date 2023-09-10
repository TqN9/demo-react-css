import facebook from "../asset/icons/facebook.png";
import instagram from "../asset/icons/instagram.png";
import line from "../asset/icons/line.png";
import logo from "../asset/icons/profile-user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={60} className ="cursor-pointer"/>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href ="https://www.facebook.com/nattapat.thongkaew.3/" target="_blank">
                    <img src={facebook} alt="facebook" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href ="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="instragram" width={40} />
                    </a></li>
                <li className="px-2">
                <a href ="https://line.me/en/" target="_blank">
                    <img src={line} alt="line" width={40} />
                </a>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;