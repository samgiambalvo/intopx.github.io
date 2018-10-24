$(document).ready(function()
{
    function inToPx()
    {
      // get inches and multiply by dpi
      var inW = parseFloat($("#inW").val());
      var pxW = (inW) * 75;
      pxW = pxW.toFixed(2);
      $("#pxW").val(pxW);
      
      // disable other forms of input
      var sanitized = $(this).val().replace(/[^0-9]/g, '');
      $(this).val(sanitized);
    }
    
    function pxToIn()
    {
      // get px and divide by dpi
      var pxW = parseFloat($("#pxW").val());
      var inW = (pxW) / 75;
      inW = inW.toFixed(2);
      $("#inW").val(inW);

      // disable other forms of input
      var sanitized = $(this).val().replace(/[^0-9]/g, '');
      $(this).val(sanitized);
    }
    
    //update values
    $(document).on("change, keyup", "#inW", inToPx);
    $(document).on("change, keyup", "#pxW", pxToIn);
});