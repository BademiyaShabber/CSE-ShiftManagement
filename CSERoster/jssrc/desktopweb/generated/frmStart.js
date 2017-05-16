function addWidgetsfrmStart() {
    frmStart.setDefaultUnit(kony.flex.DP);
    var FlexContainer0iecb691ab98b4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexContainer0iecb691ab98b4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxHeaderMenuSkin",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0iecb691ab98b4b.setDefaultUnit(kony.flex.DP);
    var CopyImage0h1482fac58994e = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0h1482fac58994e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "kony_logo_tran.png",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0iecb691ab98b4b.add(CopyImage0h1482fac58994e);
    var flxMainLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxMainLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30%",
        "skin": "slFbox",
        "top": "25%",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxMainLogin.setDefaultUnit(kony.flex.DP);
    var flxLoginIcon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxLoginIcon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxLoginIconSkin",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxLoginIcon.setDefaultUnit(kony.flex.DP);
    var Image0ef6b61271d9b4f = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "10%",
        "height": "64px",
        "id": "Image0ef6b61271d9b4f",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "signin.png",
        "top": "0dp",
        "width": "64px",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0g55cae6803da48 = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage0g55cae6803da48",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "username.png",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0af04c96070c643 = new kony.ui.Image2({
        "height": "20%",
        "id": "CopyImage0af04c96070c643",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "password.png",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLoginIcon.add(Image0ef6b61271d9b4f, CopyImage0g55cae6803da48, CopyImage0af04c96070c643);
    var FlexContainer0de17fda66c414b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0de17fda66c414b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "flxLoginContSkin",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0de17fda66c414b.setDefaultUnit(kony.flex.DP);
    var FlexContainer0g8b92826e29041 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0g8b92826e29041",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0g8b92826e29041.setDefaultUnit(kony.flex.DP);
    var Image0a36a6803786240 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "64px",
        "id": "Image0a36a6803786240",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "login_account.png",
        "top": "0dp",
        "width": "64px",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0e5199f7b61724a = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "Label0e5199f7b61724a",
        "isVisible": true,
        "left": "25%",
        "skin": "CopyslLabel0j9b8c16bb51f48",
        "text": "Login into your Account",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0b69e455d8ea34e = new kony.ui.Label({
        "bottom": "0%",
        "height": "2%",
        "id": "Label0b69e455d8ea34e",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0h58fad6f288e40",
        "text": ".",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0g8b92826e29041.add(Image0a36a6803786240, Label0e5199f7b61724a, Label0b69e455d8ea34e);
    var FlexContainer0c290adf8204540 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexContainer0c290adf8204540",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c290adf8204540.setDefaultUnit(kony.flex.DP);
    var TextField0e7c304ded5b348 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "40dp",
        "id": "TextField0e7c304ded5b348",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0c871ead44afb48",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "23dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    FlexContainer0c290adf8204540.add(TextField0e7c304ded5b348);
    var CopyFlexContainer0fe992101456e48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "CopyFlexContainer0fe992101456e48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0fe992101456e48.setDefaultUnit(kony.flex.DP);
    var CopyTextField0d0e8d25c048648 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "40dp",
        "id": "CopyTextField0d0e8d25c048648",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Password",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0ee26de272bda41",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "23dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    CopyFlexContainer0fe992101456e48.add(CopyTextField0d0e8d25c048648);
    var Button0i9f794b43b054c = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0i9f794b43b054c",
        "isVisible": true,
        "left": "25%",
        "skin": "slButtonGlossBlue",
        "text": "Login",
        "top": "80%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0de17fda66c414b.add(FlexContainer0g8b92826e29041, FlexContainer0c290adf8204540, CopyFlexContainer0fe992101456e48, Button0i9f794b43b054c);
    flxMainLogin.add(flxLoginIcon, FlexContainer0de17fda66c414b);
    frmStart.add(FlexContainer0iecb691ab98b4b, flxMainLogin);
};

function frmStartGlobals() {
    frmStart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStart,
        "enabledForIdleTimeout": false,
        "id": "frmStart",
        "init": AS_Form_gba8dac165b54b4f96bb20d37e7d484e,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "frmBGCSkin"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};