export const siteData = {
    navigation: ["Олон-улс", "Улс төр", "Бизнес", "Нийгэм", "Бусад"],
    footer: [
        {
            title: "Newsletter.mn",
            links: ["Бидний тухай", "Сурталчилгаа байршуулах"],
            subtitle: "Холбоо барих",
            contacts: ["+976 9999 0000", "newsletter@newsletter.mn"]
        },
        {
            title: "Бусад медиа",
            links: [
                "Facebook.com/newslettermn",
                "instagram.com/newslettermn",
                "x.com/newslettermn",
                "youtube.com/newslettermn"
            ]
        },
        {
            title: "Something",
            links: ["Something", "Other thing", "the other thing", "Anything haha"]
        }
    ]
};

const baseNews = [
    {
        title: "Goodbye Louis Vuitton. China's Gen Z leans into dupe economy as growth prospects stall",
        image: "https://picsum.photos/seed/louis-store/170/96",
        date: "2026.05.15",
        author: "Author Name"
    },
    {
        title: "China unveils raft of measures to boost economy",
        image: "https://picsum.photos/seed/china-briefing/170/96",
        date: "2026.05.15",
        author: "Author Name"
    },
    {
        title: "Divorce is on the rise in China. For some, that means big business",
        image: "https://picsum.photos/seed/river-men/170/96",
        date: "2026.05.15",
        author: "Author Name"
    },
    {
        title: "Israel strikes dozens more sites in southern Lebanon as thousands flee homes",
        image: "https://picsum.photos/seed/street-crowd/170/96",
        date: "2026.05.15",
        author: "Author Name"
    },
    {
        title: "Goodbye Louis Vuitton. China's Gen Z leans into dupe economy as growth prospects stall",
        image: "https://picsum.photos/seed/luxury-hall/170/96",
        date: "2026.05.15",
        author: "Author Name"
    },
    {
        title: "China measures signal more consumer support",
        image: "https://picsum.photos/seed/china-clip-one/170/96",
        date: "2026.05.15",
        author: "Author Name"
    }
];

export const profileData = {
    publisher: {
        name: "Danzandorj Bat-Uul",
        email: "natalia@gmail.com",
        phone: "9999 - 0000",
        photo: "https://picsum.photos/seed/danzandorj-profile/76/76",
        verified: true,
        authorMode: true
    },
    menu: ["Profile", "Preferences", "Data & Privacy", "Terms & Conditions", "Subscription", "Settings", "Sign out"],
    sections: [
        {
            id: "saved-news",
            title: "Хадгалсан Мэдээ",
            cards: baseNews
        },
        {
            id: "saved-news-second",
            title: "Хадгалсан Мэдээ",
            cards: baseNews.map((card, index) => ({
                ...card,
                image: `https://picsum.photos/seed/saved-${index}/170/96`
            }))
        },
        {
            id: "published-news",
            title: "Таны нийтэлсэн мэдээ",
            className: "published-strip",
            showAddCard: true,
            addLabel: "Шинээр нийтлэл бичих",
            cards: baseNews.slice(1)
        },
        {
            id: "drafted-news",
            title: "Drafted",
            className: "drafted-strip",
            cards: baseNews.map((card, index) => ({
                ...card,
                image: `https://picsum.photos/seed/draft-${index}/170/96`
            }))
        }
    ]
};

export const editorData = {
    title: "Гарчиг",
    author: "Danzandorj Bat-Uul",
    source: "Newsletter.mn",
    metadata: ["2024.09.22", "1,272,921 read", "12min read"],
    bodyPlaceholder: "Эндээс бичиж эхлэнэ үү...",
    categories: [
        "Category 1", "Category 2", "Category 3", "Category 4", "Category 5",
        "Category 6", "Category 7", "Category 8", "Category 1", "Category 2",
        "Category 1", "Category 2", "Category 1", "Category 2", "Category 1",
        "Category 2", "Category 1", "Category 2", "Category 1", "Category 2"
    ],
    visibilityOptions: ["Public", "Private"],
    coverageStats: [
        ["Мэдээлэл бүхий сувгууд:", "16"],
        ["АН намын:", "3"],
        ["МАН намын:", "7"],
        ["ХН намын:", "1"],
        ["Төвийг сахисан:", "5"],
        ["Ерөнхий ил тод:", "16"]
    ]
};
