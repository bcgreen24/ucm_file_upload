/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
   $('#add_file_uploader').click(function(event){
       event.stopImmediatePropagation();
       alert('hello');
       return false;
   })
});
