'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var m=0;
  for(var i=0;i<collectionA.length;i++){
       if(i==collectionA.indexOf(collectionA[i]))
       { result[m]={ key:collectionA[i], count:1}
         m++;
       }
  else
   { 
    result[m-1].count++;
    }
 } 
 
var arr=[];
   arr=objectB.value;
  for(var i=0;i<arr.length;i++)
   for(var j=0;j<result.length;j++)
       if(arr[i]==result[j].key)
               {var k=result[j].count;
           result[j].count=k-parseInt(k/3);}
     return result;
}
