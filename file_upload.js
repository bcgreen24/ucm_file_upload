/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
$(document).ready(function(){
   $('#add_file_uploader').click(function(event){
       event.preventDefault();
       //add file input to form's fieldset
       $('#file_inputs').append('<strong>hello</strong>');
       return false;
   })
});
})(jQuery);;




