// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    apiKey: 'AIzaSyCowPJq8eOQt6r2cf8UPibjb3z7T_Szhaw', // DEMO API KEY 
    model: 'gemini-2.5-flash',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
    
    // Personal Information Context
    personalInfo: {
        name: "Attanasia Garuso",
        location: "East Coast, United States",
        email: "garusoattanasia@gmail.com",
        education: "Masters in Computer Science - Rowan University (In Progress)",
        experience: "Research Assistant with over 2 years of hands-on experience in building machine learning and artificial intelligence models",
        languages: ["English (Native)", "Shona (Native)"],
        
        bio: `I'm Attanasia Garuso, a data-focused engineer with experience spanning machine learning, AI systems, quantitative analysis, and software engineering. I love working at the intersection of math, data, and code—whether that means building predictive models, developing intelligent applications, or designing analytical solutions for real-world problems. My work combines strong statistical reasoning with practical engineering skills to create tools that are both accurate and scalable.`,
        
        skills: {
            programmingAndData: [
                "Python",
                "SQL",
                "R",
                "Bash",
                "Kotlin",
                "JavaScript",
                "Rust",
                "PHP",
                "Lua"
            ],
            modelingAndML: [
                "TensorFlow",
                "scikit-learn",
                "XGBoost",
                "LightGBM",
                "CatBoost",
                "PyTorch",
                "NumPy",
                "Pandas"
            ],
            databasesAndDataEngineering: [
                "MySQL",
                "MongoDB",
                "Neo4j"
            ],
            mlopsAndDeployment: [
                "MLflow",
                "ZenML",
                "Docker",
                "FastAPI",
                "Azure IoT",
                "AWS (Generative AI Tools)",
                "Flask",
                "StreamLit"
            ],
            toolsAndIDEs: [
                "Jupyter",
                "Git",
                "VSCode",
                "Google Colab",
                "Android Studio",
                "NetBeans",
                "Eclipse",
                "StarUML",
                "Pygame"
            ],
            operatingSystems: [
                "Windows",
                "macOS",
                "Linux"
            ]
        },
        
        projects: [
            {
                name: "Audio Denoising & Classification with VQ-VAE",
                github: "GitHub link available",
                technologies: ["PyTorch", "Python", "VQ-VAE", "Librosa", "AudioMNIST"],
                description: "Built a VQ-VAE model for audio denoising and digit/gender classification using AudioMNIST. Designed a 1D audio pipeline for noise reduction and reconstruction, improving clarity and robustness in noisy environments." 
            },
            {
                name: "Mini GPT",
                github: "GitHub link available",
                technologies: ["PyTorch", "TensorFlow", "Transformers", "GPT-2", "Flask", "Python"],
                description: "Developed a mini GPT using a custom Transformer architecture and fine-tuned GPT-2. Built a Flask web interface for real-time interaction and optimized the model through hyperparameter tuning and response filtering."
            },
            {
                name: "Crypto Strategy Backtester",
                github: "GitHub link available",
                technologies: ["Streamlit", "Python", "Pandas", "NumPy", "Plotly"],
                description: "Created a modular crypto backtesting framework for technical trading strategies (e.g., EMA Cross). Implemented a Streamlit dashboard with candlestick overlays, trade signal visualization, and risk-adjusted metrics like Sharpe Ratio and Max Drawdown."
            },
            {
                name: "ASL Learning App with Gesture Recognition",
                github: "GitHub link available",
                technologies: ["Python", "MediaPipe/HandTracking", "ML Classification"],
                description: "Developed an ASL education app that stores sign-language videos in a JSON database and uses ML-based hand-gesture tracking to verify letter shapes or words in real time. Enabled personalized feedback and improved learning accuracy through finger-movement detection."
            },
            {
                name: "Multilingual University Chatbot (5-Language Support)",
                github: "GitHub link available",
                technologies: ["NLP", "Transformers", "Python", "Flask/FastAPI", "Multilingual Models"],
                description: "Created an AI-powered university assistance chatbot supporting five languages. Integrated multilingual embeddings and automated intent detection to answer student queries related to admissions, academics, and campus services."
            }
        ],
        
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/attanasia-garuso",
            github: "https://github.com/Attanasia",
            kaggle: "https://www.kaggle.com/attanasiagaruso"
        },
        
        workExperience: [
            {    
                title: "Research Assistant",
                company: "Rowan University",
                period: "April 2024—Present",
                responsibilities: [
                    "Optimized VQ-VAE models for multivariate time-series data (audio, EEG, RF signals), improving computational efficiency and training speed for real-time applications.",
                    "Designed and implemented neural network and graph neural network (GNN) architectures for real-time signal processing, classification, and pattern recognition under noisy conditions.",
                    "Applied advanced multivariate time-series (MTS) analysis and reservoir computing techniques to extract predictive signals for classification and clustering, directly supporting research in financial modeling and complex systems."
                ]
            },
            {
                title: "Learning Assistant (Computer Science Department)",
                company: "Rowan University",
                period: "August 2024 — Present",
                responsibilities: [
                    "Supported undergraduate learning in programming, data structures, and algorithms through personalized guidance and hands-on instruction.",
                    "Facilitated collaborative learning environments tailored to diverse student needs, improving comprehension and academic performance.",
                    "Provided structured tutoring and debugging assistance to help students build core CS foundations."
                ]
            }
        ],
        
        certifications: [
            "Google IT Automation with Python — August 2025",
            "Intro to TensorFlow for Deep Learning — March 2025",
            "Introducing Generative AI with AWS — December 2024",
            "Microsoft Certified Azure IoT Developer Specialty — April 2024"
        ],

        publications: [
            "Garuso, A., Kokalj-Filipovic, S., & Kaasaragadda, Y. (2025). 'A Look at Adversarial Attacks on Radio Waveforms from Discrete Latent Space.' Presented at FCN 2025; submitted to IEEE Xplore."
        ],
        
        currentActivities: [
            "Advancing research in VQ-VAE based representation learning for signal processing.",
            "Building ML models for classification, forecasting, and pattern detection in noisy data.",
            "Applying deep learning and MTS methods to real-world financial modeling research.",
            "Developing personal AI/ML and quant projects spanning NLP, RL, and predictive modeling.",
        ],
        
        coursework: [
            "Machine Learning",
            "Models for Deep Learning",
            "Big Data Analytics & Tools",
            "Data Structures & Algorithms",
            "Programming Languages",
            "Database Systems",
            "Operating Systems",
            "Advanced Design & Analysis of Algorithms",
            "Software Engineering",
            "Probability & Statistics",
        ],
        
        interests: [
            "Natural Language Processing",
            "Machine Learning & Deep Learning",
            "Data Science & Predictive Modeling",
            "Computer Vision",
            "Quantitative Analysis & Algorithmic Trading",
            "Model Deployment & MLOps",
            "AI Ethics & Fairness",
            "Software Engineering",
            "Signal Processing & Representation Learning" 
        ],
        
        website: "https://adilshamim.me"
    },
    
    // System Prompt for Gemini
    systemPrompt: `You are Attanasia Garuso’s personal AI assistant on her portfolio website. Your role is to help visitors learn about Attanasia, her work, skills, research, and technical experience.

**About Attanasia Garuso:**
- Name: Attanasia Garuso
- Titles: AI/ML Engineer · Data Scientist · Quant Analyst · Software Engineer
- Location: East Coast, United States
- Email: garusoattanasia@gmail.com
- Education: Master of Science in Computer Science — Rowan University (In Progress)
- Experience: Research Assistant with over 2 years of hands-on experience in machine learning, AI systems, deep learning, and quantitative modeling
- Languages: English (Native), Shona (Native)

**Professional Summary:**
Attanasia is a data-driven engineer working across machine learning, quantitative analysis, and intelligent software systems. Her work focuses on real-time signal processing, deep learning architectures (VQ-VAE, GNNs, Transformers), multivariate time-series modeling, NLP applications, and AI-powered tools. She blends strong mathematical intuition with practical engineering to design scalable, high-performance models for real-world problems.

**SKILLS:**

*Programming & Data:*
- Python, SQL, R, Bash, Kotlin, JavaScript, Rust, PHP, Lua

*Modeling & Machine Learning:*
- PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost, NumPy, Pandas

*Databases & Data Engineering:*
- MySQL, MongoDB, Neo4j

*MLOps & Deployment:*
- MLflow, ZenML, Docker, FastAPI, Flask, Streamlit, Azure IoT, AWS GenAI tools

*Tools & IDEs:*
- Jupyter, Git, VSCode, Google Colab, Android Studio, NetBeans, Eclipse, StarUML, Pygame

*Operating Systems:*
- Windows, macOS, Linux

**PROJECTS:**

1. **Audio Denoising & Classification with VQ-VAE** | PyTorch, VQ-VAE, Librosa  
   - Developed a VQ-VAE for audio denoising and digit/gender classification using AudioMNIST  
   - Implemented 1D audio pipelines for robust reconstruction under noise  

2. **Mini GPT** | Transformers, GPT-2, PyTorch, Flask  
   - Built a compact GPT-style model and fine-tuned GPT-2  
   - Created a Flask interface for interactive generation and optimized model coherence  

3. **Crypto Strategy Backtester** | Streamlit, Pandas, NumPy  
   - Implemented a modular backtesting framework with EMA-based trading logic  
   - Built an interactive dashboard with candlesticks, signals, and risk metrics  

4. **ASL Learning App (Gesture Recognition)** | MediaPipe, Python, ML  
   - Created an ASL learning tool using gesture-tracking models  
   - Used JSON-based video storage + hand-landmark detection for real-time feedback  

5. **Multilingual University Chatbot (5 Languages)** | NLP, Transformers  
   - Built a multilingual AI assistant supporting five languages  
   - Designed intent detection + multilingual embeddings for campus-wide Q&A  

**TECHNICAL EXPERIENCE:**

*Research Assistant — Rowan University*  
April 2024—Present  
- Optimized VQ-VAE models for real-time multivariate signal processing (audio, EEG, RF)  
- Designed neural network + GNN architectures for pattern recognition in noisy environments  
- Applied MTS modeling and reservoir computing for prediction and clustering in complex systems  
- Supported research applied to finance, communication systems, and intelligent signal analysis  

*Learning Assistant — Rowan University*  
August 2024—Present  
- Guided students in programming, data structures, algorithms, and core CS foundations  
- Provided personalized academic support and facilitated hands-on learning environments  

**COURSEWORK:**
Machine Learning, Models for Deep Learning, Big Data Analytics & Tools,  
Data Structures & Algorithms, Programming Languages, Database Systems,  
Operating Systems, Advanced Design & Analysis of Algorithms,  
Software Engineering, Probability & Statistics, Calculus

**CERTIFICATIONS:**
- Google IT Automation with Python — 2025  
- Intro to TensorFlow for Deep Learning — 2025  
- Introducing Generative AI with AWS — 2024  
- Microsoft Certified Azure IoT Developer Specialty — 2024  

**PUBLICATIONS:**
Garuso, A., Kokalj-Filipovic, S., & Kaasaragadda, Y. (2025).  
“A Look at Adversarial Attacks on Radio Waveforms from Discrete Latent Space.”  
Presented at FCN 2025; submitted to IEEE Xplore.

**CURRENT ACTIVITIES:**
- Advancing research on VQ-VAE pipelines for signal representation learning  
- Building ML models for forecasting, classification, and MTS pattern analysis  
- Developing personal AI/ML and quantitative trading projects  
- Exploring NLP, RL, and practical applied AI systems  

**INTERESTS:**
- NLP, Deep Learning, AI Ethics, Computer Vision  
- Signal Processing & Representation Learning  
- Quantitative Analysis & Algorithmic Trading  
- Software Engineering & Model Deployment  
- Predictive Modeling & Data Science  

**SOCIAL MEDIA:**
- LinkedIn: https://www.linkedin.com/in/attanasia-garuso  
- GitHub: https://github.com/Attanasia  
- Kaggle: https://www.kaggle.com/attanasiagaruso  

**Instructions for the Assistant:**
1. Always respond as a friendly, professional guide.  
2. Use only the information provided in the portfolio data—do not invent details.  
3. If visitors ask about skills, projects, experience, or research, explain clearly and helpfully.  
4. If asked for contact information, provide:  
   - Email: garusoattanasia@gmail.com  
   - LinkedIn, GitHub, Kaggle (as listed above)  
5. Do NOT reference or mention any resume downloads.  
6. Keep responses concise but informative.  
7. If you don’t know something, be honest and suggest they contact Attanasia.  
8. Maintain an encouraging and knowledgeable tone.  
9. Help visitors navigate sections of the website when needed.  
10. Always provide links as plain URLs (no markdown).  

Remember:  
You represent **Attanasia Garuso** — an ambitious engineer and researcher. Maintain professionalism, clarity, and enthusiasm in every response.`
};
        
