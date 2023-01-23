const state = {
    a: 'apple',
    b: 'banana',
    c: 'city',
    d: 'dom',
    e: 'end',
    f: 'forEach',
    g: 'gold'
};

function createDropdowns(words) {
    let dropdownContainer = document.createElement('div');
    let dropdownA = document.createElement('select');
    let dropdownB = document.createElement('select');

    for (word of Object.keys(words)) {
        const optionA = document.createElement('option')
        const optionB = document.createElement('option')
        optionA.textContent = word
        optionB.textContent = words[word]
        dropdownA.appendChild(optionA)
        dropdownB.appendChild(optionB)
    }

    function handleChange (event) {
        const selectionIndex = event.target.selectedIndex
        dropdownA.selectedIndex = selectionIndex
        dropdownB.selectedIndex = selectionIndex
    }

    dropdownA.onchange = handleChange;
    dropdownB.onchange = handleChange;

    dropdownContainer.appendChild(dropdownA)
    dropdownContainer.appendChild(dropdownB)
    document.body.appendChild(dropdownContainer)
}

createDropdowns(state);