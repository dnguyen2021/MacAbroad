import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage'
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];
  public savedItems: any = [];
  public boolean;
  // public items2: any = [];
  // public savedItems: any = [];
  // public stars: any = [];

  constructor(public afs: AngularFirestore) {
    // this.stars = [1, 2, 3]
    // this.items2 = [...this.items]
    this.items = [
      {"program": {
          "locationName": "Ghana",
          "housing": "Residence Hall, Residence Hall- Local Roommate",
          "programGroup": "Group A - Exchange:",
          "programName": "Ashesi University College",
          "summary": "This is an exchange program where students swap places with a student from Ashesi University College for one semester. Ashesi University College offers a unique academic program that blends the liberal arts and African Studies with professional fields such as business administration and computer science.  It is situated atop a hill overlooking a village about 60-90 minutes from downtown Accra. Exchange students are fully integrated into campus life, live on campus and generally enroll in four classes per semester, which are taken with degree-seeking students. Students choose from courses offered in a variety of disciplines (Liberal Arts Core, African Studies, Computer Science, Business Administration, and Management Information Systems).",
          "GPA": "3",
          "language": "English",
          "areaName": "African Studies, Computer Science, Economics",
          "academicFeatures": "Civic Engagement, Courses at local university, Creative Work, Independent Study Project (ISP)"
          ,"value": 0
          ,"img": "ashesi.jpg",
          "website": "https://www.ashesi.edu.gh/join-our-annual-trip/180-academics/office-of-diversity-and-international-programmes/1804-for-international-students.html"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      }, {
        "program":{
          "locationName":"Various",
          "housing":"No Housing Provided",
          "programGroup": "Group A - Exchange:",
          "programName":"ISEP- International Student Exchange Programs",
          "summary":"International Student Exchange Programs (ISEP) offers an exchange program through a wide variety of international university partners. Beyond the classroom, ISEP’s mission is to offer an immersive experience so all programs are also focused on language and culture.  While every institution is unique, students can expect to enroll in 16 credits. Courses will be with local and other international students. Depending on the university program, students may have the opportunity to pursue an internship, independent research, and other unique offerings",
          "GPA":"No GPA Requirement",
          "language":"Arabic, English, French, German, Other, Spanish, Portuguese, Japanese, Italian, Hebrew, Chinese",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Internship"
          ,"value": 0
          ,"img": "isep.jpg",
          "website":"https://www.isepstudyabroad.org/"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"Singapore",
          "housing":"Marcus Carrigan",
          "programGroup": "Group A - Exchange:",
          "programName":"NTU- Nanyang Technological University",
          "summary":"Exchange program with Nanyang Technological University (NTU), one of the top universities in the world with globally acknowledged strengths in science and engineering. Exchange students participate in the Trailblazer program, organized by NTU's Office of Global Education and Mobility (OGEM). Students typically enroll in four to five courses for a total credit load of 15-16 in the College of Humanities, Arts and Social Sciences; the College of Science; and/or the College of Engineering. There are many clubs, sports, or volunteer opportunities for students to get involved in on campus as well. Students reside in residence halls or off-campus housing.",
          "GPA":"Apartment, Residence Hall, Residence Hall- Local Roommate",
          "language":"English",
          "areaName":"Arabic, Art (Studio), Art History, Asian Languages and Cultures, Astronomy, Biology, Chemistry, Chinese, Community and Global Health, Computer Science, Creative Writing, Economics, English, Environmental Studies, French and Francophone Studies, German Studies, History, International Development, International Studies, Japanese, Linguistics, Mathematics, Media and Cultural Studies, Neuroscience Studies, Philosophy, Physics, Political Science, Psychology, Sociology, Spanish, Statistics, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work"
          ,"value": 0
          ,"img": "ntu.jpg",
          "website":"http://global.ntu.edu.sg/GMP/GEMTrailblazer/GEMTrailblazerexchange/Pages/index.aspx"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Marcus Carrigan",
          "programGroup": "Group A - Exchange:",
          "programName":"Sciences Po",
          "summary":"Direct exchange program where a Macalester and a Sciences Po student switch places. Sciences Po is an international research university and is regarded as one of the world's premier institutions for social science. It is known for combining approaches and confronting different worldviews. This tradition of diversity and multidisciplinary approach makes Sciences Po an active participant in public debate and a forum where thought meets action. The main campus is in Paris, and there are six regional campuses with a specific focus. All campuses are bilingual - French and English - with some locations offering content courses in additional languages as well (German, Arabic, etc.). Students enroll in 30 ECTS per semester, which equals 15 semester credits. Students are required to find their own accommodation.",
          "GPA":"Other",
          "language":"English, French",
          "areaName":"African Studies, Anthropology, Arabic, Asian Languages and Cultures, Chinese, Creative Writing, Critical Theory, Economics, Environmental Studies, French and Francophone Studies, Geography, German Studies, Hebrew, History, Human Rights and Humanitarianism, International Development, International Studies, Japanese, Latin American Studies, Legal Studies Program, Media and Cultural Studies, Middle Eastern Studies and Islamic Civilization, Philosophy, Political Science, Portuguese, Pre-Law, Religious Studies, Russian Studies, Sociology, Spanish, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university"
          ,"value": 0
          ,"img": "sciences.jpg",
          "website":"http://www.sciencespo.fr/en/about/our-campuses"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"Germany\nAustria",
          "housing":"Shanti Freitas",
          "programGroup": "Group A - Macalester:",
          "programName":"German Studies Program",
          "summary":"The Macalester: German Studies Program is a unique six-month program based in Berlin and Vienna that provides students with the opportunity to gain high proficiency in German and to immerse themselves academically, culturally, and socially in both Germany and Austria. It emphasizes German language acquisition, German and Austrian theater, and Austrian cultural and political history. Students study at the German Language Academy of Humboldt Universität in Berlin and at the University of Vienna.",
          "GPA":"Apartment, Residence Hall",
          "language":"German",
          "areaName":"American Studies, Anthropology, Art History, Astronomy, Biology, Chemistry, Computer Science, Critical Theory, Economics, Geography, German Studies, History, International Studies, Mathematics, Media and Cultural Studies, Music, Philosophy, Physics, Political Science, Psychology, Religious Studies, Sociology, Statistics, Theater",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "german.jpg",
          "website":"https://www.macalester.edu/german/studyabroad/#/0"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"South Africa",
          "housing":"Apartment",
          "programGroup": "Group A - Macalester:",
          "programName":"Globalization, the Environment, and Society in Cape Town",
          "summary":"This Macalester-Pomona-Swarthmore consortium program called Globalization, the Environment, and Society in Cape Town explores the physical and human landscape of South Africa. It is housed in the Department of Environmental & Geographical Science at the University of Cape Town (UCT). Students from all three U.S. colleges, along with a few local South African students, start the semester by taking a 4-week seminar co-taught by one Consortium faculty member and one UCT faculty member. Students then enroll in two courses at the University of Cape Town and complete a directed study project.",
          "GPA":"3",
          "language":"English",
          "areaName":"African Studies, Anthropology, Biology, Economics, Environmental Studies, Food, Agriculture, and Society, Geography, Geology, Urban Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "globalization.jpg",
          "website":"https://macalester-csa.terradotta.com/index.cfm?FuseAction=Programs.ViewProgramAngular&id=10074",
          "group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Residence Hall",
          "programGroup": "Group A - Macalester:",
          "programName":"Perspectives on Globalization",
          "summary":"Using globalization as a master concept and The Hague in The Netherlands as its home, the Macalester: Perspectives on Globalization Program engages students in major questions concerning the human condition: human rights, urban diversity, and global governance. The program starts with a 3-week seminar in July/August, taught by a Macalester faculty member, and then this program partners with Leiden University College for Macalester students to direct enroll and choose from a variety of courses for fall semester.",
          "GPA":"3.2",
          "language":"English",
          "areaName":"Community and Global Health, Economics, Human Rights and Humanitarianism, Political Science",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "perspectives.jpg",
          "website":"https://macalester-csa.terradotta.com/index.cfm?FuseAction=Programs.ViewProgramAngular&id=10000"
          ,"group": "Macalester Faculty-Led and Exchange Programs"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"ACM: Newberry Seminar: Research in the Humanities",
          "summary":"The Newberry Library is one of the world's leading independent research libraries. Focusing on the humanities, its evolving collections embrace the history and literature of  Western Europe and the Americas. With an active educational and cultural presence in Chicago, the Newberry offers a host of exhibits, lectures, classes, concerts, and other public programming related to its collections. In addition, the Newberry makes available a variety of highly-acclaimed fellowships and programs to scholars, teachers, and undergraduates. Located in the heart of Chicago's Gold Coast neighborhood, the Library is near theatres, museums, parks, concerts, shopping, restaurants, and Lake Michigan, making it a vibrant location from which to experience all that Chicago has to offer. The ACM Newberry Seminar offers motivated undergraduate students a tremendous opportunity to conduct independent study and research while working closely with professors and scholars in one of the world's great cities. Participants write a substantial paper on a topic of their choice, based on research in the rich primary collections of the Newberry Library. They work closely with faculty members and a select group of colleagues in a thematic seminar setting, providing context and guidance for their research. In some cases, the paper may qualifiy as a senior or honors thesis. In all cases, the fall seminar gives participants significant research experience that prepares them for graduate study, professional education, or their careers. This program is offered fall semester only and each year, the seminar is taught by a team of two visiting faculty members, with a focus on a specific theme in the humanities. Students live in furnished, shared apartments within walking distance of the Newberry Library, where the majority of their research and work takes place.  During the fall semester, students can gain additional work experience through a variety of part-time jobs at the Library.",
          "GPA":"Apartment",
          "language":"English",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Independent Study Project (ISP)"
          ,"value":0
          ,"img": "acm.jpeg",
          "website":"https://www.acm.edu/programs/14/newberry/index.html"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Hungary",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"AIT: Aquincum Institute of Technology",
          "summary":"Aquincum Institute of Technology (AIT) is a unique program for students majoring in computer science, software engineering, and related disciplines. Classes are taught in English by Hungarian professors. The academic program is based on a philosophy of small classes, close collaboration of students and faculty, and hands-on work through group projects. A full course load for the semester is 16-18 credits (2-4 credits per course). Students choose courses from within four main categories: Foundational Courses in Computer Science, Advanced Applications, Creative Design and Entrepreneurship, and Humanities courses related Hungary's rich cultural heritage. Students live in apartment-style housing with other program participants.",
          "GPA":"3",
          "language":"English",
          "areaName":"Computer Science",
          "academicFeatures":"Creative Work"
          ,"value":0
          ,"img": "ait.jpg",
          "website":"http://www.ait-budapest.com/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Kazakhstan\nRussia\nRussia\nRussia",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"American Councils: Russian Language & Area Studies Program",
          "summary":"The Russian Language & Area Studies Program (RLASP) provides approximately 20 hours per week of in-class instruction in Russian grammar, phonetics, conversation, and cultural studies in Russia or Kazakhstan. Program features include homestays, weekly excursions, travel to other regions of Russia/Kazakhstan, conversation partners, and a wide range of opportunities to pursue internships, volunteering, hobbies, and personal interests in a Russian-language context. Credit for area studies coursework is offered in such subjects as literature and history, political science, and contemporary society. All courses are taught in Russian by expert faculty with experience teaching foreign students. Students enroll in 16 credits. Students in the Heritage Speakers Program (HSP) take an active role in shaping their own curricula. When applying to the program, applicants write a short essay outlining their study goals and describing the academic program that they believe will best meet their needs as language students. American Councils Washington staff, resident directors, and Russian university faculty then work with each student to develop these initial proposals into effective, individualized programs. All programs focus on intensive language gain in the areas of grammar, conversation, and vocabulary development; courses in literature, history, and area studies are available for advanced students. Participants attend at least 12 hours per week of intensive, individualized classes. While almost all classes are conducted one-on-one with the teacher, students may study in pairs on some occasions.",
          "GPA":"2.7",
          "language":"Russian",
          "areaName":"Russian Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "acouncils.jpg",
          "website":"https://acstudyabroad.org/rlasp/",
          "SECwebsite":"http://www.acstudyabroad.org/heritage/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Morocco",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"AMIDEAST: Area & Language Studies in Morocco",
          "summary":"This is a study center program offered by AMIDEAST Education Abroad Programs located in Rabat, Morocco. Students choose from two different tracks: Area & Arabic Languages Studies or Regional Studies in French. Students in the Area & Arabic Language Studies track live with Arabic-speaking Moroccan families and students in the Regional Studies in French live with French-speaking Moroccan families or in residence halls. Volunteer and service-learning opportunities are available. The program organizes excursions to visit major cities and historical sites in Morocco. A full course load is 14-17 credits. The program offers a diverse set of course topics, such as Islam, Women in the Muslim World, North African cinema, the history and politics of Morocco, and Morocco’s relationships with its European, Mediterranean, and African neighbors. Courses are taken with other program participants",
          "GPA":"3",
          "language":"Arabic, English, French",
          "areaName":"African Studies, Economics, French and Francophone Studies, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "amideast.JPG",
          "website":"https://www.amideast.org/our-work/education-abroad-in-the-mena/abroad-programs/semester-programs/area-and-arabic-language-studies/morocco",
          "SECwebsite":"https://www.amideast.org/our-work/education-abroad-in-the-mena/abroad-programs/semester-programs/regional-studies-in-french"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Hungary",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"Budapest Semesters in Mathematics",
          "summary":"Budapest Semesters in Mathematics (BSM) provides a unique opportunity for mathematics, computer science, and educational studies majors who study under the tutelage of eminent Hungarian scholar-teachers at the Budapest University of Technology and Economics. Courses are very small and taught in English. Students typically enroll in three or four courses and 1-2 intercultural courses (3cr. or 4cr. each). In addition to the math and computer science courses offered, a few courses may be offered in Hungarian language, culture, and history. Prior to the start of the semester, students may also enroll in an optional two-week language course. An additional option has been specifically designed for students interested in teaching mathematics: Budapest Semester in Mathematics Education (BSME). This option includes classroom observations and a teaching practicum. Fall semester participants are also encouraged to take the Putnam exam while they are in Budapest.In Hungary, emphasis is placed on understanding rather than quantity, and considerable time is devoted to problem-solving and encouraging student creativity. Most students reside in apartments with other program participants, but homestays may be available upon inquiry if interested.",
          "GPA":"Apartment, Home Stay",
          "language":"English",
          "areaName":"Educational Studies, Mathematics",
          "academicFeatures":"Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "budapest.jpg",
          "website":"http://www.budapestsemesters.com/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Brazil",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Brazil",
          "summary":"CET: Brazil is a hybrid study abroad program based in São Paulo, Brazil and hosted by Pontifical Catholic University of São Paulo (PUC-SP). A recommended full course load is 15 credits. Students enroll in a CET core course 'Social Justice & Inequality in 21st Century Brazil', a Portuguese Language course, and two CET electives with the ability to take one direct enroll course depending on Portuguese proficiency.  A Traveling Seminar is offered for a weeklong excursion in Salvador da Bahia.",
          "GPA":"3",
          "language":"English, Portuguese",
          "areaName":"Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cetb.jpg",
          "website":"https://cetacademicprograms.com/programs/brazil/portuguese-language-brazil/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Japan",
          "summary":"This program, based at Osaka Gakuin University, provides students with an intensive Japanese-language learning experience.  Students complete the equivalent of at least one year of university-level Japanese study in one semester.  In addition to the intensive Japanese language course (11 credits) students select from a variety of elective options focused on local topics (3-7 credits).  Courses are with other students from US colleges and universities.  Integration with locals occurs in housing where students live in a shared apartment with Japanese roommates.",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cetj.jpg",
          "website":"https://cetacademicprograms.com/programs/japan/japanese-language-osaka-japan/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Czech Republic",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Prague",
          "summary":"This is a study abroad program designed for U.S. College students who are interested in Business and Economics, Central European Studies or Jewish Studies.  Students take 16 credits of coursework including a required Czech language course, a core course in one of the concentrations listed above, and three electives.  Students can participate in an internship for one of their electives. Highlights of the program include a two-part traveling seminar, shared apartments with fellow students and Czech roommates, and civic engagement opportunities in the local community.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Religious Studies",
          "academicFeatures":"Creative Work, Facilitated Excursion(s), Internship, Civic Engagement"
          ,"value":0
          ,"img": "cetp.jpg",
          "website":"https://cetacademicprograms.com/college-study-abroad/programs/czech-republic/cet-prague/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"China Studies Institute: Peking University",
          "summary":"This is a study center program affiliated with the American University in Washington D.C., offering language classes and 3 credit courses in English on economics, business, politics, foreign policy, philosophy, history, art and literature, women's studies, etc. The program offers an optional Chinese language immersion option, the possibility to complete an independent study project, internships, and many travel opportunities. Housing varies by track and student preference.",
          "GPA":"3.2",
          "language":"Chinese, English",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics, Political Science",
          "academicFeatures":"Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "china.jpg",
          "website":"https://csi-prod.chinacloudsites.cn/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"CIEE: Arts and Sciences in Tokyo",
          "summary":"This is a direct-enroll program located at Sophia University with additional support provided by the Council on International Educational Exchange (CIEE). Japanese courses are offered at all levels.  Students take one language course and three elective courses taught in English, or they can enroll in intensive Japanese and take two additional electives in English.",
          "GPA":"2.75",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics, Linguistics",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieea.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/japan/tokyo/arts-sciences"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Home Stay, Residence Hall- Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CIEE: Intensive Chinese Language and Culture in Nanjing",
          "summary":"This is a study away program managed by the Council on International Educational Exchange (CIEE) and hosted at Nanjing University.  The program is designed to help students improve Mandarin proficiency and cross-cultural competency through 15-18 credit hours of coursework, community interaction, and engagement. With small class sizes, homestays or local roommates, group excursions, and weekly sessions with peer tutors, CIEE study abroad in Nanjing gives you access to a full immersive cultural experience.",
          "GPA":"2.75",
          "language":"Chinese, English",
          "areaName":"Asian Languages and Cultures",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieei.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/china/nanjing/intensive-chinese-language-culture"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Portugal",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"CIEE: Language and Culture in Lisbon",
          "summary":"CIEE offers a hybrid study abroad program in Lisbon, Portugal that encourages students to study the unique history, language, and culture of the country. All students are required to take a 2-week intensive Portuguese course upon arrival, followed by a semester-long Portuguese course. Students then choose from CIEE elective courses (taught in English), or direct enroll courses (taught in Portuguese) at Universidade Nova de Lisboa or at the ISCTE Business School (taught in English). Beyond the classroom, most students stay in homestays and all are encouraged to participate in excursions and program activities for enhanced language and cultural immersion.",
          "GPA":"2.5",
          "language":"English, Portuguese",
          "areaName":"Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieelc.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/portugal/lisbon/language-culture"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Brazil",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Liberal Arts in Rio de Janeiro",
          "summary":"This is a hybrid language-intensive study abroad program through CIEE, and affiliated with the Pontifícia Universidade Católica de Rio de Janeiro (PUC-Rio). Students take at least 15 credits, consisting of the required semester Portuguese as a Second Language course, and elective courses at CIEE or PUC-Rio. Courses are taught in English or Portuguese, across a range of subject areas, including art, business, economics, history, international relations, and social communications. The program facilitates excursions in and around Rio and offers both a pre-departure and on-site orientation program to familiarize students with Rio de Janeiro.",
          "GPA":"2.5",
          "language":"English, Portuguese",
          "areaName":"American Studies, Economics, Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieelar.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/brazil/rio-de-janeiro/liberal-arts"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Dominican Republic",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Liberal Arts in Santiago, Dominican Republic",
          "summary":"This is a hybrid language-intensive study abroad program through CIEE, and affiliated with the Pontifícia Universidad Católica Madre y Maestra (PUCMM). Along with Spanish language classes, learn about the evolution of society, culture, economics, and politics of Hispaniola and the greater Hispanic Caribbean through liberal arts courses, in Spanish. All participants must enroll in a Spanish language course, the CIEE core course titled 'Contemporary Dominican Republic: Political and Socioeconomic Processes', and a minimum of two elective courses, for a total of 15-18 credits. Students live with host families, and various excursions are included throughout the semester. ",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cieelas.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/dominican-republic/santiago-de-los-caballeros/liberal-arts"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Jordan",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Middle East Studies",
          "summary":"CIEE: Middle East Studies is a study center program that is located on the Princess Sumaya University of Technology (PSUT) campus. Students choose from two different tracks: Middle East Studies or Advanced Arabic Language. A full course load is 15-18 credits. All courses are taught in Arabic for students in the Advanced Arabic language track. Courses are taught in English for the Middle East Studies track with the exception of two Arabic language courses. Students reside in homestays or apartments with other CIEE students. Program offers facilitated excursions to Jordan’s archaeological, historical, and natural wonders. Students also have the opportunity to volunteer within the community. ",
          "GPA":"2.5",
          "language":"Arabic, English",
          "areaName":"Classics, Economics, Middle Eastern Studies and Islamic Civilization, Political Science, Religious Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieeme.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/jordan/amman/middle-east-studies"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Botswana",
          "housing":"Home Stay, Residence Hall- Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Gaborone",
          "summary":"CIEE: Study Abroad in Gaborone combines CIEE study center courses with English-taught, direct enroll courses at the local university, the University of Botswana. Students choose from one of two program options: Arts + Sciences or Community Public Health. Courses offered by CIEE are only offered to the visiting US students on the program and include an internship course and a Setswana language course. At the University of Botswana, students will be enrolled with local students and can choose from a wide range of subjects.",
          "GPA":"2.75",
          "language":"English",
          "areaName":"African Studies, Political Science",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieeg.jpeg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/botswana/gaborone/arts-sciences",
          "SECwebsite":"https://www.ciee.org/go-abroad/college-study-abroad/programs/botswana/gaborone/community-public-health"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Thailand",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Khon Kaen",
          "summary":"CIEE: Study in Khon Kaen combines discipline-specific coursework, language instruction, and applied field experience. Located in the Northeast region of Thailand, Kohn Kaen is the country's fourth-largest city and is a hub for development organizations. Students chose from one of two tracks: Community Public Health or Development + Globalization. Both tracks include 15 credits and offer coursework that facilitates community engagement and field study.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Community and Global Health, Economics, Educational Studies, Urban Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cieek.jpg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/thailand/khon-kaen/development-globalization"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Costa Rica",
          "housing":"Home Stay, Other",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Monteverde",
          "summary":"In Monteverde, Costa Rica, CIEE offers two Macalester approved program options: Sustainability + the Environment and Tropical Ecology + Conservation. Both are experiential and field-based, and include a required Spanish language course with a set curriculum of 4 other courses for a total of 17 semester credits. All courses (except the Spanish language course) are taught in English, taken only with other CIEE students, and based on the local context and environment. Housing varies by program option, and both options offer applied learning experiences such as research, internships, and excursions.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Economics, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieem.jpeg",
          "website":"https://www.ciee.org/go-abroad/college-study-abroad/programs/costa-rica/monteverde/sustainability-environment",
          "SECwebsite":"https://www.ciee.org/go-abroad/college-study-abroad/programs/costa-rica/monteverde/tropical-ecology-conservation"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing": "Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName": "CIEE: Study Abroad in Seville",
          "summary":'In Seville, CIEE offers six semester-long Macalester-approved program options (each program name links to the CIEE program website for more information): Liberal Arts (LA) - designed to help advanced level Spanish students improve their spoken and written Spanish skills while they pursue coursework in a variety of subjects. Advanced Liberal Arts (ALA) - designed for students with advanced Spanish language skills and strong academic backgrounds, who will take mostly direct enroll classes at partner institutions. Business + Society (B+S) - designed for students to improve their language skills while they explore economic and business management in Spain and the European Union. International Business + Culture (IBC) - designed for students to improve their beginning to intermediate level Spanish skills while selecting from a wide variety of courses taught in English. Communication, New Media + Journalism Spanish (CNMJ Spanish) - designed for students considering a career in communications who want to combine theory and hands-on practice and take courses in Spanish. Communication, New Media + Journalism English (CNMJ English) -  designed for students considering a career in communications who want to combine theory and hands-on practice and take courses in English. On all program options, students take a 2-week intensive language course (except CNMJ English), and then complete their course load from a selection of CIEE-offered courses or direct enrollment in partner university courses from Universidad de Sevilla, Universidad Pablo de Olavide (UPO), or the EUSA School of Communications. Beyond the classroom, most students stay in homestays and all are encouraged to participate in field trips, volunteer opportunities, or internships for enhanced language and cultural immersion.',
          "GPA": "2.5, 2.9",
          "language": "English, Spanish",
          "areaName": "Art and Art History, Economics, Educational Studies, Linguistics, Neuroscience, Spanish and Portuguese, Theater and Dance",
          "academicFeatures": "Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "ciees.JPG",
          "website":"http://www.us.es/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },
        {
          "program": {
            "locationName": "Greece",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"College Year in Athens: International Center for Hellenic and Mediterranean Studies",
          "summary":"This study center program focuses on 'learning beyond the classroom' throughout Greece, exploring Ancient Greek Studies, the Byzantine era, Modern Greek Studies, and European and East Mediterranean Studies by taking 4-5 courses. Within a unique 'study travel' model, College Year in Athens (CYA) students embark upon frequent site visits, field trips, and have time for independent travel on long weekends. note of clarification: Even though this program is entitled 'college year...', it is a semester only program.",
          "GPA":"Apartment, Home Stay",
          "language":"English",
          "areaName":"Anthropology, Economics, Greek, History, Latin, Philosophy, Psychology, Neuroscience Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "college.jpg",
          "website":"http://www.cyathens.org/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"CUNY: New York Union Semester",
          "summary":"This program is a domestic urban social justice option for students studying away. Specifically, this unique full-time (16 credits) semester program combines rigorous academic study at the CUNY School of Labor and Urban Studies, taught by Labor Studies faculty, with first-hand experience within the labor movement. Students in the program are paired as interns with unions and worker-rights organizations to gain practical skills and learn first-hand the strategies these organizations use to fight for workers’ rights. During class time, students analyze the experience they gain in the field by studying the history of and current debates within the U.S. labor movement. Students live in nearby NYC neighborhoods, in apartments with friends or roommates, or find other rooms online, or live in non-profit student housing facilities. Students accepted to New York Union Semester receive a stipend to cover living expenses during their semester in the program.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"American Studies, Political Science, Sociology, Urban Studies, Legal Studies Program",
          "academicFeatures":"Civic Engagement, Internship"
          ,"value":0
          ,"img": "cuny.jpg",
          "website":"https://slu.cuny.edu/labor-studies/union-semester/#1521831256712-37288c1d-83b8"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Egypt",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"American University in Cairo",
          "summary":"This direct enroll program is located at The American University in Cairo in Cairo, Egypt. Students register for 4 or 5 courses a semester. Courses are taught in English on a variety of subjects; Arabic courses offered. AUC offers a wide variety of co-curricular activities through its student-run organizations.",
          "GPA":"2.0",
          "language":"Arabic, English",
          "areaName":"Middle Eastern Studies and Islamic Civilization, Classical Mediterranean and Middle East",
          "academicFeatures":"Civic Engagement, Courses at local university, Internship, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "auni.jpg",
          "website":"https://www.aucegypt.edu/index.php/admissions/international-students/study-abroad"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Israel",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"Hebrew University of Jerusalem",
          "summary":"This direct enroll program is located at the Rothberg International School (RIS) at The Hebrew University of Jerusalem. Students choose from one of the many programs of study, with the Undergraduate Study Abroad Program being the most common choice; this includes specializations in Business Studies or Brain & Behavioral Sciences. Students enroll in a minimum of 15 credits per semester, and Macalester students also enroll in the three-week long intensive Hebrew or Arabic language study (Ulpan) prior to the start of each semester. Courses are taught in English on a variety of subjects and a Hebrew Immersion Program is available. Both Hebrew and Arabic language courses are also offered. A comprehensive program of extracurricular activities is made available to students through the Office of Student Activities (OSA), which includes tours of Jerusalem and elsewhere throughout the country.",
          "GPA":"3",
          "language":"Arabic, English, Hebrew",
          "areaName":"Biology, Classics, Middle Eastern Studies and Islamic Civilization, Music",
          "academicFeatures":"Courses at local university, Creative Work, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hebrew.jpg",
          "website":"https://overseas.huji.ac.il/academics/undergraduate-programs/ugrad-usap/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Australia\nAustralia",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"James Cook University",
          "summary":"This is a direct enroll program offered at James Cook University (JCU), Australia’s leading tropical research university and Queensland’s second oldest university. Students enroll in 4 courses of 3 JCU credits each, for full course load of 12 JCU credits. Many courses take advantage of the local environment, with some including field trips. Students are able to participate in a variety of student life activities and can easily take advantage of their surroundings during free time. Housing is with other international and Australian students in either on- or off-campus housing.",
          "GPA":"2.8",
          "language":"English",
          "areaName":"Art and Art History, Biology, Chemistry, Economics, Environmental Studies, Geography, Geology",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "james.jpg",
          "website":"https://www.jcu.edu.au/international-students"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"Kansai Gaidai University",
          "summary":"Students in this program enroll directly in the Asian Studies Program at Kansai Gaidai University located in Hirakata City, near Osaka, Japan. Courses include up to 8 credit hours of Japanese language courses, and English-taught electives in the Social Sciences, Studio Art, Humanities, and Business/Economics with content focused on Japan or Asia.",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Asian Languages and Cultures",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "kansai.jpg",
          "website":"https://www.kansaigaidai.ac.jp/asp/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"King's College London",
          "summary":"This direct enroll program is located at King's College London, the fourth oldest college in England and a large (nearly 26,000 students) historic and prestigious research university. The college is spread across five London campuses, located in the heart of the city of London. Visiting students are housed in dormitories throughout the city. Students typically enroll in four modules from a wide range of course offerings in the humanities, sciences, and social sciences.",
          "GPA":"3.3",
          "language":"English",
          "areaName":"Chemistry, Computer Science, Economics, English, Geography, Philosophy, Political Science",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "kings.jpg",
          "website":"https://www.kcl.ac.uk/abroad/study-in-london/index.aspx"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Ireland",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University College Cork",
          "summary":"This direct enroll program is located at the University of Cork (UCC) in Ireland. Students can take modules from a wide variety of disciplines to construct a program that meets their needs. Additionally, there is a suite of modules offered specifically to visiting students during the semester to introduce them to Ireland's history, culture, civilization and environment. Over 3,300 international students study at the University during a typical academic year.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Economics, English, Geology, Music",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "ucollege.jpg",
          "website":"http://www.ucc.ie/en/international/studyatucc/visitingusandnoneustudents/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Edinburgh",
          "summary":"This direct enroll program at the University of Edinburgh offers subjects at 19 different schools. The University of Edinburgh is one of the United Kingdom’s oldest and most prestigious universities. Founded in 1583, the University of Edinburgh is ranked 5th in the UK by the Times Higher Education World University Rankings. Students live in the capital city with other international and local students in residence halls. There are many opportunities to get involved in the student and local community and participate in multiple organized trips available around Scotland and England.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Biology, Chemistry, Classics, Computer Science, Economics, Educational Studies, English, Geology, Linguistics, Mathematics, Music, Neuroscience, Philosophy, Physics, Political Science, Psychology, Religious Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "uedin.jpg",
          "website":"https://www.ed.ac.uk/global/study-abroad"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Glasgow",
          "summary":"This direct enroll program is located in Scotland at the University of Glasgow. The university was established in 1451, one of the United Kingdom's oldest universities. Students enroll in 3-4 classes per semester and can take classes across all four colleges: the College of Arts, the College of Medical, Veterinary, & Life Sciences, the College of Science & Engineering, and the College of Social Sciences. Students are also offered courses specifically for study abroad students. Students reside in student residence halls or apartments and may participate in intramural sports, clubs, or volunteer work.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Biology, Computer Science, Economics, English, Mathematics, Neuroscience",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work"
          ,"value":0
          ,"img": "uglas.jpg",
          "website":"http://www.gla.ac.uk/study/visiting/studyabroadexchange/studyabroadprogramme/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Israel",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Haifa",
          "summary":"This Direct Enroll program is located in the International School at the University of Haifa, the largest comprehensive research university in northern Israel. Students can take courses from a variety of disciplines or choose to participate in one of the following tracks: Arabic Language, Culture, & Civilization, Honors Peace & Conflict Studies, Psychology, and the Global Law Program. Students reside in dormitories with other international and Israeli students and have the opportunity to participate in a variety of activities that facilitate immersion.",
          "GPA":"3",
          "language":"Arabic, English, Hebrew",
          "areaName":"Classics, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uhaif.jpg",
          "website":"http://overseas.haifa.ac.il/index.php/study-abroad"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"New Zealand",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Otago Dunedin",
          "summary":"This direct enroll program is located at the University of Otago, a large, research-intensive university, with more than 20,000 students. Students enroll in 3-4 'papers' (courses) in the Humanities, Sciences, and/or Business. Students will find many New Zealand-focused courses available, as well as opportunities for exploratory field trips in science courses offered in Botany, Ecology, Geography, Geology and Marine Science, etc. Students have access to many recreational activities and facilities and live in flats with other international students and a 'Kiwi' host.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Chemistry, Cognitive Science, Economics, Educational Studies, Geography, Geology, Linguistics, Mathematics, Neuroscience, Physics, Psychology, Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work"
          ,"value":0
          ,"img": "uotago.jpg",
          "website":"https://www.otago.ac.nz/international/index.html"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of St. Andrews",
          "summary":"The direct enroll program at the University of St. Andrews is located within the small medieval coastal town of St Andrews, steeped in history and set in a stunning location. The program offers modules in a wide variety of disciplines with students enrolling in only 2-3 modules (courses), which are each worth 2.5-7.5 Macalester credits, allowing for the in-depth study of a particular subject. Students also may enroll in one of the 'Study Abroad Themes' of cross-disciplinary modules from fewer subject areas; 'Study Abroad Themes' are chosen on an annual basis. Students live in dormitories and enjoy a variety of campus life activities.",
          "GPA":"3.2",
          "language":"English",
          "areaName":"Art and Art History, Chemistry, Computer Science, English, Geography, Geology, Mathematics, Neuroscience, Philosophy, Physics, Political Science, Psychology",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "ustandrews.jpg",
          "website":"http://www.st-andrews.ac.uk/studyabroad/incomingstudents/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Northern Ireland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - ",
          "programName":"HECUA: Democracy and Social Change in Northern Ireland",
          "summary":"HECUA: Democracy and Social Change in Northern Ireland examines the historical, political and religious roots of the conflict in Northern Ireland, the prospects for peace, and the progress being made. Through readings, lectures, discussions, internships, group and independent study projects and field experiences, this program invites and offers interaction with those involved in social change. The program explores theoretical approaches to understanding conflict and its transformation as well as the processes underway in Northern Ireland to create a sustainable democracy. Field seminars focus on human rights, equality, conflict transformation, and education for democracy, and help students see in action the tools used to transform conflict. A seven-week, nearly full-time internship in Londonderry/Derry allows students to participate directly in efforts toward a peaceful future.  Students also spend a week in Dublin to compare life in - and the role of - the Republic and to meet with politicians involved in the peace process. Finally, each student carries out an independent study project on a topic of their choice within the core course.",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Educational Studies, Geography, Human Rights and Humanitarianism, Political Science, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuaireland.jpg",
          "website":"https://hecua.org/study-abroad/northern-ireland/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Norway",
          "housing":"Other",
          "programGroup": "Group B - ",
          "programName":"HECUA: The New Norway: Globalization, National Identity, and the Politics of Belonging",
          "summary":"HECUA: The New Norway investigates dramatic changes in Northern Europe by critically analyzing the development of the Norwegian welfare state through a wide range of topics such as globalization theories, nation-building and national identity, governance and political party systems, European integration, racial thinking, histories of racialization, international aid politics, sexuality, and environmentalism. How has globalization and immigration reshaped the politics of identity in Norway? The topical organization of the program is cumulative and deliberately contradictory, illuminating the international relevance of the Scandinavian case study.",
          "GPA":"2",
          "language":"English",
          "areaName":"Educational Studies, Geography, Human Rights and Humanitarianism, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuanorway.jpg",
          "website":"https://hecua.org/study-abroad/norway/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IAU: Marchutz School of Fine Arts - Arts Core Program",
          "summary":"This study center program is located at IAU College (IAU) in Aix-en-Provence, located in the southern region of France, and is home to the Marchutz School of Fine Arts. The center program is focused on visual arts production and criticism. Macalester students are approved for the 'Arts Core Program.' This program is designed for students who are looking for an intensive studio art program. Students enroll for one semester, in 9 credits of core courses (painting, drawing, art criticism), a French course, and one elective course.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Art and Art History",
          "academicFeatures":"Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iau.jpg",
          "website":"https://www.iaufrance.org/studyabroad/programs/aix/marchutz/coreprogram"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Germany",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Berlin Metropolitan Studies",
          "summary":"This study center program in Berlin is focused on the issues relevant to major cities today. Students enroll in 5-6 English-taught courses per semester (three credits each, for 15-18 credits). Many cultural excursions included within the course of study and as add-on activities for students. Students live in homestays throughout the city. A German language course is optional.",
          "GPA":"2.75",
          "language":"English, German",
          "areaName":"Economics",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesberlin.jpg",
          "website":"http://www.iesabroad.org/study-abroad/programs/berlin-metropolitan-studies"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Ireland",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Dublin Direct Enroll- National Theatre School of Ireland- Gaiety School of Acting",
          "summary":"This is a hybrid program offered through a partnership between the Institute for the International Education of Students (IES) and the The National Theater School of Ireland-Gaiety School of Acting (NTSI-GSA). Students complete one three-week long intensive theater course (3-credits) through IES at the beginning of the semester before directly enrolling at NTSI-GSA where they receive conservatory-style training in acting.  Students attend many theatre performances and have the opportunity to participate in field trips with IES to places outside of Dublin. Housing is with other IES students in apartments.",
          "GPA":"3",
          "language":"English",
          "areaName":"Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesdublin.JPG",
          "website":"https://www.iesabroad.org/programs/dublin-direct-enrollment-national-theatre-school-ireland-gaiety-school-acting"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: French Language Immersion & Area Studies in Nantes",
          "summary":"IES Abroad: Nantes offers a French immersion experience and program-supported direct enrollment. The program combines student support, French language instruction, and coursework at local French universities. The Université de Nantes offers courses with local students in Art History, Economics, Education, Geography, History, Humanities, Literature, and many social and natural sciences. Fall semester students can also enroll in a fine arts course at Ecole Supérieure des Beaux Arts. Students enroll in 15-19 credits per semester. Facilitated excursions are included in orientation and throughout the program. Opportunities for civic engagement and internship are available.",
          "GPA":"2.75",
          "language":"French",
          "areaName":"Art and Art History, Economics, Educational Studies, French and Francophone Studies, Linguistics, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesfrench.jpg",
          "website":"https://www.iesabroad.org/programs/nantes-french-language-immersion-area-studies"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Granada Program",
          "summary":"This is a hybrid program in Granada, Spain that features both an Intermediate and an Advanced program option. Students in the Intermediate option have the opportunity to take courses in Spanish or English at the IES Center, while students in the Advanced option have coursework conducted entirely in Spanish and includes the option to take 1-2 courses at the Universidad de Granada.  A variety of courses are offered to help students explore and better understand Spanish language, history, and culture, through an in-depth and hands-on approach. Beyond the classroom, students have a few housing options and are encouraged to get involved in the local community through volunteering and participating in university clubs and activities.",
          "GPA":"2.75",
          "language":"English, Spanish",
          "areaName":"Art and Art History, Economics, Middle Eastern Studies and Islamic Civilization, Religious Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesgranada.jpg",
          "website":"https://www.iesabroad.org/programs/granada-study-granada"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Madrid Program",
          "summary":"This is a hybrid program in Madrid, Spain that features two separate curricular program options, both of which require a total of 15-18 semester credits. Beyond the classroom, students have a few housing options and are encouraged to get involved in the local community through volunteering and participating in university clubs and activities. The Language & Area Studies Program is designed for students who want to experience the vitality of Spain and the large urban university environment. It includes a mandatory Spanish language course (4 credits) taught by IES; students then enroll in 3-4 Spanish-taught elective IES courses or courses at the local partner university, Universidad Complutense de Madrid (UCM). The Engineering, Math & Science Program is designed for engineering, math, and science students who want to take courses taught in English or Spanish at a prestigious and academically-challenging university. It includes a mandatory Spanish language course (4 credits) taught by IES; students then enroll in 3-4 IES courses (English-taught engineering electives or Spanish-taught electives) or courses in English or Spanish at the local partner university, Universidad Carlos III de Madrid (UC3M). ",
          "GPA":"2.75, 3.0",
          "language":"English, Spanish",
          "areaName":"Art and Art History, Economics, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesmadrid.jpg",
          "website":"https://www.iesabroad.org/programs/madrid-language-area-studies",
          "SECwebsite":"https://www.iesabroad.org/programs/madrid-engineering-math-science"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Italy",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Milan Program",
          "summary":"This study center program in Milan offers two approved tracks: Music: Tradition & Innovation or Italy Today. All students in both tracks enroll in 4-6 courses per semester (15-19 credits) and all students must enroll in an Italian language course (4 or 6 credits), but are free to choose from a variety of 3 credit options to complete their course loads. These include: IES Program electives (3 credits), English- or Italian-taught electives at a local university (3 credits), or an internship. In the Music: Tradition & Innovation track, students may also enroll in English-taught IES music courses (3 credits), private music instruction in English or Italian (3 credits), the strings orchestra assistantship (3 credits) and/or a vocal or instrumental performance course (3 credits). Housing options for both: homestays or student apartments with shared rooms or single rooms at an additional fee. Students are provided with many opportunities to get to know Milan, meet locals, practice Italian, visit cultural sites, and attend professional performances.",
          "GPA":"2.75",
          "language":"English, Italian",
          "areaName":"Economics, Music",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesmilan.jpg",
          "website":"http://www.iesabroad.org/study-abroad/programs/milan-music-tradition-innovation",
          "SECwebsite":"https://www.iesabroad.org/programs/milan-italy-today"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Nagoya Direct Enrollment - Nanzan University",
          "summary":"This is a direct enroll program at the Center for Japanese Studies (CJS) at Nanzan University, with additional program support provided by the Institute for the International Education of Students (IES).  The CJS is well-known for providing an integrated and intensive learning experience in Japanese language and culture for English-speaking international students. Students are required to enroll in 3-4 courses per semester (15-18 credits), including 8 credits of required Japanese language. The remaining credits can be split among English-taught area studies, Japanese-taught Arts, or Japanese-taught Seminars (for advanced language students). Students participate in a variety of excursions and may be able to get involved in student organizations. Housing is provided in residence halls or homestays. ",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Linguistics",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesnagoya.jpg",
          "website":"https://www.iesabroad.org/programs/nagoya-direct-enrollment-nanzan-university"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Study Amsterdam",
          "summary":"Taking full advantage of this exciting city’s unique balance of history and contemporary culture, IES offers Macalester students three options in Amsterdam: Amsterdam - Social Sciences & Humanities, Amsterdam - Psychology & Sciences, and Amsterdam - Law & Criminology. All three options offer our students courses taught in English, both at the IES Abroad Center and by directly enrolling at one of two local prestigious universities: Universiteit van Amsterdam (UvA) or Vrije Universiteit Amsterdam (VU). This combined class stucture allows students to design their own course of study and enroll in a total of 15–19 credits per semester (courses are worth up to 6 credits each). Note: Application dates and calendar dates can vary by option; students need to be sure to watch their individual option dates closely. Amsterdam-Social Sciences & Humanities. Amsterdam - Social Sciences & Humanities offers students the largest range of courses of the three options. Within the UvA's strong focus on internationalism, courses are offered in many areas, including but not limited to: Conflict and Cultural Diversity, Globalization and International Relations, Sociology, other social sciences, and some humanities. Students can also choose from IES Abroad’s course offerings in Dutch language, culture, and the arts. Course-related academic excursions and other hands-on components are associated with many of these courses. Amsterdam - Psychology & Sciences. Students register for English-taught courses at the VU, an internationally-recognized research university, for the Psychology & Sciences option. A decidedly strong range of science courses are offered, including but not limited to courses on: Neuro science and Biomedical topics, Experimental Cell Biology, The History and Philosophy of Psychology, and so on. Students on this options may add one optional IES Abroad area studies course if they so choose. Amsterdam - Law & Criminology. This option is designed for students considering law school after graduation. Because students in the Netherlands start their law degree at the bachelor’s level, visiting undergraduates have a unique opportunity to study comparative law and criminology in an international context. Students enroll in the IES Abroad-taught core course on law and also three to four law- or criminology-related courses at the renowned VU. In  addition to classroom work, additional academic experiences in the past have included: a visit to the International Court in The Hague, sitting in on the arbitrations in a Dutch court, or talking to professionals at NGOs who work on human rights. Course-related field trips can include locations such as Rotterdam, Maastricht, or the Island of Texel, as well as in and around Amsterdam.",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Cognitive Science, Economics, Media and Cultural Studies, Neuroscience, Philosophy, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "iesamsterdam.jpg",
          "website":"https://www.iesabroad.org/programs/amsterdam-social-sciences-humanities",
          "SECwebsite":"https://www.iesabroad.org/study-abroad/programs/amsterdam-psychology-sciences",
          "THIRwebsite":"https://www.iesabroad.org/programs/amsterdam-law-criminology"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"South Africa",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: University of Cape Town",
          "summary":"This is a facilitated direct enroll program offering courses at a local university partner: University of Cape Town (UCT). The program combines student support and civic engagement with coursework at UCT alongside local university students. A full course load is 15–18 credit hours per semester. IES Abroad offers service learning course options in Health Studies and Sociology that include completing 60 hours of volunteer work and research while in Cape Town. Excursions are included as part of an orientation and a 4-day excursion visiting Kruger National Park/Soweto Township. Students have the option to either live with other IES Abroad students in a furnished house or apartment or live in the residence halls at UCT.",
          "GPA":"3",
          "language":"English",
          "areaName":"African Studies, American Studies, Art and Art History, Economics, English, Human Rights and Humanitarianism, Linguistics, Political Science, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesctown.jpg",
          "website":"https://www.iesabroad.org/programs/cape-town-university-cape-town"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Belgium\nFrance\nFrance",
          "housing":"Home Stay, Other",
          "programGroup": "Group B - ",
          "programName":"IFE: Institute for Field Education Program",
          "summary":"IFE: Institute for Field Education Program offers students a study away experience that combines coursework with an internship in a Francophone environment. Each site's curriculum is tailored to the specific urban and national contexts. IFE’s approach turns the professional workplace into a learning space, an interface with another culture, for purposes of language fluency, real cultural understanding, and the acquisition of comparative knowledge in a chosen field. IFE's Field Study and Internship Program is offered in three urban centers: Brussels, Belgium; Paris, France; Strasbourg, France. Depending on the center, students enroll in 16-18 credits. Housing options are either homestay or independent student residences.",
          "GPA":"3",
          "language":"French",
          "areaName":"Computer Science, Economics, French and Francophone Studies, Media and Cultural Studies, Neuroscience, Physics, Political Science, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ife.jpg",
          "website":"http://www.ife-edu.eu/Programs"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Argentina",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Argentine Universities Program",
          "summary":"This is a language intensive facilitated direct-enroll program that combines IFSA courses with Spanish-taught courses at the following local universities: Universidad Católica Argentina, Universidad de Buenos Aires, Universidad del Salvador, and Universidad Torcuato di Tella. All students take a required Advanced Spanish & Argentine Culture course (3 credits) taught by IFSA. Students then enroll in 3-4 Spanish-taught, direct enroll courses taught by Argentine university professors at local partner institutions for a total of 15-16 semester credits. Beyond the classroom, students reside in homestays and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Art and Art History, Economics, English, Geography, Latin American Studies, Linguistics, Media and Cultural Studies, Political Science, Psychology, Spanish and Portuguese, Theater and Dance, Urban Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaargentine.jpg",
          "website":"https://www.ifsa-butler.org/program/argentine-universities-program/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Chile",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Chilean Universities Program in Santiago",
          "summary":"This is a language intensive facilitated direct-enroll program that combines IFSA courses with Spanish-taught courses at the following local universities: Universidad de Chile, Pontificia Universidad Católica de Chile, and Universidad Diego Portales. All students take a required Advanced Spanish course (4 credits) taught by IFSA. Students then enroll in 3-4 Spanish-taught, direct-enroll courses offered by IFSA or at the universities for a total of 15-18 semester credits. Beyond the classroom, students reside in homestays and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"2.75",
          "language":"Spanish",
          "areaName":"Art and Art History, Economics, Geology, Latin American Studies, Political Science, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsachile.jpg",
          "website":"https://www.ifsa-butler.org/program/chilean-universities-program-santiago/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"India",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Contemporary India",
          "summary":"This program is designed for U.S. undergraduates with little or an introductory-level background on India. All courses are offered in English. Students enroll in five courses, two of which are required (Contemporary India and Internship/documentary film), a total of 15 credits. Other elective courses are offered on a variety of area studies topics, including Indian politics, development, public health, environmental studies, sociology, Hindi, and film studies. The program also offers co-curricular classes in traditional Indian vocals, instruments, or dance. In the final month of the program all students are required to complete an ISP, internship, or documentary film project as a part of the program's 'field component'. ISP and internship placements are offered at various NGOs, schools, and clinics. Documentary film students work with film studies professors and use their own digital video cameras. This program has a homestay component and includes two weekend excursions.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Educational Studies, Geography, Human Rights and Humanitarianism",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ifsaindiac.jpg",
          "website":"https://www.ifsa-butler.org/program/contemporary-india/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"India",
          "housing":"Community and Global Health",
          "programGroup": "Group B - ",
          "programName":"IFSA: India: Global and Public Health",
          "summary":"The Global and Public Health program at Manipal University offers students a comprehensive overview of public health in India, as well as a multi-disciplinary array of courses focused on Indian culture, politics, and society. Students in enroll in 15 credits with a core course in Contemporary Indian Culture and four electives. Students stay in residence halls in single rooms or share rooms with local students. Program includes a weekly public health clinic visit as part of the core curriculum and opportunities to conduct research (3 credit course). Local excursions are available during orientation, throughout the curriculum, and for a one-week long excursion.",
          "GPA":"Marcus Carrigan",
          "language":"English",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaindiag.JPG",
          "website":"https://www.ifsa-butler.org/program/global-and-public-health/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Mexico",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Mérida Universities Program",
          "summary":"This is a language intensive facilitated direct-enroll program that combines IFSA courses with Spanish-taught courses at the following local universities: Universidad Autónoma de Yucatán (UADY) and Universidad Modelo. The program focuses on exploring how Mexico balances 21st-century realities with the enduring influence of the pre-Hispanic Mayan empire, and through an indigenous studies lens, visits Mayan communities in the Yucatán on program excursions. Students enroll in two IFSA program required courses - Advanced Spanish (3 credits) and Exploring Yucatán: Community and Culture (3 credits). Students then enroll in 3-4 Spanish-taught, direct-enroll courses at the partner universities for a total of 15-18 semester credits. Beyond the classroom, students reside in homestays and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsam.jpg",
          "website":"https://www.ifsa-butler.org/program/merida-universities-program/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Peru",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Pontificia Universidad Católica del Perú",
          "summary":"This is a language intensive facilitated direct-enroll program that combines IFSA courses with Spanish-taught courses at the following local university: Pontificia Universidad Católica del Perú (PUCP). Students enroll in two IFSA required courses - Advanced Academic Writing and Peruvian Culture (3 credits) and Peruvian Social Reality (4 credits). Students then enroll in 2-3 Spanish-taught, direct-enroll courses at PUCP for a total of 15-18 semester credits.  Beyond the classroom, students reside in homestays and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Latin American Studies, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsap.jpg",
          "website":"https://www.ifsa-butler.org/program/pontificia-universidad-catolica-del-peru-partnership/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Shanghai",
          "summary":"This is a study center program offered by the Alliance on Global Education. Alliance classes are based at their study center located in the heart of Shanghai's University District. Students choose from four different program options one focused broadly on regional topics, another focused on business and economics, a third focused on public health policy and practice, and the final track devoted to intensive Chinese language studies. All options carry a full semester course-load of 15-18 credits. Housing is in apartments with a local university roommate.",
          "GPA":"3",
          "language":"Chinese, English",
          "areaName":"Economics, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ifsas.jpg",
          "website":"https://www.ifsa-butler.org/programs/?fwp_program_country=china&method=menu"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Cuba",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Universidad de La Habana",
          "summary":"This is a language intensive direct-enroll program, with program support from IFSA, but includes all coursework at the following university: Universidad de la Habana (UH). There are no IFSA program courses offered, and no required language course. All coursework is in Spanish with local students at UH within the Facultad de Artes y Letras and Facultad de Filosofia e Historia.  Beyond the classroom, students reside in 'casas particulares' and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"3.0",
          "language":"Spanish",
          "areaName":"Spanish and Portuguese",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "ifsauh.jpg",
          "website":"https://www.ifsa-butler.org/program/universidad-de-la-habana-partnership/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Costa Rica",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Universidad Nacional",
          "summary":"This is a language intensive facilitated direct-enroll program that combines IFSA courses with Spanish-taught courses at the following local university: Universidad Nacional de Costa Rica (UNA). Students must enroll in one required IFSA course - Advanced Spanish (4 credits).  Then students have the option of two special curriculum IFSA courses - Ecology and Sustainable Development in Costa Rica or Development of Education and Education Models, and to enroll in 2-3 courses at UNA for a total of 15-16 semester credits.  Beyond the classroom, students reside in homestays and are encouraged to get involved in the local community through volunteering and participating in university clubs and sports.",
          "GPA":"2.75",
          "language":"Spanish",
          "areaName":"Political Science, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaun.JPG",
          "website":"https://www.ifsa-butler.org/program/universidad-nacional-partnership/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Russia\nRussia\nRussia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"Middlebury College: Study Abroad in Russia",
          "summary":"The Middlebury School in Russia offers three unique opportunities for students who wish to immerse themselves in the study of Russian language and culture. Designed for students at an either an intermediate or advanced level of Russian, Middlebury offers students a broad range of academic and cultural immersion in one of three distinct Russian cities: Intermediate students are encouraged to go to Yaroslavl, where integration and immersion is easier, while more advanced students can choose to study in Irkutsk or Moscow. This is a language immersion program administered by Middlebury College. Each site's curriculum is tailored to the specific urban contexts. Students reside with host families and agree to a language pledge; language and elective courses are offered at local universities, though students primarily take their courses at the Middlebury Center. Students typically enroll for a total of 16 credits (4 credits per class). A wide range of internships opportunities are also available.",
          "GPA":"2.67",
          "language":"Russian",
          "areaName":"Russian Studies",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "middlebury.jpg",
          "website":"http://www.middlebury.edu/study-abroad/russia"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Italy",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"SACI: Studio Art College International Florence",
          "summary":"Studio Art College International (SACI) is the oldest and most prestigious American art school and study center in Florence, Italy. Courses are offered in a variety of studio art courses as well as art history, conservation, cross-disciplinary arts, contemporary, culture, and language courses. The average course load is 15 credits with five 3-credit courses. Classroom and studio courses are enhanced by various applied learning opportunities, including: frequent field trips; the possibility to work as apprentices with artisans; access to private collections, galleries, art fairs and theater; and/or to take a directed independent study or traineeship in a design firm, museum, or gallery (for advanced students). SACI is accredited by the National Association of Schools of Art and Design (NASAD).",
          "GPA":"2.75",
          "language":"English",
          "areaName":"Art and Art History, Classics, Economics",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "saci.jpg",
          "website":"https://saci-florence.edu/year-semester-abroad-programs-italy"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Bolivia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Bolivia: Multiculturalism, Globalization, and Social Change",
          "summary":"This study abroad program offers a set curriculum that explores how concepts of community well-being and cultural identity are being creatively redefined in a country with 36 ethnic groups and the first indigenous president in the Americas. The curriculum also explores the social and psychological impact of globalization on communities in the Andean and Amazonian regions of Bolivia, including contemporary sociopolitical and environmental struggles. All courses are with other U.S. study away students and are taught by the Academic Directors and other local faculty.  The program is based in Cochabamba, Bolivia and is comprised of area studies and language seminars, community visits, and a final required Independent Study Project (ISP). The ISP offers students the opportunity to conduct field research on a topic of their choice within the program’s broad topics, including a number of creative project options such as writing a children's book or producing a documentary film. All students take either a Spanish or Quechua language course and have 3 homestay opportunities.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Anthropology, Educational Studies, Latin American Studies, Political Science, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitbolivia.png",
          "website":"https://studyabroad.sit.edu/programs/semester/spring-2020/blr/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Cameroon",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Cameroon: Development and Social Change",
          "summary":"This program, which takes place in both Cameroon and France, examines development and the changing cultures, politics, and economy of Cameroon and the immigrant experience of Cameroonians in France. All courses consist of visiting US students and are taught by local and program faculty. Additionally, Cameroonian students complete all of the program’s components—courses, excursions, and ISP research—alongside SIT students. Homestays are provided for the majority of the semester in Yaoundé,  and 10 days with a host family in Batoufam. You will stay in Paris, France for one week to look at development issues in another context. Courses are taught in English and French (with optional translation; no previous French is required). Students enroll in 16 credits during the program and take the following courses: Modernization and Social Change in Cameroon, Development Studies/French for Development Studies, Beginning French: French in Cameroonian Contexts, Research Methods and Ethics, and either Internship and Seminar or Independent Study Project.",
          "GPA":"2.5",
          "language":"English, French",
          "areaName":"African Studies, Economics",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Homestay, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitcameroon.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2020/cmr/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program": {
          "locationName":"Chile",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Chile: Public Health, Traditional Medicine, and Community Empowerment",
          "summary":"This study abroad program offers a set curriculum that explores public health through traditional medicine and intercultural health practices, indigenous customs, community welfare, and social justice. Students learn about national healthcare policies, politics, and delivery with a special emphasis on indigenous communities, traditional medicine, and diversity of healing and spiritual beliefs. All courses are with other U.S. study away students and are taught by the Academic Directors and other local faculty. The program is based in Arica, Chile and is comprised of area studies and language seminars, community visits, and a final required Independent Study Project (ISP) or internship. All students take a Spanish language course and have 3 homestay opportunities.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Community and Global Health, Economics",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitchile.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/spring-2020/cih/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: China: Health, Environment, and Traditional Chinese Medicine",
          "summary":"This is a study abroad program offered by the School for International Training (SIT) for students enrolled at US colleges or universities. Students explore the complexity of China's social groups and develop a deeper understanding of the key social, historical, and cultural issues at work in minority communities through a combination of coursework, language study, and independent research for a total of 16 credits.",
          "GPA":"2.5",
          "language":"Chinese, English",
          "areaName":"American Studies, Anthropology, Asian Languages and Cultures, Educational Studies, Geography",
          "academicFeatures":"Facilitated Excursion(s), Homestay, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitchina.jpeg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2020/chr/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Ecuador\nEcuador",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Ecuador: Comparative Ecology and Conservation",
          "summary":"This study abroad program offers a set curriculum where students explore tropical ecosystems, conduct biological fieldwork, and study conservation in one of the world’s most biodiverse countries.  Within the small country’s borders, the Amazon Basin, the Andes, the Pacific Ocean, and the Galápagos Islands provide unique climatic niches that harbor ecological treasures and a plethora of flora and fauna. All courses are with other U.S. study away students and are taught by the Academic Directors and other local faculty.  The program is based in Quito, Ecuador and explores biological and ecological field techniques, offers language seminars, extended facilitated excursions, and a final required Independent Study Project (ISP).  The ISP offers students the opportunity to conduct field research on a topic of their choice within the program’s broad topics. All students take a Spanish language course and live in a homestay. ",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Biology, Economics, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitecuador.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/spring-2020/ece/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Ghana",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Ghana: Africa in the 21st Century",
          "summary":"This program focuses on the intersection of society, economy, and technology in Ghana. Students are encouraged to develop a critical perspective on mainstream representations of Ghanaian society. All courses consist of visiting US students and are taught by local and program faculty. Homestays are provided for the majority of the semester in Accra and 5 days with a family in Kumasi. Students enroll in 16 credits during the program and take the following courses: Africa in a Globalizing World: Technology and Social Realities in Ghana, Contemporary Africa Re-Represented: Perspectives from Ghana, Asante Twi Language, Research Methods and Ethics, Independent Study Project or Internship.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"African Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitghana.jpeg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2019/ghr/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Jordan",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Jordan: Geopolitics, International Relations, and the Future of the Middle East",
          "summary":"This program examines critical issues in the Hashemite Kingdom of Jordan, particularly political responsibilities, social change, and the effects of regional conflict.  Students enroll in a set curriculum for a total of 16 credits in thematic courses in Geopolitics, International Relations, and the Future of the Middle East, Arabic, Research Methods, and an Independent Study Project or Internship.  The program is based in Amman with excursions to other parts of Jordan as well as the United Arab Emirates, considered a model for development in the Middle East. Students reside in homestays.",
          "GPA":"2.5",
          "language":"Arabic, English",
          "areaName":"Classics, Economics, Environmental Studies, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitjordan.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2019/jor/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Madagascar\nMadagascar",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Madagascar: Biodiversity and Natural Resource Management",
          "summary":"This program, conducted mostly in French, has a heavy focus on ecological and environmental research and field studies. Students enroll in a set curriculum for a total of 16 credits in thematic courses in Biodiversity and Natural Resource Management, Intensive Malagasy Language, French for Natural Sciences, Environmental Research Methods & Ethics, and an Independent Study Project or Internship. Students partake in excursions around Madagascar and reside in several different types of housing throughout the semester.",
          "GPA":"2.5",
          "language":"English, French",
          "areaName":"African Studies, Biology, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitmadagascar.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2020/mge/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Mongolia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Mongolia and Siberia: Nomadism, Geopolitics, and the Environment",
          "summary":"This program examines international relations, natural resource management, nomadic traditions, pastoralism, and economic growth within the context of Mongolia, a nation with a unique history that is currently facing rapid change. The program utilizes SIT’s field-based, experiential approach to education abroad. For one to two weeks, you will live among nomadic herding communities and experience some of the most pristine natural environments in the world. A small group of study away students are supported by SIT faculty and staff, as well as homestay families, in-country experts, and community members. Students enroll in a set curriculum for a total of 16 credits. Students enroll in two thematic seminars on Geopolitics & Development Trends and Pastoralism & Natural Resource Management, a Mongolian Language Course, a Research Methodology Course, and complete an independent study project or internship. The two thematic seminars including a weeklong internship at a local NGO.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Anthropology, Environmental Studies, Geography",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitmongolia.jpg",
          "website":"http://www.sit.edu/mfr"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Nepal",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Nepal: Tibetan and Himalayan Peoples",
          "summary":"This program examines Tibetan and Himalayan politics and religion, as well as the contemporary issues faced by communities in exile, within Tibetan communities in Nepal. The program utilizes SIT’s field-based, experiential approach to education abroad. A small group of study away students are supported by SIT faculty and staff, as well as homestay families, in-country experts, and community members. Students enroll in a set curriculum of 16 credits: Two thematic seminars on Religious Change and the Politics of Tibetan and Himalayan Borders, a Tibetan Language Course, a Research Methodology Course, and select either an Independent Study Project (ISP) or an Internship & Seminar course. Educational excursions include exploring different Tibetan communities in diverse geographical and cultural contexts is a major component of the Tibetan and Himalayan Peoples program.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Educational Studies, Religious Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitnepal.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2020/npt/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Peru",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Peru: Indigenous Peoples and Globalization",
          "summary":"This study abroad program offers a set curriculum that explores how indigenous peoples in Peru are adapting and innovating to preserve their cultural values and shape their own future in the face of globalization and rapid change. Students examine the social, economic, political, and cultural impacts of globalization on indigenous peoples. All courses are with other U.S. study away students and are taught by the Academic Directors and other local faculty.  The program is based in Cuzco, Peru and offers language seminars, extended facilitated excursions, and a final required Independent Study Project (ISP). The ISP offers students the opportunity to conduct field research on a topic of their choice within the program’s broad topics. All students take a Spanish and Quechua language course and have two homestay opportunities.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Anthropology, Economics, Human Rights and Humanitarianism, Latin American Studies, Political Science, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitperu.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/spring-2020/per/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Serbia",
          "housing":"Kevin Morrison",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Serbia, Bosnia, and Kosovo: Peace and Conflict Studies in the Balkans",
          "summary":"This is a study abroad program operated by the School for International Training designed for students enrolled at US colleges or universities.  The program focuses on the origins of the conflicts in the Balkans as well as current challenges and opportunities in post-conflict transformation. Students enroll in 16 credits made up of interdisciplinary courses, language study, and an independent study project. Students on this program participate in a variety of field visits and guest lectures throughout Serbia, Bosnia, and Kosovo. The last four weeks of the program students conduct either a traditional independent study project (ISP) or an internship.  These can be conducted in any of the three countries visited. The majority of the program is spent living with host families although some students may reside in guesthouses or small hotels while conducting their ISPs or interning.  Students may also be able to volunteer at sites related to the issues they are researching during the ISP period in order to further their understanding of their topic. ",
          "GPA":"Home Stay, Other",
          "language":"English",
          "areaName":"Anthropology, Geography, History, Human Rights and Humanitarianism, International Studies, Political Science, Russian Studies, Sociology",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitserbia.jpg",
          "website":"https://studyabroad.sit.edu/programs/semester/fall-2020/hrr/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Ecuador",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Ecuador",
          "summary":"MSID: International Development in Ecuador is an experiential learning program where students learn through coursework, field study, internships, and research. The program explores the theoretical and practical implications of international development and intercultural issues. The semester begins with a classroom phase in Quito, when students take a Spanish language course, and two MSID content courses. Students focus their coursework in Quito in one of the following tracks--Arts & Cultural Studies, Education & Literacy, Entrepreneurship & Alternative Economies, Public Health, Social Service, or Sustainability & the Environment--which then prepares them for the second phase. The second part of the semester is the internship or research phase, when students spend six weeks working with a local organization. Students stay in homestays throughout the program.",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Community and Global Health, Economics, Latin American Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmecuador.jpg",
          "website":"https://umabroad.umn.edu/programs/americas/msid-ecuador/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Kenya",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Kenya",
          "summary":"MSID: International Development in Kenya is an experiential program where students learn about Kenya through coursework, field study, internships and research. The program explores the theoretical and practical implications of international development and intercultural issues. Students focus their coursework (16 credits total) in one of the following tracks: Arts and Cultural Studies, Education and Literacy, Entrepreneurship and Alternative Economies, Public Health, Social Service, or Sustainability and the Environment. The semester begins with a classroom phase, when students take courses in Nairobi. The second part of the semester is the internship phase, when students spend six weeks working with a local organization.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Environmental Studies, African Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmkenya.jpg",
          "website":"https://umabroad.umn.edu/programs/africa/msid-kenya/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Senegal",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Senegal",
          "summary":"MSID: International Development is an experiential program where students learn about Senegal through coursework, field study, internships and research. The program explores the theoretical and practical implications of international development and intercultural issues. Students focus their coursework (16 credits total) in one of the following tracks: Arts and Cultural Studies, Education and Literacy, Entrepreneurship and Alternative Economies, Public Health, Social Service, or Sustainability and the Environment. The semester begins with a classroom phase, when students take courses in Dakar. The second part of the semester is the internship phase, when students spend six weeks working with a local organization. Internship placements are usually in rural areas outside of Dakar.",
          "GPA":"2.5",
          "language":"French",
          "areaName":"African Studies, Anthropology, Art and Art History, Community and Global Health, Economics, Educational Studies, French and Francophone Studies, Human Rights and Humanitarianism",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmsenegal.jpg",
          "website":"https://umabroad.umn.edu/programs/africa/msid-senegal/"
          ,"group": "Macalester Approved Study Away Programs"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Kevin Morrison",
          "programGroup": "Group C - ",
          "programName":"BADA: London Theatre Program",
          "summary":"Students apply for the London Theater Program with Sarah Lawrence College in New York and enroll in the British American Drama Academy in London. Single semester students take eight weeks of scene study followed by five weeks of rehearsal leading to a production in a professional theatre for a total of 15 credits.  Students receive one-on-one tutorials and visit the theatre on a regular basis. Students are housed with other program participants in apartments.",
          "GPA":"Apartment",
          "language":"English",
          "areaName":"Theater",
          "academicFeatures":"Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "bada.JPG",
          "website":"http://www.bada.org.uk/study/london-theatre-program/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Russia",
          "housing":"Home Stay, Other",
          "programGroup": "Group C - ",
          "programName":"Bard College: Bard-Smolny Program in Russia",
          "summary":"The Bard-Smolny Program in Russia offers students a challenging academic course of study while advancing their Russian language skills. Students enroll in the Russian as a Second Language (RSL) program and directly enroll in one or more classes at Smolny with local students. A full course load is 14-17 credits and the majority of courses are taught in Russian. This program offers opportunities to conduct research and volunteer. Excursions facilitated on an average of one excursion every two weeks to an area museum, opera, ballet, theater, or palace and several weekend excursions outside of St. Petersburg.",
          "GPA":"3",
          "language":"English, Russian",
          "areaName":"Cognitive Science, Linguistics, Russian Studies, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "bard.jpg",
          "website":"http://smolny.bard.edu/"
          ,"group": "Macalester Competitive Study Away Programs"

        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay, Other",
          "programGroup": "Group C - ",
          "programName":"CUPA: Center for University Programs Abroad",
          "summary":"CUPA (Center for University Programs Abroad) is a rigorous French immersion program enhanced by personalized methodology and language-mentoring and by the extensive academic, cultural and personal resources provided to its students. A full course load is 16 credits per semester. The program is conducted entirely in French, and all students sign a language pledge. With ongoing academic advising and support, students directly enroll in Parisian Universities, certain Grandes Écoles and specialized institutes, and may also opt for one or two optional in-house courses. Students may also engage in independent study projects, internships, or develop a more specialized program of study or pursue advanced studies in music or theater. Learning is supported by strong student support, which includes a training on methodology during orientation and French language support throughout the semester. Students are strongly encouraged to participate in numerous activities in the Parisian context.",
          "GPA":"3",
          "language":"French",
          "areaName":"Art and Art History, Critical Theory, Economics, English, French and Francophone Studies, Media and Cultural Studies, Music, Philosophy, Political Science, Psychology, Theater and Dance, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cupa.jpg",
          "website":"https://cupa.paris.edu/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group C - ",
          "programName":"Direct Enroll: Oxford University St. Catherine's College",
          "summary":"his direct enroll spring-only semester program at Oxford University's St. Catherine's College is built upon two 8-week terms: 'Hilary' (early-mid January to mid March), and 'Trinity' (late April to late June), separated by a 5-week break. Within St. Catherine's College, students have a wide range of tutorials available in the arts and sciences. Most Visiting Students study two subjects per term: a 'major' topic (8 tutorials) and a 'minor' topic (4 tutorials). Student housing is in the university residence Halls.",
          "GPA":"3.7",
          "language":"English",
          "areaName":"Art and Art History, Computer Science, Economics, English, Geology, Linguistics, Mathematics, Middle Eastern Studies and Islamic Civilization, Philosophy, Physics, Political Science, Psychology, Religious Studies",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "oxford.jpg",
          "website":"https://www.stcatz.ox.ac.uk/prospective-students/visiting-students/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Denmark, Sweden",
          "housing":"Apartment, Apartment - Local Roommate, Home Stay, Other, Residence Hall, Residence Hall- Local Roommate",
          "programGroup": "Group C - ",
          "programName":"DIS: Study Abroad in Scandinavia",
          "summary":"DIS is a study center program based in Copenhagen, Denmark with an additional site in Stockholm, Sweden. Students choose a core course from offerings in 25 different academic areas in Copenhagen or 8 in Stockholm.  Core courses include 2 embedded faculty-led study tours, and then students choose from the list of electives to either focus on their major coursework or diversify their studies into other areas.  Most electives are 3 credits, and a standard course-load is 15-18 credits.  There are also credit-bearing Optional Study Tours that are part of a 1 or 3 credit companion course (these courses come at an additional cost). DIS offers six different housing options in Copenhagen and Stockholm.",
          "GPA":"3",
          "language":"English",
          "areaName":"American Studies, Art and Art History, Biology, Community and Global Health, Economics, Educational Studies, Environmental Studies, Human Rights and Humanitarianism, Media and Cultural Studies, Neuroscience, Philosophy, Political Science, Psychology, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "dis.jpg",
          "website":"https://disabroad.org/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Earlham College: Border Studies Program",
          "summary":"Earlham College's Border Studies Program (BSP) is a semester-long study away program based in Tucson, Arizona that traverses the U.S./Mexico border. Students explore topics such as transnational migration, neoliberal globalization, the militarization of policing, and struggles for environmental justice, ethnic studies, and indigenous rights. The program provides hands-on experience in contemporary justice struggles and an expansive curriculum that valorizes grassroots knowledge and challenges students to understand and articulate the context and implications of their own positionalities. The program consists of homestays, internships in grassroots and/or non-profit organizations and excursions as well as a rigorous academic curriculum.",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Human Rights and Humanitarianism, Latin American Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "earlham.jpg",
          "website":"https://earlham.edu/border-studies/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"New Zealand",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"HECUA: New Zealand Culture & the Environment",
          "summary":"HECUA: New Zealand Culture and the Environment: A Shared Future is a field-based program based in Wellington. It focuses on the social and environmental factors shaping the political and ecological dimensions of identity and culture in New Zealand. Students spend the first five weeks of the semester traveling around the North Island. All students enroll in the same four courses including an internship and independent study. The program is offered in partnership with the EcoQuest Education Foundation/Te Rarangahau Taiao, which sponsors New Zealand student visa applications, hosts the program for a field experience, and provides evaluation and oversight.",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Educational Studies, Environmental Studies, Geography, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuanz.jpg",
          "website":"https://hecua.org/study-abroad/new-zealand/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Apartment",
          "programGroup": "Group C - ",
          "programName":"IES Abroad: Amsterdam - Conservatorium van Amsterdam",
          "summary":"This highly competitive assisted direct enroll program is located at the Conservatorium van Amsterdam (CvA), the largest and most diverse music conservatory in the Netherlands. Students enroll in 15 credits per semester within the departments of Classical and Jazz, and their study includes both highly-individualized lessons with a tutor and participation in an extensive chamber music and ensemble program, culminating in final performances. Theoretical components aim at developing musical imagination and perception. Core subjects include offerings in ear training (aural skills courses), analysis, harmony, counterpoint, and composition. Students may take part in IES organized excursions and reside with other IES students in apartments.",
          "GPA":"3",
          "language":"English",
          "areaName":"Music",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesamsterdamc.JPG",
          "website":"https://www.iesabroad.org/programs/amsterdam-direct-enrollment-conservatorium-van-amsterdam"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Japan Study at Waseda University",
          "summary":"This is a spring semester program based at Waseda University's School for International Liberal Studies that features intensive language study and area studies courses in English covering a wide range of subjects. Field trips are included, and extracurricular activities are encouraged. Homestays are the primary housing option for this program.",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "waseda.jpg",
          "website":"https://japanstudy.earlham.edu/about/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Residence Hall- Local Roommate",
          "programGroup": "Group C - ",
          "programName":"Middlebury College: China: Hangzhou",
          "summary":"This is a Mandarin language immersion program intended for intermediate-to-advanced level Chinese language students, the key features of which include Chinese roommates, a language pledge, and language and elective courses at the host institution, Zhejiang University of Technology (ZUT). All courses are conducted entirely in Chinese.",
          "GPA":"2.75",
          "language":"Chinese",
          "areaName":"Asian Languages and Cultures, Economics",
          "academicFeatures":"Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "middleburychina.jpg"
          ,"website": "http://www.middlebury.edu/study-abroad/china/hangzhou",
          "group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Nepal",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Pitzer College: Nepal Program",
          "summary":"Pitzer College in Nepal is a learning center program emphasizing Nepali language learning and an independent learning project (ISP). This program is affiliated with the University of Tribhuvan. It is an intellectually stimulating and physically demanding program that focuses on linguistic and cultural immersion. The program's coursework consists of Intensive Nepali Language, Nepal Studies, and a Directed Independent Study Project. The program is intense and students' days are filled with coursework, community engagement, and time spent with homestay families.",
          "GPA":"2",
          "language":"English",
          "areaName":"Anthropology, Asian Languages and Cultures, Food, Agriculture, and Society",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship, Creative Work"
          ,"value":0
          ,"img": "pitzer.jpg",
          "website":"https://www.pitzer.edu/study-abroad/pitzer-students/nepal/"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Other",
          "programGroup": "Group C - ",
          "programName":"SEA Semester",
          "summary":"SEA Semester is an environmental studies study away program focused on the ocean. Students chose one of six academic tracks, each offering a specific set of courses that explore an ocean-related theme using a cross-disciplinary approach. All tracks begin with an on-shore component in Woods Hole, Massachusetts, a center for ocean and scientific exploration, followed by a voyage one of SEA Semesters sailing research vessels. While at sea, all students actively participate in the sailing and running of the ship. All tracks include hands-on research, and SEA Semester is known for its academic excellence and low student-teacher ratio. Seven academic tracks are available, and students should check SEA Semester’s schedule to verify which semester each track will be offered. Marine Biodiversity & Conservation: Upper-level science track that applies biodiversity research to place-based resource management in the coastal and open ocean. *Program starts LATE in spring semester. Oceans & Climate: Upper-level science and policy track designed examine the role of the oceans in global climate change. The Global Ocean: Interdisciplinary approach with electives in geography, media sustainability and more. Ocean Exploration: Interdisciplinary approach to studying the marine environment. Colonization to Conservation in the Caribbean: Writing-intensive environmental/social sciences track designed to explore the legacy of European colonialism in the history, culture, and marine environments of the Caribbean. *Program starts LATE in fall semester. Sustainability in Polynesian Island Cultures & Ecosystems (SPICE): Writing-intensive environmental/social sciences track designed to study the dilemma of environmental and cultural sustainability in Polynesia. Includes extended on-shore component in the South Pacific. Caribbean Reef Expedition: Investigative science and policy semester. This expedition will examine the impacts of human actions on Caribbean coral reef ecosystems and the effectiveness of existing reef management strategies. Climate & Society: Explore the social and cultural impacts of climate change while engaging with stakeholders, community leaders, and policymakers addressing these issues at the local and global levels. Spend ample research time on shore in New Zealand on either end of a tall ship sailing voyage throughout its waters.",
          "GPA":"No GPA Requirement",
          "language":"English",
          "areaName":"Biology, Environmental Studies",
          "academicFeatures":"Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sea.jpg",
          "website":"https://www.sea.edu/voyages"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      },{
        "program":{
          "locationName":"Spain, Argentina, South Africa, United States, Brazil",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"SIT Study Abroad/IHP: Cities in the 21st Century",
          "summary":"This program examines how geography, politics, economics, and culture shape social relations and the built environment in cities across the globe. The program utilizes SIT’s field-based, experiential approach to education abroad. Students enroll in a set curriculum (16 credits) that focuses on understanding global cities using a comparative, interdisciplinary perspective. The program begins in a US city, where students are introduced to the curriculum. The group then spends 4-5 weeks each in three international sites, which vary by semester. There are two track locations for the Fall, and one for the Spring semester. Each track has a different website (see below). A small group of study away students are supported by a small number of SIT faculty and staff who travel with students, as well as country coordinators in each location, homestay families, in-country experts, and community members.",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Geography, Urban Studies, African Studies",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "sitcities.jpg",
          "website":"http://studyabroad.sit.edu/ctc/",
          "SECwebsite":"http://studyabroad.sit.edu/ctb"
          ,"group": "Macalester Competitive Study Away Programs"
        }
      }
   ];
 }


 sort(){
   return this.items.sort((a,b) => {
     if (a.program.value > b.program.value){
       return -1;
     }
     if (a.program.value < b.program.value){
       return 1;
     }
     if (a.program.programName.toLowerCase() > b.program.programName.toLowerCase()){
       return -1;
     }
     if (a.program.programName.toLowerCase() < b.program.programName.toLowerCase()){
       return 1;
     }
     return 0;
 });
}

  filterItems() {
    return this.items.filter(item => {
      return item.program.value == 3 || item.program.value == 2 || item.program.value == 1;

    });
  }

  searchItems(searchTerm4){
    return this.items.filter(item => {
      return item.program.programName.toLowerCase().indexOf(searchTerm4.toLowerCase()) > -1;
    })
  }

  sortSearch(){
    return this.items.sort((a,b) => {
      if (a.program.programName.toLowerCase() > b.program.programName.toLowerCase()){
        return -1;
      }
      if (a.program.programName.toLowerCase() < b.program.programName.toLowerCase()){
        return 1;
      }
      return 0;
  });
 }

 // getItems(){
 //   return this.items;
 // }

 //will save to database now
 save(item){

   console.log('this item is being saved');
   console.log(item)


   return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    console.log('ARE YOU HERE');
    this.afs.collection('users').doc(currentUser.email).collection('User Data').add({
      Program: item.program.programName,
      Language: item.program.language,
      Recommended : item.program.areaName,
      Location: item.program.locationName,
      Housing: item.program.housing,
      MinimumGPARequirement: item.program.GPA,
      AcademicFeatures: item.program.academicFeatures,
      Value: item.program.value,
      img: item.program.img,
      GroupName: item.program.programGroup
    })

    .then(
      res => resolve(res),
      err => reject(err)
    )
  })


 }

// setShow(){
//   this.boolean = true;
// }

saved: any;

createSavedList(){
  let currentUser = firebase.auth().currentUser;
  this.saved = this.afs.firestore.collection('users').doc(currentUser.email).collection('User Data');
  this.saved.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.savedItems.push((doc.id,
        "=>",
        doc.data()

      ));
})})
}

