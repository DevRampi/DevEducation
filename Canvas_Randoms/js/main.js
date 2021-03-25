const canvas = document.getElementById('paint'),
  context = canvas.getContext('2d'),
  buttons = document.querySelectorAll('button'),
  colorPicker = document.querySelector('input[type=color]'),
  rangerPicker = document.querySelector('input[type=range]');

let isDrawing = false,
  figure = 'line',
  color = '#000',
  lineWidth = 1,
  corX = 0,
  corY = 0;


// EVENT HANDLERS
window.addEventListener('change', onChange);
canvas.addEventListener("mousedown" , onStartDraw);
canvas.addEventListener("mousemove", onDraw);
canvas.addEventListener("mouseup", onEndDraw);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    onButtonPress(button);
  });
});

// HANDLER FUNCTIONS
function onChange(event) {
  if (!event || !event.target) return void(0);

    const target = event.target;

  switch (target.dataset.pick) {
    case 'color':
      setColor(target.value);
      break;
    
    case 'panWidth':
      setLineWidth(+target.value);
      break;
  }
}

function onButtonPress(button) {
  figure = button.dataset.figure;
  buttons.forEach(function (item) {
    if (item.classList.contains('btn--active')) {
      item.classList.remove('btn--active');
    }
  });
  button.classList.add('btn--active');
}


function onStartDraw(event) {
  const coords = getMouseCoords(event);
  corX = coords.x;
  corY = coords.y;

  context.beginPath();
  isDrawing = true;


}

function onDraw(event) {
  const coords = getMouseCoords(event);

  switch (isDrawing && figure) {
    case 'square':
      drawSquare(coords);
      break;

    case 'ellipse':
      drawEllipse(coords);
      break;
    
    case 'curve':
      drawCurve(coords);
      break;

    case 'line':
      drawLine(coords);
      break;
  }
}

function onEndDraw() {
  context.closePath();
  isDrawing = false;

  if (figure !== 'line') {
    context.stroke();
  }
}

// SETTER FUNCTIONS
function setColor(str) {
  if (!str || str.indexOf('#') < 0) return;

  color = str;
}

function setLineWidth(num) {
  if (!+num || num < 0 || num > 10) return;

  lineWidth = num;
}

// DRAWING FUNCTIONS
function drawLine(coords) {
  context.lineTo(coords.x, coords.y);
  context.stroke();

}

function drawSquare(coords) {
  let x = Math.min(coords.x, corX),
      y = Math.min(coords.y, corY),
      w = Math.abs(coords.x - corX),
      h = Math.abs(coords.y - corY);

  context.beginPath();
  context.lineJoin = "miter";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.rect(x,y,w,h);

}
function drawEllipse(coords) {


}
function drawCurve(coords) {
  let x = Math.min(coords.x, corX),
    y = Math.min(coords.y, corY),
    w = Math.abs(coords.x - corX),
    h = Math.abs(coords.y - corY);

  context.beginPath();
  context.lineJoin = "round";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.rect(x,y,w,h);

}


// HELPERS
function getMouseCoords(e) {
  const canvasCoords = canvas.getBoundingClientRect();

  return {
    x: e.clientX - canvasCoords.x,
    y: e.clientY - canvasCoords.y
  };
}


function debug(x) {
  console.log(x);
}