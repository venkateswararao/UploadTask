import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": "[footer-height]",
        "paddingLeft": 0,
        "backgroundColor": "rgba(230, 230, 230, 1) !important",
        "WebkitOverflowScrolling": "touch",
        "minHeight": "100%",
        "position": "relative"
    },
    "ui-page": {
        "backgroundColor": "rgba(230, 230, 230, 1) !important"
    },
    "submitPage": {
        "backgroundColor": "rgba(255, 255, 255, 1)"
    },
    "submitPage content": {
        "width": 300,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "textAlign": "center",
        "paddingTop": 15
    },
    "submitPage content inputDivider": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "submitPageTextBox": {
        "width": "90%",
        "height": 30,
        "borderRadius": 5,
        "border": "rgba(193, 193, 193, 1) solid 1px"
    },
    "submitBeatButton": {
        "marginTop": 20
    },
    "submitPage backButton": {
        "backgroundColor": "rgba(253, 253, 255, 1) !important",
        "height": "40px !important",
        "width": "40px !important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "3px !important",
        "borderColor": "rgba(193, 193, 193, 1) !important"
    },
    "titleBar": {
        "backgroundColor": "rgba(253, 253, 255, 1)",
        "height": 50,
        "borderBottom": "rgba(225, 225, 225, 1) solid 2px"
    },
    "submitPageButton": {
        "backgroundColor": "rgba(253, 253, 255, 1) !important",
        "height": "40px !important",
        "width": "40px !important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "3px !important",
        "borderColor": "rgba(193, 193, 193, 1) !important"
    },
    "titleBar buttonIcon": {
        "color": "black"
    },
    "slapchartLogo": {
        "height": 37,
        "width": 160,
        "paddingTop": 8,
        "paddingLeft": "50%",
        "marginLeft": -85
    },
    "mainPage content": {
        "width": "100%",
        "paddingBottom": 120,
        "backgroundColor": "rgba(230, 230, 230, 1)"
    },
    "beat": {
        "width": 375,
        "height": 200,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "boxShadow": "2px 2px 3px 0px rgba(179, 179, 179, 1)",
        "fontSize": 12,
        "backgroundSize": "cover",
        "overflow": "hidden"
    },
    "infoBox": {
        "position": "relative",
        "width": "100%",
        "height": "100%"
    },
    "info": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "boxShadow": "2px 2px 3px 0px rgba(50, 50, 50, 1)",
        "height": 55,
        "width": "80%",
        "paddingLeft": 15,
        "backgroundColor": "rgba(252, 252, 252, 1)",
        "borderRadius": 3
    },
    "transparentPlayButton": {
        "fontSize": 50,
        "width": 50,
        "height": 50,
        "textShadow": "none",
        "left": 155,
        "top": 50,
        "position": "absolute",
        "opacity": 0.5,
        "color": "white"
    },
    "beatselected": {
        "backgroundColor": "rgba(220, 220, 220, 1) !important"
    },
    "beat beatInfo": {
        "display": "inline-block",
        "marginLeft": 40,
        "marginTop": 7,
        "width": "100%",
        "cursor": "pointer"
    },
    "socialbeatInfo": {
        "position": "relative",
        "display": "inline-block",
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "textAlign": "center",
        "width": "100%"
    },
    "socialbeatInfo socialproducerLink": {
        "fontSize": 30,
        "wordWrap": "break-word"
    },
    "beat beatInfo producerName": {
        "paddingLeft": 20,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "width": 125,
        "display": "block"
    },
    "beat beatInfo producerName producerLink": {
        "color": "rgba(255, 41, 41, 1)",
        "textDecoration": "none",
        "fontWeight": "normal",
        "cursor": "pointer",
        "textShadow": "none",
        "fontSize": 14
    },
    "beat beatInfo beatName": {
        "paddingLeft": 20,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "width": 150,
        "display": "block"
    },
    "beat beatInfo timeAdded": {
        "marginRight": 50,
        "float": "right",
        "color": "rgba(151, 151, 151, 1)",
        "width": 50,
        "overflow": "hidden",
        "display": "inline-block",
        "marginTop": -26
    },
    "beatplaydetails": {
        "display": "inline-block",
        "width": 245,
        "textAlign": "center"
    },
    "beatimage": {
        "textAlign": "left",
        "display": "inline-block",
        "width": 50
    },
    "producerImage": {
        "backgroundSize": "40px 40px",
        "height": 40,
        "width": 40,
        "borderRadius": 99,
        "border": "solid 1px",
        "position": "absolute",
        "marginTop": 5
    },
    "currentproducerImage": {
        "backgroundSize": "40px 40px",
        "height": 40,
        "width": 40,
        "borderRadius": 99,
        "border": "solid 1px",
        "marginTop": 5
    },
    "socialproducerImage": {
        "backgroundSize": "150px 150px",
        "height": 150,
        "width": 150,
        "borderRadius": 99,
        "border": "solid 1px",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "beat buttons": {
        "paddingRight": 7,
        "float": "right",
        "marginTop": -7
    },
    "shareButton": {
        "border": "rgba(232, 232, 232, 1) solid 1px",
        "display": "inline-block",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "fontSize": 10,
        "marginTop": 15,
        "marginRight": 1,
        "marginBottom": 15,
        "marginLeft": 1
    },
    "shareButton buttonIcon": {
        "display": "block"
    },
    "shareText": {
        "marginTop": -18,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 25,
        "display": "inline-block",
        "paddingRight": 5
    },
    "producerPopUp": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "minHeight": 105
    },
    "producerPopUp producerImage": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginLeft": 15,
        "backgroundSize": "90px 90px",
        "height": 90,
        "width": 90
    },
    "producerPopUp producerBio": {
        "display": "flex",
        "verticalAlign": "middle",
        "marginLeft": 130,
        "marginRight": 15,
        "alignItems": "center",
        "fontSize": 10
    },
    "producerPopUp bioLabel": {
        "fontWeight": "bold"
    },
    "boldProducerName": {
        "fontSize": 12,
        "fontWeight": "bold"
    },
    "slapchartPlayerWidget": {
        "position": "fixed",
        "height": 150,
        "width": "100%",
        "backgroundColor": "rgba(253, 253, 255, 1)",
        "zIndex": 99,
        "left": 0,
        "borderTop": "solid 1px rgba(227, 224, 221, 1)",
        "transform": "translateZ(0)",
        "MozTransform": "translatez(0)",
        "MsTransform": "translatez(0)",
        "OTransform": "translatez(0)",
        "WebkitTransform": "translateZ(0)",
        "WebkitFontSmoothing": "antialiased",
        "bottom": 0
    },
    "slapchartPlayerWidget divider": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "beatInfoInPlayer": {
        "cursor": "pointer",
        "width": 350,
        "fontSize": 12,
        "paddingBottom": 3,
        "textAlign": "left",
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto"
    },
    "controls": {
        "textAlign": "center",
        "height": 50,
        "marginTop": 18,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": 12
    },
    "controls button": {
        "display": "inline-block",
        "marginTop": -5,
        "marginRight": 7,
        "marginBottom": -5,
        "marginLeft": 7,
        "cursor": "pointer",
        "position": "fixed"
    },
    "controls buttonIcon": {
        "fontSize": 40
    },
    "controls backButton": {
        "marginLeft": -145
    },
    "controls backTenSecondsButton": {
        "marginLeft": -85
    },
    "controls playButton": {
        "marginLeft": -25
    },
    "controls forwrardTenSecondsButton": {
        "marginLeft": 40
    },
    "controls nextButton": {
        "marginLeft": 95
    },
    "controls playButton buttonIcon": {
        "fontSize": 50,
        "marginTop": -6
    },
    "slapchartPlayerWidgetadmin": {
        "position": "fixed",
        "height": 150,
        "width": "100%",
        "backgroundColor": "rgba(253, 253, 255, 1)",
        "zIndex": 99,
        "left": 0,
        "borderTop": "solid 1px rgba(227, 224, 221, 1)",
        "transform": "translateZ(0)",
        "MozTransform": "translatez(0)",
        "MsTransform": "translatez(0)",
        "OTransform": "translatez(0)",
        "WebkitTransform": "translateZ(0)",
        "WebkitFontSmoothing": "antialiased",
        "bottom": 0
    },
    "slapchartPlayerWidgetadmin divider": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "beatInfoInPlayeradmin": {
        "cursor": "pointer",
        "width": 350,
        "fontSize": 12,
        "paddingBottom": 3,
        "textAlign": "left",
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto"
    },
    "controlsadmin": {
        "textAlign": "center",
        "height": 50,
        "marginTop": 18,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": 12
    },
    "controlsadmin button": {
        "display": "inline-block",
        "marginTop": -5,
        "marginRight": 7,
        "marginBottom": -5,
        "marginLeft": 7,
        "cursor": "pointer",
        "position": "fixed"
    },
    "controlsadmin buttonIcon": {
        "fontSize": 40
    },
    "controlsadmin backButtonadmin": {
        "marginLeft": -145
    },
    "controlsadmin backTenSecondsButtonadmin": {
        "marginLeft": -85
    },
    "controlsadmin playButtonadmin": {
        "marginLeft": -25
    },
    "controlsadmin forwrardTenSecondsButtonadmin": {
        "marginLeft": 40
    },
    "controlsadmin nextButtonadmin": {
        "marginLeft": 95
    },
    "controlsadmin playButtonadmin buttonIcon": {
        "fontSize": 50,
        "marginTop": -6
    },
    "sliderBar": {},
    "ui-slider-input": {
        "display": "none !important"
    },
    "ui-slider": {
        "width": 268,
        "display": "inline-block"
    },
    "sliderContainer": {
        "width": 350,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "usermenu li": {
        "paddingTop": 12,
        "paddingRight": 2,
        "paddingBottom": 12,
        "paddingLeft": 2,
        "borderBottom": "1px solid lightgray"
    },
    "currentTime": {
        "float": "left",
        "paddingTop": 2,
        "paddingRight": 0,
        "width": 34,
        "fontSize": 12,
        "display": "inline-block"
    },
    "endTime": {
        "position": "absolute",
        "paddingLeft": 12,
        "paddingTop": 2,
        "fontSize": 12,
        "display": "inline-block"
    },
    "ui-slider-track": {
        "height": "2px !important",
        "marginTop": "-5px !important",
        "backgroundColor": "black !important",
        "top": "12px !important"
    },
    "ui-slider-trackui-mini ui-slider-handle": {
        "marginTop": -14,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0
    },
    "input[type=range]": {
        "WebkitAppearance": "none",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=range]:focus": {
        "outline": "none"
    },
    "input[type=range]::-webkit-slider-runnable-track": {
        "height": "2px !important",
        "marginTop": "-5px !important",
        "backgroundColor": "black !important",
        "top": "12px !important"
    },
    "input[type=range]::-webkit-slider-thumb": {
        "WebkitAppearance": "none",
        "marginTop": -14,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0
    },
    "input[type=range]:focus::-webkit-slider-runnable-track": {
        "background": "#2497E3"
    },
    "input[type=range]::-moz-range-track": {
        "height": "2px !important",
        "marginTop": "-5px !important",
        "backgroundColor": "black !important",
        "top": "12px !important"
    },
    "input[type=range]::-moz-range-thumb": {
        "marginTop": -14,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0
    },
    "input[type=range]::-ms-track": {
        "height": "2px !important",
        "marginTop": "-5px !important",
        "backgroundColor": "black !important",
        "top": "12px !important"
    },
    "input[type=range]::-ms-fill-lower": {
        "background": "#2497E3",
        "border": "0px solid #000000",
        "borderRadius": 2,
        "boxShadow": "0px 0px 0px #000000"
    },
    "input[type=range]::-ms-fill-upper": {
        "background": "#2497E3",
        "border": "0px solid #000000",
        "borderRadius": 2,
        "boxShadow": "0px 0px 0px #000000"
    },
    "input[type=range]::-ms-thumb": {
        "marginTop": -14,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0
    },
    "input[type=range]:focus::-ms-fill-lower": {
        "background": "#2497E3"
    },
    "input[type=range]:focus::-ms-fill-upper": {
        "background": "#2497E3"
    },
    "sliderslider-horizontal": {
        "width": "100%",
        "height": 20
    },
    "slider-selection": {
        "backgroundImage": "none"
    },
    "slider-track": {
        "position": "absolute",
        "cursor": "pointer",
        "backgroundImage": "none",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderRadius": 0,
        "height": "2px !important",
        "marginTop": "-5px !important",
        "backgroundColor": "black !important",
        "top": "12px !important"
    },
    "slider-trackmin-slider-handle": {
        "marginTop": -14,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0,
        "backgroundImage": "none"
    },
    "slider-handle": {
        "marginTop": -8,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "6px !important",
        "height": 25,
        "backgroundColor": "red",
        "outline": "none !important",
        "boxShadow": "none !important",
        "borderRadius": 0,
        "backgroundImage": "none"
    },
    "slider-handleround": {
        "borderRadius": 0
    }
});