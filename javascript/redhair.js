function showRedhair() {
  const elementsToHide = [
    "v1",
    "v4",
    "v5",
    "v6",
    "h",
    "l",
    "p",
    "t",
    "e",
    "i",
    "m",
    "q",
    "f",
    "k",
    "n",
    "r",
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
    "k1",
    "m1",
    "n1",
    "o1",
    "v8"
  ];
  const elementsToShow = ["g", "j", "o", "s", "v3"];

  elementsToHide.forEach((id) => {
    document.getElementById(id).classList.add("none");
  });

  elementsToShow.forEach((id) => {
    document.getElementById(id).classList.remove("none");
  });
}
