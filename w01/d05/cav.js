<html>
<body>
<canvas id="the_canvas" width="400" height="400"></canvas>
<script>
var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "red";
ctx.fillRect (10, 10, 55, 50);
ctx.fillStyle = "blue";
ctx.fillRect (30, 30, 55, 50);
</script>
</body>
</html>
