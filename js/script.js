let page = $('#first').attr('class');
$('.wind-type').click(function(){
	$('.wind-type').removeClass('selected_window');
	$(this).addClass('selected_window');
	let i = $(this).index() + 1;
	$('.open').css({'display': 'none'});
	$('.open-'+i).css({'display': 'flex'});
	switch(i) {
		case 1:
			$('.wsize img').css({'width': '172px','height': '259px'});
		break;	
		case 2:
			$('.wsize img').css({'width': '173px','height': '165px'});
		break;
		case 3:
			$('.wsize img').css({'width': '176px','height': '168px'});
		break;
		case 4:
			$('.wsize img').css({'width': '69px','height': '173px'});
			$('.for_door').css({display: 'block'});
		break;
	}
	if(page == 'tree'){
		$('.wsize img').attr('src','img/big-'+i+'.jpg');
	} else {
		$('.wsize img').attr('src','img/plastic/big-'+i+'.jpg');
	}
});

$('.open-type').click(function(){
	$('.open-type').removeClass('selected_open-type');
	$(this).addClass('selected_open-type');
});

$('.checkbox').click(function(){
	$(this).toggleClass('arrow-img');
});
let window_size = $('html,body').width();
let pos = 972;
if(window_size < 480) {
	pos = 32;
}
function move2(){
	$('html,body').mousemove(function(e){
		let x = e.pageX - pos, number;
		if(x < 0){
			x = 0;
		}
		console.log(e.pageX);
		if(x > 424){
			x = 425; number = 3000;
		} else {
			number = x * 7;
		}
		$('.move-btn').css({'left': x+"px"});
		$('.size').eq(0).val(number);
		$('.size-value2').text(number);	
		if(x != 0){
			if($('.move-btn').prev('.add-2').length){
				$('.move-btn').prev().remove('.add-2');
			}
			$('.move-btn').before('<div class="add-2"></div>');
			$('.add-2').css({'width': x+2+"px"});
			$('.animate2 .circle').eq(0).css({'background': '#a0046c'})
		} else {
			$('.add-2').remove();
		}
	});
}
function move1(){
	$('html,body').on('mousemove',function(e){
		let y = e.pageY-1400, number;
		if(y > 375){
			y = 376;
		}	
		if(y < 0){
			y = 0; number = 2500;
		} else {
			number = (-7 * (y - 376));
		}
		$('.size').eq(1).val(number);
		if(number < 10)
			$('.size-value1').css({'right': '-75px'});
		else if(number > 9 && number < 100)
			$('.size-value1').css({'right': '-80px'});
		else if(number > 99 && number < 1000)
				$('.size-value1').css({'right': '-85px'});
			 else 
				$('.size-value1').css({'right': '-90px'});

		$('.move-btn-2').css({'top': y+"px"});
		$('.size-value1').text(number);	
		if(376-y != 0){
			if($('.circle1-2').prev('.add-1').length){
				$('.circle1-2').prev().remove('.add-1');
			}
			$('.circle1-2').before('<div class="add-1"></div>');
			$('.add-1').css({'height': 376-y+"px"});
			$('.first-animate .circle').eq(1).css({'background': '#a0046c'})
		} else {
			$('.add-1').remove();
		}
	});
}

$('.animate2').on('mousedown',function(){
	move2(); 
});
$('html,body').on('mouseup',function(){
	$('html,body').unbind('mousemove',move2());
});

$('.first-animate').on('mousedown',function(){
	move1(); 
});
$('html,body').on('mouseup',function(){
	$('html,body').unbind('mousemove',move1());
});

$('.bid').click(function(){
	$('.black').css({'display': 'block'});
	$('.pop-up').css({'display': 'block'});
	$('.black').not('.bid').click(function(){
		$('.pop-up').css({'display': 'none'});
		$('.black').css({'display': 'none'});
	});
});
$('.pop-up img').click(function(){
		$('.pop-up').css({'display': 'none'});
		$('.black').css({'display': 'none'});
});
