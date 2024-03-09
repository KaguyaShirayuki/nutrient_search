import React from 'react';
import TopModule from "../../css/Top.module.css";

export const CustomersVoice = () => {
    return(
        <>
        <div className={TopModule.cooking_method}>
            <p className={TopModule.title_point}>customer's voice<br /><span>お客様の声</span></p>
            <div className={TopModule.customer_voice_outer}>
                <div className={TopModule.customer_voice}>
                    <div className={TopModule.customer_picture}>
                        <figure><img src="./images/body_5.png" alt="お客様の声" /></figure>
                    </div>
                    <div className={TopModule.right_thanks_word}>
                        <h3>20代・女性・K様</h3>
                        <p>子供の栄養を考えるのにとても助かりました。<br />また、食事を作ることも楽しくなりました。</p>
                    </div>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                お客様の声一覧はこちら
            </div>
        </div>
        </>
    )
}