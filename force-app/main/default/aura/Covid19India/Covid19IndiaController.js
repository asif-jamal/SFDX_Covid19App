({
    doinit : function(component, event, helper) {
        helper.init(component, event);
    },
    showRow : function(component,event,helper){
        // console.log("it's work ", event.currentTarget.dataset.myid);
        //alert(event.currentTarget.dataset.myid);
        var i =event.currentTarget.dataset.rowIndex;
       // console.log("work");
      //  console.log(event.currentTarget.dataset.rowIndex);
        var stateList= component.get('v.CovidList');
        var districList= stateList[i].disData;
       // console.log(stateList[i].state);
     //   console.log(districList);
        component.set('v.SelectedDisList',districList);
        
    },
    
})