const translations = {
			fr: {
				tab_title:"Productions cartographiques — QGIS",
				
				nav_accueil: "Accueil",
				nav_qgis: "Cartes QGIS",
				nav_wonderdraft: "Cartes Wonderdraft",
				nav_30dmc: "30 Day Map Challenge",

				title: "MES CARTOGRAPHIES",

				texte1: "Passionné par la géomatique, j’ai créé ce site pour partager les cartes que je réalise pendant mon temps libre. Pour moi, la cartographie est bien plus qu’un outil technique : c’est un terrain d’exploration, un moyen de raconter des histoires, de représenter le monde sous différents angles.",
				texte2: "Ce portfolio est à la fois un carnet de bord et un laboratoire : j’y expérimente différents styles, je teste des rendus, des approches visuelles et techniques, parfois classiques, parfois plus audacieuses. e n’ai pas envie de me limiter à un seul style ou à une seule façon de faire. Ce qui me plaît, c’est justement d’essayer, d’apprendre et d’évoluer en permanence.",
				texte3: "Carte réaliste, stylisée, minimaliste ou artistique : chaque projet est une occasion d’aller un peu plus loin dans ma compréhension de la carte comme objet graphique et informatif.",

				mini_qgis: "Cartes QGIS",
				mini_qgis_desc: "Analyses spatiales, cartes thématiques et rendus cartographiques.",

				mini_wonderdraft: "Cartes illustrées",
				mini_wonderdraft_desc: "Cartes stylisées, fantasy ou narratives réalisées avec Wonderdraft.",

				mini_30dmc: "30 Day Map Challenge",
				mini_30dmc_desc: "Explorations cartographiques quotidiennes autour de thèmes imposés.",

				footer: "Réalisé par moi-même – pour mon propre plaisir",
			},

			en: {
				tab_title:"Map productions — QGIS",
				
				nav_accueil: "Home",
				nav_qgis: "QGIS Maps",
				nav_wonderdraft: "Wonderdraft Maps",
				nav_30dmc: "30 Day Map Challenge",

				title: "MY MAPS",

				texte1: "Passionate about geomatics, I created this site to share the maps I make in my free time. For me, cartography is much more than a technical tool: it's a field of exploration, a way to tell stories, to represent the world from different perspectives.",
				texte2: "This portfolio is both a logbook and a laboratory: I experiment with different styles, I test renderings, visual and technical approaches, sometimes classic, sometimes more daring. I don't want to limit myself to a single style or a single way of doing things. What I enjoy is precisely trying, learning, and constantly evolving.",
				texte3: "Map Realistic, stylized, minimalist, or artistic: each project is an opportunity to delve a little deeper into my understanding of the map as a graphic and informative object.",

				mini_qgis: "QGIS Maps",
				mini_qgis_desc: "Spatial analyses, thematic maps, and cartographic renderings.",

				mini_wonderdraft: "Illustrated Maps",
				mini_wonderdraft_desc: "Stylized, fantasy, or narrative maps created with Wonderdraft.",

				mini_30dmc: "30 Day Map Challenge",
				mini_30dmc_desc: "Daily cartographic explorations around assigned themes.",

				footer: "Created by me – for my own enjoyment",
			},

			zh: {
				tab_title:"地圖製作 — QGIS",
				
				nav_accueil: "歡迎",
				nav_qgis: "QGIS地圖",
				nav_wonderdraft: "Wonderdraft卡牌",
				nav_30dmc: "30 天地圖挑戰",

				title: "我的地圖",

				texte1: "我熱愛地理資訊學，創建這個網站是為了分享我閒暇時製作的地圖。對我而言，製圖遠不止於一種科技工具：它是一個探索的領域，一種說故事的方式，一種從不同視角展現世界的方式。",
				texte2: "這個作品集既是我的創作日誌，也是一個實驗室：我嘗試不同的風格，測試渲染效果、視覺和技術方法，有時偏向經典，有時則更大膽創新。我不想將自己局限於單一的風格或創作方式。我享受的正是嘗試、學習、不斷進步的過程。",
				texte3: "寫實的、風格化的、極簡的或藝術化的地圖：每個項目都是一個機會，讓我更深入地了解地圖作為一種圖形和資訊對象的本質。",

				mini_qgis: "QGIS地圖",
				mini_qgis_desc: "空間分析、專題地圖和製圖渲染。",

				mini_wonderdraft: "插圖地圖",
				mini_wonderdraft_desc: "使用 Wonderdraft 創建的風格化、奇幻或敘事地圖。",

				mini_30dmc: "30 天地圖挑戰",
				mini_30dmc_desc: "每日圍繞指定主題進行地圖繪製探索。",

				footer: "我自己做的——純粹為了自娛自樂",
			}
		};

		const userLang = navigator.language.slice(0, 2);
		const lang = translations[userLang] ? userLang : "fr";

		document.documentElement.lang = lang;

		document.querySelectorAll("[data-i18n]").forEach(el => {
			const key = el.dataset.i18n;
			if (translations[lang][key]) {
				el.innerHTML = translations[lang][key];
			}
		});
