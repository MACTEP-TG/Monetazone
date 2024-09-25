import { ApplicationBody } from "../ApplicationBody/ApplicationBody.tsx";
import './application.scss';
import { FeaTypeApplication } from "../FeaTypeApplication/FeaTypeApplication.tsx";
import { SwiftTypeApplication } from "../SwiftTypeApplication/SwiftTypeApplication.tsx";
import { CashTypeApplication } from "../CashTypeApplication/CashTypeApplication.tsx";
import { useState } from "react";


export const Application = () => {
    const [applicationType, setApplicationType] = useState<'fea' | 'swift' | 'cash'>('fea');

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
                            onClick={() => setApplicationType('fea')}
                        >
                            ВЭД
                        </button>
                        <button
                            className={applicationType === 'swift' ? 'active type' : 'type'}
                            onClick={() => setApplicationType('swift')}
                        >
                            Swift/Sepa
                        </button>
                        <button
                            className={applicationType === 'cash' ? 'active type' : 'type'}
                            onClick={() => setApplicationType('cash')}
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
