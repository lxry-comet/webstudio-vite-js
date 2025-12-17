console.log(
    '%c Рендеримо список розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

const dataDevelopersList = 
[
	{
    name: "Ігор Дем'яненко",
		position: "Product Designer",
		images: {
      desktop: [
				'./images/igor-d-1x.jpg', 
				'./images/igor-d-2x.jpg', 
				'./images/igor-d-3x.jpg'
				],
      tablet: [
				'./images/igor-t-1x.jpg', 
				'./images/igor-t-2x.jpg', 
				'./images/igor-t-3x.jpg'
				],    
      mobile: [
				'./images/igor-m-1x.jpg', 
				'./images/igor-m-2x.jpg', 
				'./images/igor-m-3x.jpg'
					],
			default: "./images/igor-d-1x.jpg",
      },
			icons: [
				"./images/symboldefts.svg#instagram", 
				"./images/symboldefts.svg#twitter", 
				"./images/symboldefts.svg#facebook",
				"./images/symboldefts.svg#linkedin"
			]
	},
	{
    name: "Ольга Рєпіна",
		position: "Frontend Developer",
		images: {
      desktop: [
				'./images/olga-d-1x.jpg', 
				'./images/olga-d-2x.jpg', 
				'./images/olga-d-3x.jpg'
				],
      tablet: [
				'./images/olga-t-1x.jpg', 
				'./images/olga-t-2x.jpg', 
				'./images/olga-t-3x.jpg'
				],    
      mobile: [
				'./images/olga-m-1x.jpg', 
				'./images/olga-m-2x.jpg', 
				'./images/olga-m-3x.jpg'
					],
			default: "./images/olga-d-1x.jpg",
      },
			icons: [
				"./images/symboldefts.svg#instagram", 
				"./images/symboldefts.svg#twitter", 
				"./images/symboldefts.svg#facebook",
				"./images/symboldefts.svg#linkedin"
			]
	},
	{
    name: "Микола Тарасов",
		position: "Marketing",
		images: {
      desktop: [
				'./images/mykola-d-1x.jpg', 
				'./images/mykola-d-2x.jpg', 
				'./images/mykola-d-3x.jpg'
				],
      tablet: [
				'./images/mykola-t-1x.jpg', 
				'./images/mykola-t-2x.jpg', 
				'./images/mykola-t-3x.jpg'
				],    
      mobile: [
				'./images/mykola-m-1x.jpg', 
				'./images/mykola-m-2x.jpg', 
				'./images/mykola-m-3x.jpg'
					],
			default: "./images/mykola-d-1x.jpg",
      },
			icons: [
				"./images/symboldefts.svg#instagram", 
				"./images/symboldefts.svg#twitter", 
				"./images/symboldefts.svg#facebook",
				"./images/symboldefts.svg#linkedin"
			]
	},
	{
    name: "Михайло Єрмаков",
		position: "Ui Designer",
		images: {
      desktop: [
				'./images/myhailo-d-1x.jpg', 
				'./images/myhailo-d-2x.jpg', 
				'./images/myhailo-d-3x.jpg'
				],
      tablet: [
				'./images/myhailo-t-1x.jpg', 
				'./images/myhailo-t-2x.jpg', 
				'./images/myhailo-t-3x.jpg'
				],    
      mobile: [
				'./images/myhailo-m-1x.jpg', 
				'./images/myhailo-m-2x.jpg', 
				'./images/myhailo-m-3x.jpg'
					],
			default: "./images/myhilo-d-1x.jpg",
      },
			icons: [
				"./images/symboldefts.svg#instagram", 
				"./images/symboldefts.svg#twitter", 
				"./images/symboldefts.svg#facebook",
				"./images/symboldefts.svg#linkedin"
			]
	}
];
// console.log("dataDevelopersList:", dataDevelopersList[0].images.tablet[1]);
const developersList = document.querySelector('.team__list');

const markup = dataDevelopersList.map(item =>
	 `<li class="team__item">
							<picture>
								<source
                  srcset="
                    ${item.images.desktop[0]} 1x,
                    ${item.images.desktop[1]} 2x,
                    ${item.images.desktop[2]} 3x
                  "
                  media="(min-width: 1200px)"
                />
								<source
									srcset="
                    ${item.images.tablet[0]} 1x,
                    ${item.images.tablet[1]} 2x,
                    ${item.images.tablet[2]} 3x
									"
									media="(min-width: 768px)"/>
								<source
									srcset="
                    ${item.images.mobile[0]} 1x,
                    ${item.images.mobile[1]} 2x,
                    ${item.images.mobile[2]} 3x
										"
										media="(min-width: 480px)"/>
								<img
									class="team__photo"
									src="${item.images.default}"
									width="270"
									alt="${item.name}"
					  		/>
							</picture>

					  <p class="team__text">${item.name}</p>
					  <h3 class="team__position">${item.position}</h3>
					  <div class="team__social-media">
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${item.icons[0]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${item.icons[1]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${item.icons[2]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${item.icons[3]}"></use>
						  </svg>
						</a>
					  </div>
					</li>`
				).join('');
developersList.innerHTML = markup;

console.log('Наші розробники:', dataDevelopersList);

console.log('Розмітка списку розробників:', markup);