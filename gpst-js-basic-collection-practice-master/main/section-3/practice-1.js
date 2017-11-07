'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var arr=[];
  arr=objectB.value;
 for(var i=0;i<arr.length;i++)
  for(var j=0;j<collectionA.length;j++)
      if(arr[i]==collectionA[j].key)
        collectionA[j].count--;
    return collectionA;  
}
