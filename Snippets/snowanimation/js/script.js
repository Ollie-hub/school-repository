const colors = ["black"]; // farve på boldene
const numBalls = 2; //nummer af bolde
const balls = []; // Opretter balls variabel

for (let = 0; i < numBalls; i++) {
    let ball = document.createElement("div");

    ball.classList.add("ball")
    ball.style.background = colors[Math.floor(Math.random() * colors.length)]
    ball.style.left = `${Math.floor(Math.random() *100)}vw`;
    ball.style.top = `0`; 
    ball.style.width = `${Math.floor((Math.random() * 8)+ 1)}em`;
    ball.style.height = ball.style.width;

    balls.push(ball)
    document.getElementById('bg-balls').append(ball);
}
balls.forEach((el, i){
   
   
    let anim = el.animate(
    [],

    ); 
});
