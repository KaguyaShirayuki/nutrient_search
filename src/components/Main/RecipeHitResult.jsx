import React from 'react';
import SearchPageModule from "../../css/SearchPage.module.css";

export const RecipeHitResult = () => {
    const setnums = [1,2,3,4,5];
   
    const numList = setnums.map((setnum, index) => (
        <option key={index} value="{setnum}">{setnum}件</option>
    ));
    return(
        <>
        <div className={SearchPageModule.search_result_word}>
            <h3 className={SearchPageModule["result-text"]}>"カルシウム"の検索結果は{numList.length}件です</h3>
            <div className={SearchPageModule["flex-table-header"]}>
                <p className={SearchPageModule["th_number"]}>表示件数</p>
                <select name="kensu" id="" className={SearchPageModule["select-size"]}>
                    {numList}       
                </select>
                <p className={SearchPageModule.th_number}>並び替え</p>
                <select name="kensu" id="" className={SearchPageModule["select-size"]}>
                    <option value="一致順">一致順</option>
                    <option value="新着順">新着順</option>
                </select>
                <p className={SearchPageModule.th_number}>{numList.length}件／{numList.length}件</p>
            </div>
            <div className={SearchPageModule["hr-bottom"]}></div>
        </div>
        </>
    )
}