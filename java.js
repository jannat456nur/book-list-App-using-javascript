/*
1.dom selection
2.evenlistener add
3.basic validation
4.creating element
5.append
*/


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


btn.addEventListener('click', function (e) {
    // console.log('hello');
    e.preventDefault();
    console.log('hello');
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('required!')
    }
    else {
        const newRow = document.createElement('tr');
        // console.log(newRow);
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        // console.log(newTitle);
        newRow.appendChild(newTitle);



        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        // console.log(newTitle);
        newRow.appendChild(newAuthor);




        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        // console.log(newTitle);
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }

})