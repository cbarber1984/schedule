var currentDay = function(){
    var date = dayjs().format("dddd, MM-DD-YYYY");
    $("#currentDay").html(date);
};

// load saved events
var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

// if no events exist in localStorage, create new object
if(!events) {
    events = [
        {
            hour: "9 a.m.",
            description: 'test'
        },
        {
            hour: "10 a.m.",
            description: ''
        },
        {
            hour: "11 a.m.",
            description: ''
        },
        {
            hour: "12 p.m.",
            description: ''
        },
        {
            hour: "1 p.m.",
            description: ''
        },
        {
            hour: "2 p.m.",
            description: ''
        },
        {
            hour: "3 p.m.",
            description: ''
        },
        {
            hour: "4 p.m.",
            description: ''
        },
    ]
}
}

// create events by looping over events array
var createEvent = function() {
   
    for(let i = 0; i < events.length; i++) {

        // create row for event elements
        var timeblockEl = $("<div></div>").addClass("row timeblock");
        
        // create event elements (hour, description, savebtn)
        var hourEl = $("<div></div>").addClass("hour col-2 d-flex justify-content-center p-3");
        var eventDetailsEl = $("<textarea></textarea>").addClass("col-8 description");
        var saveBtnEl = $("<div></div>").addClass("col-2 saveBtn p-3 h-100 align-items-center d-flex justify-content-center");
        
        // update event elements from event array
        hourEl.append(events[i].hour);
        eventDetailsEl.append(events[i].description);
        saveBtnEl.append('<i class="fa-solid fa-floppy-disk"></i>');
        
        // append elements to timeblockEl
        timeblockEl.append(hourEl, eventDetailsEl, saveBtnEl);
        
        // append timeblockEl to event container
        $("#eventContainer").append(timeblockEl);
    }
        
};

// audit event times and update color
var auditEvent = function(){
    // call using jQuery class selector


};



// save event function
var saveEvent = function(){

};

// display current day in header
currentDay();
loadEvents();