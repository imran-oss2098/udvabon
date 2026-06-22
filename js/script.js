const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelectorAll(".nav-links li");

// ১. পেজ লোড হওয়ার পর চেক করা—ইউজার কি কোনো পেজ থেকে ক্লিক করে এসেছে?
// যদি ক্লিক করে এসে থাকে, তবে সাইডবার খোলাই থাকবে
if (sessionStorage.getItem("sidebarOpened") === "true") {
    sidebar.classList.remove("close");
}

// ২. অ্যারো বাটনে ক্লিক করলে ম্যানুয়ালি ছোট-বড় করার সুবিধা
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    // ইউজার নিজে বন্ধ করলে মেমোরি ক্লিয়ার করে দেওয়া
    if (sidebar.classList.contains("close")) {
        sessionStorage.setItem("sidebarOpened", "false");
    } else {
        sessionStorage.setItem("sidebarOpened", "true");
    }
});

// ৩. ওয়েবসাইট স্ক্রল (Scroll) করলেই সাইডবার ওপেন হয়ে যাবে
window.addEventListener("scroll", () => {
    if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
        sessionStorage.setItem("sidebarOpened", "true"); // স্টেট সেভ রাখা
    }
});

// ৪. কোনো আইকন বা পেজে ক্লিক করার সাথে সাথে স্টেট সেভ হবে যেন নতুন পেজ খোলার পর সাইডবার খোলাই থাকে
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        sessionStorage.setItem("sidebarOpened", "true");
    });
});



// start teacher slider
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,         /* একদম ছোট স্ক্রিনে বা মোবাইলে ১টি কার্ড */
  spaceBetween: 25,         /* কার্ডগুলোর ভেতরের গ্যাপ */
  loop: true,               /* ইনফিনিট লুপ (অনবরত চলতে থাকবে) */
  autoplay: {
    delay: 2000,            /* ২ সেকেন্ড পর পর নিজে নিজেই সামনের দিকে যাবে */
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,     
    },
    768: {
      slidesPerView: 2,     /* মাঝারি স্ক্রিনে ২টি কার্ড */
    },
    1200: {
      slidesPerView: 3,     /* সাইডবার বাদ দিয়ে আপনার মেইন স্ক্রিনে চমৎকারভাবে ৩টি কার্ড দেখাবে */
    },
    1400: {
      slidesPerView: 4,     /* স্ক্রিন অনেক বড় হলে ৪টি কার্ড দেখাবে */
    }
  },
});

// end teacher slider




// start live chat
function sendMessage() {

    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");

     // Append user message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    input.value = "";

    // Simulate bot reply after short delay
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = generateBotReply(message);
        chatBox.appendChild(botMsg);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

function generateBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("water")) return "Most plants need watering once a week. Check if the topsoil is dry!";
    if (msg.includes("sunlight")) return "Place your plant near a window with indirect sunlight.";
    if (msg.includes("brown leaves")) return "Brown leaves can be due to overwatering or low humidity.";
    if (msg.includes("fertilizer")) return "Use a balanced fertilizer once a month during the growing season.";
    if (msg.includes("repot")) return "Repot when roots grow out of the drainage holes or every 1-2 years.";
    

    if (msg.includes("board ")) return "Prottek din fixed time porashona korte hobe, syllabus ke chapter wise divide kore nite hobe, model test dite hobe, ar previous year question solve korte hobe";
    if (msg.includes("math")) return "Age outline banayo, simple sentence use koro, grammar check koro, ar protidin ekta essay practice koro. ";
    if (msg.includes("exam")) return " mportant summary, formula, definition ar short notes revise koro. New chapter start koro na, ager pora repeat koro.";
    if (msg.includes("admission")) return " Board exam er pora revise koro, MCQ practice koro, mock test dao, ar weak subject e beshi focus koro.";
    if (msg.includes("english")) return " Age outline banayo, simple sentence use koro, grammar check koro, ar protidin ekta essay practice koro.";
    if (msg.includes("daily")) return " Prottek din fixed routine banayo, morning e tough subject poro, evening e revision koro, ar protidin short break niye focus barayo?";
    if (msg.includes("hi")) return " please Ask Perfect Question";
    if (msg.includes("hello")) return " How can I Help You?. ";

    if (msg.includes("gpa")) 
  return "Weak subject e beshi focus koro, teacher er help nao, regular class test dao, ar consistency maintain koro.";

if (msg.includes("stress")) 
  return "Deep breath nao, easy question diye start koro, time ke divide kore answer likho, ar panic koro na.";

