const addList = () => {
    const textFild = document.getElementById('text-fild');
    const text = textFild.value;
    if (!text) {
        return alert('invalid fild')
    }




    textFild.value = ''

    displayList(text)
    saveToLocalStorages(text)
}

const clearAll = () => {
    document.getElementById('list-container').innerHTML = ``
    removeToLocalStorages()

}


const displayList = (text) => {

    const listContainer = document.getElementById('list-container')
    const div = document.createElement('div')
    div.classList = 'flex justify-between gap-4 mb-5 text-2xl font-semibold'
    div.innerHTML = `
        
    <div class='flex gap-3 items-center '>
        <input type="checkbox" class="text-2xl font-semibold">
        <li class='list-none'>${text}</li>
    </div>
    <button onclick="removeList(this)" class='btn btn-error btn-sm 
     justify-end'>Remove</button>
    
    `
    listContainer.appendChild(div)
}

const removeList = (div) => {
    div.parentElement.remove();

}

const getSavedList = () => {
    let list = {}
    const savedList = localStorage.getItem('list');
    if (savedList) {
        list = JSON.parse(savedList)
    }
    return list;
}
const saveToLocalStorages = (text) => {
    const list = getSavedList()
    list[text] = text;
    const listStr = JSON.stringify(list)
    localStorage.setItem('list', listStr)
}
const removeToLocalStorages = (text) => {
    const list = getSavedList()
    list[text] = text;
    const listStr = JSON.stringify(list)
    localStorage.removeItem('list', listStr)
}

const displayListFormlocalStorages = () => {
    const savedList = getSavedList()
    for (const list in savedList) {
        console.log(list);
        displayList(list)
    }
}

displayListFormlocalStorages()