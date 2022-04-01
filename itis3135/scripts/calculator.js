const calculator =document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

keys.addEventListener('click', e=>{
    if(event.target.matches('button')){

        
        const key= event.target
       

        const keyValue = key.textContent
        const displayValue = display.textContent
        const type = key.dataset.type
        const previousKeyType = calculator.dataset.previousKeyType
       
        
        if(type==="number"){
            if(displayValue==='0'){
                
                display.textContent = keyValue 
            }else if(previousKeyType==='operator'){
                display.textContent = keyValue
                

            }
            else{
                display.textContent = displayValue+keyValue 
            }
            
        }
        if(type ==='decimal' ){
            if (!displayValue.includes('.')) {
                display.textContent = displayValue + '.'
              }
              if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
                  display.textContent = '0.'
              }
            
        }

        if(type === 'clear'){
            display.textContent ='0'
        }
        
        
        
        if(type==='operator'){
            const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
            operatorKeys.forEach(el=>{el.dataset.state=''})
            key.dataset.state = 'selected'

            calculator.dataset.firstNumber = displayValue
            calculator.dataset.operation = key.dataset.key

            
        }

        if(type === 'equal'){

            const firstNumber = parseFloat(calculator.dataset.firstNumber)
            const operator = calculator.dataset.operation
            const secondNumber = parseFloat(displayValue)
            console.log(firstNumber, operator, secondNumber)
            let result =''

            if(firstNumber){
                if(operator === 'add') result = firstNumber + secondNumber
            if(operator ==='subtract') result = firstNumber - secondNumber
            if(operator ==='times') result = firstNumber * secondNumber
            if(operator === 'divide') result = firstNumber / secondNumber
            console.log(result)
            display.textContent = result
            }
        }

        if (type === 'clear' && key.textContent !== 'AC'){
           key.textContent = 'AC' 
        } 

        if (type !== 'clear') {
            const clearButton = calculator.querySelector('[data-type=clear]')  
            clearButton.textContent = 'CE'
          }

        if(type === 'clear'&& key.textContent==='AC'){
            calculator.dataset.firstNumber =''
            calculator.dataset.operation = ''
            calculator.dataset.previousKeyType = ''
        }
        
        calculator.dataset.previousKeyType = type
    }
})
