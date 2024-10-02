import React from 'react';
import RecipeDetailModule from "../../css/RecipeDetail.module.css";

export const SideThreeContent = () => {
    return (
        <>
        <div id ={RecipeDetailModule["side-contant"]}>
            <div className={`${RecipeDetailModule["side-panel"]} ${RecipeDetailModule["detail-page"]}`}>
                <div className={RecipeDetailModule.contributor}>
                    <figure></figure>
                    <figcaption className={RecipeDetailModule.contri_name}>御稲荷&nbsp;和沙</figcaption>
                </div>
                <h3>管理栄養士</h3>
                <p>料理が好きで趣味で投稿しています。<br />みなさんと一緒においしいを共有できるようがんばります</p>
            </div>
            <div className={RecipeDetailModule.recommend_recipe}>
                <div className={RecipeDetailModule.reco_header}>おすすめレシピ</div>
                <div className={RecipeDetailModule.reco_picture_feild}>
                    <div className={RecipeDetailModule.reco_figure}>
                        <figure><img src="./images/side_thumbnail_01.png" /></figure>
                        <figcaption>サーモンソテー</figcaption>
                    </div>
                    <div className={RecipeDetailModule.reco_figure}>
                        <figure><img src="./images/side_thumbnail_02.png" /></figure>
                        <figcaption>ステーキ</figcaption>
                    </div>
                </div>
                <div className={RecipeDetailModule.week_recipe_btn}>今週のレシピを読む</div>
            </div>
            <div className={RecipeDetailModule["side-contant"]}>
            <div className={RecipeDetailModule["side-panel"]}>
                <h4>人気の調理レシピ</h4>
                <p>cooking recipes</p>                        
                <div className={RecipeDetailModule.top_one}>
                    <figure>
                        <img src="./images/v120_160.png"  width="100%" alt="TOP1" />
                    </figure>
                    <p>お寿司</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}