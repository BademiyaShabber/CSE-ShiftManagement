function AS_Form_h0978eb921bc4b0587a49d7467736aec(eventobject) {
    var selectedDate = "";
    YUI().use('calendar', 'datatype-date', 'cssbutton', function(Y) {
        // Create a new instance of calendar, placing it in
        // #mycalendar container, setting its width to 340px,
        // the flags for showing previous and next month's
        // dates in available empty cells to true, and setting
        // the date to today's date.
        var calendar = new Y.Calendar({
            contentBox: "#mycalendar",
            width: '340px',
            showPrevMonth: true,
            showNextMonth: true,
            date: new Date()
        }).render();
        // Get a reference to Y.DataType.Date
        var dtdate = Y.DataType.Date;
        // Listen to calendar's selectionChange event.
        calendar.on("selectionChange", function(ev) {
            // Get the date from the list of selected
            // dates returned with the event (since only
            // single selection is enabled by default,
            // we expect there to be only one date)
            var newDate = ev.newSelection[0];
            // Format the date and output it to a DOM
            // element.
            selectedDate = dtdate.format(newDate);
            kony.print("Selected Date:" + selectedDate);
        });
    });
    clock.call(this);
    var segData = [{
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
    }, {
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
    }, {
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
    }];
    frmDashboard.Segment0f22247a7217043.setData(segData);
}