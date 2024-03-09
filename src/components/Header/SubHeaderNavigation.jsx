import React from 'react';
import { Link } from "react-router-dom";
import SearchPageModule from "../../css/SearchPage.module.css";

export const SubHeaderNavigation = () => {
    return (
        <>
        
            <div className={SearchPageModule.logo}>
                <Link to="/"><img src="./images/v120_45.png"  alt="" /></Link>
            </div>
            <nav>
                <ul>
                    <li>サービスの特徴</li>
                    <li>目標別調理法</li>
                    <li>5大栄養素</li>
                    <li>プロ栄養士</li>
                    <li>よくある質問</li>
                </ul>
                <div className={SearchPageModule["btn-blue"]}>料理名を<br className={SearchPageModule["br-sp"]} />検索</div>
                <div className={SearchPageModule.sp_nav_btn}>三</div>
                <div className={SearchPageModule.sp_nav_btn_click}>X</div>
            </nav>
        
        </>
    )
}