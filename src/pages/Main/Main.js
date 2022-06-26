import "./Main.scss";
import noticeData from "./notice.json";
import todayPositionData from "./todayPosition.json";
import Notice from "../../components/Notice/Notice";
import Position from "../../components/Position/Position";
import {Link, useNavigate} from "react-router-dom";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";
import {useContext, useEffect} from "react";
import {UserContext} from "../../App";

export default function Main() {

    const {user} = useContext(UserContext);
    const navigation = useNavigate();

    useEffect(() => {
        if (checkObjectIsEmpty(user)) navigation("/login");
    })

    return (
    <section>
            <div className="main-important">
                <div className="main-important-banner">
                    <img className="main-important-banner-image" src="./images/banner.png" alt="banner"/>
                </div>
                <div className="main-important-notice">
                    <div className="main-important-notice-inner">
                        {
                            noticeData.notice.map(n => (
                                <Notice
                                    title={n.title}
                                    createdAt={n.createdAt}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="main-today-position">
                <div className="main-today-position-inner">
                    <Link to="/position"><p className="title">오늘 내 위치</p></Link>
                    <div className="main-today-position--card">
                        {
                            todayPositionData.todayPosition.map(p => (
                                <Position
                                    size="small"
                                    position={p.position}
                                    classType={p.classType}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
