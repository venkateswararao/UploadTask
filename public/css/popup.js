import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "center": {
        "marginTop": 50
    },
    "modal-header": {
        "paddingBottom": 0,
        "border": 0
    },
    "modal-center": {
        "top": "18%",
        "overflowY": "hidden"
    },
    "modal-header close": {
        "marginTop": -29,
        "paddingTop": 14,
        "paddingRight": 14,
        "paddingBottom": 14,
        "paddingLeft": 14
    },
    "close": {
        "fontSize": 32
    },
    "modal-header h3": {
        "textAlign": "center"
    },
    "modal-header tandc": {
        "textAlign": "left",
        "color": "black",
        "fontSize": 18,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "modal-header profile": {
        "textAlign": "left",
        "color": "#fdcc10"
    },
    "modal-header submitbeat": {
        "textAlign": "left",
        "color": "#fdcc10"
    },
    "modal-header Contact": {
        "textAlign": "left",
        "color": "#fdcc10"
    },
    "modal-header About": {
        "textAlign": "left",
        "color": "#fdcc10"
    },
    "modal-footer": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "modal-footer btn-group button": {
        "height": 40,
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0,
        "border": "none",
        "borderRight": "1px solid #ddd"
    },
    "modal-footer btn-group:last-child > button": {
        "borderRight": 0
    },
    "modal-content form-group input": {
        "height": 40,
        "borderRadius": 0,
        "border": "1px solid black"
    },
    "modal-content form-group input[type='checkbox']": {
        "height": 20,
        "width": 20,
        "border": "1px solid black"
    },
    "modal-content form-group textarea": {
        "border": "1px solid black",
        "borderRadius": 0
    },
    "modal-content btn-Yellow": {
        "border": "1px solid black",
        "borderRadius": 0,
        "backgroundColor": "#fdcc10",
        "color": "black"
    },
    "modal-content img": {
        "border": "1px solid black"
    },
    "modal-content paddedrow": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "modal-content mission": {
        "marginBottom": 20
    },
    "modal-content history": {
        "marginBottom": 20
    },
    "modal-content mission label": {
        "display": "inline-block"
    },
    "modal-content mission p": {
        "display": "inline-block",
        "marginLeft": 10
    },
    "modal-content history label": {
        "display": "inline-block"
    },
    "modal-content history p": {
        "display": "inline-block",
        "marginLeft": 10
    },
    "linkblue": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "color": "blue"
    },
    "buttombordered": {
        "paddingBottom": 10
    },
    "buttombordered heading": {
        "color": "red",
        "fontSize": 16
    },
    "buttombordered data PUsername": {
        "paddingLeft": 5
    },
    "buttombordered data": {
        "width": "100%",
        "display": "inline-block"
    },
    "buttombordered data span": {
        "width": "100%",
        "display": "inline-block"
    },
    "buttombordered data row": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20
    },
    "buttombordered data small": {
        "textAlign": "left",
        "fontSize": 12
    },
    "modal-content smalltext": {
        "fontSize": 12,
        "marginTop": 6
    },
    "divtermsandconditions": {},
    "divtermsandconditions chktermsCondition": {
        "display": "inline-block",
        "position": "absolute"
    },
    "divtermsandconditions chktermsCondition input[type='checkbox']": {
        "height": 20,
        "width": 20,
        "marginTop": 0,
        "marginLeft": 5
    },
    "divtermsandconditions datatermsCondition": {
        "display": "inline-block",
        "marginLeft": 20,
        "position": "relative"
    },
    "termsandconditions": {
        "overflow": "scroll",
        "border": "1px solid black"
    },
    "fa-paperclip": {
        "transform": "rotate(135deg) scaleX(-1)",
        "verticalAlign": "bottom"
    },
    "SocialIconsModal modal-content btn-social-icon": {
        "width": 65,
        "height": 65,
        "borderRadius": 15,
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "SocialIconsModal modal-content SocialIcons": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "SocialIconsModal modal-content modelclose": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "producerPopUp modal-content modelclose": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "SocialIconsModal modal-content btn-social-icon > :first-child": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": 0,
        "width": 32,
        "lineHeight": 22,
        "fontSize": 3,
        "textAlign": "center",
        "borderRight": "1px solid rgba(0,0,0,0.2)"
    },
    "SocialIconsModal modal-content socialmedia": {
        "textDecoration": "none",
        "color": "white !important"
    },
    "SocialIconsModal modal-content socialmedia:hover": {
        "textDecoration": "none",
        "color": "white !important"
    },
    "SocialIconsModal modal-content socialmedia:active": {
        "textDecoration": "none",
        "color": "white !important"
    },
    "SocialIconsModal modal-content socialmedia:focus": {
        "textDecoration": "none",
        "color": "white !important"
    },
    "SocialIconsModal modal-content btn-mail": {
        "color": "#fff",
        "backgroundColor": "#5e87f0"
    },
    "SocialIconsModal modal-content btn-mail:hover": {
        "color": "#fff",
        "backgroundColor": "#5e87f0"
    },
    "SocialIconsModal modal-content btn-home": {
        "color": "#fff",
        "backgroundColor": "#78a8be"
    },
    "SocialIconsModal modal-content btn-home:hover": {
        "color": "#fff",
        "backgroundColor": "#78a8be"
    },
    "fa-facebook": {
        "background": "#3B5998",
        "color": "white"
    },
    "fa-twitter": {
        "background": "#55ACEE",
        "color": "white"
    },
    "fa-instagram": {
        "background": "#125688",
        "color": "white"
    },
    "fa-envelope-o": {
        "background": "#5e87f0",
        "color": "white"
    },
    "fa-cloud": {
        "background": "#ff5500",
        "color": "white"
    },
    "fa-home": {
        "background": "#78a8be",
        "color": "white"
    },
    "socialmedia": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": "45px !important",
        "width": 70,
        "textAlign": "center",
        "textDecoration": "none",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "borderRadius": 20
    },
    "fa:hover": {
        "opacity": 0.9
    }
});