import React from 'react';

import { Feature } from "./Feature";
import { CookingMethodPurpose } from "./CookingMethodPurpose";
import { ProblemThatSolved } from "./ProblemThatSolved";
import { HowStartCooking } from "./HowStartCooking";
import { FiveEssentialNutrients } from "./FiveEssentialNutrients";
import { CustomersVoice } from "./CustomersVoice";
import { ExampleMalnutrition } from "./ExampleMalnutrition";
import { NutritionistLecture } from "./NutritionistLecture";
import { Faq } from "./Faq";

import TopModule from "../../css/Top.module.css";


export const Main = () => {
   return (
    <>
        <div id={TopModule.main}>      
            <Feature />
            <CookingMethodPurpose />
            <ProblemThatSolved />
            <HowStartCooking />
            <FiveEssentialNutrients />
            <CustomersVoice />
            <ExampleMalnutrition />
            <NutritionistLecture />
            <Faq />
        </div>
    </>
   )
}