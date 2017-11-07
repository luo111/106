'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var A=[];
  var B=[];
  var result=[];
  for(var j=0;j<collectionA.length;j++)
      A.push(collectionA[j].key);
  B=objectB.value;
    for(var i=0;i<A.length;i++)
        if(B.indexOf(A[i])>-1)
                result.push(A[i]);
    return result;
}
