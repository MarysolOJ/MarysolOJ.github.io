let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#5F349F;">Soy estudiante de procesos de gestión administrativa y programación....')
  .pauseFor(200)
  .deleteChars(10)
  .start();
