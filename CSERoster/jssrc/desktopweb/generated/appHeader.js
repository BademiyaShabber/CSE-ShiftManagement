function initializeappHeader() {
    FlexContainer0aec82598da0e45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10.50%",
        "id": "FlexContainer0aec82598da0e45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "appHeaderSkin"
    }, {}, {});
    FlexContainer0aec82598da0e45.setDefaultUnit(kony.flex.DP);
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92.50%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var flxSubTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxSubTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSubTitle.setDefaultUnit(kony.flex.DP);
    var lblShifttitle = new kony.ui.Label({
        "id": "lblShifttitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblShiftTitleSkin",
        "text": "Shift ",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblManagementTitle = new kony.ui.Label({
        "id": "lblManagementTitle",
        "isVisible": true,
        "left": "5dp",
        "skin": "lblShiftMangSkin",
        "text": "Management",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSubTitle.add(lblShifttitle, lblManagementTitle);
    var lblCSE = new kony.ui.Label({
        "id": "lblCSE",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblSubTitleSkin",
        "text": "Customer Success Engineering",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTitle.add(flxSubTitle, lblCSE);
    var imgSupportLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSupportLogo",
        "isVisible": true,
        "right": "0%",
        "skin": "slImage",
        "src": "support_24x7.PNG",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxHeader.add(flxTitle, imgSupportLogo);
    var Label0d7588d8f17c643 = new kony.ui.Label({
        "height": "2%",
        "id": "Label0d7588d8f17c643",
        "isVisible": true,
        "left": "5%",
        "skin": "lblLineSkin",
        "top": "98%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0aec82598da0e45.add(flxHeader, Label0d7588d8f17c643);
}