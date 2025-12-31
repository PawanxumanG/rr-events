// NAVIGATION
function go(p){
  const map={
    payments:"payments.html",
    promo:"promo.html",
    album:"event_album.html",
    events:"events.html",
    chairman:"chairman.html"
  };
  location.href=map[p];
}

// STUDENT HELPER
function toggleAI(){
  const c=document.getElementById("aiContent");
  const t=document.getElementById("aiToggle");
  c.style.display=c.style.display==="block"?"none":"block";
  t.innerText=c.style.display==="block"?"Tap to close":"Tap to open";
}

function aiReply(t){
  document.getElementById("aiAnswer").innerText=
    t==="update"
    ?"No new updates right now. Stay tuned."
    :"Navigate using buttons to explore features.";
}

// UPDATES
function toggleUpdates(){
  const c=document.getElementById("updateContent");
  const t=document.getElementById("updateToggle");
  c.style.display=c.style.display==="block"?"none":"block";
  t.innerText=c.style.display==="block"?"Tap to close":"Tap to open";
}

// ANNOUNCEMENT (SHOW ONCE)
fetch("announcement.json?t="+Date.now())
.then(r=>r.json())
.then(d=>{
  if(!d.show)return;
  if(localStorage.getItem("annSeen")===d.updated)return;

  document.getElementById("annTitle").innerText=d.title;
  document.getElementById("annMsg").innerHTML=d.message.replace(/\n/g,"<br>");
  document.getElementById("announcementPopup").style.display="flex";
  localStorage.setItem("annSeen",d.updated);
});

function closeAnnouncement(){
  document.getElementById("announcementPopup").style.display="none";
}