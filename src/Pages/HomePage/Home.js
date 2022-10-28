import React from "react";
import './HomeStyle.scss'
import SlicePage from '../../Components/SlicePagesComponent/index'
import HeaderFeatures from '../../Components/HeaderFeaturesComponent/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import {
    faMagnifyingGlass, faHouse, faTv, faStore, faPeopleGroup, faChessBoard,
    faRectangleList, faBell, faCaretDown, faAngleDown, faAngleLeft, faAngleRight, faVideo, faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import imgIcon from '../Imgs/Icons/icon.png';



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
                    <SlicePage />
                </div>
                <div className="header__other">
                    <a href="#" className="header__other--individual">
                        <div className="header--individual--img">
                            <img className="img-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                        </div>
                        <div className="header--individual--name"><p>Lưu</p></div>
                    </a>
                    <HeaderFeatures />
                </div>
            </div>
            <div className="container">
                <div className="container__left scroll--list">
                    <ul className="content__list container__left--action">
                        <a href="#">
                            <li className="content__list--link">
                                <div className="content__list--img">
                                    <img className="img-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                                </div>
                                <div className="content__list--name"><p>Lưu Thắng</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" />
                                </div>
                                <div className="content__list--name"><p>Bạn bè</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" />
                                </div>
                                <div className="content__list--name"><p>Watch</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" />
                                </div>
                                <div className="content__list--name"><p>Nhóm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" />
                                </div>
                                <div className="content__list--name"><p>Market</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" />
                                </div>
                                <div className="content__list--name"><p>Kỷ niệm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                    </ul>
                    <hr></hr>
                    <ul className="content__list container__left--shortcuts">
                        <div className="container__left--edit">
                            <h3 className="title--list">Lối tắt của bạn</h3>
                            <button>Chỉnh Sửa</button>
                        </div>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/223927767_4253463241359810_4458406223346967396_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=7xhXQ-ffk2sAX-YazPR&tn=snIIirA4BFkDl06K&_nc_ht=scontent.fhan3-1.fna&oh=00_AT9aQ6b45IGwqsgEnPPoDIvNmAwX7gkkpCP_uzYFtwStTg&oe=62FA77F4" />
                                </div>
                                <div className="content__list--name"><p>Merger The Numbers</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/115803868_1632927190200218_7726110434222976102_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=lu444I3K82cAX97fkNb&_nc_ht=scontent.fhan3-1.fna&oh=00_AT9KaWX6CYW88CLkcvGVsMD5K4PUEKDCdNOw7j5b46kIGA&oe=62F9E898" />
                                </div>
                                <div className="content__list--name"><p>Cờ Caro</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/51747089_2066810686767119_6654310943293440000_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=q9_PtW4DniQAX_OTBYF&tn=snIIirA4BFkDl06K&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-M8a3bx7WovmH6I11u0SfGAIHV0paOG6fW4UjT-M5gpQ&oe=62F9B6A1" />
                                </div>
                                <div className="content__list--name"><p>Onet Connect Animal</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/138477957_2846759298870959_2263282373038840357_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=hPgkvWHqawMAX8TznNA&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-qqYTeDUw8Hgh6WSki9W7z0fjcXMIJZC-7CU1hwbXvkg&oe=62F9557B" />
                                </div>
                                <div className="content__list--name"><p>Sâm Lốc 2021</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c5.5.50.50a_dst-png_p56x56&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=15ZIE3BXE8oAX-xW24G&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-lItyPTbj7SC_NBZLdTynOqInFKqnWhYrMWM-t_sQH5w&oe=62F9ABAF" />
                                </div>
                                <div className="content__list--name"><p>8 Boll Pool</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--icon">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className="content__list--name"><p>Xem thêm</p></div>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="container__main">
                    <div className="container__content">
                        <div className="container__content--block container__content--news">
                            <div className="container__content--news-action">
                                <div className="header__link">
                                    <a href="#">
                                        <div className="header__link--element active">
                                            <p className="header__link--element-title">Tin</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="header__link--element">
                                            <p className="header__link--element-title">Rells</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="header__link--element">
                                            <p className="header__link--element-title">Phong họp mặt</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="container__content--news-reels">
                                <div className="container__content--news-reels-pre frame-icon-cicle click">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </div>
                                <div className="container__content--news-reels-next frame-icon-cicle click">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                                <div className="container__content--news-box"></div>
                            </div>
                        </div>

                        <div className="container__content--block container__content--action">
                            <div className="container__content--action-post">
                                <img className="img-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                                <input className="click" type={'text'} placeholder="ơi , bạn đang nghĩ gì thế" />
                            </div>
                            <hr></hr>
                            <div className="container__content--action-feature">
                                <div className="container__content--action-block click">
                                    <svg className="icon-video" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" >
                                        <g fill-rule="evenodd" transform="translate(-444 -156)">
                                            <g>
                                                <path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path>
                                                <path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span>Video trực tiếp</span>
                                </div>
                                <div className="container__content--action-block click">
                                    <svg className="icon-img" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" >
                                        <g fill-rule="evenodd" transform="translate(-444 -156)">
                                            <g>
                                                <path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path>
                                                <path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span>Ảnh/Video</span>
                                </div>
                                <div className="container__content--action-block click">
                                    <svg className="icon-emotion" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
                                        <g fill-rule="evenodd" transform="translate(-444 -156)">
                                            <g>
                                                <path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path>
                                                <path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span>Cảm xúc/Hoạt động</span>
                                </div>
                            </div>
                        </div>
                        <div className="container__content--block"></div>
                        <div className="container__content--block"></div>
                        <div className="container__content--block"></div>
                    </div>
                </div>
                <div className="container__right scroll--list">
                    <ul className="content__list container__right--ads">
                        <h3 className="title--list ">Được Tài trợ</h3>
                        <a href="#">
                            <li className="content__list--link ">
                                <div className="container--ads--img">
                                    <img className="img-square-border" src="https://scontent.fhan3-2.fna.fbcdn.net/v/t45.1600-4/297512310_6314390700464_8743519404118367255_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=101&ccb=1-7&_nc_sid=67cdda&_nc_ohc=1j1V1anVRFAAX9UBgqw&tn=snIIirA4BFkDl06K&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-wDDmoQepF8rViFkGkS42q9NYp7lsBFDSDFkZXcmEAIQ&oe=62FB175F" />
                                </div>
                                <div className="content__list--name">
                                    <p>Ambition Vietnam</p>
                                    <p className="container--ads--link">https://www.ambition.vn</p>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link ">
                                <div className="container--ads--img">
                                    <img className="img-square-border" src="https://scontent.fhan4-1.fna.fbcdn.net/v/t45.1600-4/287505620_6313058841020_6561446657391558399_n.png?stp=cp0_dst-jpg_fr_q90_spS444&_nc_cat=105&ccb=1-7&_nc_sid=67cdda&_nc_ohc=0h29L0XyfPYAX87vOE_&_nc_oc=AQkcBddzZoCXAAUoyKIuIl6M685cOrH3fPqdqUneQW8DLJpAhW4pQ-fF1NPxm9K0DYY&_nc_ht=scontent.fhan4-1.fna&oh=00_AT8w_LRc4h9g_oqCj_rC5yY2QRFk45otaIJEmklTUTmwZQ&oe=62FBF377" />
                                </div>
                                <div className="content__list--name">
                                    <p>2022 Photography Contest 'Hangeul I Met'</p>
                                    <p className="container--ads--link">hangeulphoto.kr</p>
                                </div>
                            </li>
                        </a>
                    </ul>
                    <hr></hr>
                    <ul className="content__list container__right--dob">
                        <h3 className="title--list">Sinh nhật</h3>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-icon1" src={imgIcon} />
                                </div>
                                <div className="content__list--name">
                                    <div className="line">
                                        <p className="content__list--name-des">Hôm nay là sinh nhật của </p>
                                        <p>Lưu Thắng</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-icon1" src={imgIcon} />
                                </div>
                                <div className="content__list--name">
                                    <div className="line">
                                        <p className="content__list--name-des">Hôm nay là sinh nhật của </p>
                                        <p>ABC</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                    <hr></hr>
                    <ul className="content__list container__right-friend">
                        <div className="container__right--edit">
                            <h3 className="title--list">Người liên hệ</h3>
                            <div className="container__right--edit-feature">
                                <a href="#">
                                    <div className="container__right--edit-link">
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="container__right--edit-link">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="container__right--edit-link">
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                                    <div className="content__list--img-status">
                                        <p>45 phút</p>
                                    </div>
                                </div>
                                <div className="content__list--name">
                                    <p>Lưu Thắng</p>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li className="content__list--link" >
                                <div className="content__list--img">
                                    <img className="img-cicle" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HHUCejY7sHwAX9Pz4_v&_nc_ht=scontent.fhan3-1.fna&oh=00_AT-Fo5pzvUkDNIXaAKxGW41ozW5BHYSFmQmCQ7Gi4PyiFA&oe=631991F8" />
                                    <div className="content__list--img-status active">
                                    </div>
                                </div>
                                <div className="content__list--name"><p>ABCD</p></div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Home;