if (msg.includes("science")) 
  return "Formula ekta alada khatay likho, protidin revise koro, ar practical example diye relate koro.";

if (msg.includes("model")) 
  return "Model test diye exam er environment practice hoy, time management improve hoy, ar weak subject identify korte paro.";

if (msg.includes("routine")) 
  return "Morning e tough subject poro, evening e revision koro, ar short break niye focus barayo.";

if (msg.includes("teacher")) 
  return "Teacher er sathe regular communication rakho, jekhane problem hoy shekhane help nao.";

if (msg.includes("mcq")) 
  return "MCQ practice koro, time limit maintain koro, ar wrong answer analysis koro.";

if (msg.includes("revision")) 
  return "Prottek din last 30 minute e ager pora revise koro, jotil topic bar bar dekho.";

if (msg.includes("time")) 
  return "Prottek subject er jonno fixed time set koro, ar timer use kore porashona koro.";

if (msg.includes("motivation")) 
  return "Positive mindset rakho, choto goal set koro, ar prottek success celebrate koro.";

if (msg.includes("physics")) 
  return "Prottek formula ekta khatay likho, derivation bujho, ar diagram practice koro.";

if (msg.includes("chemistry")) 
  return "Equation balance practice koro, periodic table memorize koro, ar lab experiment er example dekho.";

if (msg.includes("biology")) 
  return "Diagram draw practice koro, definition memorize koro, ar real life example diye relate koro.";

if (msg.includes("history")) 
  return "Timeline banayo, important date ar event memorize koro, ar short note likho.";

if (msg.includes("geography")) 
  return "Map practice koro, important river, mountain ar country location dekho, ar MCQ solve koro.";

if (msg.includes("bangla")) 
  return "Sahitya part e summary likho, grammar practice koro, ar protidin ekta composition likho.";

if (msg.includes("study")) 
  return "Prottek din fixed routine follow koro, tough subject morning e poro, ar evening e revision koro.";

if (msg.includes("sleep")) 
  return "Exam time e 6-7 ghonta ghum dorkar, raat e late ghumio na, morning e fresh thako.";

if (msg.includes("food")) 
  return "Healthy khabar khao, junk food avoid koro, ar exam er age light khabar khao.";

if (msg.includes("focus")) 
  return "Mobile distraction komao, short break nao, ar ek sathe ek subject e focus koro.";

if (msg.includes("success")) 
  return "Regular porashona koro, positive mindset rakho, ar prottek din choto goal achieve koro.";

if (msg.includes("fail")) 
  return "Failure ke lesson hishabe nao, weak subject e beshi time dao, ar abar try koro.";

if (msg.includes("scholarship")) 
  return "Result improve koro, admission test e valo score koro, ar scholarship er circular follow koro.";

if (msg.includes("routine change")) 
  return "Exam er age routine flexible rakho, weak subject e beshi time dao, ar revision priority dao.";
if (msg.includes("motivation")) 
  return "Prottek din choto goal set koro, success celebrate koro, ar positive mindset rakho.";

if (msg.includes("hardwork")) 
  return "Hard work always pays off, regular practice koro, ar consistency maintain koro.";

if (msg.includes("success story")) 
  return "Onno student er success story poro, nijer upor confidence rakho, ar try korte thako.";

if (msg.includes("confidence")) 
  return "Self belief sobcheye important, nijer ability te trust rakho, ar exam e fearless thako.";

if (msg.includes("dream")) 
  return "Big dream rakho, small step diye start koro, ar prottek din ek step forward nao.";

if (msg.includes("failure")) 
  return "Failure ke lesson hishabe nao, abar try koro, ar weak point improve koro.";

if (msg.includes("never give up")) 
  return "Prottek challenge overcome kora possible, try korte thako, ar ekdin success asbei.";

if (msg.includes("focus")) 
  return "Distraction komao, ek sathe ek subject e focus koro, ar short break diye energy barayo.";

if (msg.includes("positive")) 
  return "Positive mindset rakho, negative thought avoid koro, ar prottek din gratitude practice koro.";

if (msg.includes("goal")) 
  return "Clear goal set koro, routine follow koro, ar prottek din progress check koro.";

if (msg.includes("future")) 
  return "Tomar porashona future change korte pare, tai ekhon effort dao, ar tomake valo result inspire korbe.";

if (msg.includes("energy")) 
  return "Healthy food khao, enough sleep nao, ar protidin short exercise koro energy barate.";
if (msg.includes("class time")) 
  return "Class time fixed routine e deya thakbe, prottek din timely attend korte hobe.";

