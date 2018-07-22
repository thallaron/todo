$(document).ready(function () {
	var socket = io();

	$('#additem').on('click', function () {
		$('#addform').modal('show')
	})
	$(function(){
    	$('#startdatetime').datetimepicker({
  			onShow:function( ct ){
   				this.setOptions({
    				maxDate:$('#stopdatetime').val()?$('#stopdatetime').val():false
  				})
  			}
 		});
 		$('#stopdatetime').datetimepicker({
  			onShow:function( ct ){
   				this.setOptions({
    				minDate:$('#startdatetime').val()?$('#startdatetime').val():false
   				})
  			}
 		});
	});
})
