import React from "react"import "./BannerStyle.scss"import background from "./images/header-bg.png"export default function Banner() {    return(        <div id="banner">            <div className="contain">                <div className="title-banner">                    <h3>КЛИНИНГОВАЯ КОМПАНИЯ</h3>                    <h6>РАБОТАЕМ ПО ВСЕЙ ЛАТВИИ И НЕ ТОЛЬКО</h6>                </div>                <div className="img-banner"><img src={background} alt=""/></div>            </div>        </div>    )}