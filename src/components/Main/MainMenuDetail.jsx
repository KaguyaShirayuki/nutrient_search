import React from 'react';
import RecipeDetailModule from "../../css/RecipeDetail.module.css";

export const MainMenuDetail = () => {
    return (
        <>
        <div id ={RecipeDetailModule.main}>                
            <figure>
                <img src="./images/v149_48.png" alt="料理画像" width="100%" />
            </figure>
            <figcaption className={RecipeDetailModule.picup_figcaption}>カルシウム満点！&emsp;美味しい小魚</figcaption>
            <div className={RecipeDetailModule.type_tag}>
                <div>カルシウム</div>
                <div>鉄分</div>
                <div>魚介料理</div>
                <div>和食</div>
            </div>        
 
            <div className={RecipeDetailModule.favorite_btn}>
                お気に入り登録&emsp;&#40;406&#41;
            </div>
            <div className={RecipeDetailModule.discription_recipe}>
                お酒が進む、病みつきの小魚です。<br />フライパンで熱した小魚にバター、ニンニクでサッと炒めたらさらに食が進みます。
            </div>

            <div className={RecipeDetailModule.recipe_twin_material}>
                <h2>材料：2人分</h2>
                <div className={RecipeDetailModule.food_material}>
                    <div>小魚</div>
                    <div>400g</div>
                </div>
                <div className={RecipeDetailModule.food_material}>
                    <div>小魚</div>
                    <div>400g</div>
                </div>
                <div className={RecipeDetailModule.food_material}>
                    <div>小魚</div>
                    <div>400g</div>
                </div>                    
            </div>

            <div className={RecipeDetailModule.recipe_twin_material}>
                <h2>作り方</h2>
                <div className={RecipeDetailModule.make_point}>

                    <h2>ポイント</h2>
                    <p>ニンニクを焼くときはなるべくみじん切りにした方がよいです。</p>
                </div>
                <div className={`${RecipeDetailModule.food_material} ${RecipeDetailModule.make_num}`}>
                    <div className={RecipeDetailModule.num_block}>1</div>
                    <p>バターをフライパンに入れ中火で温めてから小魚を投入する</p>
                </div>
                <div className={`${RecipeDetailModule.food_material} ${RecipeDetailModule.make_num}`}>
                    <div className={RecipeDetailModule.num_block}>2</div>
                    <p>ニンニクを細かく刻みニンニクをフライパンに入れて合える</p>
                </div>
            </div>

            <div className={RecipeDetailModule.recipe_twin_material}>
                <h2>質問</h2>
                <div className={RecipeDetailModule.question_textarea}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={RecipeDetailModule.question_submit_btn}>
                    栄養士に質問を送る
                </div>
            </div>

            <div className={RecipeDetailModule.recipe_twin_material}>
                <h2>作ってみた！</h2>
                <div className={RecipeDetailModule.charange_recipe_field}>
                    <div className={RecipeDetailModule.charanger}>
                        <div className={RecipeDetailModule.charanger_icon}>
                            <figure></figure>
                        </div>                         
                        <div className={RecipeDetailModule.charanger_profile}>
                            <h3>乙姫&emsp;優香</h3>
                            <p className={RecipeDetailModule.days}>2024/01/29 08:45</p>
                        </div>
                        <p>ニンニクとバターで炒めるだけで小魚だけよりもより美味しくいただけました。<br />
                            お酒が進みますね。お父さんも美味しいと褒めてくれました。
                        </p>                     
                    </div>
                    <div className={RecipeDetailModule.charange_image}>
                        <div className={RecipeDetailModule.review_number}>レビュー&emsp;&#40;1件&#41;</div>
                        <figure></figure>
                    </div>
                </div>
                <div className={RecipeDetailModule.recipe_post}>
                    このレシピを作ってみた&nbsp;&#33;&nbsp;を<br className={RecipeDetailModule["br-sp"]} />投稿する
                </div>
            </div>
        </div>
        </>
    )
}