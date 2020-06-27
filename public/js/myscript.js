window.onload = function () {
  pageTimer();
}

function pageTimer() {
  var T;
  var f01;
  if (localStorage.getItem('TotalTime03') == 'NaN') {
    localStorage.setItem('TotalTime03', String('0'));
    f01 = 0;
  } else f01 = parseInt(localStorage.getItem('TotalTime03'));
  T = setInterval(function () {
    if (localStorage.getItem('TotalTime03') == 'NaN')
      f01 = 0;
    var txt01 = (f01 / 1000 / 60).toFixed(0);
    var txt02 = f01 / 1000;
    txt02 = txt02 % 60;
    txt02 = txt02.toFixed(0);
    if (txt02 < 30)
      document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01) + " minutes and " + String(txt02) + " seconds";
    else document.getElementById("Time01").innerHTML = "Time spent on this web page: " + String(txt01 - 1) + " minutes and " + String(txt02) + " seconds";
    f01 = f01 + 1000;
    localStorage.setItem("TotalTime03", String(f01));
  }, 1000);
}

function birdOver1() {
  birdOverWithParameters(1, 'images/bird17.jpg', "The Halmahera paradise-crow (Lycocorax pyrrhopterus) also known as the silky crow, or simply as the paradise-crow, is a medium-sized crow-like bird-of-paradise. One of the few monogamous birds-of-paradise, this paradise-crow is endemic to lowland forests of North Maluku in Indonesia. The diet consists mainly of fruits and arthropods. A common species throughout its habitat range, the paradise-crow is evaluated as being of least concern on the IUCN Red List of Threatened Species.")
}

function birdOver2() {
  birdOverWithParameters(2, 'images/bird18.jpg', "Manucodes are birds-of-paradise in the genus Manucodia, that are medium-sized with black-glossed purple and green plumages. The members of this genus are distributed in the lowland forests of New Guinea and nearby islands. They are monogamous and sexually monomorphic, in contrast to most birds-of-paradise. The genus was introduced by the Dutch naturalist Pieter Boddaert in 1783 for a single species, the crinkle-collared manucode (Manucodia chalybatus.")
}

function birdOver3() {
  birdOverWithParameters(3, 'images/bird19.jpg', "The Phonygammus is Genus of bird in the family Paradisaeidae. It is named after its powerful and loud trumpeting calls. The scientific name commemorates the French Navy physician Pierre François Keraudren (1769-1858). The Phonygammus is widely distributed throughout lowland rainforests of New Guinea, northern Cape York Peninsula, the Aru Islands, and the D'Entrecasteaux Islands, though certain subspecies are geographically distinct.")
}

function birdOver4() {
  birdOverWithParameters(4, 'images/bird20.jpg', "The genus Paradigalla consists of two species of birds-of-paradise. Both are medium-sized black birds with blue and yellow facial wattles. The name of the genus is derived from two words, the Paradisaea and Gallus, the junglefowl of pheasant family. The two paradigallas and the four junglefowls exhibits facial wattles.")
}

function birdOver5() {
  birdOverWithParameters(5, 'images/bird21.jpg', "The astrapias are a genus, Astrapia, of birds-of-paradise. The genus contains five species. They are endemic to New Guinea. The males have highly iridescent plumage and remarkably long tails. Females are duller and have shorter tails. Barnes's astrapia is a hybrid produced by the interbreeding of Princess Stephanie's astrapia and the ribbon-tailed astrapia.")
}

function birdOver6() {
  birdOverWithParameters(6, 'images/bird22.jpg', "The parotias are a genus, Parotia, of passerine birds in the bird-of-paradise family Paradisaeidae. They are endemic to New Guinea. They are also known as six-plumed birds of paradise, due to their six head quills. These birds were featured prominently in the BBC series Planet Earth. The males of the genus are characterized by an ornamental plumage consisting of six wired head plumes with black oval-shaped tips, a neck collar of black, decomposed feathers which can be spread into a skirt-like shape, and bright or iridescent head and throat markings.")
}

function birdOver7() {
  birdOverWithParameters(7, 'images/bird23.jpg', "The King of Saxony bird-of-paradise (the only species that belongs to the genus Pteridophora alberti) is a bird in the bird-of-paradise family (Paradisaeidae). It is the only member in the monotypic genus Pteridophora. It is endemic to montane forest in New Guinea. The adult King of Saxony bird-of-paradise is approximately 22 cm long. The male is black and yellow with a dark brown iris, brownish-grey legs, a black bill with a bright aqua-green gape, and two remarkably long (up to 50 cm) scalloped, enamel-blue brow-plumes that can be independently erected at the bird's will. The unadorned female is greyish brown with barred underparts.")
}

function birdOver8() {
  birdOverWithParameters(8, 'images/bird24.jpg', "Lophorina is a genus of birds in the family Paradisaeidae. After genetic analysis, officials have agreed to include the riflebirds (formerly assigned to the genus Ptiloris) in the present genus. All members sport a jet-black to black body found only in males, while their female counterparts sport brown upperparts (shade depends on the species) with barred underparts; they have a relatively long to shortish, slender, crow-like bill, and various ornaments.")
}

