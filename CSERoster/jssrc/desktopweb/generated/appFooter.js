function initializeappFooter() {
    FlexContainer0e38e800abdac42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "FlexContainer0e38e800abdac42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "appFooterSkin"
    }, {}, {});
    FlexContainer0e38e800abdac42.setDefaultUnit(kony.flex.DP);
    var flxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "flxFooter",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxFooter.setDefaultUnit(kony.flex.DP);
    var Label0d5ad26fdb9514a = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0d5ad26fdb9514a",
        "isVisible": true,
        "left": "0dp",
        "skin": "lblFooter",
        "text": "Copyright @ 2017 Kony | Customer Success Engineering",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxFooter.add(Label0d5ad26fdb9514a);
    FlexContainer0e38e800abdac42.add(flxFooter);
}