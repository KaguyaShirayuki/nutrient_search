import React from 'react';
import { SearchRecipeArea } from "./SearchRecipeArea";
import { HeaderNavigation } from "./HeaderNavigation";
import { FirstViewContent } from "./FirstViewContent";

import TopModule from "../../css/Top.module.css"

export const Header = () => {
    // useStateを設定する

    // useEffectを設定する


// Function関数を定義する
    return (
        <>
        <header className = {TopModule["top-header"]}>
            <SearchRecipeArea />
            <HeaderNavigation />
            <FirstViewContent />
        </header>
        </>
    )
}