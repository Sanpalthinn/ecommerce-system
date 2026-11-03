const categories = [
    {
        id: 1,
        name: 'Fashion',
        description: 'Fashion is a popular style or practice, especially in clothing, footwear, accessories, makeup, hairstyle, and body.',
        image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 2,
        name: 'Electronics',
        description: 'Electronics is the branch of science and technology that deals with the design, development, and application of electronic devices and systems.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 3,
        name: 'Accessories',
        description: 'Accessories are items that are added to something else to enhance its appearance, functionality, or style.',
        image: 'https://images.unsplash.com/photo-1611078481680-1f3e4c8b5f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: 4,
        name: 'Home & Living',
        description: 'Home & Living encompasses a wide range of products and services that contribute to the comfort, functionality, and aesthetics of living spaces.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    { 
        id: 5,
        name: 'Sports & Outdoors',
        description: 'Sports & Outdoors refers to activities, equipment, and gear related to physical exercise, recreation, and outdoor adventures.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    }
    ];

    const categoryContainer = document.getElementById('category-container');
    
    categories.forEach((category) => {
        console.log('Category:',category.name);
    });
// categories.forEach(category) => {
//     const categoryCard = document.createElement('div');
//     categoryCard.classList.add('category-card');
//     categoryCard.innerHTML = `
//         <img src="${category.image}" alt="${category.name}">
//         <h3>${category.name}</h3>
//         <p>${category.description}</p>
//     `;
//     categoryContainer.appendChild(categoryCard);
 categoryContainer.innerHTML = `     <!-- Category 1: Fashion -->
                <a id="category-1" href="#fashion" class="group block rounded-2xl overflow-hidden bg-gray-100">

                    <div class="relative overflow-hidden">

                        <img src=${categories[1].image}
                            alt="Fashion collection" class="w-full h-64 object-cover transition duration-500
                               group-hover:scale-110">

                        <div class="absolute inset-0 bg-black/10
                                group-hover:bg-black/30 transition">
                        </div>

                        <div class="absolute bottom-5 left-5 text-white">

                            <h3 class="text-2xl font-bold">
                            ${categories[1].name}
                            </h3>

                            <p class="mt-2 text-sm">
                                ${categories[1].description}
                            </p>

                        </div>

                    </div>

                </a>` 