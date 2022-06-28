import "./CheckPosition.scss"
import positionClassTypeColor from "../../utils/positionClassTypeColorConstant";
import {Link} from "react-router-dom";

export default function CheckPosition(props) {

    const isChecked = props.remnantStudents === 0;

    return (
        <Link to="">
            <div className="check-position">
                <p className="check-position--position">{props.position}</p>
                <div className="check-position--class-type">
                    <span className="check-position--class-type-badge"
                          style={{backgroundColor: positionClassTypeColor[props.classType]}}/>
                    <span className="check-position--class-type-text">{props.classType}</span>
                </div>
                <div className={`check-position--status ${isChecked && "checked"}`}>
                    {isChecked ? <>&#x1f44C; 0명</> : <>&#x270B; {props.remnantStudents}명</>}
                </div>
            </div>
        </Link>
    )
}
