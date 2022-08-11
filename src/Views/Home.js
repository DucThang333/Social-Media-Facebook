import React from "react";
import './Styles/HomeStyle.scss'
import './Styles/BaseStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
    faMagnifyingGlass, faHouse, faTv, faStore, faPeopleGroup, faChessBoard,
    faRectangleList, faBell, faCaretDown
} from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className="page">
            <div className="header">
                <div className="header__infor">
                    <div className="header__infor--logo">
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="header__infor--search">
                        <label className="header--search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </label>
                        <input className="header--search-input" type={"text"} placeholder="Tìm Kiếm trên Facebook" />
                    </div>
                </div>
                <div className="header__feature">
                    <ul className="header__feature--element">
                        <a href="#">
                            <li className="header__feature--link active">
                                <FontAwesomeIcon icon={faHouse} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__feature--link">
                                <FontAwesomeIcon icon={faTv} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__feature--link">
                                <FontAwesomeIcon icon={faStore} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__feature--link">
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__feature--link">
                                <FontAwesomeIcon icon={faChessBoard} />
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="header__other">
                    <a href="#" className="header__other--individual">
                        <div className="header--individual--avatar">
                            <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                        </div>
                        <div className="header--individual--name"><p>Lưu</p></div>
                    </a>
                    <ul className="header__other--feature">
                        <a href="#">
                            <li className="header__other--box">
                                <FontAwesomeIcon icon={faRectangleList} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__other--box">
                                <FontAwesomeIcon icon={faFacebookMessenger} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__other--box">
                                <FontAwesomeIcon icon={faBell} />
                            </li>
                        </a>
                        <a href="#">
                            <li className="header__other--box">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="container"></div>
        </div>
    )
}

export default Home;