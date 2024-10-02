import React from 'react';
import { SubHeaderNavigation } from "./Header/SubHeaderNavigation";
import { SearchRecipeTextBox } from "./Main/SearchRecipeTextBox";
import { RecipeHitResult } from "./Main/RecipeHitResult";
import { ResultData } from "./Main/ResultData";
import { SideContent } from "./Main/SideContent";
import { Footer } from "./Footer";

import SearchPageModule from "../css/SearchPage.module.css";

export const NutrientSearch = () => {
    return(
        <>
        <header className={SearchPageModule["lower-header"]} >        
            <SubHeaderNavigation />
        </header>
        <div id={SearchPageModule.main}> 
            <SearchRecipeTextBox />
            <RecipeHitResult />         
            <div className={SearchPageModule["main-flex"]}>
                <ResultData />
                <SideContent />
            </div>
        </div>       
        </>
    )
}