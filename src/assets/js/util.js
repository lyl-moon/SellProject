const util = {
	getCookie(name){
	    if (document.cookie.length>0){
	      var c_start=document.cookie.indexOf(name + "=")
	      if (c_start!=-1){ 
	        c_start=c_start + name.length+1 
	        var c_end=document.cookie.indexOf(";",c_start)
	        if (c_end==-1) c_end=document.cookie.length
	            return unescape(document.cookie.substring(c_start,c_end))
	        } 
	    }
	    return ""
	},
	addCookie(name,value,expireHours){  
	    var cookieString=name+"="+value+"; path=/";  
	    //判断是否设置过期时间  
	    if(expireHours>0){  
	        var date=new Date();  
	        date.setTime(date.getTime+expireHours*3600*1000);  
	        cookieString=cookieString+"; expire="+date.toGMTString();  
	    }  
	    document.cookie=cookieString;  
	},
	delCookie(name){
	    var exp = new Date();  
	    exp.setTime(exp.getTime() - 1);  
	    var cval=util.getCookie(name);  
	    if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();  
	},
	//返回 ：  2017-11-02 11:11
	getDateTime(timestamp){
	    var now = new Date();
	    now.setTime(timestamp);
	    var year = now.getFullYear();
	    var month=now.getMonth()+1;     
	    var date=now.getDate();     
	    var hour=now.getHours();     
	    var minute=now.getMinutes();
	    var second = now.getSeconds();
	    
	    return year + "-" + util.toDou(month)+"-"+util.toDou(date)+" "+" "+util.toDou(hour)+":"+util.toDou(minute)+":"+util.toDou(second);
	},
	//补零
	toDou(n){
	    return n >= 10 ? '' + n : '0' + n
	}
}

export default util