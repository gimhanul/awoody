import "./Input.scss";

export default function Input(props) {
    return (
        <input
            type={props.type}
            className="input-text"
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.willDo}
        />
    )
}
