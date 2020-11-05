function isTouching(a,b) {
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      && a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
    return true;
  }
  else {
   return false;
  }
  }
  function bounceoff(c,d) {
  if (c.y - d.y < d.height/2 + c.height/2
    && d.y - c.y < d.height/2 + c.height/2){
    c.velocityY = c.velocityY * (-1);
    d.velocityY = d.velocityY * (-1);
  }
  }