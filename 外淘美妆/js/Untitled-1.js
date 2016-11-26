

window.onload=function()

{
	
	var a=document.getElementById('anniu1').getElementsByTagName('input');
	var b=document.getElementById('posterk').getElementsByTagName("div");
		
 	for(var i=0;i<b.length;i++)
	{
		
		a[i].index=i;
	
		a[i].onmousemove=  	function lunpo()
	  {
		 
			for(var i=0;i<b.length;i++)
			{
			b[i].style.display='none';
			}
			
			b[this.index].style.display='block';
			
		}
	  
	}
	var w=document.getElementsByTagName("img");
	setInterval(zidong,1000);
	function zidong ()
	{
		for(var i=0;i<b.length;i++)
			{
			
			
		document.write("w[i]");}
	}
	
var c=document.getElementById("xiala1").getElementsByTagName("li");
 var d=document.getElementById("xialakuai").getElementsByTagName("div");
 for(var i=0;i<c.length;i++)
 	{
 		c[i].index=i;
 	 c[i].onmouseover=function()
 	 {
 	 	for(var i=0;i<c.length;i++)
			{
			d[i].style.display='none';
			}
			d[this.index].style.display='block';
			
 		}
 	d[i].onmouseout=function()
 	{
 		for(var i=0;i<c.length;i++)
			{
			d[i].style.display='none';
			}
 	}
   }
 	
 }