if (msg.includes("syllabus")) 
  return "Syllabus ke chapter wise divide koro, ar prottek din ekta part complete koro.";

if (msg.includes("homework")) 
  return "Homework regular complete koro, teacher er sathe check koro, ar doubt clear koro.";

if (msg.includes("exam date")) 
  return "Exam date notice board e deya thakbe, ar online portal e update hobe.";

if (msg.includes("fees")) 
  return "Course fee class er upor depend kore, scholarship option o available ache.";

if (msg.includes("result")) 
  return "Result online portal e publish hobe, ar teacher er sathe discuss korte parba.";

if (msg.includes("library")) 
  return "Library facility available ache, reference book ar study material use korte parba.";

if (msg.includes("group study")) 
  return "Group study korle motivation baray, ar ekjon onnojon ke help korte pare.";

if (msg.includes("weak subject")) 
  return "Weak subject e beshi time dao, teacher er help nao, ar MCQ practice koro.";

if (msg.includes("admission test")) 
  return "Admission test er jonno MCQ practice koro, mock test dao, ar board exam er pora revise koro.";

if (msg.includes("online class")) 
  return "Online class option ache, recorded lecture o available thakbe.";

if (msg.includes("attendance")) 
  return "Attendance regular dite hobe, minimum percentage maintain korte hobe exam e boshar jonno.";

if (msg.includes("notes")) 
  return "Teacher er provided notes follow koro, nijer short note banayo, ar last moment e revise koro.";

if (msg.includes("practice")) 
  return "Daily practice korle confidence baray, ar exam e time management improve hoy.";

if (msg.includes("mock test")) 
  return "Mock test diye exam er environment practice hobe, ar weak point identify korte parba.";

if (msg.includes("batch"))
  return "Notun batch shuru hole website ar Facebook page e notice deya hobe.";

if (msg.includes("live class"))
  return "Live class e directly teacher ke question korte parba.";

if (msg.includes("record"))
  return "Miss kora class pore recording theke dekhe nite parba.";

if (msg.includes("pdf"))
  return "Class er PDF material student panel theke download kora jabe.";

if (msg.includes("certificate"))
  return "Course successfully complete korle certificate deya hobe.";

if (msg.includes("mentor"))
  return "Mentor tomake regular guideline dibe ar progress monitor korbe.";

if (msg.includes("doubt"))
  return "Jekono doubt hole support group e question korte parba.";

if (msg.includes("video"))
  return "Video lecture gulo multiple time dekhe concept clear korte parba.";

if (msg.includes("assignment"))
  return "Assignment submit korle teacher feedback dite parbe.";

if (msg.includes("progress"))
  return "Regular exam ar performance diye progress measure kora hoy.";

if (msg.includes("leaderboard"))
  return "Leaderboard e top student der ranking dekhte parba.";

if (msg.includes("guardian"))
  return "Guardian chaile student er progress report dekhte parben.";

if (msg.includes("notification"))
  return "Important update notification er maddhome janano hobe.";

if (msg.includes("zoom"))
  return "Online class Zoom ba onno platform diye conduct kora hote pare.";

if (msg.includes("telegram"))
  return "Telegram group e important file ar notice share kora hoy.";

if (msg.includes("facebook"))
  return "Facebook page e regular update ar notice publish kora hoy.";

if (msg.includes("app"))
  return "Mobile app thakle sekhane class ar material access kora jabe.";

if (msg.includes("login"))
  return "Login problem hole support team er sathe jogajog koro.";

if (msg.includes("password"))
  return "Password bhule gele reset option use korte parba.";

if (msg.includes("account"))
  return "Student account theke result, class ar materials access kora jabe.";

if (msg.includes("download"))
  return "Available file gulo dashboard theke download kora jabe.";

if (msg.includes("internet"))
  return "Internet slow hole video quality komiye class korte parba.";

if (msg.includes("device"))
  return "Mobile, laptop ba desktop diye class kora jabe.";

if (msg.includes("camera"))
  return "Proyojon hole camera on kore class e join korte hobe.";

if (msg.includes("microphone"))
  return "Question korar somoy microphone use korte parba.";

if (msg.includes("contest"))
  return "Regular contest student der learning aro interesting kore tole.";

if (msg.includes("achievement"))
  return "Valo performance korle special recognition deya hote pare.";

if (msg.includes("badge"))
  return "Active student der jonno special badge system thakte pare.";

if (msg.includes("community"))
  return "Student community te onno der sathe discussion korte parba.";

if (msg.includes("discussion"))
  return "Discussion group e problem share kore solution pete parba.";

