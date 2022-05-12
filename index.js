document.addEventListener('DOMContentLoaded', ()=>{
   
    // My Track List
    const tracksList = [
        {
            audioSrc:
            './tracks/liman/bukhary hifzul ilmi.mp3',
            coverSrc: 'liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Bukhary hifzul ilmi',
            id: 0,
            download:
            './tracks/liman/bukhary hifzul ilmi.mp3',
        },
       
        {
            audioSrc:
            './tracks/liman/Muhammad Tukur Tafsir yunus 17.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Suratul Yunus',
            id: 2,
            download:
            './tracks/liman/Muhammad Tukur Tafsir yunus 17.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Sahih_Bukhari2.mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhari',
            id: 3,
            download:
            './tracks/liman/Sahih_Bukhari3.mp3',
        },
       
        {
            audioSrc:
            './tracks/liman/Sahih_Bukhari3.mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhari',
            id: 4,
            download:
            './tracks/liman/Sahih_Bukhari3.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Sahihu_Bukhariy4.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhari',
            id: 5,
            download:
            './tracks/liman/Sahihu_Bukhariy4.mp3',
        }, 
        {
            audioSrc:
            './tracks/liman/Sahih_Bukhari 5.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhari',
            id: 6,
            download:
            './tracks/liman/Sahih_Bukhari 5.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Sahih_Bukhari6.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhari',
            id: 7,
            download:
            './tracks/liman/Sahih_Bukhari6.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd tafsir 5.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 8,
            download:
            './tracks/liman/muhd tafsir 5.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd tafsir 210122.mp3',
            coverSrc: './images/liman4.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 9,
            download:
            './tracks/liman/muhd tafsir 210122.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd tafsir.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 10,
            download:
            './tracks/liman/muhd tafsir.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Suratul_Nuh.mp3',
            coverSrc: './images/liman5.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 11,
            download:
            './tracks/liman/Suratul_Nuh.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Suratul Yunus1.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 12,
            download:
            './tracks/liman/Suratul Yunus1.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Suratul Yunus2.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 13,
            download:
            './tracks/liman/Suratul Yunus2.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Suratul Yunus3.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 14,
            download:
            './tracks/liman/Suratul Yunus3.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Labarina.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Labarina',
            id: 15,
            download:
            './tracks/M Mk/Labarina.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Mutuwa.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Mutuwa',
            id: 16,
            download:
            './tracks/M Mk/Mutuwa.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabilu_Allussalah.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabilu Ahlussalah',
            id: 17,
            download:
            './tracks/M Mk/Sabilu_Allussalah.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabiu_ahlil_sabai.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabiiu Ahli Sabai 1',
            id: 18,
            download:
            './tracks/M Mk/Sabiu_ahlil_sabai.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabiu_ahlil_sabai 3.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabiiu Ahli Sabai 2',
            id: 19,
            download:
            './tracks/M Mk/Sabiu_ahlil_sabai 3.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabiu_ahlil_sabai 4.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabiiu Ahli Sabai 4',
            id: 20,
            download:
            './tracks/M Mk/Sabiu_ahlil_sabai 4.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabiu_ahlil_sabai 5.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabiiu Ahli Sabai',
            id: 21,
            download:
            './tracks/M Mk/Sabiu_ahlil_sabai 5.mp3',
        },
        {
            audioSrc:
            './tracks/M Mk/Sabiu_ahlil_sabai 6.mp3',
            coverSrc: './images/mk.png',
            name: 'Malam Muhd Kabir',
            desc: 'Sabiiu Ahli Sabai 6',
            id: 22,
            download:
            './tracks/M Mk/Sabiu_ahlil_sabai 6.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Akidatul Wasiqiyya 1.mp3',
            coverSrc: './images/sabiu1.png',
            name: 'Malam Sabiu',
            desc: 'Aqidatul Wasiqiyya',
            id: 23,
            download:
            './tracks/M sabiu/Akidatul Wasiqiyya 1.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Akidatul Wasiqiyya 2.mp3',
            coverSrc: './images/sabiu2.png',
            name: 'Malam Sabiu',
            desc: 'Aqidatul Wasiqiyya',
            id: 24,
            download:
            './tracks/M sabiu/Akidatul Wasiqiyya 2.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Akidatul Wasiqiyya 3.mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Aqidatul Wasiqiyya',
            id: 25,
            download:
            './tracks/M sabiu/Akidatul Wasiqiyya 3.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Muwadda 1.mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Muwadda',
            id: 26,
            download:
            './tracks/M sabiu/Muwadda 1.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Muwadda 2.mp3',
            coverSrc: './images/sabiu1.png',
            name: 'Malam Sabiu',
            desc: 'Muwadda',
            id: 27,
            download:
            './tracks/M sabiu/Muwadda 2.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Muwadda 3.mp3',
            coverSrc: './images/sabiu2.png',
            name: 'Malam Sabiu',
            desc: 'Muwadda',
            id: 28,
            download:
            './tracks/M sabiu/Muwadda 3.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 1.mp3',
            coverSrc: './images/sabiu1.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 29,
            download:
            './tracks/M sabiu/Riyaadus Salihin 1.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 2.mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 30,
            download:
            './tracks/M sabiu/Riyaadus Salihin 2.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 3.mp3',
            coverSrc: './images/sabiu2.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 31,
            download:
            './tracks/M sabiu/Riyaadus Salihin 3.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 4.mp3',
            coverSrc: './images/sabiu4.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 32,
            download:
            './tracks/M sabiu/Riyaadus Salihin 4.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 5.mp3',
            coverSrc: './images/sabiu5.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 33,
            download:
            './tracks/M sabiu/Riyaadus Salihin 5.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 6.mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 34,
            download:
            './tracks/M sabiu/Riyaadus Salihin 6.mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Riyaadus Salihin 7.mp3',
            coverSrc: './images/sabiu4.png',
            name: 'Malam Sabiu',
            desc: 'Riyadus Salihin',
            id: 35,
            download:
            './tracks/M sabiu/Riyaadus Salihin 7.mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (1).mp3',
            coverSrc: './images/albasu4.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 36,
            download:
            './tracks/Albasu/Minhajul Muslim (1).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (2).mp3',
            coverSrc: './images/albasu2.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 37,
            download:
            './tracks/Albasu/Minhajul Muslim (2).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (3).mp3',
            coverSrc: './images/albasu1.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 38,
            download:
            './tracks/Albasu/Minhajul Muslim (3).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (4).mp3',
            coverSrc: './images/albasu5.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 39,
            download:
            './tracks/Albasu/Minhajul Muslim (4).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (5).mp3',
            coverSrc: './images/albasu4.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 40,
            download:
            './tracks/Albasu/Minhajul Muslim (5).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (6).mp3',
            coverSrc: './images/albasu1.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 41,
            download:
            './tracks/Albasu/Minhajul Muslim (6).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (7).mp3',
            coverSrc: './images/albasu1.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 41,
            download:
            './tracks/Albasu/Minhajul Muslim (7).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (8).mp3',
            coverSrc: './images/albasu1.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 42,
            download:
            './tracks/Albasu/Minhajul Muslim (8).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (9).mp3',
            coverSrc: './images/albasu2.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 43,
            download:
            './tracks/Albasu/Minhajul Muslim (9).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (10).mp3',
            coverSrc: './images/albasu3.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 44,
            download:
            './tracks/Albasu/Minhajul Muslim (10).mp3',
        },
        {
            audioSrc:
            './tracks/Albasu/Minhajul Muslim (11).mp3',
            coverSrc: './images/albasu4.png',
            name: 'Malam Abdurrahman Albasu',
            desc: 'Minhajul Muslim',
            id: 45,
            download:
            './tracks/Albasu/Minhajul Muslim (11).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (1).mp3',
            coverSrc: './images/sabiu1.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 46,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (1).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (2).mp3',
            coverSrc: './images/sabiu2.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 47,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (2).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (3).mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 48,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (3).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (4).mp3',
            coverSrc: './images/sabiu4.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 49,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (4).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (5).mp3',
            coverSrc: './images/sabiu1.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 50,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (5).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (6).mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 51,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (6).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (7).mp3',
            coverSrc: './images/sabiu3.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 52,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (7).mp3',
        },
        {
            audioSrc:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (8).mp3',
            coverSrc: './images/sabiu2.png',
            name: 'Malam Sabiu',
            desc: 'Sharhu Risalatul Fadlil Islam',
            id: 53,
            download:
            './tracks/M sabiu/Sharhu Risalatu fadlil Islam  (8).mp3',
        },
        {
            audioSrc:
            './tracks/M Mukhtar/kaidojin mu amala da mutane amusulunci  (1).aac',
            coverSrc: './images/m mukhtar.jpg',
            name: 'Malam Mukhtar Muhammad',
            desc: 'Kaidojin muamala a musulunci 1',
            id: 54,
            download:
            './tracks/M Mukhtar/kaidojin mu amala da mutane amusulunci  (1).aac',
        },
        {
            audioSrc:
            './tracks/M Mukhtar/kaidojin mu amala da mutane amusulunci  (2).aac',
            coverSrc: './images/m mukhtar.jpg',
            name: 'Malam Mukhtar Muhammad',
            desc: 'Kaidojin muamala a musulunci 2',
            id: 55,
            download:
            './tracks/M Mukhtar/kaidojin mu amala da mutane amusulunci  (2).aac',
        },
        {
            audioSrc:
            './tracks/liman/Muhammad Tukur Tafsir  (1).mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 56,
            download:
            './tracks/liman/Muhammad Tukur Tafsir  (1).mp3',
        },
        {
            audioSrc:
            './tracks/liman/Muhammad Tukur Tafsir  (2).mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 57,
            download:
            './tracks/liman/Muhammad Tukur Tafsir  (2).mp3',
        },
        {
            audioSrc:
            './tracks/liman/Muhammad Tukur Tafsir  (3).mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 58,
            download:
            './tracks/liman/Muhammad Tukur Tafsir  (3).mp3',
        },
        {
            audioSrc:
            './tracks/liman/Muhammad Tukur Tafsir  (4).mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 59,
            download:
            './tracks/liman/Muhammad Tukur Tafsir  (4).mp3',
        },
        {
            audioSrc:
            './tracks/liman/Sahih Bukhary.mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhary',
            id: 60,
            download:
            './tracks/liman/Sahih Bukhary.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd Tafsir 10.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 61,
            download:
            './tracks/liman/muhd Tafsir 10.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd Tafsir 11.mp3',
            coverSrc: './images/liman4.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 62,
            download:
            './tracks/liman/muhd Tafsir 11.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd Tafsir 12.mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 63,
            download:
            './tracks/liman/muhd Tafsir 12.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd tafsir 13.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 64,
            download:
            './tracks/liman/muhd tafsir 13.mp3',
        },
        {
            audioSrc:
            './tracks/liman/muhd tafsir 14.mp3',
            coverSrc: './images/liman4.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 65,
            download:
            './tracks/liman/muhd tafsir 14.mp3',
        },
        {
            audioSrc:
            './tracks/liman/sahih bukhary 7.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhary',
            id: 66,
            download:
            './tracks/liman/sahih bukhary 7.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Tafsir 15.mp3',
            coverSrc: './images/liman2.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 67,
            download:
            './tracks/liman/Tafsir 15.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Tafsir 16.mp3',
            coverSrc: './images/liman3.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 68,
            download:
            './tracks/liman/Tafsir 16.mp3',
        },
        {
            audioSrc:
            './tracks/liman/Tafsir 17.mp3',
            coverSrc: './images/liman4.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Tafsir',
            id: 69,
            download:
            './tracks/liman/Tafsir 17.mp3',
        },
        {
            audioSrc:
            './tracks/liman/sahih bukhary8.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Sahih Bukhary',
            id: 70,
            download:
            './tracks/liman/sahih bukhary8.mp3',
        },
        {
            audioSrc:
            './tracks/liman/lecture.mp3',
            coverSrc: './images/liman1.png',
            name: 'Malam Muhammad Tukur',
            desc: 'Lecture',
            id: 71,
            download:
            './tracks/liman/lecture.mp3',
        },
        {
            audioSrc:
            './tracks/m salisu/Mal salisu Hassan 4.mp3',
            coverSrc: './images/salis (1).png',
            name: 'Malam Salisu Hassan',
            desc: 'Tafsir',
            id: 72,
            download:
            './tracks/m salisu/Mal salisu Hassan 4.mp3',
        },
        {
            audioSrc:
            './tracks/m salisu/Mal salisu Hassan 5.mp3',
            coverSrc: './images/salis (2).png',
            name: 'Malam Salisu Hassan',
            desc: 'Tafsir',
            id: 73,
            download:
            './tracks/m salisu/Mal salisu Hassan 5.mp3',
        },
        {
            audioSrc:
            './tracks/m salisu/Mal salisu Hassan 6.mp3',
            coverSrc: './images/salis (3).png',
            name: 'Malam Salisu Hassan',
            desc: 'Tafsir',
            id: 74,
            download:
            './tracks/m salisu/Mal salisu Hassan 6.mp3',
        },
        {
            audioSrc:
            './tracks/m salisu/Mal salisu Hassan 7.mp3',
            coverSrc: './images/salis (5).png',
            name: 'Malam Salisu Hassan',
            desc: 'Tafsir',
            id: 75,
            download:
            './tracks/m salisu/Mal salisu Hassan 7.mp3',
        },
       

    ];  
    
    // VARTABLES

    const currentTrackName = document.querySelector('header h3');
    const currentTrackDesc = document.querySelector('header p');
    const currentTrackCover = document.querySelector('header img');
    const currentTrackAudio = document.querySelector('audio');
    const playPauseBtn = document.querySelector('.event-playPause');
    const muteUnmuteBtn = document.querySelector('.event-muteUnmute');
    const playNextBtn = document.querySelector('.event-next');
    const playPrevBtn = document.querySelector('.event-prev');
    const progress = document.querySelector('.slider-progress');
    const currentTrackTime = document.querySelector('.count-current');
    const finalTrackTime = document.querySelector('.count-final');
    
    // Add Tracks To Page

    (function aaddMyTrackList(){
        for (let track of tracksList){
            let li = document.createElement('li');
            li.id = track.id
            li.innerHTML = `
            
                <span class="track-number">${track.id}</span>
                <img src="${track.coverSrc}" alt="track image" class="track-img">
                <div class="track-detail">
                    <p class="track-detail_name">${track.name}</p>
                    <p class="track-detail_desc"><small>${track.desc}</small></p>
                    <p class=""><a href="${track.download}" download = '${track.download}' >
                    <button>Download</button>
                    </a></p>
                </div>
            `;

            document.querySelector('ul').appendChild(li);

            (function(id){
                li.addEventListener('click', ()=>{
                    playSelectedTrack(id)

                })
            })(track.id)
        }
    })();

    let trackId = 0;

    const loadTrack = songId =>{
        const song = tracksList.find(track=>track.id === songId);

        const { audioSrc,coverSrc,name,desc} = song;

        currentTrackName.innerHTML = name; 
        currentTrackDesc.innerHTML = desc;
        currentTrackAudio.src = audioSrc;
        currentTrackCover.src = coverSrc;
    };

    const playSelectedTrack = songId => {
        trackId = songId;
        loadTrack(songId)
        playTrack();
    };

    loadTrack(trackId);

    const playTrack = ()=>{
        playPauseBtn.classList.remove('fa-play')
        playPauseBtn.classList.add('fa-pause')

        currentTrackAudio.play()
    };

    const pauseTrack = ()=>{
        playPauseBtn.classList.remove('fa-pause')
        playPauseBtn.classList.add('fa-play')

        currentTrackAudio.pause()
    };

    const playprevTrack = ()=>{
        trackId--;
        if (trackId<0) {
            trackId = tracksList.length-1;
        }

        loadTrack(trackId);
        playTrack()
    };

    const playNextTrack = ()=>{
        trackId++;
        if (trackId > tracksList.length - 1) {
            trackId = 0;
        }

        loadTrack(trackId);
        playTrack()
    };

    const muteUnmuteTrack = ()=>{
        if (currentTrackAudio.muted) {
            currentTrackAudio.muted = false;
            muteUnmuteBtn.classList.remove('fa-volume-mute');
            muteUnmuteBtn.classList.add('fa-volume-up')
        }else{
            currentTrackAudio.muted = true;
            muteUnmuteBtn.classList.remove('fa-volume-up');
            muteUnmuteBtn.classList.add('fa-volume-mute');
        }
    };

    const updateprogress = ()=>{
        const currentTime = currentTrackAudio.currentTime;
        const trackDuration = currentTrackAudio.duration;
        const percent = (currentTime / trackDuration) * 100;
        
        // Time Line Slider Update
        progress.style.width = percent + '%';
        let curMins = Math.floor(currentTime/60);
        let curSecs = Math.floor(currentTime - curMins * 60);
        let durMins = Math.floor(trackDuration / 60) || '--';
        let durSecs = Math.floor(trackDuration - durMins * 60) || '--';
        
        if (curMins < 100) {
            curMins = `0${curMins}`;
        }
        if (curSecs < 10) {
            curSecs = `0${curSecs}`;
        }
        if (durMins < 10) {
            durMins = `0${durMins}`;
        }
        if (durSecs < 10) {
            durSecs = `0${durSecs}`;
        }

        currentTrackTime.innerHTML = `${curMins}:${curSecs}`;
        finalTrackTime.innerHTML = `${durMins}:${durSecs}`;
    };


    // event listeners

    playPauseBtn.addEventListener('click', ()=>{
        const currentPlaying = playPauseBtn.classList.contains('fa-pause');

        currentPlaying ? pauseTrack() : playTrack();

    });

    muteUnmuteBtn.addEventListener('click', ()=> muteUnmuteTrack())

    playNextBtn.addEventListener('click', ()=> playNextTrack());
    playPrevBtn.addEventListener('click', ()=> playprevTrack());

    currentTrackAudio.addEventListener('timeupdate', ()=>updateprogress())

    
    // const filter = document.getElementById('filter');
    // filter.addEventListener('input', (e) => filterData(e.target.value))

    // function filterData(searchTerm){
    //     tracksList.forEach(item => {
    //         if(item.desc.toLowerCase().includes(searchTerm.toLowerCase())){
    //             item.classList.remove('hide')
    //         } else {
    //             item.classList.add('hide')
    //         }
    //     });
    // }
    

});




