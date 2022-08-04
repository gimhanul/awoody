import "./Position.scss";
import positionClassTypeColor from "../../utils/positionClassTypeColorConstant";
import Check from "../Check/Check";

export default function Position(props) {

    return (
        <div className={`position-wrapper ${props.size}`}>
            {props.editMode &&
                <div className="position-check-wrapper">
                    <Check
                        isChecked={props.isChecked}
                        willDo={props.toggleCheck}
                        className="position-check"
                    />
                </div>
            }
            <div className={`position-card ${props.editMode ? "edit-mode" : ""} ${props.isChecked ? "purple-background" : ""}`}
                 onDoubleClick={props.startEditMode}
                 onClick={props.editMode && props.toggleCheck}
            >
                <span className="position-card-text">{props.position}</span>
                <div className="position-card--class-type">
                    <span className="position-card--class-type-badge"
                          style={{backgroundColor: positionClassTypeColor[props.classType]}}/>
                    <span className="position-card--class-type-text">{props.classType}</span>
                </div>
            </div>
        </div>
    )
}
