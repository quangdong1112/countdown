$().ready(function() {
	function cntDown() {
		let sec = 5;
		let num = 1;
		const el = document.getElementById("timer");
		const count = document.getElementById('count')
		const timer = setInterval(() => {
			el.innerHTML = sec-- + 's';
			if (sec < 10) el.style.color = "#ff0";
			if (sec < 5) el.style.color = "#f00";
			if (sec == -1) {
				count.innerHTML = num++;
				sec = 5;
			};
		}, 1000);
	}
	
	cntDown();
})