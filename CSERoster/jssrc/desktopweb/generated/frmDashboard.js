function addWidgetsfrmDashboard() {
    frmDashboard.setDefaultUnit(kony.flex.DP);
    var flxCalendar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxCalendar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "flxCalendarSkin",
        "top": "10%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxCalendar.setDefaultUnit(kony.flex.DP);
    var rtCalendar = new kony.ui.RichText({
        "height": "75%",
        "id": "rtCalendar",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0d9d4ca4b0a984f",
        "text": "<div  class=\"yui3-skin-sam\">\n     <div id=\"mycalendar\"></div>\n  </div>",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var rtClock = new kony.ui.RichText({
        "height": "25%",
        "id": "rtClock",
        "isVisible": true,
        "left": "0dp",
        "skin": "rtClockSkin",
        "text": "<div id=\"clock\"></div>",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 25, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCalendar.add(rtCalendar, rtClock);
    var FlexScrollContainer0h0c790cc322443 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0h0c790cc322443",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "10%",
        "verticalScrollIndicator": true,
        "width": "65%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0h0c790cc322443.setDefaultUnit(kony.flex.DP);
    var Segment0f22247a7217043 = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "Label0e989b256c1214a": "3:00 PM",
            "imgUser": "username.png",
            "lblRowUserDesg": "MADP-Engineer",
            "lblRowUserName": "Employee Name",
            "lblRowUserShift": "S1",
            "lblSSTime": "6:00 AM",
            "lblShiftEndTime": "Shift End Time",
            "lblShiftStartTime": "Shift Start Time"
        }, {
            "Label0e989b256c1214a": "11:00 PM",
            "imgUser": "username.png",
            "lblRowUserDesg": "MF-Engineer",
            "lblRowUserName": "Employee Name",
            "lblRowUserShift": "S2",
            "lblSSTime": "2:00 PM",
            "lblShiftEndTime": "Shift End Time",
            "lblShiftStartTime": "Shift Start Time"
        }, {
            "Label0e989b256c1214a": "7:00 AM",
            "imgUser": "username.png",
            "lblRowUserDesg": "MF-Lead",
            "lblRowUserName": "Employee Name",
            "lblRowUserShift": "S3",
            "lblSSTime": "10:00 PM",
            "lblShiftEndTime": "Shift End Time",
            "lblShiftStartTime": "Shift Start Time"
        }, {
            "Label0e989b256c1214a": "6:00 PM",
            "imgUser": "username.png",
            "lblRowUserDesg": "MADP-Lead",
            "lblRowUserName": "Employee Name",
            "lblRowUserShift": "G",
            "lblSSTime": "9:00 AM",
            "lblShiftEndTime": "Shift End Time",
            "lblShiftStartTime": "Shift Start Time"
        }],
        "groupCells": false,
        "id": "Segment0f22247a7217043",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ed9321f1a4604e",
        "rowTemplate": flxRowDay,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Label0e989b256c1214a": "Label0e989b256c1214a",
            "flxRowDay": "flxRowDay",
            "flxShiftDetails": "flxShiftDetails",
            "flxUserDetails": "flxUserDetails",
            "flxUserImage": "flxUserImage",
            "imgUser": "imgUser",
            "lblRowUserDesg": "lblRowUserDesg",
            "lblRowUserName": "lblRowUserName",
            "lblRowUserShift": "lblRowUserShift",
            "lblSSTime": "lblSSTime",
            "lblShiftEndTime": "lblShiftEndTime",
            "lblShiftStartTime": "lblShiftStartTime"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexScrollContainer0h0c790cc322443.add(Segment0f22247a7217043);
    var flxShiftOption = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "flxShiftOption",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxShiftOption.setDefaultUnit(kony.flex.DP);
    var Label0g4385dca395247 = new kony.ui.Label({
        "height": "100%",
        "id": "Label0g4385dca395247",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblRowUserNameSkin",
        "text": "Welcom CSE",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0db0467bde05a49 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button0db0467bde05a49",
        "isVisible": true,
        "right": "0%",
        "skin": "btnQtrSkin",
        "text": "Quaterly",
        "top": "0dp",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0cc1dfdcb249c43 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button0cc1dfdcb249c43",
        "isVisible": true,
        "right": "5%",
        "skin": "btnMonthlySkin",
        "text": "Monthly",
        "top": "0dp",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0a825184af5ff48 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "Button0a825184af5ff48",
        "isVisible": true,
        "right": "10%",
        "skin": "btnWeelySkin",
        "text": "Weekly",
        "top": "0dp",
        "width": "5%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxShiftOption.add(Label0g4385dca395247, Button0db0467bde05a49, Button0cc1dfdcb249c43, Button0a825184af5ff48);
    frmDashboard.add(flxCalendar, FlexScrollContainer0h0c790cc322443, flxShiftOption);
};

function frmDashboardGlobals() {
    frmDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDashboard,
        "enabledForIdleTimeout": false,
        "footers": [FlexContainer0e38e800abdac42],
        "headers": [FlexContainer0aec82598da0e45],
        "id": "frmDashboard",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_h0978eb921bc4b0587a49d7467736aec,
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