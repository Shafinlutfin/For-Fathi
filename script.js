function openCover() {
  document.getElementById("cover").classList.add("open");
  setTimeout(initStarsGame, 500);
}

function lightCandle() {
  const flame = document.getElementById("flame");
  const text = document.getElementById("wishText");
  flame.style.display = "block";
  text.innerHTML = "Make a wish… I’m right here 🌙";
}

function revealNote() {
  const note = document.getElementById("note");

  note.innerText = `Happyyy happy birthday my dear ketyoleeeeee😁.
Endh egnee ovdn ippolum nk arilaaaa egnoo egnoo ngll inte lyfl keri kudiii... Njn idhoo ethroo vattam parnjikn nnalum paryaa karanm ippolum edk edk aloikum imme njano nglee.. endhaaa cherpathll okke white padikumboo nglee luziii cherth avumboo aplee njn nglee kanindlooo inte pathuneeee ann okke nk nglee velyaa karyaaa endhoo oru top person eni nk ngll ipolum even nml ithre okke close avnente munne vere nk agne enne aaaa top aaale idhaa ippo intee ketyol aki njn.....

Amaikakanod parayanm "Big fan of your work"nn😌✋🏻..
Ethroo ethrooo thenks too inte amaikakaa and inte amaimaaaa.... Orr okke karanm ink oru top top top personee inte lyfl kitiii eni idh polee oraale ovdn kittulaaa aaake oru piece olluu adh anel njn edth....

Ippo ngll vicharikum ngll ithrek top okke anoo nn, naa parayatte onm vendaaa fathii ngll onn schlnn nglee oro makkal nokne onn shredichaa manasilavum... Nk ariyaaa ork lle oru feel nglee kanumboo okke karanm njn adh koree experience cheytheee annn adh parnjaa manasilavulaaa adh experience enne cheyanm sheyy ngllk ayn aa bagyam ilaalo😂😂....

Koree alkark nnit nglee asuyaa ann fathiii appo adhond orr okke nglee igane oron paryaa nglee ett compete cheyan okke nokn, nnnit ndoo orr jeyknn😂😂 karanm endhaa fathi is built different...

Ivdee etteum velyaa bagyam nk annnn... Endhaa arilaa fathii aa first day enne nk endhoo oru special sanm nglee edthkn kittii first day parnjaa nml igane close avnente munne ennee annee nk endhooi ngll special enii ann edtha thirumanm ann ee thathaa noknm inne kond kazhine pole okke noknm nnn and edk okke njn ayil fail ayknn but I'll never stop trying my best...

Sooo my dear ketyolll 17 vayas ayiii velyaa kutiii ayikneeee.....
Eni egt lle kalam okke inte fathii kore kore new things padikattee better self avtee, mistakes okke rectify cheyaaa, and it's time go find a crazy dream and fulfill it...
Anddd me as your ketyon, friend, aniyan, mon every versionlum njn nglee kudee nd whatever happens
Endheke crazy things cheythalum cheyan povanelum njn indavum kudeee....

Don't forget to give a kiss to your ketyonnn`;

  note.style.opacity = 1;
}