if (msg.includes("resource"))
  return "Extra learning resource student der jonno available thake.";

if (msg.includes("update"))
  return "Notun feature ba notice niyomito update kora hoy.";

if (msg.includes("seminar"))
  return "Special seminar e expert der guideline pawa jabe.";

if (msg.includes("webinar"))
  return "Webinar e live session er maddhome notun topic shekha jabe.";

if (msg.includes("workshop"))
  return "Workshop practical skill develop korte shahajjo kore.";

if (msg.includes("feedback"))
  return "Student feedback er maddhome service aro improve kora hoy.";

if (msg.includes("payment"))
  return "Payment related information support team theke jana jabe.";

if (msg.includes("refund"))
  return "Refund policy somporke details official notice e deya thakbe.";

if (msg.includes("offer"))
  return "Special occasion e discount ba offer deya hote pare.";

if (msg.includes("coupon"))
  return "Coupon code thakle registration er somoy use korte parba.";

if (msg.includes("batch number"))
  return "Tomar batch number student dashboard theke dekhte parba.";

if (msg.includes("seat"))
  return "Seat limited thakle age registration korle priority pawa jabe.";

if (msg.includes("vacancy"))
  return "Available seat thakle notun student vorti hote parbe.";

if (msg.includes("registration"))
  return "Registration form fill up kore enrollment complete korte hobe.";

if (msg.includes("enroll"))
  return "Enroll korar por student panel access peye jabe.";

if (msg.includes("trial"))
  return "Kichu course e free trial class thakte pare.";

if (msg.includes("demo"))
  return "Demo class dekhe course somporke idea nite parba.";

if (msg.includes("recording"))
  return "Class recording pore abar dekha jabe.";

if (msg.includes("live"))
  return "Live class e teacher er sathe interact kora jabe.";

if (msg.includes("schedule"))
  return "Weekly schedule student group e share kora hoy.";

if (msg.includes("calendar"))
  return "Academic calendar e important date deya thake.";

if (msg.includes("notice"))
  return "Shob notice dashboard ar group e publish kora hoy.";

if (msg.includes("announcement"))
  return "Important announcement sobar age student group e deya hoy.";

if (msg.includes("link"))
  return "Class link class shuru howar age share kora hoy.";

if (msg.includes("join"))
  return "Class join korar jonno provided link use korte hobe.";

if (msg.includes("id card"))
  return "Student ID card coaching office theke collect kora jabe.";

if (msg.includes("profile"))
  return "Profile section e nijer information update korte parba.";

if (msg.includes("username"))
  return "Username diye account access kora jabe.";

if (msg.includes("logout"))
  return "Kaj sesh hole account theke logout kora bhalo.";

if (msg.includes("browser"))
  return "Google Chrome use korle class smoothly cholbe.";

if (msg.includes("wifi"))
  return "Stable WiFi connection class er jonno valo.";

if (msg.includes("headphone"))
  return "Headphone use korle audio clear shona jabe.";

if (msg.includes("speaker"))
  return "Speaker er volume check kore class e join koro.";

if (msg.includes("screen"))
  return "Full screen mode e class korle bhalo dekha jabe.";

if (msg.includes("rank list"))
  return "Rank list exam seshe publish kora hoy.";

if (msg.includes("position"))
  return "Regular performance er upor position nirvor kore.";

if (msg.includes("topper"))
  return "Topper der special appreciation deya hoy.";

if (msg.includes("certificate download"))
  return "Certificate PDF format e download kora jabe.";

if (msg.includes("support team"))
  return "Support team jekono technical issue solve korte shahajjo korbe.";

if (msg.includes("help line"))
  return "Emergency proyojone helpline e jogajog korte parba.";

if (msg.includes("sms"))
  return "Important update SMS er maddhomeo janano hote pare.";

if (msg.includes("email"))
  return "Email er maddhome official information pathano hoy.";

if (msg.includes("contest prize"))
  return "Contest winner der special prize deya hote pare.";

if (msg.includes("gift"))
  return "Special event e gift ba reward thakte pare.";

if (msg.includes("medal"))
  return "Outstanding performance er jonno medal deya hote pare.";

if (msg.includes("parents"))
  return "Parents student er progress somporke update pete paren.";

if (msg.includes("guardian meeting"))
  return "Guardian meeting e student er performance niye alochona kora hoy.";

if (msg.includes("holiday notice"))
  return "Holiday notice age thekei publish kora hoy.";

if (msg.includes("eid vacation"))
  return "Eid vacation er routine agei share kora hobe.";

