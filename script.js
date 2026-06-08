// ── BIOTECH DNA ANIMATION ──
(function(){
  const c=document.getElementById('particles');
  const ctx=c.getContext('2d');
  let W,H,t=0;
  function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);

  // Floating molecules
  const mols=[];
  for(let i=0;i<18;i++) mols.push({
    x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
    vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4,
    r:Math.random()*14+8, type:Math.floor(Math.random()*3)
  });

  function drawMolecule(x,y,r,type,alpha){
    ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y);
    ctx.strokeStyle='#10B981';ctx.lineWidth=1;
    if(type===0){
      // Hexagon (benzene ring)
      ctx.beginPath();
      for(let i=0;i<6;i++){const a=i*Math.PI/3;ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);}
      ctx.closePath();ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,r*.5,0,Math.PI*2);ctx.stroke();
    } else if(type===1){
      // Atom
      ctx.beginPath();ctx.arc(0,0,r*.25,0,Math.PI*2);ctx.fillStyle='rgba(16,185,129,.6)';ctx.fill();
      for(let i=0;i<3;i++){
        ctx.save();ctx.rotate(i*Math.PI/3);
        ctx.beginPath();ctx.ellipse(0,0,r,r*.35,0,0,Math.PI*2);ctx.stroke();
        ctx.restore();
      }
    } else {
      // DNA base pair
      ctx.beginPath();ctx.arc(0,0,r*.2,0,Math.PI*2);ctx.fillStyle='rgba(52,211,153,.5)';ctx.fill();
      ctx.beginPath();ctx.moveTo(-r,0);ctx.lineTo(r,0);ctx.stroke();
      ctx.beginPath();ctx.arc(-r,0,r*.25,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.arc(r,0,r*.25,0,Math.PI*2);ctx.stroke();
    }
    ctx.restore();
  }

  // DNA helix strands
  function drawDNA(xOff,yOff,len,amp,spd,alpha){
    ctx.save();ctx.globalAlpha=alpha;
    const step=18;
    for(let y=0;y<len;y+=step){
      const phase=y*0.09+t*spd;
      const x1=xOff+Math.sin(phase)*amp;
      const x2=xOff+Math.sin(phase+Math.PI)*amp;
      const yy=yOff+y;
      // strand dots
      ctx.beginPath();ctx.arc(x1,yy,2.5,0,Math.PI*2);ctx.fillStyle='#10B981';ctx.fill();
      ctx.beginPath();ctx.arc(x2,yy,2.5,0,Math.PI*2);ctx.fillStyle='#34D399';ctx.fill();
      // rung every 3 steps
      if(Math.round(y/step)%3===0){
        ctx.beginPath();ctx.moveTo(x1,yy);ctx.lineTo(x2,yy);
        ctx.strokeStyle='rgba(16,185,129,.35)';ctx.lineWidth=1;ctx.stroke();
      }
    }
    // strand lines
    ctx.beginPath();
    for(let y=0;y<len;y+=3){
      const phase=y*0.09+t*spd;
      const x1=xOff+Math.sin(phase)*amp;
      if(y===0)ctx.moveTo(x1,yOff);else ctx.lineTo(x1,yOff+y);
    }
    ctx.strokeStyle='rgba(16,185,129,.25)';ctx.lineWidth=1.2;ctx.stroke();
    ctx.beginPath();
    for(let y=0;y<len;y+=3){
      const phase=y*0.09+t*spd+Math.PI;
      const x2=xOff+Math.sin(phase)*amp;
      if(y===0)ctx.moveTo(x2,yOff);else ctx.lineTo(x2,yOff+y);
    }
    ctx.strokeStyle='rgba(52,211,153,.2)';ctx.lineWidth=1.2;ctx.stroke();
    ctx.restore();
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    t+=0.012;

    // Draw DNA strands at edges
    drawDNA(60,0,H,28,.6,.07);
    drawDNA(W-60,0,H,28,.6,.07);
    if(W>900){drawDNA(W*.25,0,H,20,.5,.04);drawDNA(W*.75,0,H,20,.5,.04);}

    // Draw floating molecules
    mols.forEach(m=>{
      m.x+=m.vx;m.y+=m.vy;
      if(m.x<-50)m.x=W+50;if(m.x>W+50)m.x=-50;
      if(m.y<-50)m.y=H+50;if(m.y>H+50)m.y=-50;
      drawMolecule(m.x,m.y,m.r,m.type,.06);
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// ── TYPED TEXT ──
const phrases=["Algal Biotechnology Researcher","Clinical Research Enthusiast","Environmental Biotechnologist","Aspiring Biotechnologist","Science-Driven Innovator"];
let pi=0,ci=0,del=false,wait=0;
function typeLoop(){
  const el=document.getElementById('typed');
  const cur=phrases[pi];
  if(!del){el.textContent=cur.slice(0,++ci);if(ci===cur.length){del=true;setTimeout(typeLoop,1800);return;}}
  else{if(wait-->0){setTimeout(typeLoop,40);return;}el.textContent=cur.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(typeLoop,del?55:85);
}
typeLoop();

// ── NAV SMOOTH SCROLL & BURGER ──
document.getElementById('burger').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const t=document.querySelector(this.getAttribute('href'));
    if(t){e.preventDefault();window.scrollTo({top:t.getBoundingClientRect().top+scrollY-60,behavior:'smooth'});document.getElementById('navLinks').classList.remove('open');}
  });
});

// ── REVEAL ──
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── ACTIVE NAV ──
const sections=['home','about','skills','experience','projects','certifications','achievements','contact'];
window.addEventListener('scroll',()=>{
  let cur='home';
  sections.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=70)cur=id;});
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur);
  });
});