module.exports = function check(str, bracketsConfig) {
	if(str.length % 2 !== 0) return false;
	
	let state = {};
	let allparam = {};
	let arr =[];
	let bracketsConfigsize = bracketsConfig.length;

	for (let i = 0; i < bracketsConfigsize; i++){
		if(bracketsConfig[i][0] === bracketsConfig[i][1]){
			state[bracketsConfig[i][0]] = 0;
	 	}else{
	 		state[bracketsConfig[i][0]] = 0;
			state[bracketsConfig[i][1]] = 1;	
	 	}
		allparam[bracketsConfig[i][0]] = bracketsConfig[i][1];
		allparam[bracketsConfig[i][1]] = bracketsConfig[i][0];
	}
	
	let strsize = str.length;
	for(let i = 0; i<strsize; i++ ){
		let el = str[i];
		if(state[el] === 0 ){
			arr.push(el);
			if(el === allparam[el]) state[el] = 1;
		}else{
			if(arr.length === 0 || arr[arr.length-1] !== allparam[el]){
				return false;
			}else{
				arr.pop();
				if(el === allparam[el]) state[el] = 0;
			}
		}
	}
	return arr.length === 0;
}


