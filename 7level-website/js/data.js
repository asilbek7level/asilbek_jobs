const fieldsData = [
    {
        id: 'programming',
        icon: '💻',
        iconBg: 'rgba(108, 92, 231, 0.2)',
        name: 'Dasturlash (IT)',
        shortDesc: 'Veb, mobil va dasturiy ta\'minot. Python, JavaScript, Java va cloud texnologiyalari.',
        tags: ['Full-Stack', 'Backend', 'Frontend', 'Mobile'],
        demand: 'high',
        demandLabel: 'Juda yuqori talab',
        fullDesc: 'Dasturlash — raqamli iqtisodiyotning asosiy kasbiy yo\'nalishi. Dasturchilar mahsulot, avtomatlashtirish va ma\'lumot tizimlarini yaratadi. O\'zbekistonda IT-park, outsourcing va freelance kanallari orqali xalqaro bozorga chiqish imkoniyati nisbatan yuqori.',
        skills: ['Python, JavaScript, Java yoki C#', 'HTML/CSS, React yoki analog frontend', 'SQL va ma\'lumotlar bazasi', 'Git, asosiy Linux, cloud tushunchasi', 'Muammoni kichik qismlarga bo\'lish'],
        careers: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Mobile Developer', 'QA Engineer', 'DevOps (keyingi bosqich)'],
        salaryMin: '$400', salaryMid: '$1,200', salaryMax: '$3,500+',
        demandPercent: 95, growthRate: '+35%', vacancies: '15,000+',
        avgSalaryUzb: '$800–2,500',
        marketInfo: 'Global miqyosda dasturiy mahsulot va raqamlashtirish talabi barqaror. Mahalliy bozorda ham IT xizmatlari, fintech va e-commerce kengaymoqda. Maosh diapazoni tajriba, ingliz tili va masofaviy ishga bog\'liq.',
        futureOutlook: 'AI vositalari oddiy kod yozishni tezlashtiradi, lekin tizimni loyihalash, sifat, xavfsizlik va mahsulot fikrlashi qimmatli bo\'lib qoladi.',
        riasec: { R: 15, I: 40, A: 15, S: 5, E: 10, C: 15 },
        valuesFit: ['growth', 'independence', 'income'],
        firstSteps: ['HTML/CSS va bitta dasturlash tili', 'Kichik loyiha (portfolio)', 'GitHub va oddiy algorithm mashqlari', 'Ingliz tilida texnik matn o\'qish']
    },
    {
        id: 'design',
        icon: '🎨',
        iconBg: 'rgba(253, 121, 168, 0.2)',
        name: 'Dizayn (UI/UX)',
        shortDesc: 'Foydalanuvchi interfeysi, tajriba dizayni, brending va vizual kommunikatsiya.',
        tags: ['UI/UX', 'Grafik', 'Brending', 'Motion'],
        demand: 'high',
        demandLabel: 'Yuqori talab',
        fullDesc: 'Dizayn mahsulotning tushunarliligi va ishonchini belgilaydi. UI/UX dizayner foydalanuvchi vazifasini, grafik dizayner esa brend tilini ishlaydi. IT jamoalarida dizayner kam, ammo portfolio sifati tanlovni belgilaydi.',
        skills: ['Figma', 'Vizual ierarxiya va tipografika', 'Wireframe va prototip', 'Foydalanuvchi tadqiqoti asoslari', 'Feedbackni qayta ishlash'],
        careers: ['UI Designer', 'UX Designer', 'Product Designer', 'Graphic Designer', 'Motion Designer'],
        salaryMin: '$300', salaryMid: '$900', salaryMax: '$2,500+',
        demandPercent: 85, growthRate: '+25%', vacancies: '8,000+',
        avgSalaryUzb: '$500–1,800',
        marketInfo: 'Startap va raqamli mahsulotlar o\'sishi bilan UI/UX talabi oshadi. Freelance bozorida raqobat kuchli — farq case-study va natija o\'lchovida.',
        futureOutlook: 'AI maketni tez chizadi. Qimmatli qism: muammoni tushunish, tadqiqot va qaror asosini tushuntirish.',
        riasec: { R: 5, I: 15, A: 50, S: 10, E: 10, C: 10 },
        valuesFit: ['creativity', 'independence', 'recognition'],
        firstSteps: ['Figma asoslari', '3 ta qayta dizayn case-study', 'Haqiqiy foydalanuvchidan feedback', 'IT jamoada staj yoki pet-project']
    },
    {
        id: 'marketing',
        icon: '📊',
        iconBg: 'rgba(0, 206, 201, 0.2)',
        name: 'Digital Marketing',
        shortDesc: 'SMM, SEO, kontent, reklama va o\'lchovga asoslangan o\'sish.',
        tags: ['SMM', 'SEO', 'PPC', 'Content'],
        demand: 'high',
        demandLabel: 'Juda yuqori talab',
        fullDesc: 'Raqamli marketing savdo, brend va auditoriya o\'rtasidagi ko\'prik. O\'zbekistonda onlayn savdo va ijtimoiy tarmoqlar o\'sishi mutaxassisga ehtiyojni oshiradi, lekin “post qo\'yish” emas, o\'lchov va tajriba muhim.',
        skills: ['Reklama kabinetlari asoslari', 'SEO tushunchasi', 'Analitika (trafik, konversiya)', 'Kontent reja', 'Copywriting'],
        careers: ['SMM Manager', 'SEO Specialist', 'PPC Manager', 'Content Strategist', 'Performance Marketer'],
        salaryMin: '$250', salaryMid: '$700', salaryMax: '$2,000+',
        demandPercent: 90, growthRate: '+30%', vacancies: '12,000+',
        avgSalaryUzb: '$400–1,500',
        marketInfo: 'Kichik biznesning ko\'pi SMM so\'raydi. Yuqori maosh odatda performance (sotuvga bog\'langan) natija bilan keladi.',
        futureOutlook: 'Avtomatlashtirish va AI kontent ko\'payadi. Farq: gipoteza, test va iqtisodiy hisob.',
        riasec: { R: 5, I: 15, A: 20, S: 15, E: 35, C: 10 },
        valuesFit: ['income', 'recognition', 'variety'],
        firstSteps: ['Bitta brend uchun 30 kunlik kontent reja', 'Oddiy reklama test (kichik byudjet)', 'Google Analytics asoslari', 'Natijani raqamda yozish']
    },
    {
        id: 'finance',
        icon: '💰',
        iconBg: 'rgba(0, 184, 148, 0.2)',
        name: 'Moliya va Buxgalteriya',
        shortDesc: 'Hisob, tahlil, audit, soliq va moliyaviy rejalashtirish.',
        tags: ['Buxgalteriya', 'Audit', 'Investitsiya', 'Bank'],
        demand: 'high',
        demandLabel: 'Doimiy talab',
        fullDesc: 'Har bir qonuniy faoliyat moliyaviy hisobga muhtoj. Bu soha barqaror, lekin qoidalar, dasturlar (1C, Excel) va aniqlik talab qiladi. Fintech bilan tahlilchilik yo\'nalishi kengaymoqda.',
        skills: ['Buxgalteriya asoslari', 'Excel', 'Soliq tushunchasi', 'Hisobot o\'qish', 'Diqqat va tartib'],
        careers: ['Buxgalter', 'Moliyaviy tahlilchi', 'Auditor', 'Bank mutaxassisi', 'Soliq maslahatchisi'],
        salaryMin: '$300', salaryMid: '$800', salaryMax: '$2,500+',
        demandPercent: 80, growthRate: '+15%', vacancies: '20,000+',
        avgSalaryUzb: '$400–2,000',
        marketInfo: 'Korxonalar soni o\'sishi buxgalterga doimiy ehtiyoj beradi. Xalqaro sertifikatlar (ACCA va h.k.) maoshni sezilarli oshirishi mumkin.',
        futureOutlook: 'Rutin hisob avtomatlashadi. Tahlil, nazorat va biznes-partnerlik roli qoladi.',
        riasec: { R: 5, I: 20, A: 5, S: 10, E: 15, C: 45 },
        valuesFit: ['security', 'income', 'structure'],
        firstSteps: ['Buxgalteriya asoslari kursi', 'Excel (jadval, pivot)', '1C yoki analog bilan tanishish', 'Amaliyot / yordamchi lavozim']
    },
    {
        id: 'medicine',
        icon: '🏥',
        iconBg: 'rgba(225, 112, 85, 0.2)',
        name: 'Tibbiyot va sog\'liqni saqlash',
        shortDesc: 'Davolash, diagnostika, farmatsiya va tibbiy xizmatlar.',
        tags: ['Shifokor', 'Farmatsevt', 'Hamshira', 'Lab'],
        demand: 'high',
        demandLabel: 'Juda yuqori talab',
        fullDesc: 'Tibbiyot uzoq ta\'lim, mas\'uliyat va odamlar bilan ishlashni talab qiladi. Kadrlar yetishmovchiligi bo\'lishi mumkin, lekin yo\'l licenziya va klinik amaliyot orqali o\'tadi. Bu test “shifokor bo\'ling” demoqchi emas — qiziqish va qiymat mosligini ko\'rsatadi.',
        skills: ['Fan asoslari (biologiya, kimyo)', 'Uzoq o\'qishga chidamlilik', 'Empatiya', 'Stress ostida aniqlik', 'Protokolga rioya'],
        careers: ['Shifokor (uzoq yo\'l)', 'Hamshira', 'Farmatsevt', 'Laborant', 'Jamoat salomatligi'],
        salaryMin: '$300', salaryMid: '$700', salaryMax: '$3,000+',
        demandPercent: 92, growthRate: '+20%', vacancies: '25,000+',
        avgSalaryUzb: '$400–2,500',
        marketInfo: 'Davlat va xususiy klinika tarmog\'i kengaymoqda. Maosh mutaxassislik, joy va xususiy amaliyotga qarab keskin farq qiladi.',
        futureOutlook: 'Telemeditsina va diagnostika vositalari yordam beradi, klinik qaror va mas\'uliyat insonda qoladi.',
        riasec: { R: 10, I: 30, A: 5, S: 40, E: 5, C: 10 },
        valuesFit: ['altruism', 'security', 'recognition'],
        firstSteps: ['Fan bo\'yicha mustahkam asos', 'Volontyorlik / kuzatuv', 'Ta\'lim yo\'li va litsenziyani o\'rganish', 'Ish yukini realistik baholash']
    },
    {
        id: 'education',
        icon: '📚',
        iconBg: 'rgba(253, 203, 110, 0.2)',
        name: 'Ta\'lim va o\'qituvchilik',
        shortDesc: 'Maktab, repetitorlik, onlayn kurs va EdTech.',
        tags: ['O\'qituvchi', 'Repetitor', 'EdTech', 'Online'],
        demand: 'medium',
        demandLabel: 'Barqaror talab',
        fullDesc: 'Ta\'lim — ko\'nikmani boshqalarga o\'tkazish. Davlat maktabidagi maosh ko\'pincha pastroq, lekin repetitorlik, onlayn kurs va korporativ o\'qitish daromadni oshirishi mumkin.',
        skills: ['Tushuntirish mahorati', 'Dars loyihasi', 'Sabrlilik', 'Baholash', 'Raqamli vositalar'],
        careers: ['O\'qituvchi', 'Repetitor', 'Kurs muallifi', 'Metodist', 'Korporativ trainer'],
        salaryMin: '$200', salaryMid: '$500', salaryMax: '$1,500+',
        demandPercent: 70, growthRate: '+18%', vacancies: '30,000+',
        avgSalaryUzb: '$250–1,200',
        marketInfo: 'Ingliz tili, matematika va IT o\'qituvchilariga talab yuqori. EdTech bozori o\'smoqda, lekin kontent sifati raqobatni belgilaydi.',
        futureOutlook: 'AI repetitorlar yordamchi bo\'ladi. O\'qituvchining qiymati — tashxis, motivatsiya va moslashtirish.',
        riasec: { R: 5, I: 15, A: 15, S: 45, E: 10, C: 10 },
        valuesFit: ['altruism', 'growth', 'relationships'],
        firstSteps: ['Kichik dars o\'tkazib ko\'rish', 'Bitta mavzudan mini-kurs', 'Pedagogika asoslari', 'O\'quvchi natijasini o\'lchash']
    },
    {
        id: 'construction',
        icon: '🏗️',
        iconBg: 'rgba(116, 185, 255, 0.2)',
        name: 'Qurilish va arxitektura',
        shortDesc: 'Loyiha, muhandislik, BIM va qurilish boshqaruvi.',
        tags: ['Muhandis', 'Arxitektor', 'BIM', 'Loyiha'],
        demand: 'high',
        demandLabel: 'Yuqori talab',
        fullDesc: 'Qurilish iqtisodiyotning yirik tarmog\'i. Arxitektor fazoni, muhandis esa amalga oshirishni loyihalaydi. Maydon, xavfsizlik va muddat bosimi bor.',
        skills: ['Chizmachilik / CAD', 'Normativ asoslar', 'Loyiha mantiqi', 'Jamoa bilan ishlash', 'Smeta tushunchasi'],
        careers: ['Qurilish muhandisi', 'Arxitektor', 'Loyiha menejeri', 'BIM mutaxassisi', 'Smetchik'],
        salaryMin: '$350', salaryMid: '$900', salaryMax: '$2,500+',
        demandPercent: 82, growthRate: '+22%', vacancies: '18,000+',
        avgSalaryUzb: '$500–2,000',
        marketInfo: 'Turar-joy va infratuzilma loyihalari davom etadi. BIM va loyiha boshqaruvi ko\'nikmasi farq qiladi.',
        futureOutlook: 'Raqamli model (BIM), energiya samaradorligi va xavfsizlik standartlari muhimlashadi.',
        riasec: { R: 40, I: 20, A: 15, S: 5, E: 10, C: 10 },
        valuesFit: ['structure', 'income', 'achievement'],
        firstSteps: ['AutoCAD yoki Revit asoslari', 'Qurilish maydonini kuzatish', 'Chizmani o\'qish', 'Amaliyot']
    },
    {
        id: 'law',
        icon: '⚖️',
        iconBg: 'rgba(162, 155, 254, 0.2)',
        name: 'Huquqshunoslik',
        shortDesc: 'Yuridik maslahat, shartnoma, sud va korporativ huquq.',
        tags: ['Advokat', 'Yurist', 'Notarius', 'Korporativ'],
        demand: 'medium',
        demandLabel: 'Barqaror talab',
        fullDesc: 'Huquq matn, dalil va mas\'uliyat sohasi. Tadbirkorlik o\'sishi korporativ yuristga ehtiyojni oshiradi. Yo\'l odatda oliy ma\'lumot va amaliyot orqali.',
        skills: ['Qonun matnini o\'qish', 'Yozma mantiq', 'Muzokara', 'Etika', 'Tafsilotga e\'tibor'],
        careers: ['Yurist', 'Advokat', 'Korporativ maslahatchi', 'Notarius yo\'li', 'Davlat xizmati'],
        salaryMin: '$300', salaryMid: '$800', salaryMax: '$3,000+',
        demandPercent: 72, growthRate: '+12%', vacancies: '6,000+',
        avgSalaryUzb: '$400–2,500',
        marketInfo: 'Oddiy yuristlar bozori to\'yinishi mumkin; ixtisos (soliq, IT, xalqaro savdo) qimmatliroq.',
        futureOutlook: 'Hujjat shablonlari avtomatlashadi. Tahlil, strategiya va vakillik qoladi.',
        riasec: { R: 5, I: 20, A: 10, S: 15, E: 20, C: 30 },
        valuesFit: ['structure', 'recognition', 'security'],
        firstSteps: ['Huquq yo\'nalishi talablarini o\'rganish', 'Sud/yuridik firmada kuzatuv', 'Yozma tahlil mashqi', 'Ixtisos tanlashdan oldin umumiy asos']
    },
    {
        id: 'media',
        icon: '🎬',
        iconBg: 'rgba(253, 121, 168, 0.2)',
        name: 'Media va jurnalistika',
        shortDesc: 'Kontent, video, podkast, tahrir va auditoriya bilan ishlash.',
        tags: ['Jurnalist', 'Video', 'Blogger', 'PR'],
        demand: 'growing',
        demandLabel: 'O\'sib bormoqda',
        fullDesc: 'Media endi nafaqat nashr — YouTube, Telegram, qisqa video va brend kontenti. Daromad barqaror bo\'lmasligi mumkin, portfolio va auditoriya muhim.',
        skills: ['Yozish yoki montaj', 'Syujet', 'Intervyu', 'Platforma algoritmlari', 'Etika'],
        careers: ['Kontent muallifi', 'Video muharrir', 'Jurnalist', 'PR', 'Podcaster'],
        salaryMin: '$200', salaryMid: '$600', salaryMax: '$2,000+',
        demandPercent: 68, growthRate: '+28%', vacancies: '5,000+',
        avgSalaryUzb: '$300–1,500',
        marketInfo: 'Reklama bozori o\'sadi, lekin mustaqil ijodkorlar daromadi notekis. Brend ichidagi kontent-jamoa barqarorroq.',
        futureOutlook: 'AI video/matn yordam beradi. Ishonch, tahrir va o\'z ovozi farq qiladi.',
        riasec: { R: 10, I: 10, A: 40, S: 15, E: 20, C: 5 },
        valuesFit: ['creativity', 'variety', 'recognition'],
        firstSteps: ['Haftalik kontent odat', 'Montaj asoslari', '3 ta intervyu yoki reportaj', 'Analitika o\'qish']
    },
    {
        id: 'agriculture',
        icon: '🌾',
        iconBg: 'rgba(0, 184, 148, 0.2)',
        name: 'Qishloq xo\'jaligi va agrotech',
        shortDesc: 'Ishlab chiqarish, qayta ishlash, eksport va aqlli fermerlik.',
        tags: ['Agrobiznes', 'Agrotech', 'Fermer', 'Oziq-ovqat'],
        demand: 'growing',
        demandLabel: 'Tez o\'sib bormoqda',
        fullDesc: 'Agrosektor YaIMning muhim qismi. An\'anaviy mehnatdan tashqari issiqxona, eksport va texnologiya (sensor, drone) yo\'nalishlari ochilmoqda.',
        skills: ['Agronomiya asoslari', 'Biznes hisobi', 'Texnologiyaga ochiqlik', 'Mavsum rejalashtirish', 'Sifat nazorati'],
        careers: ['Agronom', 'Fermer-tadbirkor', 'Oziq-ovqat texnologi', 'Eksport mutaxassisi', 'Veterinariya yo\'li'],
        salaryMin: '$200', salaryMid: '$500', salaryMax: '$1,500+',
        demandPercent: 75, growthRate: '+15%', vacancies: '40,000+',
        avgSalaryUzb: '$250–1,200',
        marketInfo: 'Eksport va qayta ishlash qo\'shilgan qiymatni oshiradi. Daromad yer, kapital va bozorga bog\'liq.',
        futureOutlook: 'Suv tejamkorligi, ma\'lumot va sertifikatlash muhimlashadi.',
        riasec: { R: 45, I: 20, A: 5, S: 10, E: 10, C: 10 },
        valuesFit: ['independence', 'security', 'altruism'],
        firstSteps: ['Mahalliy fermada kuzatuv', 'Bir ekin/yo\'nalish iqtisodini hisoblash', 'Agrotech misollarini o\'qish', 'Sertifikat talablarini bilish']
    },
    {
        id: 'tourism',
        icon: '✈️',
        iconBg: 'rgba(0, 206, 201, 0.2)',
        name: 'Turizm va mehmondo\'stlik',
        shortDesc: 'Gidlik, mehmonxona, turoperatorlik va xizmat madaniyati.',
        tags: ['Turizm', 'Hotel', 'Gid', 'Restoran'],
        demand: 'growing',
        demandLabel: 'Tez o\'sib bormoqda',
        fullDesc: 'O\'zbekistonning madaniy merosi turizmni o\'stiradi. Ish ko\'pincha odamlar, tillar va mavsum bilan bog\'liq.',
        skills: ['Xorijiy til', 'Xizmat', 'Marshrut rejalashtirish', 'Stressga chidam', 'Sotuv asoslari'],
        careers: ['Gid', 'Mehmonxona xodimi / menejer', 'Turoperator', 'Restoran supervisori', 'Event coordinator'],
        salaryMin: '$200', salaryMid: '$550', salaryMax: '$1,500+',
        demandPercent: 78, growthRate: '+32%', vacancies: '10,000+',
        avgSalaryUzb: '$300–1,200',
        marketInfo: 'Turist oqimi o\'sishi xizmat kadrlariga ehtiyoj beradi. Til va xizmat sifati maoshni belgilaydi.',
        futureOutlook: 'Onlayn bron, ekologik turizm va mahalliy tajriba mahsulotlari kuchayadi.',
        riasec: { R: 10, I: 5, A: 15, S: 30, E: 30, C: 10 },
        valuesFit: ['relationships', 'variety', 'altruism'],
        firstSteps: ['Ingliz / qo\'shimcha til', 'Mehmonxonada amaliyot', 'Shaharingiz bo\'yicha mini-tur', 'Xizmat standartlarini o\'rganish']
    },
    {
        id: 'logistics',
        icon: '🚛',
        iconBg: 'rgba(116, 185, 255, 0.2)',
        name: 'Logistika va savdo',
        shortDesc: 'Yetkazib berish, ombor, import-eksport va e-commerce.',
        tags: ['Logistika', 'E-commerce', 'Import', 'Supply chain'],
        demand: 'high',
        demandLabel: 'Yuqori talab',
        fullDesc: 'Tovar oqimini boshqarish — e-commerce o\'sishining orqa tomoni. Aniqlik, muddat va hujjatlar muhim.',
        skills: ['Rejalashtirish', 'Excel / ERP asoslari', 'Hujjat aylanishi', 'Muzokara', 'Muammo yechish'],
        careers: ['Logist', 'Ombor nazoratchisi', 'Import-eksport mutaxassisi', 'E-commerce operatsiyasi', 'Xarid mutaxassisi'],
        salaryMin: '$300', salaryMid: '$700', salaryMax: '$2,000+',
        demandPercent: 83, growthRate: '+26%', vacancies: '14,000+',
        avgSalaryUzb: '$400–1,800',
        marketInfo: 'Uzum va boshqa platformalar, ombor va kuryer tarmoqlari kengaymoqda. Operatsion rollar ko\'p, tahliliy rollar qimmatliroq.',
        futureOutlook: 'Avtomatlashtirish omborda kuchayadi. Zanjirni ko\'ra olish va istisnolarni boshqarish qoladi.',
        riasec: { R: 25, I: 10, A: 5, S: 10, E: 20, C: 30 },
        valuesFit: ['structure', 'income', 'security'],
        firstSteps: ['Ombor yoki yetkazib berishda amaliyot', 'Excel', 'Incoterms asoslari', 'Bitta yetkazib berish zanjirini chizib tahlil qilish']
    },
    {
        id: 'biomedi',
        icon: '🧬',
        iconBg: 'rgba(253, 121, 168, 0.2)',
        name: 'Biomedical Engineering',
        shortDesc: 'Tibbiy asboblar, diagnostika, biotexnologiya va sog\'liq texnologiyalari.',
        tags: ['Biomedical', 'MedTech', 'Biotex', 'Diagnostika'],
        demand: 'growing',
        demandLabel: 'Tez o\'sib bormoqda',
        fullDesc: 'Biomedical engineering — tibbiyot va muhandislikning kesishmasi. Bu soha tibbiy asboblar, diagnostika tizimlari, protezlar va biotexnologiya mahsulotlarini yaratadi. Global miqyosda aqliy sog\'liq va telemeditsina o\'sishi bilan talab ko\'paymoqda.',
        skills: ['Biologiya va muhandislik asoslari', 'Tibbiy asboblar dizayni', 'Biotexnologiya', 'MATLAB/CAD', 'Regulativ talablar (FDA, CE)'],
        careers: ['Biomedical Engineer', 'Medical Device Engineer', 'Clinical Engineer', 'Biotex Engineer', 'R&D Engineer'],
        salaryMin: '$400', salaryMid: '$1,000', salaryMax: '$2,800+',
        demandPercent: 75, growthRate: '+28%', vacancies: '5,000+',
        avgSalaryUzb: '$500–2,000',
        marketInfo: 'O\'zbekistonda tibbiy asboblar import qilinadi, lekin mahalliy ishlab chiqarishni rivojlanmoqda. Xalqaro kompaniyalar va startaplar imkoniyat ko\'paymoqda.',
        futureOutlook: 'AI va big data diagnostikani o\'zgartirmoqda. Regenerative medicine va personalized treatment muhimlashmoqda.',
        riasec: { R: 20, I: 45, A: 10, S: 15, E: 5, C: 5 },
        valuesFit: ['achievement', 'growth', 'altruism'],
        firstSteps: ['Biologiya va fizika asoslari', 'MATLAB va CAD o\'rganish', 'Tibbiy asboblar tadqiqoti', 'Biotex startapda staj']
    },
    {
        id: 'aerospace',
        icon: '🚀',
        iconBg: 'rgba(116, 185, 255, 0.2)',
        name: 'Aerospace Engineering',
        shortDesc: 'Samolyot, kosmik apparatlar, avionika va aerodinamika.',
        tags: ['Aerospace', 'Avionika', 'Aerodinamika', 'Kosmik'],
        demand: 'growing',
        demandLabel: 'O\'sib bormoqda',
        fullDesc: 'Aerospace engineering — samolyot, kosmik apparatlar va avionika tizimlarini loyihalash va ishlab chiqarish. Bu soha fizika, materialshunoslik va kompyuter fanlarini birlashtiradi. Global miqyosda kosmik turizm va commercial space o\'sishmoqda.',
        skills: ['Aerodinamika va mexanika', 'CAD/CAE (SolidWorks, ANSYS)', 'Materialshunoslik', 'Avionika tizimlari', 'Regulativ talablar (FAA, EASA)'],
        careers: ['Aerospace Engineer', 'Avionics Engineer', 'Flight Test Engineer', 'Systems Engineer', 'Propulsion Engineer'],
        salaryMin: '$500', salaryMid: '$1,300', salaryMax: '$3,500+',
        demandPercent: 70, growthRate: '+22%', vacancies: '3,000+',
        avgSalaryUzb: '$600–2,200',
        marketInfo: 'O\'zbekistonda kosmik dasturlar rivojlanmoqda. Xalqaro aerospace kompaniyalar bilan hamkorlik imkoniyati bor. Mahalliy aviatsiya sektorida ham ehtiyoj mavjud.',
        futureOutlook: 'Commercial spaceflight va drone texnologiyalari o\'sadi. Sustainable aviation va electric propulsion muhimlashmoqda.',
        riasec: { R: 15, I: 50, A: 10, S: 5, E: 10, C: 10 },
        valuesFit: ['achievement', 'growth', 'structure'],
        firstSteps: ['Fizika va matematika asoslari', 'SolidWorks va ANSYS o\'rganish', 'Aerodinamika tajriba', 'Aerospace kompaniyada staj']
    },
    {
        id: 'battery',
        icon: '🔋',
        iconBg: 'rgba(253, 203, 110, 0.2)',
        name: 'Battery va Energy Storage',
        shortDesc: 'Akumulyator, energiya saqlash, elektr transport va renewable energy.',
        tags: ['Battery', 'Energy Storage', 'EV', 'Renewable'],
        demand: 'growing',
        demandLabel: 'Juda tez o\'sib bormoqda',
        fullDesc: 'Battery va energy storage — elektr transport, renewable energy va mobil energiya uchun asosiy texnologiya. Lithium-ion, solid-state va flow battery texnologiyalari rivojlanmoqda. Global miqyosda EV o\'sishi bilan talab eksponensial o\'sadi.',
        skills: ['Elektrokimyo va materialshunoslik', 'Battery BMS tizimlari', 'Thermal management', 'Data analytics', 'Safety va regulativ talablar'],
        careers: ['Battery Engineer', 'Energy Storage Engineer', 'Battery Systems Engineer', 'Materials Scientist', 'R&D Engineer'],
        salaryMin: '$450', salaryMid: '$1,200', salaryMax: '$3,200+',
        demandPercent: 88, growthRate: '+40%', vacancies: '8,000+',
        avgSalaryUzb: '$600–2,500',
        marketInfo: 'Global EV bozori o\'sishi bilan battery talent ehtiyoji katta. O\'zbekistonda renewable energy loyihalari va EV importi o\'sib bormoqda.',
        futureOutlook: 'Solid-state battery va sodium-ion texnologiyalari o\'sadi. Second-life battery va recycling muhimlashmoqda.',
        riasec: { R: 20, I: 40, A: 5, S: 10, E: 15, C: 10 },
        valuesFit: ['achievement', 'growth', 'income'],
        firstSteps: ['Elektrokimyo asoslari', 'Battery testing va characterization', 'Renewable energy loyihada amaliyot', 'Battery startapda staj']
    }
];

