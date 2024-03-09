import React from 'react';
import SearchPageModule from "../../css/SearchPage.module.css";

export const ResultData = () => {
    
    // 1. 写真の配列
    let imageLists = [];
    for(let i = 1; i < 6 ; i++) {
        imageLists += `search_result_image_0${i}.png`;
    }
    console.log(imageLists);

    // 2. 栄養タグの配列
    const setNutrientTags = ["カルシウム", "鉄分", "魚介料理", "和食"];


    // 3. 多重配列で加工します。
    // const resultDatas = [setNutrientTags, imageLists];

    // 栄養素タグをmap関数で付与
    
    const nutListTag = setNutrientTags.map((nutrientTag, index) => (
        <div key={index} className={SearchPageModule["tag-bg"]}>{nutrientTag}</div>
    ));    
    

    return (
        <>
        <div className={SearchPageModule.result_data}>
            <div className={SearchPageModule["flex-area"]}>
                <figure>
                    <img src="./images/search_result_image_01.png" width="100%" alt="検索画像1" />
                </figure>
                <div>
                    <p>2024/02/01</p>
                    <div>
                        <div className={SearchPageModule["tag-group"]}>
                            {nutListTag}
                        </div>                            
                        <div className={SearchPageModule["user-name"]}>
                            <div className={SearchPageModule["user-icon"]}></div>
                            <p className={SearchPageModule["user-myname"]}>御稲荷 和沙</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={SearchPageModule["hr-bottom"]}></div>
        </div>
        </>
    )
}