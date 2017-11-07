'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result=[];
  var m=0;
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.length;j++)
    {
      if(collectionB[j]==collectionA[i])
      {
       result[m]=collectionA[i];
       m++;
      }
    }
  }
  return result;
}
