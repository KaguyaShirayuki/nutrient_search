import React from 'react';
import TopModule from "../../css/Top.module.css";

export const FiveEssentialNutrients = () => {
    return(
        <>
        <div className={TopModule.cooking_method} id="nutrients">
            <p className={TopModule.sales_point}>必須な5大栄養素</p>
            <p>目的にあった栄養素、レシピを掲載！<br />あなたの不足している栄養を簡単に対策できます。</p>
            <div className={TopModule.nutrients_select}>
                <div className={TopModule.five_nutrients}>
                    <figure>
                        <img src="./images/food_eiyou3_tanpakushitsu.png" alt="たんぱく質" />
                    </figure>
                    <figcaption>たんぱく質</figcaption>
                </div>
                <div className={TopModule.five_nutrients}>
                    <figure>
                        <img src="./images/food_eiyou1_toushitsu.png" alt="糖質" />
                    </figure>
                    <figcaption>糖質</figcaption>
                </div>
                <div className={TopModule.five_nutrients}>
                    <figure>
                        <img src="./images/food_eiyou2_shishitsu.png" alt="脂質" />
                    </figure>
                    <figcaption>脂質</figcaption>
                </div>
                <div className={TopModule.five_nutrients}>
                    <figure>
                        <img src="./images/food_eiyou4_vitamin.png" alt="ビタミン" />
                    </figure>
                    <figcaption>ビタミン</figcaption>
                </div>
                <div className={TopModule.five_nutrients}>
                    <figure>
                        <img src="./images/food_eiyou5_mineral.png" alt="ミネラル" />
                    </figure>
                    <figcaption>ミネラル</figcaption>
                </div>
            </div>
            <div className={TopModule.video_area}>
                <div className={TopModule.video_tape}></div>
                <div className={TopModule.video_tape}></div>
                <div className={TopModule.video_tape}></div>
                <div className={TopModule.video_tape}></div>
                <div className={TopModule.video_tape}></div>
                <div className={TopModule.video_tape}></div>
            </div>
            <div className={TopModule.feature_all_btn}>
                栄養についてもっと詳しく
            </div>
        </div>
        </>
    )
}