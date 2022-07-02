import "./TeacherPosition.scss";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";
import teacherPositionData from "../TeacherPosition/teacherPosition.json";
import CheckPosition from "../../components/CheckPosition/CheckPosition";

export default function TeacherPosition() {

    const [activeIndex, setActiveIndex] = useState(0);

    const {user} = useContext(UserContext);
    const navigation = useNavigate();

    useEffect(() => {
        checkObjectIsEmpty(user) && navigation("/login");
    }, []);

    const getRemnantStudentsNumber = p => p.remnantStudents.filter(s => !s.isChecked);

    useEffect(() => {
        const sortedData = teacherPositionData.class.map(c => {
            c.position.sort((prev, curr) => getRemnantStudentsNumber(curr).length - getRemnantStudentsNumber(prev).length)
        });
    }, []);

    return (
        <section className="purple-background">
            <div className="teacher-position">
                <div className="teacher-position-top">
                    <p className="title">오늘, 학생들의 위치</p>
                    <ul className="today-students-position--class">
                        {
                            teacherPositionData.class.map((d, index) => (
                                <li className={`today-students-position--class-class ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}>
                                    {d.classTime}교시
                                </li>
                            ))
                        }
                    </ul>

                    <div className="today-students-position--position">
                        {
                            teacherPositionData.class[activeIndex].position.map(p => (
                                <div className="today-students-position--position-position">
                                    <CheckPosition
                                        id={p.id}
                                        position={p.position}
                                        classType={p.classType}
                                        remnantStudents={getRemnantStudentsNumber(p).length}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
