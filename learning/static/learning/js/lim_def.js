



        
            var StartTime = new Date().getTime() ;	
            
            var clock = setInterval( RecordTime, 5000 ) ;
            
            var ReadSequence = Math.floor( Math.random()*1000000 + 1 ) 
            
            function initializeLiff(myLiffId) {
                liff.init({liffId: myLiffId });
            }
            
            function RecordTime() {
            
                initializeLiff("{{ liffid }}");
                
                var EndTime    =  new Date().getTime() ;	
                var UseTime    = EndTime - StartTime ;
                var min        = Math.floor( UseTime/1000/60 ) ; 
        		var sec        = Math.floor( ( UseTime / 1000 ) % 60 ) ;
    			var FinishTime = min + "分" + sec + "秒" ;
    			var msg = "閱讀重點:極限\n" + "目前閱讀時間:" + FinishTime + "\n閱讀隨機序號:" + ReadSequence ;
    			
    			liff.sendMessages([{ type : "text", text : msg }]) ;
            }        
            
        