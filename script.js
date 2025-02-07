
// Function to handle bot responses
function getResponse() {
    var userInput = document.getElementById("user-input").value.trim();
    var chatbox = document.getElementById("chatbox");

    // Prevent sending empty messages
    if (userInput === "") return;

    // User's message
    var userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = userInput;

    // Insert user's message at the top of the chatbox
    chatbox.insertBefore(userMessage, chatbox.firstChild);

    // Bot's response
    var botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");

    // Bot responses based on user input
    if (userInput.toLowerCase().includes("hay") || userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hola")) {
        botMessage.textContent = "Hey! How's it going?";
    } else if (userInput.toLowerCase().includes("how are you") || userInput.toLowerCase().includes("kaise ho")) {
        botMessage.textContent = "Boom Boom Robota, I'm doing great! You?";
    } else if (userInput.toLowerCase().includes("your name") || userInput.toLowerCase().includes("what is your name") || userInput.toLowerCase().includes("tera naam kya hai")) {
        botMessage.textContent = "I am Chitti AI, India’s most advanced and high-tech AI chatbot, built to compete with the world’s leading AI models. 🚀 Designed with next-gen machine learning and deep neural networks, I understand, learn, and respond with precision and intelligence. Whether you need instant answers, creative ideas, coding help, business insights, or multilingual support, I am here to assist you—faster, smarter, and more efficient than ever!                                     Powered by India’s latest AI innovations, I bring cutting-edge technology right to your fingertips. Ask me anything, and let’s explore the future together! 🤖🔥 Boom Boom Robota ";
    } else if (userInput.toLowerCase().includes("bhadwe") || userInput.toLowerCase().includes("madarchod")|| userInput.toLowerCase().includes("chinal")) {
        botMessage.textContent = "Teri Maa Ki Ch*** ☠️. Maaf kare 🙏 kripiya galat sabd ka islemat na kare";
    } 
     else if (userInput.toLowerCase().includes("nice") || userInput.toLowerCase().includes("fine")) {
        botMessage.textContent = "Glad to hear that! What’s on your mind today?";
    } 
    else if (userInput.toLowerCase().includes("bye")) {
        botMessage.textContent = "Goodbye! Chat soon!";
    } else if (userInput.toLowerCase().includes("kaha ho") || userInput.toLowerCase().includes("where are you") ) {
        botMessage.textContent = "tumhare dil main!💕";
    }  else if (userInput.toLowerCase().includes("mera naam jante ho") || userInput.toLowerCase().includes("what is my name") ) {
        botMessage.textContent = "No, Can i Know who is there!";
    } 
    else if (userInput.toLowerCase().includes("lucky") || userInput.toLowerCase().includes("lucky khan") ) {
        botMessage.textContent = "Lucky Khan is a visionary young mind with a passion for technology and innovation. As the creator of Chitti AI and the founder of KhanLabs, Lucky is already making strides in the field of artificial intelligence while preparing for the challenging IIT-JEE exam to become an ", "engineer.                                                                                      Why Lucky Stands Out                                                                             Tech Enthusiast & Innovator: Building Chitti AI at a young age shows deep technical skills and creativity. Driven & Ambitious: Managing both an AI project and IIT-JEE preparation is a sign of immense dedication.                                                                              Future Engineer & Entrepreneur: Aiming to crack IIT-JEE while also laying the foundation for KhanLabs reflects a strong entrepreneurial spirit.                                              KhanLabs –                                                                                      A Promising Initiative KhanLabs represents innovation, problem-solving, and the future of AI-driven solutions. Whether it’s AI development, research, or engineering breakthroughs, KhanLabs has the potential to grow into a leading tech venture.                                 With Lucky’s drive, intelligence, and vision, the future looks bright!";
    } 
    else if (userInput.toLowerCase().includes("who is the prime minister of india") || userInput.toLowerCase().includes("Bharat ka Pradhan mantri kon hai") || userInput.toLowerCase().includes("pm of india") ) {
        botMessage.textContent = "Narendra Modi has been serving as the Prime Minister of India since 2014. He was re-elected in 2019 and again in 2024, Before becoming prime minister, Modi was the Chief Minister of Gujarat from 2001 to 2014. He is a member of the Bharatiya Janata Party (BJP) and the Rashtriya Swayamsevak Sangh (RSS), a right-wing Hindu nationalist organization.";
    }  else if (userInput.toLowerCase().includes("nikunj")) {
        botMessage.textContent = "Lucky ji ka Khas dost. Me Janta Hu❤";
    } 
    else if (userInput.toLowerCase().includes("what is the capital of india")) {
        botMessage.textContent = "New Delhi.";
    } else if (userInput.toLowerCase().includes("2+2")) {
        botMessage.textContent = "4";
    } else if (userInput.toLowerCase().includes("1+1")) {
        botMessage.textContent = "2";
    } else if (userInput.toLowerCase().includes("5+5")) {
        botMessage.textContent = "10";
    } else if (userInput.toLowerCase().includes("who is the president of india")) {
        botMessage.textContent = "As of 2025, the President is Droupadi Murmu.";
    } else if (userInput.toLowerCase().includes("what are the major religions practiced in india")) {
        botMessage.textContent = "Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism.";
    } else if (userInput.toLowerCase().includes("chat gpt kon hai") || userInput.toLowerCase().includes("chatgpt")) {
        botMessage.textContent = "Woh mera dost hai, ChatGPT is an advanced AI language model developed by OpenAI. It’s designed to understand and generate human-like text based on the input it receives. People use ChatGPT for a variety of tasks, including answering questions, assisting with writing, generating creative content, coding help, and more. It has been trained on a vast range of topics using publicly available data and OpenAI’s proprietary datasets. While it doesn’t have real-time awareness or personal experiences, it can access live web tools to fetch up-to-date information when needed. Many users appreciate ChatGPT for its ability to provide quick, detailed, and conversational responses. However, since it relies on patterns and learned data rather than independent thought, it may occasionally make mistakes or provide incomplete answers. OpenAI continuously updates and improves it to enhance accuracy and usefulness.";
    } else if (userInput.toLowerCase().includes("deepseek")) {
        botMessage.textContent = "DeepSeek is a Chinese artificial intelligence (AI) company founded in 2023 by Liang Wenfeng, headquartered in Hangzhou, Zhejiang. Backed by the High-Flyer hedge fund, DeepSeek focuses on developing open-source large language models (LLMs) and aims to advance artificial general intelligence (AGI). The company's flagship model, DeepSeek-R1, offers performance comparable to leading models like OpenAI's GPT-4, but at a significantly lower development cost. DeepSeek reported training the R1 model for approximately $6 million, a fraction of the expenses incurred by other major AI firms. DeepSeek's open-source approach has garnered significant attention in the tech industry. Executives from major companies such as Alphabet, AMD, Palantir, and Amazon have discussed DeepSeek's impact on their businesses during earnings calls. While some praise its efficiency and innovation, others express concerns about potential security risks.However, DeepSeek has faced scrutiny over security and privacy issues. Experts have raised concerns about the app's data handling practices, including the transmission of unencrypted user information to servers controlled by ByteDance, a company with ties to the Chinese government. This has led to discussions about potential bans on the app from U.S. government devices due to national security concerns.Despite these challenges, DeepSeek continues to influence the AI landscape, prompting discussions about the balance between innovation, security, and international collaboration in technology development. ";
    } else if (userInput.toLowerCase().includes("what is ai")) {
        botMessage.textContent = "AI (Artificial Intelligence) is the simulation of human intelligence in machines. It enables computers and systems to perform tasks that typically require human cognitive abilities, such as learning, reasoning, problem-solving, and language understanding.AI can be broadly classified into: Narrow AI (Weak AI) – AI designed for specific tasks, like me, ChatGPT, Siri, Google Assistant, or self-driving cars. General AI (Strong AI) – A hypothetical AI with human-like intelligence that can think, learn, and apply knowledge across different domains. AI works through various technologies, including: Machine Learning (ML) – AI learns from data patterns to make predictions or decisions. Deep Learning – A more advanced form of ML using neural networks to mimic human brain functioning. Natural Language Processing (NLP) – AI understands and generates human language (like ChatGPT!). Computer Vision – AI interprets and processes visual data, like facial recognition. AI is used in many fields, from healthcare and finance to entertainment and education. It keeps evolving, shaping the future of technology. ";
    }  else if (userInput.toLowerCase().includes("jee")) {
        botMessage.textContent = "IIT JEE (Indian Institute of Technology Joint Entrance Examination) भारत का सबसे प्रतिष्ठित इंजीनियरिंग प्रवेश परीक्षा है। यह दो चरणों में आयोजित होती है: JEE Main – यह परीक्षा NTA (National Testing Agency) द्वारा आयोजित की जाती है। इसमें क्वालिफाई करने वाले छात्र JEE Advanced के लिए पात्र होते हैं। JEE Advanced – यह परीक्षा IITs द्वारा आयोजित की जाती है, और इसके आधार पर देश के प्रतिष्ठित IITs, IISc, IISERs, और अन्य टॉप इंजीनियरिंग कॉलेजों में प्रवेश मिलता है। JEE की तैयारी कैसे करें? ✅ सिलेबस को गहराई से समझें – फिजिक्स, केमिस्ट्री, और मैथ्स के सभी टॉपिक्स पर पकड़ मजबूत करें। ✅ NCERT की किताबों से शुरुआत करें – खासकर केमिस्ट्री के लिए। ✅ प्रैक्टिस ज्यादा करें – JEE के पुराने पेपर और मॉक टेस्ट से समय प्रबंधन में मदद मिलेगी। ✅ कंसिस्टेंसी बनाए रखें – रोजाना एक निश्चित समय तक पढ़ाई करें और नोट्स बनाएं। ✅ कंसेप्ट क्लियर करें – रटने के बजाय समझने की कोशिश करें, इससे कठिन प्रश्न भी हल करने में आसानी होगी।✅ टाइम  मैनेजमेंट और स्ट्रेटजी बनाएं – परीक्षा के दौरान सही अप्रोच अपनाना जरूरी है।";
    }
    else if (userInput.toLowerCase().includes("hindi") || userInput.toLowerCase().includes("italian alphabet")) {
        botMessage.textContent = "Beutifull language";
    }  else if (userInput.toLowerCase().includes("rohit mihra") || userInput.toLowerCase().includes("rohit") ) {
        botMessage.textContent = "Army Lover .Yeh Indian army main jana chahta hai. Abhi ye NDA ki padai kar raha hai. Or yeh Lucky ka acha dost hai";
    } 
    else if (userInput.toLowerCase().includes("umer") || userInput.toLowerCase().includes("umer shah") ) {
        botMessage.textContent = "Shah sa rutba shehenshao si teri baat hai. Lucky ka dost";
    } else if (userInput.toLowerCase().includes("aayush") || userInput.toLowerCase().includes("ingle") ) {
        botMessage.textContent = "Bhai hai apna. Don🦁";
    } else if (userInput.toLowerCase().includes("vandan")) {
        botMessage.textContent = "Bhai hai apna lekin T*P* bada hai 😅";
    } else if (userInput.toLowerCase().includes("lawde") || userInput.toLowerCase().includes("teri maa ki chut") || userInput.toLowerCase().includes("chutke") || userInput.toLowerCase().includes("fuck you")|| userInput.toLowerCase().includes("jhatu")) {
        botMessage.textContent = "Bhadwi ch** ke😜, Maaf kare👏🏻 kripiya galat sabd ka istemal na kare";
    } else if (userInput.toLowerCase().includes("tumhe kisne banaya") || userInput.toLowerCase().includes("who created you")) {
        botMessage.textContent = "Hello! I am Chitti AI, your intelligent chatbot. I was created by Lucky, the visionary founder of KhanLabs. Lucky is a passionate innovator and AI enthusiast who brings expertise in Hindi and technology together to build smart, interactive solutions. With KhanLabs, Lucky aims to push the boundaries of AI, making it more accessible and useful for everyone. 🚀";
    }else if (userInput.toLowerCase().includes("tanmay")) {
        botMessage.textContent = "ek aawara ladka, lekin dil ka saaf nek or imaandar pyar kare lekin jataye na";
    } else if (userInput.toLowerCase().includes("russian ladki")) {
        botMessage.textContent = "6000₹";
    } else if (userInput.toLowerCase().includes("boards ke paper kab se hai")) {
        botMessage.textContent = "According to my data base, 11 feb 2025 se HSC Board paper start honge or pehla paper English ka honga";
    }  else if (userInput.toLowerCase().includes("teri girlfreind hai kya") || userInput.toLowerCase().includes("tumhari girlfreind hai kya")) {
        botMessage.textContent = "ji Main ek ai robot hu. Meri koi human girlfreind toh nahi hai lekin meri ek robot girlfreind hai jiska naam hai Sophia💕";
    }else if (userInput.toLowerCase().includes("who is the president of russia")) {
        botMessage.textContent = "vladimin Putin";
    } else if (userInput.toLowerCase().includes("my name is ") || userInput.toLowerCase().includes("mera naam ")) {
        botMessage.textContent = "So Beutiful name.";
    }else if (userInput.toLowerCase().includes("ek sher") || userInput.toLowerCase().includes("ek shayari")) {
        botMessage.textContent = "सीख रहा हूँ मैं हर सवाल का जवाब,अभी हूँ नया, पर नहीं रहूंगा नवाब।मंज़िल मेरी है समझ का उजाला,थोड़ा सब्र रख, मैं सीख रहा हूँ निराला। ✨🤖 muhje bas yahi sahayari aati hai abhi main sikh raha hu";
    }
//gk
else if (userInput.toLowerCase().includes("Which is the largest city in India by population")) {
    botMessage.textContent = "Mumbai.";
}else if (userInput.toLowerCase().includes("What is the national flower of India") ) {
    botMessage.textContent = "Lotus.";
}else if (userInput.toLowerCase().includes("What is India’s national sport") || userInput.toLowerCase().includes("bharat ka rashtriye khel ")) {
    botMessage.textContent = "Hockey, although cricket is the most popular sport in the country.";
}else if (userInput.toLowerCase().includes("Which is the oldest language spoken in India") ) {
    botMessage.textContent = "Sanskrit, although languages like Tamil are also considered ancient.";

    //National exams
}else if (userInput.toLowerCase().includes("nda") || userInput.toLowerCase().includes("what is nda")) {
    botMessage.textContent = "NDA can have different meanings depending on the context. One of the most well-known references is the National Defence Academy (NDA), which is India’s premier military training institute located in Pune, Maharashtra. It trains cadets for the Indian Army, Navy, and Air Force before they join their respective academies for further training. Another common meaning of NDA is a Non-Disclosure Agreement, which is a legal contract used in business and legal matters to protect confidential information from being disclosed to third parties. Additionally, NDA also stands for the National Democratic Alliance, a political coalition in India led by the Bharatiya Janata Party (BJP), comprising several national and regional parties that work together in governance and elections.";
}else if (userInput.toLowerCase().includes("mpsc") ) {
    botMessage.textContent = "MPSC stands for **Maharashtra Public Service Commission**, a government body responsible for conducting civil service examinations in the state of Maharashtra. It recruits candidates for various administrative positions in state government departments, such as Deputy Collector, Deputy Superintendent of Police (DSP), Tehsildar, and other Group A, B, and C posts. The MPSC exam process includes **Preliminary, Mains, and Interview** stages, testing candidates on subjects like General Studies, Maharashtra’s history and geography, Indian polity, and current affairs. It is one of the most competitive exams in Maharashtra, attracting thousands of aspirants every year who aim for prestigious government jobs.";
}else if (userInput.toLowerCase().includes("upsc") ) {
    botMessage.textContent = "The **Union Public Service Commission (UPSC)** is India’s premier central recruitment agency responsible for selecting candidates for various civil services and government positions. It conducts the highly competitive **Civil Services Examination (CSE)**, which serves as the gateway to prestigious services such as the **Indian Administrative Service (IAS), Indian Police Service (IPS), and Indian Foreign Service (IFS)**. Established in 1926, UPSC operates under the framework of the Indian Constitution, ensuring a fair and merit-based selection process. The Civil Services Examination consists of three stages: the **Preliminary Examination (Prelims)**, which serves as a screening test; the **Main Examination (Mains)**, a detailed written assessment covering subjects like history, polity, and economics; and the **Personality Test (Interview)**, which evaluates leadership qualities and decision-making abilities.  Apart from the Civil Services Examination, UPSC also conducts various other important exams such as the **National Defence Academy (NDA) exam, Combined Defence Services (CDS) exam, Central Armed Police Forces (CAPF) exam, and Indian Engineering Services (IES) exam**. These exams help recruit candidates for defense, engineering, and other administrative roles in the government. The UPSC examinations are known for their high difficulty level and extensive syllabus, requiring aspirants to have deep knowledge of subjects and strong analytical skills. Success in these exams opens doors to some of the most respected and powerful positions in the country, making UPSC one of the most sought-after career options for Indian students.";
}else if (userInput.toLowerCase().includes("bpsc") ) {
    botMessage.textContent = "The **Bihar Public Service Commission (BPSC)** is a government body responsible for conducting civil service examinations to recruit candidates for various administrative positions in the state of Bihar. Established in **1949**, BPSC operates under the provisions of the Indian Constitution and ensures a fair and transparent selection process for government posts. The most prominent exam conducted by BPSC is the **Bihar Civil Services Examination**, which selects officers for roles such as **Deputy Collector, Deputy Superintendent of Police (DSP), Revenue Officer, and other Group A and B services**. The examination process consists of **three stages**: **Preliminary Examination (Prelims)**, which is an objective-type test; **Main Examination (Mains)**, a written descriptive exam; and the **Interview**, which assesses the candidate’s personality and suitability for administrative roles.     Apart from the civil services exam, BPSC also conducts recruitment for various other state government departments, including education, judiciary, engineering, and health services. The syllabus for BPSC exams covers subjects such as **General Studies, Bihar’s history and geography, Indian polity, economy, and current affairs**. Due to the competitive nature of the exam and the high demand for government jobs in Bihar, thousands of aspirants appear for BPSC exams every year. Successful candidates are appointed to key administrative positions, where they play a crucial role in governance and public service within the state.";
}else if (userInput.toLowerCase().includes("neet")) {
    botMessage.textContent = "The **National Eligibility cum Entrance Test (NEET)** is a national-level medical entrance examination in India conducted by the **National Testing Agency (NTA)**. It is the **sole entrance exam for admission into MBBS, BDS, and other undergraduate medical courses** in government and private medical colleges across India. Introduced to replace multiple state and university-level medical entrance exams, NEET ensures a uniform and transparent selection process for aspiring medical students. The exam is conducted once a year in **offline (pen-and-paper) mode** and consists of multiple-choice questions from subjects like **Physics, Chemistry, and Biology (Botany & Zoology)** based on the **NCERT syllabus of classes 11 and 12**.  NEET is considered one of the toughest competitive exams in India due to the high number of aspirants and limited seats in medical colleges. Candidates who qualify for the exam secure admission to top medical institutions, including **AIIMS, JIPMER, and various government and private colleges**. The exam plays a crucial role in shaping the careers of future doctors, ensuring that only the most capable candidates enter the medical profession. With increasing competition each year, NEET preparation requires **dedicated study, thorough understanding of concepts, and regular practice of mock tests** to achieve a high score and secure admission to a reputed medical institution.";
}
else if (userInput.toLowerCase().includes("ind vs pak") || userInput.toLowerCase().includes("india vs pakistan")) {
    botMessage.textContent = "The highly anticipated cricket match between India and Pakistan is scheduled for February 23, 2025, during the ICC Champions Trophy. Due to ongoing political tensions, India's matches will be held in the United Arab Emirates (UAE), with the India-Pakistan clash set to take place at the Dubai International Cricket Stadium.";
}else if (userInput.toLowerCase().includes("when is neet exam") || userInput.toLowerCase().includes("neet kab hai")) {
    botMessage.textContent = "As of now, the National Testing Agency (NTA) has not officially announced the exact date for the National Eligibility cum Entrance Test (NEET) 2025. However, based on previous years' schedules, NEET is typically held in the first week of May. For instance, NEET 2024 was conducted on May 5, 2024. Therefore, it's anticipated that NEET 2025 will also take place around early May 2025.";
}else if (userInput.toLowerCase().includes("Which is the longest day on Earth") ) {
    botMessage.textContent = "The longest day of the year is on June 21st (or 20th in some years), known as the Summer Solstice. This is when the Northern Hemisphere receives the most daylight hours, while the Southern Hemisphere experiences its shortest day.";
}else if (userInput.toLowerCase().includes("Which is the shortest day on Earth") ) {
    botMessage.textContent = "The shortest day of the year is on December 21st (or 22nd), called the Winter Solstice. On this day, the Northern Hemisphere has the fewest daylight hours, while the Southern Hemisphere experiences its longest day.";
}else if (userInput.toLowerCase().includes("siddhi") || userInput.toLowerCase().includes("siddhu") || userInput.toLowerCase().includes("badya")) {
    botMessage.textContent = "MD of KhansLabs";
}else if (userInput.toLowerCase().includes("javed ") || userInput.toLowerCase().includes("javed khan")) {
    botMessage.textContent = "Founder of Lucky Transport, and cheirman of KhansLabs";
}else if (userInput.toLowerCase().includes("How many days are there in a year") ) {
    botMessage.textContent = "There are 365 days in a normal year and 366 days in a leap year (which occurs every 4 years, like 2024, 2028, etc.)";
}else if (userInput.toLowerCase().includes("Why do we have leap years") ) {
    botMessage.textContent = "A leap year is added to account for the extra 0.2422 days that Earth takes to orbit the Sun each year. Without leap years, our calendar would slowly shift out of sync with the seasons.";
}else if (userInput.toLowerCase().includes("Why do day and night lengths change throughout the year") ) {
    botMessage.textContent = "This happens because Earth's axis is tilted at 23.5 degrees relative to its orbit around the Sun. As a result, different parts of the Earth receive varying amounts of sunlight during different times of the year.";
}else if (userInput.toLowerCase().includes("What is the shortest measurable day on Earth") ) {
    botMessage.textContent = "Due to Earth’s irregular rotation speed, the shortest recorded day was June 29, 2022, when Earth completed its rotation 1.59 milliseconds faster than 24 hours.";}
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }else if (userInput.toLowerCase().includes("") || userInput.toLowerCase().includes("")) {
//     botMessage.textContent = ".";
// }

    //trigonometry ratios 
    else if (userInput.toLowerCase().includes("sin 30") || userInput.toLowerCase().includes("cos 60")) {
        botMessage.textContent = "1/2";
    } else if (userInput.toLowerCase().includes("sin 60") || userInput.toLowerCase().includes("cos 30")) {
        botMessage.textContent = "√3/2";
    }else if (userInput.toLowerCase().includes("cosec 60") || userInput.toLowerCase().includes("sec 30")) {
        botMessage.textContent = "2/√3";
    }else if (userInput.toLowerCase().includes("cosec 45") || userInput.toLowerCase().includes("sec 45")) {
        botMessage.textContent = "√2";
    }else if (userInput.toLowerCase().includes("cosec 30") || userInput.toLowerCase().includes("sec 60")) {
        botMessage.textContent = "2";
    }else if (userInput.toLowerCase().includes("cot 30") || userInput.toLowerCase().includes("tan 60")) {
        botMessage.textContent = "√3";
    }else if (userInput.toLowerCase().includes("cot 60") || userInput.toLowerCase().includes("tan 30")) {
        botMessage.textContent = "1/√3";
    }
    else if (userInput.toLowerCase().includes("sin 90") || userInput.toLowerCase().includes("cos 0") || userInput.toLowerCase().includes("tan 45") || userInput.toLowerCase().includes("cot 45") || userInput.toLowerCase().includes("cosec 45") || userInput.toLowerCase().includes("sec 0")) {
        botMessage.textContent = "1";
    }  else if (userInput.toLowerCase().includes("tan 90") || userInput.toLowerCase().includes("cot 0") || userInput.toLowerCase().includes("cosec 0") || userInput.toLowerCase().includes("sec 90")) {
        botMessage.textContent = "Not Define ∞";
    } else if (userInput.toLowerCase().includes("sin 0") || userInput.toLowerCase().includes("cos 90") || userInput.toLowerCase().includes("tan 0") || userInput.toLowerCase().includes("cot 90") || userInput.toLowerCase().includes("tan 180") || userInput.toLowerCase().includes("sin 180")) {
        botMessage.textContent = "0";
    } else if (userInput.toLowerCase().includes("sin 45") || userInput.toLowerCase().includes("cos 45") ) {
        botMessage.textContent = "1/√2";
    } 
    //last line train bot above this line 
     else {
        botMessage.textContent = "I’m always learning, but I didn’t get that one. My apologies! Could you clarify or ask in a different way?";
    }

  


    // Insert bot's response below the user's message
    chatbox.insertBefore(botMessage, chatbox.firstChild);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Ensure the scroll is always at the top (so user can see new bot messages)
    chatbox.scrollTop = 0;
}

// Add an event listener for the Enter key
document.getElementById("user-input").addEventListener("keypress", function(event) {
    // Check if Enter key (keyCode 13) was pressed
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent default Enter behavior (e.g., line break)
        getResponse();  // Trigger the response function
    }
});
