$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    
    // TODO 2 - Create Platforms
    createPlatform(500, 0, 10, 290);
    createPlatform(0, 150, 400, 10);
    createPlatform(100, 250, 400, 10);
    createPlatform(500, 400, 10, 400);
    createPlatform(0, 500, 250, 10);
    createPlatform(300, 610, 20, 10);
    createPlatform(500, 400, 150, 10);
    createPlatform(650, 275, 10, 370);
    createPlatform(625, 635, 30, 10);
    createPlatform(500, 570, 30, 10);
    createPlatform(625, 500, 30, 10);
    createPlatform(800, 0, 10, 170);
    createPlatform(800, 275, 10, 700);
    createPlatform(780, 635, 30, 10);
    createPlatform(650, 570, 30, 10);
    createPlatform(780, 500, 30, 10);
    createPlatform(650, 450, 30, 10);
    createPlatform(780, 390, 30, 10);
    createPlatform(1000, 200, 100, 10);
    createPlatform(1275, 100, 100, 10);
    createPlatform(900, 275, 800, 10);
    createPlatform(900, 275, 10, 380);
    createPlatform(900, 645, 435, 10);
    createPlatform(1045, 550, 5, 10);
    createPlatform(950, 450, 5, 10);
    createPlatform(1050, 390, 5, 10);
    createPlatform(1130, 390, 5, 10);
    createPlatform(1210, 390, 5, 10);
    createPlatform(1290, 390, 5, 10);
    createPlatform(1370, 390, 5, 10);

    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 50);
    createCollectable("diamond", 200, 190, 0, 0);
    createCollectable("grace", 1350, 350, 0, 0);
    createCollectable("max", 610, 430, 0, 0);

    // TODO 4 - Create Cannons
    createCannon("top", 565, 800);
    createCannon("right", 580, 1000)
    createCannon("top", 785, 1000)
    createCannon("right", 300, 2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
