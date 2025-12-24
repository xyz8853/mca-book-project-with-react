import { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import Page1 from "../page/Page1";
import OnlineCources from "../cources/OnlineCources";
import OfflineCources from "../cources/OfflineCources";
import FooterBarSecond from "../footer_bar/FooterBarSecond";
import {FooterBarFirst} from "../footer_bar/FooterBarFirst";

export default function Home(){
    return(
        <>
            <Navbar></Navbar>
            <Page1></Page1>
            <OnlineCources></OnlineCources>
            <OfflineCources></OfflineCources>
            <FooterBarSecond></FooterBarSecond>
            <FooterBarFirst></FooterBarFirst>
            
         </>
    )
}