import React from 'react';
import { SubHeaderNavigation } from "./Header/SubHeaderNavigation";
import { MainMenuDetail } from "./Main/MainMenuDetail";
import { SideThreeContent } from "./Main/SideThreeContent";

import RecipeDetailModule from "../css/RecipeDetail.module.css";
import SearchPageModule   from "../css/SearchPage.module.css";

export const NutrientDetail = () => {
    return(
        <>
        <header className={SearchPageModule["lower-header"]} >  
            <SubHeaderNavigation />
        </header>
        <div id={RecipeDetailModule.container}>
            <MainMenuDetail />
            <SideThreeContent />
        </div>  
        </>        
    )
}