if (msg.includes("winter vacation"))
  return "Winter vacation e special class thakte pare.";

if (msg.includes("special class"))
  return "Special class e important topic gulo alada vabe porano hoy.";

if (msg.includes("crash course"))
  return "Crash course short time e revision er jonno helpful.";

if (msg.includes("final revision"))
  return "Final revision e important topic gulo cover kora hoy.";

if (msg.includes("suggestion"))
  return "Teacher der suggestion exam preparation e helpful hote pare.";

if (msg.includes("board challenge"))
  return "Board challenge er niyom official notice e janano hobe.";

if (msg.includes("scholarship exam"))
  return "Scholarship exam er details notice board e deya hobe.";

if (msg.includes("camp"))
  return "Special camp e extra guideline deya hoy.";

if (msg.includes("orientation"))
  return "Orientation class e course er shob information deya hoy.";

if (msg.includes("career guideline"))
  return "Career guideline session e future planning niye alochona kora hoy.";

if (msg.includes("success seminar"))
  return "Success seminar e experienced teacher ra poramorsho den.";

if (msg.includes("certificate verification"))
  return "Certificate verification er jonno office e jogajog korte hobe.";

if (msg.includes("campus"))
  return "Campus er location ar details official page e pawa jabe.";

if (msg.includes("sir koi"))
  return "Sir class e join korben nirdharito somoy onujayi. Ektu opekkha koro.";

if (msg.includes("mam koi"))
  return "Mam kichukhon er moddhei class e join korben.";

if (msg.includes("aj class hobe"))
  return "Ajker class schedule check kore dekhte paro.";

if (msg.includes("class off"))
  return "Class off hole notice group e janano hobe.";

if (msg.includes("ami kichu bujhi na"))
  return "Chinta koro na, step by step practice korle aste aste sob bujhte parba.";

if (msg.includes("amar matha kaj kore na"))
  return "Ektu rest nao, tarpor fresh hoye abar try koro.";

if (msg.includes("ami fail korbo"))
  return "Age thekei negative chinta koro na, niyomito practice confidence baray.";

if (msg.includes("pass korbo"))
  return "Mon diye porle ar regular practice korle valo result korar chance barbe.";

if (msg.includes("ami topper hobo"))
  return "Consistency ar hard work tomake target er dike niye jabe.";

if (msg.includes("amar ghum pacche"))
  return "Ektu break nao, pani khao, tarpor abar porte boshte paro.";

if (msg.includes("porte iccha kore na"))
  return "Choto target set kore shuru koro, aste aste motivation chole asbe.";

if (msg.includes("bor lagche"))
  return "Subject change kore ba short break niye abar start korte paro.";

if (msg.includes("friend disturb kore"))
  return "Porar somoy distraction komanor chesta koro.";

if (msg.includes("wifi nai"))
  return "Internet connection thik hole abar class e join korte parba.";

if (msg.includes("current nai"))
  return "Current asar por recording dekhe miss kora topic cover korte parba.";

if (msg.includes("ami pari na"))
  return "Regular practice er maddhome difficult topic o easy hoye jay.";

if (msg.includes("easy way"))
  return "Shortcut er cheye concept bujhe pora beshi effective.";

if (msg.includes("shortcut"))
  return "Important trick shekha valo, kintu basic concept o clear rakha dorkar.";

if (msg.includes("crush"))
  return "Age porashona priority dao, baki sob kichur jonno somoy ache.";

if (msg.includes("love"))
  return "Balance maintain kore nijer goal er dike focus rakho.";

if (msg.includes("girlfriend"))
  return "Personal life ar study er moddhe balance rakha important.";

if (msg.includes("boyfriend"))
  return "Tomar target ar responsibility ke priority dao.";

if (msg.includes("biye"))
  return "Age nijer future build koro, tarpor baki decision niye chinta kora jabe.";

if (msg.includes("rich hobo"))
  return "Skill development ar hard work long term success er jonno guruttopurno.";

if (msg.includes("millionaire"))
  return "Knowledge ar consistency future e onek sujog toiri korte pare.";

if (msg.includes("mobile game"))
  return "Game khelar sathe sathe study routine maintain korao dorkar.";

if (msg.includes("free fire"))
  return "Entertainment thik ache, kintu porashonar somoy alada rakho.";

if (msg.includes("pubg"))
  return "Time management maintain korle study ar hobby duita-i balance kora jay.";

if (msg.includes("dhonnobad"))
  return "Tomakeo dhonnobad. Valo theko ar mon diye porashona koro.";

if (msg.includes("thanks"))
  return "Welcome! Jekono proshno thakle jiggesh korte paro.";

