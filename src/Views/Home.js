import React from "react";
import './Styles/HomeStyle.scss'
import './Styles/BaseStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
    faMagnifyingGlass, faHouse, faTv, faStore, faPeopleGroup, faChessBoard,
    faRectangleList, faBell, faCaretDown, faAngleDown
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
                        <div className="header--individual--img">
                            <img className="img-square-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
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
            <div className="container">
                <div className="container__left">
                    <ul className="container__left--action">
                        <a href="#">
                            <li className="container__left--link container__left--individual">
                                <div className="container__left--img">
                                    <img className="img-square-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                                </div>
                                <div className="container__left--name"><p>Lưu Thắng</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
                                </div>
                                <div className="container__left--name"><p>Bạn bè</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" />
                                </div>
                                <div className="container__left--name"><p>Watch</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" />
                                </div>
                                <div className="container__left--name"><p>Nhóm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" />
                                </div>
                                <div className="container__left--name"><p>Market</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" />
                                </div>
                                <div className="container__left--name"><p>Kỷ niệm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                    </ul>
                    <hr></hr>
                    <ul className="container__left--shortcuts">
                        <div className="container__left--edit">
                            <h3>Lối tắt của bạn</h3>
                            <button>Chỉnh Sửa</button>
                        </div>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/223927767_4253463241359810_4458406223346967396_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=7xhXQ-ffk2sAX-YazPR&tn=snIIirA4BFkDl06K&_nc_ht=scontent.fhan3-1.fna&oh=00_AT9aQ6b45IGwqsgEnPPoDIvNmAwX7gkkpCP_uzYFtwStTg&oe=62FA77F4" />
                                </div>
                                <div className="container__left--name"><p>Merger The Numbers</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/115803868_1632927190200218_7726110434222976102_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=lu444I3K82cAX97fkNb&_nc_ht=scontent.fhan3-1.fna&oh=00_AT9KaWX6CYW88CLkcvGVsMD5K4PUEKDCdNOw7j5b46kIGA&oe=62F9E898" />
                                </div>
                                <div className="container__left--name"><p>Cờ Caro</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/51747089_2066810686767119_6654310943293440000_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=q9_PtW4DniQAX_OTBYF&tn=snIIirA4BFkDl06K&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-M8a3bx7WovmH6I11u0SfGAIHV0paOG6fW4UjT-M5gpQ&oe=62F9B6A1" />
                                </div>
                                <div className="container__left--name"><p>Onet Connect Animal</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/138477957_2846759298870959_2263282373038840357_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=hPgkvWHqawMAX8TznNA&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-qqYTeDUw8Hgh6WSki9W7z0fjcXMIJZC-7CU1hwbXvkg&oe=62F9557B" />
                                </div>
                                <div className="container__left--name"><p>Sâm Lốc 2021</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=15ZIE3BXE8oAX-xW24G&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-lItyPTbj7SC_NBZLdTynOqInFKqnWhYrMWM-t_sQH5w&oe=62F9ABAF" />
                                </div>
                                <div className="container__left--name"><p>8 Boll Pool</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="container__left--link" >
                                <div className="container__left--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="container__left--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="container__main"></div>
                <div className="container__right"></div>
            </div>
        </div>
    )
}

export default Home;