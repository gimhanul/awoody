import "./EditPositionModal.scss";
import Modal from "react-modal";
import Button from "../Button/Button";
import PositionData from "./position.json";
import TypeData from "./types.json";
import {useState} from "react";
import positionClassTypeColor from "../../utils/positionClassTypeColorConstant";

export default function EditPositionModal(props) {

    const [typeInput, setTypeInput] = useState("자습")
    const [positionInput, setPositionInput] = useState("")

    return (
        <Modal
            isOpen={props.isOpen}
            className="edit-position-modal"
            overlayClassName="edit-position-modal--overlay"
            centered
        >
            <div className="edit-position-modal">
                <div className="edit-position-modal--header">
                    <span className="title">내 위치 변경</span>
                    <div className="edit-position-modal--header-type-input">
                        <span className="edit-position-modal--header-type-input-badge"
                              style={{backgroundColor: positionClassTypeColor[typeInput]}}/>
                        <span>{typeInput}</span>
                        <span className="edit-position-modal--header-type-input-show">▾</span>
                        <ul className="edit-position-modal--header-type-input--list">
                            {TypeData.types.map(t => (
                                <li className="edit-position-modal--header-type-input--list-item">
                                    <span className="edit-position-modal--header-type-input-badge"
                                          style={{backgroundColor: positionClassTypeColor[t]}}/>
                                    <span>{t}</span>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="edit-position-modal--content">
                    <div className="edit-position-modal--content-search">
                        <input className="edit-position-modal--content-search-input"/>
                        <img className="edit-position-modal--content-search-search" src="./images/search.png"
                             alt="search"/>
                    </div>
                    <div className="edit-position-modal--content-search-result">
                        {
                            PositionData.position.map(p => (
                                <div className="position-search-result">
                                    <img className="position-search-result--gym"
                                         src={p.gym ? "./images/heart.png" : "./images/filled-heart.png"} alt="gym"/>
                                    <span className="position-search-result--position">{p.position}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="edit-position-modal--buttons">
                    <Button
                        text="취소"
                        willDo={props.closeModal}
                        className="edit-position-modal--buttons-cancel"
                    />
                    <Button
                        text="수정하기"
                        willDo={props.editWeeklyPosition}
                        className="edit-position-modal--buttons-edit"
                    />
                </div>
            </div>
        </Modal>
    )
}
