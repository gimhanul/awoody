import "./Login.scss";
import Input from "../../components/Input/Input";
import {useContext, useState} from "react";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

export default function Login() {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const [loginInput, setLoginInput] = useState({
        id: "",
        password: "",
    });

    const changeLoginInput = e => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value,
        });
    };

    const login = () => {
        if (loginInput.id === "gimhanul" && loginInput.password === "gimhanul") {
            const user = {
                name: "김한울",
                studentNumber: 2102,
                authority: "학생"
            }
            setUser(user);
            navigate("/");
        } else if (loginInput.id === "teacher" && loginInput.password === "teacher") {
            const user = {
                name: "이채영",
                authority: "선생님"
            }
            setUser(user);
            navigate("/teacher");
        } else {
            alert("아이디 또는 비밀번호 오류입니다.")
        }

    };

    return (
        <section className="login-container">
            <div className="login-banner half">
                <img className="login-half-banner-image" src="./images/loginBanner.png" alt="login-banner"/>
            </div>
            <div className="login-login half">
                <span className="title">로그인</span>
                <div className="login-login--input">
                    <Input type="text" placeholder="아이디를 입력해주세요" name="id" willDo={changeLoginInput}/>
                    <Input type="password" placeholder="비밀번호를 입력해주세요" name="password" willDo={changeLoginInput}/>
                </div>
                <Button className="login-button" willDo={login} text="로그인"/>
                <span className="login-no-join">
                    계정이 없으신가요? <Link to="" className="purple">회원가입하기</Link>
                </span>
            </div>
        </section>
    )
}
