const times = [];
let fps;

time = 0
gameAborted = false
function refreshLoop() {
    time++
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift(); // remove timestamps older than 1 second
    }
    times.push(now);
    fps = times.length; // FPS is the number of timestamps in the last second


    document.getElementById('fps_counter').textContent = fps + ' FPS';
    
    crashGame(fps)
    // console.log(time, fps < 4 && time > 100)

    if (!gameAborted) {
        refreshLoop();
    }
  });
}

refreshLoop();


function crashGame(fps) {
    if (fps < 4 && time > 100) {
        document.getElementById("gameCanvas").remove()
        document.getElementById('fps_counter').textContent = "Game Aborted (so that the browser does not crash)";
        document.getElementById("fps_counter").style.fontSize = "25"
        document.getElementById("fps_counter").style.paddingLeft = "35%"
        document.getElementById("fps_counter").style.paddingTop = "35%"
        gameAborted = true
    }
}
