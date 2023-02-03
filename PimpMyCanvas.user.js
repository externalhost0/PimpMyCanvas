// ==UserScript==
// @name         PimpMyCanvas
// @namespace    http://tampermonkey.net/
// @version      1.2.1.3
// @downloadURL  https://github.com/ExternalHost0/PimpMyCanvas/raw/master/PimpMyCanvas.user.js
// @updateURL    https://github.com/ExternalHost0/PimpMyCanvas/raw/master/PimpMyCanvas.user.js
// @description  Changes the color of Canvas LMS
// @author       External Host
// @match        https://*.instructure.com/*
// @icon         https://i.postimg.cc/7hJpHcMQ/canvas2.png
// @supportURL   https://github.com/ExternalHost0/PimpMyCanvas/issues
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://code.jquery.com/ui/1.13.2/jquery-ui.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    const defaultColors = {
        backgroundColor: "#ffffff",
        sideColor: "#394B58",
        sideColorGradient: "linear-gradient(0deg, #00296b, #003f88, #00509d, #fdc500, #ffd500)",
        minorsideColor: "#3055bb",
        newNotifColor: "#ffb711",
        dangerColor: "#ff0d41",
        textColor: "#03081f",
        minortextColor: "#1c1b26",
        buttonbackColor: "#ffffff",
        secondarybackgroundColor: "#ebedee",
        tertiarybackgroundColor: "#ffffff",
        hoverColor: "#739df2",
        iconColor: "#ffffff",
        slimborderfixColor: "#c7cdd1",
    }
    
    let colors = GM_getValue('colors', defaultColors)
    if (GM_getValue("sT", "Switch to Gradient") == "Switch to Gradient") {
        document.documentElement.style.setProperty('--sideColor', colors.sideColor);
    }
    if (GM_getValue("sT", "Switch to Gradient") == "Switch to Static Color") {
        document.documentElement.style.setProperty('--sideColor', colors.sideColorGradient);
    }
    GM_addStyle(/*css*/`
    /* I change like sixty eight global variables */
    :root{
        --backgroundColor: ${colors.backgroundColor};
        --sideColor: ${colors.sideColor};
        --minorsideColor: ${colors.minorsideColor}; 
        --newNotifColor: ${colors.newNotifColor}; 
        --dangerColor: ${colors.dangerColor};
        --textColor: ${colors.textColor};
        --minortextColor: ${colors.minortextColor};
        --buttonbackColor: ${colors.buttonbackColor};
        --secondarybackgroundColor: ${colors.secondarybackgroundColor};
        --tertiarybackgroundColor: ${colors.tertiarybackgroundColor};
        --hoverColor: ${colors.hoverColor};
        --iconColor: ${colors.iconColor};
        --slimborderfixColor: ${colors.slimborderfixColor};


        
        --ic-brand-font-color-dark-lightened-15: var(--minortextColor) !important;
        --ic-brand-font-color-dark-lightened-30: var(--textColor) !important;
        --MlJlv-textColor: var(--textColor) !important;
        --sJGfW-iconColor: var(--hoverColor) !important;
        --cCGLM-color: var(--minortextColor) !important;
        --eqmZq-color: var(--minortextColor) !important;
        --eqmZq-background: var(--secondarybackgroundColor) !important;
        --eqmZq-highlightedBackground: var(--hoverColor) !important;
        --qBMHb-borderColor: var(--iconColor) !important;
        --feqxT-color: var(--iconColor) !important;
        --sJGfW-labelColor: var(--minorsideColor) !important;
        --eoNrR-color: var(--minortextColor) !important;
        --eAJaG-secondaryColor: var(--minortextColor) !important;
        --jpyTq-color: var(--minortextColor) !important;
        --qBMHb-color: var(--minortextColor) !important;
        --brMfX-background: var(--backgroundColor) !important;
        --XOwIb-defaultColor: var(--textColor) !important;
        --blnAQ-borderColor: var(--minortextColor) !important;
        --voGQb-color: var(--textColor) !important;
        --cCGLM-secondaryColor: var(--minortextColor) !important;
        --ic-brand-primary-darkened-15: var(--minorsideColor) !important;
        --deLCD-meterColorBrand: var(--minorsideColor) !important;
        --dNoYT-background: var(--backgroundColor) !important;
        --ic-link-color-lightened-10: 0 !important;
        --dyzZI-canvasBackgroundColor: 0 !important;
        --fQfxa-primaryGhostColor: var(--minorsideColor) !important;
        --dyzZI-canvasFocusBorderColor: var(--minorsideColor) !important;
        --wIZqC-trackColor: var(--backgroundColor) !important;
        --Spinner-inverseColor: var(--minorsideColor) !important;
        --Spinner-color: var(--minorsideColor) !important;
        --fQfxa-primaryInverseColor: var(--minortextColor) !important;
        --fbyHH-focusOutlineColor: var(--minorsideColor) !important;
        --sJGfW-background: var(--backgroundColor) !important;
        --eoNrR-background: var(--backgroundColor) !important;
        --yyQPt-focusBorderColor: var(--minorsideColor) !important;
        --ic-brand-global-nav-bgd: var(--minorsideColor) !important;
        --eqmZq-selectedBackground: var(--minorsideColor) !important;
        --qBMHb-focusOutlineColor: var(--minorsideColor) !important;
        --MlJlv-toggleFocusBorderColor: var(--minorsideColor) !important;
        --fdyuz-background: var(--tertiarybackgroundColor) !important;
        --eHzxc-background: var(--secondarybackgroundColor) !important;
        --sJGfW-activeBackground: var(--hoverColor) !important;
        --eMdva-infoBorderColor: var(--hoverColor) !important;
        --eMdva-infoIconBackground: var(--hoverColor) !important;
        --eHQDY-color: var(--minorsideColor) !important;
        --cMptf-courseColor: var(--minorsideColor) !important;
        --cAqHo-focusBorderColor: var(--minorsideColor) !important;
        --fOyUs-focusColorInfo: var(--minorsideColor) !important;
        --bDBte-titleBackground: var(--backgroundColor) !important; /* dashboard class name backgrounds Pretty Important if you wanna add grad or smth*/
        --cAqHo-background: var(--backgroundColor) !important;
        --erWSf-background: var(--backgroundColor) !important;
        --ccWIh-background: var(--backgroundColor) !important;
        --eAJaG-background: var(--backgroundColor) !important;
        --dpCPB-background: var(--backgroundColor) !important;
        --fwfoD-background: var(--backgroundColor) !important;
        --dCppM-defaultBackground: var(--backgroundColor) !important;
        --fOyUs-backgroundPrimary: var(--backgroundColor) !important;
        --fLzZc-background: var(--backgroundColor) !important;
        --pFBbo-color: var(--minortextColor) !important; /* dashboard dates text */
        --fOyUs-borderColorBrand: var(--minortextColor) !important;
        --fOyUs-backgroundBrand: 0 !important;
        --dUOHu-primaryInverseColor: var(--minortextColor) !important;
        --enRcg-primaryInverseColor: var(--minortextColor) !important;
        --enRcg-brandColor: var(--minortextColor) !important;
        --sJGfW-activeLabelColor: var(--iconColor) !important; /* may need to be CHNGED WATCH OUT */
        --sJGfW-activeIconColor: var(--buttonbackColor) !important;
        --dUOHu-brandColor: var(--minortextColor) !important; /* honestly no idea but the submit page on assignments is all weird cause of it for several stuff */
        --ic-brand-primary: var(--minorsideColor); /* hover on grades page */
        --ic-brand-global-nav-menu-item__badge-text: var(--iconColor);
        --ic-brand-global-nav-ic-icon-svg-fill: var(--iconColor);
        --ic-brand-global-nav-menu-item__text-color: var(--iconColor);
        --feqxT-backgroundHover: var(--hoverColor) !important;
        --ic-link-color-darkened-10: var(--minorsideColor) !important;
        --fQfxa-primaryBorderColor: var(--hoverColor) !important;
        --fQfxa-secondaryBorderColor: var(--hoverColor) !important;
        /*--fQfxa-primaryColor: var(--buttonbackColor) !important; APPLY BUTTON ON GRADES PAGE, TESTING*/
        --fQfxa-secondaryColor: var(--minortextColor) !important;
        --fQfxa-primaryHoverBackground: var(--hoverColor) !important;
        --fQfxa-primaryInverseBackground: var(--buttonbackColor) !important; /* so far its the Today button on dashboard */
        --fQfxa-secondaryBackground: var(--buttonbackColor) !important; /* the background color of secondary buttons */
        --qBMHb-background: var(--buttonbackColor) !important; /* the background color of a button */
        --fbyHH-color: var(--textColor) !important; /* global text for assignments */
        --fbyHH-hoverColor: var(--minorsideColor) !important; /* keeps text from changing colors when hoverd */
        --ic-brand-global-nav-logo-bgd: 0 !important; /* color behind the custom school/organizations logo */
        --cECYn-colorPrimary: var(--newNotifColor) !important; /* notification # corner */
        --feqxT-background: var(--minorsideColor) !important; /* new activity button */
        --cECYn-colorDanger: var(--dangerColor) !important; /* danger/late */
        --dLyYq-dangerColor: var(--dangerColor) !important;
        --dLyYq-infoColor: var(--newNotifColor) !important; /*late on grades page*/
        --pFBbo-background: 0 !important;
        --voGQb-background: 0 !important;
        --ic-brand-global-nav-ic-icon-svg-fill--active: var(--textColor) !important; /* sidebar icons when selected */
        --fQfxa-secondaryGhostColor: var(--textColor) !important; /* icons on dashboard top left */
        --ic-link-color: var(--textColor) !important; /* sidebar text below icons when selected */

    }
    /* tox-edit-area active {
        background-color: white;
    } */
    body {
        transition: ease-in-out 300ms;
        background: var(--backgroundColor);
        color: var(--textColor) !important;
    }
    select {
        color: var(--minortextColor) !important;
    }
    #immersive_reader_mount_point > div > button > span > span > span:nth-child(1) > span > svg > g > g > g > path:nth-child(1) {
        fill: var(--textColor);
    }
    #breadcrumbs>ul>li+li:last-of-type a, .ig-header .name, .ig-list .ig-row, .item-group-condensed .ig-header, .faJyW_blJt, .ctrLD_bGBk, .question .header .question_points_holder, .pages.show .page-title{
        color: var(--textColor) !important;
    }
    .module-sequence-footer-button--previous .Button, .module-sequence-footer-button--next .Button {
        background: var(--tertiarybackgroundColor);
    }
    .calendar .fc-head thead .fc-widget-header, #calendar-app .fc-other-month, #create_new_event_link, #minical .fc-other-month, #minical .fc-widget-content, #minical .fc-toolbar h2, #minical .fc-toolbar .h2 {
        color: var(--minortextColor) !important;
    }
    .fc-state-default {
        color: var(--hoverColor) !important;
    }
    .dUOHu_drOs {
        color: var(--textColor);
    }
    #minical {
        border-color: var(--hoverColor) !important;
    }
    #student-grades-show-all .Button {
        background: var(--buttonbackColor)
    }
    #global_nav_dashboard_link {
        text-decoration: none;
    }
    .message-middle-column * {
        color: var(--minortextColor) !important;
    }
    .message-list .messages>li {
        background: var(--secondarybackgroundColor) !important;
    }
    .message-list .messages>li.active {
        background: var(--tertiarybackgroundColor) !important;
    }
    .enRcg_bGBk.enRcg_bLsb {
        color: var(--minortextColor) !important;
    }
    .btn, #right-side .right-side-list li a>i, [dir="ltr"] .bgKsu_blJt, .message-detail.conversations__message-detail .no-messages, .pages.show .course-title {
        color: var(--textColor) !important;
    }
    .dUOHu_drOs .StickyButton-styles__layout {
        color: var(--iconColor);
    }
    [dir="ltr"] .qBMHb_cwos.qBMHb_EMjX, [dir="ltr"] input[type].qBMHb_cwos.qBMHb_EMjX {
        color: var(--textColor);
    }
    .ig-header .name {
        text-shadow: none !important;
    }
    .ig-list .ig-row a.ig-title, #right-side .right-side-list li p, .fCrpb_egrg, .Button, #grades_summary th.title .context {
        color: var(--minortextColor) !important;
    }
    .title a {
        color: var(--minorsideColor) !important;
    }
    .list-view a.active {
        color: var(--minorsideColor);
    }
    .Button.Button--primary:hover {
        background: var(--hoverColor) !important;
    }
    .ic-DashboardCard__action {
        color: var(--hoverColor) !important;
    }

    .ui-dialog .ui-dialog-titlebar.ui-widget-header, .ui-dialog .ui-dialog-title{
        font-weight: bold;
        font-size: 22px;
    }
    .ic-app-header { /* SIDEBAR */
        animation: gradient 10s ease infinite;
        background: var(--sideColor);
        background-size: 100% 500%;
        transition: ease-in-out 300ms;
    }
    .navigation-tray-container, .header-bar, .ic-app-nav-toggle-and-crumbs, #breadcrumbs, .assignment-student-header {
        background: var(--backgroundColor);
        transition: ease-in-out 300ms;
    }
    .ic-app-header__menu-list-item.ic-app-header__menu-list-item--active .ic-app-header__menu-list-link {
        background: var(--backgroundColor);
    }
    .ic-DashboardCard__action-badge {
        background-size: 300% 300%;
    }
    .ic-Dashboard-header__layout, .ic-notification__content {
        background: var(--backgroundColor);
    }
    .large.ic-Dashboard-header__layout, .react-rubric td, .react-rubric th {
        background: var(--backgroundColor);
        opacity: 0.95;
        transition: ease-in-out 300ms;
    }
    .PlannerHeader-styles__root.PlannerHeader, #minical, .module-sequence-footer .module-sequence-footer-content, .file-upload-submission, #questions.assessing, #calendar-app .fc-month-view .fc-body, #calendar-drag-and-drop-container .fc-month-view .fc-body, #calendar-list-holder, #other-calendars-list-holder, #undated-events, table.summary td, table.summary tbody th, .Day-styles__root, .item-group-container, .dialog_opener.Button.Button--link, .fOyUs_bGBk .fOyUs_bGBk.fOyUs_desw.bDzpk_bGBk.bDzpk_busO.bDzpk_cQFX.bDzpk_bZNM .fOyUs_bGBk.fOyUs_fKlg.dJCgj_bGBk {
        background: 0;
    }
    #calendar-app .fc-month-view .fc-today, #calendar-drag-and-drop-container .fc-month-view .fc-today, .item-group-condensed .ig-header, #questions.assessment_results .question .header, .conversations .panel, .question .header, .ic-notification__icon, .ic-Action-header .ic-Action-header__Secondary>.Button, .ic-Action-header .ic-Action-header__Secondary>.btn, .ic-Action-header .ic-Action-header__Secondary>.ui-button{
        background: var(--secondarybackgroundColor);
        transition: ease-in-out 300ms;
    }
    .group_user_8655, .group_user_8655:hover, .group_user_8655:focus, .ui-button:hover {
        background-color: var(--hoverColor) !important;
    }
    #minical .fc-widget-content {
        border: 1px solid transparent;
    }
    #assignments-student-footer, .submission-details-comments .comments {
        background: var(--backgroundColor) !important;
        transition: ease-in-out 300ms;
    }
    .ui-button, #right-side .button-sidebar-wide, select {
        background: var(--buttonbackColor);
        transition: ease-in-out 300ms;
    }
    p span, h2 span, table span, .user_content a:not(.btn):not(.Button):not(.ui-button):not([role=button]), .mceContentBody a:not(.btn):not(.Button):not(.ui-button):not([role=button]){
        background: 0 !important; /* text on the home page */
    }
    #right-side .events_list .event-details:after, #right-side .events_list .todo-details:after, #right-side .to-do-list .event-details:after, #right-side .to-do-list .todo-details:after {
        background: var(--hoverColor);
        transition: ease-in-out 300ms;
    }
    .btn.active:hover, .btn:hover {
        background: var(--hoverColor) !important;
        transition: ease-in-out 300ms;
    }
    [dir="ltr"] .StickyButton-styles__icon {
        color: var(--iconColor) !important;
    }
    .btn, .fOyUs_bGBk.eIQkd_bGBk .fwfoD_bGBk.fwfoD_fsuY.fwfoD_EMjX {
        background: var(--tertiarybackgroundColor); /* background of buttons but also some text */
    }
    .fOyUs_bGBk.fOyUs_desw.bDzpk_bGBk.bDzpk_busO.bDzpk_cQFX.bDzpk_bZNM .fOyUs_bGBk.fOyUs_fKlg.dJCgj_bGBk .fOyUs_bGBk {
        background: 0; /* Submit spaceship image background, may be others */
    }
    .fOyUs_fKyb { /* immersive reader button */
        background: var(--backgroundColor);
        transition: ease-in-out 300ms;
    }
    #right-side .button-sidebar-wide:hover {
        background: var(--hoverColor);
        transition: ease-in-out 300ms;
    }
    .item-group-condensed .ig-row, .question .text, .ic-DashboardCard, .ic-DashboardCard__header_content {
        background: var(--tertiarybackgroundColor);
    }
    .item-group-condensed .ig-row {
        transition: 150ms ease-in-out;
        border-top-width: 1px;
    }
    .ig-list .ig-row:hover, .btn-primary {
        background: var(--hoverColor);
        border-color: var(--textColor);
    }
    .list-view>ul>li>a:hover, .list-view>nav>ul>li>a:hover, .list-view>div>nav>ul>li>a:hover {
        color: var(--hoverColor);
    }
    .menu-item__badge, .nav-badge {
        background: var(--newNotifColor) !important;
    }
    .tox .tox-toolbar, .tox .tox-toolbar__overflow, .tox .tox-toolbar__primary {
        background: var(--tertiarybackgroundColor) !important;
    } 
    .fQfxa_caGd.fQfxa_ImeN, [dir="ltr"] .fQfxa_caGd.fQfxa_ImeN{
        background: var(--hoverColor);
        border-color: var(--minorsideColor);
    }
    .fQfxa_dqAF.fQfxa_eCSh {
        background: var(--minorsideColor) !important;
    }
    .fQfxa_dqAF.fQfxa_buuG{
        background: var(--secondarybackgroundColor) !important;
    }
    .XOwIb_ddES[aria-selected]::after, .Button--primary {
        background: var(--minorsideColor) !important;
    }
    .quiz-submission, .question_editing {
        background: 0;
        border: 0;
    }
    .ViewerControls, .AnnotationControlButton, .btn-primary:hover, .Button--primary:hover, .btn.active {
        background: var(--minorsideColor) !important;
    }
    .take_quiz_button .btn {
        background: var(--hoverColor);
    }
    #tinymce {
        background: white;
    }
    .AnnotationControlButton-outer {
        border: 0;
    }
    .ic-app-header__menu-list-link .ic-icon-svg {
        transition: ease-in-out 300ms;
    }
    .react-rubric td, .react-rubric th, .react-rubric .rating-tier, .assignment-student-header, .ic-app-nav-toggle-and-crumbs {
        border-color: var(--slimborderfixColor) !important;
    }
    path[fill="#67C1F0"]{
        fill: var(--secondarybackgroundColor);
        transition: ease-in-out 300ms;
    }
    path[fill="#9BE1A4"]{
        fill: var(--hoverColor);
        transition: ease-in-out 300ms;
    }
    
    /* sidebar gradient background animation */
    @keyframes gradient {
	    0% {background-position: 0% 0%;}
	    50% {background-position: 100% 100%;}
	    100% {background-position: 0% 0%;}
    }

    #pmcdiv {
        position: relative;
        width: 100%;
        margin-bottom: 0.7rem;
    }
    #pmcinput {
        inset-inline: 0px auto;
        opacity: 0.0001;
        padding: 0px;
        position: absolute;
        top: 0px;
    }
    #pmcspan {
        margin-top: 8px;
        --faJyW-background: #2D3B45;
        --faJyW-borderColor: #2D3B45;
        --faJyW-checkedBackground: #127A1B;
        --faJyW-checkedIconColor: #127A1B !important;
        --faJyW-focusOutlineColor: 0 !important;
    }
    .pmcControls {
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pmcSettingsInput {
        margin-bottom: 10px;
    }

    #pmcControlText {
        font-size: 1rem;
        text-rendering: optimizeLegibility;
        margin: 5px 0;
        line-height: 1.5;
        font-family: var(--fOyUs-fontFamily);
        color: var(--minortextColor)
    }
    .ColorSelector{
        width: 50px;
        height: 30px !important;
        padding: 0px 2px !important;
        margin-bottom: 0 !important;
        transition: 150ms ease-in-out !important;
    }
    .ColorSelector:hover {
        background: #EDEDED;
    }
    .sp-replacer{
        float: right;
    }
    #pmcGradientText {
        font-size: 20px;
    }

    #customGradientdiv {
        display: flex;
        align-items: center;
        gap: 2px;
    }
    #customGradient {
        margin-bottom: 0;
    }

    /* Both are used for the modal background darken*/
    .ui-dialog.ui-widget-content {
        z-index: 9999;
    }
    .ui-widget-overlay.modal-opened{
        background: rgb(0, 0, 0);
        opacity: 0.5;
        filter: Alpha(Opacity=50); 
        position: fixed;
    }
    .containerTheme {
        margin: 0;
        display: grid;
        grid-gap: 10px 15px;

        grid-template-columns: 2fr 2fr 2fr 2fr;
        grid-template-rows: 14rem 14rem 14rem;
    }
    .singleTheme {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        margin: 0;
        background: #F6F6F6;
        padding-bottom: 0;
        box-shadow: 0px 0px 6px 5px rgba(145, 145, 145, 0.5);
        transition: 100ms ease-in-out;
    }
    .singleTheme:hover {
        cursor: pointer;
        box-shadow: 0px 0px 1px 0px rgba(145, 145, 145, 0.2);
    }
    
    .colorsForTheme {
        width: 2rem;
        height: 2em;
        margin: 0;
        justify-content: center;
        display: table-cell;
        background: orange;
    }
    .colorTiles {
        border: 4px solid;
        border-color: #5a5a5a;
        border-radius: 5px;
    }
    .themeImage {
        display: flex;
        margin: auto;
        max-height: 70%;
    }
    .ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix { /* The title text in Modal */
        padding-left: 20px;
    }
    #themeButton {
        width: 240px;
        height: 60px;
        font-size: 25px;
    }
    #coolorDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .standardButton {
        background: #f4f4f4;
        color: black;
        border: 0;
        border-radius: 5px;
    }
    .standardButton:hover {
        background: #212121;
        color: white;
        border: 0;
    }
    #pmcGradientSwitch {
        width: 138px;
        height: 61px;
    }
    #coolorButton {
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 61px;
        width: 160px;
        border-radius: 6px;
        transition: 200ms ease-out;
    }
    #coolorButton span {
        font-size: 16px;
        font-weight: bold;
        color: rgb(0, 102, 255);
    }
    #extraOptionsDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #pmcResetButton {
        width: 131px;
        height: 37px;
        place-self: flex-start;
    }
    #pmcHelpButton {
        width: 60px;
        height: 37px;
    }
    #customGradButton {
        height: 38px;
    }
    #innercoolorDiv {
        display:flex;
        margin: 10px;
        gap: 5px;
    }
    #backgroundButton {
        width: 208px;
        height: 50px;
        font-size: 17px;
    }

    #backMy {
        position: fixed;
        inset: 0;
        background-size: cover;
        opacity: 40%;
    }

    `)
    //is clicked for theming button
    $("body").on("click", "#themeButton", () => {
        $("#dialog").dialog("open");
    });
     // Most elements remove their background entirely, so changing the document background reduces the amount of changes needed.
    // Checks every 500ms if tray is opened
    setInterval(() => {
        if ($('.navigation-tray-container.profile-tray .tray-with-space-for-global-nav > div').length) {
            const r = getComputedStyle(document.querySelector(':root'));
            var sideColorforButton = r.getPropertyValue('--sideColor');
            sideColorforButton = sideColorforButton.replace("0deg", "45deg");
            document.documentElement.style.setProperty('--sideColorforButton', sideColorforButton);
            if (!$('.tray-with-space-for-global-nav #pmcdiv').length) {
                // PMC Show Button
                $('<div id="pmcdiv"/>').appendTo('.tray-with-space-for-global-nav > div');
                $('<div id="pmcControldiv"/>').appendTo('.tray-with-space-for-global-nav > div');
                $('<input id="pmcinput" type="checkbox" class="epRMX_cwos" value>').appendTo('#pmcdiv');
                $('<span class="faJyW_bGBk" id="pmcspan">').appendTo('#pmcdiv');
                $('<span id="pmccheck" class="faJyW_cSXm faJyW_cjfS faJyW_cVYB faJyW_bYta faJyW_doqw" aria-hidden="true"><span class="faJyW_dnnz"><span class="faJyW_cMpH"><svg name="IconX" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk faJyW_eoCh" style="width: 1em; height: 1em;"><g role="presentation"><path class="innerappend" d="M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z" fill-rule="nonzero" stroke="none" stroke-width="1"></path></g></svg></span></span></span>').appendTo('#pmcspan');
                $('<span id="pmctext">Show PMC Menu</span>').appendTo('#pmcspan');
                $('<hr>').appendTo('#pmcControldiv');
                $(/*html*/`
                    <div style="display: flex; align-items: center; justify-content: center; margin:10px;">
                        <button id="themeButton" class="standardButton">Theme Library</button>
                    </div>
                    <div id="contexMain" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                        <!-- <button id="backgroundButton" class="standardButton">Import Background Image</button> -->
                        <input id="backgroundInput" type="file" accept="image/*" hidden>
                            <button id="backgroundButton" class="standardButton">Import Background Image</button>
                        </input>                        
                    </div>
                `).appendTo('#pmcControldiv')
                var tet = GM_getValue("backgroundOpacity", "25%")
                if (GM_getValue("usingBack", false) == true) {
                    $(/*html*/`
                    <input id="opacityslider" title="Background Opacity" type="range" value="${tet * 100}" min="0" max="100"/>
                    `).appendTo("#contexMain");
                }
                $('<hr>').appendTo('#pmcControldiv');
                // PMC Controls
                $('<div id="pmcControlBackgroundColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Background Color</span>').appendTo('#pmcControlBackgroundColor');
                $(`<input type="color" value="${colors.backgroundColor}" id="backgroundColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlBackgroundColor');

                $('<div id="pmcControlSidebarColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Sidebar Color</span>').appendTo('#pmcControlSidebarColor');
                $(`<input type="color" value=${colors.sideColor} id="sideColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlSidebarColor');

                $('<div id="pmcControlMinorSideColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Major Color</span>').appendTo('#pmcControlMinorSideColor');
                $(`<input type="color" value="${colors.minorsideColor}" id="minorsideColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlMinorSideColor');

                $('<div id="pmcControlTextColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Text Color</span>').appendTo('#pmcControlTextColor');
                $(`<input type="color" value="${colors.textColor}" id="textColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlTextColor');

                $('<div id="pmcControlAccentTextColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Accent Text Color</span>').appendTo('#pmcControlAccentTextColor');
                $(`<input type="color" value="${colors.minortextColor}" id="accenttextColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlAccentTextColor');

                $('<div id="pmcControlIconColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Icon Color</span>').appendTo('#pmcControlIconColor');
                $(`<input type="color" value="${colors.iconColor}" id="iconColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlIconColor');

                $('<div id="pmcControlSecondaryColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Secondary Color</span>').appendTo('#pmcControlSecondaryColor');
                $(`<input type="color" value="${colors.secondarybackgroundColor}" id="secondarybgColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlSecondaryColor');

                $('<div id="pmcControlTertiaryColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Tertiary Color</span>').appendTo('#pmcControlTertiaryColor');
                $(`<input type="color" value="${colors.tertiarybackgroundColor}" id="tertiarybgColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlTertiaryColor');

                $('<div id="pmcControlHoverColor" class="pmcControls"/>').appendTo('#pmcControldiv');
                $('<span id="pmcControlText">Hover Color</span>').appendTo('#pmcControlHoverColor');
                $(`<input type="color" value="${colors.hoverColor}" id="hoverColorSelector" class="ColorSelector"/>`).appendTo('#pmcControlHoverColor');
                $('<hr>').appendTo('#pmcControldiv');

                $(/*html*/`
                <div id="extraOptionsDiv">
                    <h4>Custom Gradient Settings:</h4>

                    <div id="coolorDiv">
                        <div id="innercoolorDiv">
                            <button id="pmcGradientSwitch" class="standardButton">
                                <span id="pmcGradientText">${GM_getValue("sT", "Switch to Gradient")}</span>
                            </button>
                            <a href="https://coolors.co/palettes/trending" target="_blank" style="text-decoration: none;">
                                <button id ="coolorButton" title="Links to coolors.co, where you can find gradients to use.">
                                    <span>Click here to go to</span>
                                    <svg width="128" height="21">       
                                        <image id="coolorSVG" xlink:href="https://coolors.co/assets/img/logo.svg"width="128" height="21"/>    
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div id="customGradientdiv">
                            <input type="text" placeholder="URL from coolors.co" autocomplete="off" id="customGradient"/>
                            <button id="customGradButton" class="standardButton">Submit</button>
                        </div>
                    </div>
                    <hr style="width: 100%;">
                    <div id="innercoolerDiv">
                        <button id="pmcResetButton" class="standardButton">Reset to Default</button>
                        <a href="https://github.com/ExternalHost0/PimpMyCanvas/blob/master/README.md" target="_blank" style="text-decoration: none;">
                            <button id="pmcHelpButton" class="standardButton">Help?</button>
                        </a>
                    </div>
                </div>
                `).appendTo('#pmcControldiv')
                // Some effects for buttons in PMC
                $('#coolorButton').hover(function() {
                    $("#coolorButton").css('background-color', 'rgb(0, 102, 255)')
                    $("#coolorButton span").css('color', 'white')
                    $("#coolorSVG").css('filter', 'brightness(5) saturate(0.01)')
                }, function() {
                    $("#coolorButton").css('background-color', '#f4f4f4')
                    $("#coolorButton span").css('color', 'rgb(0, 102, 255)')
                    $("#coolorSVG").css('filter', 'none')
                });

                // background image functionality
                var uploadedimage = "";
                var input = document.querySelector("#backgroundInput")
                input.addEventListener("change", function() {
                    const reader = new FileReader()
                    const bM = document.getElementById('backMy')
                    reader.addEventListener("load", () => {
                        uploadedimage = reader.result;
                        console.log(uploadedimage.length)
                        if (uploadedimage.length > 5238000) {
                            alert("Can not use images larger than 3.5 MB!")
                            return
                        }
                        bM.style.backgroundImage = `url(${uploadedimage})`
                        localStorage.setItem("imgData", uploadedimage)
                        GM_setValue("usingBack", true)
                        
                    })
                    reader.readAsDataURL(this.files[0]);
                })


                // $('<button id="pmcExportButton" class="">Export Colors</button>').appendTo('#pmcControldiv');  The export button has no use as of now
            }
        }
    }, 500);

    $(document).ready(() => {
        $('<div id="dialog">').appendTo('body');
        // dialog function + setup
        $("#dialog").dialog({
            draggable: false,
            resizable: false,
            width: 1200,
            height: 790,
            autoOpen: false,
            modal: true,
            title: "Theme Library",
            open: function (event, ui) {
                $(".ui-widget-overlay").addClass('modal-opened');
                $('body').css('overflow', 'hidden');
            },
            close: function(event, ui){
                $(".ui-widget-overlay").removeClass('modal-opened');
                $('body').css('overflow', 'auto');
            }
        });
        $('<div class="containerTheme">').appendTo('#dialog');

        // background custom image on start page
        
        if ($('.hidden-phone').length) {
            $('<div id="backMy">').appendTo('body');
        }
        
        let theImage = localStorage.getItem("imgData")
        theImage = "url(" + theImage + ")"
        $('#backMy').css("backgroundImage", theImage)
        $('#backMy').css("opacity", GM_getValue("backgroundOpacity", "25"))



        // the unmanaged branch is currently where I am storing the themes and their respective images
        $.getJSON("https://raw.githubusercontent.com/ExternalHost0/PimpMyCanvas/unmanaged/includedthemes.json", function(data) {
            //dialog setup
            data.forEach((theme, idx) => {
                let singleTheme = $(`<div class="singleTheme" data-num=${idx}>`).appendTo(".containerTheme");
                // fixes json's backslashes
                let image = theme.img.replace('\/', '/')
                $(`<img class="themeImage" src="${image}"/>`).appendTo(singleTheme);
                let colorTiles = $('<div class="colorTiles">').appendTo(singleTheme);
                $(`<h4 style="margin:0; font-size:21px;">${theme.name}</h4>`).appendTo(singleTheme);
                // makes each colored tile
                for (const c of ["backgroundColor", "sideColor", "minorsideColor", "textColor", "minortextColor", "iconColor", "secondarybackgroundColor", "tertiarybackgroundColor", "hoverColor"]) {
                    $(`<div class="colorsForTheme" style="background-color: ${theme.colors[c]};">`).appendTo(colorTiles);
                }
                // on click for any theme
                $('.singleTheme').on("click", function() {
                    idx = $(this).data('num')
                    Object.entries(data[idx].colors).forEach(([key, value]) => {
                        colors[key] = value
                        document.documentElement.style.setProperty('--' + [key], colors[key]);
                        if (sT == "Switch to Gradient") {
                            document.documentElement.style.setProperty('--sideColor', colors.sideColor);
                        } 
                        if (sT == "Switch to Static Color") {
                            document.documentElement.style.setProperty('--sideColor', colors.sideColorGradient);
                        }
                    })
                    GM_setValue("colors", colors)
                });
            });
        });
    });

    $("body").on("input", "#opacityslider", function() {
        $('#backMy').css("opacity", $(this).val() + "%")
        GM_setValue("backgroundOpacity", $(this).val() / 100)
    })

    // so that file Input is triggered for background image
    $("body").on("click", "#backgroundButton", () => {
        $('#backgroundInput').click();
    })

    //exports all colors in simple text file
    $("body").on("click", "#pmcExportButton", () => {
        download(JSON.stringify(colors), "userColors.json", "text/plain")
    });
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    
    // submit button for custom gradient
    $("body").on("click", "#customGradButton", () => {
        //color pallettes from https://coolors.co/
        var pallete = $("#customGradient").val();
        if (pallete.includes("https://coolors.co/palette/")) {
            pallete = "#" + pallete.slice(pallete.lastIndexOf("/") + 1);
            let dashsymbol = /-/g;
            pallete = pallete.replace(dashsymbol, ", #");
            colors.sideColorGradient = `linear-gradient(0deg, ${pallete})`;
        } else {
            alert("Please submit a pallete url from coolors.co. No other urls are accepted.")
        }
    });

    let isClickedGrad = GM_getValue("isClickedGrad", false);
    let sT = GM_getValue("sT", "it doesnt matter what i put here"); // sT needs to be defined somewhere so here works
    $("body").on("click", "#pmcGradientText", () => {
        if (!isClickedGrad){
            sT = "Switch to Static Color"
            $("#pmcGradientText").text(sT);
            isClickedGrad = true;
        } else {
            sT = "Switch to Gradient"
            $("#pmcGradientText").text(sT);
            isClickedGrad = false;
        }
        GM_setValue("isClickedGrad", isClickedGrad)
        GM_setValue("sT", sT)
    });

    let isHidden = false //sets isHidden true as menu is always off when tray opened
    // On click of menu, PMC opens
    // function is for button animation
    $("body").on("click", "#pmccheck", () => {
        if (isHidden){
            isHidden = false
            $("#pmccheck").attr('class', 'faJyW_cSXm faJyW_cjfS faJyW_cVYB faJyW_bYta faJyW_doqw');
            $(".innerappend").attr("d", "M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z");
            $(".innerappend").attr("fill-rule", "evenodd");
            $("#pmcControldiv").show();
        } else {
            isHidden = true
            $("#pmccheck").attr('class', 'faJyW_cSXm faJyW_bYta faJyW_doqw');
            $(".innerappend").attr("d", "M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z");
            $(".innerappend").attr("fill-rule", "nonzero");
            $("#pmcControldiv").hide();
        }
    });

    // reset button to default colors
    $("body").on("click", "#pmcResetButton", () => {
        $("#backgroundColorSelector")[0].value = defaultColors.backgroundColor;
        colors.sideColorGradient = defaultColors.sideColorGradient
        $("#sideColorSelector")[0].value = defaultColors.sideColor;
        $("#minorsideColorSelector")[0].value = defaultColors.minorsideColor;
        $("#textColorSelector")[0].value = defaultColors.textColor;
        $("#accenttextColorSelector")[0].value = defaultColors.minortextColor;
        $("#iconColorSelector")[0].value = defaultColors.iconColor;
        $("#secondarybgColorSelector")[0].value = defaultColors.secondarybackgroundColor;
        $("#tertiarybgColorSelector")[0].value = defaultColors.tertiarybackgroundColor;
        $("#hoverColorSelector")[0].value = defaultColors.hoverColor;
        colors.slimborderfixColor = defaultColors.slimborderfixColor;
        colors.dangerColor = defaultColors.dangerColor;
        colors.newNotifColor = defaultColors.newNotifColor;
        colors.buttonbackColor = defaultColors.buttonbackColor;
        localStorage.removeItem("imgData")
        $('#backMy').css("backgroundImage", "")
    });

    setInterval(() => {
        if ($('#pmcdiv').length) {
            colors = Object.assign({}, colors, {backgroundColor: $("#backgroundColorSelector")[0].value});
            colors = Object.assign({}, colors, {sideColor: $("#sideColorSelector")[0].value});
            colors = Object.assign({}, colors, {sideColorGradient: GM_getValue('sideColorGradient', colors.sideColorGradient)});
            colors = Object.assign({}, colors, {minorsideColor: $("#minorsideColorSelector")[0].value});
            colors = Object.assign({}, colors, {textColor: $("#textColorSelector")[0].value});
            colors = Object.assign({}, colors, {minortextColor: $("#accenttextColorSelector")[0].value});
            colors = Object.assign({}, colors, {iconColor: $("#iconColorSelector")[0].value});
            colors = Object.assign({}, colors, {secondarybackgroundColor: $("#secondarybgColorSelector")[0].value});
            colors = Object.assign({}, colors, {tertiarybackgroundColor: $("#tertiarybgColorSelector")[0].value});
            colors = Object.assign({}, colors, {hoverColor: $("#hoverColorSelector")[0].value});

            GM_setValue("colors", colors)
            colors = GM_getValue('colors', defaultColors)

            if (sT == "Switch to Gradient") {
                document.documentElement.style.setProperty('--sideColor', colors.sideColor);
            } 
            if (sT == "Switch to Static Color") {
                document.documentElement.style.setProperty('--sideColor', colors.sideColorGradient);
            }
            for (const c of ["backgroundColor", "minorsideColor", "textColor", "minortextColor", "iconColor", "secondarybackgroundColor", "tertiarybackgroundColor", "hoverColor", "slimborderfixColor", "newNotifColor", "dangerColor", "buttonbackColor"]) {
                document.documentElement.style.setProperty('--' + [c], colors[c]);
            }
        }
    }, 500);

})();