/* === Hide & Seek Stars Game === */
function initStarsGame() {
  const gameArea = document.getElementById("game-area");
  const foundText = document.getElementById("foundText");
  const starCount = 30;

  gameArea.innerHTML = '';
  foundText.style.opacity = 0;

  // Add normal stars
  for(let i = 0; i < starCount; i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    gameArea.appendChild(star);
  }

  // Add special star (you)
  const specialStar = document.createElement("div");
  specialStar.classList.add("star","special");
  specialStar.style.left = Math.random() * 100 + "%";
  specialStar.style.top = Math.random() * 100 + "%";
  gameArea.appendChild(specialStar);

  // Click events
  gameArea.addEventListener("click", (e) => {
    if(e.target.classList.contains("special")){
      // Heartfelt message
      foundText.innerText = "🌟 You found me, Fathi! 🌙💌\nEven when we are apart, I’m always with you in every star. In everywhere you are. In you. Happy Birthday, my calm and my joy.";
      foundText.style.opacity = 1;

      // Animate the star
      e.target.style.transform = "scale(1.6)";
      e.target.style.transition = "all 0.6s";

      // Confetti effect
      for(let i=0; i<25; i++){
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const x = (Math.random() - 0.5) * 200 + "px";
        const y = (Math.random() - 0.5) * 200 + "px";

        confetti.style.setProperty('--x', x);
        confetti.style.setProperty('--y', y);

        const rect = e.target.getBoundingClientRect();
        const parentRect = gameArea.getBoundingClientRect();
        confetti.style.left = (rect.left - parentRect.left + rect.width/2) + "px";
        confetti.style.top = (rect.top - parentRect.top + rect.height/2) + "px";

        gameArea.appendChild(confetti);
        setTimeout(()=>{ confetti.remove(); }, 1000);
      }

    } else if(e.target.classList.contains("star")){
      // Wrong star feedback
      e.target.style.opacity = 1;
      setTimeout(()=>{ e.target.style.opacity = 0.8 }, 200);
    }
  });
  
}

function revealSecondNote() {
  const note = document.getElementById("secondNote");

  note.innerText = `Ponnaa ngll orikalum vhicarierth ngll worth ellaa nn okkee onm illa ponnaa ngll onn noki shll ethree ethree makkalk nglee karyaa nn noki.. pottee nglee habee idhaa ippotjee nglee habinee vidi munne indenilo oru Lutfi aa lutfik nglee ethree ethre karyeni... Inte fathinte polee oru kutii ndaa? Ithre okke hard surroundings avdn irin padiknnn kutyele nokn immane help akn clean akn idh okke cheyn lle? Aynte kudee oru load padikn...  

Eppolum onm ngllk cheyn ilelum ngll cheyndaa? Adh enne ethroo velyaa karyaa ngllk ngleth ayaa oru load preshnm madi veyyayi adh okke kazhini ngle mood povaa adh idh nnit schlnte adh idh pinee vithlee idh okke indayitt ngll idh okke cheyanda? Adh okkee veree oraal cheyoo?  

Wallahii nk kayulaa appo onn noki ngll ethree ethre top ann nn... Inte thatah onm cheythitt illa oll okke sherik oru Pani ileni ngloo agne anoo onm elallo athrek top ann ngll...  

Nnitm nglee imma Ippa okke chelpo oron parayum orr parnjottee idh okke kanine oraal nd llo.... Ork ariyanitta fathii orr manasilakanitta enipo fadhi fezza faiza okke velth avum appo ork sherik manasilavum ngll ethre ethree top ann nn...  

Oru day fathiii orr realise akum appo ork manasilavum igane oru kuttinee ork eni kittulaaa ork nn ellaa arkum ethre lucky ann orr nnn..  
Idh fathiii noki vechoo ink orappaa ann orr okke manasilakum  

Eni endheke ayikotte ngll endhekaa vechaa parnjotte but nk nglee venm endheke ayalum nk nglee venm.. ithree aloichaa mathii oraal nk kaath niknd nglee kudee oru lyf mottam spend akan kaath niknd..  

ink ariyaa inte ponn ethre ethre top ann  
Even inte ponn oru looser ayii vechoo avulaa nk orappa  
Nnalum ivdee njn nd nglllee kude nk venm ngleee nk ariyaa aaa mothelnte value endhann..  

ellelum top value ileth onm arkum pettn manasilavula but manasilakyaa arum vidulaaa agne onn ngll and idh inte ann nn parnjandi arelum choich vennaa, arelum endhelum cheythaa oru pirandhen verum choikan nn parnjekendii`;

  note.style.opacity = 1;
}


const moon = document.getElementById("moon");
const calmText = document.getElementById("calmText");

moon.addEventListener("click", () => {
  calmText.style.opacity = 1;

  moon.style.boxShadow = "0 0 40px rgba(255,255,255,0.45)";
  setTimeout(() => {
    moon.style.boxShadow = "0 0 25px rgba(255,255,255,0.25)";
  }, 800);
});
