const sectionDetailElement = document.getElementById("detailCols");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === 3) {
        sectionDetailElement.innerHTML = `
        <div class="detail-cols">
            <div class="left-cols">
                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>
                        </div>

                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>


                    <div thumbsSlider="" class="swiper mySwiper">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>

                            <div class="swiper-slide">
                                <img src="/public/assets/images/apartment.jpeg" alt="">
                            </div>
                        </div>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
                    <script src="/scripts/index.js"></script>
            </div>

            <div class="right-cols">
                <div class="title-cols">
                    <h1>${data[i].title.en}</h1>
                </div>

                <div class="location-cols">
                    <span><i class="fas fa-home"></i> Apartment</span>
                    <span><i class="fas fa-map-marker-alt"></i>Toul Kork</span>
                </div>

                <div class="location-cols">
                    <span><i class="fa-solid fa-bed"></i> 2 Bedrooms</span>
                    <span><i class="fa-solid fa-bath"></i> 2 Bathrooms</span>
                    <span><i class="fas fa-shield-alt"></i> Secure 100%</span>
                    <span><i class="far fa-calendar"></i> Since: <strong>2025-11-10</strong></span>
                </div>

                <div class="feature-cols">
                    <h1>Feature</h1>

                    <div class="cols-content">
                        <span><i class="far fa-dot-circle"></i> Gym</span>
                        <span><i class="far fa-dot-circle"></i> Balcony</span>
                        <span><i class="far fa-dot-circle"></i> Parking</span>
                    </div>
                </div>

                <div class="description-cols">
                    <h1>Description</h1>
                    <p>
                        Discover the ideal urban living space in this fully furnished studio unit, perfectly situated on the 6th floor of TK Star
                        Condo in TK. With a generous gross area of 52.49 square meters (net 40.2 sqm), this thoughtfully designed unit combines
                        comfort and practicality, offering an efficient layout that maximizes both space and functionality. Ready for immediate 
                        occupancy, it comes fully furnished with quality fixtures and fittings, allowing you to move in effortlessly and start enjoying
                        your new home from day one.

                        <br><br>

                        This unit also offers the advantages of long-term investment with its freehold title, providing peace of mind and lasting 
                        value. Ideally located opposite TK Avenue, residents enjoy unmatched convenience with a wide array of international schools, 
                        office buildings, shopping centers, and lifestyle amenities just steps away. Perfect for professionals, expatriates, or 
                        anyone seeking a modern, hassle-free urban lifestyle, this studio truly embodies both comfort and convenience in one 
                        exceptional package.
                    </p>
                </div>

                <div class="map">
                    <h1>Location</h1>

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3909.101286338943!2d104.8865743!3d11.5445916!3m2!1i1024!2i768!4f13.1!2m1!1spse%20institute!5e0!3m2!1sen!2skh!4v1764572232016!5m2!1sen!2skh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div class="form-detail">
                    <h1>Agent Contact </h1>
                    <p>Have questions or want a viewing? Get in touch for quick support and property details.</p>

                    <form action="">
                        <div class="subscribe__row">
                            <label for="">Full name</label>
                            <input class="input" type="text" placeholder="Enter your fullname" aria-label="Name">
                        </div>

                        <div class="subscribe__row">
                            <label for="">Email</label>
                            <input class="input" type="email" placeholder="Enter your email" aria-label="Name">
                        </div>

                        <div class="subscribe__row">
                            <label for="">How can agent help?</label>
                            <textarea name="" id="" placeholder="Enter your message..."></textarea>
                        </div>

                        <div class="subscribe__row">
                            <input class="sub-btn" type="submit" value="Subscribe">
                        </div>  
                    </form>
                </div>
            </div>
        </div>
        `;
        break;
      }
    }

    // disaplay on the screen
    const sectionSaleElement = document.getElementById("saleColsCard");

    for (let i = 0; i < 4; i++) {
      sectionSaleElement.innerHTML += `
            <article class="card-items" href="">
                <div class="card-items_media">
                    <a href="/pages/detail-card/index.html?id=${data[i].id}"><img src="${data[i].images}" alt=""></a>
                </div>

                <div class="card-items__body">
                    <div class="top-cols-item">
                        <h2>USD ${data[i].price}</h2>
                        <small><i class="fa-solid fa-star"></i> 4.9/5.0</small>
                    </div>

                    <h1 class="title-cols">${data[i].title.en}</h1>
                    <p class="txt-cols">${data[i].location.district}</p>
                    <small>
                        <i class="fa-solid fa-bed"></i> ${data[i].bedrooms} Bedroom
                        <i class="fa-solid fa-bath"></i> ${data[i].bathrooms} Bathroom
                    </small>

                    <div class="card-btn">
                        <a href="/pages/detail-card/index.html?id=${data[i].id}">View Detail</a>
                    </div>
                </div>
            </article>
        `;
    }
  });

// // fetch("../../public/data/properties.json")
// //  .then((response) => response.json())
// //  .then((data) => {
// //     if (data.length > 0) {

// }

// //  })
