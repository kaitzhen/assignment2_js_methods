// FOR EACH //
Array.prototype.myEach = function(callback) {
    for(let index = 0; index < this.length; index++) {
        callback(this[index],index,this);
    }
};
  
  // MAP //
  Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};
  
  // SOME //
Array.prototype.mySome = function(callback) {
  if(this.length==0) {    //if array empty
      return false;
  }
  for(let index = 0; index < this.length; index++) {
      if(callback(this[index], index, this)) {
          return true;
      }
  }
  return false;
};
  
  // REDUCE //
Array.prototype.myReduce = function(callback,initVal) {
  let result = initVal;  //=prev val
  for(let index=0; index<this.length;index++) {
      result=callback(result,this[index],index,this);
  }
  return result;
};
  
  // INCLUDES //
Array.prototype.myIncludes = function(searchElement,fromIndex=0) {
  //console.log(`given fromIndex = ${fromIndex}`);
  //console.log(`array length = ${array.length}`);

  if(this.length==0) {   //if array empty
      return false;
  }
  if(fromIndex < 0) {             //edge cases for fromIndex
      fromIndex+=this.length;
      if(fromIndex<0) {
          fromIndex = 0;
      }
  } else if(fromIndex > this.length) {
      return false;
  }
  for(let index=fromIndex; index<this.length; index++) {
      if(this[index] == searchElement) {
          return true;
      } 
  }
  return false;
};
  
  // INDEXOF //
Array.prototype.myIndexOf = function(searchElement,fromIndex=0) {
  if(this.length==0) {
      //console.log("empty array");   //if array empty
      return -1;
  }
  //console.log(this);
  if(fromIndex < 0) {              //edge cases for fromIndex
      fromIndex+=this.length;
      if(fromIndex<0) {
          fromIndex = 0;
      }
  } else if(fromIndex > this.length) {
      return -1;
  }
  //console.log(`search element = ${searchElement}`);
  for(let index=fromIndex; index<this.length;index++) {
      //console.log(this[index]);
      if(this[index] === searchElement) {
         return index;
      } 
  }
  return -1;
};

  
  // PUSH //
Array.prototype.myPush = function(...args) {
  let args_index = 0;  // Index of new element
  let length = this.length;   // Length of "this" array
  // The last element of "this" array is at length - 1
  for (let i = length; i < length + args.length; i++) {
      this[i] = args[args_index];  // Add new element to end of "this" array
      args_index++;
  }
  return this.length;  // Return new length of "this" array
};
  
  // LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement,fromIndex=(this.length-1)) {
  if(this.length == 0) {  //if empty
      return -1;
  }

  if(fromIndex < 0) {              //edge cases for fromIndex
      fromIndex+=(this.length-1);
      if(fromIndex<0) {
          return -1;
      }
  } else if(fromIndex > this.length) {
      fromIndex=this.length-1;
  }

  for(let index = fromIndex; index>=0;index--) {
      
      if(this[index] === searchElement) {
         return index;
      } 
  }
  return -1;
  
};
  
// KEYS //

Object.myKeys = function(obj) {
  let keys = [];
  Object.entries(obj).forEach(entry => {
      keys.push(String(entry[0]));
  });
  return keys;
};


// VALUES //
Object.myValues = function(obj) {
  let values = [];
  Object.entries(obj).forEach(entry => {
      values.push(entry[1]);
  });
  return values;
};