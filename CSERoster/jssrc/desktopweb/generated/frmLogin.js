function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxLogin",
        "top": "5%",
        "width": "22%",
        "zIndex": 1
    }, {}, {});
    flxLogin.setDefaultUnit(kony.flex.DP);
    var imgKonyLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "25%",
        "id": "imgKonyLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "kony_logo_trans.png",
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxUsername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxUsername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxUsername.setDefaultUnit(kony.flex.DP);
    var imgUsername = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "imgUsername",
        "isVisible": true,
        "left": "2%",
        "skin": "slImage",
        "src": "usn.png",
        "top": "0dp",
        "width": "21%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtUsername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "txtUsername",
        "height": "50%",
        "id": "txtUsername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "23%",
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "txtUsername",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    flxUsername.add(imgUsername, txtUsername);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "49%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var imgPassword = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "imgPassword",
        "isVisible": true,
        "left": "1.83%",
        "skin": "slImage",
        "src": "pwd.png",
        "top": "0dp",
        "width": "21%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "focusSkin": "txtUsername",
        "height": "50%",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "23%",
        "placeholder": "Password",
        "secureTextEntry": false,
        "skin": "txtUsername",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    flxPassword.add(imgPassword, txtPassword);
    var Image0dbc1bf66340345 = new kony.ui.Image2({
        "height": "2%",
        "id": "Image0dbc1bf66340345",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "dashedline.png",
        "top": "47%",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0daf5cb58b95242 = new kony.ui.Image2({
        "height": "2%",
        "id": "CopyImage0daf5cb58b95242",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "dashedline.png",
        "top": "61%",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLogin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_d47b383eb8b144a9ac5726e9284067d3,
        "skin": "btnLogin",
        "text": "Sign in",
        "top": "70%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblForgotPwd = new kony.ui.Label({
        "bottom": "5%",
        "id": "lblForgotPwd",
        "isVisible": true,
        "right": "5%",
        "skin": "lblForgotPwdSkin",
        "text": "forgot your password?",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLogin.add(imgKonyLogo, flxUsername, flxPassword, Image0dbc1bf66340345, CopyImage0daf5cb58b95242, btnLogin, lblForgotPwd);
    frmLogin.add(flxLogin);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer0e38e800abdac42],
        "headers": [FlexContainer0aec82598da0e45],
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "frmBGImageSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};