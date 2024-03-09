import React from 'react';
import SearchPageModule from "../../css/SearchPage.module.css";

export const SearchRecipeTextBox = () => {
   return (
    <>
    <div className={SearchPageModule["search_aria"]}>
        <form action="">
            <div className={SearchPageModule["form-row"]}>
                <div className={SearchPageModule.search_textbox}>
                    <input type="text" name="food" id="food" />
                    <p className={SearchPageModule["text-annotation"]}>※ 複数のキーワードを指定する場合は、スペースで区切って入力してください。</p>
                </div>
                <div className={SearchPageModule.search_btn}>
                    <div>検索</div>
                </div>
            </div>
        </form>
    </div>
    </>
   )
}