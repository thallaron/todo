$(document).ready(function () {
	var socket = io();

	$('#additem').on('click', function () {
		$('#name').val('')
		$('#startdatetime').val('')
		$('#stopdatetime').val('')
		$('#details').val('')
		$('#priority1').prop('checked', true)
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
	$('#Submit').on('click', function () {
		var priority = 'low'
		if($('#priority2').prop('checked')) { 
			priority = 'medium'
		} else if($('#priority3').prop('checked')) { 
			priority = 'high'
		}
		var values = {Name: $('#name').val(), Start: $('#startdatetime').val(), Stop: $('#stopdatetime').val(), Details: $('#details').val(), Priority: priority}
		socket.emit('task', {Task: values})
	})
})
