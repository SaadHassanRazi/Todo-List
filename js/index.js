const field = document.getElementById('field')
const button = document.getElementById('button-addon')



const addTask = ()=>{
if(field.value === ''){
    alert('Please Enter a Task')
}else{


    let li = document.createElement('li')
    li.innerHTML =  field.value  
    li.classList.add('py-4')
    li.classList.add('my-5')
    li.classList.add('rounded')
    li.classList.add('h5') 
    li.classList.add('lister')
    list.appendChild(li) 
    let span = document.createElement('span')
    span.innerHTML = 'X' 
    span.classList.add('logo')
    span.style = 'float:right'
    li.appendChild(span)
    
}
field.value = ''
saveData()
}
let logo = document.getElementsByClassName('logo')
list.addEventListener('click',function(props){
    if(props.target.tagName === 'SPAN'){
        props.target.parentElement.remove()
        saveData()
    }else if(props.target.tagName === 'LI'){
        if (props.target.style.textDecoration === 'line-through') {
            props.target.style.textDecoration = 'none';
        
        } else {
            props.target.style.textDecoration = 'line-through';
          
        }
       saveData()
    }
})

const saveData=()=>{
    localStorage.setItem('data',list.innerHTML)
}

const showData = ()=>{
    list.innerHTML=localStorage.getItem('data')
}

showData()