import React from 'react';
import TopModule from "../../css/Top.module.css";

import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

export const NutritionistLecture = () => {
    return(
        <>
        <Reveal animation={Animation.SlideInLeft} delay={500}>
        <div className={TopModule.cooking_method} id="lecture">
            <p className={TopModule.sales_point}>栄養士レクチャー</p>
            <p>お子様やご自身の健康をさらに意識した料理や意識など、<br />お客様に沿ったレシピでサポートします。</p>
            <div className={TopModule.eiyoshi}>
                <figure><img src="./images/eiyoshi_m.jpg" width="100%" alt="栄養士" /></figure>
            </div>
            <div className={TopModule.feature_all_btn}>
                詳細情報準備中
            </div>
        </div>
        </Reveal>
        </>
    )
}