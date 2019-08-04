function(instance, properties, context) {

var elementId = properties.element_id;
// Get the input box
var textInput = document.getElementById(elementId);

// Init a timeout variable to be used below
var timeout = null;
var wait = 0;
if (properties.timeout !== undefined) {
    wait = properties.timeout;
}
    
// Listen for keystroke events
textInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        instance.publishState("output_text",textInput.value);
        console.log('input value:' + textInput.value);
        instance.triggerEvent("input_changed");

    }, wait);
}

textInput.onpaste = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        instance.publishState("output_text",textInput.value);
        console.log('input value:' + textInput.value);
        instance.triggerEvent("input_changed");

    }, wait);
}


}