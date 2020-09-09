let inp = document.getElementById('inpCalc'); 
let button = document.querySelectorAll('button')
console.log(button)
button.forEach(item=> {
    item.onclick = inpVal;
    function inpVal(){
        if(this.textContent === "C"){
            inp.value = ''
        }
        else if(this.textContent === "CE"){
            console.log(inp.value = inp.value.substring(0, inp.value.length-1));
        }
        else if(this.textContent === "="){
            inp.value = eval(inp.value);
        }
    
        else {
            inp.value += this.textContent;
        }
        // let total = 0
        // console.log(this.textContent)
        // if(this.textContent === "C"){
        //     inp.value = '';
        // }
        // if(this.textContent === "="){
        //     function sum(){
                
        //     }
        //     sum()
        // }
        // if(this.textContent === "+"){
        //     inp.value += "+"
        // }
        // else if(this.textContent === "9" || this.textContent === "8" || this.textContent === "7" ||
        // this.textContent === "6" || this.textContent === "5" || this.textContent === "4" || this.textContent === "3" ||
        // this.textContent === "2" || this.textContent === "1"){
        //     console.log(total += Number(item.textContent));
        //     inp.value += total;
        //     console.log(Number(inp.value))
        //     // inp.value = Number(item.textContent)
        // }
        // else if(this.textContent === "CE"){
        //     inp.value = inp.value.substring(0,inp.value.length-1)
        //     // console.log(inp.value.length-1)
        // }
        // else {
        //     inp.value += item.textContent;
            
            
        // }
        // return total;
    }
    
})  