if (msg.includes("hi"))
  return "Hello! Tomake kivabe help korte pari?";

if (msg.includes("hello"))
  return "Hi! Tomar proshno korte paro.";

if (msg.includes("bye"))
  return "Goodbye! Valo theko ar porashona continue rakho.";

if (msg.includes("good night"))
  return "Good night! Agamikal fresh mind niye abar start koro.";

if (msg.includes("good morning"))
  return "Good morning! Ajker din ta productive hok.";

if (msg.includes("sir single"))
  return "Ei proshner uttor class er sathe somporkito noy 😄";

if (msg.includes("mam single"))
  return "Academic related proshno korle ami beshi help korte parbo.";

if (msg.includes("apni ke"))
  return "Ami coaching er virtual assistant. Tomar proshner uttor dite prostut.";

if (msg.includes("apnar nam ki"))
  return "Ami tomader coaching assistant.";

if (msg.includes("apni manush"))
  return "Na, ami ekjon AI assistant.";

if (msg.includes("robot"))
  return "Haa, ami ekta AI chatbot.";

if (msg.includes("joke"))
  return "Porikkhar age calculator bole, 'Amake chara kichui hobe na!' 😄";

if (msg.includes("gan"))
  return "Ami gaan gai na, kintu tomar proshner uttor dite pari.";

if (msg.includes("movie"))
  return "Free time e valo movie dekhte paro, kintu porashona age!";

if (msg.includes("birthday"))
  return "Happy Birthday! Tomar agami din gulo sundor hok.";

if (msg.includes("eid mubarak"))
  return "Eid Mubarak! Tomar jonno onek shubhokamna.";

if (msg.includes("assalamu alaikum"))
  return "Wa Alaikum Assalam. Kivabe help korte pari?";

if (msg.includes("kemon aso"))
  return "Ami valo achi. Tomake kivabe shahajjo korte pari?";

if (msg.includes("bored"))
  return "Mon fresh korte ektu walk korte paro ba pochonder kichu korte paro.";

if (msg.includes("mon kharap"))
  return "Mon kharap thakle kichukhon rest nao ar priyo manusher sathe kotha bolo.";

if (msg.includes("ghurte jabo"))
  return "Somoy manage kore ghurte jawa jete pare.";

if (msg.includes("bristi"))
  return "Brishtir dine gorom cha ar porashona duita-i bhalo lage ☔";

if (msg.includes("gorom"))
  return "Pani beshi khao ar nijeke hydrated rakho.";

if (msg.includes("sheet"))
  return "Sheet e nijer jotno nao ar sustho thako.";

if (msg.includes("cricket"))
  return "Cricket onek popular khela. Tumi kon team support koro?";

if (msg.includes("football"))
  return "Football onek moja! Kon club tomar favourite?";

if (msg.includes("messi"))
  return "Messi football itihasher onnotomo sera player.";

if (msg.includes("ronaldo"))
  return "Ronaldo tar hard work ar dedication er jonno bikhyato.";

if (msg.includes("bangladesh"))
  return "Bangladesh amader priyo desh 🇧🇩";

if (msg.includes("dhaka"))
  return "Dhaka holo Bangladesh er rajdhani.";

if (msg.includes("america"))
  return "America somporke jante chaile specific proshno korte paro.";

if (msg.includes("taka nai"))
  return "Chinta koro na, porishrom ar skill future e notun sujog toiri korte pare.";

if (msg.includes("borolok"))
  return "Porishrom, skill ar dhorjo success er guruttopurno ongsho.";

if (msg.includes("sleepy"))
  return "Ektu rest nile fresh feel korte paro.";

if (msg.includes("hungry"))
  return "Shasthokor khabar khete vulbe na.";

if (msg.includes("wifi slow"))
  return "Internet connection check kore abar try koro.";

if (msg.includes("network"))
  return "Network stable hole class ba video smoothly cholbe.";

if (msg.includes("kaiser"))
  return "Kaizer ekta random name 😄 Tomar study related proshno korle help korte parbo.";

if (msg.includes("ghost"))
  return "Ghost niye chinta korar dorkar nai, porashona e focus koro 😄";

if (msg.includes("alien"))
  return "Alien thakleo tara probably porashona niye busy na 😄";

if (msg.includes("time machine"))
  return "Time machine thakle exam age theke revise kora jeto 😄";

if (msg.includes("future wife"))
  return "Ekhon study te focus koro, future niye pore chinta koro.";

if (msg.includes("future husband"))
  return "Goal er dike focus dao, baki future e thik hobe.";

