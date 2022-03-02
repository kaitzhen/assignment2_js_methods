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
  Array.prototype.myIndexOf = function() {
    // Place your code here.
  };
  
  // PUSH //
  Array.prototype.myPush = function() {
    // Place your code here.
  };
  
  // LASTINDEXOF //
  Array.prototype.myLastIndexOf = function() {
    // Place your code here.
  };
  
  // KEYS //
  Object.myKeys = function() {
    // Place your code here.
  };
  
  // VALUES //
  Object.myValues = function() {
    // Place your code here.
  };