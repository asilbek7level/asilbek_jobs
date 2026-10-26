const TEST_SECTIONS = [
    { id: 'interests', title: 'Qiziqishlar', hint: 'Faoliyatning o\'zi yoqadimi — hozirgi mahoratingiz emas.' },
    { id: 'values', title: 'Ish qadriyatlari', hint: 'Ishda nima muhimligini belgilang.' },
    { id: 'style', title: 'Ish uslubi', hint: 'Odatdagi holatingizga yaqin javob bering, "ideal men"ga emas.' }
];

const LIKERT = [
    { v: 1, label: 'Umuman yoqmaydi' },
    { v: 2, label: 'Yoqmaydi' },
    { v: 3, label: 'Betaraf' },
    { v: 4, label: 'Yoqadi' },
    { v: 5, label: 'Juda yoqadi' }
];

const LIKERT_AGREE = [
    { v: 1, label: 'Mutlaqo yo\'q' },
    { v: 2, label: 'Ko\'proq yo\'q' },
    { v: 3, label: 'Aralash' },
    { v: 4, label: 'Ko\'proq ha' },
    { v: 5, label: 'To\'liq ha' }
];

const testItems = [
    // RIASEC Interests (36 questions - 6 per type)
    { id: 1, section: 'interests', text: 'Mexanik qurilma yoki jihozni tushunib, tuzatish.', dim: 'R' },
    { id: 2, section: 'interests', text: 'Ochiq havoda, jismoniy harakat bilan ishlash.', dim: 'R' },
    { id: 3, section: 'interests', text: 'Qurilish, ta\'mir yoki o\'rnatish ishlarida qatnashish.', dim: 'R' },
    { id: 4, section: 'interests', text: 'Asbob-uskuna, transport yoki ishlab chiqarish liniyasi bilan ishlash.', dim: 'R' },
    { id: 5, section: 'interests', text: 'O\'simlik, tuproq yoki hayvonlar bilan amaliy shug\'ullanish.', dim: 'R' },
    { id: 6, section: 'interests', text: 'Yuk, ombor yoki yetkazib berishni jismonan tashkil qilish.', dim: 'R' },

    { id: 7, section: 'interests', text: 'Ilmiy yoki texnik savolga izlanish orqali javob qidirish.', dim: 'I' },
    { id: 8, section: 'interests', text: 'Ma\'lumotni tahlil qilib, qonuniyat topish.', dim: 'I' },
    { id: 9, section: 'interests', text: 'Laboratoriya, diagnostika yoki tajriba muhitida ishlash.', dim: 'I' },
    { id: 10, section: 'interests', text: 'Murakkab tizim (dastur, organizm, iqtisod) qanday ishlashini tushunish.', dim: 'I' },
    { id: 11, section: 'interests', text: 'Gipoteza qo\'yib, uni tekshirish.', dim: 'I' },
    { id: 12, section: 'interests', text: 'Uzoq vaqt diqqat bilan o\'rganish va o\'qish.', dim: 'I' },

    { id: 13, section: 'interests', text: 'Vizual dizayn, maket yoki brend tili yaratish.', dim: 'A' },
    { id: 14, section: 'interests', text: 'Hikoya, ssenariy yoki ijodiy matn yozish.', dim: 'A' },
    { id: 15, section: 'interests', text: 'Video, ovoz yoki animatsiya montaj qilish.', dim: 'A' },
    { id: 16, section: 'interests', text: 'Estetika — rang, shakl, ohang — ustida ishlash.', dim: 'A' },
    { id: 17, section: 'interests', text: 'Qoidalari aniq bo\'lmagan ijodiy masalani yechish.', dim: 'A' },
    { id: 18, section: 'interests', text: 'O\'z g\'oyangizni sahna, ekran yoki nashrda ko\'rsatish.', dim: 'A' },

    { id: 19, section: 'interests', text: 'Boshqalarga yangi ko\'nikmani tushuntirish.', dim: 'S' },
    { id: 20, section: 'interests', text: 'Odamning muammosini tinglab, yo\'l ko\'rsatish.', dim: 'S' },
    { id: 21, section: 'interests', text: 'Guruhda ishlab, kayfiyat va hamjihatlikni saqlash.', dim: 'S' },
    { id: 22, section: 'interests', text: 'Bemor, mijoz yoki o\'quvchining holatini tushunish.', dim: 'S' },
    { id: 23, section: 'interests', text: 'Jamiyatga foydali xizmat yoki volontyorlik.', dim: 'S' },
    { id: 24, section: 'interests', text: 'Nizo yoki tushunmovchilikni yumshatish.', dim: 'S' },

    { id: 25, section: 'interests', text: 'Mahsulot, g\'oya yoki xizmatni ishontirib taqdim etish.', dim: 'E' },
    { id: 26, section: 'interests', text: 'Jamoani maqsad sari yetaklash.', dim: 'E' },
    { id: 27, section: 'interests', text: 'Muzokara olib borish va kelishuvga erishish.', dim: 'E' },
    { id: 28, section: 'interests', text: 'Tadbir, kampaniya yoki loyihani boshlab yuborish.', dim: 'E' },
    { id: 29, section: 'interests', text: 'O\'z tashabbusingiz bilan biznes yoki loyiha ochish.', dim: 'E' },
    { id: 30, section: 'interests', text: 'Odamlarni harakatga undash (sotuv, tashviqot, safarbarlik).', dim: 'E' },

    { id: 31, section: 'interests', text: 'Hisob, jadval va hujjatlarni tartibda yuritish.', dim: 'C' },
    { id: 32, section: 'interests', text: 'Qoida va standartga qat\'iy rioya qilish.', dim: 'C' },
    { id: 33, section: 'interests', text: 'Ma\'lumotni tekshirib, xatoni topish.', dim: 'C' },
    { id: 34, section: 'interests', text: 'Moliyaviy yoki operatsion hisobot tayyorlash.', dim: 'C' },
    { id: 35, section: 'interests', text: 'Takrorlanuvchi, tizimli vazifalarni barqaror bajarish.', dim: 'C' },
    { id: 36, section: 'interests', text: 'Arxiv, baza yoki ombor hisobini aniq saqlash.', dim: 'C' },

    // Work Values (12 questions)
    { id: 37, section: 'values', scale: 'agree', text: 'Ishda aniq natija va mahorat o\'sishi menga e\'tirofdan muhimroq.', dim: 'achievement' },
    { id: 38, section: 'values', scale: 'agree', text: 'Qachon va qanday ishlashimni o\'zim belgilashim muhim.', dim: 'independence' },
    { id: 39, section: 'values', scale: 'agree', text: 'Mening ishim ko\'rinishi va maqtov olishi men uchun muhim.', dim: 'recognition' },
    { id: 40, section: 'values', scale: 'agree', text: 'Yaxshi jamoa va insoniy munosabat maoshdan kam emas.', dim: 'relationships' },
    { id: 41, section: 'values', scale: 'agree', text: 'Barqaror ish, tushunarli qoidalar va kafolat menga tinchlik beradi.', dim: 'security' },
    { id: 42, section: 'values', scale: 'agree', text: 'Ishim boshqa odamning hayotini yaxshilasa, charchoqqa arziydi.', dim: 'altruism' },
    { id: 43, section: 'values', scale: 'agree', text: 'Yuqori daromad — kasb tanlovimdagi asosiy mezonlardan biri.', dim: 'income' },
    { id: 44, section: 'values', scale: 'agree', text: 'Doim yangi narsa o\'rganadigan ishni afzal ko\'raman.', dim: 'growth' },
    { id: 45, section: 'values', scale: 'agree', text: 'Ijodiy erkinlik bo\'lmasa, ish tez zeriktiradi.', dim: 'creativity' },
    { id: 46, section: 'values', scale: 'agree', text: 'Aniq rol, jarayon va tartib meni samarali qiladi.', dim: 'structure' },
    { id: 47, section: 'values', scale: 'agree', text: 'Har kuni bir xil ish emas, xilma-xil vazifa kerak.', dim: 'variety' },
    { id: 48, section: 'values', scale: 'agree', text: 'Ish hayotimdagi boshqa narsalarni (oilа, salomatlik) siqib qo\'ymasligi kerak.', dim: 'balance' },

    // Work Style (12 questions - Big Five)
    { id: 49, section: 'style', scale: 'agree', text: 'Uzoq suhbat, uchrashuv va tarmoq meni quvvatlaydi (emas, charchatadi).', dim: 'extraversion' },
    { id: 50, section: 'style', scale: 'agree', text: 'Sinab ko\'rilgan usuldan ko\'ra yangi yondashuvni sinab ko\'rishni yoqtiraman.', dim: 'openness' },
    { id: 51, section: 'style', scale: 'agree', text: 'Reja, muddat va tartibsiz ish meni asabiylashtiradi.', dim: 'conscientiousness' },
    { id: 52, section: 'style', scale: 'agree', text: 'Bosim va noaniqlikda ham nisbatan tinch qola olaman.', dim: 'stability' },
    { id: 53, section: 'style', scale: 'agree', text: 'Kelishuv va boshqalarning his-tuyg\'usi menga g\'alabadan muhimroq bo\'lishi mumkin.', dim: 'agreeableness' },
    { id: 54, section: 'style', scale: 'agree', text: 'Kerak bo\'lsa, noqulay fikrni ochiq aytaman va yo\'nalishni ushlab turaman.', dim: 'assertiveness' },
    { id: 55, section: 'style', scale: 'agree', text: 'Yolg\'iz, chuqur ishlash menga jamoa shovqinidan ko\'ra mos.', dim: 'extraversion', reverse: true },
    { id: 56, section: 'style', scale: 'agree', text: 'Qoidani buzadigan "kreativ" yechimdan ko\'ra ishonchli usulni tanlayman.', dim: 'openness', reverse: true },
    { id: 57, section: 'style', scale: 'agree', text: 'Reja o\'zgarsa, osongina moslashaman va batafsil reja shart emas.', dim: 'conscientiousness', reverse: true },
    { id: 58, section: 'style', scale: 'agree', text: 'Tanqid yoki muvaffaqiyatsizlik meni uzoq vaqt bezovta qiladi.', dim: 'stability', reverse: true },
    { id: 59, section: 'style', scale: 'agree', text: 'Natija uchun qattiq raqobatlashishdan qochmayman.', dim: 'agreeableness', reverse: true },
    { id: 60, section: 'style', scale: 'agree', text: 'Boshqalar qaror qilsin, men moslashaman — bu menga qulay.', dim: 'assertiveness', reverse: true }
];
