// Namespace everything under Mole Modules ('MM')
var MM = MM || {}


// The overall controller of the game setup and play
MM.BoardModule = (function(){
	var score = 0;

	// Initialize the board
	function init(){
		_buildBoard();
		_setListeners();
	}

	function displayMole(index, delay){
		$('.mole-cell-'+index).addClass("mole");
		setTimeout(function(){
			$('.mole-cell-'+index).removeClass("mole")
		}, delay);
	}

	// Build the actual board. Just a table w/ 8 cells
	function _buildBoard(){
		var buffer = '<table class="table table-bordered mole-table">';
		buffer += '<tr>';
		for(var i=0;i<8;i++){
			buffer += '<td class="mole-cell-'+ i +'"></td>';
		}
		buffer += '</tr>';
		buffer += '</table>';
		$('#mole-wrapper').append(buffer);
	}

	function _setListeners(){
		$('.mole-table').on("click","td",function(e){
			if(_checkHit(e.target)){
				_incScore();
			}
		})
	}

	function _checkHit(el){
		return $(el).hasClass("mole");
	}

	function _incScore(){
		score++;
		_renderScore();
	}

	function _renderScore(){
		$('#score').html('Score: '+ score);
	}

	return {
		init: init, 
		displayMole: displayMole
	}


})()