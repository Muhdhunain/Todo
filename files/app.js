var todoInp = document.getElementById('todoInp')
var todoUli = document.getElementById('todoUli')

function addTodo() {
    var tdInp = todoInp.value
    
    //creation of li
    var todoLi = document.createElement('li')
    var txt = document.createTextNode(tdInp)
    todoLi.appendChild(txt)
    
    todoInp.value = "";
    
    //creation of delete button
    var liDel = document.createElement('button')
    var txtDel = document.createTextNode('Delete')
    liDel.setAttribute('onclick', 'del(this)')
    liDel.setAttribute('class', 'btn1')
    liDel.appendChild(txtDel)
    todoLi.appendChild(liDel)
    
    //creation of edit button
    var liEdi = document.createElement('button')
    var txtEdi = document.createTextNode('Edit')
    liEdi.setAttribute('onclick', 'edi(this)')
    liEdi.setAttribute('class', 'btn1')
    liEdi.appendChild(txtEdi)
    todoLi.appendChild(liEdi)


    todoUli.appendChild(todoLi)
}

function del(dele) {
    dele.parentNode.remove()
}

function edi(edit) {
    edit.parentNode.firstChild.nodeValue = prompt('Enter Your New Value');
}
function delTodo() {
    todoUli.innerHTML = "";
}