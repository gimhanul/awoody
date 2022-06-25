import "./Main.scss";
import noticeData from "./notice.json";
import todayPositionData from "./todayPosition.json";
import Notice from "../../components/Notice/Notice";
import Position from "../../components/Position/Position";
import {Link} from "react-router-dom";

export default function Main() {
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
