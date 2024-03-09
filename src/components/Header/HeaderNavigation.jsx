import React from 'react';
import TopModule from "../../css/Top.module.css";

export const HeaderNavigation = () => {
    return(
        <>
        <nav className={TopModule["header-top"]}>
            <div className={TopModule.logo}>
                <img src="./images/title_logo.png" alt="タイトルロゴ" />
            </div>
            <div className={TopModule["navigation-menu"]}>
                <ul className={TopModule.header_navi}>
                    <li><a href="#feature">サービスの特徴</a></li>
                    <li><a href="#purpose">目的別調理法</a></li>
                    <li><a href="#nutrients">5大栄養素</a></li>
                    <li><a href="#lecture">プロ栄養士</a></li>
                    <li><a href="#faq">よくある質問</a></li>
                </ul>
            </div>
            <div className={TopModule.recipe_search_btn}>
                <p>料理を<br className={TopModule["br-sp"]} />検索</p>
            </div>
            <div className={TopModule.sp_nav_btn}>三</div>
        </nav>
        </>
    )
}