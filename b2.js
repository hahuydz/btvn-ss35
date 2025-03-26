const btnAddBookMarks = document.querySelector('.add-bookmark');
const bodyElement = document.querySelector('body');
const listBookMarks = JSON.parse(localStorage.getItem('listBookMarks')) || [];
const listBookMarkElement = document.querySelector('#listBookMark');

renderListBookMark();

function renderListBookMark(){
    const listBookMarkHtmls = listBookMarks.map((item, index) => {
        return `<div class="item">
                <div class="delete-item" onclick = "deleteBookMark(${index})">x</div>
                <a class="title-item" target="_blank" href="${item.url}">${item.name}</a>
            </div>`
    })

    listBookMarkElement.innerHTML = listBookMarkHtmls.join('');

    localStorage.setItem('listBookMarks', JSON.stringify(listBookMarks));
}

function deleteBookMark(index){
    listBookMarks.splice(index, 1);
    renderListBookMark();
}

btnAddBookMarks.addEventListener('click', function (event) {
    if (document.querySelector('.modal-add')) return;

    const modal = document.createElement('div');
    modal.classList.add('modal-add');
    modal.innerHTML = `
        <div class="modal-header">
            <div class="title-modal">Add Bookmark</div>
            <div class="exit-modal" id="exit-modal">x</div>
        </div>
        <form id="form-add-bookmark">
            <label for="website-name" class="nameLabel">Website Name</label>
            <br><input type="text" id="website-name" class="inputCss">
            <br><label for="website-url" class="nameLabel">Website Url</label>
            <br><input type="text" id="website-url" class="inputCss">
            <button type="submit" id="btn-save">Save</button>
        </form>
    `;

    bodyElement.appendChild(modal);
    bodyElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

    const websiteNameElement = document.querySelector('#website-name');
    const websiteUrlElement = document.querySelector('#website-url');

    document.querySelector('#exit-modal').addEventListener('click', exitModal);
    document.querySelector('#btn-save').addEventListener('click', function(event){
        event.preventDefault();
        saveModal(websiteNameElement.value, websiteUrlElement.value);
    });
});

function exitModal() {
    const modal = document.querySelector('.modal-add');
    if (modal) modal.remove();
    bodyElement.style.backgroundColor = 'white';
}


function saveModal(websiteName, websiteUrl){
    if(websiteName === '' || websiteUrl === ''){
        alert('Vui lòng nhập thông tin')
        return;
    }

    const newBookMark = {
        name: websiteName,
        url: websiteUrl,
    }

    listBookMarks.push(newBookMark);

    renderListBookMark()

    exitModal()
}