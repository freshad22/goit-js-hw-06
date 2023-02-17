
const itemEl = document.querySelectorAll(`.item`)
const numberOfCategories = itemEl.length
console.log(`Number of categories:`, numberOfCategories)


const elements = itemEl.forEach((element) => {
    console.log('Categories:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
})