const marketData = [
    {
        name: 'IT va dasturlash',
        trendVal: '+35%',
        stats: [
            { label: 'Oylik diapazon (orientir)', value: '$800–2,500' },
            { label: 'Bo\'sh o\'rinlar (taxmin)', value: '15,000+' },
            { label: 'Xalqaro yo\'l', value: 'Yuqori' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '95%', percent: 95, color: '#00B894' },
            { label: 'O\'sish tempiga yaqinlik', value: 'yuqori', percent: 85, color: '#6C5CE7' },
            { label: 'Masofaviy imkon', value: '98%', percent: 98, color: '#00CEC9' }
        ]
    },
    {
        name: 'Digital marketing',
        trendVal: '+30%',
        stats: [
            { label: 'Oylik diapazon', value: '$400–1,500' },
            { label: 'Bo\'sh o\'rinlar (taxmin)', value: '12,000+' },
            { label: 'Freelance', value: 'Keng' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '90%', percent: 90, color: '#00B894' },
            { label: 'O\'sish', value: 'yuqori', percent: 75, color: '#6C5CE7' },
            { label: 'Natijaga bog\'liq maosh', value: '85%', percent: 85, color: '#FD79A8' }
        ]
    },
    {
        name: 'Tibbiyot',
        trendVal: '+20%',
        stats: [
            { label: 'Oylik diapazon', value: '$400–2,500' },
            { label: 'Kadr ehtiyoji', value: 'Yuqori' },
            { label: 'Ta\'lim muddati', value: 'Uzoq' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '92%', percent: 92, color: '#00B894' },
            { label: 'Kirish qiyinligi', value: 'yuqori', percent: 80, color: '#E17055' },
            { label: 'Barqarorlik', value: '95%', percent: 95, color: '#00CEC9' }
        ]
    },
    {
        name: 'Qurilish va arxitektura',
        trendVal: '+22%',
        stats: [
            { label: 'Oylik diapazon', value: '$500–2,000' },
            { label: 'Loyiha sikli', value: 'Faol' },
            { label: 'Maydon ishi', value: 'Ko\'p' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '82%', percent: 82, color: '#00B894' },
            { label: 'O\'sish', value: 'o\'rta-yuqori', percent: 55, color: '#6C5CE7' },
            { label: 'Raqamli ko\'nikma (BIM)', value: '70%', percent: 70, color: '#FDCB6E' }
        ]
    },
    {
        name: 'Turizm',
        trendVal: '+32%',
        stats: [
            { label: 'Oylik diapazon', value: '$300–1,200' },
            { label: 'Til talabi', value: 'Yuqori' },
            { label: 'Mavsumiylik', value: 'Bor' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '78%', percent: 78, color: '#00B894' },
            { label: 'O\'sish', value: 'yuqori', percent: 80, color: '#6C5CE7' },
            { label: 'Mavsum ta\'siri', value: '60%', percent: 60, color: '#FDCB6E' }
        ]
    },
    {
        name: 'Logistika va e-commerce',
        trendVal: '+26%',
        stats: [
            { label: 'Oylik diapazon', value: '$400–1,800' },
            { label: 'Operatsion rollar', value: 'Ko\'p' },
            { label: 'E-commerce', value: 'Jadal' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '83%', percent: 83, color: '#00B894' },
            { label: 'O\'sish', value: 'yuqori', percent: 65, color: '#6C5CE7' },
            { label: 'Texnologik yangilanish', value: '75%', percent: 75, color: '#00CEC9' }
        ]
    },
    {
        name: 'Biomedical Engineering',
        trendVal: '+28%',
        stats: [
            { label: 'Oylik diapazon', value: '$500–2,000' },
            { label: 'Talab', value: 'O\'sib bormoqda' },
            { label: 'Global imkon', value: 'Yuqori' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '75%', percent: 75, color: '#00B894' },
            { label: 'O\'sish', value: 'yuqori', percent: 70, color: '#6C5CE7' },
            { label: 'Innovatsiya', value: '85%', percent: 85, color: '#FD79A8' }
        ]
    },
    {
        name: 'Aerospace Engineering',
        trendVal: '+22%',
        stats: [
            { label: 'Oylik diapazon', value: '$600–2,200' },
            { label: 'Talab', value: 'O\'sib bormoqda' },
            { label: 'Xalqaro imkon', value: 'O\'rtacha' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '70%', percent: 70, color: '#00B894' },
            { label: 'O\'sish', value: 'yuqori', percent: 65, color: '#6C5CE7' },
            { label: 'Kosmik sektor', value: '80%', percent: 80, color: '#FDCB6E' }
        ]
    },
    {
        name: 'Battery va Energy Storage',
        trendVal: '+40%',
        stats: [
            { label: 'Oylik diapazon', value: '$600–2,500' },
            { label: 'Talab', value: 'Juda yuqori' },
            { label: 'EV o\'sishi', value: 'Jadal' }
        ],
        bars: [
            { label: 'Talab (indeks)', value: '88%', percent: 88, color: '#00B894' },
            { label: 'O\'sish', value: 'ekstremal', percent: 90, color: '#6C5CE7' },
            { label: 'Innovatsiya', value: '95%', percent: 95, color: '#FDCB6E' }
        ]
    }
];

