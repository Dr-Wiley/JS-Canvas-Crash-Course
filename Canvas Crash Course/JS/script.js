const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// fillRect()
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

// clearRect()
ctx.clearRect(25, 25, 140, 90);

// fillText()
ctx.fillText('Hello World', 400, 50);