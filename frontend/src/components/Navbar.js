//Beim component reload checken ob user eingeloggt
import ".././static/css/Navbar.css";
import enercon_logo from "../static/img/enercon_logo.png";
import React, { useState, useContext } from "react";
import AppContext from "../utils/AppContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
const Navbar = () => {
	const location = useLocation();
	const { videos } = useContext(AppContext);
	//toggle navigation button on mobile view
	const [isActive, setIsActive] = useState(false);
	const handleOnClick = () => {
		setIsActive(!isActive);
	};
	let navigate = useNavigate();
	const handleOnCheck = () => {
		isActive ? setIsActive(false) : setIsActive(true);

	};

	return (
		<div>
			<nav className="navbar non-printable">
				<div>
					<li className="brand-title gradient" onClick={() => { navigate("/"); }}>
						<img className="logo" src={enercon_logo}></img></li>
				</div>
				<a href={location.path} className="toggle-button" onClick={() => handleOnClick()}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				<div className={isActive ? "navbar-links active" : "navbar-links"}>
					<ul>
						{videos && (
							<>
								{videos?.title && (
									<>
										<li>
											<Link to="/devices" onClick={() => handleOnCheck()}>
												Geräte
											</Link>
										</li>

										<li>
											<Link to="/defect" onClick={() => handleOnCheck()}>
												Defekt
											</Link>
										</li>

										<li>
											<Link to="/handout" onClick={() => handleOnCheck()}>
												Aufträge
											</Link>
										</li>

									</>
								)}
							</>
						)}
						{/* <li>
              <Link
                to={}
                onClick={() => { handleOnCheck() }}
              >
                {videos ? "Logout" : "Login"}
              </Link>

            </li> */}
						{location.pathname !== "/" && (
							<li className="back" onClick={() => { navigate(-1); handleOnClick(); }}>
								<span>Back</span>
							</li>
						)}

						{location.pathname === "/" && (
							<li className="admin"onClick={() => { handleOnClick(); }}>
								<Link to="/AddVideo">Neues Video</Link>
							</li>)}
						{location.pathname === "/" && (
							<li className="admin" onClick={() => { handleOnClick(); }}>
								<Link to="/adminPage">Admin Area</Link>
							</li>)}
						{videos !== null && (
							<li className="notClickable">
								<Link to="/">{videos?.title}</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;