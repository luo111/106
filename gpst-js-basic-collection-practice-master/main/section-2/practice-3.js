'use strict';

module.exports = function countSameElements(collection) {
  var result=[];
  var j=0;
  var add=[];
 
 
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i].length==1)
    {
      if(i==collection.indexOf(collection[i]))
      {
         result[j]={ name:collection[i], summary:1};   add.push(collection[i]); 
         j++;
      }
 
    else{
      result[add.indexOf(collection[i])].summary++;
      }
    }
 
     if(collection[i].length==3)
     {
         if(add.indexOf( collection[i].charAt(0) ) !==-1  )
         {
           var p=add.indexOf( collection[i].charAt(0) );
           var m=parseInt(collection[i].charAt(2));
           result[p].summary=result[p].summary+m;
         }
 
       else {
             result[j]={ name:collection[i].charAt(0), summary:parseInt(collection[i].charAt(2))}; j++;
             add.push(collection[i].charAt(0));
            }
     }
 
 if(collection[i].length>3)
 { 
   var a=collection[i].charAt(1);
   if(a=='['){
    if(add.indexOf( collection[i].charAt(0) ) !==-1  )
      {
          var p=add.indexOf( collection[i].charAt(0) );
          var m=parseInt(collection[i].substring(2,collection[i].length-1) );
          result[p].summary=result[p].summary+m;
           
      }
    else {
        result[j]={ name:collection[i].charAt(0), 
        summary:parseInt(collection[i].substring(2,collection[i].length-1))};
        j++;
        add.push(collection[i].charAt(0));
     }
   }
   }
 }
  return result;   
 }
 