getSaved(){
  return this.savedItems;
 }

 getItems(){
   return this.items;
 }

  createStars(searchTerm, searchTerm2, searchTerm3){
    for(let item of this.items) {
      if (item.program.areaName.toLowerCase().includes("Any") ||
      item.program.language.toLowerCase().includes("Any") ||
      item.program.locationName.toLowerCase().includes("Any")){
        return;
      }

      if (item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
      item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1 &&
      item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) > -1){
        item.program.value = 3;
      }
      else if (item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
      item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1){
        item.program.value = 2;
      }
      else if(item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
      item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) > -1){
        item.program.value = 2;
      }
      else if(item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1 &&
       item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) > -1){
         item.program.value = 2;
      }
      else if(item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
        item.program.value = 1;
      }
      else if(item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1){
        item.program.value = 1;
      }
      else if(item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) > -1){
        item.program.value = 1;
      }
      // else if(item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
      // item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) < -1 &&
      // item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) < -1){
      //   item.program.value = 1;
      // }
      // else if(item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) < -1 &&
      // item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1 &&
      // item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) < -1){
      //   item.program.value = 1;
      // }
      // else if(item.program.areaName.toLowerCase().indexOf(searchTerm.toLowerCase()) < -1 &&
      // item.program.language.toLowerCase().indexOf(searchTerm2.toLowerCase()) < -1 &&
      // item.program.locationName.toLowerCase().indexOf(searchTerm3.toLowerCase()) > -1){
      //   item.program.value = 1;
      // }
    }
  }

  // createSavedItems(item){
  //   return item;
  // }

}
