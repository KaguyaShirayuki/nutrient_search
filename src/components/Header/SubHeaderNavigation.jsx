import React from 'react';

import { Feature } from "../Main/Feature";
import { CookingMethodPurpose } from "../Main/CookingMethodPurpose";
import { FiveEssentialNutrients } from "../Main/FiveEssentialNutrients";
import { NutritionistLecture } from "../Main/NutritionistLecture";
import { Faq } from "../Main/Faq";

import {HashLink} from 'react-router-hash-link';

// import { BrowserRouter , Route, Link } from 'react-router-dom';
import { Routes, Route, Link} from "react-router-dom";
import SearchPageModule from "../../css/SearchPage.module.css";

export const SubHeaderNavigation = () => {
    return (
        <>
        <div className={SearchPageModule.logo}>
            <Link to="/"><img src="./images/v120_45.png"  alt="" /></Link>
        </div>
        <nav>
            <ul>
                <li><HashLink to ="/#feature">サービスの特徴</HashLink></li>
                <li><HashLink to ="/#purpose">目標別調理法</HashLink></li>
                <li><HashLink to ="/#nutrients">5大栄養素</HashLink></li>
                <li><HashLink to ="/#lecture">プロ栄養士</HashLink></li>
                <li><HashLink to ="/#faq">よくある質問</HashLink></li>
            </ul>
            <div className={SearchPageModule["btn-blue"]}>料理名を<br className={SearchPageModule["br-sp"]} />検索</div>
            <div className={SearchPageModule.sp_nav_btn}>三</div>
            <div className={SearchPageModule.sp_nav_btn_click}>X</div>
        </nav>
        </>
    )
}

