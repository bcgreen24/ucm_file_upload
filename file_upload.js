/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
$(document).ready(function(){
   $('#add_file_uploader').click(function(event){
       event.preventDefault();
       //add file input to form's fieldset
       $('#file_inputs').append(
       '<div class="form-item form-type-file form-item-files-"><input type="file" name="files[]" size="22" class="form-file"/></div>'
       );
       return false;
   })
});
})(jQuery);;




