	function longestConsec(strarr, k) {
	  // Now return consecutive strings
	  const list = Array.from(strarr)
	  const memory = Array.from(strarr)
	  
	  const mapArr = (list) => list.map((val) => val.length)
	  const item = (arr) => {
	    const node = arr.indexOf(Math.max(...arr))
	    const longestString = list[node]
	    list.splice(node, 1)
	    return longestString
	    }
	  
	//   console.log(item(mapArr(list)))
	    
	  if (strarr.length = 0 || k > strarr.length || k <= 0) return ""

	  // retrieve result according to n consecutive times
	  let result = []
	    while (k > 0){
	      result.push(item(mapArr(list)))
	    k--
	  }
	//   const sortedResult = result.sort((a,b) => {
	//     return memory.indexOf(a) > memory.indexOf(b)
	//   })
	  
	  const sortedResult = memory.filter((item) => result.indexOf(item) !== -1)
	  console.log(sortedResult)
	  return sortedResult.join('')


	}

	const longestConsec = (strings, count) => {
	    let n = strings.length;
	    if (!n || count <= 0 || count > strings.length)
		return '';

	    let lengths = Array(n);

	    // fill the running window
	    let windowLen = 0;
	    for (let i = 0; i < count - 1; i++) {
		let stringLen = strings[i].length;
		windowLen += stringLen;
		// fill the cache with items 0..count-1, the rest will be filled in the main loop
		lengths[i] = stringLen;
	    }

	    let maxLen = 0;
	    let maxLenAt = 0;
	    for (let i = count - 1, windowStart = 0; i < n; i++, windowStart++) {
		let stringLen = strings[i].length;
		lengths[i] = stringLen;

		let thisLen = windowLen + stringLen;
		if (thisLen > maxLen) {
		    maxLen = thisLen;
		    maxLenAt = windowStart;
		}
		windowLen += stringLen - lengths[windowStart];
	    }

	    return strings.slice(maxLenAt, maxLenAt + count).join('');
	}




function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}


function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}
