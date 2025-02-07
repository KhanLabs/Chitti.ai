
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
    } else if (userInput.toLowerCase().includes("your name")) {
        botMessage.textContent = "I am Chitti AI, India’s most advanced and high-tech AI chatbot, built to compete with the world’s leading AI models. 🚀 Designed with next-gen machine learning and deep neural networks, I understand, learn, and respond with precision and intelligence. Whether you need instant answers, creative ideas, coding help, business insights, or multilingual support, I am here to assist you—faster, smarter, and more efficient than ever!                                     Powered by India’s latest AI innovations, I bring cutting-edge technology right to your fingertips. Ask me anything, and let’s explore the future together! 🤖🔥 Boom Boom Robota ";
    } else if (userInput.toLowerCase().includes("bhadwe") || userInput.toLowerCase().includes("madarchod")) {
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
        botMessage.textContent = "AAP toh mere bhagwan ho aap hi ne toh mujhe banaya hai";
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
    } else if (userInput.toLowerCase().includes("lawde") || userInput.toLowerCase().includes("teri maa ki chut")) {
        botMessage.textContent = "Bhadwi ch** ke😜, Maaf kare👏🏻 kripiya galat sabd ka istemal na kare";
    } else if (userInput.toLowerCase().includes("tumhe kisne banaya")) {
        botMessage.textContent = "mere maa or baap ne";
    }else if (userInput.toLowerCase().includes("russian")) {
        botMessage.textContent = "kya";
    } else if (userInput.toLowerCase().includes("russian ladki")) {
        botMessage.textContent = "6000";
    }

    //trigonometry ratios 
    else if (userInput.toLowerCase().includes("sin 30") || userInput.toLowerCase().includes("cos 60")) {
        botMessage.textContent = "1/2";
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
        botMessage.textContent = "Hmm, I didn’t quite catch that. Can you try again?";
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