if (msg.includes("love story"))
  return "Tomar success story holo ekhon priority.";

if (msg.includes("heart broken"))
  return "Mon kharap hole study e focus korte paro, time heal kore.";

if (msg.includes("sad song"))
  return "Sad song shune mood aro heavy hoye jete pare 😄";

if (msg.includes("happy song"))
  return "Happy song shune motivation barte pare 🎵";

if (msg.includes("pizza"))
  return "Pizza khete bhalo lage, kintu study time e control rakho 😄";

if (msg.includes("burger"))
  return "Burger occasional treat hisebe thik ache.";

if (msg.includes("chocolate"))
  return "Chocolate mood bhalo kore, kintu beshi kheyo na.";

if (msg.includes("sleep paralysis"))
  return "Eita normal sleep issue hote pare, panic koro na.";

if (msg.includes("dream meaning"))
  return "Dream onek somoy brain er imagination hoy.";

if (msg.includes("lucky number"))
  return "Luck er cheye preparation beshi important.";

if (msg.includes("exam leak"))
  return "Leak rumor er upor depend koro na.";

if (msg.includes("cheating"))
  return "Cheating temporary, knowledge long term success dey.";

if (msg.includes("mobile addiction"))
  return "Mobile use limit koro, study time fixed rakho.";

if (msg.includes("wifi password"))
  return "WiFi password er jonno admin ke jiggesh koro.";

if (msg.includes("hack"))
  return "Hacking legal/ethical vabe shikha valo, illegal avoid koro.";

if (msg.includes("dark web"))
  return "Ei type topic avoid kora safe.";

if (msg.includes("bitcoin"))
  return "Crypto risky, shikhte chaile research kore koro.";

if (msg.includes("money hack"))
  return "Shortcut e money earn hoy na, skill lagbe.";

if (msg.includes("rich quick"))
  return "Quick rich concept usually realistic na.";

if (msg.includes("airplane crash"))
  return "Negative thoughts avoid koro.";

if (msg.includes("earthquake"))
  return "Natural disaster er jonno safety plan follow koro.";

if (msg.includes("zombie"))
  return "Zombie real na 😄";

if (msg.includes("superpower"))
  return "Superpower thakle porashona chara pass kora jeto 😄";

if (msg.includes("invisible"))
  return "Invisible hole class e keu dekhte peto na 😄";

if (msg.includes("magic"))
  return "Magic er cheye hard work beshi powerful.";

if (msg.includes("dragon"))
  return "Dragon fantasy world er part.";

if (msg.includes("anime"))
  return "Anime interesting, kintu study balance maintain koro.";

if (msg.includes("naruto"))
  return "Naruto perseverance er ekta bhalo example.";

if (msg.includes("one piece"))
  return "One Piece adventure anime bikhyato.";

if (msg.includes("gaming pc"))
  return "Gaming PC entertainment er jonno, study priority age.";

if (msg.includes("free fire hack"))
  return "Hack use kora unethical ar risky.";

if (msg.includes("pubg hack"))
  return "Fair play always best.";

if (msg.includes("keyboard broken"))
  return "Keyboard repair kore nao ba replace koro.";

if (msg.includes("phone broken"))
  return "Phone issue hole technician dekhao.";

if (msg.includes("screen crack"))
  return "Screen crack hole repair kora dorkar.";

if (msg.includes("battery drain"))
  return "Background apps off rakho.";

if (msg.includes("charging slow"))
  return "Original charger use koro.";

if (msg.includes("data off"))
  return "Data off thakle internet chole na 😄";

if (msg.includes("airplane mode"))
  return "Airplane mode e network off thake.";

if (msg.includes("google"))
  return "Google e almost sob answer pawa jay.";

if (msg.includes("youtube down"))
  return "Sometimes server issue thakte pare.";

if (msg.includes("facebook down"))
  return "Temporary outage hote pare.";

if (msg.includes("instagram hack"))
  return "Security strong rakha important.";

if (msg.includes("tiktok"))
  return "Short video platform, time control koro.";

if (msg.includes("reels"))
  return "Reels entertaining, kintu overuse koro na.";

if (msg.includes("viral"))
  return "Viral howa luck + content quality depend kore.";

if (msg.includes("famous"))
  return "Famous howa hard work er result.";

if (msg.includes("success overnight"))
  return "Success usually overnight hoy na.";

if (msg.includes("instant success"))
  return "Instant success rare.";

if (msg.includes("study hack"))
  return "Proper routine + revision best hack.";

if (msg.includes("brain hack"))
  return "Focus ar consistency main factor.";

