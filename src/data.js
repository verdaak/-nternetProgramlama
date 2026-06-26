export const graphData = {
  nodes: [
    // Baş Düğüm (Zihin)
    { id: "zihin", label: "Zihnim", type: "root", img: "me.jpg" },

    // Ana Kategori Düğümleri
    { id: "kitap", label: "Kitap", type: "category" },
    { id: "film", label: "Film", type: "category" },
    { id: "dizi", label: "Dizi", type: "category" },
    { id: "diy", label: "DIY", type: "category" },
    { id: "kod", label: "Kod", type: "category" },
    { id: "muzik", label: "Müzik", type: "category" },

    // --- KİTAPLAR ---
    { id: "harry_potter_k", label: "Harry Potter", type: "kitap_item", author: "J.K. Rowling", desc: "Yetim bir çocuğun büyücülük okuluna başlaması ve karanlık lorda karşı mücadelesi." },
    { id: "dorian_gray", label: "Dorian Gray'in Portresi", type: "kitap_item", author: "Oscar Wilde", desc: "Sonsuz gençlik dileyen ve günahları sadece portresine yansıyan bir adamın trajedisi." },
    { id: "sirca_fanus", label: "Sırça Fanus", type: "kitap_item", author: "Sylvia Plath", desc: "Genç bir kadının kimlik arayışı ve depresyonla mücadelesini anlatan otobiyografik eser." },
    { id: "intermezzo", label: "Intermezzo", type: "kitap_item", author: "Sally Rooney", desc: "İki kardeşin yas, aşk ve modern ilişkiler sarmalındaki hayatı." },
    { id: "jane_eyre", label: "Jane Eyre", type: "kitap_item", author: "Charlotte Brontë", desc: "Zorlu bir childhood'dan gelen güçlü bir kadının aşk, özgürlük ve gurur mücadelesi." },
    { id: "pride_and_prejudice", label: "Pride and Prejudice", type: "kitap_item", author: "Jane Austen", desc: "Önyargılar, sınıfsal farklılıklar ve gururun gölgesindeki unutulmaz bir aşk hikayesi." },
    { id: "serenad", label: "Serenad", type: "kitap_item", author: "Zülfü Livaneli", desc: "Bir profesörün geçmişindeki hüzünlü aşk hikayesi ve II. Dünya Savaşı dramı." },

    // --- DİZİLER ---
    { id: "friends", label: "Friends", type: "dizi_item", desc: "New York'ta yaşayan 6 yakın arkadaşın hayatı, aşkları ve komik maceraları." },
    { id: "brooklyn_99", label: "Brooklyn Nine-Nine", type: "dizi_item", desc: "New York Polis Departmanı'ndaki bir karakolda geçen eğlenceli ve absürt dedektif hikayeleri." },
    { id: "good_place", label: "The Good Place", type: "dizi_item", desc: "Öldükten sonra yanlışlıkla 'İyi Yer'e gönderilen bir kadının ahlak felsefesi dolu komedisi." },
    { id: "buffy", label: "Buffy the Vampire Slayer", type: "dizi_item", desc: "Genç bir kızın vampirler, iblisler ve karanlık güçlerle olan aksiyon dolu savaşı." },
    { id: "got", label: "Game of Thrones", type: "dizi_item", desc: "Westeros kıtasındaki yedi krallığın taht mücadeleleri, entrikalar ve ak gezenler tehdidi." },
    { id: "glee", label: "Glee", type: "dizi_item", desc: "Bir lise korosundaki öğrencilerin müzik, arkadaşlık ve kendilerini bulma yolculuğu." },
    { id: "supernatural", label: "Supernatural", type: "dizi_item", desc: "İki kardeşin Amerika'yı gezip canavarlar, hayaletler ve meleklerle savaşması." },
    { id: "lost", label: "Lost", type: "dizi_item", desc: "Gizemli bir adaya düşen uçak kazazedelerinin hayatta kalma ve adanın sırlarını çözme hikayesi." },
    { id: "breaking_bad", label: "Breaking Bad", type: "dizi_item", desc: "Kanser olduğunu öğrenen bir kimya öğretmeninin ailesi için uyuşturucu üreticisine dönüşümü." },

    // --- FİLMLER ---
    { id: "shrek", label: "Shrek", type: "film_item", desc: "Bataklığını kurtarmak için bir prensesi kurtarmaya giden yeşil bir devin masalları ters yüz eden hikayesi." },
    { id: "ters_yuz", label: "Ters Yüz", type: "film_item", desc: "Küçük bir kızın zihnindeki temel duyguların (Neşe, Üzüntü, Öfke...) iç dünyasını yönetme çabası." },
    { id: "yesil_yol", label: "Yeşil Yol", type: "film_item", desc: "Mucizevi şifa güçleri olan devasa ama masum bir idam mahkumunun hüzünlü öyküsü." },
    { id: "sil_bastan", label: "Sil Baştan", type: "film_item", desc: "Ayrılık sonrası birbirlerinin anılarını hafızalarından sildiren bir çiftin zihinlerindeki aşk mücadelesi." },
    { id: "truman_show", label: "The Truman Show", type: "film_item", desc: "Tüm hayatı habersizce devasa bir televizyon şovunda canlı yayınlanan bir adamın gerçeği keşfi." },
    { id: "esaretin_bedeli", label: "Esaretin Bedeli", type: "film_item", desc: "Haksız yere hapishaneye giren bir bankacının umut ve sabırla örülü kaçış hikayesi." },
    { id: "piyanist", label: "Piyanist", type: "film_item", desc: "II. Dünya Savaşı sırasında Varşova'nın yıkıntıları arasında hayatta kalmaya çalışan bir piyanistin dramı." },
    { id: "harry_potter_f", label: "Harry Potter Serisi", type: "film_item", desc: "Büyülü dünyanın sinemaya aktarılmış, görsel olarak büyüleyici tüm serüveni." },

    // --- MÜZİKLER ---
    { id: "bump_ahead", label: "Bump Ahead", type: "muzik_item", artist: "Mr. Big", date: "1993", desc: "Hard rock tarzında, gitar ve bas virtüözlüğünün zirve yaptığı enerjik albüm." },
    { id: "queen_jazz", label: "Queen - Jazz", type: "muzik_item", artist: "Queen", date: "1978", desc: "Don't Stop Me Now gibi efsanevi parçaları barındıran, çok tarzlı ikonik Queen albümü." },
    { id: "reputation", label: "Reputation", type: "muzik_item", artist: "Taylor Swift", date: "2017", desc: "Medya eleştirileri ve intikam temaları içeren, karanlık pop ve elektro-pop tarzındaki albüm." },
    { id: "born_to_die", label: "Born to Die", type: "muzik_item", artist: "Lana Del Rey", date: "2012", desc: "Melankolik, sinematik ve vintage esintili şarkılardan oluşan derin bir başyapıt." },
    { id: "dunya_yalan", label: "Dünya Yalan Söylüyor", type: "muzik_item", artist: "Mor ve Ötesi", date: "2004", desc: "Cambaz şarkısını da içeren, Türk rock tarihinin en önemli ve politik albümlerinden biri." },
    { id: "californication", label: "Californication", type: "muzik_item", artist: "Red Hot Chili Peppers", date: "1999", desc: "Melodik funk-rock tarzında, grubun küllerinden doğuşunu simgeleyen efsane albüm." },
    { id: "seni_kendime", label: "Seni Kendime Sakladım", type: "muzik_item", artist: "Duman", date: "2005", desc: "Melankolik ve grunge esintili Türk rock şarkılarını barındıran unutulmaz Duman albümü." },

    // --- DIY ---
    { id: "tuval", label: "Tuval", type: "diy_item", desc: "Boş bir beyaz bezi renklerle doldurarak zihnimdeki soyut dünyayı somutlaştırma süreci." },
    { id: "yapboz", label: "Yapboz", type: "diy_item", desc: "Yüzlerce küçük parçayı sabırla birleştirerek büyük resmi ortaya çıkarma keyfi." },
    { id: "ahsap_boyama", label: "Ahşap Boyama", type: "diy_item", desc: "Sıradan bir ahşap objeye fırça dokunuşlarıyla ruh katma ve dünyadan soyutlanma alanı." }
  ],
  links: [
    // Merkez Bağlantıları
    { source: "zihin", target: "kitap" },
    { source: "zihin", target: "film" },
    { source: "zihin", target: "dizi" },
    { source: "zihin", target: "diy" },
    { source: "zihin", target: "kod" },
    { source: "zihin", target: "muzik" },

    // Kitap Dallanmaları
    { source: "kitap", target: "harry_potter_k" },
    { source: "kitap", target: "dorian_gray" },
    { source: "kitap", target: "sirca_fanus" },
    { source: "kitap", target: "intermezzo" },
    { source: "kitap", target: "jane_eyre" },
    { source: "kitap", target: "pride_and_prejudice" },
    { source: "kitap", target: "serenad" },

    // Dizi Dallanmaları
    { source: "dizi", target: "friends" },
    { source: "dizi", target: "brooklyn_99" },
    { source: "dizi", target: "good_place" },
    { source: "dizi", target: "buffy" },
    { source: "dizi", target: "got" },
    { source: "dizi", target: "glee" },
    { source: "dizi", target: "supernatural" },
    { source: "dizi", target: "lost" },
    { source: "dizi", target: "breaking_bad" },

    // Film Dallanmaları
    { source: "film", target: "shrek" },
    { source: "film", target: "ters_yuz" },
    { source: "film", target: "yesil_yol" },
    { source: "film", target: "sil_bastan" },
    { source: "film", target: "truman_show" },
    { source: "film", target: "esaretin_bedeli" },
    { source: "film", target: "piyanist" },
    { source: "film", target: "harry_potter_f" },

    // Müzik Dallanmaları
    { source: "muzik", target: "bump_ahead" },
    { source: "muzik", target: "queen_jazz" },
    { source: "muzik", target: "reputation" },
    { source: "muzik", target: "born_to_die" },
    { source: "muzik", target: "dunya_yalan" },
    { source: "muzik", target: "californication" },
    { source: "muzik", target: "seni_kendime" },

    // DIY Dallanmaları
    { source: "diy", target: "tuval" },
    { source: "diy", target: "yapboz" },
    { source: "diy", target: "ahsap_boyama" }
  ]
};

