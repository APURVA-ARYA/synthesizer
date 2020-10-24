
var synth=new Tone.PolySynth().toDestination();

var notes =['C','D','E','F','G','A','B'];

var sound="";

for(var octave=0;octave<2;octave++){
for(var i=0;i<notes.length;i++){
    var hasSharp=true;
 var key=notes[i];
 if(key=='E'|| key=='B')
 hasSharp=false;
    sound+=`<div class='whitenote' onmousedown='keyDown(this,false)'onmouseup='keyUp(this,false)' onmouseleave='keyUp(this,false)'
    data-key='${key +(octave+4)}'>`;
 if(hasSharp){
    sound+=`<div class='blacknote' onmousedown='keyDown(this,true)'onmouseup='keyUp(this,true)' onmouseleave='keyUp(this,true)'
    data-key='${key + '#'+(octave+4)}'></div>`;
 }
    sound+='</div>';
}
}
document.getElementById('container').innerHTML=sound;

var keyUp=(e,isSharp)=>{
    e.style.background= isSharp?'black':'white';   
}

var keyDown=(e,isSharp)=>{
    var note=e.dataset.key;
    synth.triggerAttackRelease(note,"16n");
    // alert(note);
    e.style.background= isSharp?'#777':'#ccc';
    e.stopPropagation();
   
}