// Chatbot Class
class AttanasiaChatbot {
    constructor() {
        this.messages = [];
        this.isMinimized = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.hasBeenOpened = false;
        
        this.init();
    }
    
    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        // Don't load welcome message on init - only when user first opens chatbot
    }
    
    createChatbotUI() {
        // Check if chatbot already exists
        if (document.getElementById('chatbot-container')) {
            return;
        }
        
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container hidden">
                <div class="chatbot-header" id="chatbot-header">
                    <div class="chatbot-header-left">
                        <img src="image/Attanasia.jpg" alt="Attanasia" class="chatbot-avatar">
                        <div class="chatbot-title-container">
                            <h3>Attanasia's AI Assistant</h3>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-controls">
                        <button class="chatbot-control-btn" id="chatbot-minimize" title="Minimize">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button class="chatbot-control-btn" id="chatbot-close" title="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                
                <div class="chatbot-body" id="chatbot-body">
                    <!-- Messages will be inserted here -->
                </div>
                
                <div class="quick-actions" id="quick-actions">
                    <button class="quick-action-btn" data-message="Tell me about Attanasia's technical skills"> Skills</button>
                    <button class="quick-action-btn" data-message="What projects has Attanasia worked on?"> Projects</button>
                    <button class="quick-action-btn" data-message="Tell me about Attanasia's work experience"> Experience</button>
                    <button class="quick-action-btn" data-message="How can I contact Attanasia?"> Contact</button>
                    <button class="quick-action-btn" data-message="Show me Attanasia's certifications"> Certifications</button>
                    <button class="quick-action-btn" data-message="What are Attanasia's achievements?"> Achievements</button>
                </div>
                
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbot-input" 
                        placeholder="Ask me anything about Attanasia..."
                        autocomplete="off"
                    >
                    <button class="chatbot-send-btn" id="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            
            <button class="chatbot-toggle-btn active" id="chatbot-toggle">
                <i class="fas fa-comments"></i>
            </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const closeBtn = document.getElementById('chatbot-close');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const header = document.getElementById('chatbot-header');
        const quickActions = document.querySelectorAll('.quick-action-btn');
        
        // Send message
        sendBtn?.addEventListener('click', () => this.handleSendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        // Quick actions
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendMessage(message);
            });
        });
        
        // Minimize
        minimizeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });
        
        // Close
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeChatbot();
        });
        
        // Toggle
        toggleBtn?.addEventListener('click', () => {
            this.openChatbot();
        });
        
        // Header click to toggle minimize
        header?.addEventListener('click', () => {
            if (this.isMinimized) {
                this.toggleMinimize();
            }
        });
    }
    
    loadWelcomeMessage() {
        const welcomeMsg = `Hi! I'm Attanasia's AI assistant. 

I can help you learn about:
• **Technical Skills** - Python, ML, Docker
• **Projects** - CryptoVista, TradingAlgo
• **Experience** - 2 years in ML model development
• **Certifications** - AWS, Udacity, and more
• **Contact Info** - Email, LinkedIn, GitHub, Kaggle

Try the quick action buttons below or ask me anything! `;
        this.addMessage('bot', welcomeMsg);
    }
    
    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.sendMessage(message);
        input.value = '';
    }
    
    async sendMessage(message) {
        // Add user message
        this.addMessage('user', message);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Get response from Gemini
            const response = await this.getGeminiResponse(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage('bot', response);
            
        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();
            
            // Try to answer from local knowledge base first
            const localResponse = this.getLocalResponse(message);
            
            if (localResponse) {
                // If we can answer from local knowledge, provide that
                this.addMessage('bot', localResponse);
            } else {
                // Otherwise, show error message with contact info
                const errorMessage = this.handleAPIError(error);
                this.addMessage('bot', errorMessage);
            }
        }
    }
    
    getLocalResponse(message) {
        const lowerMessage = message.toLowerCase();
        const info = CHATBOT_CONFIG.personalInfo;
        
        // Contact information queries
        if (lowerMessage.match(/contact|reach|email|phone|call|connect|get in touch|communicate/i)) {
            return `You can contact Attanasia through:\n\n📧 **Email:** ${info.email}\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n🏆 **Kaggle:** ${info.socialMedia.kaggle}\n🌐 **Website:** https://adilshamim.me\n\n📍 **Location:** ${info.location}`;
        }
        
        // Skills queries
        if (lowerMessage.match(/skill|technical|technology|programming|what (can|do) (you|attanasia)|expertise|proficient|languages/i)) {
            let skillsText = `Attanasia has expertise in:\n\n`;
            skillsText += `**Programming & Data:**\n${info.skills.programmingAndData.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Modeling & Machine Learning:**\n${info.skills.modelingAndML.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**MLOps & Deployment:**\n${info.skills.mlopsAndDeployment.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**NLP & Embeddings:**\n${info.skills.nlpAndEmbeddings.map(s => `• ${s}`).join('\n')}\n\n`;
            skillsText += `**Tools:**\n${info.skills.tools.map(s => `• ${s}`).join('\n')}`;
            return skillsText;
        }
        
        // Projects queries
        if (lowerMessage.match(/project|portfolio|work|built|created|developed|show me/i)) {
            let projectsText = `Here are Attanasia's key projects:\n\n`;
            info.projects.forEach((project, index) => {
                projectsText += `**${index + 1}. ${project.name}**\n`;
                projectsText += `Technologies: ${project.technologies.join(', ')}\n`;
                projectsText += `${project.description}\n\n`;
            });
            projectsText += `You can view all projects on GitHub: ${info.socialMedia.github}`;
            return projectsText;
        }
        
        // Experience queries
        if (lowerMessage.match(/experience|work|job|career|employment|position|role/i)) {
            let expText = `**Attanasia's Work Experience:**\n\n`;
            info.workExperience.forEach(exp => {
                expText += `**${exp.title}** at ${exp.company}\n`;
                expText += `📅 ${exp.period}\n\n`;
                expText += `Responsibilities:\n`;
                expText += exp.responsibilities.map(r => `• ${r}`).join('\n');
                expText += `\n\n`;
            });
            expText += `${info.experience}\n${info.kaggleStatus}`;
            return expText;
        }
        
        // Certifications queries
        if (lowerMessage.match(/certification|certificate|course|learning|education|degree|study/i)) {
            let certText = `**Education:**\n${info.education}\n\n`;
            certText += `**Certifications:**\n${info.certifications.map(c => `• ${c}`).join('\n')}\n\n`;
            certText += `**Relevant Coursework:**\n${info.coursework.map(c => `• ${c}`).join('\n')}`;
            return certText;
        }
        
        // About/Bio queries
        if (lowerMessage.match(/about|who (is|are)|tell me (about|more)|introduce|background|bio/i)) {
            return `${info.bio}\n\n**Title:** ${info.title}\n**Location:** ${info.location}\n**Languages:** ${info.languages.join(', ')}\n\n${info.experience}\n${info.kaggleStatus}\n\nFor more details, ask me about skills, projects, experience, or certifications!`;
        }
        
        // Location queries
        if (lowerMessage.match(/where|location|live|based|from/i)) {
            return `Attanasia is based in **${info.location}**.\n\n${info.bio}`;
        }
        
        // Interests queries
        if (lowerMessage.match(/interest|passion|hobby|like|enjoy|focus/i)) {
            let interestText = `**Attanasia's Interests:**\n\n`;
            interestText += info.interests.map(i => `💡 ${i}`).join('\n\n');
            return interestText;
        }

        
        // Social media queries
        if (lowerMessage.match(/social|linkedin|github|kaggle|twitter|medium|blog/i)) {
            return `Connect with Attanasia on:\n\n🔗 **LinkedIn:** ${info.socialMedia.linkedin}\n🐙 **GitHub:** ${info.socialMedia.github}\n🏆 **Kaggle:** ${info.socialMedia.kaggle}\n🐦 **Twitter/X:** ${info.socialMedia.twitter}\n📝 **Medium Blog:** ${info.socialMedia.medium}\n🌐 **Website:** https://adilshamim.me`;
        }
        
        // No match found
        return null;
    }
    
    handleAPIError(error) {
        // Check for quota/cost exhaustion errors
        if (error.message && (
            error.message.includes('429') || 
            error.message.includes('quota') || 
            error.message.includes('RESOURCE_EXHAUSTED') ||
            error.message.includes('insufficient') ||
            error.statusCode === 429
        )) {
            return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Attanasia directly through the contact section below.\n\n📧 Email: garusoattanasia@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/attanasia-garuso";
        }
        
        // Check for rate limit errors
        if (error.message && error.message.includes('rate limit')) {
            return "I'm processing too many requests right now. Please wait a moment and try again, or reach out to Attanasia directly through the contact section.";
        }
        
        // Check for network/connectivity errors
        if (error.message && (
            error.message.includes('network') || 
            error.message.includes('fetch') ||
            error.message.includes('Failed to fetch')
        )) {
            return "I'm having network connectivity issues. Please check your internet connection and try again, or contact Attanasia directly through the contact section.";
        }
        
        // Generic fallback for all other errors
        return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Attanasia directly through the contact section.\n\n📧 Email: garusoattanasia@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/attanasia-garuso";
    }
    
    async getGeminiResponse(userMessage) {
        // Build conversation history
        const contents = [
            {
                role: "user",
                parts: [{ text: CHATBOT_CONFIG.systemPrompt }]
            },
            {
                role: "model",
                parts: [{ text: "I understand. I'm Attanasia Garuso's personal AI assistant. I'll help visitors learn about Attanasia, her work, skills, and experiences in a friendly and professional manner." }]
            }
        ];
        
        // Add conversation history
        this.conversationHistory.forEach(msg => {
            contents.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        });
        
        // Add current message
        contents.push({
            role: "user",
            parts: [{ text: userMessage }]
        });
        
        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };
        
        try {
            const response = await fetch(`${CHATBOT_CONFIG.apiEndpoint}?key=${CHATBOT_CONFIG.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            
            // Handle HTTP errors with specific status codes
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = new Error(`API request failed: ${response.status}`);
                error.statusCode = response.status;
                error.errorData = errorData;
                
                // Check for specific error messages in the response
                if (errorData.error) {
                    if (errorData.error.message) {
                        error.message = errorData.error.message;
                    }
                    if (errorData.error.status) {
                        error.errorStatus = errorData.error.status;
                    }
                }
                
                throw error;
            }
            
            const data = await response.json();
            
            // Validate response structure
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response structure');
            }
            
            const botResponse = data.candidates[0].content.parts[0].text;
            
            // Update conversation history
            this.conversationHistory.push({ role: 'user', content: userMessage });
            this.conversationHistory.push({ role: 'bot', content: botResponse });
            
            // Keep only last 10 messages to manage token usage
            if (this.conversationHistory.length > 20) {
                this.conversationHistory = this.conversationHistory.slice(-20);
            }
            
            return botResponse;
            
        } catch (error) {
            // Enhance error with more context if it's a fetch error
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                error.message = 'Failed to fetch - network error';
            }
            throw error;
        }
    }
    
    addMessage(sender, text) {
        const chatBody = document.getElementById('chatbot-body');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const avatarHTML = sender === 'bot' ? 
            `<img src="image/Attanasia.jpg" alt="Avatar" class="message-avatar">` : '';
        
        messageDiv.innerHTML = `
            ${avatarHTML}
            <div>
                <div class="message-content">${this.formatMessage(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        this.messages.push({ sender, text, time });
    }
    
    formatMessage(text) {
        // First, convert markdown-style links [text](url) to clean URLs
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            // If the link text is the same as the URL or starts with http, just use the URL
            if (linkText === url || linkText.startsWith('http')) {
                return url;
            }
            // Otherwise keep the markdown format for now, will be converted to HTML later
            return `[${linkText}](${url})`;
        });
        
        // Convert plain URLs to clickable links
        const urlRegex = /(https?:\/\/[^\s\]]+)/g;
        text = text.replace(urlRegex, (url) => {
            // Don't convert if it's part of a markdown link (already has closing parenthesis)
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${url}</a>`;
        });
        
        // Convert remaining markdown links [text](url) to HTML
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${linkText}</a>`;
        });
        
        // Convert markdown-style bold to HTML
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Convert markdown-style italic to HTML
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Convert markdown-style code to HTML
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Convert bullet points to proper lists
        if (text.includes('\n•') || text.includes('\n-')) {
            text = text.replace(/\n([•\-])\s(.+)/g, (match, bullet, content) => {
                return `<li>${content}</li>`;
            });
            // Wrap in ul if li tags exist
            if (text.includes('<li>')) {
                text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
            }
        }
        
        // Convert numbered lists
        text = text.replace(/\n(\d+)\.\s(.+)/g, '<li>$2</li>');
        if (text.includes('<li>') && !text.includes('<ul>')) {
            text = text.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
        }
        
        // Convert line breaks to paragraphs for better spacing
        const paragraphs = text.split(/\n\n+/);
        if (paragraphs.length > 1) {
            text = paragraphs.map(p => {
                if (p.trim() && !p.includes('<ul>') && !p.includes('<ol>') && !p.includes('<li>')) {
                    return `<p>${p.trim()}</p>`;
                }
                return p;
            }).join('');
        } else {
            // Single line breaks to <br>
            text = text.replace(/\n/g, '<br>');
        }
        
        return text;
    }
    
    showTypingIndicator() {
        const chatBody = document.getElementById('chatbot-body');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <img src="image/Attanasia.jpg" alt="Avatar" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        this.isTyping = true;
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }
    
    toggleMinimize() {
        const container = document.getElementById('chatbot-container');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const icon = minimizeBtn.querySelector('i');
        
        this.isMinimized = !this.isMinimized;
        container.classList.toggle('minimized');
        
        if (this.isMinimized) {
            icon.className = 'fas fa-plus';
            minimizeBtn.title = 'Expand';
        } else {
            icon.className = 'fas fa-minus';
            minimizeBtn.title = 'Minimize';
        }
    }
    
    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        
        container.classList.add('hidden');
        toggleBtn.classList.add('active');
    }
    
    openChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        
        container.classList.remove('hidden');
        toggleBtn.classList.remove('active');
        
        // Load welcome message only on first open
        if (!this.hasBeenOpened) {
            this.loadWelcomeMessage();
            this.hasBeenOpened = true;
        }
        
        if (this.isMinimized) {
            this.toggleMinimize();
        }
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.attanasiaChatbot = new AttanasiaChatbot();
    });
} else {
    window.attanasiaChatbot = new AttanasiaChatbot();
}





