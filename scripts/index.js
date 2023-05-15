const eng = {
    greetingsData: {
        name: 'olga yuzlikeeva',
        position: 'Frontend developer',
        email: 'yuzlikeeva.olga@gmail.com',
        linkedin: '',
        github: '',
        headerLetter: {
            intro: 'Hi,',
            body: `I'am working as Frontend developer since 2016. I like create a beautiful and user-friendly interfaces. 
            All this time a heve been working with a different size of team and I think, good communication inside 
            the team very impornant for stable and effective work progress. Sometime developer must have
            good soft skills as well as hard skills. The posibbility to get new expirience and share it 
            mean a lot for me. I already have expirience of mentoring and teaching and I love it. 
            I belive in good work without endless calls and really long chains of email.`
        },
        footerLetter: `This landing was made with HTML/CSS/JS and Hendlebars. I made design in Figms. 
        Please, write me massage in LinkdIn or email6 if you like my CV.`,
    },
    educationData: [
        {
            title: 'Bachelor in Applied Mathematics and Informatics',
            subtitle: `Saratov State University, Faculty of Mechanics and Mathematics`,
            date: '2011-2015'
        }
    ],
    coursesData: [
        {
            title: 'Mentoring intensive',
            subtitle: 'verno & red_mad_robots',
            date: '2021'
        },
    ],
    skillsData: [
        [
            {
                title: 'Occupation',
                description: 'Tbilisi, Georgia'
            },
            {
                title: 'Willing to work',
                description: 'remotely, any timezone'
            },
            {
                title: 'Age',
                description: '29'
            },
            {
                title: 'English level',
                description: 'B2'
            },
            {
                title: 'Professional experience',
                description: `${new Date().getFullYear() - 2016} years`
            },
            {
                title: 'Salary expectations',
                description: '$30k per year'
            },
        ],
        [
            {
                title: 'Languages',
                description: 'JavaScript, TypeScrapt, HTML'
            },
            {
                title: 'FW & Libraries',
                description: 'ReactJs, Angular, VueJs, NextJs'
            },
            {
                title: 'Other',
                description: 'react-router, react-router-dom, react-animations, Leaflet'
            },
            {
                title: 'State managers',
                description: 'MobX, Redux, Atom'
            },
            {
                title: 'Working with forms',
                description: 'Formik + yup'
            },
            {
                title: 'Styles',
                description: 'Sass, Styled-components, Stylus, CSS'
            },
            {
                title: 'Working with images',
                description: 'SVG-sprate, Canvas'
            },
            {
                title: 'CI',
                description: 'Git, Webpack, Gulp'
            },
            {
                title: 'Mark up quality',
                description: 'Cross-browser, adaptive, responsive, accessibility'
            },
            {
                title: 'Code quality',
                description: 'clean-code, ESLint, prettier, SOLID'
            },
            {
                title: 'Package managers',
                description: 'npm, yarn'
            },
        ],,
        [
            {
                title: 'Atlassian',
                description: 'JIRA, Confluens, Trello'
            },
            {
                title: 'SCV',
                description: 'Bitbacket, GitLab'
            },
            {
                title: 'Design',
                description: 'Zeppelin, Figma'
            },
            {
                title: 'Environment',
                description: 'WebStorm, VSCode, Atom'
            },
            {
                title: 'Work flow',
                description: 'Agail, Scrum'
            },
            {
                title: 'OC',
                description: 'MacOS, Linux'
            },
            {
                title: 'Working with images',
                description: 'SVG-sprate, Canvas'
            },
        ],
        [
            {
                title: 'Occupation',
                description: 'Kazahstan, Astana'
            },
        ],
    ],
    expirience: [
        {
            position: 'Frontend developer',
            company: 'Freelance & part-time job',
            dates: '2021 – 2022',
            descriptions: [
                'develop SSR web-app by NextJs',
                'develop school platform for students and teachers with ReactJS + MobX + Sass',
                'develop school platform for students and teachers with Angular + Sass',
                'refactoring and development SPA for trevelers with ReactJS + Redux + Scss',
            ]
        },
        {
            position: 'Middle Frontend developer',
            company: 'Technokratos',
            dates: '2019 – 2023',
            descriptions: [
                'кроссбраузерная, адаптивная, резиновая верстка с использованием препроцессоров (sass, styled-components, stylus, css)',
                'разработка, рефакторинг, оптимизация web-приложений на TypeScript (ReactJs + MobX/Angular)',
                'interactive map development using Leaflet and Canvas',
                'работа с формами (ReactJs + Formik + Yup/Angular)',
                'developing of UI-kit (ReactJs)',
                'добавление мультиязычности в приложения',
                'работа с Webpack',
                'code review',
                'написание документации',
                'добавление мультиязычности в приложения',
                'mentoring and creating course about basic Frontend knowledge',
                'участие во внешних и внутренних митапах в качестве докладчика'
            ]
        },
        {
            position: 'Teacher',
            company: 'Technokratos, it-courses Agona',
            dates: '2021 – 2022',
            descriptions: [
                'подготовка учебного плана',
                'создание презентаций с теоретическим материалом и примерами кода',
                'подготовка практических задание к топикам',
                'code review студентов с обратной связью',
                'проведение практик и лекций в онлайн и оффлайн',
                'подготовка и проведение промежуточных тестирований и экзаменов'
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'FoSS-labs',
            dates: '2017 – 2018',
            descriptions: [
                'Разработка с нуля мобильного приложения на React Native',
                'Разработка информационной панели для SmartTV HTML5/CSS/JS/jQuery (с большим количеством анимации и динамическим обновлением контента)',
                'Разработка системы администрирования контента информационной панели на ReactJS/Sass',
                'Разработка сайта компании',
                'проведение практик и лекций в онлайн и оффлайн',
                'Разработка информационного портала для Союза музыкантов Татарстана с поддержкой видео/аудио и мультиязычности. ReactJS/Sass/i18'
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'OpenDev',
            dates: '2016 – 2017',
            descriptions: [
                'Верстка лендингов по макетам, с использованием: HTML/CSS3, Bootstrap, JavaStript',
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'Sattelit Soft Labs',
            dates: '2016',
            descriptions: [
                'Разработка web-приложения для просмотра агригированных данных с использованием: Angular (v.1.x), leaflet, chart, Bootstrap',
                'Верстка интерфейсов без подготовленного дизайна, по ТЗ',
                'Презентация релизов заказчику',
                'Самостоятельное оформление задач',
            ]
        },
        {
            position: 'Working with documentation',
            company: 'KBPA',
            dates: '2014 – 2015',
            descriptions: [
                'Написание документации',
                'проектирование web-ресурса для системы автоматизированного документооборота',
            ]
        }
    ]
}   
const ru = {
    greetingsData: {
        name: 'Ольга Юзликеева',
        position: 'Frontend developer',
        email: 'yuzlikeeva.olga@gmail.com',
        linkedin: '',
        github: '',
        headerLetter: {
            intro: 'Привет,',
            body: `я занимаюсь фронтендом с 2016 года. Все началось в 2015 году с книги с носорогом и самостоятельном 
            изучении правил вертки. Мне нравится созвадать красивые и удобные интерфейсы. Для меня ценно получать новый опыт и
            делиться им с другими. Я верю, что умение находить общий язык с командой и уметь разрешать конфликты 
            не менее важно, чем быть хорошим специалистом. Я не люблю бесконечные или частые созвоны.`
        },
        footerLetter: `Этот резюме-лендинг сделан с помощью HTML/CSS/JS, с использованием шаблонизатора 
        Hendlebars. Дизайн нарисован в Figma. 
        Если вам понравилось мое резюме, напишите мне на почту или в LinkedIn'е.`,
    },
    educationData: [
        {
            title: 'Бакалавр по направлению математика и прикладная информатика',
            subtitle: `Саратовский государственный университет, Механико-математический факультет`,
            date: '2011-2015'
        }
    ],
    coursesData: [
        {
            title: 'Интенсив по менторингу',
            subtitle: 'verno & red_mad_robots',
            date: '2021'
        },
    ],
    skillsData: [
        [
            {
                title: 'Место нахождения',
                description: 'Тбилиси, Грузия'
            },
            {
                title: 'Предпочтительная форма работы',
                description: 'удаленная, любая тайм-зона'   
            },
            {
                title: 'Возраст',
                description: '29 лет'
            },
            {
                title: 'Уровень английского',
                description: 'B2'
            },
            {
                title: 'Коммерческий опыт',
                description: `${new Date().getFullYear() - 2016} лет`,
            },
            {
                title: 'Зарплатные ожидания',
                description: '$3000 в месяц'
            },
        ],
        [
            {
                title: 'Языки',
                description: 'JavaScript, TypeScrapt, HTML'
            },
            {
                title: 'ФВ и библиотеки',
                description: 'ReactJs, Angular, VueJs, NextJs'
            },
            {
                title: 'Другое',
                description: 'react-router, react-router-dom, react-animations, Leaflet'
            },
            {
                title: 'State managers',
                description: 'MobX, Redux, Atom'
            },
            {
                title: 'Работа с формами',
                description: 'Formik + yup'
            },
            {
                title: 'Оформление стиля',
                description: 'Sass, Styled-components, Stylus, CSS'
            },
            {
                title: 'Работа с изображениями',
                description: 'SVG-sprate, Canvas'
            },
            {
                title: 'CI',
                description: 'Git, Webpack, Gulp'
            },
            {
                title: 'Качество верстки',
                description: 'Кросс-браузерная, адаптивная, резиновая, accessibility'
            },
            {
                title: 'Качество кода',
                description: 'Чистый код, ESLint, prettier, SOLID'
            },
            {
                title: 'Менеджеры пакетов',
                description: 'npm, yarn'
            },
        ],,
        [
            {
                title: 'Atlassian',
                description: 'JIRA, Confluens, Trello'
            },
            {
                title: 'SCV',
                description: 'Bitbacket, GitLab'
            },
            {
                title: 'Дизайн',
                description: 'Zeppelin, Figma'
            },
            {
                title: 'Среды разработки',
                description: 'WebStorm, VSCode, Atom'
            },
            {
                title: 'Work flow',
                description: 'Agail, Scrum'
            },
            {
                title: 'OC',
                description: 'MacOS, Linux'
            },
        ],
        [
            {
                title: 'Occupation',
                description: 'Kazahstan, Astana'
            },
            {
                title: 'Willing to work',
                description: 'remotely, any timezone'
            },
            {
                title: 'Age',
                description: '29'
            },
            {
                title: 'English level',
                description: 'B2'
            },
            {
                title: 'Professional experience',
                description: '29'
            },
            {
                title: 'Salary expectations',
                description: '$30k per year'
            },
        ],
    ],
    expirience: [
        {
            position: 'Frontend developer',
            company: 'Фриланс и парттайм',
            dates: '2021 – 2022',
            descriptions: [
                'разработка SSR веб-приложения NextJs',
                'разработка учебной платформы для студентов и преподавателей ReactJS + MobX + Sass',
                'разработка учебной платформы для студентов и преподавателей Angular + Sass',
                'рефакторинг и доработка приложения для путешественников ReactJS + Redux + Scss',
            ]
        },
        {
            position: 'Middle Frontend developer',
            company: 'Технократия',
            dates: '2019 – 2023',
            descriptions: [
                'кроссбраузерная, адаптивная, резиновая верстка с использованием препроцессоров (sass, styled-components, stylus, css)',
                'разработка, рефакторинг, оптимизация web-приложений на TypeScript (ReactJs + MobX/Angular)',
                'разработка интерактивной карты с использованием Leaflet и Canvas',
                'работа с формами (ReactJs + Formik + Yup/Angular)',
                'создание и расширение библиотеки компонентов на (ReactJs)',
                'добавление мультиязычности в приложения',
                'работа с Webpack',
                'code review',
                'написание документации',
                'добавление мультиязычности в приложения',
                'менторинг и создание программы стажировки',
                'участие во внешних и внутренних митапах в качестве докладчика'
            ]
        },
        {
            position: 'Преподаватель',
            company: 'Технократия, it-курсы Agona',
            dates: '2021 – 2022',
            descriptions: [
                'подготовка учебного плана',
                'создание презентаций с теоретическим материалом и примерами кода',
                'подготовка практических задание к топикам',
                'code review студентов с обратной связью',
                'проведение практик и лекций в онлайн и оффлайн',
                'подготовка и проведение промежуточных тестирований и экзаменов'
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'Лаборатория открытых технологий',
            dates: '2017 – 2018',
            descriptions: [
                'Разработка с нуля мобильного приложения на React Native',
                'Разработка информационной панели для SmartTV HTML5/CSS/JS/jQuery (с большим количеством анимации и динамическим обновлением контента)',
                'Разработка системы администрирования контента информационной панели на ReactJS/Sass',
                'Разработка сайта компании',
                'проведение практик и лекций в онлайн и оффлайн',
                'Разработка информационного портала для Союза музыкантов Татарстана с поддержкой видео/аудио и мультиязычности. ReactJS/Sass/i18'
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'OpenDev',
            dates: '2016 – 2017',
            descriptions: [
                'Верстка лендингов по макетам, с использованием: HTML/CSS3, Bootstrap, JavaStript',
            ]
        },
        {
            position: 'Junior frontend developer',
            company: 'Sattelit Soft Labs',
            dates: '2016',
            descriptions: [
                'Разработка web-приложения для просмотра агригированных данных с использованием: Angular (v.1.x), leaflet, chart, Bootstrap',
                'Верстка интерфейсов без подготовленного дизайна, по ТЗ',
                'Презентация релизов заказчику',
                'Самостоятельное оформление задач',
            ]
        },
        {
            position: 'Инженер-программист',
            company: 'Конструкторское бюро промышленной автоматики',
            dates: '2014 – 2015',
            descriptions: [
                'Написание документации',
                'проектирование web-ресурса для системы автоматизированного документооборота',
            ]
        }
    ]
}   

window.onload = function() {
    const currentLanguage = window.localStorage.getItem('lang');
    if (currentLanguage === null) {
        window.localStorage.setItem('lang', 'eng');
        renderHandlebars('eng');
    } else {
        renderHandlebars(currentLanguage);
    }
}

function renderHandlebars (lang) {
    let language = lang.toLowerCase();
    let data = {};

    if (language !== 'eng' && language !== 'ru') {
        return;
    }

    if (language === 'eng') {
        data = eng;
    } else {
        data = ru;
    }

    const mainTemplate = document.getElementById('main-template').innerHTML;
    const compiledMainTemplate = Handlebars.compile(mainTemplate);
    const renderedmainTemplate = compiledMainTemplate(data);
    document.getElementById('main-template-target').innerHTML = renderedmainTemplate;
}

function changeLanguage (lang) {
    window.localStorage.setItem('lang', lang);
    location.reload();
}

const sliderProps = {
    currentSlide: 0,
    maxSliderCounts: 3
}

const slideGalleryToSlide = (slideNumber) => {
    slideGallery(slideNumber -sliderProps.currentSlide);
}

const slideGallery = (step) => {
    const galleryLeftButton = document.getElementById('gallery-arrow_left');
    const galleryRightButton = document.getElementById('gallery-arrow_right');
    const nextSlideCount = sliderProps.currentSlide + step;

    if ( nextSlideCount > sliderProps.maxSliderCounts || nextSlideCount < 0 ) {
        return;
    }

    document.getElementById(`skill-gallery_nav-item_${sliderProps.currentSlide}`).classList.remove('active');

    sliderProps.currentSlide += step

    document.getElementById(`skill-gallery_nav-item_${sliderProps.currentSlide}`).classList.add('active');
    document.getElementById('gallery').setAttribute('style', `left: -${sliderProps.currentSlide*100}vw`)

    if (nextSlideCount === 0) {
        galleryLeftButton.classList.remove('active');
        galleryRightButton.classList.add('active');
    }

    if (nextSlideCount === sliderProps.maxSliderCounts) {
        galleryLeftButton.classList.add('active');
        galleryRightButton.classList.remove('active');
    }

    if (nextSlideCount !== 0 && nextSlideCount !== sliderProps.maxSliderCounts) {
        galleryLeftButton.classList.add('active');
        galleryRightButton.classList.add('active');
    }
}

//todo: нехватает плавности
window.addEventListener("load", (event) => {
    const btn = document.querySelectorAll('.position-toggle-button');
    const disc = document.querySelectorAll('.position-description');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', fun_open);

        function fun_open(event) {
            for (var i = 0; i < btn.length; i++) {
                if (btn[i] == event.currentTarget) {
                    btn[i].classList.toggle('close');
                    btn[i].classList.toggle('open');
                    disc[i].classList.toggle('open');
                }
            }
        }

    }
});
