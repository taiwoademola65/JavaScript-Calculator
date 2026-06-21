 const numberBtn = (num) =>{
      let userInput = document.getElementById('input');
      userInput.value += num
    }

    const equalsBtn = () =>{
      input.value = eval(input.value);
    }

    const clearBtn = (btns) =>{
      let userInput = document.getElementById('input');
      if (btns === 'clear') {
        userInput.value = ''
      }else if(btns === 'delete'){
        userInput.value = userInput.value.slice(0, -1)
      }
        
    } 