export const nedenVerileri = {
  zihin: {
    title: "Benim Zihnim",
    text: "Dijital odama hoş geldin! Burası benim hayallerim, ürettiklerim ve beni ben yapan tüm dünyaların zihnimdeki birleşimi."
  },
  kitap: {
    title: "Kitapların Bendeki Yeri",
    text: "Kitaplar: bir kitaba başlayınca tamamen başka biri olmak, bambaşka bir hayatı yaşıyor olmak sonrasında kendi yaşantıma hayatıma dönmek bana müthiş hissettiriyor."
  },
  film_dizi: {
    title: "Evrenlerin İçinde Kaybolmak: Dizi ve Filmlerin Bendeki Yeri",
    text: "Çok küçük yaşlarımdan beri dizi ve filmler benim için sadece ekranda akıp giden görüntülerden ibaret olmadı; her biri içine adım attığım, derinlemesine hissettiğim bambaşka dünyalara dönüştü. İzlediğim hikayelerin sadece bir seyircisi değil, sanki o evrenlerin içinde bizzat yaşayan bir parçası gibi hisfeltim hep. Vampir dünyalarının o melankolik ve derin acısını onlarla birlikte göğüslemek, Friends’teki o sıcak, samimi ve insanı sarıp sarmalayan arkadaşlık ruhunu birebir yaşamak, Lost’un o gizemli, tekinsiz adasında karakterlerle birlikte kaybolup o bilinmezliği hissetmek, Ve Harry Potter’ın o büyüleyici, fantastik evreninde sınırları geride bırakmak... Bu evrenlerin beni her defasında içine çekmesi, gerçek anlamda büyülemesi ve bende bıraktığı izler, dizi ve filmleri hayatımda çok ayrı, çok anlamlı ve önemli bir yere koyuyor. Onlar benim için birer kaçış noktasından çok daha fazlası; bizzat deneyimlediğim farklı hayatlar ve hisler."
  },
  kod: {
    title: "Kodların Dünyası: Algoritmalar ve Üretmenin Keyfi",
    text: "Bilgisayar mühendisliği bölümünü kazandıktan sonra, kodların dünyası benim için bambaşka bir anlam kazandı. Kod yazmayı ve o karmaşık algoritmaları çözmeyi, her parçası zekice tasarlanmış sonsuz bir bulmaca gibi görüyorum. Sıfırdan bir web sitesi hazırlamak, satırlar arasında mantık yürütmek ve o algoritmik problemleri adım adım çözüme kavuşturmak benim için sadece bir iş veya ders değil; çok farklı ve büyüleyici bir deneyim. Ekranda beliren her başarılı satır, bu dijital bulmacanın içindeki üretim tutkumu daha da besliyor."
  },
  diy: {
    title: "Sanatın İçindeki Huzur: Boyamak ve Soyutlanmak",
    text: "Resim yapmak, renklerle oynamak ve özellikle ahşap boyamak benim için zamandan ve mekandan bağımsız bir huzur limanı. Bu şeylerle ilgilenirken kendimi uzun saatler boyunca dış dünyaya kapatmayı, tüm o günlük koşturmacadan ve gürültüden kendimi tamamen soyutlamayı çok seviyorum. Fırçanın her dokunuşunda, sadece o an yaptığım şeye odaklanmak ve zihnimi tamamen boşaltmak bana tarifsiz bir sakinlik veriyor. Üretirken bulduğum bu yalnızlık ve odaklanma hali, ruhumu dinlendirmenin en güzel yolu."
  },
  muzik: {
    title: "Hayatın Fon Müziği: Duyguları Derinleştiren Ritimler",
    text: "Tüm bu sevdiğim şeyleri yaparken –ister bir filmin evreninde kaybolurken, ister kodların arasındaki o bulmacayı çözerken ya da fırçamla ahşabı boyarken– müzik her anımda bana eşlik eden en büyük tamamlayıcı. Sadece arka planda çalan bir ses değil o; o an dinlediğim şey neyle ilgiliyse, beni onun en derin katmanına çeken bir rehber. Müziğin bana hissettirdiği o yoğun, derin duygu durumu, yaptığım her işin ruhunu besliyor ve aldığım keyfi katlayarak artırıyor. O anın hissi neyse, müzik onu benim için adeta ölümsüzleştiriyor."
  }
};