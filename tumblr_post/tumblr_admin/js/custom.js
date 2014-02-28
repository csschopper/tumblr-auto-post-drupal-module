/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function MyAllHideFunc(mydata,baspath1){
    
    jQuery.ajax({
                type: "POST",
                url: baspath1+"admin/ajaxcallback/pages",
                data: "value="+mydata,
                 dataType: 'text',
                success: function(msg){
                        jQuery(".test_"+mydata).html(msg);

                }
           });
           
    jQuery("."+mydata).show("fast");
}

// Add onclick handler to checkbox w/id checkme
function MyAllClickManage(myvalue,myid,baspath1){
// If checked
    if (jQuery("#"+myid).is(":checked"))
    {
        
            //show the hidden div
           jQuery.ajax({
                type: "POST",
                url: baspath1+"admin/ajaxcallback/pages",
                data: "value="+myvalue,
                 dataType: 'text',
                success: function(msg){
                        jQuery(".test_"+myvalue).html(msg);

                }
           });
            jQuery(".test_"+myvalue).show("slow");
            
    }
    else
    {
            //otherwise, hide it
            jQuery(".test_"+myvalue).hide("fast");
          
    }
}       