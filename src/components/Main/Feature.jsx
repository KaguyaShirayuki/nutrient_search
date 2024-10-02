import React from 'react';
import TopModule from "../../css/Top.module.css";

import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

export const Feature = () => {

    // const {scrollFadeIn, setScrollFadeIn} = useState([]);

    return (
        <>
        <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className={TopModule.feature} id="feature">
            <div className={TopModule.main_title_header}>
                <p className={TopModule.title_point}>FEATURE<br /><span className={TopModule.pikup_title}>サービスの特徴</span></p>
            </div>
            <div className={TopModule.feature_odd}>
                <figure><img src="./images/service_feature_1.png" width="100%" alt="" /></figure>
                <div className={TopModule.feature_odd_right}>
                    <div className={TopModule.menu_content}>
                        <h2>献立のたて方</h2>
                        <p className={TopModule.feature_right_text}>
                        献立を考える上で大事なポイントは、</p>
                        <ol>
                            <li>エネルギーになるもの</li>
                            <li>からだをつくるもの</li>
                            <li>からだの調子を整えるもの</li>
                        </ol>
                        <p className={TopModule.feature_right_text}>の3つの要素を毎食とり入れることです。<br />
                        それには、</p>
                        <ol>
                            <li>主食(炭水化物などによるエネルギー源)</li>
                            <li>主菜(主要なたんぱく質・脂質源)</li>
                            <li>副菜(ビタミン・ミネラル源)</li>
                        </ol>
                        <p className={TopModule.feature_right_text}>の組み合わせが基本となります。</p>
                    </div>
                </div>
            </div>
            <div className={TopModule.feature_even}>
                <figure><img src="./images/service_feature_2.png" width="100%" alt="" /></figure>
                <div className={TopModule.feature_even_left}>
                    <div className={TopModule.menu_content}>
                        <h2>調理のポイント</h2>
                        <p className={TopModule.feature_even_left_text}>
                            バランスのよい食事をおいしく食べるためには、調理に気を配ることも大切です。
                            食塩、脂質のとりすぎにならない調理を日ごろから心がけましょう。
                        </p>
                    </div>
                </div>
            </div>
            <div className={TopModule.feature_odd}>
                <figure><img src="./images/service_feature_3.png" width="100%" alt="" /></figure>
                <div className={TopModule.feature_odd_right}>
                    <div className={TopModule.menu_content}>
                        <h2>食べる時のポイント</h2>
                        <p className={TopModule.feature_right_text}>
                            実際に食べるときに
                            気をつけることを次にあげてみました。</p>
                        <ol>
                            <li>食事と時間</li>
                            <li>薄味に慣れましょう</li>
                            <li>よくかんで食べよう</li>
                            <li>食塩摂取量に気をつけて</li>
                            <li>食べすぎにならないように</li>
                        </ol>
                        <p className={TopModule.feature_right_text}>の組み合わせが基本となります。</p>
                    </div>
                </div>
            </div>
            <div className={TopModule.feature_all_btn}>
                サービスの詳しい内容
            </div>
        </div>
        </Reveal>
        </>
    )
}