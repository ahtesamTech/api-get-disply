const postContainer = document.getElementById("post-container");
// let show = document.getElementById("show");
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(function(a){
        
        console.log(a)
        for (let i of a) {
            // let b = a[i];
            console.log(i);

            const h2 = document.createElement("div");
            h2.innerHTML = `
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">
      ${i.title}
      <div class="badge badge-secondary">${i.userId}</div>
    </h2>
    <p>${i.body}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">ID..${i.id}</div> 
    </div>
  </div>
</div>
            `;
        postContainer.appendChild(h2);
         
           
        }

       
    });