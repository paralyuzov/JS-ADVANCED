function create(words) {

   const contRef = document.getElementById("content");

   for (let word of words) {
      let divRef = document.createElement("div");
      let pRef = document.createElement("p");
      pRef.style.display = "none"
      pRef.textContent = word;

      divRef.addEventListener("click", onClick);

      divRef.appendChild(pRef);
      contRef.appendChild(divRef)

   }

   function onClick(e) {
      let pRef = e.currentTarget.children[0].style.display = "block"

   }
}