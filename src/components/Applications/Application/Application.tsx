import { ApplicationBody } from "../ApplicationBody/ApplicationBody.tsx";
import './application.scss';
import { FeaTypeApplication } from "../FeaTypeApplication/FeaTypeApplication.tsx";
import { SwiftTypeApplication } from "../SwiftTypeApplication/SwiftTypeApplication.tsx";
import { CashTypeApplication } from "../CashTypeApplication/CashTypeApplication.tsx";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAppType} from "../../../store/appPopUpSlice.ts";


export const Application = () => {
    const dispatch = useDispatch()

    const {applicationType} = useSelector(state => state.appPopUp)

    return (
        <ApplicationBody>
            <div className="application">
                <div className="top">
                    <div className="left">
                        <h2>Укажите необходимую информацию</h2>
                        <p>После создания заявки сайт  автоматически перенаправит вас в<br />
                            наш Telegram Bot, где операторы быстро помогут вам.</p>
                    </div>

                    <div className="right">
                        <button
                            className={applicationType === 'fea' ? 'active type' : 'type'}
                            onClick={() => dispatch(setAppType('fea'))}
                        >
                            ВЭД
                        </button>
                        <button
                            className={applicationType === 'swift' ? 'active type' : 'type'}
                            onClick={() => dispatch(setAppType('swift'))}
                        >
                            Swift/Sepa
                        </button>
                        <button
                            className={applicationType === 'cash' ? 'active type' : 'type'}
                            onClick={() => dispatch(setAppType('cash'))}
                        >
                            Cash
                        </button>
                    </div>
                </div>

                <div className="bottom">
                    {applicationType === 'fea' && <FeaTypeApplication />}
                    {applicationType === 'swift' && <SwiftTypeApplication />}
                    {applicationType === 'cash' && <CashTypeApplication />}
                </div>
            </div>
        </ApplicationBody>
    );
};
