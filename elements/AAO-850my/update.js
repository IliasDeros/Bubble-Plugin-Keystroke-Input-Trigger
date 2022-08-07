function(instance, properties, context) {


console.log('instance.data.init_complete',instance.data.init_complete)
if (instance.data.loaded == false){
    instance.data.loaded = true;
    window.onload = setTimeout(init, 1);
}
else if (instance.data.init_complete == true) {
    update();
}

function init(){
    instance.data.elementId = properties.element_id;
	// Get the input box
	instance.data.textInput = document.getElementById(instance.data.elementId);

    // Init a timeout variable to be used below
    instance.data.waitTrigger = properties.timeout_trigger || 0;
    instance.data.waitTyping = properties.timeout_typing || 0;
    instance.data.readyToStart = true;    
    instance.data.timeoutStarting = null;
    instance.data.allowRepeats = false;
    instance.data.waitStarting = properties.timeout_starting || 0;

    if ( instance.data.waitStarting <= 0) {
        instance.data.allowRepeats = true;
    }    
    // Listen for keystroke events (currently typing)

    instance.data.textInput.onkeydown = e => instance.data.onKeyDown(e);
    


    // Listen for keystroke events (trigger event on typing)
    instance.data.textInput.onkeyup = e => instance.data.onKeyUp(e);
    
    
    instance.data.textInput.onpaste = e => instance.data.onPaste(e); 
    
    
    instance.data.init_complete = true;
    }
function update(){
    instance.data.waitTrigger = properties.timeout_trigger || 0;
    instance.data.waitTyping = properties.timeout_typing || 0;
    instance.data.waitStarting = properties.timeout_starting || 0;
}



}
