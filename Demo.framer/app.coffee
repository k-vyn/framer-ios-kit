## Import Module
ios = require 'iOSKit'

whiteBG = new BackgroundLayer


tab = new ios.Tab label:"Cats", icon:"<?xml version='1.0' encoding='UTF-8' standalone='no'?>
<svg width='30px' height='22px' viewBox='0 0 30 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <!-- Generator: Sketch 3.6.1 (26313) - http://www.bohemiancoding.com/sketch -->
    <title>Rectangle 1524</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id='iOS-9' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='iOS-9-GUI' transform='translate(-1387.000000, -3127.000000)' fill='#007AFF'>
            <g id='Tab-Bar-3' transform='translate(1346.000000, 3120.000000)'>
                <g id='Favorites' transform='translate(38.605942, 6.960984)'>
                    <path d='M28.3940576,3.03901561 L28.3940576,0.0390156062 L2.39405762,0.0390156062 L2.39405762,18.0390156 L5.39405762,18.0390156 L5.39405762,3.03901561 L28.3940576,3.03901561 Z M6.39405762,4.03901561 L32.3940576,4.03901561 L32.3940576,22.0390156 L6.39405762,22.0390156 L6.39405762,4.03901561 Z' id='Rectangle-1524'></path>
                </g>
            </g>
        </g>
    </g>
</svg>"

tab2 = new ios.Tab

tabBar = new ios.TabBar tabs:[tab, tab2],activeFillColor:"red", activeLabelColor:"red"