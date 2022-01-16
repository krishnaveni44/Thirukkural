//ISRO//  
async function foo(){
    try{
        var name=document.getElementById("t1").value;
        console.log(name);
    
 
    let thiru=await fetch(`https://api-thirukkural.vercel.app/api?num=${name}`);
    console.log(thiru);
    let result= await thiru.json();
    console.log(result);
          
      var kural1 = result.line1;
      console.log(kural1);
      var kural2 = result.line2;
      console.log(kural2);
      
      //  console.log(`Confirmed:${result[i].Confirmed} Active:${result[i].Active}`);
        
      var div1= document.createElement('div');
      div1.innerHTML = "Thirukkral";
      
      
      var div2= document.createElement('div');
        div2.innerHTML = `${result.number}`;
        
      var div3= document.createElement('div');
        div3.innerHTML = `${result.line1}`;
                    
        var div4= document.createElement('div');
        div4.innerHTML = `${result.line2}`;
        
        var br1= document.createElement('br');
                
        var div5= document.createElement('div');
        div5.innerHTML = 'Kural Meaning';
        
        var div6= document.createElement('div');
        div6.innerHTML = `${result.tam_exp}`;

        var div7= document.createElement('div');
        div7.innerHTML = `${result.sect_tam}`;

        var div8= document.createElement('div');
        div8.innerHTML = `${result.chapgrp_tam}`;

        var div9= document.createElement('div');
        div9.innerHTML = `${result.chap_tam}`;

        var div10= document.createElement('div');
        div10.innerHTML = `${result.sect_eng}`;

        var div11= document.createElement('div');
        div11.innerHTML = `${result.chapgrp_eng}`;

        var div12= document.createElement('div');
        div12.innerHTML = `${result.chap_eng}`;

        var div13= document.createElement('div');
        div13.innerHTML = `${result.eng}`;

        var div14= document.createElement('div');
        div14.innerHTML = `${result.eng_exp}`;
     //  var mbd = document.getElementById("mainbdy");
		
		var mbd = document.createElement('div');
		var mbd2 = document.createAttribute('id');
		mbd.setAttributeNode(mbd2);
		mbd.setAttribute("id","mainbdy");
         document.body.append(mbd);
         mbd.append(div1,div2,div3,div4,br1,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14);
       
    }
    catch(error){
console.log(error);
    } 
}
