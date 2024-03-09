import React from 'react';
import TopModule from "../../css/Top.module.css";

export const ExampleMalnutrition = () => {
    return(
        <>
        <div className={TopModule.cooking_method}>
            <p className={TopModule.sales_point}>栄養不足の一例</p>
            <p>体験に基づいた栄養のエピソードをご紹介します。<br />きっとあなたのお役に立つでしょう。</p>
            <div className={TopModule.method_type_select}>
                <div className={`${TopModule.method_01} ${TopModule.malnutrition}`} >
                    <figure>
                        <img src="./images/eiyo_busoku_1.jpg" alt="栄養不足1" width="100%" />
                    </figure>
                    <figcaption>疎かにしてはいけない栄養不足の恐怖</figcaption>
                </div>
                <div className={`${TopModule.method_01} ${TopModule.malnutrition}`} >
                    <figure>
                        <img src="./images/eiyo_busoku_2.jpg" alt="栄養不足2" width="100%" />
                    </figure>
                    <figcaption>疎かにしてはいけない栄養不足の恐怖</figcaption>
                </div>
                <div className={`${TopModule.method_01} ${TopModule.malnutrition}`} >
                    <figure>
                        <img src="./images/eiyo_busoku_3.jpg" alt="栄養不足3" width="100%" />
                    </figure>
                    <figcaption>疎かにしてはいけない栄養不足の恐怖</figcaption>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                栄養不足の一例を詳しく！
            </div>
        </div>
        </>
    )
}