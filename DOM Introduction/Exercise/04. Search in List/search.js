function search() {
   const search = document.getElementById("searchText").value;
   const towns = Array.from(document.querySelectorAll("#towns li"));
   let counter = 0;

   towns.forEach(town => {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         counter++;
         return;
      }

      town.style.fontWeight = "";
      town.style.textDecoration = "";
   })

   document.getElementById("result").textContent = `${counter} matches found`

}
