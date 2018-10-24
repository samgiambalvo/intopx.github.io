$(document).ready(function()
{
    function inToPx()
    {
      // get inches and multiply by dpi
      var inW = parseFloat($("#inW").val());
      var pxW = (inW) * 75;
      $("#pxW").val(pxW);
      
      // disable other forms of input
      var sanitized = $(this).val().replace(/[^0-9]/g, '');
      $(this).val(sanitized);
    }
    
    //update values
    $(document).on("change, keyup", "#inW", inToPx);
});