 const products = [ 
    { id:1,
        title: "Hades II",
        price: 28.99,
        category: "Action",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: true,
         image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1765831644',
        feedback: "Провёл новогодние дни с Hades II и остался в полном восторге.",
        description: "Погрузитесь в захватывающий мир греческой мифологии и сразитесь с богами и монстрами в Hades II.",
         age_limit: "12+",
         OS: "Windows",
         region: "Global", 


     },
     { id:2,
        title: "ARC Raiders",
        price: 39.99,
        category: "Action",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: true,
        isTop: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1808500/cc5b6555ec4adc40d01cbddd7dc13d8669673150/header_alt_assets_1.jpg?t=1769454248',
        feedback: " Очень понравилась игра, графика на высоте, геймплей захватывающий.",
        description: "ARC Raiders — многопользовательская игра жанра extraction adventure, действие которой разворачивается в суровом будущем на Земле, атакованной загадочными механическими захватчиками.",
         age_limit: "16+",
         OS: "Windows",
         region: "Global", 
         

       },
       { id:3,
        title: "CloverPit",
        price: 9.99,
        category: "Horror",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3314790/8ba81356b84aa937573fa29fdd708dbd96b01537/header.jpg?t=1769727011',
        feedback: "Игра достойная, но не особо запоминающаяся.",
        description: "Rouge-lite кошмар про слот-машину! Поставьте свою жизнь на кон в этом бесконечном симуляторе долговой ямы!",
         age_limit: "16+",
         OS: "Windows",
         region: "Global", 
         

     },
     { id:4,
        title: "Valheim",
        price: 9.99,
        category: "Survival",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: true,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/de0bdcf6c008c508a79d8e75eb91fc67f4bebd5d/header.jpg?t=1765967243',
        feedback: "Отличная игра для любителей выживания и исследования открытого мира.",
        description: "Игра в жанре выживание, в которой вам предстоит исследовать огромный фэнтезийный мир, пропитанный скандинавской мифологией и культурой викингов.",
         age_limit: "16+",
         OS: "Windows 10",
         region: "Global", 
         

     },
      { id:5,
        title: "Don't Stop, Girlypop!",
        price: 14.99,
        category: "Shooter",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2610650/c51ea16bebef6f0f679ac2482559542f1db738a0/header.jpg?t=1769704644',
        feedback: "Яркий и динамичный шутер, который не даст вам заскучать ни на минуту!",
        description: "Сей Любовь! Don’t Stop, Girlypop! — это арена-шутер в эстетике Y2K, в котором нельзя останавливаться. ❤ Просто ❤ не ❤ прекращай ❤ двигаться! ❤",
         age_limit: "12+",
         OS: "Windows 10",
         region: "Global", 
         

     },
      { id:6,
        title: "HELLMART",
        price: 13.31,
        category: "Horror, Simulation",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3762550/8d5561f21bb46dd76d7a8b863c901d6a05e19204/header.jpg?t=1769843182',
        feedback: "Очень необычная игра с интересным сюжетом и атмосферой.",
        description: "Симулятор супермаркета + хоррор. Ты - работник круглосуточного магазина. Днём обслуживай посетителей и выполняй план продаж. Ночью берегись странных клиентов. Попробуй выжить 7 дней в северной глуши!",
         age_limit: "16+",
         OS: "Windows",
         region: "Global", 
         

     },
       { id:7,
        title: "Escape from Ever After",
        price: 19.99,
        category: "Action, Adventure",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: true,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1996390/a45810d07c46a35f35b6e7ca520471473635e1bc/header.jpg?t=1769777815',
        feedback: " Игра понравилась своей атмосферой и интересным сюжетом.",
        description: "Боритесь с капитализмом в этой сатирической приключенческой ролевой игре!",
         age_limit: "16+",
         OS: "Windows",
         region: "Global", 
         

     },
     { id:8,
        title: "Hello Neighbor VR",
        price: 28.99,
        category: "Action, Horror",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/521890/header.jpg?t=1763986397',
        feedback: " Отличная игра для любителей хорроров и VR-технологий.",
        description: "Приключенческий VR-хоррор от знаменитой серии Hello Neighbor. Исследуйте дом вашего странного соседа и раскрывайте его тайны, избегая при этом его ловушек и преследований.",
         age_limit: "12+",
         OS: "Windows",
         region: "Global", 
     },
       { id:9,
        title: "GORN 2",
        price: 19.99,
        category: "Action, VR",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: true,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3391450/58bcf8484ea5f9ee10d2ff330ae75d34e37ccd0a/header_alt_assets_3.jpg?t=1766006789',
        feedback: " Захватывающая игра с отличной физикой и юмором.",
        description: "Доберитесь до вершины славы на гладиаторской арене в GORN 2, продолжении нашумевшей VR-игры от студии Free Lives.",
         age_limit: "18+",
         OS: "Windows",
         region: "Global", 
         

     },
      { id:10,
        title: "Arizona Sunshine",
        price: 11.99,
        category: "Action, VR, Survival",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2897700/header.jpg?t=1762963972',
        feedback: " Отличная игра для любителей зомби-апокалипсиса. Графика и геймплей на высоте.",
        description: "Зомби-апокалипсис получил новый облик: Arizona Sunshine поднимает оригинальную игру на новый уровень — с убойной ВР-графикой, боями и оружием нового поколения.",
         age_limit: "18+",
         OS: "Windows",
         region: "Global" 
         

     },
       { id:11,
        title: "Exotica 2",
        price: 12.74,
        category: "Simulation, Adventure",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: true,
        isTop: false,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2824380/dc498efbdf8855bde7519bb290da478d7a0995a4/header.jpg?t=1769714267',
        feedback: "Подходящая игра для любителей симуляторов и животных, но не более того.",
        description: "Exotica 2: Pet Shop Simulator — это уютная управленческая игра, в которой вы проектируете и развиваете собственный экзотический зоомагазин.",
         age_limit: "0+",
         OS: "Windows",
         region: "Global", 
         

     },
       { id:12,
        title: "Solargene",
        price: 29.99,
        category: "Simulation, Survival",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1638300/67ff245e32733c555d7a51fe63b97b20023f3117/header.jpg?t=1768895290',
        feedback: " Захватывающий симулятор космической корпорации с множеством возможностей для творчества и управления.",
        description: "Возглавь космическую корпорацию в научно-фантастическом симуляторе Solargene! Управляй персоналом, проектируй и развивай колонии и орбитальные станции по всей солнечной системе!",
         age_limit: "12+",
         OS: "Windows",
         region: "Global", 
         

     },
    
     { id:13,
        title: "Half Sword",
        price: 19.19,
        category: "Action, Adventure",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: false,
        inStock: true,
        discount: false,
        isTop: false,
        isFeatured: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2397300/54d7f7be1eb9e289186fab6132dc668c3644f826/header.jpg?t=1769793786',
        feedback: "Короткий обзор Half Sword",
        description: "Half Sword — симулятор сражений с реалистичной физикой, исторически достоверными доспехами и оружием XV века. Мы не боимся показать всю кровавую и беспощадную жестокость средневековых сражений.",
         age_limit: "18+",
         OS: "Windows",
         region: "Global",
     },
     { id:14,
        title: "Incredible Dracula: Ocean's Call",
        price: 5.69,
        category: "Adventure",
        pc_platform: true,
        ps_platform: false,
        xbox_platform: false,
        inStock: true,
        discount: false,
        isTop: false,
        isFeatured: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1236450/header_russian.jpg?t=1705474565',
        feedback: "Короткий обзор Ocean's Call",
        description: " Все королевство в панике – во льдах из-за глобального потепления пробудилось таинственное существо, которое может повелевать всеми морскими созданиями. И только Дракула может разобраться в том, что же произошло и отправить Морского бога домой.",
         age_limit: "0+",
         image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1236450/header_russian.jpg?t=1705474565",
         OS: "Windows",
         region: "Global",
     },
     { id:15,
        title: "OutDrive",
        price: 2.99,
        category: "Casual, Racing",
        pc_platform: true,
        ps_platform: true,
        xbox_platform: true,
        inStock: true,
        discount: false,
        isTop: false,
        isFeatured: true,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/441870/header.jpg?t=1667329514',
        feedback: "Короткий обзор OutDrive",
        description: "Не отпускайте педаль газа, неся свой автомобиль навстречу пылающему закату, иначе ваша девушка умрет! Окунитесь в атмосферу 80ых, мчась по неоновым дорогам навстречу закату, который как будто сошел с обложек VHS фильмов. Концептуальный эксперимент в жанре музыкального раннера, не игра.",
         age_limit: "16+",
        
         OS: "Windows",
         region: "Global",
     },
    
     { id:16, title: "Dead by Daylight", price: 7.99, category: "Horror", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: true, isTop: false, feedback: "", description: "Застряв во владениях неумолимого зла, где даже смерть не дарует избавление, четверо решительных выживших сталкиваются с кровожадным убийцей в жестоком состязании на выдержку и смекалку. ", age_limit: "18+", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/381210/f2361181f3f6774a746406db01e98cad8b38e3fd/header_alt_assets_4.jpg?t=1769630637", OS: "Windows", region: "Global", },
     { id:17, title: "Fish Hunters: Most Lethal Fishing Simulator", price: 7.71, category: "Casual", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: false, isTop: false, feedback: "", description: "Лови рыбу в одиночку или с друзьями. Вытаскивай улов и расправляйся с ним с помощью безумного оружия! Испытай разные наживки и удочки, исследуй уникальные локации и собери всю коллекцию рыб в своём атласе. ", age_limit: "12+", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3468330/c9331017359d256a7223adcb05ec8ef46daf49e6/header.jpg?t=1769791631", OS: "", region: "",   },
     { id:18, title: "Hotel Architect", price: 9.99, category: "Simulation", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: false, isTop: false, feedback: "", description: "Управление широким спектром отелей и обслуживание различных категорий клиентов по всему миру. Спроектируйте свой дизайн, оптимизируйте логистику и измените внешний вид по своему вкусу.", age_limit: "6+", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1602000/3baacbac4fca51ee1d71906e30eedcbfafca0dfe/header.jpg?t=1769795588", OS: "", region: "",  },
     { id:19, title: "Cairn", price: 27.83, category: "Adventure", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount:false, isTop:false , feedback:"", description:"Покорите неприступную вершину в симуляторе альпиниста. Планируйте свой маршрут, помните о технике безопасности и экономьте ресурсы, чтобы выжить в суровых горных условиях. Узнайте, чем готова пожертвовать Аава, чтобы завершить своё восхождение.", age_limit:"0+", image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1588550/header.jpg?t=1769725647", OS:"", region:"", description:"Покорите неприступную вершину в симуляторе альпиниста. Планируйте свой маршрут, помните о технике безопасности и экономьте ресурсы, чтобы выжить в суровых горных условиях. Узнайте, чем готова пожертвовать Аава, чтобы завершить своё восхождение.", },
     { id :20 , title:"7 Days to Die" , price : 24.19 , category:"Survival" , pc_platform:true , ps_platform:false , xbox_platform:false , inStock:true , discount:false , isTop:false , feedback:"", age_limit:"18+" , image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/251570/header.jpg?t=1766024790", OS:"", region:"", description:"7 Days to Die — это единственная в своем роде игра с открытым миром, сочетающая в себе элементы шутера от первого лица, хоррора на выживание, защиты замка и ролевой игры." },
     { id :21 , title:"Hatoful Boyfriend" , price : 7.99 , category:"Visual Novel" , pc_platform:true , ps_platform:false , xbox_platform:false , inStock:true , discount:false , isTop:false , feedback:"", description:"Поздравляем! Вас приняли в качестве единственного студента-человека в престижный Институт голубеводства Святого Пиджеона, школу для талантливых птиц! Бродите по коридорам и найдите любовь между занятиями, будучи второкурсником в лучшей в мире школе голубей.", age_limit:"16+" , image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/310080/header.jpg?t=1671034322", OS:"", region:"", },
     { id:22, title: "Red Passport: Ticket to Russia", price: 6.23, category: "Adventure", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: false, isTop: false, feedback: "", description: "Путешествуйте по России с помощью билета в Red Passport. Исследуйте уникальные локации и узнайте больше о культуре и истории страны.", age_limit: "0+", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3833430/b50661a6dc5116f1badc93ed2f5e1964592fa1d9/header.jpg?t=1769806212", OS: "", region: "",  },
     { id:23, title: "Babol the Walking Box", price: 5.69, category: "Action", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: false, isTop: false, feedback: "", description: "Начни свое приключение с новыми друзьями! Баболь Ходячая Коробка Да, это игра про Бокс, который может ходить, нет, шучу хахаха UwU Исследуйте удивительный мир бокса, от дикой природы и пустыни до супер-пупер-холодных заснеженных гор!", age_limit: "6+", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1605930/header.jpg?t=1624642634", OS: "", region: "",  },
     { id:24, title: "Horror haze", price: 0.99, category: "Horror", pc_platform: true, ps_platform: false, xbox_platform: false, inStock: true, discount: false, isTop: false, feedback: "", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1789220/header.jpg?t=1673963159", description: "Horror haze - это игра в жанре хоррор от первого лица с элементами выживания. Вас ждут пугающие локации, загадки и встречи с монстрами. Сможете ли вы выбраться живым?", age_limit: "16+", OS: "", region: "",  },
];



let cart = [];
const cartInfo = document.getElementById("cart-info");
const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const minPriceInput = document.getElementById("min-price-input");
const categoryFilter = document.getElementById("category-filter");
const resultsInfo = document.getElementById("results-info");


function escapeHtml(str) {
    if (str === undefined || str === null) return '';
    return String(str).replace(/[&<>"']/g, function (s) {
        return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[s];
    });
}

function loadCart() {
   const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        try {
            const parse = JSON.parse(savedCart);
            if (Array.isArray(parse)) {
                cart = parse;

            } else {
                cart = [];
            }
        } catch (error) {
            cart = [];
        }
     } else {
            cart = [];

            
            
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));

}
function updateCartCount() {
    if (cartInfo) {
        const countEl = document.getElementById('cart-count');
        if (countEl) {
            countEl.textContent = cart.length;
        } else {
            cartInfo.textContent = `Товаров в корзине: ${cart.length}`;
        }
    }
}   


function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    console.log("Корзина очищена");
}




function renderProduct(productsArray) {
    if (!productsContainer) return;
    productsArray.forEach(function (product) {
        const card = document.createElement("div");
        card.classList.add("product-card"); 
        // Use a small inline SVG placeholder for missing/bad image paths to avoid console 404s
        const imageSrc = (product.image && product.image.trim().toLowerCase() !== 'uknown.png')
            ? product.image
            : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="Segoe UI, Arial, sans-serif" font-size="20">No image</text></svg>';
        card.innerHTML = `
            <div class="product-image"><img src="${imageSrc}" alt="${escapeHtml(product.title)}"/></div>
            <h3>${escapeHtml(product.title)}</h3>
            <p class="product-category">Категория: ${escapeHtml(product.category)}</p>
            <p class="product-description">${escapeHtml(product.description)}</p>
            <div class="card-footer">
                <p class="product-price">Цена: ${product.price}&nbsp;€</p>
                <button class="add-to-cart-btn" aria-label="Добавить ${escapeHtml(product.title)} в корзину">Добавить в корзину</button>
            </div>
        `;
        const addButton = card.querySelector(".add-to-cart-btn");

        if (addButton) {
            addButton.addEventListener("click", function () {
                cart.push(product.id);
                saveCart();
                updateCartCount();
                // console.log(`Товар ${product.title} добавлен в корзину.`);
                console.log(`Поточный состав корзины: ${cart}`);
            });
        }

        productsContainer.appendChild(card);

        
        const imgEl = card.querySelector('.product-image img');
        const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="Segoe UI, Arial, sans-serif" font-size="18">No image</text></svg>';
        if (imgEl) {
            imgEl.onerror = function () { this.onerror = null; this.src = placeholder; };
        }
    });  
}

/* Render products into arbitrary container (used for featured on homepage) */
function renderProductsInto(containerEl, productsArray) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    productsArray.forEach(function (product) {
        const card = document.createElement('div');
        card.classList.add('featured-card');
        const imageSrc = (product.image && product.image.trim().toLowerCase() !== 'uknown.png')
            ? product.image
            : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="Segoe UI, Arial, sans-serif" font-size="14">No image</text></svg>';
        const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="Segoe UI, Arial, sans-serif" font-size="14">No image</text></svg>';
        card.innerHTML = `
            <div class="product-image"><img src="${imageSrc}" alt="${escapeHtml(product.title)}"/></div>
            <div class="featured-body">
                <h3>${escapeHtml(product.title)}</h3>
                <p class="product-category">Категория: ${escapeHtml(product.category)}</p>
                <p class="product-description">${escapeHtml(product.description)}</p>
                <div class="card-footer">
                    <p class="product-price">${product.price}&nbsp;€</p>
                    <button class="add-to-cart-btn" aria-label="Добавить ${escapeHtml(product.title)} в корзину">Добавить в корзину</button>
                </div>
            </div>
        `;
        const addButton = card.querySelector('.add-to-cart-btn');
        if (addButton) {
            addButton.addEventListener('click', function () {
                cart.push(product.id);
                saveCart();
                updateCartCount();
            });
        }
        containerEl.appendChild(card);
        const imgEl = card.querySelector('.product-image img');
        if (imgEl) imgEl.onerror = function () { this.onerror = null; this.src = placeholder; };
    });
}

// render featured on homepage
const featuredContainerEl = document.getElementById('featured-container');
if (featuredContainerEl) {
    // prefer explicit featured flag; fallback to first 3 items
    const featuredProducts = products.filter(p => p.isFeatured).slice(0,3);
    if (featuredProducts.length === 0) {
        renderProductsInto(featuredContainerEl, products.slice(0,3));
    } else {
        renderProductsInto(featuredContainerEl, featuredProducts);
    }
}

function filterAndRender() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const hasMinPrice = minPriceInput && minPriceInput.value !== "";
    const minPriceValue = hasMinPrice ? parseFloat(minPriceInput.value) : NaN;

    const filteredProducts = products.filter(function (product) {
        const title = (product.title || '').toLowerCase();
        const description = (product.description || '').toLowerCase();
        const matchesText = searchText === "" || title.includes(searchText) || description.includes(searchText);
        const matchesCategory = selectedCategory === "All" || (product.category && product.category.toLowerCase().includes(selectedCategory.toLowerCase()));
        const matchesPrice = !hasMinPrice || (typeof product.price === 'number' && product.price >= minPriceValue);
        return matchesText && matchesCategory && matchesPrice;
    });

    // debug: log filter state
    console.debug('[filterAndRender] searchText:', searchText, 'category:', selectedCategory, 'hasMinPrice:', hasMinPrice, 'minPriceValue:', minPriceValue, 'filtered:', filteredProducts.length);

    productsContainer.innerHTML = "";
    renderProduct(filteredProducts);

    if (resultsInfo) {
        if (filteredProducts.length > 0) {
            resultsInfo.textContent = `Найдено товаров: ${filteredProducts.length}`;
        } else {
            resultsInfo.textContent = "Товары не найдены.";
        }
    }
}
loadCart();
updateCartCount();


if (productsContainer) {
    filterAndRender();
    if (searchInput) searchInput.addEventListener("input", filterAndRender);
    if (minPriceInput) minPriceInput.addEventListener("input", filterAndRender);
    if (categoryFilter) categoryFilter.addEventListener("change", filterAndRender);
}




const clearCartBtn = document.getElementById("clear-cart-btn");
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
}