export const categories = [
  {
    name: "Artificial Intelligence",
    description: "Explore AI, Machine Learning, and Neural Networks.",
  },
  {
    name: "Hardware & Chips",
    description: "CPUs, GPUs, semiconductors, and electronics.",
  },
  {
    name: "Networking & Security",
    description: "Internet, protocols, and cybersecurity.",
  },
  {
    name: "Databases & Cloud",
    description: "SQL, NoSQL, cloud services, and storage.",
  },
  {
    name: "Mobile Tech",
    description: "Android, iOS, and mobile innovations.",
  },
  {
    name: "Programming & Software",
    description: "Languages, frameworks, and dev tools.",
  },
];

export const questions = [
  // ========== Artificial Intelligence ==========
  {
    category: "Artificial Intelligence",
    question: "Who is considered the father of Artificial Intelligence?",
    options: ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Andrew Ng"],
    answer: "John McCarthy",
  },
  {
    category: "Artificial Intelligence",
    question: "Which algorithm is widely used for training neural networks?",
    options: ["K-means", "Backpropagation", "Decision Tree", "Naive Bayes"],
    answer: "Backpropagation",
  },
  {
    category: "Artificial Intelligence",
    question: "Which of these is an AI framework by Google?",
    options: ["TensorFlow", "PyTorch", "Scikit-learn", "Caffe"],
    answer: "TensorFlow",
  },
  {
    category: "Artificial Intelligence",
    question: "What does NLP stand for in AI?",
    options: [
      "Neural Learning Processing",
      "Natural Language Processing",
      "Network Language Protocol",
      "New Learning Program",
    ],
    answer: "Natural Language Processing",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI model is famous for image recognition?",
    options: ["CNN", "RNN", "GAN", "SVM"],
    answer: "CNN",
  },
  {
    category: "Artificial Intelligence",
    question: "What is reinforcement learning mainly based on?",
    options: ["Rewards", "Supervised data", "Clusters", "Trees"],
    answer: "Rewards",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI concept mimics the human brain?",
    options: [
      "Neural Networks",
      "Decision Trees",
      "Rule-Based Systems",
      "Linear Regression",
    ],
    answer: "Neural Networks",
  },
  {
    category: "Artificial Intelligence",
    question: "Which company created the AI assistant Alexa?",
    options: ["Google", "Apple", "Amazon", "Microsoft"],
    answer: "Amazon",
  },
  {
    category: "Artificial Intelligence",
    question: "GANs are mainly used for?",
    options: ["Generating data", "Classification", "Sorting", "Prediction"],
    answer: "Generating data",
  },
  {
    category: "Artificial Intelligence",
    question: "Who is known as the godfather of deep learning?",
    options: ["Geoffrey Hinton", "Elon Musk", "Andrew Ng", "Yoshua Bengio"],
    answer: "Geoffrey Hinton",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI algorithm is inspired by evolution?",
    options: [
      "Genetic Algorithm",
      "Naive Bayes",
      "Support Vector Machines",
      "Gradient Boosting",
    ],
    answer: "Genetic Algorithm",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI model is mainly used for sequential data?",
    options: ["RNN", "CNN", "Decision Tree", "Naive Bayes"],
    answer: "RNN",
  },
  {
    category: "Artificial Intelligence",
    question: "Which is a chatbot developed by OpenAI?",
    options: ["Siri", "ChatGPT", "Cortana", "Alexa"],
    answer: "ChatGPT",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI technique detects spam emails?",
    options: [
      "Naive Bayes",
      "Linear Regression",
      "Decision Tree",
      "Clustering",
    ],
    answer: "Naive Bayes",
  },
  {
    category: "Artificial Intelligence",
    question: "Which metric is used to evaluate classification AI models?",
    options: ["Accuracy", "Latency", "Throughput", "Bandwidth"],
    answer: "Accuracy",
  },
  {
    category: "Artificial Intelligence",
    question: "Which AI technique creates images from text prompts?",
    options: ["Diffusion Models", "CNN", "RNN", "KNN"],
    answer: "Diffusion Models",
  },
  {
    category: "Artificial Intelligence",
    question: "What does ML stand for?",
    options: [
      "Machine Logic",
      "Machine Learning",
      "Model Language",
      "Mathematical Logic",
    ],
    answer: "Machine Learning",
  },

  // ========== Hardware & Chips ==========
  {
    category: "Hardware & Chips",
    question: "Which company developed the first microprocessor?",
    options: ["Intel", "AMD", "IBM", "NVIDIA"],
    answer: "Intel",
  },
  {
    category: "Hardware & Chips",
    question: "What does GPU stand for?",
    options: [
      "Graphics Processing Unit",
      "General Processing Unit",
      "Graph Protocol Utility",
      "Global Processing Unit",
    ],
    answer: "Graphics Processing Unit",
  },
  {
    category: "Hardware & Chips",
    question: "Which is faster for computation?",
    options: ["CPU", "GPU", "HDD", "SSD"],
    answer: "GPU",
  },
  {
    category: "Hardware & Chips",
    question: "What is the main function of RAM?",
    options: [
      "Long-term storage",
      "Temporary memory for processing",
      "Network management",
      "Power supply",
    ],
    answer: "Temporary memory for processing",
  },
  {
    category: "Hardware & Chips",
    question: "What does SSD stand for?",
    options: [
      "Solid State Drive",
      "Super Speed Disk",
      "Solid Storage Device",
      "System Storage Disk",
    ],
    answer: "Solid State Drive",
  },
  {
    category: "Hardware & Chips",
    question: "Which chip is mainly used for AI computation?",
    options: ["GPU", "CPU", "FPGA", "ASIC"],
    answer: "GPU",
  },
  {
    category: "Hardware & Chips",
    question: "Which company manufactures Ryzen CPUs?",
    options: ["Intel", "AMD", "NVIDIA", "IBM"],
    answer: "AMD",
  },
  {
    category: "Hardware & Chips",
    question: "Which memory is volatile?",
    options: ["RAM", "ROM", "SSD", "HDD"],
    answer: "RAM",
  },
  {
    category: "Hardware & Chips",
    question: "Which is faster: NVMe or SATA SSD?",
    options: ["NVMe", "SATA", "Both same", "HDD"],
    answer: "NVMe",
  },
  {
    category: "Hardware & Chips",
    question: "What is the purpose of a motherboard?",
    options: [
      "Connect CPU, RAM, and peripherals",
      "Store data permanently",
      "Provide graphics output",
      "Cool the CPU",
    ],
    answer: "Connect CPU, RAM, and peripherals",
  },
  {
    category: "Hardware & Chips",
    question: "What does BIOS stand for?",
    options: [
      "Basic Input Output System",
      "Binary Integrated Operating System",
      "Boot Interface Output System",
      "Basic Internal Operating Software",
    ],
    answer: "Basic Input Output System",
  },
  {
    category: "Hardware & Chips",
    question: "Which component is used to cool the CPU?",
    options: ["Heatsink/Fan", "GPU", "RAM", "Motherboard"],
    answer: "Heatsink/Fan",
  },
  {
    category: "Hardware & Chips",
    question: "What is a transistor used for?",
    options: [
      "Switching and amplification",
      "Storing data",
      "Cooling circuits",
      "Connecting networks",
    ],
    answer: "Switching and amplification",
  },
  {
    category: "Hardware & Chips",
    question: "Which storage type is non-volatile?",
    options: ["SSD", "RAM", "Cache", "Registers"],
    answer: "SSD",
  },
  {
    category: "Hardware & Chips",
    question: "Which component performs the main computations?",
    options: ["CPU", "GPU", "RAM", "HDD"],
    answer: "CPU",
  },
  {
    category: "Hardware & Chips",
    question: "Which chip company is known for graphics cards?",
    options: ["NVIDIA", "Intel", "AMD", "IBM"],
    answer: "NVIDIA",
  },

  // ========== Networking & Security ==========
  {
    category: "Networking & Security",
    question: "What does IP stand for in networking?",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Internet Port",
      "Information Packet",
    ],
    answer: "Internet Protocol",
  },
  {
    category: "Networking & Security",
    question: "Which protocol is used to transfer web pages?",
    options: ["HTTP", "FTP", "SMTP", "DNS"],
    answer: "HTTP",
  },
  {
    category: "Networking & Security",
    question: "What is a firewall used for?",
    options: [
      "Block unauthorized access",
      "Store data",
      "Route network traffic",
      "Monitor CPU usage",
    ],
    answer: "Block unauthorized access",
  },
  {
    category: "Networking & Security",
    question: "Which of these is a secure version of HTTP?",
    options: ["HTTPS", "FTP", "SMTP", "IPSec"],
    answer: "HTTPS",
  },
  {
    category: "Networking & Security",
    question: "Which device connects multiple networks together?",
    options: ["Router", "Switch", "Hub", "Modem"],
    answer: "Router",
  },
  {
    category: "Networking & Security",
    question: "What is the main purpose of VPN?",
    options: [
      "Secure remote connection",
      "Accelerate downloads",
      "Store passwords",
      "Block malware",
    ],
    answer: "Secure remote connection",
  },
  {
    category: "Networking & Security",
    question: "Which port does HTTPS typically use?",
    options: ["443", "80", "21", "22"],
    answer: "443",
  },
  {
    category: "Networking & Security",
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Digital Network Service",
      "Data Name Server",
      "Direct Node Security",
    ],
    answer: "Domain Name System",
  },
  {
    category: "Networking & Security",
    question: "Which protocol is used to send emails?",
    options: ["SMTP", "FTP", "HTTP", "SSH"],
    answer: "SMTP",
  },
  {
    category: "Networking & Security",
    question: "Which of these is a type of cyber attack?",
    options: ["Phishing", "Refactoring", "Caching", "Compiling"],
    answer: "Phishing",
  },
  {
    category: "Networking & Security",
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two methods to verify identity",
      "Logging in twice",
      "Using two passwords",
      "Connecting two networks",
    ],
    answer: "Using two methods to verify identity",
  },
  {
    category: "Networking & Security",
    question: "Which device operates at the data link layer?",
    options: ["Switch", "Router", "Firewall", "Hub"],
    answer: "Switch",
  },
  {
    category: "Networking & Security",
    question: "Which protocol is used for secure file transfer?",
    options: ["SFTP", "HTTP", "SMTP", "FTP"],
    answer: "SFTP",
  },
  {
    category: "Networking & Security",
    question: "What is a MAC address?",
    options: [
      "Unique identifier for network interface",
      "Memory address in CPU",
      "IP version 6 address",
      "Encrypted password",
    ],
    answer: "Unique identifier for network interface",
  },
  {
    category: "Networking & Security",
    question: "Which type of network is limited to a single building?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    answer: "LAN",
  },
  {
    category: "Networking & Security",
    question: "Which layer of the OSI model handles routing?",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Physical Layer",
    ],
    answer: "Network Layer",
  },

  // ========== Databases & Cloud ==========
  {
    category: "Databases & Cloud",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query List",
      "Server Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    category: "Databases & Cloud",
    question: "Which type of database stores data in key-value pairs?",
    options: ["NoSQL", "SQL", "Relational", "Graph"],
    answer: "NoSQL",
  },
  {
    category: "Databases & Cloud",
    question:
      "Which cloud model provides hardware, storage, and networking resources?",
    options: ["IaaS", "PaaS", "SaaS", "DBaaS"],
    answer: "IaaS",
  },
  {
    category: "Databases & Cloud",
    question: "What is the main benefit of database indexing?",
    options: [
      "Faster data retrieval",
      "Better data storage",
      "Increased security",
      "Data encryption",
    ],
    answer: "Faster data retrieval",
  },
  {
    category: "Databases & Cloud",
    question: "Which SQL statement is used to retrieve data from a database?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "SELECT",
  },
  {
    category: "Databases & Cloud",
    question:
      "Which type of cloud provides services to multiple organizations?",
    options: [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Community Cloud",
    ],
    answer: "Public Cloud",
  },
  {
    category: "Databases & Cloud",
    question: "Which of these is a popular NoSQL database?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
    answer: "MongoDB",
  },
  {
    category: "Databases & Cloud",
    question: "What is a primary key in a database?",
    options: [
      "Unique identifier for a record",
      "Password for database access",
      "Index for faster queries",
      "Foreign key reference",
    ],
    answer: "Unique identifier for a record",
  },
  {
    category: "Databases & Cloud",
    question: "Which SQL command is used to add new data?",
    options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
    answer: "INSERT",
  },
  {
    category: "Databases & Cloud",
    question: "Which database type is best for hierarchical data?",
    options: [
      "Graph Database",
      "Relational Database",
      "NoSQL Document Store",
      "Key-Value Store",
    ],
    answer: "Graph Database",
  },
  {
    category: "Databases & Cloud",
    question: "What does SaaS stand for?",
    options: [
      "Software as a Service",
      "System as a Solution",
      "Storage as a Service",
      "Server as a Service",
    ],
    answer: "Software as a Service",
  },
  {
    category: "Databases & Cloud",
    question: "Which cloud model combines private and public clouds?",
    options: [
      "Hybrid Cloud",
      "Public Cloud",
      "Private Cloud",
      "Community Cloud",
    ],
    answer: "Hybrid Cloud",
  },
  {
    category: "Databases & Cloud",
    question: "Which SQL keyword is used to modify existing data?",
    options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
    answer: "UPDATE",
  },
  {
    category: "Databases & Cloud",
    question: "Which cloud provider offers EC2, S3, and RDS?",
    options: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
    answer: "AWS",
  },
  {
    category: "Databases & Cloud",
    question: "What is the main purpose of a foreign key?",
    options: [
      "Link tables together",
      "Encrypt data",
      "Create indexes",
      "Store passwords",
    ],
    answer: "Link tables together",
  },
  {
    category: "Databases & Cloud",
    question:
      "Which database model stores data in tables with rows and columns?",
    options: [
      "Relational Database",
      "Graph Database",
      "Key-Value Store",
      "Document Store",
    ],
    answer: "Relational Database",
  },

  // ========== Mobile Tech ==========
  {
    category: "Mobile Tech",
    question:
      "Which operating system is developed by Google for mobile devices?",
    options: ["Android", "iOS", "Windows Phone", "Symbian"],
    answer: "Android",
  },
  {
    category: "Mobile Tech",
    question: "Which company develops iOS?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: "Apple",
  },
  {
    category: "Mobile Tech",
    question:
      "What is the name of the mobile chip series used by Apple in iPhones?",
    options: ["A-series", "Snapdragon", "Exynos", "Kirin"],
    answer: "A-series",
  },
  {
    category: "Mobile Tech",
    question:
      "Which wireless standard is primarily used for mobile internet connectivity?",
    options: ["4G/5G", "Bluetooth", "Wi-Fi", "NFC"],
    answer: "4G/5G",
  },
  {
    category: "Mobile Tech",
    question: "What is the default package format for Android apps?",
    options: ["APK", "IPA", "EXE", "DMG"],
    answer: "APK",
  },
  {
    category: "Mobile Tech",
    question:
      "Which technology allows smartphones to make payments via contactless systems?",
    options: ["NFC", "GPS", "Wi-Fi", "Bluetooth"],
    answer: "NFC",
  },
  {
    category: "Mobile Tech",
    question: "Which Android version introduced Material Design?",
    options: ["Lollipop", "KitKat", "Marshmallow", "Nougat"],
    answer: "Lollipop",
  },
  {
    category: "Mobile Tech",
    question: "What is the Apple App Store used for?",
    options: [
      "Downloading iOS apps",
      "Installing Android apps",
      "Accessing Windows apps",
      "Updating firmware",
    ],
    answer: "Downloading iOS apps",
  },
  {
    category: "Mobile Tech",
    question:
      "Which mobile chip manufacturer is known for Snapdragon processors?",
    options: ["Qualcomm", "Apple", "Samsung", "MediaTek"],
    answer: "Qualcomm",
  },
  {
    category: "Mobile Tech",
    question: "What does AMOLED stand for in smartphone displays?",
    options: [
      "Active Matrix Organic Light Emitting Diode",
      "Advanced Matrix OLED Display",
      "Active Micro OLED Display",
      "Adaptive Matrix Organic LED",
    ],
    answer: "Active Matrix Organic Light Emitting Diode",
  },
  {
    category: "Mobile Tech",
    question:
      "Which feature helps smartphones track location using satellites?",
    options: ["GPS", "NFC", "Wi-Fi", "Bluetooth"],
    answer: "GPS",
  },
  {
    category: "Mobile Tech",
    question: "Which company produces the Galaxy series of smartphones?",
    options: ["Samsung", "Apple", "Google", "Huawei"],
    answer: "Samsung",
  },
  {
    category: "Mobile Tech",
    question: "What is the primary function of a mobile GPU?",
    options: [
      "Render graphics and images",
      "Store user data",
      "Manage cellular connectivity",
      "Control sensors",
    ],
    answer: "Render graphics and images",
  },
  {
    category: "Mobile Tech",
    question: "Which mobile OS supports widgets on the home screen?",
    options: ["Android", "iOS", "Windows Phone", "Symbian"],
    answer: "Android",
  },
  {
    category: "Mobile Tech",
    question: "Which charging standard is widely used in modern smartphones?",
    options: ["USB-C", "Micro-USB", "Lightning", "Proprietary"],
    answer: "USB-C",
  },
  {
    category: "Mobile Tech",
    question: "What is the primary purpose of a mobile fingerprint sensor?",
    options: [
      "Biometric authentication",
      "Screen brightness",
      "Network management",
      "Battery saving",
    ],
    answer: "Biometric authentication",
  },

  // ========== Programming & Software ==========
  {
    category: "Programming & Software",
    question:
      "Which language is primarily used for web development alongside HTML and CSS?",
    options: ["JavaScript", "Python", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    category: "Programming & Software",
    question:
      "Which programming language is known for its use in data science and AI?",
    options: ["Python", "C#", "Ruby", "PHP"],
    answer: "Python",
  },
  {
    category: "Programming & Software",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperTool Multi Language",
      "HighText Machine Language",
      "HyperText Markdown Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    category: "Programming & Software",
    question: "Which of these is a version control system?",
    options: ["Git", "Docker", "Node.js", "React"],
    answer: "Git",
  },
  {
    category: "Programming & Software",
    question: "Which framework is used for building React applications?",
    options: ["Next.js", "Django", "Flask", "Laravel"],
    answer: "Next.js",
  },
  {
    category: "Programming & Software",
    question:
      "Which language runs in the browser and is interpreted, not compiled?",
    options: ["JavaScript", "C++", "Go", "Rust"],
    answer: "JavaScript",
  },
  {
    category: "Programming & Software",
    question: "Which command installs packages in a Node.js project?",
    options: ["npm install", "git clone", "python setup", "docker run"],
    answer: "npm install",
  },
  {
    category: "Programming & Software",
    question: "Which language is used to style web pages?",
    options: ["CSS", "HTML", "Python", "Java"],
    answer: "CSS",
  },
  {
    category: "Programming & Software",
    question: "Which method is used to render content in React?",
    options: ["render()", "display()", "show()", "output()"],
    answer: "render()",
  },
  {
    category: "Programming & Software",
    question: "What is the main purpose of an API?",
    options: [
      "Allow communication between software applications",
      "Store databases",
      "Compile code",
      "Render UI elements",
    ],
    answer: "Allow communication between software applications",
  },
  {
    category: "Programming & Software",
    question: "Which programming paradigm focuses on objects and classes?",
    options: [
      "Object-Oriented Programming",
      "Functional Programming",
      "Procedural Programming",
      "Declarative Programming",
    ],
    answer: "Object-Oriented Programming",
  },
  {
    category: "Programming & Software",
    question: "Which Python keyword is used to define a function?",
    options: ["def", "func", "function", "lambda"],
    answer: "def",
  },
  {
    category: "Programming & Software",
    question:
      "Which software development methodology emphasizes iterative development?",
    options: ["Agile", "Waterfall", "V-Model", "Spiral"],
    answer: "Agile",
  },
  {
    category: "Programming & Software",
    question: "Which language is primarily used for iOS app development?",
    options: ["Swift", "Kotlin", "Java", "C#"],
    answer: "Swift",
  },
  {
    category: "Programming & Software",
    question: "Which type of database stores data in key-value pairs?",
    options: ["NoSQL", "SQL", "Graph", "Relational"],
    answer: "NoSQL",
  },
  {
    category: "Programming & Software",
    question:
      "Which tool is commonly used to build and manage JavaScript projects?",
    options: ["Node.js", "Git", "Docker", "Postman"],
    answer: "Node.js",
  },
];
