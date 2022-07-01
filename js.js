$().ready(function () {
	let totalMoney = 1000;
	const total = $('#total');
	const count = $('#count');
	const contentCenter = $('#countdown');
	let result;
	let selectBet;
	let totalSpin = 1;
	let spin2;
	yourMoney();
	function yourMoney() {
		total.html(totalMoney);
	}
	function countDown() {
		contentCenter.text('Count down: ');
		let sec = 10;
		const el = $('#timer');
		if(totalMoney < 100) {
			$('input[name="money"]').prop('disabled', true);
		}
		const timer = setInterval(() => {
			el.text(sec-- + 's');
			let item = $('input[name="money"]:checked').val() ?? 0;
			if (sec == 0) {
				selectBet = item;
			}
			if (sec == -1) {
				clearInterval(timer);
				wait();
				$('input[name="money"]').prop('disabled', true);

			};
		}, 1000);
	}

	function wait() {
		contentCenter.text('Filming: ');
		let sec = 5;
		const el = $('#timer');
		spin();
		result = random();
		if (selectBet != 0) {
			if (selectBet == result) {
				switch (result) {
					case 1:
						totalMoney = totalMoney + 100*2;
						break;
					case 2:
						totalMoney = totalMoney + 100*3;
						break;
					case 3:
						totalMoney = totalMoney + 50;
						break;
					case 4:
						totalMoney = totalMoney + 75;
						break;
					case 5:
						totalMoney = totalMoney + 10;
						break;
					case 6:
						totalMoney = totalMoney + 20;
						break;
				}
			} else {
				totalMoney = totalMoney - 100;
			}
		}
		console.log(result);
		const timer = setInterval(() => {
			
			el.text(sec-- + 's');
			if (sec == 1) {
				clearInterval(spin2);
				$('.item').removeClass('selected');
				$('.item-'+result).addClass('selected');
			}
			if (sec == 0) {
				$('input[name="money"]').prop('disabled', false);
				$('input[name="money"]').prop('checked', false);
				count.text(totalSpin++);
				yourMoney();
			}
			if (sec == -1) {
				$('.item-'+result).removeClass('selected')
				clearInterval(timer);
				countDown();
			};
		}, 1000);
	}

	function random() {
		return Math.floor((Math.random() * 6) + 1);
	}

	function spin() {
		let num = 1;
		spin2 = setInterval(() => {
			let a = '.item-' + num++;
			if (num ==7) {
				num = 1;
			}
			$(a).prev().removeClass('selected');
			$(a).addClass('selected');
			$(a).next().removeClass('selected');
			if($('.item-1').hasClass('selected')) {
				$('.item-6').removeClass('selected');
			}
		}, 100);
	}
	// spin();

	countDown();
})