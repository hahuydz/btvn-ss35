const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://photo2.tinhte.vn/data/attachment-files/2022/07/6043317_tinhte_sony_wh-1000xm5_2.jpg',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://bizweb.dktcdn.net/100/387/641/files/kha-nang-chong-nuoc-ip67-tren-loa-jbl-charge-5.jpg?v=1650688434266',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
const productList = document.getElementById('productList');
const searchBox = document.getElementById('searchBox');
function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productHTML = `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><strong>${product.price.toLocaleString()} VNĐ</strong></p>
                <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
        `;
        productList.innerHTML += productHTML;
    });
}
searchBox.addEventListener('input', function () {
    const searchValue = searchBox.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    displayProducts(filteredProducts);
});
displayProducts(products);