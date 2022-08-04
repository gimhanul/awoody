import "./WeeklyPosition.scss";
import weeklyPositionData from "./weeklyPosition.json";
import Position from "../../components/Position/Position";
import {useState} from "react";
import {useContext, useEffect} from "react";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";
import Button from "../../components/Button/Button";
import EditPositionModal from "../../components/EditPositionModal/EditPositionModal";

export default function WeeklyPosition() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [weeklyPosition, setWeeklyPosition] = useState(weeklyPositionData.week)
    const [editPositionModalIsOpen, setEditPositionModalIsOpen] = useState(false);

    const {user} = useContext(UserContext);
    const navigation = useNavigate();

    const toggleCheck = index => {
        let current = weeklyPosition[activeIndex].position[index].isChecked;
        setWeeklyPosition(
            [...weeklyPosition],
            weeklyPosition[activeIndex].position[index].isChecked = !current
        )
    }

    useEffect(() => {
        if (checkObjectIsEmpty(user)) navigation("/login");
    })

    useEffect(() => {
        let weeklyPosition = [...weeklyPositionData.week];
        weeklyPosition.forEach(w => w.position.forEach(p => p.isChecked = false));
        setWeeklyPosition(weeklyPosition);
    }, [])

    return (
        <>
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
                            weeklyPosition[activeIndex].position.map((p, index) => (
                                <li className="weekly-position-days-day--position-position">
                                    <Position
                                        size="big"
                                        position={p.position}
                                        classType={p.classType}
                                        isChecked={p.isChecked}
                                        toggleCheck={() => toggleCheck(index)}
                                        editMode={editMode}
                                        startEditMode={() => {
                                            setEditMode(true)
                                            toggleCheck(index)
                                        }}
                                    />
                                </li>
                            ))
                        }
                    </ul>

                    <div className="weekly-position-button">
                        {editMode &&
                            <Button
                                text="수정하기"
                                willDo={() => setEditPositionModalIsOpen(true)}
                            />
                        }
                    </div>
                </div>
            </section>
            <EditPositionModal
                isOpen={editPositionModalIsOpen}
                closeModal={() => setEditPositionModalIsOpen(false)}
                weeklyPosition={weeklyPosition}
                editWeeklyPosition={() => console.log("변경변경 ㅋㅋ")}
            />
        </>
    )
}

