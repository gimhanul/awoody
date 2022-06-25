import "./Header.scss";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="header-inner">
                <div className="header-logo-wrapper">
                    <Link to="/">
                        <img src="./images/logo.svg" alt="awoody" width={130}/>
                    </Link>
                </div>

                <div className="header-navigation-wrapper">
                    <ul className="header-navigation">
                        <li>
                            <Link to="/position">
                                위치
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                일정
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                공지
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="header-user-field-wrapper">
                    <ul className="header-user-field">
                        <li>
                            <Link to="">
                                로그인
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                회원가입
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
