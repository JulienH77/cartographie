const translations = {
			fr: {
				tab_title:"Productions cartographiques — QGIS",
				
				nav_accueil: "Accueil",
				nav_qgis: "Cartes QGIS",
				nav_wonderdraft: "Cartes Wonderdraft",
				nav_30dmc: "30 Day Map Challenge",

				title: "Productions cartographiques sur QGIS",
				title_desc: "Toutes les cartes présentées ci-dessous ont été réalisées sous QGIS (3.34), uniquement par curiosité et par envie d’expérimenter. Aucune retouche n’a été effectuée sur un logiciel externe.<br><br>Pour consulter les cartes en bonne qualité, il suffit de cliquer dessus.",
				
				sect1_title: "LA ZONE DE VISIBILITÉ<br>DE NOTRE-DAME DE PARIS",
				sect1_prod: "Cette carte a été produite à partir d’un MNS (Modèle Numérique de Surface) et du plugin <em>Visibility Analysis</em>",
				sect1_desc: "Cette carte est un test. Je voulais essayé le plugin mais mon ordinateur avait du mal a suivre si la zone d'étude était trop éloignée. Je me suis donc contenté de 500 mètres.",
				
				sect2_title: "LA ZONE DE VISIBILITÉ DE LA TOUR EFFEIL",
				sect2_prod: "Cette carte a été produite à partir d’un MNS (Modèle Numérique de Surface) et du plugin <em>Visibility Analysis</em>.",
				sect2_desc: "J’ai d’abord délimité le contour du sujet à l’aide de la couche des bâtiments de la BDTOPO, puis généré une grille de points avec un espacement d’environ 3 mètres. Un second calcul m’a permis de définir le rayon d’observation et l’altitude de visualisation (1,60 m, correspondant à la hauteur moyenne d’une personne). Une fois les calculs terminés, je me suis concentré sur l’habillage de la carte. Et oui… le phare de la tour Eiffel est malheureusement loupé.",
				
				sect3_title: "LA FRANCE ET SES RÉGIONS EN ORIGAMI",
				sect3_prod: "Cette carte a été réalisée exclusivement avec les outils natifs de QGIS.",
				sect3_desc: "À partir des régions en format GeoJSON, je les ai d’abord simplifiées, puis séparées en 12 couches distinctes. J’ai supprimé les trous et les îles dans les géométries avant d’extraire les sommets de chaque région. J’ai ensuite appliqué une triangulation de Delaunay, région par région. Certains triangles ont dû être supprimés manuellement car ils ne respectaient pas la forme réelle des régions. Le travail s’est terminé par la symbologie.",
				
				sect4_title: "LES BANCS DE CHAUMONT",
				sect4_prod: "Cette carte a été produite avec les outils de base de QGIS et un habillage issu des données de la BDTOPO.",
				sect4_desc: "Le plus long a été la collecte de l’information : de nombreuses heures passées sur Google Street View à repérer les bancs rue par rue, complétées par des relevés sur le terrain dans les zones non couvertes. Les deux versions présentées ne sont pas totalement à jour… et honnêtement, je n’ai pas eu le courage de refaire toutes les rues.",
				
				sect5_title: "LE TRAJET DE MON VOL VERS LA CHINE",
				sect5_prod: "Cette carte a été réalisée avec les outils de base de QGIS et deux plugins.",
				sect5_desc1: "J’ai utilisé le plugin <em>Globe Builder</em> afin de produire une projection en globe. Les trajectoires ont été relevées sur Flightradar24, puis retracées manuellement dans QGIS sous forme de segments horaires, avec pour chacun une heure de départ et une heure d’arrivée.",
				sect5_desc2: "J'ai ensuite utilisé la fonction pour ajouter des points le long d'un ligne tous les X mètres mais je ne sais plus combien j'ai pu mettre.<br><br> Pour pouvoir ensuite donner des horaires précis aux points j'ai créer des champs calculés :<br><span style=\"font-size: 0.8em;\">Je commence par créer le champ timstamp_s (en décimal) et ensuite je crée le champ timstamp_t (en texte)</span>",
				sect5_desc3: "J'ai ensuite lancé le plugin TimeManager et fait défiler l'animation temporelle. Je n'ai plus eu qu'a fusionner les images capturées par le plugin pour faire ce GIF.",
				
				sect6_title: "MON VOYAGE EN CHINE",
				sect6_prod: "Cette carte a été produite avec les outils de base de QGIS.",
				sect6_desc: "Rien de plus facile, j'ai du chercher le fond de carte adapté et j'ai placé à la main les points et lignes. Plus qu'à faire l'habillage de la carte.",
				
				sect7_title: "LES ROUTES EN DIRECTION DE CHAUMONT",
				sect7_prod: "Cette carte a été produite avec les outils de base de QGIS.",
				sect7_desc: "Je me suis encore une fois \"baladé\" sur Google StreetView à la recherche des panneaux de directions (hors autoroute) indiquant Chaumont le plus loin. Le visuel de la carte n'est vraiment pas bon mais je me suis dépêché sur la fin car je commençais à en avoir marre.",
				
				sect8_title: "DATE DE CRÉATION DES BÂTIMENTS ENCORE EXISTANT A CHAUMONT",
				sect8_prod: "Cette carte a été produite via les données de la BDTOPO et deux plugins, TimeManager et OpenTopography DEM Downloader.",
				sect8_desc1: "J'ai ajouté dans QGIS les données de OpenTopography DEM Downloader pour le dénivelé du terrain et j'y ai ajouté les données de la BDTOPO.",
				sect8_desc2: "Ensuite j'ai affiché en gris les bâtiments encore debout n'ayant pas de date de création dans les données et en rouge ceux en contenant une. J'ai mis le plugin TimeManager en marche avec le champ des données des bâtiments et j'ai lancé l'enregistrement que j'ai transformé en GIF. Les dates du GIF vont de 1450 à 2020 mais dans les données elles varient de 1300 à 2018.",
				
				sect9_title: "VISUALISATION 3D DE LA HAUTE-MARNE",
				sect9_prod: "Cette carte a été produite via les données du MNT de l'IGN.",
				sect9_desc: "J'ai segmenté tous les 50m (je crois) le raster pour ensuite les vectoriser et y ajouter les couleurs. J'ai placé par dessus le relief en semi transparent et je trouve ce rendu juste magnifique.",
				
				sect10_title: "TEST DE CARTE DE DÉPLACEMENT",
				sect10_prod: "Cette carte a été produite avec ma mémoire, GoogleMaps et Flightradar24.",
				sect10_desc1: "J'ai retracé à la main les trajets sur les routes pour visualiser où nous sommes passé. Pour ce qui est des horaires, J'ai juste mis l'heure de départ et l'heure d'arrivée. Ensuite j'ai utilisé la fonction native de QGIS pour tracer des points tous les X km sur les lignes et j'y ai mis l'image du type de transport dessus et j'ai ajouté deux champs calculé. Ce sont les mêmes que pour cette carte ci : Mon voyage vers la chine.",
				sect10_desc2: "J'ai par la suite fait un atlas pour imprimer chaque image que j'ai fusionné pour faire ce fichier mp4 avec Shutter encoder.",
				sect10_desc3: "Voici une vidéo test à refaire car pas mal de problème d'images dans la vidéo au mauvais endroit.",
				
				sect11_title: "CARTE DE LA ROUTE DE LA SOIE",
				sect11_prod: "Cette carte a été produite avec wikipédia et quelques données sur internet.",
				sect11_desc1: "J'ai toujours voulu la faire et je me suis lancé, je n'ai que les routes du 1er/2ème siècle et du 8ème (en plus de celle de Marco Polo) mais c'est déjà un beau bordel.",
				sect11_desc2: "J'ai retracé à la main tous les trajets sur les routes et j'ai placé aussi toutes les villes. J'ai cherché pour avoir les délimitations des territoires de l'époque mais malheureusement je n'ai rien trouvé d'exploitable.",
				sect11_desc3: "Le plus complexe a été d'ajouter les noms des pays sur leur longueurs, avec une taille différentes et orientés vers le nord. Il y a quelques déformation en Afrique et en Asie du Sud-Est mais cela rend bien et j'en suis content.",
				sect11_desc4: "Pour ce faire j'ai du tracer une ligne en générateur de géométrie qui est segmenté pour s'orienter : ",
				sect11_desc5: "J'ai ensuite tracé des points sur la géométrie en laissant de la place avant et après. Sur cette couche de points j'ai ajouté un champ avec les lettres pour les afficher en symbole et non en étiquette car il fallait que les noms des pays restent sous la thématique de la carte comme un fond de carte : ",
				sect11_desc6: "Ensuite pour l'inclinaison de ceux-ci j'ai mis ce code ci : ",
				sect11_desc7: "Puis vient le code pour la taille des caractères où j'ai récupéré la longueur de la ligne faite avec le générateur de géométrie tracé avant (le résultat est en mètres à l'échelle) :",
				sect11_desc8: "J'ai eu du mal pour le choix des couleurs (que je n'apprécie toujours pas trop) mais voici le résultat final avec un planisphère et deux cartes en globe.",
				
				sect12_title: "CARTE DE BORDEAUX",
				sect12_prod: "Cette carte ont été produite via les données de la BDTOPO de l'IGN.",
				sect12_desc: "J'ai voulu faire un rendu plutôt joli en cercle avec un code qui n'affichait que les données de chaque couche à X mètres de distance au lieu de faire un vulgaire masque blanc..... Je trouve quand même le rendu très joli avec ces chemin de fer/tram en orange et les routes principales en bleu.",
				
				sect13_title: "CARTES DE L'AUSTRALIE",
				sect13_prod: "Ces cartes ont été produite via les données de l'opendata de l'Australie.",
				sect13_desc1: "J'ai voulu voir comment été produite les données, comment été divisé le pays (départements, villes etc) (et j'étais perdu au début ahah...) et j'ai voulu découvrir le pays via ses données.",
				sect13_desc2: "Voici donc plusieurs cartes faites à la va vite :",
				sect13_carte1: "Sur l'élévation du pays (bien délimité et non flou)",
				sect13_carte2: "Sur les routes principales",
				sect13_carte3: "Sur les chemins de fer",
				sect13_carte4: "Sur la densité de population",
				
				sect14_title: "LA ZONE DE VISIBILITÉ<br>DU MONT-BLANC À 300KM",
				sect14_prod: "Cette carte a été produite avec la BDATLI de l'IGN et le plugin Visibility Analysis.",
				sect14_desc: "Le plus long a été d'insérer les vingtaines de fichiers par département. Ensuite je les ai fusionné puis j'ai lancé le plugin Visibility Analysis sur un rayon de 300km. J'avais la flemme de faire plus, on verra peut-être plus tard.",
				
				sect15_title: "LES VIGNOBLES AOP DE FRANCE",
				sect15_prod: "Cette carte a été produite via les données de l'INAO, de Wikipédia et de la BDTOPO de l'IGN.",
				sect15_desc: "Je suis passé par énormément de styles et de couleurs différentes (formes simplifiées, couleurs \"liège\" etc) mais j'ai retenu celle-ci car je ne souhaitais plus me casser la tête sur le sujet et que je la trouve plutôt correct. Le plus contraignant de cette carte était le filtrage manuel du fichier CSV de l'INAO avec ses 1,2 millions de lignes. Ce qui veut dire que je n'ai en surface QUE les données AOP et non les IGP (ce qui augmenterait par exemple la surface de la Lorraine) par pure flemme. J'avais des idées de décoration de la carte mais j'ai abandonné par manque de temps car je devais l'imprimer avant mon départ en Australie.",

				v1: "Version 1",
				v2: "Version 2",
				v3: "Version 3",
				
				footer: "Réalisé par moi-même – pour mon propre plaisir",
			},

			en: {
				tab_title:"Map productions — QGIS",
				
				nav_accueil: "Home",
				nav_qgis: "QGIS Maps",
				nav_wonderdraft: "Wonderdraft Maps",
				nav_30dmc: "30 Day Map Challenge",

				title: "Map productions using QGIS",
				title_desc: "All the maps shown below were created using QGIS (3.34), purely out of curiosity and a desire to experiment. No editing was done using external software.<br><br>To view the maps in high quality, simply click on them.",
				
				sect1_title: "THE VISIBILITY ZONE OF NOTRE-DAME DE PARIS",
				sect1_prod: "This map was produced using a DSM (Digital Surface Model) and the <em>Visibility Analysis</em> plugin.",
				sect1_desc: "This map is a test. I wanted to try the plugin, but my computer struggled to keep up if the study area was too far away. So I limited it to 500 meters.",
				
				sect2_title: "THE EIFFEL TOWER'S VISIBILITY ZONE",
				sect2_prod: "This map was produced from a DSM (Digital Surface Model) and the <em>Visibility Analysis</em> plugin.",
				sect2_desc: "I first delineated the subject's outline using the BDTOPO building layer, then generated a point grid with a spacing of approximately 3 meters. A second calculation allowed me to define the observation radius and the viewing altitude (1.60 m, corresponding to the average height of a person). Once the calculations were complete, I focused on adding texture to the map. And yes… the Eiffel Tower lighthouse is unfortunately missing.",
				
				sect3_title: "FRANCE AND ITS REGIONS IN ORIGAMI",
				sect3_prod: "This map was created exclusively using QGIS's native tools.",
				sect3_desc: "Starting with the GeoJSON regions, I first simplified them, then separated them into 12 distinct layers. I removed holes and islands from the geometries before extracting the vertices of each region. I then applied Delaunay triangulation, region by region. Some triangles had to be manually removed because they didn't accurately represent the shape of the regions. The work concluded with the application of symbology.",
				
				sect4_title: "THE BENCHES OF CHAUMONT",
				sect4_prod: "This map was produced using basic QGIS tools and a design based on BDTOPO data.",
				sect4_desc: "The most time-consuming part was gathering the information: many hours spent on Google Street View locating benches street by street, supplemented by on-site surveys in areas not covered. The two versions presented here are not entirely up-to-date… and honestly, I didn't have the energy to redo all the streets.",
				
				sect5_title: "THE JOURNEY OF MY FLIGHT TO CHINA",
				sect5_prod: "This map was created using the basic tools of QGIS and two plugins.",
				sect5_desc1: "I used the <em>Globe Builder</em> plugin to produce a globe projection. The flight paths were recorded on Flightradar24, then manually traced in QGIS as time segments, each with a departure and arrival time.",
				sect5_desc2: "I then used the function to add points along a line every X meters, but I don't remember how many I used.<br><br>To then assign precise times to the points, I created calculated fields:<br><span style=\"font-size: 0.8em;\">I started by creating the timstamp_s field (in decimal) and then I created the timstamp_t field (in text)</span>",
				sect5_desc3: "I then launched the TimeManager plugin and played the time animation. All I had to do was merge the images captured by the plugin to make this GIF.",
				
				sect6_title: "MY TRIP TO CHINA",
				sect6_prod: "This map was produced using the basic tools of QGIS.",
				sect6_desc: "Nothing could be easier; I just had to find a suitable map background and manually place the points and lines. All that's left is to add the map's details.",
				
				sect7_title: "THE ROADS TOWARDS CHAUMONT",
				sect7_prod: "This map was produced using the basic tools of QGIS.",
				sect7_desc: "I once again took a stroll on Google Street View, looking for the furthest road signs (not on the highway) pointing to Chaumont. The map's visual quality is really poor, but I hurried to the end because I was starting to get fed up.",
				
				sect8_title: "DATE OF CREATION OF THE BUILDINGS STILL EXISTING IN CHAUMONT",
				sect8_prod: "This map was produced using data from BDTOPO and two plugins, TimeManager and OpenTopography DEM Downloader.",
				sect8_desc1: "I added the OpenTopography DEM Downloader data for the terrain's elevation to QGIS and I added the BDTOPO data to it.",
				sect8_desc2: "Next, I highlighted in gray the buildings still standing that had no creation date in the data, and in red those that did. I activated the TimeManager plugin with the building data field and started the recording, which I then converted into a GIF. The dates in the GIF range from 1450 to 2020, but in the data they range from 1300 to 2018.",
				
				sect9_title: "3D VISUALIZATION OF HAUTE-MARNE",
				sect9_prod: "This map was produced using data from the IGN's DEM.",
				sect9_desc: "I segmented the raster every 50m (I think) to then vectorize them and add colors. I placed the terrain over it in semi-transparent, and I find the result absolutely magnificent.",
				
				sect10_title: "DISPLACEMENT MAPPING TEST",
				sect10_prod: "This map was produced using my memory, Google Maps and Flightradar24.",
				sect10_desc1: "I manually traced the routes on the roads to visualize where we went. For the times, I simply entered the departure and arrival times. Then I used QGIS's built-in function to plot points every X kilometers along the lines, added an image of the transport type to each point, and included two calculated fields. These are the same as those used for this map: My trip to China.",
				sect10_desc2: "I then made an atlas to print each image which I merged to make this mp4 file with Shutter encoder.",
				sect10_desc3: "Here is a test video that needs to be redone because there are quite a few image problems in the video, in the wrong places.",
				
				sect11_title: "MAP OF THE SILK ROAD",
				sect11_prod: "This map was produced using Wikipedia and some data from the internet.",
				sect11_desc1: "I always wanted to do it and I went for it, I only have the roads from the 1st/2nd century and the 8th century (in addition to Marco Polo's) but it's already a beautiful mess.",
				sect11_desc2: "I traced all the routes by hand and also marked all the towns. I searched for the territorial boundaries of the time, but unfortunately I found nothing usable.",
				sect11_desc3: "The most complex part was adding the country names along their length, in different sizes and oriented towards the north. There are some distortions in Africa and Southeast Asia, but it looks good and I'm happy with it.",
				sect11_desc4: "To do this, I had to draw a line in a geometry generator which is segmented for orientation:",
				sect11_desc5: "I then plotted points on the geometry, leaving space before and after. On this point layer, I added a field with letters to display them as symbols and not as labels, because the country names needed to remain within the map's theme, like a map background.",
				sect11_desc6: "Then, for their tilt, I used this code:",
				sect11_desc7: "Then comes the code for the font size where I retrieved the length of the line created with the geometry generator drawn beforehand (the result is in meters to scale):",
				sect11_desc8: "I had trouble choosing the colours (which I still don't really like) but here is the final result with a world map and two globe maps.",
				
				sect12_title: "MAP OF BORDEAUX",
				sect12_prod: "This map was produced using data from the IGN's BDTOPO database.",
				sect12_desc: "I wanted to create a rather nice circular rendering with code that only displayed the data of each layer at a distance of X meters, instead of a simple white mask... I still find the rendering very nice with the railway/tram in orange and the main roads in blue.",
				
				sect13_title: "MAPS OF AUSTRALIA",
				sect13_prod: "These maps were produced using open data from Australia.",
				sect13_desc1: "I wanted to see how the data was produced, how the country was divided (departments, cities etc.) (and I was lost at the beginning ahah...) and I wanted to discover the country through its data.",
				sect13_desc2: "Here are several maps made in a hurry:",
				sect13_carte1: "Regarding the elevation of the country (clearly defined and not vague)",
				sect13_carte2: "Regarding the main roads",
				sect13_carte3: "Regarding the railways",
				sect13_carte4: "Regarding the population density",
				
				sect14_title: "THE VISIBILITY ZONE<br>MONTH BLANC AT 300KM",
				sect14_prod: "This map was produced using the IGN's BDATLI and the Visibility Analysis plugin.",
				sect14_desc: "The most time-consuming part was inserting the dozens of files per department. Then I merged them and ran the Visibility Analysis plugin over a 300km radius. I couldn't be bothered to do more; maybe later.",
				
				sect15_title: "PDO VINEYARDS OF FRANCE",
				sect15_prod: "This map was produced using data from INAO, Wikipedia and IGN's BDTOPO.",
				sect15_desc: "I went through a lot of different styles and colors (simplified shapes, \"cork\" colors, etc.), but I settled on this one because I didn't want to stress about it anymore and I think it looks pretty good. The most challenging part of this map was manually filtering the INAO CSV file with its 1.2 million lines. This means that I only have the PDO data on the map, not the PGI data (which would, for example, increase the size of Lorraine), purely out of laziness. I had some ideas for decorating the map, but I abandoned them due to lack of time, as I had to print it before leaving for Australia.",

				v1: "Version 1",
				v2: "Version 2",
				v3: "Version 3",
				
				footer: "Created by me – for my own enjoyment",
			},

			zh: {
				tab_title:"地圖製作 — QGIS",
				
				nav_accueil: "歡迎",
				nav_qgis: "QGIS地圖",
				nav_wonderdraft: "Wonderdraft卡牌",
				nav_30dmc: "30 天地圖挑戰",

				title: "使用QGIS製作地圖",
				title_desc: "以下所有地圖均使用 QGIS (3.34) 創建，純粹出於好奇和實驗目的。未使用任何外部軟體進行編輯。 <br><br>要查看高清地圖，只需點擊即可。",
				
				sect1_title: "巴黎聖母院的可視區域",
				sect1_prod: "該地圖是使用 DSM（數位表面模型）和 <em>可見性分析</em> 外掛程式產生的。",
				sect1_desc: "這張地圖是測試用的。我想試試這個插件，但如果研究區域太遠，我的電腦就跟不上。所以我把範圍限制在了500公尺。",
				
				sect2_title: "艾菲爾鐵塔的可視區域",
				sect2_prod: "此地圖由數位表面模型 (DSM) 和 <em>可見性分析</em> 外掛程式產生。",
				sect2_desc: "我首先使用 BDTOPO 建築圖層勾勒出目標的輪廓，然後產生了一個間距約為 3 公尺的點陣。第二次計算讓我確定了觀測半徑和觀測高度（1.60 米，相當於人的平均身高）。計算完成後，我開始為地圖添加紋理。是的……很遺憾，艾菲爾鐵塔燈塔沒有包含在內。",
				
				sect3_title: "法國及其各地區的摺紙藝術",
				sect3_prod: "此地圖完全使用 QGIS 的原生工具建立。",
				sect3_desc: "首先，我將 GeoJSON 區域簡化，然後將其分割成 12 個不同的圖層。在提取每個區域的頂點之前，我移除了幾何圖形中的孔洞和孤島。之後，我逐個區域地應用了 Delaunay 三角剖分。由於某些三角形未能準確代表區域形狀，因此需要手動移除。最後，我應用了符號系統。",
				
				sect4_title: "蕭蒙長椅",
				sect4_prod: "地圖是使用 QGIS 基本工具和基於 BDTOPO 資料的設計製作而成。",
				sect4_desc: "最耗時的部分是收集資訊：我花了幾個小時在谷歌街景上逐條街道尋找長椅，並對未覆蓋的區域進行了實地調查。這裡展示的兩個版本並非完全最新……說實話，我實在沒有精力重新繪製所有街道的地圖。",
				
				sect5_title: "我的中國之旅",
				sect5_prod: "這張地圖是使用 QGIS 的基本工具和兩個外掛程式建立的。",
				sect5_desc1: "我使用<em>Globe Builder</em>外掛程式產生了地球投影。飛行路徑記錄在Flightradar24上，然后在QGIS中手動描繪成時間段，每個時間段都包含出發時間和到達時間。",
				sect5_desc2:"然後我使用函數沿線每隔X米添加一個點，但我記不清具體添加了多少個點。 <br><br>為了給這些點分配精確的時間，我建立了計算欄位:<br><span style=\"font-size: 0.8em;\">我先建立了timstamp_s欄位（十進位），然後建立了timstamp_t欄位（文字）。 </span>",
				sect5_desc3:"然後我啟動了TimeManager插件並播放了時間動畫。我只需要將插件捕捉的影像合併即可製作這個GIF。",
				
				sect6_title: "我的中國之旅",
				sect6_prod: "地圖是使用 QGIS 的基本工具製作的。",
				sect6_desc: "這簡直太簡單了；我只需要找到合適的地圖背景，然後手動放置點和線。剩下的就是添加地圖的細節了。",
				
				sect7_title: "通往肖蒙的道路",
				sect7_prod: "地圖是使用 QGIS 的基本工具製作的。",
				sect7_desc: "我又一次在谷歌街景上閒逛，尋找指向肖蒙的最遠路標（不在高速公路上）。地圖的視覺效果實在太差，但我還是加快速度，因為我已經開始不耐煩了。",
				
				sect8_title: "肖蒙現存建築的建造日期",
				sect8_prod: "地圖是使用 BDTOPO 的資料以及 TimeManager 和 OpenTopography DEM Downloader 這兩個外掛程式製作的。",
				sect8_desc1: "我將 OpenTopography DEM Downloader 的地形高程資料新增至 QGIS 中，並將 BDTOPO 資料新增至其中。",
				sect8_desc2: "接下來，我用灰色高亮顯示了資料中沒有創建日期但仍然存在的建築物，並用紅色高亮顯示了有創建日期的建築物。我啟動了 TimeManager 插件，並使用該建築物資料欄位開始錄製，然後將其轉換為 GIF 動畫。 GIF 動畫中的日期範圍為 1450 年至 2020 年，但資料中的日期範圍為 1300 年至 2018 年。",
				
				sect9_title: "上馬恩省三維可視化",
				sect9_prod: "地圖是利用IGN的DEM資料製作的。",
				sect9_desc: "我以大約 50 公尺的間隔（我猜是）對柵格圖像進行分割，然後將其向量化並添加顏色。我將地形圖以半透明的方式疊在上面，最終效果非常棒。",
				
				sect10_title: "位移映射測試",
				sect10_prod: "這張地圖是我根據記憶、谷歌地圖和 Flightradar24 製作的。",
				sect10_desc1: "我手動在道路上描繪了我們的路線，以便更直觀地了解我們的行程。時間方面，我直接輸入了出發時間和抵達時間。然後，我使用 QGIS 的內建功能，沿著路線每隔 X 公里繪製一個點，並在每個點上添加了交通工具類型的圖片，還添加了兩個計算欄位。這些欄位與這張地圖（我的中國之旅）中使用的欄位相同。",
				sect10_desc2: "然後我製作了一個圖集，用於列印每張圖片，並使用快門編碼器將它們合併成這個mp4檔案。",
				sect10_desc3: "這是一個需要重做的測試視頻，因為視頻中有很多圖像問題，而且問題出現在錯誤的位置。",
				
				sect11_title: "絲路地圖",
				sect11_prod: "此地圖是根據維基百科和一些網路資料製作的。",
				sect11_desc1: "我一直想做這件事，所以我就去做了。我只有公元 1/2 世紀和公元 8 世紀的道路（除了馬可·波羅的記錄），但它已經是一片美麗的混亂了。",
				sect11_desc2: "我手工描繪了所有路線，並標記了所有城鎮。我試圖查找當時的領土邊界，但遺憾的是，我沒有找到任何可用的資訊。",
				sect11_desc3: "最複雜的部分是在地圖上加上國名，國名大小不一，方向朝北。非洲和東南亞的國名有些變形，但整體效果不錯，我很滿意。",
				sect11_desc4: "為此，我需要在幾何生成器中繪製一條線，該幾何生成器已根據方向進行了分段：",
				sect11_desc5: "然後我在幾何體上繪製點，並在點前後留出空白。在這個點圖層上，我添加了一個包含字母的字段，將這些點顯示為符號而不是標籤，因為國家名稱需要與地圖主題保持一致，就像地圖背景一樣。",
				sect11_desc6: "然後，對於它們的傾斜角度，我使用了以下程式碼：",
				sect11_desc7: "接下來是字體大小的程式碼，其中我檢索了預先用幾何生成器繪製的線條的長度（結果以米為單位，按比例顯示）：",
				sect11_desc8: "我選顏色的時候遇到了一些困難（我仍然不太喜歡最終的顏色），但這是最終結果，包括一張世界地圖和兩張地球儀地圖。",
				
				sect12_title: "波爾多地圖",
				sect12_prod: "地圖是利用IGN的BDTOPO資料庫中的資料製作的。",
				sect12_desc: "我想要用程式碼創建一個漂亮的圓形渲染圖，該渲染圖只顯示距離 X 米處每一層的數據，而不是簡單的白色遮罩……我仍然覺得渲染效果很好，鐵路/電車是橙色的，主要道路是藍色的。",
				
				sect13_title: "澳洲地圖",
				sect13_prod: "這些地圖是利用澳洲的開放資料製作的。",
				sect13_desc1: "我想了解數據是如何產生的，這個國家是如何劃分的（部門、城市等）（一開始我完全摸不著頭腦哈哈……），我想透過數據來了解這個國家。",
				sect13_desc2: "以下是一些匆忙繪製的地圖：",
				sect13_carte1: "關於該國的海拔（明確定義，不得含糊不清）",
				sect13_carte2: "關於主要道路",
				sect13_carte3: "關於鐵路",
				sect13_carte4: "關於人口密度",
				
				sect14_title: "能見度區域<br>300公里處的白月",
				sect14_prod: "地圖是使用 IGN 的 BDATLI 和可見性分析外掛程式製作的。",
				sect14_desc: "最耗時的部分是為每個部門匯入數十個文件。然後我將它們合併，並在300公里半徑範圍內運行了可見性分析插件。我懶得再做了；也許以後再說。",
				
				sect15_title: "法國受保護原產地名稱 (PDO) 葡萄園",
				sect15_prod: "本地圖使用了 INAO、維基百科和 IGN 的 BDTOPO 的數據製作而成。",
				sect15_desc: "我嘗試了很多不同的風格和顏色（例如簡化的形狀、「軟木塞」色等等），但最終還是選擇了這個，因為我不想再為此煩惱了，而且我覺得它看起來還不錯。這張地圖最難的部分是手動篩選INAO的CSV文件，那可是有120萬行資料呢。這意味著地圖上只有PDO數據，沒有PGI數據（例如，PGI數據會擴大洛林地區的面積），純粹是因為我懶。我本來有一些裝飾地圖的想法，但因為時間不夠，只好放棄了，因為我必須在去澳洲之前把它印出來。",

				v1: "版本 1",
				v2: "版本 2",
				v3: "版本 3",
				
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
