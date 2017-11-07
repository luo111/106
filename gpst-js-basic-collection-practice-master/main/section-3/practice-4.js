'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  var j=0;
  var add=[];
  for(var i=0;i<collectionA.length;i++){
    if(collectionA[i].length==1){
       if(i==collectionA.indexOf(collectionA[i]))
       {result[j]={ key:collectionA[i], count:1};  
        add.push(collectionA[i]); 
        j++;
       }
  else{  result[add.indexOf(collectionA[i])].count++; }
  }
     if(collectionA[i].length==3){
       result[j]={ key:collectionA[i].charAt(0), count:parseInt(collectionA[i].charAt(2))};
     }
 
  }
  var arr=[];
  arr=objectB.value;
  var k;
  for(let i=0;i<arr.length;i++)
   for(let j=0;j<result.length;j++)
       if(arr[i]==result[j].key)
         {k=result[j].count;
           result[j].count=k-parseInt(k/3);}
     return result; 
}
