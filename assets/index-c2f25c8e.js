import"./script-b131541d.js";console.log('%c Рендеримо список розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");const i=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:["./images/igor-d-1x.jpg","./images/igor-d-2x.jpg","./images/igor-d-3x.jpg"],tablet:["./images/igor-t-1x.jpg","./images/igor-t-2x.jpg","./images/igor-t-3x.jpg"],mobile:["./images/igor-m-1x.jpg","./images/igor-m-2x.jpg","./images/igor-m-3x.jpg"],default:"./images/igor-d-1x.jpg"},icons:["./images/symboldefts.svg#instagram","./images/symboldefts.svg#twitter","./images/symboldefts.svg#facebook","./images/symboldefts.svg#linkedin"]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:["./images/olha-d-1x.jpg","./images/olha-d-2x.jpg","./images/olha-d-3x.jpg"],tablet:["./images/olha-t-1x.jpg","./images/olha-t-2x.jpg","./images/olha-t-3x.jpg"],mobile:["./images/olha-m-1x.jpg","./images/olha-m-2x.jpg","./images/olha-m-3x.jpg"],default:"./images/olha-d-1x.jpg"},icons:["./images/symboldefts.svg#instagram","./images/symboldefts.svg#twitter","./images/symboldefts.svg#facebook","./images/symboldefts.svg#linkedin"]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:["./images/micola-d-1x.jpg","./images/micola-d-2x.jpg","./images/micola-d-3x.jpg"],tablet:["./images/micola-t-1x.jpg","./images/micola-t-2x.jpg","./images/micola-t-3x.jpg"],mobile:["./images/micola-m-1x.jpg","./images/micola-m-2x.jpg","./images/micola-m-3x.jpg"],default:"./images/micola-d-1x.jpg"},icons:["./images/symboldefts.svg#instagram","./images/symboldefts.svg#twitter","./images/symboldefts.svg#facebook","./images/symboldefts.svg#linkedin"]},{name:"Михайло Єрмаков",position:"Ui Designer",images:{desktop:["./images/mihailo-d-1x.jpg","./images/mihailo-d-2x.jpg","./images/mihailo-d-3x.jpg"],tablet:["./images/mihailo-t-1x.jpg","./images/mihailo-t-2x.jpg","./images/mihailo-t-3x.jpg"],mobile:["./images/mihailo-m-1x.jpg","./images/mihailo-m-2x.jpg","./images/mihailo-m-3x.jpg"],default:"./images/myhilo-d-1x.jpg"},icons:["./images/symboldefts.svg#instagram","./images/symboldefts.svg#twitter","./images/symboldefts.svg#facebook","./images/symboldefts.svg#linkedin"]}],a=document.querySelector(".team__list"),e=i.map(s=>`<li class="team__item">
							<picture>
								<source
                  srcset="
                    ${s.images.desktop[0]} 1x,
                    ${s.images.desktop[1]} 2x,
                    ${s.images.desktop[2]} 3x
                  "
                  media="(min-width: 1200px)"
                />
								<source
									srcset="
                    ${s.images.tablet[0]} 1x,
                    ${s.images.tablet[1]} 2x,
                    ${s.images.tablet[2]} 3x
									"
									media="(min-width: 768px)"/>
								<source
									srcset="
                    ${s.images.mobile[0]} 1x,
                    ${s.images.mobile[1]} 2x,
                    ${s.images.mobile[2]} 3x
										"
										media="(min-width: 480px)"/>
								<img
									class="team__photo"
									src="${s.images.default}"
									width="270"
									alt="${s.name}"
					  		/>
							</picture>

					  <p class="team__text">${s.name}</p>
					  <h3 class="team__position">${s.position}</h3>
					  <div class="team__social-media">
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${s.icons[0]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${s.icons[1]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${s.icons[2]}"></use>
						  </svg>
						</a>
						<a class="team__social-media-link" href="./">
						  <svg class="team__social-media-icon" width="20px" height="20px">
							<use href="${s.icons[3]}"></use>
						  </svg>
						</a>
					  </div>
					</li>`).join("");a.innerHTML=e;console.log("Наші розробники:",i);console.log("Розмітка списку розробників:",e);
