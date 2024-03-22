 const products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/71DjLEgCUYL._AC_UY327_FMwebp_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71DjLEgCUYL._AC_UY327_FMwebp_QL65_.jpg',
        title: {
            shortTitle: 'Samsung Galaxy A54 5G',
            longTitle: 'Samsung Galaxy A54 5G (Awesome Graphite, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger'
        }, 
        price: {
            mrp: 45999,
            cost: 34499,
            discount: '23%'
        },
        description: '48MP(OIS)+8MP+5MP Triple camera setup - 48MP (F1.8) Main Camera with OIS + 8MP (F2.2) Ultra wide camera + 5MP (F2.4) depth camera | 13MP (F2.2) front camera, 16.65 centimeters (6.6-inch) FHD+ Super AMOLED display, FHD+ resolution with 1080 x 2340 pixels , 393 PPI with 16M colour, Android 13, v13.0 operating system with MediaTek | MTK D1080 2.6GHz,2GHz Octa-Core processor, A34 5G has an IP67 certification and Gorilla Glass 5 (front screen) for carefree usage, Premium design experience with a metal camera deco',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://m.media-amazon.com/images/I/61RWQqTjSZL._AC_UL480_QL65_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61RWQqTjSZL._AC_UL480_QL65_.jpg',
        title: {
            shortTitle: 'Chuwi HeroBook Pro 14.1',
            longTitle: 'Chuwi HeroBook Pro 14.1 Intel Celeron N4020 Laptop with 8GB RAM, 256GB SSD, Windows 11, 1TB Expand, FHD IPS, Ultra Slim, USB3.0, Mini-HDMI, Webcam'
        },
        price: {
            mrp: 34990,
            cost: 16990,
            discount: '51%'
        },
        description: '💻 Powerful Performance: Intel Gemini Lake N4020 processor and Intel UHD Graphics 600 deliver smooth 4K video decoding, ensuring efficient multitasking and fast image processing. 📶 Storage Capacity: 8GB RAM, 256GB SSD storage, expandable up to 128GB with TF card and 1TB with M.2 SSD. Dual-band WiFi, USB 3.0, and Micro-HDMI ports offer versatile connectivity options. ⭐ Compact Design, Big Benefits: 14.1" antiglare IPS screen, 1920*1080 resolution, and 38Wh battery lasting over 9 hours. Thin and lightweight design for portability and built-in charging technology.🔌 Versatile Features: Full-size keyboard, big trackpad, and various ports including Microphone, Speaker, Camera, and 3.5mm headphone jack. Supports Bluetooth 4.2 for seamless device connectivity. 🏠 Ideal for Any Setting: Suitable for school, business, or home use, this laptop provides the opportunity to work anytime with its outstanding features and productive workspace setup.',
        discount: 'Flat INR 2000 Off on SBI Credit Cards', 
        tagline: 'ASUS Laptops' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/51lUkxkNXDL.AC_SX250.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/51lUkxkNXDL.AC_SX250.jpg', 
        title: {
            shortTitle: 'boAt Wave Sigma with 2.01 HD Displayr',
            longTitle: 'boAt Wave Sigma with 2.01 HD Display,Bluetooth Calling, Coins, DIY Watch Face Studio, 700+ Active Modes, HR&SpO2 Monitoring, Energy and Sleep Scores,IP67, Smart Watch for Men & Women(Cool Blue'
        }, 
        price: {
            mrp: 7499,
            cost: 1499,
            discount: '80%'
        },
        description: 'Screen Size- Wave Sigma comes with a massive 2.01” HD Display providing a complete capacitive touch experience, to let you take control effortlessly.Always on Display –No; Peak screen brightness 550 Nits(nits) boAt Coins- Get vouchers/coupons that can be redeemed on our boAt Crest App basis your workouts DIY Watch Face Studio- Customize watch faces as per your own needs. Choose, backgrounds, themes & widgets Bluetooth Calling- The watch comes with a premium built-in speaker and microphone that enables you to have a quick chat with friends and stay connected with the world. Music Storage: No;Volume Control: Yes 700+ Active Mode- From running to binge-watching, from weight training to dog walking, from skateboarding to snuggling, Wave Sigma makes every moment count!Rigorously tested for reliability before leaving the factory, Wave Sigma is super durable with IP67 dust, sweat & splash resistance.',
        discount: 'EMI starts at ₹136 per month. EMI', 
        tagline: 'Apply ₹100 coupon Terms' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    }
]

module.exports = products;