'use strict';

module.exports = function countSameElements(collection) {
  var result=[];
  var m=0;
  for(var i=0;i<collection.length;i++)
  {
    if(i==collection.indexOf(collection[i]))
    {
      result[m]={ key:collection[i], count:1};
      m++;
    }
    else{
      result[m-1].count++;
    }
  }
  return result;
}
