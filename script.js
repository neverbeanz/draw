var canvas = null;
var context = null;
var isDrawing = false;
var lastX = null;
var lastY = null;
var strokeColor = null;
var strokeWidth = null;

window.onload = function() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');

    ApplyCanvasProperties();

    applyButton.addEventListener('click', ApplyCanvasProperties);

    canvas.addEventListener('mousedown', (e)=> {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
    canvas.addEventListener('mousemove', (e)=> {
        if(isDrawing) {
            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(e.offsetX, e.offsetY);
            context.strokeStyle = strokeColorInput.value;
            context.lineWidth = strokeWidthInput.value;
            context.lineCap = 'round';
            context.stroke();

            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    });

    canvas.addEventListener('mouseup', (e)=> { 
        isDrawing = false;
    });
    canvas.addEventListener('mouseleave', (e)=> { 
        isDrawing = false;
    });

    strokeWidth.addEventListener('input', ()=> {
        strokeWidth = st
    });
};


function ApplyCanvasProperties() {
    canvas.width = canvasWidth.value;
    canvas.height = canvasHeight.value;
    context.fillStyle = canvasColor.value;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
