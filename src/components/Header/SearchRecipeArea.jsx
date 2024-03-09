import React from 'react';
import TopModule from "../../css/Top.module.css";

export const SearchRecipeArea = () => {

    return (
        <>
        {/* <!-- 料理を検索ボタンを押下後、料理検索ボックスを表示 --> */}
        <div className={TopModule.search_recipe_aria_bg}>
            <div className={TopModule.search_recipe_aria}>
                <form action="">
                    <input type="text" placeholder="料理名・栄養素名を検索"></input>
                    <p>※ 複数のキーワードを指定する場合は、スペースで区切って入力してください。</p>
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <th>人気のキーワード</th>
                            <td><div className={TopModule.keyword_btn}>クリームシチュー</div></td>
                            <td><div className={TopModule.keyword_btn}>亜鉛</div></td>
                            <td><div className={TopModule.keyword_btn}>カルシウム</div></td>
                        </tr>
                        </tbody>                       
                    </table>
                    <div className={TopModule.feature_all_btn}>
                        検索
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}