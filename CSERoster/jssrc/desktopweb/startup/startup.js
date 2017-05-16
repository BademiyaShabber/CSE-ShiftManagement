//startup.js file
var appConfig = {
    appId: "CSERoster",
    appName: "CSERoster",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.3.59",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "CSERoster"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializerowDayTemplate();
    initializeappHeader();
    initializeappFooter();
    frmDashboardGlobals();
    frmLoginGlobals();
    frmStartGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 73010
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            postappinit: AS_AppEvents_eb75b66ddc3043ccabdb97b8cccc2654,
            showstartupform: function() {
                frmLogin.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								