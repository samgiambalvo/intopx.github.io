$(document).ready(function()
{
    function inToPx()
    {
      // get inches and multiply by dpi
      var inW = parseFloat($("#inW").val());
      var pxW = (inW) * 75;
      $("#pxW").val(pxW);
    }
    
    function pxToIn()
    {
      // get px and divide by dpi
      var pxW = parseFloat($("#pxW").val());
      var inW = (pxW) / 75;
      $("#inW").val(inW);
    }
    
    //update values
    $(document).on("change, keyup", "#inW", inToPx);
    $(document).on("change, keyup", "#pxW", pxToIn);
});