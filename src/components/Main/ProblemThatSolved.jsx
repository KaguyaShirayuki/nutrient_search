import React from 'react';
import TopModule from "../../css/Top.module.css";

import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

export const ProblemThatSolved = () => {
    return (
        <>
        <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className={TopModule.cooking_method}>
            <p className={TopModule.sales_point}>解決できるお悩み<br /><span>自炊や料理を始めるうえでこのようなお悩みの方におすすめです</span></p>
            <div className={TopModule.method_type_select}>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/1.cooking_hassle.png" width="100%" alt="料理が苦手" />
                    </figure>
                    <p>料理が苦手で面倒に感じる</p>
                </div>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/2.food_expenditure.png" width="100%" alt="お金掛けたくない" />
                    </figure>
                    <p>食費にお金を掛けたくない</p>
                </div>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/3.gakkari.png" width="100%" alt="ガッカリさせたくない" />
                    </figure>
                    <p>失敗してあの人をガッカリさせたくない</p>
                </div>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/4.takes_time.png" width="100%" alt="難しくて時間がかかる" />
                    </figure>
                    <p>難しくて時間がかかる</p>
                </div>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/5.children_no_vegitable.png" width="100%" alt="子供が食べてくれない" />
                    </figure>
                    <p>作ったのに子供が食べてくれない</p>
                </div>
                <div className={TopModule.cook_help_01}>
                    <figure>
                        <img src="./images/6.children_no_vegitable.png" width="100%" alt="好き嫌い" />
                    </figure>
                    <p>好き嫌いが多くて食べてくれない</p>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                詳細な内容はこちら！
            </div>
        </div>
        </Reveal>
        </>
    )
}