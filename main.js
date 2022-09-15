
let nums = [5,1,4,6,20,2,8];
console.log(nums);



function bubbleSort(array){
    for(let i=0;i<array.length;i++){        
        for (let j = 0; j < array.length-i-1; j++) {            
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;            
            }
        }       
    }
    return array;    
}



function insertion(array){
    for(let i=1;i<array.length;i++){
	let x = array[i];
//	console.log("current:",x);

	let j = i-1;
//	console.log("array:",array[j]);
	while((j>-1) && (array[j] > x)){
	    array[j+1] = array[j];
	    j--;
	}
	array[j+1] = x;

    }
    return array;
}


console.log(insertion(nums));
