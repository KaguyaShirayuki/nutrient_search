import React from 'react';
import TopModule from "../../css/Top.module.css";

export const Faq = () => {
    return (
        <>
        <div className={TopModule.cooking_method} id="faq">
            <p className={TopModule.title_point}>FAQ<br /><span>よくある質問</span></p>
            <p>申し込みを検討いただくお客様から寄せられる質問をご紹介しています。<br />その他の質問はこちらからご参照ください。</p>
            <div className={TopModule.question_list}>
                <div><p>人間に必要な栄養素はどれくらいあるのでしょうか？</p></div>
                <div><p>食べ物でしか得られない栄養素を教えてください。</p></div>
                <div><p>運動で得られる栄養素は何になりますか？</p></div>
                <div><p>筋肉を鍛えるのに必要な栄養素を教えてください。</p></div>
                <div><p>食べる時間が家族と合いません。<br />保存の効く料理を教えてください。</p></div>
            </div>
            <div className={TopModule.feature_all_btn}>
                詳細情報準備中
            </div>
        </div>
        </>
    )
}