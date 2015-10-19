// Namespace everything under Mole Modules ('MM')
var MM = MM || {}


// The overall controller of the game setup and play
MM.MoleModule = (function(){

	function init(){
		MM.BoardModule.init();
		_runGame();
	}

	function _runGame(){
		setInterval(_tic, 1500);
	}

	function _tic(){
		MM.BoardModule.displayMole(_randomMole(), _randomDelay());
	}

	function _randomMole(){
		var mole = Math.floor((Math.random() * 7));
		return mole;
	}

	function _randomDelay(){
		var delay = Math.floor((Math.random() * 9) + 2);
		return delay * 100;
	}

	return {
		init: init
	}

})()