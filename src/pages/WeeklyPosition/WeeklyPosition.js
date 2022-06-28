import "./WeeklyPosition.scss";
import weeklyPositionData from "./weeklyPosition.json";
import Position from "../../components/Position/Position";
import {useState} from "react";
import {useContext, useEffect} from "react";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";

export default function WeeklyPosition() {

    const [activeIndex, setActiveIndex] = useState(0);

    const {user} = useContext(UserContext);
    const navigation = useNavigate();

    useEffect(() => {
        if (checkObjectIsEmpty(user)) navigation("/login");
    })

    return (
        <section className="purple-background">
            <div className="weekly-position">
                <div className="weekly-position-top">
                    <p className="title">이번 일주일의 내 위치</p>
                    <ul className="weekly-position--days">
                        {
                            weeklyPositionData.week.map((w, index) => (
                                <li className={`weekly-position--days-day ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}>
                                    {w.day}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <ul className="weekly-position-days-day--position">
                    {
                        weeklyPositionData.week[activeIndex].position.map(p => (
                            <li className="weekly-position-days-day--position-position">
                                <Position
                                    size="big"
                                    position={p.position}
                                    classType={p.classType}
                                />
                            </li>
                        ))
                    }
                </ul>

                <div className="weekly-position-button">
                </div>
            </div>
        </section>
    )
}

