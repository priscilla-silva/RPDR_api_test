fetch("http://www.nokeynoshade.party/api/queens?limit=50")
  .then(res => res.json())
  .then(data => { 
    console.log(data);

    let dragQueens = [];
    dragQueens = data;

    console.log(dragQueens);

    const container = document.getElementById("container");
    const h1 = document.getElementById("title");
    const image = document.querySelector("img")
  
    h1.innerText = dragQueens[20].name;  
    image.setAttribute("src", (dragQueens[20].image_url));
    
  });