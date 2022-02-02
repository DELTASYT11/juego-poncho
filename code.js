var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","e61ec110-58f5-47ef-9704-abacdf27ed86","70392afd-f185-4ff2-a49e-43902a4004d4","b9eb95b8-f238-411f-a1fb-b7345dda4b25","9977f998-c71d-4856-9392-9c628ae65d50","626d5513-75c5-4df5-acc4-7192d548e232"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"LKtfOucWblmRzXzOoyypbijM_7RvHNyd","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"m","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"bb","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"XukuQGnwVV34xaqGNGZhq_O3vwd0qyKX","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e61ec110-58f5-47ef-9704-abacdf27ed86":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ysHVw5mmZbMIqwDVXi7C.B4OuPqNMHVm/category_backgrounds/living_room.png"},"70392afd-f185-4ff2-a49e-43902a4004d4":{"name":"poncho","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"},"b9eb95b8-f238-411f-a1fb-b7345dda4b25":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/XZxz72M6r.iOeeaRofipj0vRgjL182kH/category_household_objects/game_controller.png","frameSize":{"x":94,"y":57},"frameCount":1,"looping":true,"frameDelay":2,"version":"XZxz72M6r.iOeeaRofipj0vRgjL182kH","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":57},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XZxz72M6r.iOeeaRofipj0vRgjL182kH/category_household_objects/game_controller.png"},"9977f998-c71d-4856-9392-9c628ae65d50":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN/category_household_objects/money.png","frameSize":{"x":101,"y":106},"frameCount":1,"looping":true,"frameDelay":2,"version":"ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":106},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN/category_household_objects/money.png"},"626d5513-75c5-4df5-acc4-7192d548e232":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/zDgovsfKXlBCmc.iyiZ1QwthoihYm6dj/category_school_objects/book.png","frameSize":{"x":109,"y":125},"frameCount":1,"looping":true,"frameDelay":2,"version":"zDgovsfKXlBCmc.iyiZ1QwthoihYm6dj","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":125},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zDgovsfKXlBCmc.iyiZ1QwthoihYm6dj/category_school_objects/book.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
b.setAnimation("b");
var poncho = createSprite(200,345,200,345)
poncho.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

poncho.setAnimation("poncho");
poncho.scale=.2;
enemy1.setAnimation("enemy1");
enemy1.scale=.5;
enemy2.setAnimation("enemy2");
enemy2.scale=.5;
enemy3.setAnimation("enemy3");
enemy3.scale=.5;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  poncho.y=poncho.y-3
}

if(keyDown(DOWN_ARROW)){
  poncho.y=poncho.y+3
}

if(keyDown(LEFT_ARROW)){
  poncho.x=poncho.x-3
}

if(keyDown(RIGHT_ARROW)){
  poncho.x=poncho.x+3
}

if(poncho.isTouching(enemy1)|| poncho.isTouching(enemy2)|| poncho.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  poncho.x=200
  poncho.y=350
  death = death+1
}
if(poncho.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
