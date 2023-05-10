export const projects = [
  {
    projectId: "1",
    projectName: "Wake On Lan",
    projectDescription: "A fullstack application to wake up computers remotely",
    projectDetails:
      "Another contracted work by a german public television station. The purpose was to provide a fullstack app to keep track of, wake-up and safely shut-down all production servers in the local studio. The users, user groups and server data are kept in MariaDB and the Express-Server is responsible for handling the requests coming from the frontend.<p>For the React frontend I leaned heavily on the great UI/UX-components provided by <a href='https://www.radix-ui.com/' target='_blank'>Radix</a>. It made adding new dialogs, icons, search bars and dropdowns a no-brainer, so i could craft out the main app within three days. Of course the last 10% will take 90% of the time ... ",
    projectLink: "https://zdf.de/",
    projectImage: "../images/wake-on-lan.png",
    projectTags: ["react", "node.js", "mariaDB"],
  },
  {
    projectId: "2",
    projectName: "Crypto Dashboard",
    projectDescription: "A multifunctional dashboard for crypto traders",
    projectDetails:
      "The Crypto Dashboard is the first of a series of <a href='https://50reactprojects.com/' target='_blank'>#50 React Projects</a> inspired by Colby Fayock. The original prompt was to create an analytics dashboard that shows historical performance of tech stocks.<p> After some online research i found the API from <a href='https://coincap.io/' target='_blank' >Coincap</a> to be the most reliable and user friendly. As it was my goal to make the site look good on every screen it took me a while to get my head around <strong>Chart.js</strong> and the way it handles scaling.<p>The dashboard uses React Router, Dark Mode toggle and a bunch of handwritten helper functions to convert dates, currencies and big numbers.<p> Source code is available <a href='https://github.com/SubliminalGuy/react-stock-dash' target='_blank'>here</a>. ",
    projectLink: "https://subguy-crypto-dashboard.netlify.app/",
    projectImage: "../images/cryptodashboard.png",
    projectTags: ["react", "chart.js"],
  },
  {
    projectId: "3",
    projectName: "Television AI",
    projectDescription:
      "An AI video editing integration for Adobe Premiere Pro",
    projectDetails:
      "This was a contracted work by a german public television station. The objective was to integrate a third-party app into the postproduction workflow. <p>The third-party app provides a machine learning algorithm that returns short pre-edited video sequences given an input of low-resultion video files and a written text prompt.<p> My job was to create an easy workflow for editors in Adobe Premiere Pro. The workflow includes identification of the selected assets, optional rendering of low-res video files, uploading the files to the third-party server and providing JSON-data to the API.<p> The API calls back when the job is finished, triggering an automated import of AI-generated voiceover and editing data into Adobe Premiere.<p> The result is a high-resolution pre-edited video sequence with voice over. If further editing is required, feedback can be provided to the third-party app.",
    projectLink: "https://www.television.ai",
    projectImage: "..//images/tv-ai.png",
    projectTags: ["extendScript"],
  },
  {
    projectId: "4",
    projectName: "Adults in the Zoom",
    projectDescription: "A Svelte based Blog for political memoirs",
    projectDetails:
      "From 2017 to 2020 i was a member of DiEM25, a trans-european political movement founded by the notorious Yanis Varoufakis. As it was a pretty intense time i felt i needed to get my head around what happened. Eventually i wrote a book-length memoir about my experiences in the movement. As it is a pretty long read i decided to publish it as a series of blogposts to make it easier to digest.<p> The blog is called <a href='https://www.adults-in-the-zoom.de/' target='_blank'>Adults in the Zoom</a> and is written using <strong>Svelte</strong> and <strong>Sapper</strong>. In the beginning i used <a href='https://strapi.io/' target='_blank'>Strapi</a> as a headless CMS with MongoDB on the backend. To save hosting costs i rewrote the admin-section (and a comment function) using <a href='https://supabase.com/' target='_blank'>Supabase</a> as a database.<p> As additional libraries i used <strong>Native Toast</strong> and <strong>EmailJS</strong>. The site is hosted on Netlify and the source code can be found <a href='https://github.com/SubliminalGuy/frontend-aitz' target='_blank'>here</a>.",
    projectLink: "https://www.adults-in-the-zoom.de/",
    projectImage: "..//images/a-in-the-zoom.png",
    projectTags: ["svelte", "supabase"],
  },
  {
    projectId: "5",
    projectName: "Sopita de Letras",
    projectDescription: "A simple letter soup game for spanish beginners",
    projectDetails:
      "When my girlfriend was working as a spanish teacher in Berlin, i created some teeny-tiny apps for her. This one is a classic word soup that includes the spanish names for eight colors. <p>Like the <strong>Abecedario</strong> it's a simple app, but i had fun creating it and the children liked it.<p> The app is written in <strong>Vue2</strong>. If you want to clone the repository and play around with it on your machine, it can be found on <a href='https://gitlab.com/subliminal_guy/sopita-de-letras' target='_blank'>Gitlab</a>. ",
    projectLink: "https://sopitadeletras.netlify.app/",
    projectImage: "..//images/sopitadeletras.png",
    projectTags: ["vue2"],
  },
  {
    projectId: "6",
    projectName: "Abecedario",
    projectDescription: "A simple pronounciation guide for spanish beginners",
    projectDetails:
      "When my girlfriend was working as a spanish teacher in Berlin, i created some teeny-tiny apps for her. This one teaches beginners to pronounce the spanish alphabet, which has quite a few pecularities. It's a simple app, but it was a great learning experience for me.<p> What may appear complicated is in fact really easy. I learned the basics in Wes Bos's wonderful Vanilla JS course <a href='https://javascript30.com/' target='_blank'>JavaScript30</a>. With only a few lines of code you can use the <a href='https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance' target='_blank'>SpeechSynthesis Constructor</a>.<p> The app is written in <strong>Vue2</strong>. A detailed descriptions of its components can be found <a href='https://devblog.codebabbler.org/abecedario-espanol/' target='_blank'>here</a>. If you want to clone the repository and play around with it on your machine, it can be found on <a href='https://gitlab.com/subliminal_guy/abecedario' target='_blank'>Gitlab</a>.",
    projectLink: "https://teresais-alfabeto.netlify.app/",
    projectImage: "..//images/abecedario.png",
    projectTags: ["vue2"],
  },
  {
    projectId: "7",
    projectName: "SubGuy's Recordshop",
    projectDescription: "My first serious take on Node.js",
    projectDetails:
      "Currently i'm not a full-stack-developer, but i'm working on it. This is my first serious take on <strong>Node.js</strong> and <strong>Express</strong>, using pug as a template engine. It's a simple record store with a <strong>MongoDB</strong> database attached. <p> To be completely honest i was so busy with writing all the models, controllers and views, that i didn't spend much time on the design part. So the site is not beautiful, but it felt like an achievement to wrap my hand around a backend framework.",
    projectLink: "https://node-record-store.subliminalguy.repl.co/store",
    projectImage: "..//images/node-recordshop.png",
    projectTags: ["node.js", "express", "mongoDB"],
  },
];
