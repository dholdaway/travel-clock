//Stuff
var modules = modules || {};

modules.clockFunctions = function(options){

    // defaults
    var o = {
        clock: '.clock',
        hours:'.hours',
        minutes:'.minutes',
        seconds:'.seconds',
        set:'.set',
        alarmHour:'.alarmHour',
        alarmMinute:'.alarmMinute',
        alarmSecond:'.alarmSecond'
    };

    var d,
    h, m, s;

    // extend 
    $.extend(o, options);

    createClock = function(){

    	d = new Date;

    	h = d.getHours();
    	m = d.getMinutes();
    	s = d.getSeconds();


    	if(s < 10){
		s = '0' + s;
	}
	if(m < 10){
		m = '0' + m;
	}

    	$(o.hours).html(h);
    	$(o.minutes).html(m);
    	$(o.seconds).html(s);

    };

    setInterval(function() {
    	createClock();
    }, 1000);

    createClock();

    setAlarm = function(){

    	$(o.set).on('click', function(){
    		var date = new Date();

		        

    		$('.setTime').html(date.setHours(23,59,59,0));


    	});

    };

    setAlarm();

};