if (msg.includes("sleeping too much"))
  return "Balance maintain koro.";

if (msg.includes("no sleep"))
  return "Sleep important for brain recovery.";

if (msg.includes("depressed again"))
  return "Mon kharap hole trusted manush er sathe kotha bolo.";

if (msg.includes("crying"))
  return "Emotion normal, kintu positive thakar chesta koro.";

if (msg.includes("panic attack"))
  return "Slow breathing try koro, calm thako.";

if (msg.includes("anxiety"))
  return "Routine maintain korle anxiety kome.";

if (msg.includes("discipline"))
  return "Discipline maintain korle success automatic ashe.";

if (msg.includes("consistency"))
  return "Consistency chara long-term success possible na.";

if (msg.includes("hard work"))
  return "Hard work ar smart work duita mile result ashe.";

if (msg.includes("smart study"))
  return "Smart study mane target based pora ar revision focus.";

if (msg.includes("time management"))
  return "Time properly use korle pressure onek kome jay.";

if (msg.includes("goal setting"))
  return "Clear goal thakle focus thik thake ar distraction kome.";

if (msg.includes("focus improvement"))
  return "Focus barate mobile distance e rakha best habit.";

if (msg.includes("memory power"))
  return "Bar bar revision ar writing practice memory strong kore.";

if (msg.includes("confidence building"))
  return "Confidence ashe preparation ar practice theke.";

if (msg.includes("exam fear"))
  return "Exam fear komate mock test practice helpful.";

if (msg.includes("study plan"))
  return "Simple daily plan follow korle study easy hoy.";

if (msg.includes("daily routine"))
  return "Fixed routine thakle brain automatically habit build kore.";

if (msg.includes("productivity"))
  return "Less distraction = more productivity.";

if (msg.includes("motivation low"))
  return "Small target set koro, motivation aste aste fire ashbe.";

if (msg.includes("procrastination"))
  return "Kaj delay korle pressure baray, start korai solution.";

if (msg.includes("self improvement"))
  return "Daily 1% improvement future change kore dey.";

if (msg.includes("success formula"))
  return "Consistency + effort + patience = success.";

if (msg.includes("exam preparation"))
  return "Previous question + revision = best preparation.";

if (msg.includes("study stress"))
  return "Short break nao, tarpor fresh mind e pora shuru koro.";

if (msg.includes("goal achievement"))
  return "Step by step progress goal achieve korte help kore.";

if (msg.includes("future plan"))
  return "Future plan clear thakle present focus easy hoy.";

if (msg.includes("discipline"))
  return "Discipline maintain korle success automatic ashe.";

if (msg.includes("consistency"))
  return "Consistency chara long-term success possible na.";

if (msg.includes("hard work"))
  return "Hard work ar smart work duita mile result ashe.";

if (msg.includes("smart study"))
  return "Smart study mane target based pora ar revision focus.";

if (msg.includes("time management"))
  return "Time properly use korle pressure onek kome jay.";

if (msg.includes("goal setting"))
  return "Clear goal thakle focus thik thake ar distraction kome.";

if (msg.includes("focus improvement"))
  return "Focus barate mobile distance e rakha best habit.";

if (msg.includes("memory power"))
  return "Bar bar revision ar writing practice memory strong kore.";

if (msg.includes("confidence building"))
  return "Confidence ashe preparation ar practice theke.";

if (msg.includes("exam fear"))
  return "Exam fear komate mock test practice helpful.";

if (msg.includes("study plan"))
  return "Simple daily plan follow korle study easy hoy.";

if (msg.includes("daily routine"))
  return "Fixed routine thakle brain automatically habit build kore.";

if (msg.includes("productivity"))
  return "Less distraction = more productivity.";

if (msg.includes("motivation low"))
  return "Small target set koro, motivation aste aste fire ashbe.";

if (msg.includes("procrastination"))
  return "Kaj delay korle pressure baray, start korai solution.";

if (msg.includes("self improvement"))
  return "Daily 1% improvement future change kore dey.";

if (msg.includes("success formula"))
  return "Consistency + effort + patience = success.";

if (msg.includes("exam preparation"))
  return "Previous question + revision = best preparation.";

if (msg.includes("study stress"))
  return "Short break nao, tarpor fresh mind e pora shuru koro.";

if (msg.includes("goal achievement"))
  return "Step by step progress goal achieve korte help kore.";

if (msg.includes("future plan"))
  return "Future plan clear thakle present focus easy hoy.";

    return "That's interesting! Could you please give me more details about your  issue?";
}

// end live chat








