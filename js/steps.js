$(function() {
 
  ong1 = document.getElementById('a1');
  ong2 = document.getElementById('a2');
  ong3 = document.getElementById('a3');
  ong4 = document.getElementById('a4');
  ong5 = document.getElementById('a5');
  ong6 = document.getElementById('a6');
  ong7 = document.getElementById('a7');
  ong8 = document.getElementById('a8');

  var video = document.getElementById('video-tab');
  var focal = document.getElementById('video-focal');
  var src = video.getAttribute('src');

  document.getElementById('video-tab').volume = 0.1;
  document.getElementById('video-focal').volume = 0.3;


  function nonactive(){
    ong1.className = "";
    ong2.className = "";
    ong3.className = "";
    ong4.className = "";
    ong5.className = "";
    ong6.className = "";
    ong7.className = "";
    ong8.className = "";
  }

  function active(moi){
    nonactive(); // nettoyage
    moi.className = "active"; // je deviens active
    video.play();
  }

  ong1.addEventListener("click", function() {
    video.setAttribute('src', './img/portfolio/avril.mp4');
    active(this);
  });

  ong2.addEventListener("click", function() {
    video.setAttribute('src', './img/portfolio/mars.mp4');
    active(this);
  });

  ong3.addEventListener("click", function() {
    video.setAttribute('src', './img/portfolio/novembre.mp4');
    active(this);
  });

  ong4.addEventListener("click", function() {
    video.setAttribute('src', './img/portfolio/octobre.mp4');
    active(this);
  });

  tableauStopItems.each(function() {
    this.addEventListener("click", function(){
      video.pause();
    })
  })

  function activefocal(moi){
    nonactive(); // nettoyage
    moi.className = "activefocal"; // je deviens active
    focal.play();
  }

  ong5.addEventListener("click", function() {
    focal.setAttribute('src', './img/portfolio/final-focal.mp4');
    activefocal(this);
  });

  ong6.addEventListener("click", function() {
    focal.setAttribute('src', './img/portfolio/irre13.mp4');
    activefocal(this);
  });

  ong7.addEventListener("click", function() {
    focal.setAttribute('src', './img/portfolio/irre8.mp4');
    activefocal(this);
  });

  ong8.addEventListener("click", function() {
    focal.setAttribute('src', './img/portfolio/irre-liste.mp4');
    activefocal(this);
  });

  tableauStopItems.each(function() {
    this.addEventListener("click", function(){
      focal.pause();
    })
  })

});