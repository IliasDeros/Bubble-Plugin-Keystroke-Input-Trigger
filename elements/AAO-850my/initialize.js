function(instance, context) {


instance.data.loaded = false
    instance.data.divName = "id"+Math.round(Math.random()*1000000) + 1
    
instance.data.onKeyDown = function (e) {
    instance.publishState("typing",true);
    if(instance.data.readyToStart == true){
        instance.triggerEvent("input_started");
        if (instance.data.allowRepeats == false) {
            instance.data.readyToStart = false;        
        }
    }
}    

    
instance.data.onPaste = function (e) {

        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        clearTimeout(instance.data.timeoutTrigger);

        // Make a new timeout set to go off in x ms
        instance.data.timeoutTrigger = setTimeout(function () {
        instance.publishState("output_text",instance.data.textInput.value);
        instance.triggerEvent("input_changed");

        }, instance.data.waitTrigger);
}
    
instance.data.onKeyUp = function (e) {


        clearTimeout(instance.data.timeoutTrigger);
        clearTimeout(instance.data.timeoutStarting);

        instance.data.timeoutTrigger = setTimeout(function () {
        instance.publishState("output_text",instance.data.textInput.value);
        instance.triggerEvent("input_changed");

        }, instance.data.waitTrigger);

        clearTimeout(instance.data.timeoutTyping);

        instance.data.timeoutTyping = setTimeout(function () {
           instance.publishState("typing",false);
        }, instance.data.waitTyping);

        instance.data.timeoutStarting = setTimeout(function () {
            instance.data.readyToStart = true;
        }, instance.data.waitStarting);

}
}