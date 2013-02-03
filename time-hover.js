/**
* timeHover
*
* @author Ian Devlin <ian@iandevlin.com>
* http://twitter.com/iandevlin
* https://github.com/iandevlin/time-hover
*
* Version tag: v0.1.0
*/
var timeHover = function() {

	// Month names for display date
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var formatDateTime = function(datetime) {
		// The separator values for display date
		var dateSep = ' ', timeSep = ':';
	
		// Allowed values are fairly strict which aids recognising what's in there
		var dateSepCount = datetime.split('-').length - 1;
		if (dateSepCount == 0) return datetime;
		var hasMonth = dateSepCount > 0;
		var hasDay = dateSepCount > 1;
		
		// Build date string
		var s = '';
		var d = new Date(datetime);
		if (hasDay) s += d.getDate() + dateSep;
		if (hasMonth) s += months[d.getMonth()] + dateSep;
		s += d.getFullYear();
		// Build time string
		var hasTime = ((datetime.split(':').length - 1) > 0);
		if (hasTime) s += ' ' + d.getHours() + timeSep + addZero(d.getMinutes()) + timeSep + addZero(d.getSeconds());
		return s;
	}
	var addZero = function(number) {
		return ((parseInt(number) < 10) ? '0' : '') + number;
	}
	
	var time = document.getElementsByTagName('time');
	var len = time.length;
	for (var i = 0; i < len; i++) {
		var t = time[i];
		var datetime = t.getAttribute('datetime');
		if (datetime !== null) {
			if (datetime.length > 0) {
				var span = document.createElement('span');
				span.setAttribute('class', 'datetime');
				span.innerHTML = formatDateTime(datetime);					
				var w = t.offsetWidth;
				span.setAttribute('style', 'margin-left:-' + (w - 5) + 'px;width:' + w + 'px');
				t.appendChild(span);				
				t.addEventListener('mouseover', function() {
					this.querySelectorAll('.datetime')[0].style.display = 'inline';
				});				
				t.addEventListener('mouseout', function() {
					this.querySelectorAll('.datetime')[0].style.display = 'none';
				});
			}
		}
	}
}