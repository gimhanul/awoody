import "./Notice.scss";
import {Link} from "react-router-dom";

export default function Notice(props) {

    return (
        <div className="notice-card">
            <Link to="">
                <span className="notice-card--title">{props.title}</span>
                <span className="notice-card--created-at">{props.createdAt}</span>
            </Link>
        </div>
    )
}
