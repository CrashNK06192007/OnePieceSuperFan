function showAnimalPirates() {
  const elementsToHide = [
    "v1",
    "v3",
    "v3",
    "v6",
    "v5",
    "h",
    "l",
    "p",
    "t",
    "e",
    "i",
    "m",
    "q",
    "g",
    "j",
    "o",
    "s",
    "u",
    "w",
    "v",
    "y",
    "v11",
    "e1",
    "f1",
    "v7",
    "v10",
    "i1",
    "g1",
    "z",
    "a1",
    "m1",
    "n1",
    "o1"
  ];
  const elementsToShow = ["f", "k", "n", "r", "v4"];

  elementsToHide.forEach((id) => {
    document.getElementById(id).classList.add("none");
  });

  elementsToShow.forEach((id) => {
    document.getElementById(id).classList.remove("none");
  });
}
function kaidoLaugh() {
  v7.classList.remove("none");
  s3.play();
  y.classList.remove("none");
  e1.classList.remove("none");
  f1.classList.remove("none");
  m.classList.add("none");
  u.classList.add("none");
  v.classList.add("none");
  w.classList.add("none");
  v6.classList.add("none");
  i.classList.add("none");
  e.classList.add("none");
  q.classList.add("none");
  h.classList.add("none");
  l.classList.add("none");
  p.classList.add("none");
  t.classList.add("none");
  g.classList.add("none");
  j.classList.add("none");
  o.classList.add("none");
  s.classList.add("none");
  k.classList.add("none");
  n.classList.add("none");
  r.classList.add("none");
  v1.classList.add("none");
  v3.classList.add("none");
  v4.classList.add("none");
  v5.classList.add("none");
  v11.classList.add("none");
  v10.classList.add("none");
}
function showDragon() {
  v9.classList.remove("none");
  v10.classList.add("none");

  v7.classList.add("none");
}
function goDrunk() {
  v10.classList.remove("none");
  v7.classList.add("none");
}
