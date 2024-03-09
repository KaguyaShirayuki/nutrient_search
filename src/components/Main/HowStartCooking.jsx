import React from 'react';
import TopModule from "../../css/Top.module.css";

export const HowStartCooking = () => {
    return (
        <>
        <div className={TopModule.cooking_method}>
            <p className={`${TopModule.sales_point} ${TopModule.chance}`}>栄養を意識した料理生活を始めよう<br /><span>料理を始めるきっかけ</span></p>
            <div className={TopModule.method_type_select}>
                <div className={TopModule.method_02}>
                    <figure>
                        <img src="./images/body_1.png" width="100%" alt="体形が気になる" />
                    </figure>
                    <figcaption>体形が気になり始めた</figcaption>
                    <p>若いころに比べて体重が増えた。<br />食生活を見直したい。</p>
                </div>
                <div className={TopModule.method_02}>
                    <figure>
                        <img src="./images/body_2.png" width="100%" alt="疲れやすい" />
                    </figure>
                    <figcaption>昔に比べ疲れやすくなった</figcaption>
                    <p>昔はハツラツとしていたのに今は何をしても疲れてしまう。</p>
                </div>
                <div className={TopModule.method_02}>
                    <figure>
                        <img src="./images/body_3.png" width="100%" alt="金が掛かる" />
                    </figure>
                    <figcaption>外食が嵩むようになった</figcaption>
                    <p>料理を作るのが嫌で外食をしていたが度重なる値上げに嫌気がさした。</p>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                もっと詳しく
            </div>
        </div>
        </>
    )
}