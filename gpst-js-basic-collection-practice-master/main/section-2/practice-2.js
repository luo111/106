'use strict';

module.exports = function countSameElements(collection) {
  var result=[];
  var add=[];
  var j=0;
  var arr=[];
  arr=result[i];
  for(var i=0;i<collection.length;i++){
    if(collection[i].length==1)
    {
       if(i==collection.indexOf(collection[i]))
       {
         result[j]={ key:collection[i], count:1};   
         add.push(collection[i]); 
         j++;
       }
  else
    { 
     result[j-1].count++;       
   }
  }
     if(collection[i].length==3){//collection[i]='d-5'
         if(add.indexOf( collection[i].charAt(0) ) !==-1 )
         {var p=add.indexOf(collection[i].charAt(0) );
           var m=parseInt(collection[i].charAt(2));
           result[p].count=result[p]+m;
       }
 
       else result[j]={ key:collection[i].charAt(0), count:parseInt(collection[i].charAt(2))};
     }
 
  }
  return result;   
}
