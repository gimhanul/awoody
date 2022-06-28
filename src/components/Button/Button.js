import "./Button.scss";

export default function Button(props) {

    return (
        <button onClick={props.willDo} className={`button ${props.className}`}>
            {props.text}
        </button>

    )
}
