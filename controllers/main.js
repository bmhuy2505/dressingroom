const products = {
    shirts: [
        {
            id: 1,
            name: "Áo 1",
            img: "../assets/images/clothes/topcloth1.png",
        },
        {
            id: 2,
            name: "Áo 2",
            img: "../assets/images/clothes/topcloth2.png",
        },
        {
            id: 3,
            name: "Áo 3",
            img: "../assets/images/clothes/topcloth3.png",
        },
        {
            id: 4,
            name: "Áo 4",
            img: "../assets/images/clothes/topcloth4.png",
        },
        {
            id: 5,
            name: "Áo 5",
            img: "../assets/images/clothes/topcloth5.png",
        },
        {
            id: 6,
            name: "Áo 6",
            img: "../assets/images/clothes/topcloth6.png",
        },
    ],
    pants: [
        {
            id: 1,
            name: "Váy 1",
            img: "../assets/images/clothes/botcloth1.png",
        },
        {
            id: 2,
            name: "Váy 2",
            img: "../assets/images/clothes/botcloth2.png",
        },
        {
            id: 3,
            name: "Váy 3",
            img: "../assets/images/clothes/botcloth3.png",
        },
        {
            id: 4,
            name: "Váy 4",
            img: "../assets/images/clothes/botcloth4.png",
        },
        {
            id: 5,
            name: "Váy 5",
            img: "../assets/images/clothes/botcloth5.png",
        },
    ],
    shoes: [
        {
            id: 1,
            name: "Giày 1",
            img: "../assets/images/shoes/shoes1.png",
        },
        {
            id: 2,
            name: "Giày 2",
            img: "../assets/images/shoes/shoes2.png",
        },
        {
            id: 3,
            name: "Giày 3",
            img: "../assets/images/shoes/shoes3.png",
        },
        {
            id: 4,
            name: "Giày 4",
            img: "../assets/images/shoes/shoes4.png",
        },
        {
            id: 5,
            name: "Giày 5",
            img: "../assets/images/shoes/shoes5.png",
        },
    ],
    bags: [
        {
            id: 1,
            name: "Túi 1",
            img: "../assets/images/handbags/handbag1.png",
        },
        {
            id: 2,
            name: "Túi 2",
            img: "../assets/images/handbags/handbag2.png",
        },
        {
            id: 3,
            name: "Túi 3",
            img: "../assets/images/handbags/handbag3.png",
        },
    ],
    necklaces: [
        {
            id: 1,
            name: "Dây 1",
            img: "../assets/images/necklaces/necklace1.png",
        },
        {
            id: 2,
            name: "Dây 2",
            img: "../assets/images/necklaces/necklace2.png",
        },
        {
            id: 3,
            name: "Dây 3",
            img: "../assets/images/necklaces/necklace3.png",
        },
    ],
    hairstyles: [
        {
            id: 1,
            name: "Kiểu 1",
            img: "../assets/images/hairstyle/hairstyle1.png",
        },
        {
            id: 2,
            name: "Kiểu 2",
            img: "../assets/images/hairstyle/hairstyle2.png",
        },
        {
            id: 3,
            name: "Kiểu 3",
            img: "../assets/images/hairstyle/hairstyle3.png",
        },
    ],
    backgrounds: [
        {
            id: 1,
            name: "Nền 1",
            img: "../assets/images/background/background1.jpg",
        },
        {
            id: 2,
            name: "Nền 2",
            img: "../assets/images/background/background2.jpg",
        },
        {
            id: 3,
            name: "Nền 3",
            img: "../assets/images/background/background3.jpg",
        },
        {
            id: 4,
            name: "Nền 4",
            img: "../assets/images/background/background4.jpg",
        },
        {
            id: 5,
            name: "Nền 5",
            img: "../assets/images/background/background5.jpg",
        },
        {
            id: 6,
            name: "Nền 6",
            img: "../assets/images/background/background6.jpg",
        },
        {
            id: 7,
            name: "Nền 7",
            img: "../assets/images/background/background7.jpg",
        },
    ],
};

const initialize = () => {
    for (const category in products) {
        const list = document.getElementById(`${category}-list`);
        products[category].forEach((product) => {
            const col = document.createElement("div");
            col.className = "col-6 col-md-4 text-center mb-3";
            col.innerHTML = `
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <button class="btn btn-primary try-on-btn" data-category="${category}" data-img="${product.img}">Mặc thử</button>
                    </div>
                </div>
            `;
            list.appendChild(col);
        });
    }

    // Gắn sự kiện cho nút "Mặc thử"
    document.querySelectorAll(".try-on-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const category = this.dataset.category;
            const img = this.dataset.img;

            const targetDiv =
                category === "shirts"
                    ? ".bikinitop"
                    : category === "pants"
                    ? ".bikinibottom"
                    : category === "shoes"
                    ? ".feet"
                    : category === "bags"
                    ? ".handbag"
                    : category === "necklaces"
                    ? ".necklace"
                    : category === "hairstyles"
                    ? ".hairstyle"
                    : ".background";

            const element = document.querySelector(targetDiv);
            element.innerHTML = `<img src="${img}" alt="${category}" style="width: 100%;">`;
        });
    });
};

document.addEventListener("DOMContentLoaded", initialize);
