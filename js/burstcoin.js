var alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function runCalc(e)
{
	//e.preventdefault();
	//e.stoppropagation();

	var account 	= $('#form_account').val();
	var stager 		= $('#form_stager').val();
	var start 		= $('#form_start').val();
	var filecount 	= $('#form_filecount').val();
	var ramsize 	= $('#form_ramsize').val();
	var hddcount 	= $('#form_hddcount').val();
	var drive_leter = parseInt($('#form_letter').val());
	var base_leter 	= drive_leter;

	var hdd_arr 	= [];
	var curent_val 	= false;


	for(var i = 0; i < hddcount; i++)
	{
		if( curent_val === false )
		{
			curent_val = parseInt(start);
		}
		var test = [];
		/*
		var file_arr = [];
		*/
		for(var j = 0; j < filecount; j++)
		{
			var obj = {
				"value" : curent_val,
				"file": j
			};
			test.push(obj);
			curent_val += parseInt(stager);
		}
		hdd_arr[i] = test;
	}

	var str = '';
	for( var x = 0; x < filecount; x++)
	{
		str += str = 'c:\\gpu\\gpuPlotGenerator.exe generate direct ';
		for(var z = 0; z < hddcount; z++)
		{
			var cur_obj = hdd_arr[z][x];
			str += alfa[drive_leter] + ':\\' + account + '_' + cur_obj.value + '_' + stager  + '_' + ramsize + ' ';
			drive_leter += 1;
		}
		str += '\n';
		drive_leter = base_leter;
	}
	$('#result').val(str);
	$('#form_endval').val(curent_val);
	return false;
}