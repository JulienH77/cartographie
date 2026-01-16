const translations = {
			fr: {
				tab_title:"Productions cartographiques — Wonderdraft",

				nav_accueil: "Accueil",
				nav_qgis: "Cartes QGIS",
				nav_wonderdraft: "Cartes Wonderdraft",
				nav_30dmc: "30 Day Map Challenge",

				intro_title: "Productions cartographiques sur Wonderdraft",
				intro_desc: "Toutes les cartes présentées ci-dessous ont été réalisées sous Wonderdraft, uniquement par curiosité et par envie d’expérimenter. Aucune retouche n’a été effectuée sur un logiciel externe.<br><br>Pour consulter les cartes en bonne qualité, il suffit de cliquer dessus.",

				sect1_title: "Ma première carte sur Wonderdraft",
				sect1_prod: "Cette carte a été produite sur Wonderdraft.",
				sect1_desc: "Je voulais essayer de faire une île avec en découvrant le logiciel.",

				sect2_title: "La Haute-Marne dans un style ancien",
				sect2_prod: "Cette carte a été produite sur Wonderdraft.",
				sect2_desc: "Je voulais faire une carte de mon département avec un style ancien (ça rend BEAUCOUP mieux en papier).",

				footer: "Réalisé par moi-même – pour mon propre plaisir",
			},

			en: {
				tab_title:"Map productions — Wonderdraft",

				nav_accueil: "Home",
				nav_qgis: "QGIS Maps",
				nav_wonderdraft: "Wonderdraft Maps",
				nav_30dmc: "30 Day Map Challenge",

				intro_title: "Map productions using Wonderdraft",
				intro_desc: "All the maps shown below were created using Wonderdraft, purely out of curiosity and a desire to experiment. No editing was done using external software.<br><br>To view the maps in high quality, simply click on them.",

				sect1_title: "My first map on Wonderdraft",
				sect1_prod: "This map was created using Wonderdraft.",
				sect1_desc: "I wanted to try making an island while exploring the software.",

				sect2_title: "Haute-Marne in an old-fashioned style",
				sect2_prod: "This map was created using Wonderdraft.",
				sect2_desc: "I wanted to make a map of my department in an old style (it looks MUCH better on paper).",
				
				footer: "Created by me – for my own enjoyment",
			},

			zh: {
				tab_title:"地圖製作——Wonderdraft",
				
				nav_accueil: "歡迎",
				nav_qgis: "QGIS地圖",
				nav_wonderdraft: "Wonderdraft卡牌",
				nav_30dmc: "30 天地圖挑戰",

				intro_title: "使用 Wonderdraft 製作地圖",
				intro_desc: "以下所有地圖均使用 Wonderdraft 製作，純粹出於好奇和實驗目的。未使用任何外部軟體進行編輯。 <br><br>要查看高清地圖，只需點擊即可。",

				sect1_title: "我在 Wonderdraft 上的第一張地圖",
				sect1_prod: "此地圖使用 Wonderdraft 製作。",
				sect1_desc: "我想在探索軟體的過程中嘗試創建一個島嶼。",

				sect2_title: "古色古香的上馬恩省",
				sect2_prod: "此地圖使用 Wonderdraft 製作。",
				sect2_desc: "我想用老式風格繪製我們部門的地圖（在紙上看起來好得多）。",
				
				footer: "我自己做的——純粹為了自娛自樂",
			}
		};

// vérifie si l'utilisateur a déjà choisi une langue
const savedLang = localStorage.getItem("lang");

// récupère la langue du navigateur
const browserLang = navigator.language.slice(0, 2);

// décide quelle langue utiliser au chargement
const lang = savedLang || (translations[browserLang] ? browserLang : "fr");

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = translations[lang].tab_title;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setLang(newLang) {
  if (!translations[newLang]) return; // sécurité
  localStorage.setItem("lang", newLang); // mémorise
  applyTranslations(newLang);           // applique
  langBtn.textContent = newLang.toUpperCase(); // change texte du bouton
}

applyTranslations(lang);   // traduit la page au chargement
langBtn.textContent = lang.toUpperCase(); // affiche la bonne langue dans le bouton