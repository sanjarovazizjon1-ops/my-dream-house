
const slides = [
  {
    title: "My Dream House",
    kicker: "MY FUTURE HOME · 01",
    subtitle: "A beautiful home is not only about design. It is also about comfort, happiness, and family.",
    image: "photo-1600585154340-be6161a56a0c",
    panel: "My Perfect Home",
    facts: [
      ["01", "Modern Design", "A beautiful two-floor house with large windows and elegant details."],
      ["02", "Perfect Location", "A quiet neighborhood with trees, fresh air, and friendly people."],
      ["03", "Family Comfort", "Enough space for every family member to feel comfortable."]
    ],
    quote: "A home is where our dreams become part of everyday life.",
    cards: [
      ["photo-1600607687939-ce8a6c25118c", "Beautiful Interior", "Bright rooms, natural colors, and comfortable furniture."],
      ["photo-1600566753086-00f18fb6b3ea", "Green Garden", "A peaceful outdoor space for relaxation and family time."]
    ]
  },
  {
    title: "Introduction",
    kicker: "01 · MY VISION",
    subtitle: "Everyone has a dream about the perfect place to live. My dream is to have a modern, comfortable, and peaceful house.",
    image: "photo-1600607687920-4e2a09cf159d",
    panel: "What Makes It Special?",
    facts: [
      ["01", "Comfort", "Every room will have comfortable furniture and enough natural light."],
      ["02", "Beauty", "The design will combine modern architecture with natural materials."],
      ["03", "Happiness", "My family and friends will always feel welcome in my home."]
    ],
    quote: "For me, a dream house is a place where I can relax and enjoy life.",
    cards: [
      ["photo-1600210492486-724fe5c67fb0", "Modern Style", "Simple shapes and warm colors will make the house look elegant."],
      ["photo-1600607687644-c7171b42498f", "Personal Space", "Every family member will have a room for rest and hobbies."]
    ]
  },
  {
    title: "Location",
    kicker: "02 · THE PERFECT PLACE",
    subtitle: "I would like to build my dream house in a quiet and safe area. It should be close to useful places but far from busy roads.",
    image: "photo-1600566753190-17f0baa2a6c3",
    panel: "My Ideal Neighborhood",
    facts: [
      ["01", "Fresh Air", "Green spaces and trees will make the area healthier and more pleasant."],
      ["02", "Easy Travel", "Schools, shops, hospitals, and public transport should be nearby."],
      ["03", "Peaceful Life", "I prefer a quiet street with friendly and helpful neighbors."]
    ],
    quote: "The right location makes everyday life easier and more enjoyable.",
    cards: [
      ["photo-1449158743715-0a90ebb6d2d8", "Green Surroundings", "Parks and trees create a relaxing environment."],
      ["photo-1510798831971-661eb04b3739", "Quiet Streets", "A calm neighborhood is perfect for families."]
    ]
  },
  {
    title: "Exterior Design",
    kicker: "03 · FIRST IMPRESSION",
    subtitle: "The outside of my house will look modern, elegant, and welcoming. I want the design to be beautiful without being too complicated.",
    image: "photo-1600607687939-ce8a6c25118c",
    panel: "Outside Features",
    facts: [
      ["01", "Two Floors", "The house will have enough space for bedrooms, living areas, and storage."],
      ["02", "Large Windows", "Big windows will bring sunlight into the rooms."],
      ["03", "Natural Materials", "Stone, wood, and glass will create a stylish appearance."]
    ],
    quote: "A beautiful exterior creates a warm welcome for everyone.",
    cards: [
      ["photo-1600585154526-990dced4db0d", "Main Entrance", "A stylish front door will welcome visitors."],
      ["photo-1600566753086-00f18fb6b3ea", "Outdoor Lighting", "Warm lights will make the house attractive at night."]
    ]
  },
  {
    title: "First Floor Plan",
    kicker: "04 · HOUSE LAYOUT",
    subtitle: "The first floor will be the main area for daily activities. It will connect the entrance, living room, kitchen, and dining area.",
    image: "photo-1600210492486-724fe5c67fb0",
    panel: "Rooms on Floor One",
    facts: [
      ["01", "Living Room", "A large shared space for talking, watching films, and relaxing."],
      ["02", "Kitchen", "A practical room where the family can prepare meals together."],
      ["03", "Dining Area", "A comfortable place to enjoy breakfast, lunch, and dinner."],
      ["04", "Guest Bathroom", "A convenient bathroom near the main living areas."]
    ],
    quote: "A good floor plan makes every part of the house easy to use.",
    cards: [
      ["photo-1600607687920-4e2a09cf159d", "Open Layout", "Connected rooms create a more spacious feeling."],
      ["photo-1600607687644-c7171b42498f", "Easy Movement", "Wide paths make moving between rooms simple."]
    ]
  },
  {
    title: "Second Floor Plan",
    kicker: "05 · PRIVATE SPACE",
    subtitle: "The second floor will be a quiet place for sleeping, studying, and personal activities. It will offer more privacy for everyone.",
    image: "photo-1600607687644-c7171b42498f",
    panel: "Rooms on Floor Two",
    facts: [
      ["01", "Main Bedroom", "A peaceful room with a large bed and a private bathroom."],
      ["02", "My Bedroom", "A personal space for studying, reading, and relaxing."],
      ["03", "Guest Room", "A comfortable room for relatives and friends."],
      ["04", "Storage Room", "Extra space for clothes, suitcases, and household items."]
    ],
    quote: "Private spaces help everyone feel relaxed and independent.",
    cards: [
      ["photo-1616486338812-3dadae4b4ace", "Quiet Corners", "Comfortable spaces make rest more enjoyable."],
      ["photo-1616486029423-aaa4789e8c9a", "Smart Storage", "Well-planned storage keeps bedrooms organized."]
    ]
  },
  {
    title: "Living Room",
    kicker: "06 · FAMILY LIFE",
    subtitle: "The living room will be one of the most important rooms in my house. It will be spacious, bright, and comfortable for everyday family life.",
    image: "photo-1600210492486-724fe5c67fb0",
    panel: "Living Room Features",
    facts: [
      ["01", "Large Sofa", "A soft sofa will provide enough seats for family and guests."],
      ["02", "Entertainment", "A television and sound system will make movie nights more enjoyable."],
      ["03", "Natural Light", "Large windows will make the room feel open and bright."],
      ["04", "Warm Colors", "Cream, beige, and green will create a relaxing atmosphere."]
    ],
    quote: "This is where my family can spend quality time together.",
    cards: [
      ["photo-1600607687939-ce8a6c25118c", "Modern Furniture", "Simple furniture will keep the room stylish."],
      ["photo-1600607687920-4e2a09cf159d", "Cozy Atmosphere", "Soft lighting makes evenings more relaxing."]
    ]
  },
  {
    title: "Modern Kitchen",
    kicker: "07 · COOK WITH LOVE",
    subtitle: "My dream kitchen will be modern and practical. It will have enough space to prepare food, store ingredients, and cook meals with my family.",
    image: "photo-1600607687920-4e2a09cf159d",
    panel: "Kitchen Essentials",
    facts: [
      ["01", "Kitchen Island", "A central island will provide extra space for cooking and serving food."],
      ["02", "Smart Appliances", "An oven, refrigerator, and dishwasher will save time."],
      ["03", "Good Storage", "Large cupboards and drawers will keep everything organized."],
      ["04", "Dining Corner", "A small breakfast table will be useful on busy mornings."]
    ],
    quote: "A good kitchen brings people together through food and conversation.",
    cards: [
      ["photo-1600585154340-be6161a56a0c", "Clean Design", "Easy-to-clean surfaces make daily work simpler."],
      ["photo-1600210492486-724fe5c67fb0", "Family Cooking", "Cooking together can become a happy family tradition."]
    ]
  },
  {
    title: "My Bedroom",
    kicker: "08 · REST AND RELAX",
    subtitle: "My bedroom will be a private and peaceful space. After a busy day, I will be able to rest, listen to music, and prepare for the next day.",
    image: "photo-1616486029423-aaa4789e8c9a",
    panel: "Bedroom Design",
    facts: [
      ["01", "Comfortable Bed", "A large bed and soft pillows will help me sleep well."],
      ["02", "Study Desk", "A desk near the window will be useful for homework and reading."],
      ["03", "Wardrobe", "A large wardrobe will keep my clothes neat and organized."],
      ["04", "Soft Lighting", "Warm lamps will create a calm atmosphere in the evening."]
    ],
    quote: "A comfortable bedroom is important for good rest and a fresh start.",
    cards: [
      ["photo-1600607687644-c7171b42498f", "Simple Decoration", "A few personal items will make the room feel special."],
      ["photo-1616486338812-3dadae4b4ace", "Quiet Environment", "A peaceful room helps me focus and relax."]
    ]
  },
  {
    title: "Guest Bedroom",
    kicker: "09 · WELCOME GUESTS",
    subtitle: "I want my guests to feel comfortable in my house. A separate guest bedroom will give visitors a private place to sleep and relax.",
    image: "photo-1616486029423-aaa4789e8c9a",
    panel: "Guest Room Essentials",
    facts: [
      ["01", "Comfortable Bed", "Fresh bedding and soft pillows will make guests feel welcome."],
      ["02", "Storage Space", "A wardrobe or small cupboard will hold personal belongings."],
      ["03", "Reading Light", "A bedside lamp will be useful for reading at night."],
      ["04", "Simple Design", "Neutral colors will create a clean and relaxing room."]
    ],
    quote: "Good hospitality begins with making people feel at home.",
    cards: [
      ["photo-1600607687939-ce8a6c25118c", "Fresh Details", "Clean towels and bedding will be ready for visitors."],
      ["photo-1600210492486-724fe5c67fb0", "Warm Welcome", "Small details can make guests feel special."]
    ]
  },
  {
    title: "Bathroom Design",
    kicker: "10 · CLEAN AND FRESH",
    subtitle: "My house will have modern bathrooms with practical equipment and beautiful finishes. They will be easy to clean and comfortable to use.",
    image: "photo-1620626011761-996317b8d101",
    panel: "Bathroom Features",
    facts: [
      ["01", "Modern Shower", "A glass shower area will save space and look elegant."],
      ["02", "Good Lighting", "Bright mirrors and ceiling lights will make daily routines easier."],
      ["03", "Storage Shelves", "Shelves will keep towels and personal products organized."],
      ["04", "Water Saving", "Efficient taps and showers will reduce water use."]
    ],
    quote: "Small practical details make a bathroom more comfortable.",
    cards: [
      ["photo-1600566753190-17f0baa2a6c3", "Natural Colors", "Stone and light colors create a fresh appearance."],
      ["photo-1600607687644-c7171b42498f", "Useful Design", "Every item will have its own place."]
    ]
  },
  {
    title: "Open Terrace",
    kicker: "11 · LIFE OUTDOORS",
    subtitle: "The open terrace will be a special place to enjoy fresh air. I will use it for family meals, evening tea, and small celebrations with friends.",
    image: "photo-1600607687939-ce8a6c25118c",
    panel: "Terrace Ideas",
    facts: [
      ["01", "Outdoor Furniture", "Comfortable chairs and a table will make the terrace useful."],
      ["02", "Pergola", "A wooden roof structure will provide shade on sunny days."],
      ["03", "Evening Lights", "Soft lights will create a pleasant mood after sunset."],
      ["04", "Potted Plants", "Green plants will make the terrace feel natural."]
    ],
    quote: "The terrace will help me enjoy nature without leaving home.",
    cards: [
      ["photo-1600566753086-00f18fb6b3ea", "Family Dinners", "Outdoor meals will be fun during warm weather."],
      ["photo-1449158743715-0a90ebb6d2d8", "Morning Tea", "A quiet morning outside can be a perfect start."]
    ]
  },
  {
    title: "Garage and Parking",
    kicker: "12 · SAFE AND PRACTICAL",
    subtitle: "My dream house will have a private garage. It will protect the family car from rain and strong sunlight and provide extra storage space.",
    image: "photo-1600607687920-4e2a09cf159d",
    panel: "Garage Features",
    facts: [
      ["01", "Secure Door", "An automatic garage door will make parking easier."],
      ["02", "Extra Storage", "Shelves will hold tools, sports equipment, and other items."],
      ["03", "Bright Lighting", "Good lighting will help people move around safely."],
      ["04", "Easy Access", "The garage will be close to the main entrance."]
    ],
    quote: "A well-planned garage makes everyday life safer and easier.",
    cards: [
      ["photo-1600585154526-990dced4db0d", "Private Parking", "The car will have a safe place at home."],
      ["photo-1600607687939-ce8a6c25118c", "Organized Space", "Storage areas will keep the garage tidy."]
    ]
  },
  {
    title: "Beautiful Garden",
    kicker: "13 · A GREEN PARADISE",
    subtitle: "My garden will be full of green grass, flowers, and small trees. It will be a peaceful place to walk, relax, and enjoy the fresh air.",
    image: "photo-1416879595882-3373a0480b5b",
    panel: "Garden Highlights",
    facts: [
      ["01", "Colorful Flowers", "Different flowers will make the garden bright and attractive."],
      ["02", "Green Lawn", "A lawn will be perfect for relaxing and spending time outdoors."],
      ["03", "Garden Path", "A stone path will connect the terrace and seating area."],
      ["04", "Outdoor Seating", "A bench will provide a comfortable place to enjoy nature."]
    ],
    quote: "A green garden brings peace, beauty, and fresh air to a home.",
    cards: [
      ["photo-1449158743715-0a90ebb6d2d8", "Flowers and Trees", "Plants will make the outdoor space more beautiful."],
      ["photo-1501004318641-b39e6451bec6", "Nature Care", "I will water plants and keep the garden clean."]
    ]
  },
  {
    title: "Swimming Pool",
    kicker: "14 · FUN AND RELAXATION",
    subtitle: "If there is enough space, I would like to have a small swimming pool in the garden. It will be a great place to relax and enjoy warm summer days.",
    image: "photo-1572331165267-854da2b10ccc",
    panel: "Pool Area",
    facts: [
      ["01", "Clean Water", "The pool will need regular cleaning and proper maintenance."],
      ["02", "Sun Loungers", "Comfortable loungers will be placed near the pool."],
      ["03", "Safe Design", "A non-slip surface and secure access will improve safety."],
      ["04", "Summer Fun", "The pool will be a good place to spend time with family."]
    ],
    quote: "A pool can turn the garden into a relaxing summer retreat.",
    cards: [
      ["photo-1600566753086-00f18fb6b3ea", "Relaxing Space", "Plants and seating will make the area feel peaceful."],
      ["photo-1416879595882-3373a0480b5b", "Outdoor Living", "The garden will offer fun activities in warm weather."]
    ]
  },
  {
    title: "Smart Home Technology",
    kicker: "15 · THE HOME OF THE FUTURE",
    subtitle: "Modern technology can make a house safer and more convenient. I would like to control some home devices using my phone.",
    image: "photo-1600607687939-ce8a6c25118c",
    panel: "Smart Features",
    facts: [
      ["01", "Smart Lighting", "I will be able to switch lights on and off automatically."],
      ["02", "Temperature Control", "A smart thermostat will help keep rooms comfortable."],
      ["03", "Security Cameras", "Cameras can help me check the entrance and garden."],
      ["04", "Voice Control", "Some devices may respond to simple voice commands."]
    ],
    quote: "Technology should make everyday tasks easier, not more complicated.",
    cards: [
      ["photo-1600210492486-724fe5c67fb0", "Energy Control", "Smart devices can help reduce wasted electricity."],
      ["photo-1600607687920-4e2a09cf159d", "Daily Convenience", "Automatic systems save time and effort."]
    ]
  },
  {
    title: "Safety and Privacy",
    kicker: "16 · FEEL SAFE AT HOME",
    subtitle: "Safety is very important to me. My dream house will have strong doors, secure windows, outdoor lighting, and a reliable security system.",
    image: "photo-1600585154526-990dced4db0d",
    panel: "Safety First",
    facts: [
      ["01", "Secure Entrance", "A strong front door and good locks will protect the house."],
      ["02", "Outdoor Lights", "Lights near doors and paths will improve visibility at night."],
      ["03", "Fire Protection", "Smoke detectors and a fire extinguisher will be available."],
      ["04", "Private Garden", "A fence will provide more privacy for the family."]
    ],
    quote: "A real dream home should feel safe at every time of day.",
    cards: [
      ["photo-1600566753190-17f0baa2a6c3", "Peace of Mind", "Safety features help people feel more relaxed."],
      ["photo-1600607687644-c7171b42498f", "Private Spaces", "Good design protects personal space."]
    ]
  },
  {
    title: "Eco-Friendly Living",
    kicker: "17 · A BETTER FUTURE",
    subtitle: "I want my house to be friendly to the environment. Small choices, such as saving water and electricity, can make a positive difference.",
    image: "photo-1449158743715-0a90ebb6d2d8",
    panel: "Green Solutions",
    facts: [
      ["01", "Solar Panels", "Solar panels could produce some of the home's electricity."],
      ["02", "Natural Light", "Large windows can reduce the need for lights during the day."],
      ["03", "Water Saving", "Water-saving taps can reduce daily water use."],
      ["04", "Green Plants", "Trees and plants make the garden more attractive."]
    ],
    quote: "A better home can also help create a better environment.",
    cards: [
      ["photo-1501004318641-b39e6451bec6", "Natural Materials", "Wood and stone can add warmth to the design."],
      ["photo-1416879595882-3373a0480b5b", "Healthy Garden", "Plants support a greener outdoor environment."]
    ]
  },
  {
    title: "Family and Daily Life",
    kicker: "18 · MAKING MEMORIES",
    subtitle: "My dream house will be a place where my family can spend time together. We will eat meals, celebrate special days, and support one another.",
    image: "photo-1600210492486-724fe5c67fb0",
    panel: "Our Daily Activities",
    facts: [
      ["01", "Family Meals", "We will share stories and enjoy dinner around one table."],
      ["02", "Movie Nights", "The living room will be perfect for watching films together."],
      ["03", "Study Time", "Quiet rooms will help everyone read and learn."],
      ["04", "Celebrations", "The terrace and garden will be useful for special events."]
    ],
    quote: "The best part of a house is the people who fill it with love.",
    cards: [
      ["photo-1600607687939-ce8a6c25118c", "Time Together", "Shared activities help create happy memories."],
      ["photo-1600566753086-00f18fb6b3ea", "Friends and Guests", "A welcoming home brings people closer."]
    ]
  },
  {
    title: "My Dream House Budget",
    kicker: "19 · PLANNING FOR THE FUTURE",
    subtitle: "Building a dream house requires careful planning. The final cost depends on the location, size, materials, design, and local building prices.",
    image: "photo-1600585154340-be6161a56a0c",
    panel: "Important Budget Areas",
    facts: [
      ["01", "Land", "The first step is finding suitable land in a good location."],
      ["02", "Construction", "Walls, the roof, windows, and labor are major costs."],
      ["03", "Interior", "Furniture, kitchen equipment, and decorations need a budget."],
      ["04", "Future Costs", "Electricity, water, repairs, and cleaning must also be planned."]
    ],
    quote: "Good planning helps turn a big dream into a realistic goal.",
    cards: [
      ["photo-1600607687920-4e2a09cf159d", "Choose Priorities", "Safety and quality should come before unnecessary decoration."],
      ["photo-1600566753190-17f0baa2a6c3", "Save Step by Step", "A clear plan can make a large project easier to manage."]
    ]
  },
  {
    title: "Conclusion",
    kicker: "20 · MY FUTURE, MY DREAM",
    subtitle: "My dream house will be modern, comfortable, safe, and full of life. I hope to make this dream come true through hard work and careful planning.",
    image: "photo-1600585154526-990dced4db0d",
    panel: "Why I Love This Dream",
    facts: [
      ["01", "Beautiful Design", "A stylish house will reflect my taste and personality."],
      ["02", "Comfortable Life", "Every room will support rest, work, and family activities."],
      ["03", "A Green Future", "The garden and smart technology will support better living."],
      ["04", "My Goal", "I will work hard and plan carefully to achieve my dream."]
    ],
    quote: "My dream house is more than a place to live. It is a future I want to build.",
    cards: [
      ["photo-1600607687939-ce8a6c25118c", "A Place to Belong", "A home should bring comfort and happiness."],
      ["photo-1416879595882-3373a0480b5b", "Thank You!", "Thank you for listening to my presentation."]
    ]
  }
];

