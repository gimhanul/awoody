import "./Main.scss";
import noticeData from "./notice.json";
import Notice from "../../components/Notice/Notice";

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

            </div>
        </section>
    )
}
