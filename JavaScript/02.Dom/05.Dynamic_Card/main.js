const products = [
    {
        title: "Wireless Earbuds",
        img: "https://soundpeats.pk/cdn/shop/files/WhatsApp_Image_2025-09-29_at_2.06.51_PM.jpg?v=1759136898",
        price: 39.99,
    },
    {
        title: "Smartphone",
        img: "https://sparx.pk/cdn/shop/files/Edge-20-Majestic-Golden.jpg?v=1757068946&width=2208",
        price: 499.99,
    },
    {
        title: "Laptop",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        price: 899.99,
    },
    {
        title: "DSLR Camera",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiroZIWPuiFs-cM8Dq5dy-_Rdoc4EfE-qyNg&s",
        price: 699.99,
    },
];
let main = document.querySelector(`main`);
let cards = ``;
products.forEach((val) => {
    cards += `  <div>
            <img src="${val.img}">
            <h2>${val.title}
                <span>Price:${val.price}$<span></h2>
                <button id ="btn">Add To Cart</button>
        </div>`;
});
main.innerHTML = cards;
export {};
