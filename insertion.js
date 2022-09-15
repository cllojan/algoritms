
function insertion(array){
    for(let i=1;i<array.length;i++){
	let x = array[i];
	let j = i-1;
	while((j>-1) && (array[j] > x)){
	    array[j+1] = array[j];
	    j--;
	}
	array[j+1] = x;

    }
    return array;
}
