var oDiv = document.getElementById('div1');
	//var r = 87.5; // 半径
	//var x = 600; // 园的中心点 x 坐标
	//var y = 600; // 园的中心点 y 坐标
	
	var num =180; // 起始角度
	
	setInterval(function(){
		
		num++;
		switch (true){
      case num<270:
        var r=400;
        var x=400;
        var y=400;
      break;
      case num<450:
        var r=175;
        var x=400;
        var y=225;
      break;
      case num<630:
        var r=87.5;
        var x=400;
        var y=137.5;
      break;
    }
    //Math.sin( num*Math.PI/180 ) = a/r;
		//Math.cos( num*Math.PI/180 ) = b/r;
		
		// 算出圆周上每一个 A 的 x,y 轴
		var a = Math.sin( num*Math.PI/180 ) * r;
		var b = Math.cos( num*Math.PI/180 ) * r;
		
		// 算出 圆周上每一个 A 的坐标
		oDiv.style.left = x + b + 'px';
		oDiv.style.top = y + a + 'px';
		
		// 生成 div 就可以看到运动的痕迹
		var oBox = document.createElement('div');
		oBox.className = 'box';
		document.body.appendChild( oBox );
		
		oBox.style.left = oDiv.offsetLeft + 'px';
		oBox.style.top = oDiv.offsetTop + 'px';
		
	},30);