function birdOver9() {
  birdOverWithParameters(9, 'images/bird25.jpg', "Epimachus is a genus of bird-of-paradise from highland forests in New Guinea. These two species are surely one of the more bizarre members of the family. The common name 'sicklebill' refers to their long, decurved, sickle-shaped bill. What makes the males of these birds eccentric are two aspects: firstly, their hyperbolically long, saber-like, black tails that reach around 18 inches alone; the other features are two marvelous pectoral fans on each side of the breast that the birds bring up over their heads during their displays.")
}

function birdOver10() {
  birdOverWithParameters(10, 'images/bird26.jpg', "Drepanornis is a genus of bird-of-paradise found in forests of New Guinea. They have long decurved sickle-like bills and an overall brown plumage.The genus is sometimes considered a subgenus of Epimachus, but the two members of Drepanornis have a far shorter tail and their sexual dimorphism is less extreme.")
}

function birdOver11() {
  birdOverWithParameters(11, 'images/bird27.jpg', "The king bird-of-paradise (Cicinnurus regius) is a passerine bird of the Paradisaeidae (Bird-of-paradise) family. It is the sole member of the genus Cicinnurus. The king bird-of-paradise is distributed throughout lowland forests of New Guinea and nearby islands. The diet consists mainly of fruits and arthropods. An extraordinary courtship display is performed by the male with a series of tail swinging, fluffing of the white abdominal feathers that makes the bird look like a cottonball, and acrobatic movements of their elongated tail wires.")
}

function birdOver12() {
  birdOverWithParameters(12, 'images/bird28.jpg', 'The standardwing bird-of-paradise (Semioptera wallacii) also known as Wallace\'s standardwing or as the standardwing is a species of bird-of-paradise. It is the only member in monotypic genus Semioptera.he standardwing bird-of-paradise is medium-sized, approximately 28 cm long, and olive brown. The male has a gloss violet-and-lilac coloured crown and emerald-green breast shield. Its most striking features are two pairs of long white plumes coming out from the bend of the wing that can be raised or lowered at the bird\'s will. The unadorned olive-brown female is smaller but has a longer tail than the male.')
}

function birdOver13() {
  birdOverWithParameters(13, 'images/bird29.jpg', 'The twelve-wired bird-of-paradise (Seleucidis melanoleucus) is a medium-sized, approximately 33 cm (13 in) long, velvet black and yellow bird-of-paradise. The male has a red iris, long black bill and rich yellow plumes along his flanks. From the rear of these plumes emerge twelve blackish, wire-like filaments, which bend back near their bases to sweep forward over the bird\'s hindquarters. The female is a brown bird with black-barred buffy underparts. Their feet are strong, large-clawed and pink in color.')
}

function birdOver14() {
  birdOverWithParameters(14, 'images/bird30.jpg', 'The genus Paradisaea consists of seven species of birds-of-paradise (family Paradisaeidae). It also contains the subgenus, Paradisornis, assigned only to the blue bird-of-paradise. The genus is found on the island of New Guinea as well as the nearby islands groups of the Aru Islands, D\'Entrecasteaux Islands and Raja Ampat Islands. The species inhabit a range of forest types from sea level to mid-montane forests. Several species have highly restricted distributions, and all species have disjunct distributions.')
}

function birdOver15() {
  birdOverWithParameters(15, 'images/bird31.jpg', 'The blue bird-of-paradise (Paradisornis rudolphi) is a beautiful, relatively large species of bird-of-paradise. It is the only species in the genus Paradisornis, but was previously included in the genus Paradisaea. It is most definitely one of the most fabulous and extravagant of all birds of the world, with its glorified and fancy flank feathers present only in males and also their two long wires also only found in the males.')
}

function birdOverWithParameters(nr, imagePath, text) {
  elem1 = "I" + nr;
  elem2 = "G" + nr;

  var del = document.getElementById("gif2");
  if (del != null)
    del.remove();

  document.getElementById(elem1).src = imagePath;
  document.getElementById(elem1).setAttribute("alt", "The image could not load.");
  document.getElementById(elem1).setAttribute("width", "auto");
  document.getElementById(elem1).setAttribute("height", "250");
  document.getElementById(elem2).innerHTML = text;

}

function birdOffWithParameters(nr) {
  elem1 = "I" + nr;
  elem2 = "G" + nr;

  var cre = document.createElement("img");
  cre.id = "gif2";
  cre.src = "images/ezgif.com-gif-to-mp4.gif";
  cre.setAttribute("width", "800px");
  cre.setAttribute("height", "auto");
  document.body.appendChild(cre);

  document.getElementById(elem1).setAttribute("width", "0");
  document.getElementById(elem1).setAttribute("height", "0");
  document.getElementById(elem2).innerHTML = "";
}
