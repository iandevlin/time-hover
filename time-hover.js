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
	
	var apply = function() {
		var time = document.getElementsByTagName('time');
		var len = time.length;
		for (var i = 0; i < len; i++) {
			var t = time[i];
			var datetime = t.getAttribute('datetime');
			if (datetime.length > 0) {
				var span = document.createElement('span');
				span.setAttribute('class', 'datetime');
				span.innerHTML = datetime;
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
	apply();
	
}