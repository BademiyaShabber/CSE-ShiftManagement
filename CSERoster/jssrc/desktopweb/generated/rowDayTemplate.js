function initializerowDayTemplate() {
    flxRowDay = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50px",
        "id": "flxRowDay",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxRowDaySkin"
    }, {}, {});
    flxRowDay.setDefaultUnit(kony.flex.DP);
    var flxUserImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxUserImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxUserImage.setDefaultUnit(kony.flex.DP);
    var imgUser = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUser",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "username.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUserImage.add(imgUser);
    var flxUserDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxUserDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxUserDetails.setDefaultUnit(kony.flex.DP);
    var lblRowUserName = new kony.ui.Label({
        "height": "40%",
        "id": "lblRowUserName",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblRowUserNameSkin",
        "text": "Employee Name",
        "top": "10%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRowUserDesg = new kony.ui.Label({
        "height": "40%",
        "id": "lblRowUserDesg",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblRowUserDesgSkin",
        "text": "MF-Engineer",
        "top": "50%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRowUserShift = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "lblRowUserShift",
        "isVisible": true,
        "right": "0%",
        "skin": "lblRowUserShiftSkin",
        "text": "S1",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    flxUserDetails.add(lblRowUserName, lblRowUserDesg, lblRowUserShift);
    var flxShiftDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxShiftDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxShiftDetails.setDefaultUnit(kony.flex.DP);
    var lblShiftStartTime = new kony.ui.Label({
        "height": "40%",
        "id": "lblShiftStartTime",
        "isVisible": true,
        "left": "5%",
        "skin": "lblRowUserNameSkin",
        "text": "Shift StartTime",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSSTime = new kony.ui.Label({
        "height": "40%",
        "id": "lblSSTime",
        "isVisible": true,
        "left": "5%",
        "skin": "lblRowUserNameSkin",
        "text": "9:00 AM",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblShiftEndTime = new kony.ui.Label({
        "height": "40%",
        "id": "lblShiftEndTime",
        "isVisible": true,
        "right": "5%",
        "skin": "lblRowUserNameSkin",
        "text": "Shift End Time",
        "top": "10%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0e989b256c1214a = new kony.ui.Label({
        "height": "40%",
        "id": "Label0e989b256c1214a",
        "isVisible": true,
        "right": "5%",
        "skin": "lblRowUserNameSkin",
        "text": "3:00 PM",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxShiftDetails.add(lblShiftStartTime, lblSSTime, lblShiftEndTime, Label0e989b256c1214a);
    flxRowDay.add(flxUserImage, flxUserDetails, flxShiftDetails);
}