import React from 'react';
import { Link } from "react-router-dom";
import TopModule from "../../css/Top.module.css";

export const FirstViewContent = () => {
    return(
        <>
        <div className={TopModule.first_view}>
            <div className={TopModule.first_view_content}>
                <div className={TopModule.first_view_left}>
                    <div className={TopModule.first_view_row}>
                        <div className={TopModule.days}>1/31<br className={TopModule["br-pc"]} />（水）</div>
                        <div className={TopModule.todays_appel_title}>太陽の恵みを一新に浴びた<br className={TopModule["br-sp"]} />新鮮なビタミンE
                        <p>冬の厳しい環境に、身体の芯からあたたまるひと時をお楽しみいただけます</p></div>
                    </div>
                    <div className={TopModule.first_view_row}>
                        <figure><img src="./images/today_food_picture_1.jpg" alt="サーモンソテー" /><Link to ="/detail"><figcaption>サーモンソテー</figcaption></Link></figure>
                        <figure><img src="./images/today_food_picture_2.jpg" alt="ステーキ" /><Link to ="/detail"><figcaption>ステーキ</figcaption></Link></figure>
                    </div>
                    <div className={TopModule.week_recipe_btn}><Link to ="/search">今週のレシピを見る</Link></div>
                </div>             
                <div className={TopModule.side_page}>
                    <div className={TopModule.side_panel}>
                        <h2>人気の調理レシピ</h2>
                        <p className={TopModule.red_ruby}>cooking recipes</p>
                    
                        <div className={TopModule.ranking_recipe}>
                            <div className={TopModule.top1}>
                                <figure><img src="./images/best1.png" width="" alt="best1" /></figure>
                                <p>お寿司</p>
                            </div>
                            <div className={TopModule.top1}>
                                <figure><img src="./images/best2.png" width="" alt="best2" /></figure>
                                <p>おそば</p>
                            </div>
                            <div className={TopModule.top1}>
                                <figure><img src="./images/best3.png" width="" alt="best3" /></figure>
                                <p>みそ汁</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}