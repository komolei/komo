// JavaScript Document
var a=document.getElementsByTagName('input');
	var b=document.getElementById('banner1').getElementsByTagName("div");
	
	for(var i=0;i<a.length;i++)
	{
		a[i].index=i;
		a[i].onclick=function()
			{
				for(var i=0;i<a.length;i++)
					{ 
						a[i].style.background='#999'
					}
			 	for(var i=0;i<4;i++)
					{
						b[i].style.display='none';
					}
		this.style.background='transparent';
		
		b[this.index].style.display='block';	
			}
	}