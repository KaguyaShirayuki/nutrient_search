import React from 'react';
import TopModule from "../../css/Top.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const HeaderNavigation = () => {
    return(
        <>
        <nav className={TopModule["header-top"]}>
            <div className={TopModule.logo}>
                <img src="./images/title_logo.png" alt="タイトルロゴ" />
            </div>
            <div className={TopModule["navigation-menu"]}>
                <ul className={TopModule.header_navi}>
                    <li><Link 
                        activeClass="active"
                        to="feature"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >サービスの特徴</Link></li>
                    <li><Link 
                        activeClass="active"
                        to="purpose"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >目的別調理法</Link></li>
                    <li><Link 
                        activeClass="active"
                        to="nutrients"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >5大栄養素</Link></li>
                    <li><Link 
                        activeClass="active"
                        to="lecture"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >プロ栄養士</Link></li>
                    <li><Link 
                        activeClass="active"
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >よくある質問</Link></li>
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