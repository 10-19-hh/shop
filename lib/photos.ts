// Unsplash 사진 목록 (촬영자 출처 포함). scripts: 이미지를 바꿀 때 이 파일과 public/products/를 함께 갱신한다.
export type Photo = { src: string; credit: string; creditUrl: string; page: string };

export const PHOTOS: Record<string, Photo[]> = {
  "p01": [
    {
      "src": "/products/p01-1.jpg",
      "credit": "Jonathan Mattson",
      "creditUrl": "https://unsplash.com/@jonathan_mg",
      "page": "https://unsplash.com/photos/a-white-t-shirt-hanging-on-a-white-wall-fiA7sq2PdnQ"
    },
    {
      "src": "/products/p01-2.jpg",
      "credit": "Brando Makes Branding",
      "creditUrl": "https://unsplash.com/@brandomakesbranding",
      "page": "https://unsplash.com/photos/man-wearing-white-crew-neck-shirt-and-black-denim-jeans-with-hands-in-pocket-7WE1LbSc4zM"
    }
  ],
  "p02": [
    {
      "src": "/products/p02-1.jpg",
      "credit": "Tim Bernhard",
      "creditUrl": "https://unsplash.com/@bernhardvisuals",
      "page": "https://unsplash.com/photos/a-young-man-standing-on-a-skateboard-on-a-city-street-pYDQyzThtLE"
    },
    {
      "src": "/products/p02-2.jpg",
      "credit": "Bao Bao",
      "creditUrl": "https://unsplash.com/@baobao_2411",
      "page": "https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-mlKE8dEMc_8"
    }
  ],
  "p03": [
    {
      "src": "/products/p03-1.jpg",
      "credit": "Neakasa",
      "creditUrl": "https://unsplash.com/@neakasa",
      "page": "https://unsplash.com/photos/a-blue-shirt-hanging-on-a-wooden-stand-HGqPrIJAOBY"
    },
    {
      "src": "/products/p03-2.jpg",
      "credit": "José Matute",
      "creditUrl": "https://unsplash.com/@jematutef",
      "page": "https://unsplash.com/photos/a-man-wearing-a-blue-shirt-and-tan-pants-4pcFmF6bgBw"
    }
  ],
  "p04": [
    {
      "src": "/products/p04-1.jpg",
      "credit": "Serafima Lazarenko",
      "creditUrl": "https://unsplash.com/@sera_fima",
      "page": "https://unsplash.com/photos/man-in-gray-sweater-standing-on-brown-field-during-daytime-4vZEDN9qHzA"
    },
    {
      "src": "/products/p04-2.jpg",
      "credit": "Trương Tuyết Ly",
      "creditUrl": "https://unsplash.com/@liliantruong2603",
      "page": "https://unsplash.com/photos/young-woman-in-sunglasses-and-dark-sweater-poses-against-wall-gp349m3e8zc"
    }
  ],
  "p05": [
    {
      "src": "/products/p05-1.jpg",
      "credit": "Abraham Flores",
      "creditUrl": "https://unsplash.com/@abrahamf",
      "page": "https://unsplash.com/photos/a-man-with-a-beard-wearing-a-white-hoodie-VoP2WK9rTa4"
    },
    {
      "src": "/products/p05-2.jpg",
      "credit": "Mediamodifier",
      "creditUrl": "https://unsplash.com/@mediamodifier",
      "page": "https://unsplash.com/photos/a-woman-posing-for-a-picture-Cglj4LP4GTQ"
    }
  ],
  "p06": [
    {
      "src": "/products/p06-1.jpg",
      "credit": "Brock Wegner",
      "creditUrl": "https://unsplash.com/@isthatbrock",
      "page": "https://unsplash.com/photos/a-man-standing-in-front-of-a-building-wearing-glasses-7Rgp71Q95qo"
    },
    {
      "src": "/products/p06-2.jpg",
      "credit": "KOSTA MEDIA",
      "creditUrl": "https://unsplash.com/@kostamedia",
      "page": "https://unsplash.com/photos/man-in-black-and-white-striped-long-sleeve-shirt-wearing-black-sunglasses-hcUDd7cG26Y"
    }
  ],
  "p07": [
    {
      "src": "/products/p07-1.jpg",
      "credit": "Happy Face Emoji",
      "creditUrl": "https://unsplash.com/@hfestudio",
      "page": "https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-and-blue-denim-jeans-standing-beside-black-metal-roll-up-5ervPMKFr50"
    },
    {
      "src": "/products/p07-2.jpg",
      "credit": "Marlon Alves",
      "creditUrl": "https://unsplash.com/@marlonalvesphoto",
      "page": "https://unsplash.com/photos/a-woman-standing-with-her-hands-on-her-hips-IucjGzKvxno"
    }
  ],
  "p08": [
    {
      "src": "/products/p08-1.jpg",
      "credit": "Kateryna Hliznitsova",
      "creditUrl": "https://unsplash.com/@kate_gliz",
      "page": "https://unsplash.com/photos/a-woman-sitting-on-a-chair-with-her-legs-crossed-TG44IgZiIC8"
    },
    {
      "src": "/products/p08-2.jpg",
      "credit": "Sergey Sokolov",
      "creditUrl": "https://unsplash.com/@svsokolov",
      "page": "https://unsplash.com/photos/woman-poses-on-a-stool-in-a-brown-studio-_-1BhQq6f5Q"
    }
  ],
  "p09": [
    {
      "src": "/products/p09-1.jpg",
      "credit": "Melbin Jacob",
      "creditUrl": "https://unsplash.com/@melbinjacob",
      "page": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-brown-background-isOnKqJkKAI"
    },
    {
      "src": "/products/p09-2.jpg",
      "credit": "Tânia Mousinho",
      "creditUrl": "https://unsplash.com/@shotsbytania",
      "page": "https://unsplash.com/photos/a-man-standing-on-top-of-a-brick-wall-ID8-h2XNDoU"
    }
  ],
  "p10": [
    {
      "src": "/products/p10-1.jpg",
      "credit": "engin akyurt",
      "creditUrl": "https://unsplash.com/@enginakyurt",
      "page": "https://unsplash.com/photos/person-in-sweatpants-and-crop-top-q7HfJHayc18"
    },
    {
      "src": "/products/p10-2.jpg",
      "credit": "Eldo Rafael",
      "creditUrl": "https://unsplash.com/@eldocr",
      "page": "https://unsplash.com/photos/a-woman-in-a-white-top-and-blue-pants-6NHOEyrDbVg"
    }
  ],
  "p11": [
    {
      "src": "/products/p11-1.jpg",
      "credit": "engin akyurt",
      "creditUrl": "https://unsplash.com/@enginakyurt",
      "page": "https://unsplash.com/photos/person-wearing-grey-shorts-and-sneakers-h1lEJgfQfig"
    },
    {
      "src": "/products/p11-2.jpg",
      "credit": "Brandon Atchison",
      "creditUrl": "https://unsplash.com/@b_atchison98",
      "page": "https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-and-green-shorts-standing-on-beach-during-daytime-eexdeq3NleQ"
    }
  ],
  "p12": [
    {
      "src": "/products/p12-1.jpg",
      "credit": "Vicky Cheng",
      "creditUrl": "https://unsplash.com/@vickyworld",
      "page": "https://unsplash.com/photos/selective-focus-photo-of-smiling-woman-wearing-black-dress-standing-on-concrete-pavement-4mLKBKMPoHo"
    },
    {
      "src": "/products/p12-2.jpg",
      "credit": "Zulfugar Karimov",
      "creditUrl": "https://unsplash.com/@zulfugarkarimov",
      "page": "https://unsplash.com/photos/woman-in-black-top-and-white-skirt-by-the-water-6nf5xPLamY4"
    }
  ],
  "p13": [
    {
      "src": "/products/p13-1.jpg",
      "credit": "Taras Chernus",
      "creditUrl": "https://unsplash.com/@chernus_tr",
      "page": "https://unsplash.com/photos/man-in-brown-coat-and-black-pants-iIjResyhhW0"
    },
    {
      "src": "/products/p13-2.jpg",
      "credit": "Aryan Ghauri",
      "creditUrl": "https://unsplash.com/@aryanghauri2020",
      "page": "https://unsplash.com/photos/man-in-black-blazer-and-black-pants-standing-and-smiling-V-QZ5XlU5Ik"
    }
  ],
  "p14": [
    {
      "src": "/products/p14-1.jpg",
      "credit": "Gytis Bukauskas",
      "creditUrl": "https://unsplash.com/@gytisb",
      "page": "https://unsplash.com/photos/a-man-sitting-on-a-bench-dcaSiPNKMTA"
    },
    {
      "src": "/products/p14-2.jpg",
      "credit": "Bulbul Ahmed",
      "creditUrl": "https://unsplash.com/@bulbul252",
      "page": "https://unsplash.com/photos/blue-zip-up-hoodie-jacket-TcRaVI3LXds"
    }
  ],
  "p15": [
    {
      "src": "/products/p15-1.jpg",
      "credit": "Caio Coelho",
      "creditUrl": "https://unsplash.com/@smokthebikini",
      "page": "https://unsplash.com/photos/blue-denim-button-up-jacket-QRN47la37gw"
    },
    {
      "src": "/products/p15-2.jpg",
      "credit": "Adrian Dascal",
      "creditUrl": "https://unsplash.com/@dascal",
      "page": "https://unsplash.com/photos/man-in-blue-washed-jacket-1QOsJGbNIgk"
    }
  ],
  "p16": [
    {
      "src": "/products/p16-1.jpg",
      "credit": "Bernd 📷 Dittrich",
      "creditUrl": "https://unsplash.com/@hdbernd",
      "page": "https://unsplash.com/photos/cream-and-white-puffer-jacket-with-fuzzy-sleeves-aJZU6Kt3wWU"
    },
    {
      "src": "/products/p16-2.jpg",
      "credit": "Dmitry Spravko",
      "creditUrl": "https://unsplash.com/@kaprion",
      "page": "https://unsplash.com/photos/close-up-of-a-fuzzy-cream-patagonia-jacket-GuTiWuXT97w"
    }
  ],
  "p17": [
    {
      "src": "/products/p17-1.jpg",
      "credit": "Mina Rad",
      "creditUrl": "https://unsplash.com/@miinrad",
      "page": "https://unsplash.com/photos/a-woman-wearing-a-black-and-white-jacket-and-hat-AV2Hal4UGT8"
    },
    {
      "src": "/products/p17-2.jpg",
      "credit": "sobhan joodi",
      "creditUrl": "https://unsplash.com/@sbhnleo",
      "page": "https://unsplash.com/photos/a-woman-wearing-a-green-vest-and-black-leggings-fhbti3qbv6Y"
    }
  ],
  "p18": [
    {
      "src": "/products/p18-1.jpg",
      "credit": "Melek Mavzer",
      "creditUrl": "https://unsplash.com/@melekmavzer",
      "page": "https://unsplash.com/photos/woman-in-brown-coat-and-black-leather-sling-bag-umWZllrNjS8"
    },
    {
      "src": "/products/p18-2.jpg",
      "credit": "Amir Asghari",
      "creditUrl": "https://unsplash.com/@amirarsalann",
      "page": "https://unsplash.com/photos/a-woman-walking-down-the-street-in-a-trench-coat-vzfk2QjP4l0"
    }
  ],
  "p19": [
    {
      "src": "/products/p19-1.jpg",
      "credit": "Anh Tuan To",
      "creditUrl": "https://unsplash.com/@tuan1561",
      "page": "https://unsplash.com/photos/person-in-white-pants-and-white-nike-sneakers-SWFNDe0TvM0"
    },
    {
      "src": "/products/p19-2.jpg",
      "credit": "LOGAN WEAVER | @LGNWVR",
      "creditUrl": "https://unsplash.com/@lgnwvr",
      "page": "https://unsplash.com/photos/person-wearing-white-low-top-sneakers-GILIG9XVfo4"
    }
  ],
  "p20": [
    {
      "src": "/products/p20-1.jpg",
      "credit": "Ervan M Wirawan",
      "creditUrl": "https://unsplash.com/@ervan_me",
      "page": "https://unsplash.com/photos/person-holding-white-nike-low-top-sneakers-PUw24-taMKc"
    },
    {
      "src": "/products/p20-2.jpg",
      "credit": "The DK Photography",
      "creditUrl": "https://unsplash.com/@deepain108",
      "page": "https://unsplash.com/photos/black-and-white-nike-sneakers-jc0o2j7T5LA"
    }
  ],
  "p21": [
    {
      "src": "/products/p21-1.jpg",
      "credit": "Tanaphong Toochinda",
      "creditUrl": "https://unsplash.com/@goshdanyou",
      "page": "https://unsplash.com/photos/a-pair-of-running-shoes-sitting-on-top-of-a-table-WWDMEVcGPbU"
    },
    {
      "src": "/products/p21-2.jpg",
      "credit": "Martin Katler",
      "creditUrl": "https://unsplash.com/@martinkatler",
      "page": "https://unsplash.com/photos/pair-of-gray-running-shoes-Y4fKN-RlMV4"
    }
  ],
  "p22": [
    {
      "src": "/products/p22-1.jpg",
      "credit": "Husien Bisky",
      "creditUrl": "https://unsplash.com/@husien_bisky1",
      "page": "https://unsplash.com/photos/a-pair-of-brown-leather-chelsea-boots-on-wood-ju-B5nlGXzE"
    },
    {
      "src": "/products/p22-2.jpg",
      "credit": "Husien Bisky",
      "creditUrl": "https://unsplash.com/@husien_bisky1",
      "page": "https://unsplash.com/photos/a-pair-of-polished-brown-leather-chelsea-boots-AwhukWqsfSs"
    }
  ],
  "p23": [
    {
      "src": "/products/p23-1.jpg",
      "credit": "Kristina Tochilko",
      "creditUrl": "https://unsplash.com/@tochilko",
      "page": "https://unsplash.com/photos/stylish-tassel-loafers-resting-on-wood-F3SuZhO02fI"
    },
    {
      "src": "/products/p23-2.jpg",
      "credit": "Janay Peters",
      "creditUrl": "https://unsplash.com/@jpetersbydesign",
      "page": "https://unsplash.com/photos/person-wearing-brown-loafers-with-white-pants-8OT4sZv8pwc"
    }
  ],
  "p24": [
    {
      "src": "/products/p24-1.jpg",
      "credit": "KIKI",
      "creditUrl": "https://unsplash.com/@foursident",
      "page": "https://unsplash.com/photos/black-and-brown-leather-sandals-on-green-grass-5fL4SPSzqaY"
    },
    {
      "src": "/products/p24-2.jpg",
      "credit": "esref yasa",
      "creditUrl": "https://unsplash.com/@esrefyasa",
      "page": "https://unsplash.com/photos/a-pair-of-black-slippers-sitting-on-top-of-a-sandy-beach-JG7GE4rndow"
    }
  ],
  "p25": [
    {
      "src": "/products/p25-1.jpg",
      "credit": "Old Youth",
      "creditUrl": "https://unsplash.com/@oldyouth",
      "page": "https://unsplash.com/photos/a-blue-hat-sitting-on-top-of-a-rock-covered-in-lichen-20tmoT1sVi0"
    },
    {
      "src": "/products/p25-2.jpg",
      "credit": "Rainier Watch",
      "creditUrl": "https://unsplash.com/@mtrainierwatch",
      "page": "https://unsplash.com/photos/a-hat-on-a-table-AHKaxRjLvKk"
    }
  ],
  "p26": [
    {
      "src": "/products/p26-1.jpg",
      "credit": "Benjamin R.",
      "creditUrl": "https://unsplash.com/@dapperprofessional",
      "page": "https://unsplash.com/photos/a-hat-on-a-persons-head-gcZcCqpGEw0"
    },
    {
      "src": "/products/p26-2.jpg",
      "credit": "hossein azarbad",
      "creditUrl": "https://unsplash.com/@azarbadam",
      "page": "https://unsplash.com/photos/grayscale-photo-of-person-holding-cap-AP_qief3n94"
    }
  ],
  "p27": [
    {
      "src": "/products/p27-1.jpg",
      "credit": "Ethan Rougon",
      "creditUrl": "https://unsplash.com/@ethanethan",
      "page": "https://unsplash.com/photos/brown-wooden-box-on-white-surface-oIlix2slmsI"
    },
    {
      "src": "/products/p27-2.jpg",
      "credit": "Konstantin Evdokimov",
      "creditUrl": "https://unsplash.com/@constantinevdokimov",
      "page": "https://unsplash.com/photos/a-leather-wallet-a-comb-thread-and-scissors-on-a-table-rhP8U-86GZA"
    }
  ],
  "p28": [
    {
      "src": "/products/p28-1.jpg",
      "credit": "Kelly Sikkema",
      "creditUrl": "https://unsplash.com/@kellysikkema",
      "page": "https://unsplash.com/photos/beige-eco-bag-1Pgq9ZpIatI"
    },
    {
      "src": "/products/p28-2.jpg",
      "credit": "He's Her Lobster",
      "creditUrl": "https://unsplash.com/@hesherlobsteruk",
      "page": "https://unsplash.com/photos/black-tote-bag-9b6UhV4nLZs"
    }
  ],
  "p29": [
    {
      "src": "/products/p29-1.jpg",
      "credit": "Tijana Drndarski",
      "creditUrl": "https://unsplash.com/@izgubljenausvemiru",
      "page": "https://unsplash.com/photos/white-and-black-textile-on-white-and-brown-wooden-seat-sBmXdO892GY"
    },
    {
      "src": "/products/p29-2.jpg",
      "credit": "Susan Wilkinson",
      "creditUrl": "https://unsplash.com/@susan_wilkinson",
      "page": "https://unsplash.com/photos/red-and-black-striped-textile-9dDJk8lvUwg"
    }
  ],
  "p30": [
    {
      "src": "/products/p30-1.jpg",
      "credit": "Aurélia Dubois",
      "creditUrl": "https://unsplash.com/@aureliaduboisphotographie",
      "page": "https://unsplash.com/photos/brown-leather-sling-bag-on-white-background-xzrJCS4grC4"
    },
    {
      "src": "/products/p30-2.jpg",
      "credit": "dhehaivan",
      "creditUrl": "https://unsplash.com/@dhehaivan",
      "page": "https://unsplash.com/photos/man-in-white-crew-neck-shirt-UDYE-agPbj4"
    }
  ]
};