const riasecMeta = {
    R: { name: 'Realistic (amaliy)', short: 'Qo\'l, texnika, maydon', color: '#74B9FF' },
    I: { name: 'Investigative (tadqiqiy)', short: 'Tahlil, savol, fan', color: '#A29BFE' },
    A: { name: 'Artistic (ijodiy)', short: 'Ifoda, dizayn, g\'oya', color: '#FD79A8' },
    S: { name: 'Social (ijtimoiy)', short: 'O\'qitish, yordam, odam', color: '#00B894' },
    E: { name: 'Enterprising (tashabbus)', short: 'Ta\'sir, savdo, yetakchilik', color: '#FDCB6E' },
    C: { name: 'Conventional (tizimli)', short: 'Tartib, ma\'lumot, qoida', color: '#00CEC9' }
};

const valueMeta = {
    achievement: 'Natija va mahorat',
    independence: 'Mustaqillik',
    recognition: 'E\'tirof',
    relationships: 'Jamoa va munosabat',
    security: 'Barqarorlik',
    altruism: 'Foyda keltirish',
    income: 'Daromad',
    growth: 'O\'rganish',
    creativity: 'Ijod',
    structure: 'Tartib',
    variety: 'Xilma-xillik',
    balance: 'Ish-hayot muvozanati'
};

const styleMeta = {
    extraversion: { left: 'Tinch, yolg\'iz ish', right: 'Odamlar va tashqi energiya' },
    openness: { left: 'Aniq va sinab ko\'rilgan', right: 'Yangi g\'oya va o\'zgarish' },
    conscientiousness: { left: 'Moslashuvchan ritm', right: 'Reja va intizom' },
    stability: { left: 'Hissiy sezgirlik', right: 'Bosim ostida tinchlik' },
    agreeableness: { left: 'To\'g\'ridan-to\'g\'ri raqobat', right: 'Hamidillik va kelishuv' },
    assertiveness: { left: 'Moslashish', right: 'Qat\'iyat' }
};
