console.log(
    '%c Рендеримо список розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);

//![3] 
//* Створюємо масив об'єктів з даними розробників
//![4] 
//* Створюємо масив об'єктів з даними розробників
//![5] 
//* Створюємо масив об'єктів з даними розробників
//![6] 
//* Створюємо масив об'єктів з даними розробників

//![1] 
//* Створюємо дефолтний список розробників (4 особи)
let dataDevelopersList = 
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
				'./images/olha-d-1x.jpg', 
				'./images/olha-d-2x.jpg', 
				'./images/olha-d-3x.jpg'
				],
      tablet: [
				'./images/olha-t-1x.jpg', 
				'./images/olha-t-2x.jpg', 
				'./images/olha-t-3x.jpg'
				],    
      mobile: [
				'./images/olha-m-1x.jpg', 
				'./images/olha-m-2x.jpg', 
				'./images/olha-m-3x.jpg'
					],
			default: "./images/olha-d-1x.jpg",
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
				'./images/micola-d-1x.jpg', 
				'./images/micola-d-2x.jpg', 
				'./images/micola-d-3x.jpg'
				],
      tablet: [
				'./images/micola-t-1x.jpg', 
				'./images/micola-t-2x.jpg', 
				'./images/micola-t-3x.jpg'
				],    
      mobile: [
				'./images/micola-m-1x.jpg', 
				'./images/micola-m-2x.jpg', 
				'./images/micola-m-3x.jpg'
					],
			default: "./images/micola-d-1x.jpg",
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
				'./images/mihailo-d-1x.jpg', 
				'./images/mihailo-d-2x.jpg', 
				'./images/mihailo-d-3x.jpg'
				],
      tablet: [
				'./images/mihailo-t-1x.jpg', 
				'./images/mihailo-t-2x.jpg', 
				'./images/mihailo-t-3x.jpg'
				],    
      mobile: [
				'./images/mihailo-m-1x.jpg', 
				'./images/mihailo-m-2x.jpg', 
				'./images/mihailo-m-3x.jpg'
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


//![2] 
//* Перевірити на наяівність списку розробників у LocalStorage developerList 

if(localStorage.getItem('dataDevelopers'))
{
//? якщо данні є то ми їх забираємо з LocalStorage у dataDevelopersList
	dataDevelopersList = JSON.parse(localStorage.getItem('dataDevelopers'));

	console.log("Дані списку розробників взяті з LocalStorage", dataDevelopersList);
}else{
	console.log("Створюємо дефолтний список розробників");
	// const jsonDataDevelopersList = ;
	localStorage.setItem('dataDevelopers', JSON.stringify(dataDevelopersList))
}



// console.log('JSON-дані списку розробників:', jsonDataDevelopersList);

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