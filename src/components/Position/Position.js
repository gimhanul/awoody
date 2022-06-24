import "./Position.scss";
import positionClassTypeColor from "../../utils/positionClassTypeColorConstant";

export default function Position(props) {

    return (
        <div className="position-card">
            <span className="position-card-text">{props.position}</span>
            <div className="position-card--class-type">
                <span className="position-card--class-type-badge" style={{backgroundColor: positionClassTypeColor[props.classType]}}/>
                <span className="position-card--class-type-text">{props.classType}</span>
            </div>
        </div>
    )
}
