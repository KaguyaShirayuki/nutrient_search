import React from 'react';
import TopModule from "../../css/Top.module.css";

export const CookingMethodPurpose = () => {
    return(
        <>
        <div className={TopModule.cooking_method} id={TopModule.purpose}>
            <p className={TopModule["title_point"]}>Cooking method by purpose<br /><span className={TopModule.pikup_title}>目的別調理方法</span></p>
            <div className={TopModule.method_type_select}>
                <div className={TopModule.method_01}>
                    <figure>
                        <img src="./images/method_1.jpg" alt="コスト重視" />
                    </figure>
                    <figcaption>コスト重視</figcaption>
                    <p>とにかく費用がかからず、気軽に栄養を取りたい方向けの調理方法です。料理が苦手な方でも対応できるノウハウをご紹介します。</p>
                </div>
                <div className={TopModule.method_01}>
                    <figure>
                        <img src="./images/method_2.jpg" alt="コスト重視" />
                    </figure>
                    <figcaption>体質改善</figcaption>
                    <p>健康診断で引っかかってしまった部分を解消するため、徹底した栄養学と食事療法をご紹介します。</p>
                </div>
                <div className={TopModule.method_01}>
                    <figure>
                        <img src="./images/method_3.jpg" alt="コスト重視" />
                    </figure>
                    <figcaption>コニュニケーション重視</figcaption>
                    <p>家族と楽しいひと時を重視する人気の料理とレシピをご紹介。気になるあの人と一緒に過ごす貴重な時間を共有しませんか？</p>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                詳細な内容はこちら！
            </div>
        </div>
        </>
    )
}