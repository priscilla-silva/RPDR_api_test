fetch("http://www.nokeynoshade.party/api/queens?limit=50")
  .then(res => res.json())
  .then(data => { 
    console.log(data);

    let dragQueens = [];
    dragQueens = data;

    console.log(dragQueens);

    const container = document.getElementById("container");
    const name = document.querySelector(".name");
    const name2 = document.querySelector(".name2");
    const name3 = document.querySelector(".name3");
    const image1 = document.querySelector("#img1");
    const image2 = document.querySelector("#img2");
    const image3 = document.querySelector("#img3");
    const btn = document.querySelector(".container-btn")
  
    
    

    
    //select 3 random  drag queens
    const shuffled = dragQueens.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    console.log(selected);

    
    //Click button and display drag queens
    btn.addEventListener("click", function shuffled(){
    name.innerText = selected[0].name;  
    image1.setAttribute("src", (selected[0].image_url));
    name2.innerText = selected[1].name;
    image2.setAttribute("src", (selected[1].image_url));
    name3.innerText = selected[2].name;
    image3.setAttribute("src", (selected[2].image_url));
    });

    
    
    
    
    
  });