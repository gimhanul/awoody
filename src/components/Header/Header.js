import "./Header.scss";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../App";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";
import {checkUserAuthority} from "../../utils/checkUserAuthority";

export default function Header() {

    const {user} = useContext(UserContext);

    return (
        <>
            {!checkObjectIsEmpty(user) &&
                <header>
                    <div className="header-inner">
                        <div className="header-logo-wrapper">
                            {checkUserAuthority(user, "학생") &&
                                <Link to="/">
                                    <img src="./images/logo.svg" alt="awoody" height={33}/>
                                </Link>
                            }
                            {checkUserAuthority(user, "선생님") &&
                                <Link to="/teacher">
                                    <img src="./images/teacherLogo.svg" alt="awoody-teacher" height={33}/>
                                </Link>

                            }
                        </div>

                        <div className="header-navigation-wrapper">
                            <ul className="header-navigation">
                                {checkUserAuthority(user, "학생") &&
                                    <>
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
                                    </>
                                }
                                {checkUserAuthority(user, "선생님") &&
                                    <>
                                        <li>
                                            <Link to="/teacher/position">
                                                위치
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                공지
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>

                        <div className="header-user-field-wrapper">
                            <ul className="header-user-field">
                                <li>
                                    <Link to="">
                                        {user.authority}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        {user.name}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            }
        </>
    )
}
