function search() {

   const searchText = document.getElementById('searchText').value;
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const result = document.getElementById('result');
   let matches = 0

   for (let t of towns) {
   if(t.textContent.includes(searchText)){
      t.style.textDecoration = 'underline';
      t.style.fontWeight = 'bold';
      matches++;
   }else{
      t.style.textDecoration = 'none';
      t.style.fontWeight = 'normal';
   }
}
result.textContent = `${matches} matches found`;
}
