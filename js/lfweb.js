$(function(){
  //导航
  $("#menu li").hover(function(){
		var index=$("#menu li").index(this)
		$("#menu li").eq(index).find("ul").stop(true,true).slideDown(300)
		},function(){
		var index=$("#menu li").index(this)
		$("#menu li").eq(index).find("ul").stop(true,true).slideUp(300)	
	})
	for (t=0;t<parseInt($("#menu li ul").length);t++)
	{
	$("#menu li ul").eq(t).find("li").eq($("#menu li ul").eq(t).find("li").length-1).css("border-bottom","0px")
	}	
  //左栏目
  $(".listbtn").click(function(){
	  var index=$(".listbtn").index(this);
	  if( $(".listbtn").eq(index).parent().find("div").css("display")=="block"  )
	  {
		 $(".listbtn").eq(index).parent().find("div").slideUp(500); 
	  }
	  else
	  {
	  $(".listbtn").removeClass("xz");
	  $(".listbtn").eq(index).addClass("xz");
	  $(".listbtn").parent().find("div").slideUp(500);
	  $(".listbtn").eq(index).parent().find("div").slideDown(500);
	  } 
	  //$(".listnr").parent().find("div").css("display","none")
	  //$(".listnr").eq(index).parent().find("div").css("display","block")
  })
  
  
  $(".btn").click(function(){
	  var index=$(".btn").index(this);
	  $(".nr").css("display","none")
	   $(".nr").eq(index).css("display","block")
	  
	  })
})
