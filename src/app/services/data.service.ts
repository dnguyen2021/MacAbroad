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
          "GPA": "3",
          "language": "English",
          "areaName": "African Studies, Computer Science, Economics",
          "academicFeatures": "Civic Engagement, Courses at local university, Creative Work, Independent Study Project (ISP)"
          ,"value": 0
          ,"img": "ashesi.jpg"
        }
      }, {
        "program":{
          "locationName":"Various",
          "housing":"No Housing Provided",
          "programGroup": "Group A - Exchange:",
          "programName":"ISEP- International Student Exchange Programs",
          "GPA":"No GPA Requirement",
          "language":"Arabic, English, French, German, Other, Spanish, Portuguese, Japanese, Italian, Hebrew, Chinese",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Internship"}
          ,"value": 0
          ,"img": "isep.jpg"
      },{
        "program":{
          "locationName":"Singapore",
          "housing":"Marcus Carrigan",
          "programGroup": "Group A - Exchange:",
          "programName":"NTU- Nanyang Technological University",
          "GPA":"Apartment, Residence Hall, Residence Hall- Local Roommate",
          "language":"English",
          "areaName":"Arabic, Art (Studio), Art History, Asian Languages and Cultures, Astronomy, Biology, Chemistry, Chinese, Community and Global Health, Computer Science, Creative Writing, Economics, English, Environmental Studies, French and Francophone Studies, German Studies, History, International Development, International Studies, Japanese, Linguistics, Mathematics, Media and Cultural Studies, Neuroscience Studies, Philosophy, Physics, Political Science, Psychology, Sociology, Spanish, Statistics, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work"
          ,"value": 0
          ,"img": "ntu.jpg"
        }
      },{
        "program":{
          "locationName":"France\nFrance\nFrance\nFrance\nFrance\nFrance\nFrance",
          "housing":"Marcus Carrigan",
          "programGroup": "Group A - Exchange:",
          "programName":"Sciences Po",
          "GPA":"Other",
          "language":"English, French",
          "areaName":"African Studies, Anthropology, Arabic, Asian Languages and Cultures, Chinese, Creative Writing, Critical Theory, Economics, Environmental Studies, French and Francophone Studies, Geography, German Studies, Hebrew, History, Human Rights and Humanitarianism, International Development, International Studies, Japanese, Latin American Studies, Legal Studies Program, Media and Cultural Studies, Middle Eastern Studies and Islamic Civilization, Philosophy, Political Science, Portuguese, Pre-Law, Religious Studies, Russian Studies, Sociology, Spanish, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university"
          ,"value": 0
          ,"img": "sciences.jpg"
        }
      },{
        "program":{
          "locationName":"Germany\nAustria",
          "housing":"Shanti Freitas",
          "programGroup": "Group A - Macalester:",
          "programName":"German Studies Program",
          "GPA":"Apartment, Residence Hall",
          "language":"German",
          "areaName":"American Studies, Anthropology, Art History, Astronomy, Biology, Chemistry, Computer Science, Critical Theory, Economics, Geography, German Studies, History, International Studies, Mathematics, Media and Cultural Studies, Music, Philosophy, Physics, Political Science, Psychology, Religious Studies, Sociology, Statistics, Theater",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "german.jpg"
        }
      },{
        "program":{
          "locationName":"South Africa",
          "housing":"Apartment",
          "programGroup": "Group A - Macalester:",
          "programName":"Globalization, the Environment, and Society in Cape Town",
          "GPA":"3",
          "language":"English",
          "areaName":"African Studies, Anthropology, Biology, Economics, Environmental Studies, Food, Agriculture, and Society, Geography, Geology, Urban Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "globalization.jpg"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Residence Hall",
          "programGroup": "Group A - Macalester:",
          "programName":"Perspectives on Globalization",
          "GPA":"3.2",
          "language":"English",
          "areaName":"Community and Global Health, Economics, Human Rights and Humanitarianism, Political Science",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "perspectives.jpg"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"ACM: Newberry Seminar: Research in the Humanities",
          "GPA":"Apartment",
          "language":"English",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Independent Study Project (ISP)"
          ,"value":0
          ,"img": "acm.jpg"
        }
      },{
        "program":{
          "locationName":"Hungary",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"AIT: Aquincum Institute of Technology",
          "GPA":"3",
          "language":"English",
          "areaName":"Computer Science",
          "academicFeatures":"Creative Work"
          ,"value":0
          ,"img": "ait.jpg"
        }
      },{
        "program":{
          "locationName":"Kazakhstan\nRussia\nRussia\nRussia",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"American Councils: Russian Language & Area Studies Program",
          "GPA":"2.7",
          "language":"Russian",
          "areaName":"Russian Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "acouncils.jpg"
        }
      },{
        "program":{
          "locationName":"Morocco",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"AMIDEAST: Area & Language Studies in Morocco",
          "GPA":"3",
          "language":"Arabic, English, French",
          "areaName":"African Studies, Economics, French and Francophone Studies, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "amideast.jpg"
        }
      },{
        "program":{
          "locationName":"Hungary",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"Budapest Semesters in Mathematics",
          "GPA":"Apartment, Home Stay",
          "language":"English",
          "areaName":"Educational Studies, Mathematics",
          "academicFeatures":"Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "budapest.jpg"
        }
      },{
        "program":{
          "locationName":"Brazil",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Brazil",
          "GPA":"3",
          "language":"English, Portuguese",
          "areaName":"Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cetb.jpg"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Japan",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cetj.jpg"
        }
      },{
        "program":{
          "locationName":"Czech Republic",
          "housing":"Apartment - Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CET: Prague",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Religious Studies",
          "academicFeatures":"Creative Work, Facilitated Excursion(s), Internship, Civic Engagement"
          ,"value":0
          ,"img": "cetp.jpg"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"China Studies Institute: Peking University",
          "GPA":"3.2",
          "language":"Chinese, English",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics, Political Science",
          "academicFeatures":"Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "china.jpg"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"CIEE: Arts and Sciences in Tokyo",
          "GPA":"2.75",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics, Linguistics",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieea.jpg"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Home Stay, Residence Hall- Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CIEE: Intensive Chinese Language and Culture in Nanjing",
          "GPA":"2.75",
          "language":"Chinese, English",
          "areaName":"Asian Languages and Cultures",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieei.jpg"
        }
      },{
        "program":{
          "locationName":"Portugal",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"CIEE: Language and Culture in Lisbon",
          "GPA":"2.5",
          "language":"English, Portuguese",
          "areaName":"Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieelc.jpg"
        }
      },{
        "program":{
          "locationName":"Brazil",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Liberal Arts in Rio de Janeiro",
          "GPA":"2.5",
          "language":"English, Portuguese",
          "areaName":"American Studies, Economics, Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "cieelar.jpg"
        }
      },{
        "program":{
          "locationName":"Dominican Republic",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Liberal Arts in Santiago, Dominican Republic",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cieelas.jpg"
        }
      },{
        "program":{
          "locationName":"Jordan",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Middle East Studies",
          "GPA":"2.5",
          "language":"Arabic, English",
          "areaName":"Classics, Economics, Middle Eastern Studies and Islamic Civilization, Political Science, Religious Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieeme.jpg"
        }
      },{
        "program":{
          "locationName":"Botswana",
          "housing":"Home Stay, Residence Hall- Local Roommate",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Gaborone",
          "GPA":"2.75",
          "language":"English",
          "areaName":"African Studies, Political Science",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieeg.jpg"
        }
      },{
        "program":{
          "locationName":"Thailand",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Khon Kaen",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Community and Global Health, Economics, Educational Studies, Urban Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "cieek.jpg"
        }
      },{
        "program":{
          "locationName":"Costa Rica",
          "housing":"Home Stay, Other",
          "programGroup": "Group B - ",
          "programName":"CIEE: Study Abroad in Monteverde",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Economics, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cieem.jpg"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing": "Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName": "CIEE: Study Abroad in Seville",
          "GPA": "2.5, 2.9",
          "language": "English, Spanish",
          "areaName": "Art and Art History, Economics, Educational Studies, Linguistics, Neuroscience, Spanish and Portuguese, Theater and Dance",
          "academicFeatures": "Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "ciees.jpg"
        }
      },
        {
          "program": {
            "locationName": "Greece",
          "housing":"Barbara Stinson",
          "programGroup": "Group B - ",
          "programName":"College Year in Athens: International Center for Hellenic and Mediterranean Studies",
          "GPA":"Apartment, Home Stay",
          "language":"English",
          "areaName":"Anthropology, Economics, Greek, History, Latin, Philosophy, Psychology, Neuroscience Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "college.jpg"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"CUNY: New York Union Semester",
          "GPA":"2.5",
          "language":"English",
          "areaName":"American Studies, Political Science, Sociology, Urban Studies, Legal Studies Program",
          "academicFeatures":"Civic Engagement, Internship"
          ,"value":0
          ,"img": "cuny.jpg"
        }
      },{
        "program":{
          "locationName":"Egypt",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"American University in Cairo",
          "GPA":"2.0",
          "language":"Arabic, English",
          "areaName":"Middle Eastern Studies and Islamic Civilization, Classical Mediterranean and Middle East",
          "academicFeatures":"Civic Engagement, Courses at local university, Internship, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "auni.jpg"
        }
      },{
        "program":{
          "locationName":"Israel",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"Hebrew University of Jerusalem",
          "GPA":"3",
          "language":"Arabic, English, Hebrew",
          "areaName":"Biology, Classics, Middle Eastern Studies and Islamic Civilization, Music",
          "academicFeatures":"Courses at local university, Creative Work, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hebrew.jpg"
        }
      },{
        "program":{
          "locationName":"Australia\nAustralia",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"James Cook University",
          "GPA":"2.8",
          "language":"English",
          "areaName":"Art and Art History, Biology, Chemistry, Economics, Environmental Studies, Geography, Geology",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "james.jpg"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"Kansai Gaidai University",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Asian Languages and Cultures",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "kansai.jpg"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"King's College London",
          "GPA":"3.3",
          "language":"English",
          "areaName":"Chemistry, Computer Science, Economics, English, Geography, Philosophy, Political Science",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "kings.jpg"
        }
      },{
        "program":{
          "locationName":"Ireland",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University College Cork",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Economics, English, Geology, Music",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "ucollege.jpg"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Edinburgh",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Biology, Chemistry, Classics, Computer Science, Economics, Educational Studies, English, Geology, Linguistics, Mathematics, Music, Neuroscience, Philosophy, Physics, Political Science, Psychology, Religious Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university, Internship"
          ,"value":0
          ,"img": "uedin.jpg"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Glasgow",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Biology, Computer Science, Economics, English, Mathematics, Neuroscience",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work"
          ,"value":0
          ,"img": "uglas.jpg"
        }
      },{
        "program":{
          "locationName":"Israel",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Haifa",
          "GPA":"3",
          "language":"Arabic, English, Hebrew",
          "areaName":"Classics, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uhaif.jpg"
        }
      },{
        "program":{
          "locationName":"New Zealand",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of Otago Dunedin",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Chemistry, Cognitive Science, Economics, Educational Studies, Geography, Geology, Linguistics, Mathematics, Neuroscience, Physics, Psychology, Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work"
          ,"value":0
          ,"img": "uotago.jpg"
        }
      },{
        "program":{
          "locationName":"Scotland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - Direct Enroll:",
          "programName":"University of St. Andrews",
          "GPA":"3.2",
          "language":"English",
          "areaName":"Art and Art History, Chemistry, Computer Science, English, Geography, Geology, Mathematics, Neuroscience, Philosophy, Physics, Political Science, Psychology",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "ustandrews.jpg"
        }
      },{
        "program":{
          "locationName":"Northern Ireland (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group B - ",
          "programName":"HECUA: Democracy and Social Change in Northern Ireland",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Educational Studies, Geography, Human Rights and Humanitarianism, Political Science, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuaireland.jpg"
        }
      },{
        "program":{
          "locationName":"Norway",
          "housing":"Other",
          "programGroup": "Group B - ",
          "programName":"HECUA: The New Norway: Globalization, National Identity, and the Politics of Belonging",
          "GPA":"2",
          "language":"English",
          "areaName":"Educational Studies, Geography, Human Rights and Humanitarianism, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuanorway.jpg"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IAU: Marchutz School of Fine Arts - Arts Core Program",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Art and Art History",
          "academicFeatures":"Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iau.jpg"
        }
      },{
        "program":{
          "locationName":"Germany",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Berlin Metropolitan Studies",
          "GPA":"2.75",
          "language":"English, German",
          "areaName":"Economics",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesberlin.jpg"
        }
      },{
        "program":{
          "locationName":"Ireland",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Dublin Direct Enroll- National Theatre School of Ireland- Gaiety School of Acting",
          "GPA":"3",
          "language":"English",
          "areaName":"Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesdublin.jpg"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: French Language Immersion & Area Studies in Nantes",
          "GPA":"2.75",
          "language":"French",
          "areaName":"Art and Art History, Economics, Educational Studies, French and Francophone Studies, Linguistics, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesfrench.jpg"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Granada Program",
          "GPA":"2.75",
          "language":"English, Spanish",
          "areaName":"Art and Art History, Economics, Middle Eastern Studies and Islamic Civilization, Religious Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesgranada.jpg"
        }
      },{
        "program":{
          "locationName":"Spain",
          "housing":"Apartment, Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Madrid Program",
          "GPA":"2.75, 3.0","language":"English, Spanish",
          "areaName":"Art and Art History, Economics, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesmadrid.jpg"
        }
      },{
        "program":{
          "locationName":"Italy",
          "housing":"Apartment, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Milan Program",
          "GPA":"2.75",
          "language":"English, Italian",
          "areaName":"Economics, Music",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "iesmilan.jpg"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Nagoya Direct Enrollment - Nanzan University",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Linguistics",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesnagoya.jpg"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: Study Amsterdam",
          "GPA":"3",
          "language":"English",
          "areaName":"Art and Art History, Cognitive Science, Economics, Media and Cultural Studies, Neuroscience, Philosophy, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "iesamsterdam.jpg"
        }
      },{
        "program":{
          "locationName":"South Africa",
          "housing":"Apartment, Residence Hall",
          "programGroup": "Group B - ",
          "programName":"IES Abroad: University of Cape Town",
          "GPA":"3",
          "language":"English",
          "areaName":"African Studies, American Studies, Art and Art History, Economics, English, Human Rights and Humanitarianism, Linguistics, Political Science, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesctown.jpg"
        }
      },{
        "program":{
          "locationName":"Belgium\nFrance\nFrance",
          "housing":"Home Stay, Other",
          "programGroup": "Group B - ",
          "programName":"IFE: Institute for Field Education Program",
          "GPA":"3",
          "language":"French",
          "areaName":"Computer Science, Economics, French and Francophone Studies, Media and Cultural Studies, Neuroscience, Physics, Political Science, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ife.jpg"
        }
      },{
        "program":{
          "locationName":"Argentina",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Argentine Universities Program",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Art and Art History, Economics, English, Geography, Latin American Studies, Linguistics, Media and Cultural Studies, Political Science, Psychology, Spanish and Portuguese, Theater and Dance, Urban Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaargentine.jpg"
        }
      },{
        "program":{
          "locationName":"Chile",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Chilean Universities Program in Santiago",
          "GPA":"2.75",
          "language":"Spanish",
          "areaName":"Art and Art History, Economics, Geology, Latin American Studies, Political Science, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsachile.jpg"
        }
      },{
        "program":{
          "locationName":"India",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Contemporary India",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Educational Studies, Geography, Human Rights and Humanitarianism",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ifsaindiac.jpg"
        }
      },{
        "program":{
          "locationName":"India",
          "housing":"Community and Global Health",
          "programGroup": "Group B - ",
          "programName":"IFSA: India: Global and Public Health",
          "GPA":"Marcus Carrigan",
          "language":"English",
          "areaName":"No recommendations by faculties",
          "academicFeatures":"Civic Engagement, Courses at local university, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaindiag.jpg"
        }
      },{
        "program":{
          "locationName":"Mexico",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Mérida Universities Program",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Latin American Studies, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsam.jpg"
        }
      },{
        "program":{
          "locationName":"Peru",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Pontificia Universidad Católica del Perú",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Latin American Studies, Spanish and Portuguese, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsap.jpg"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Apartment - Local Roommate, Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Shanghai",
          "GPA":"3",
          "language":"Chinese, English",
          "areaName":"Economics, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "ifsas.jpg"
        }
      },{
        "program":{
          "locationName":"Cuba",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Universidad de La Habana",
          "GPA":"3.0",
          "language":"Spanish",
          "areaName":"Spanish and Portuguese",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "ifsauh.jpg"
        }
      },{
        "program":{
          "locationName":"Costa Rica",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"IFSA: Universidad Nacional",
          "GPA":"2.75",
          "language":"Spanish",
          "areaName":"Political Science, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "ifsaun.jpg"
        }
      },{
        "program":{
          "locationName":"Russia\nRussia\nRussia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"Middlebury College: Study Abroad in Russia",
          "GPA":"2.67",
          "language":"Russian",
          "areaName":"Russian Studies",
          "academicFeatures":"Courses at local university, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "middlebury.jpg"
        }
      },{
        "program":{
          "locationName":"Italy",
          "housing":"Apartment",
          "programGroup": "Group B - ",
          "programName":"SACI: Studio Art College International Florence",
          "GPA":"2.75",
          "language":"English",
          "areaName":"Art and Art History, Classics, Economics",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "saci.jpg"
        }
      },{
        "program":{
          "locationName":"Bolivia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Bolivia: Multiculturalism, Globalization, and Social Change",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Anthropology, Educational Studies, Latin American Studies, Political Science, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitbolivia.jpg"
        }
      },{
        "program":{
          "locationName":"Cameroon",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Cameroon: Development and Social Change",
          "GPA":"2.5",
          "language":"English, French",
          "areaName":"African Studies, Economics",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Homestay, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitcameroon.jpg"
        }
      },{
        "program": {
          "locationName":"Chile",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Chile: Public Health, Traditional Medicine, and Community Empowerment",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Community and Global Health, Economics",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitchile.jpg"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: China: Health, Environment, and Traditional Chinese Medicine",
          "GPA":"2.5",
          "language":"Chinese, English",
          "areaName":"American Studies, Anthropology, Asian Languages and Cultures, Educational Studies, Geography",
          "academicFeatures":"Facilitated Excursion(s), Homestay, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitchina.jpg"
        }
      },{
        "program":{
          "locationName":"Ecuador\nEcuador",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Ecuador: Comparative Ecology and Conservation",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Biology, Economics, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitecuador.jpg"
        }
      },{
        "program":{
          "locationName":"Ghana",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Ghana: Africa in the 21st Century",
          "GPA":"2.5",
          "language":"English",
          "areaName":"African Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitghana.jpg"
        }
      },{
        "program":{
          "locationName":"Jordan",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Jordan: Geopolitics, International Relations, and the Future of the Middle East",
          "GPA":"2.5",
          "language":"Arabic, English",
          "areaName":"Classics, Economics, Environmental Studies, Middle Eastern Studies and Islamic Civilization",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitjordan.jpg"
        }
      },{
        "program":{
          "locationName":"Madagascar\nMadagascar",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Madagascar: Biodiversity and Natural Resource Management",
          "GPA":"2.5",
          "language":"English, French",
          "areaName":"African Studies, Biology, Environmental Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitmadagascar.jpg"
        }
      },{
        "program":{
          "locationName":"Mongolia",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Mongolia and Siberia: Nomadism, Geopolitics, and the Environment",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Anthropology, Environmental Studies, Geography",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitmongolia.jpg"
        }
      },{
        "program":{
          "locationName":"Nepal",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Nepal: Tibetan and Himalayan Peoples",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Educational Studies, Religious Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitnepal.jpg"
        }
      },{
        "program":{
          "locationName":"Peru",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Peru: Indigenous Peoples and Globalization",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Anthropology, Economics, Human Rights and Humanitarianism, Latin American Studies, Political Science, Spanish and Portuguese",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sitperu.jpg"
        }
      },{
        "program":{
          "locationName":"Serbia",
          "housing":"Kevin Morrison",
          "programGroup": "Group B - ",
          "programName":"SIT Study Abroad: Serbia, Bosnia, and Kosovo: Peace and Conflict Studies in the Balkans",
          "GPA":"Home Stay, Other",
          "language":"English",
          "areaName":"Anthropology, Geography, History, Human Rights and Humanitarianism, International Studies, Political Science, Russian Studies, Sociology",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "sitserbia.jpg"
        }
      },{
        "program":{
          "locationName":"Ecuador",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Ecuador",
          "GPA":"2.5",
          "language":"Spanish",
          "areaName":"Community and Global Health, Economics, Latin American Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmecuador.jpg"
        }
      },{
        "program":{
          "locationName":"Kenya",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Kenya",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Environmental Studies, African Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmkenya.jpg"
        }
      },{
        "program":{
          "locationName":"Senegal",
          "housing":"Home Stay",
          "programGroup": "Group B - ",
          "programName":"University of Minnesota: MSID: International Development in Senegal",
          "GPA":"2.5",
          "language":"French",
          "areaName":"African Studies, Anthropology, Art and Art History, Community and Global Health, Economics, Educational Studies, French and Francophone Studies, Human Rights and Humanitarianism",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "uofmsenegal.jpg"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Kevin Morrison",
          "programGroup": "Group C - ",
          "programName":"BADA: London Theatre Program",
          "GPA":"Apartment",
          "language":"English",
          "areaName":"Theater",
          "academicFeatures":"Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "bada.jpg"
        }
      },{
        "program":{
          "locationName":"Russia",
          "housing":"Home Stay, Other",
          "programGroup": "Group C - ",
          "programName":"Bard College: Bard-Smolny Program in Russia",
          "GPA":"3",
          "language":"English, Russian",
          "areaName":"Cognitive Science, Linguistics, Russian Studies, Theater and Dance",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "bard.jpg"
        }
      },{
        "program":{
          "locationName":"France",
          "housing":"Home Stay, Other",
          "programGroup": "Group C - ",
          "programName":"CUPA: Center for University Programs Abroad",
          "GPA":"3",
          "language":"French",
          "areaName":"Art and Art History, Critical Theory, Economics, English, French and Francophone Studies, Media and Cultural Studies, Music, Philosophy, Political Science, Psychology, Theater and Dance, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Courses at local university, Creative Work, Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "cupa.jpg"
        }
      },{
        "program":{
          "locationName":"England (United Kingdom)",
          "housing":"Residence Hall",
          "programGroup": "Group C - ",
          "programName":"Direct Enroll: Oxford University St. Catherine's College",
          "GPA":"3.7",
          "language":"English",
          "areaName":"Art and Art History, Computer Science, Economics, English, Geology, Linguistics, Mathematics, Middle Eastern Studies and Islamic Civilization, Philosophy, Physics, Political Science, Psychology, Religious Studies",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "oxford.jpg"
        }
      },{
        "program":{
          "locationName":"Denmark, Sweden",
          "housing":"Apartment, Apartment - Local Roommate, Home Stay, Other, Residence Hall, Residence Hall- Local Roommate",
          "programGroup": "Group C - ",
          "programName":"DIS: Study Abroad in Scandinavia",
          "GPA":"3",
          "language":"English",
          "areaName":"American Studies, Art and Art History, Biology, Community and Global Health, Economics, Educational Studies, Environmental Studies, Human Rights and Humanitarianism, Media and Cultural Studies, Neuroscience, Philosophy, Political Science, Psychology, Urban Studies, Women's, Gender, and Sexuality Studies",
          "academicFeatures":"Civic Engagement, Creative Work, Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "dis.jpg"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Earlham College: Border Studies Program",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Human Rights and Humanitarianism, Latin American Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Internship"
          ,"value":0
          ,"img": "earlham.jpg"
        }
      },{
        "program":{
          "locationName":"New Zealand",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"HECUA: New Zealand Culture & the Environment",
          "GPA":"2",
          "language":"English",
          "areaName":"American Studies, Educational Studies, Environmental Studies, Geography, Urban Studies",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship"
          ,"value":0
          ,"img": "hecuanz.jpg"
        }
      },{
        "program":{
          "locationName":"Netherlands",
          "housing":"Apartment",
          "programGroup": "Group C - ",
          "programName":"IES Abroad: Amsterdam - Conservatorium van Amsterdam",
          "GPA":"3",
          "language":"English",
          "areaName":"Music",
          "academicFeatures":"Courses at local university, Creative Work, Facilitated Excursion(s)"
          ,"value":0
          ,"img": "iesamsterdamc.jpg"
        }
      },{
        "program":{
          "locationName":"Japan",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Japan Study at Waseda University",
          "GPA":"3",
          "language":"English, Japanese",
          "areaName":"Art and Art History, Asian Languages and Cultures, Economics",
          "academicFeatures":"Courses at local university"
          ,"value":0
          ,"img": "waseda.jpg"
        }
      },{
        "program":{
          "locationName":"China",
          "housing":"Residence Hall- Local Roommate",
          "programGroup": "Group C - ",
          "programName":"Middlebury College: China: Hangzhou",
          "GPA":"2.75",
          "language":"Chinese",
          "areaName":"Asian Languages and Cultures, Economics",
          "academicFeatures":"Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "middleburychina.jpg"
        }
      },{
        "program":{
          "locationName":"Nepal",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"Pitzer College: Nepal Program",
          "GPA":"2",
          "language":"English",
          "areaName":"Anthropology, Asian Languages and Cultures, Food, Agriculture, and Society",
          "academicFeatures":"Civic Engagement, Facilitated Excursion(s), Independent Study Project (ISP), Internship, Creative Work"
          ,"value":0
          ,"img": "pitzer.jpg"
        }
      },{
        "program":{
          "locationName":"United States",
          "housing":"Other",
          "programGroup": "Group C - ",
          "programName":"SEA Semester",
          "GPA":"No GPA Requirement",
          "language":"English",
          "areaName":"Biology, Environmental Studies",
          "academicFeatures":"Facilitated Excursion(s), Independent Study Project (ISP)"
          ,"value":0
          ,"img": "sea.jpg"
        }
      },{
        "program":{
          "locationName":"Spain, Argentina, South Africa, United States, Brazil",
          "housing":"Home Stay",
          "programGroup": "Group C - ",
          "programName":"SIT Study Abroad/IHP: Cities in the 21st Century",
          "GPA":"2.5",
          "language":"English",
          "areaName":"Geography, Urban Studies, African Studies",
          "academicFeatures":"Facilitated Excursion(s)"
          ,"value":0
          ,"img": "sitcities.jpg"
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

  //  this.savedItems.push(item);
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