const container = document.getElementById("slide-container");
const dotsContainer = document.getElementById("dots");
const currentNumber = document.getElementById("current");
const progress = document.getElementById("progress");

let currentSlide = 0;

function imageUrl(id, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

function createSlide(data, index) {
  const slide = document.createElement("section");
  slide.className = "slide";

  if (index === 0) {
    slide.innerHTML = `
      <div class="slide-heading">
        <div>
          <p class="kicker">${data.kicker}</p>
          <h1>MY DREAM<br><span class="title-line">HOUSE.</span></h1>
        </div>
        <p class="subtitle">${data.subtitle}</p>
      </div>

      <div class="hero-grid">
        <img class="photo hero-photo"
          src="${imageUrl(data.image, 1300)}"
          alt="Beautiful modern dream house">

        <div class="panel">
          <div class="panel-title">${data.panel}</div>
          ${data.facts.map(f => `
            <div class="fact">
              <div class="fact-mark">${f[0]}</div>
              <div><strong>${f[1]}</strong><p>${f[2]}</p></div>
            </div>
          `).join("")}
          <div class="quote">${data.quote}</div>
        </div>
      </div>

      <div class="lower-grid">
        ${data.cards.map(card => `
          <article class="mini-card">
            <img class="photo" src="${imageUrl(card[0], 600)}" alt="${card[1]}" loading="lazy">
            <h3>${card[1]}</h3>
            <p>${card[2]}</p>
          </article>
        `).join("")}
        <article class="mini-card">
          <span class="tag">MY VISION</span>
          <h3>A Home for Life</h3>
          <p>A place for comfort, family, friendship, and beautiful memories.</p>
        </article>
      </div>
    `;
    return slide;
  }

  slide.innerHTML = `
    <div class="slide-heading">
      <div>
        <p class="kicker">${data.kicker}</p>
        <h2>${data.title.replace(" ", " ")}</h2>
      </div>
      <p class="subtitle">${data.subtitle}</p>
    </div>

    <div class="section-banner">
      <h3>${data.panel}</h3>
      <span>MY DREAM HOUSE · ${String(index + 1).padStart(2, "0")}</span>
    </div>

    <div class="feature-layout">
      <div>
        <img class="photo feature-photo"
          src="${imageUrl(data.image, 1100)}"
          alt="${data.title}"
          loading="lazy">

        <div class="quote">${data.quote}</div>
      </div>

      <div class="text-panel">
        <h3>Details and Ideas</h3>
        ${data.facts.map(f => `
          <div class="fact">
            <div class="fact-mark">${f[0]}</div>
            <div>
              <strong>${f[1]}</strong>
              <p>${f[2]}</p>
            </div>
          </div>
        `).join("")}

        <div class="feature-list">
          <div class="feature-item">
            <strong>My Idea</strong>
            <p>I want this part of the house to be practical, attractive, and comfortable.</p>
          </div>
          <div class="feature-item">
            <strong>My Goal</strong>
            <p>Good planning will help me create a home that suits my future needs.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lower-grid">
      ${data.cards.map(card => `
        <article class="mini-card">
          <img class="photo"
            src="${imageUrl(card[0], 600)}"
            alt="${card[1]}"
            loading="lazy">
          <h3>${card[1]}</h3>
          <p>${card[2]}</p>
        </article>
      `).join("")}
    </div>

    <div class="stats">
      <div class="stat"><strong>01</strong><span>COMFORT</span></div>
      <div class="stat"><strong>02</strong><span>DESIGN</span></div>
      <div class="stat"><strong>03</strong><span>QUALITY</span></div>
      <div class="stat"><strong>04</strong><span>HAPPINESS</span></div>
    </div>
  `;

  return slide;
}

slides.forEach((data, index) => {
  container.appendChild(createSlide(data, index));

  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", `Slide ${index + 1}`);

  dot.addEventListener("click", () => showSlide(index));

  dotsContainer.appendChild(dot);
});

const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slideElements.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });

  currentNumber.textContent = String(currentSlide + 1).padStart(2, "0");
  progress.style.width = ((currentSlide + 1) / slides.length) * 100 + "%";
}

document.getElementById("prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.getElementById("next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
});

showSlide(0);
