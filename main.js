function compute() {

    // Get framerate, start time, and end time from corresponding elements
    // Double check they all have a value
    let frameRate = 60;
    let startTime = document.getElementById('startobj').value;
    let endTime = document.getElementById('endobj').value;
    if (typeof (startTime) === 'undefined' || endTime === 'undefined' || frameRate === 'undefined') {
        return
    }
    
    //calculate time in seconds and frames
    let time = endTime - startTime;
    let seconds = Math.floor(time);
    let frames = Math.round((time - seconds) * 60);

    // Show the time and mod message in the DOM
    let finalTime = seconds + ':' + String(frames).padStart(2, '0');
    document.getElementById('time').value = finalTime;
}

const parseForTime = (event) => {
    // Get current frame from input field (either start time or end time)
    let frameFromInputText = (JSON.parse(event.target.value)).lct;
    if (typeof frameFromInputText !== 'undefined') {
        document.getElementById(event.target.id).value = frameFromInputText;
    }
}
