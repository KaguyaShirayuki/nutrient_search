import React from 'react';
import SearchPageModule from "../../css/SearchPage.module.css";

export const SideContent = () => {
    return(
        <>
        <div className={SearchPageModule["side-contant"]}>
            <div className={SearchPageModule["side-panel"]}>
                <h4>人気の調理レシピ</h4>
                <p>cooking recipes</p>                        
                <div className={SearchPageModule.top_one}>
                    <figure>
                        <img src="./images/v120_160.png"  width="70%" alt="TOP1" />
                    </figure>
                    <p>お寿司</p>
                </div>
            </div>
        </div>
        </>
    )
}
