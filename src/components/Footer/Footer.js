import "./Footer.scss";
import {useContext} from "react";
import {UserContext} from "../../App";
import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";

export default function Footer() {

    const {user} = useContext(UserContext);


    return (
        <>
            {!checkObjectIsEmpty(user) &&
                <footer>
                    <div className="footer-sns">
                        @gimhanul
                        <a href="https://github.com/gimhanul/awoody" target="_blank"><img src="./images/github.svg"
                                                                                          alt="github"/></a>
                        <a href="https://instagram.com/iduzyoy" target="_blank"><img src="./images/instagram.svg"
                                                                                     alt="instagram"/></a>
                        <a href="https://velog.io/@gimhanul" target="_blank"><img src="./images/velog.svg" alt="velog"/></a>
                    </div>
                </footer>
            }
        </>
    )
}
