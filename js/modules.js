//Stuff
var modules = modules || {};

modules.clockFunctions = function(options){

    // defaults
    var o = {
        clock: '.clock',
        hours:'.hours',
        minutes:'.minutes',
        seconds:'.seconds'
    };

    // extend 
    $.extend(o, options);

    createClock = function(){

    	var d = new Date;

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

};
