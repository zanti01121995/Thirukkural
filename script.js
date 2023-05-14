async function foo(){
    let d1 = document.getElementById("pin").value;
    let url = `https://api-thirukkural.vercel.app/api?num=${d1}`;
    let d2 =await fetch(url);
    let d3 =await d2.json();
    see(d3);
   }

   function see(d3){
    var div2 = document.createElement("div");
    div2.classList=("row");
    div2.style.margin="20px"

    
           div2 .innerHTML=`
         
           <div class="col">
               <div class="card">
                   <div class="card-header">
                   
                   <h6 id="num"> <b>குறள் எண்</b> : ${d3.number}</h6>
                    <h6 id="chapter"><b>அதிகாரம்</b> : ${d3.chap_tam}</h6>
                    <h6 id="whole"><b>பால்</b> : ${d3.sect_tam}</h6>
                   
                   </div>
                   <div class="card-body">
                   <h3>${d3.line1}</h3>
                   <h3>${d3.line2}</h3>
                   </div>
                 </div>

                 <div class="card">
                 <div class="card-header">
                 
                 <h6 class=""text-center> <b>பொருள்</b></h6>
                  
                 
                 </div>
                 <div class="card-body">
                 <h5>${d3.tam_exp}</h5>
                 
                 </div>
               </div>
           </div>
    
            `
               document.body.append(div2);
   }