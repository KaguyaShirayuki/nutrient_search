import React from 'react';
import TopModule from "../css/Top.module.css";

export const Footer = () => {
    return(
        <footer>
            <ul className={TopModule.footer_navi}>
                <li>サービスの特徴</li>
                <li>目的別調理法</li>
                <li>5大栄養素</li>
                <li>プロ栄養士</li>
                <li>よくある質問</li>
            </ul>
        </footer>
    )
}



