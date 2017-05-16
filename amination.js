//Type your code here
flag = 0;

function menu() {
    if (flag === 0) {
        animate();
    } else {
        hide();
    }
}

function animate() {
    kony.print("Entered animation function");

    function stepConfig() {
        var config = kony.ui.createAnimation({
            "0": {
                "left": "0%",
                "top": "0%",
                "opacity": 0.7,
                "zIndex": 4,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "left": "0%",
                "top": "20%",
                "opacity": 1.0,
                "zIndex": 4,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        return config;
    }

    function timingConfig() {
        var config = {
            "delay": 0,
            "duration": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        };
        return config;
    }

    function callbackConfig() {
        var config = {
            "animationEnd": function() {}
        };
        return config;
    }
    frmDashboard.flxMenu.setVisibility(true);
    frmDashboard.flxMenu.animate(stepConfig(), timingConfig(), callbackConfig());
    flag = 1;
}

function hide() {
    kony.print("Entered hide function");

    function stepConfig() {
        var config = kony.ui.createAnimation({
            "0": {
                "left": "0%",
                "top": "20%",
                "opacity": 1.0,
                "zIndex": 4,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "left": "0%",
                "top": "0%",
                "opacity": 0.7,
                "zIndex": 4,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        return config;
    }

    function timingConfig() {
        var config = {
            "delay": 0,
            "duration": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        };
        return config;
    }

    function callbackConfig() {
        var config = {
            "animationEnd": function() {}
        };
        return config;
    }
    frmDashboard.flxMenu.setVisibility(false);
    frmDashboard.flxMenu.animate(stepConfig(), timingConfig(), callbackConfig());
    flag = 0;
}
test = 0;

function popup() {
    kony.print("Entered popup");
    if (test === 0) {
        kony.print("Entered if");
        frmDashboard.flxPopup.setVisibility(true);
        test = 1;
    } else {
        kony.print("Entered else");
        frmDashboard.flxPopup.setVisibility(false);
        test = 0;
    }
}