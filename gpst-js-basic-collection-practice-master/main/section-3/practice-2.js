'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var arr=[];
  arr=objectB.value;
 for(var i=0;i<arr.length;i++)
  for(let j=0;j<collectionA.length;j++)
      if(arr[i]==collectionA[j].key)
        {var k=collectionA[j].count;
          collectionA[j].count=k-parseInt(k/3);
        }
    return collectionA; 
}
