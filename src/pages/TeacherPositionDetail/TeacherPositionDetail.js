import "./TeacherPositionDetail.scss";
import teacherPositionData from "./teacherPositionDetail.json";
import Button from "../../components/Button/Button";
import {useEffect, useState} from "react";
import positionClassTypeColor from "../../utils/positionClassTypeColorConstant";

export default function TeacherPositionDetail() {

    const [students, setStudents] = useState([]);

    const toggleIsCheckedByStudentNumber = studentNumber => {
        let index = students.findIndex(s => s.user.studentNumber === studentNumber);

        setStudents(
            [...students],
            students[index].isChecked = !students[index].isChecked
        )
    }

    useEffect(() => {
        let temp = teacherPositionData.students;
        if (students.filter(s => s.isChecked).length === 0) {
            temp = teacherPositionData.students.map(s => {
                s.isChecked = true;
                return s;
            })
        }
        setStudents(temp);
    }, []);

    return (
        <section className="purple-background">
            <div className="teacher-position-detail">
                <div className="teacher-position-detail-header">
                    <p className="title">{teacherPositionData.position}</p>
                    <span className="teacher-position-detail-header--badge">
                        <span className="teacher-position-detail-header--badge-badge" style={{backgroundColor: positionClassTypeColor[teacherPositionData.classType]}}/>
                        <span>{teacherPositionData.classType}</span>
                    </span>
                    <span className="teacher-position-detail-header--badge">
                        &#x270B; {students.length}명
                    </span>
                </div>
                <p className="teacher-position-detail-header--description">{teacherPositionData.classTime}교시</p>
                <div className="teacher-position-detail-content">
                    <div className="teacher-position-detail-content--students white-background">
                        {
                            students.map(s => (
                                <p
                                    className={`teacher-position-detail-content--students-student ${!s.isChecked && "not-is-checked"}`}
                                    onDoubleClick={() => toggleIsCheckedByStudentNumber(s.user.studentNumber)}
                                >
                                    {s.isChecked ? <>&#x270B; </> : <>&#x274C; </>}
                                    {s.user.studentNumber} {s.user.name}
                                </p>
                            ))
                        }
                    </div>
                    <div className="teacher-position-detail-content--memo white-background">
                        <p>메모</p>
                        <textarea
                            className="teacher-position-detail-content--memo-memo"
                            placeholder="내용을 입력하세요"
                        />
                    </div>
                    <div className="teacher-position-detail-button">
                        <Button
                            className="teacher-position-detail-button--defer"
                            text="보류"
                        />
                        <Button
                            className="teacher-position-detail-button--check"
                            text="출석 확인"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
