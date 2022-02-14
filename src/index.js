/*cette class va permettre de créer, de la manière la plus compliqué, un tableau qui servira à expliquer certainnes regles.

*/
class fraz {
  constructor(regle){
    this.regle = regle;
  }
}
/*le tableau est vide mais on va le remplir avec push, en passant par de nouveaux variable new.  */
const gleur = []
let r1 = new fraz("tu rentre des lettres et si ça pass bah ca pass sinon tu canne");
let r2 = new fraz("saisie pas 2 fois la meme lettres");
let r3 = new fraz("si tu continus après avoir été pendu et bien ... je te laisse faire ta propre interpretation philo (mwa jdit rien n'est perdu d'avance");
gleur.push(r1.regle)
gleur.push(r2.regle)
gleur.push(r3.regle)
//on va prendre une regle o hasard
const uesh = gleur[Math.floor(Math.random() *gleur.length)];
alert(uesh)
//listes de mots à deviner, en majuscule pour rendre la saisie de lettre plus permisive, on verra ça plus bas avec les upercase
const mots = ["ANTICONSTITUTIONNELLEMENT","LOL","COURIR","BATON","HEURE","PONCTUALITE","MOURIR","CHERCHER","TERRE","MANGER"]
// word va piocher un mot aux hasard dans le tableau
const word =  mots[Math.floor(Math.random() * mots.length)];
//avec le split on decortiquer les letttres des mots
const tabmots = word.split("")
const vide = new Array(word.length)
//les turn c'est les nombres d'essaies 
let turn = 10 ;
const lettersAlreadyUsed = [] ;
function devine(vide) {
  //le tableaux display on va mettre des ketru
  const display = []
  for (let index = 0; index < vide.length; index++) {
    if (vide[index]) {
      display.push (vide[index])
    } else{
      //grace à ça on va pouvoir mettre autans de "_" qu'il n'ya de lettre dans le mots
      display.push ('_')
    }
    
  }
    document.getElementById('vide').innerHTML = display.join(" ")
}
//la fonction montre le nombre d'essaies restant et les lettres utilisées 
function render() {
  //c'est à partir des id mis dans certainnes div on va pouvoir ajouter le contenus qu'on veut
  document.getElementById('turn').innerHTML = "Il te reste " + turn + " essais."
  document.getElementById('lettersAlreadyUsed').innerHTML ="T'a utilisé ces lettres : " + lettersAlreadyUsed.join(",")
  devine(vide)
  document.getElementById('seletedletter').value = "";
}
//garce à btn on va pouvoir faire fonctionner la fonction choix() en cliquant sur le bouton
let btn = document.querySelector(".btn")
//bonh là je ne sais pas comment expliquer cette scorcelerie
function getAllIndexes(myword, mesletres) {
  const indexes = []
  for (let index = 0; index < myword.length; index++) {
    const element = myword[index];
    if (element === mesletres) {
      indexes.push(index)
    }
  }
  return indexes
}
function choix(){
  //on recupère les lettres saisi dans le input avec letter
  let letter = document.getElementById('seletedletter').value;
  //trim() sert à ne pas saisir les espaces 
  letter = letter.trim();
  //avec toUpperCase on met les lettres saisie en majuscule pour qu'elles corespondent aux lettres du tableaux mots
  //ça permet d'etre plus permisive sur les lettres saisies
  const mesletres = letter[0].toUpperCase();
  //on met les lettres saisis dans le tableaux des lettres deja usée
  lettersAlreadyUsed.push(mesletres);
  const temp = getAllIndexes(tabmots, mesletres);
  if(temp.length === 0){
    //on fait en sorte que les bonnes letres ne perturbe pas le nb de tours 
    turn-- ;
  } else {
    for (let index = 0; index < temp.length; index++) {
      vide[temp[index]] = tabmots[temp[index]]
      tabmots[temp[index]] = "" ;
    }
  }
  render()
  /* cis dessous il y a plusieur condition semblable permettant d'afficher les images du pendus selon le nombre de tours restants */
  if (turn === 0) {
    alert("t'a perdu");
    
    display_image('jeudupendufb.jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 9) {
    display_image('jeudupendufb(9).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 8) {
    display_image('jeudupendufb(8).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 7) {
    display_image('jeudupendufb(7).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 6) {
    display_image('jeudupendufb(6).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 5) {
    display_image('jeudupendufb(5).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 4) {
    display_image('jeudupendufb(4).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 3) {
    display_image('jeudupendufb(3).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 2) {
    display_image('jeudupendufb(2).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  if (turn === 1) {
    display_image('jeudupendufb(1).jpg', 
    276, 
    310, 
    'JavaScriptImage');
  }
  //lorsque l'ensemble des lettres sont trouvées la partie est gagnée
  if(tabmots.every((el) => el === "")){
    alert('felicitation');
  }
}
onload = function name() {
  render()
}
//rebonjour btn, là tu va servir à quelque chose
btn.addEventListener("click", choix)
/* avec la variable a et la fonction on va pouvoir créer les images du pendus et dans les conditions qui sont plus haut dans la fonction choix */
let a = document.createElement("img");
function display_image(src, width, height, alt) {
  a.src = src;
  a.width = width;
  a.height = height;
  a.alt = alt;
  document.body.appendChild(a);
}