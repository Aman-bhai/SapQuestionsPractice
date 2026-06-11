export const SAP_QUIZ_QUESTIONS = [
  {
    type: "mcq",
    topic: "ux400",
    question: "What is SAPUI5?",
    options: ["Database", "Frontend Framework", "OS", "Server"],
    correct: [1],
    explanation: "SAPUI5 is SAP's JavaScript UI framework."
  },
  {
    type: "mcq",
    topic: "ux400",
    question: "Which language is primarily used in SAPUI5?",
    options: ["Java", "Python", "JavaScript", "C#"],
    correct: [2],
    explanation: "SAPUI5 applications are primarily developed using JavaScript."
  },
  {
    type: "mcq",
    topic: "cloud",
    question: "What does SaaS stand for?",
    options: [
      "Software as a Service",
      "System as a Service",
      "Storage as a Service",
      "Server as a Service"
    ],
    correct: [0],
    explanation: "SaaS means Software as a Service."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What does SAP Fiori Launchpad mainly provide?",
    "options": [
      "Database management system",
      "Central access point for applications",
      "Code compilation tool",
      "Network monitoring tool"
    ],
    "correct": [1],
    "explanation": "Launchpad is a central entry point for accessing Fiori apps."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which of the following is used to launch an app in Fiori?",
    "options": [
      "Tile",
      "Table",
      "View",
      "Field"
    ],
    "correct": [0],
    "explanation": "Tiles are used to launch applications in Fiori Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a semantic object?",
    "options": [
      "To store UI themes",
      "To enable intent-based navigation",
      "To define database structure",
      "To manage server logs"
    ],
    "correct": [1],
    "explanation": "Semantic objects are used for intent-based navigation in Fiori."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What does a catalog contain in SAP Fiori?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only backend services",
      "Only UI themes"
    ],
    "correct": [1],
    "explanation": "Catalogs contain tiles and target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the function of a group in Fiori Launchpad?",
    "options": [
      "It stores backend tables",
      "It organizes tiles for user display",
      "It manages OData services",
      "It defines UI theme"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles for display on Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "Which components are required for intent-based navigation?",
    "options": [
      "CSS and HTML",
      "Semantic Object and Action",
      "Database and table",
      "UI theme and layout"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the role of target mapping?",
    "options": [
      "Define app-to-database connection",
      "Connect tile to application",
      "Create UI theme",
      "Store user roles"
    ],
    "correct": [1],
    "explanation": "Target mapping defines navigation from tile to app."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which tool is used to configure Fiori Launchpad content?",
    "options": [
      "Launchpad Designer",
      "Eclipse IDE",
      "SAP HANA Studio",
      "Visual Studio Code"
    ],
    "correct": [0],
    "explanation": "Launchpad Designer is used for configuring Launchpad content."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is a role in Fiori Launchpad?",
    "options": [
      "A UI theme",
      "A collection of catalogs and groups",
      "A database table",
      "A backend service"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "Which layer does SAP Fiori Launchpad belong to?",
    "options": [
      "Database layer",
      "Presentation layer",
      "Integration layer",
      "Persistence layer"
    ],
    "correct": [1],
    "explanation": "Fiori Launchpad is part of the presentation layer."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of personalization in Fiori Launchpad?",
    "options": [
      "To modify backend tables",
      "To allow users to customize their UI experience",
      "To change database structure",
      "To manage server load"
    ],
    "correct": [1],
    "explanation": "Personalization allows users to customize their Launchpad view."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if target mapping is missing?",
    "options": [
      "Tile will still open app",
      "Navigation will fail",
      "Database will crash",
      "UI theme will change"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation from tile fails."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is the main function of SAP Fiori Launchpad Designer?",
    "options": [
      "To write ABAP code",
      "To configure catalogs, groups, and tiles",
      "To manage database tables",
      "To design UI layouts using HTML"
    ],
    "correct": [1],
    "explanation": "Launchpad Designer is used to configure Fiori Launchpad content like tiles, catalogs, and groups."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is a tile in SAP Fiori Launchpad?",
    "options": [
      "A backend service",
      "A clickable UI element to launch apps",
      "A database table",
      "A server configuration file"
    ],
    "correct": [1],
    "explanation": "Tiles are UI elements that allow users to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What does a catalog contain in SAP Fiori?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only roles",
      "Only UI themes"
    ],
    "correct": [1],
    "explanation": "Catalogs store tiles and target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a group in Fiori Launchpad?",
    "options": [
      "To define backend logic",
      "To organize tiles for users",
      "To store database records",
      "To manage OData services"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles on the Launchpad for user display."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "Which of the following enables navigation in SAP Fiori?",
    "options": [
      "CSS class",
      "Target mapping",
      "Database table",
      "UI theme"
    ],
    "correct": [1],
    "explanation": "Target mapping enables navigation from tile to application."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is intent-based navigation in SAP Fiori?",
    "options": [
      "Navigation using URLs only",
      "Navigation using semantic object and action",
      "Navigation using database keys",
      "Navigation using UI themes"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if semantic object is not defined?",
    "options": [
      "Navigation will still work normally",
      "Intent-based navigation will fail",
      "UI theme will change",
      "Database will reset"
    ],
    "correct": [1],
    "explanation": "Without semantic object, intent-based navigation cannot work."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is assigned to a role in SAP Fiori?",
    "options": [
      "Only database tables",
      "Catalogs and groups",
      "Only UI themes",
      "Only backend services"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is the main purpose of SAP Fiori Launchpad?",
    "options": [
      "To manage server hardware",
      "To provide a central access point for applications",
      "To design database schema",
      "To compile ABAP programs"
    ],
    "correct": [1],
    "explanation": "Launchpad provides a central entry point for apps."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "Which component connects tile to app in SAP Fiori?",
    "options": [
      "Semantic Object",
      "Target Mapping",
      "Group",
      "Catalog"
    ],
    "correct": [1],
    "explanation": "Target mapping connects tiles to applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "Which of the following best describes a semantic object?",
    "options": [
      "A UI theme",
      "A business object used in navigation",
      "A database table",
      "A CSS file"
    ],
    "correct": [1],
    "explanation": "Semantic objects represent business objects used for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the consequence of missing target mapping?",
    "options": [
      "Tile will open app directly",
      "Navigation will fail",
      "System will crash",
      "UI will not load"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation cannot be resolved."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is the primary role of SAP Fiori Launchpad?",
    "options": [
      "Database administration",
      "Central access point for applications",
      "Network configuration",
      "Code compilation"
    ],
    "correct": [1],
    "explanation": "Fiori Launchpad is the central entry point for accessing applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What does a tile represent in SAP Fiori?",
    "options": [
      "A database record",
      "A UI element to launch an app",
      "A backend API",
      "A system log"
    ],
    "correct": [1],
    "explanation": "Tiles are UI elements used to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is contained in a Fiori catalog?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only roles",
      "Only UI themes"
    ],
    "correct": [1],
    "explanation": "Catalogs contain tiles and their target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a Fiori group?",
    "options": [
      "To store database tables",
      "To organize tiles for end users",
      "To manage backend logic",
      "To define UI themes"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles for display on the Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "Which concept enables navigation between apps in Fiori?",
    "options": [
      "CSS Styling",
      "Target Mapping",
      "Database Indexing",
      "UI Fragment"
    ],
    "correct": [1],
    "explanation": "Target mapping enables navigation from tiles to apps."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is intent-based navigation in SAP Fiori?",
    "options": [
      "Navigation using URLs only",
      "Navigation using semantic object and action",
      "Navigation using database keys",
      "Navigation using UI themes"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if target mapping is missing?",
    "options": [
      "Tile still opens app",
      "Navigation fails",
      "System crashes",
      "UI theme changes"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation from tile fails."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is a semantic object used for?",
    "options": [
      "Database storage",
      "Business-based navigation",
      "UI styling",
      "Server configuration"
    ],
    "correct": [1],
    "explanation": "Semantic objects represent business objects used for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which tool is used to configure Fiori Launchpad content?",
    "options": [
      "Launchpad Designer",
      "SAP HANA Studio",
      "Eclipse Compiler",
      "Web Server Manager"
    ],
    "correct": [1],
    "explanation": "Launchpad Designer is used for configuring tiles, catalogs, and groups."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "Which elements are required for navigation in Fiori Launchpad?",
    "options": [
      "Theme and CSS",
      "Semantic Object, Action, and Target Mapping",
      "Database and table",
      "UI5 controller only"
    ],
    "correct": [1],
    "explanation": "Navigation requires semantic object, action, and target mapping."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is assigned to a Fiori role?",
    "options": [
      "Only UI themes",
      "Catalogs and groups",
      "Only backend tables",
      "Only APIs"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the result of correct semantic object configuration?",
    "options": [
      "Faster database queries",
      "Successful intent-based navigation",
      "UI theme change",
      "Backend restart"
    ],
    "correct": [1],
    "explanation": "Correct semantic object enables successful navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is the main purpose of SAP Fiori Launchpad?",
    "options": [
      "To manage database indexes",
      "To provide a single access point for applications",
      "To compile backend programs",
      "To design UI themes only"
    ],
    "correct": [1],
    "explanation": "SAP Fiori Launchpad is a central entry point for applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is a tile in SAP Fiori Launchpad?",
    "options": [
      "A backend service",
      "A UI element used to launch apps",
      "A database table",
      "A configuration file"
    ],
    "correct": [1],
    "explanation": "Tiles are clickable UI elements used to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What does a Fiori catalog contain?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only UI themes",
      "Only backend tables"
    ],
    "correct": [1],
    "explanation": "Catalogs contain tiles and target mappings for applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a group in Fiori Launchpad?",
    "options": [
      "To store database data",
      "To organize tiles for user display",
      "To manage servers",
      "To define APIs"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles for display in the Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "Which concept is used for navigation in SAP Fiori?",
    "options": [
      "CSS Styling",
      "Target Mapping",
      "Database schema",
      "HTML templates"
    ],
    "correct": [1],
    "explanation": "Target mapping connects tiles to applications for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is intent-based navigation in SAP Fiori?",
    "options": [
      "Navigation using UI themes",
      "Navigation using semantic object and action",
      "Navigation using database keys",
      "Navigation using server paths only"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if target mapping is not defined?",
    "options": [
      "App opens normally",
      "Navigation fails",
      "UI theme changes",
      "System performance improves"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation from tile will fail."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is a semantic object used for?",
    "options": [
      "Database indexing",
      "Business-based navigation",
      "UI color settings",
      "Server configuration"
    ],
    "correct": [1],
    "explanation": "Semantic objects represent business entities for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which tool is used to configure Fiori Launchpad content?",
    "options": [
      "Launchpad Designer",
      "Eclipse",
      "Visual Studio",
      "SAP GUI"
    ],
    "correct": [0],
    "explanation": "Launchpad Designer is used to configure tiles, catalogs, and groups."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "Which components are required for navigation in Fiori?",
    "options": [
      "CSS and HTML",
      "Semantic Object, Action, and Target Mapping",
      "Database tables only",
      "UI controller only"
    ],
    "correct": [1],
    "explanation": "Navigation requires semantic object, action, and target mapping."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is assigned to a Fiori role?",
    "options": [
      "Only UI themes",
      "Catalogs and groups",
      "Only backend services",
      "Only database tables"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the result of correct semantic object configuration?",
    "options": [
      "Faster UI rendering",
      "Successful intent-based navigation",
      "Database optimization",
      "Server restart"
    ],
    "correct": [1],
    "explanation": "Correct semantic object enables intent-based navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad primarily used for?",
    "options": [
      "Database development",
      "Central access to applications",
      "Hardware monitoring",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Launchpad provides a central entry point to access applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What does a tile represent in Fiori Launchpad?",
    "options": [
      "A backend function",
      "A UI element to launch an app",
      "A database table",
      "A system log"
    ],
    "correct": [1],
    "explanation": "Tiles are clickable UI elements that launch apps."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is included in a Fiori catalog?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only themes",
      "Only backend APIs"
    ],
    "correct": [1],
    "explanation": "Catalogs contain tiles and target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a group in Fiori Launchpad?",
    "options": [
      "To store database tables",
      "To organize tiles for user display",
      "To manage backend logic",
      "To define system logs"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles for user-facing display."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What enables navigation between apps in SAP Fiori?",
    "options": [
      "CSS files",
      "Target Mapping",
      "Database indexes",
      "UI themes"
    ],
    "correct": [1],
    "explanation": "Target mapping enables navigation from tile to app."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is intent-based navigation in SAP Fiori?",
    "options": [
      "Navigation using URLs only",
      "Navigation using semantic object and action",
      "Navigation using database keys",
      "Navigation using UI fragments"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if target mapping is missing?",
    "options": [
      "App launches normally",
      "Navigation fails",
      "UI theme changes",
      "System performance increases"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation cannot work."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is a semantic object used for?",
    "options": [
      "UI styling",
      "Business-based navigation",
      "Database optimization",
      "Server configuration"
    ],
    "correct": [1],
    "explanation": "Semantic objects represent business entities for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which tool is used to configure Fiori Launchpad?",
    "options": [
      "Launchpad Designer",
      "SAP HANA Studio",
      "Eclipse",
      "VS Code"
    ],
    "correct": [0],
    "explanation": "Launchpad Designer is used to configure tiles, catalogs, and groups."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is required for successful Fiori navigation?",
    "options": [
      "CSS + HTML",
      "Semantic Object + Action + Target Mapping",
      "Database tables",
      "UI fragments"
    ],
    "correct": [1],
    "explanation": "Navigation requires semantic object, action, and target mapping."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is assigned to a Fiori role?",
    "options": [
      "Only UI themes",
      "Catalogs and groups",
      "Only database tables",
      "Only backend services"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the result of correct semantic object configuration?",
    "options": [
      "Faster database queries",
      "Successful navigation between apps",
      "UI theme changes",
      "Server crash"
    ],
    "correct": [1],
    "explanation": "Correct semantic object ensures successful navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is the main purpose of SAP Fiori Launchpad?",
    "options": [
      "To manage database schema",
      "To provide a central access point for apps",
      "To design UI themes only",
      "To compile ABAP programs"
    ],
    "correct": [1],
    "explanation": "SAP Fiori Launchpad is the central entry point for accessing applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is a tile in SAP Fiori Launchpad?",
    "options": [
      "A backend service",
      "A UI element used to launch apps",
      "A database table",
      "A system configuration file"
    ],
    "correct": [1],
    "explanation": "Tiles are clickable UI elements used to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What does a Fiori catalog contain?",
    "options": [
      "Only users",
      "Tiles and target mappings",
      "Only UI themes",
      "Only backend services"
    ],
    "correct": [1],
    "explanation": "Catalogs contain tiles and target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is the purpose of a Fiori group?",
    "options": [
      "To store database tables",
      "To organize tiles for user display",
      "To manage server logs",
      "To define UI themes"
    ],
    "correct": [1],
    "explanation": "Groups organize tiles for user display on the Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "Which concept enables navigation in SAP Fiori?",
    "options": [
      "CSS Styling",
      "Target Mapping",
      "Database indexing",
      "UI fragments"
    ],
    "correct": [1],
    "explanation": "Target mapping enables navigation from tile to application."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is intent-based navigation in SAP Fiori?",
    "options": [
      "Navigation using only URLs",
      "Navigation using semantic object and action",
      "Navigation using database keys",
      "Navigation using UI themes"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What happens if target mapping is missing?",
    "options": [
      "App still opens normally",
      "Navigation fails",
      "UI theme changes automatically",
      "System restarts"
    ],
    "correct": [1],
    "explanation": "Without target mapping, navigation from tile fails."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is a semantic object used for?",
    "options": [
      "Database optimization",
      "Business-based navigation",
      "UI styling",
      "Server configuration"
    ],
    "correct": [1],
    "explanation": "Semantic objects represent business entities used in navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "Which tool is used to configure Fiori Launchpad content?",
    "options": [
      "Launchpad Designer",
      "Eclipse IDE",
      "SAP HANA Studio",
      "Visual Studio"
    ],
    "correct": [0],
    "explanation": "Launchpad Designer is used to configure catalogs, groups, and tiles."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is required for successful Fiori navigation?",
    "options": [
      "CSS + HTML only",
      "Semantic Object + Action + Target Mapping",
      "Database tables only",
      "UI fragments only"
    ],
    "correct": [1],
    "explanation": "Navigation requires semantic object, action, and target mapping."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is assigned to a Fiori role?",
    "options": [
      "Only backend services",
      "Catalogs and groups",
      "Only UI themes",
      "Only database tables"
    ],
    "correct": [1],
    "explanation": "Roles contain catalogs and groups assigned to users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux403",
    "question": "What is the result of correct semantic object configuration?",
    "options": [
      "Faster database queries",
      "Successful navigation between apps",
      "UI theme change",
      "Server crash"
    ],
    "correct": [1],
    "explanation": "Correct semantic object ensures successful navigation."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the main focus of SAP UX402?",
    "options": [
      "ABAP backend development",
      "SAP Fiori Elements and Smart Controls",
      "Database administration",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "UX402 focuses on SAP Fiori elements and smart controls."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "What is a Smart Field in SAP Fiori Elements?",
    "options": [
      "A manually coded UI field",
      "A metadata-driven UI field",
      "A database table field",
      "A CSS component"
    ],
    "correct": [1],
    "explanation": "Smart Fields are generated based on OData metadata."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad used for?",
    "options": [
      "Running OS commands",
      "Central access point for apps",
      "Writing database queries",
      "Designing hardware systems"
    ],
    "correct": [1],
    "explanation": "Launchpad provides a central entry point for applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for intent-based navigation?",
    "options": [
      "CSS styling",
      "Semantic Object + Action",
      "Database table",
      "HTML page"
    ],
    "correct": [1],
    "explanation": "Intent-based navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What is SAP CAP in CLD200 context?",
    "options": [
      "Cloud Application Programming Model",
      "Central Admin Platform",
      "Core ABAP Processor",
      "Cloud Analytics Portal"
    ],
    "correct": [0],
    "explanation": "CAP stands for Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "Which language is mainly used in SAP CAP development?",
    "options": [
      "JavaScript / Node.js",
      "C++",
      "C# only",
      "COBOL"
    ],
    "correct": [0],
    "explanation": "SAP CAP commonly uses Node.js and Java."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transaction Processor",
      "Backend Transfer Protocol",
      "Business Test Program"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which service is part of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Android Studio",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is part of SAP BTP services."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What does CDS stand for in SAP CAP?",
    "options": [
      "Core Data Services",
      "Cloud Development System",
      "Central Data Store",
      "Core Deployment Service"
    ],
    "correct": [0],
    "explanation": "CDS stands for Core Data Services."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld500",
    "question": "Which architecture is used in SAP CAP?",
    "options": [
      "Monolithic architecture",
      "Microservices-based architecture",
      "File-based architecture",
      "Single-layer architecture"
    ],
    "correct": [1],
    "explanation": "SAP CAP uses microservices-based architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What is Smart Filter Bar used for?",
    "options": [
      "Database indexing",
      "Dynamic filtering of data in Fiori apps",
      "UI theme design",
      "Backend deployment"
    ],
    "correct": [1],
    "explanation": "Smart Filter Bar is used for dynamic filtering in Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What is the role of service layer in CAP?",
    "options": [
      "Defines UI theme",
      "Exposes business logic via APIs",
      "Stores database only",
      "Handles OS processes"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic as APIs in CAP."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the main purpose of SAP Fiori Elements?",
    "options": [
      "To design database tables",
      "To generate apps using metadata",
      "To manage servers",
      "To write OS scripts"
    ],
    "correct": [1],
    "explanation": "Fiori Elements generates apps using OData metadata."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "Which annotation is used in SAP Fiori Elements?",
    "options": [
      "UI annotations",
      "CSS annotations",
      "Java annotations only",
      "SQL annotations"
    ],
    "correct": [0],
    "explanation": "UI annotations define behavior in Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is a tile in SAP Fiori Launchpad?",
    "options": [
      "A backend service",
      "A UI element to launch apps",
      "A database table",
      "A CSS file"
    ],
    "correct": [1],
    "explanation": "Tiles are clickable UI elements to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for navigation in Fiori?",
    "options": [
      "Semantic Object + Action",
      "Database schema",
      "HTML page",
      "CSS file"
    ],
    "correct": [0],
    "explanation": "Navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What is SAP CAP?",
    "options": [
      "Cloud Application Programming Model",
      "Central Admin Platform",
      "Core ABAP Processor",
      "Cloud Access Protocol"
    ],
    "correct": [0],
    "explanation": "CAP is Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "Which database is commonly used in SAP CAP?",
    "options": [
      "SAP HANA",
      "MySQL only",
      "MongoDB only",
      "SQLite only"
    ],
    "correct": [0],
    "explanation": "SAP CAP commonly uses SAP HANA database."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What does SAP BTP stand for?",
    "options": [
      "Business Technology Platform",
      "Basic Transfer Program",
      "Business Test Protocol",
      "Backend Transaction Platform"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which service is part of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows Server",
      "Linux Kernel",
      "Oracle DB only"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is part of SAP BTP."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is SAP Cloud Foundry used for?",
    "options": [
      "Running cloud applications",
      "Designing UI themes",
      "Managing hardware",
      "Writing ABAP reports"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is used to run cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What is a key feature of Cloud Foundry?",
    "options": [
      "Monolithic deployment",
      "Microservices deployment",
      "Offline execution",
      "Desktop application support only"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What does CDS in SAP CAP provide?",
    "options": [
      "UI design system",
      "Data modeling layer",
      "Operating system layer",
      "Network layer"
    ],
    "correct": [1],
    "explanation": "CDS provides data modeling in CAP."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What is Smart Controls in SAP Fiori?",
    "options": [
      "Manual UI coding",
      "Metadata-driven UI controls",
      "Database tables",
      "CSS frameworks"
    ],
    "correct": [1],
    "explanation": "Smart Controls are metadata-driven UI controls."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the benefit of SAP Fiori Elements?",
    "options": [
      "Manual coding of entire UI",
      "Faster app development using templates",
      "Hardware optimization",
      "Database tuning"
    ],
    "correct": [1],
    "explanation": "Fiori Elements speeds up development using predefined templates."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "What are annotations in SAP Fiori Elements used for?",
    "options": [
      "To define UI behavior and metadata",
      "To store database records",
      "To configure servers",
      "To design networks"
    ],
    "correct": [0],
    "explanation": "Annotations define UI behavior and metadata-driven features."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A database tool",
      "A central access point for apps",
      "A programming language",
      "A server OS"
    ],
    "correct": [1],
    "explanation": "Launchpad is the central entry point for SAP Fiori apps."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for Fiori navigation?",
    "options": [
      "Semantic Object and Action",
      "HTML page",
      "CSS file",
      "Database table"
    ],
    "correct": [0],
    "explanation": "Navigation uses semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What does SAP CAP stand for?",
    "options": [
      "Cloud Application Programming Model",
      "Central App Processing",
      "Cloud API Protocol",
      "Core Application Platform"
    ],
    "correct": [0],
    "explanation": "CAP stands for Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What is CDS used for in SAP CAP?",
    "options": [
      "Data modeling",
      "UI styling",
      "Server configuration",
      "Network routing"
    ],
    "correct": [0],
    "explanation": "CDS is used for defining data models."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transfer Program",
      "Backend Testing Platform",
      "Business Transaction Processor"
    ],
    "correct": [0],
    "explanation": "SAP BTP is Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which is a core service of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Android Studio",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is a core BTP service."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is Cloud Foundry in SAP BTP?",
    "options": [
      "A UI framework",
      "A cloud runtime environment",
      "A database tool",
      "A hardware system"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry is a runtime environment for cloud apps."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What architecture does Cloud Foundry support?",
    "options": [
      "Monolithic",
      "Microservices",
      "Single-tier",
      "Desktop-based"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What is the role of service layer in SAP CAP?",
    "options": [
      "UI rendering",
      "Exposing APIs and business logic",
      "Database storage only",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic via APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in Fiori Elements?",
    "options": [
      "Manually coded UI components",
      "Metadata-driven UI components",
      "Database tables",
      "Backend services"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated based on metadata."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is SAP Fiori Elements mainly used for?",
    "options": [
      "Manual UI coding",
      "Metadata-driven application development",
      "Server configuration",
      "Database tuning"
    ],
    "correct": [1],
    "explanation": "Fiori Elements uses metadata to generate UI automatically."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "Which layer provides annotations in Fiori Elements?",
    "options": [
      "UI layer",
      "Database layer",
      "Network layer",
      "Hardware layer"
    ],
    "correct": [1],
    "explanation": "Annotations are typically defined in the data/metadata layer."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A backend system",
      "A central entry point for apps",
      "A database engine",
      "A UI compiler"
    ],
    "correct": [1],
    "explanation": "Launchpad is the central entry point for SAP Fiori apps."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for app navigation in Fiori?",
    "options": [
      "Semantic Object and Action",
      "Database tables",
      "CSS files",
      "HTML pages"
    ],
    "correct": [0],
    "explanation": "Semantic Object + Action is required for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What is SAP CAP?",
    "options": [
      "Cloud Application Programming Model",
      "Central Application Processor",
      "Cloud API Platform",
      "Core Application Protocol"
    ],
    "correct": [0],
    "explanation": "CAP stands for Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What does CDS provide in CAP?",
    "options": [
      "UI rendering",
      "Data modeling",
      "Server monitoring",
      "Network routing"
    ],
    "correct": [1],
    "explanation": "CDS is used for defining data models."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transaction Processor",
      "Backend Testing Platform",
      "Business Transport Protocol"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which service is part of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Linux Kernel",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is a core service of SAP BTP."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is Cloud Foundry used for?",
    "options": [
      "Running cloud applications",
      "Designing UI themes",
      "Managing hardware",
      "Writing SQL queries"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is used to deploy and run cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What is a key advantage of Cloud Foundry?",
    "options": [
      "Monolithic deployment",
      "Microservices support",
      "Offline execution",
      "Hardware control"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What is the role of service layer in SAP CAP?",
    "options": [
      "UI rendering",
      "Exposing business logic as APIs",
      "Database storage only",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic via APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in Fiori Elements?",
    "options": [
      "Manually coded UI components",
      "Metadata-driven UI components",
      "Database tables",
      "Server scripts"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated using metadata."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the main advantage of SAP Fiori Elements?",
    "options": [
      "Faster development using templates",
      "Manual UI coding",
      "Database optimization",
      "Hardware control"
    ],
    "correct": [0],
    "explanation": "Fiori Elements speeds up development using predefined templates."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "What role do annotations play in Fiori Elements?",
    "options": [
      "Define UI behavior and metadata",
      "Store user passwords",
      "Manage hardware settings",
      "Control network traffic"
    ],
    "correct": [0],
    "explanation": "Annotations define UI behavior and metadata in Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A central access point for SAP apps",
      "A database tool",
      "A programming language",
      "A network protocol"
    ],
    "correct": [0],
    "explanation": "Launchpad is the central entry point for apps."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for navigation in SAP Fiori?",
    "options": [
      "Semantic Object and Action",
      "Database schema",
      "CSS file",
      "HTML page only"
    ],
    "correct": [0],
    "explanation": "Semantic Object and Action are required for navigation."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What does CAP stand for in SAP?",
    "options": [
      "Cloud Application Programming Model",
      "Central Access Platform",
      "Cloud API Processor",
      "Core Application Protocol"
    ],
    "correct": [0],
    "explanation": "CAP stands for Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What is CDS in SAP CAP?",
    "options": [
      "Core Data Services",
      "Cloud Deployment System",
      "Central Data Store",
      "Core Development Service"
    ],
    "correct": [0],
    "explanation": "CDS stands for Core Data Services used for data modeling."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transaction Processor",
      "Backend Transfer Protocol",
      "Business Testing Program"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which service is part of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Android Studio",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is part of SAP BTP services."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is SAP Cloud Foundry used for?",
    "options": [
      "Running cloud applications",
      "Designing UI themes",
      "Managing hardware",
      "Writing OS scripts"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is a runtime for cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What architecture does Cloud Foundry support?",
    "options": [
      "Monolithic",
      "Microservices",
      "Single-layer",
      "Desktop-based"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What is the role of service layer in CAP?",
    "options": [
      "UI rendering",
      "Exposing APIs and business logic",
      "Database storage only",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic via APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in Fiori Elements?",
    "options": [
      "Manually coded UI controls",
      "Metadata-driven UI controls",
      "Database tables",
      "Server scripts"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated using metadata."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the purpose of SAP Fiori Elements?",
    "options": [
      "To manually code every UI screen",
      "To generate apps using metadata and annotations",
      "To manage OS processes",
      "To configure hardware systems"
    ],
    "correct": [1],
    "explanation": "Fiori Elements generates UI using metadata and annotations."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "Which annotation type is commonly used in Fiori Elements?",
    "options": [
      "UI annotations",
      "CSS annotations",
      "SQL annotations",
      "HTML annotations"
    ],
    "correct": [0],
    "explanation": "UI annotations define UI behavior in Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A database engine",
      "A central entry point for SAP apps",
      "A programming language",
      "A network protocol"
    ],
    "correct": [1],
    "explanation": "Launchpad is the central entry point for applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for navigation in Fiori Launchpad?",
    "options": [
      "Semantic Object and Action",
      "Database tables",
      "CSS styles",
      "HTML pages"
    ],
    "correct": [0],
    "explanation": "Navigation uses Semantic Object and Action."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What is SAP CAP?",
    "options": [
      "Cloud Application Programming Model",
      "Central Application Processor",
      "Cloud Access Platform",
      "Core Application Protocol"
    ],
    "correct": [0],
    "explanation": "CAP stands for Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What is CDS in SAP CAP used for?",
    "options": [
      "Data modeling",
      "UI rendering",
      "Network routing",
      "Hardware control"
    ],
    "correct": [0],
    "explanation": "CDS is used for defining data models in CAP."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What does SAP BTP stand for?",
    "options": [
      "Business Technology Platform",
      "Basic Transfer Program",
      "Backend Testing Platform",
      "Business Transaction Processor"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which of the following is a core SAP BTP service?",
    "options": [
      "SAP HANA Cloud",
      "Windows Server",
      "Android OS",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is a core SAP BTP service."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is SAP Cloud Foundry used for?",
    "options": [
      "Deploying cloud applications",
      "Designing UI themes",
      "Managing hardware systems",
      "Writing database indexes"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is used to deploy and run cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "Which architecture is supported by Cloud Foundry?",
    "options": [
      "Monolithic architecture",
      "Microservices architecture",
      "Single-tier architecture",
      "Desktop architecture"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices-based architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What is the role of the service layer in CAP?",
    "options": [
      "UI rendering",
      "Exposing business logic via APIs",
      "Database storage only",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic as APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in SAP Fiori Elements?",
    "options": [
      "Manually coded UI components",
      "Metadata-driven UI components",
      "Database tables",
      "Backend scripts"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated using metadata."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the main purpose of metadata in SAP Fiori Elements?",
    "options": [
      "To define UI behavior and structure",
      "To store user sessions",
      "To manage hardware",
      "To configure networks"
    ],
    "correct": [0],
    "explanation": "Metadata defines UI behavior and structure in Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "Which framework is used by SAP Fiori Elements?",
    "options": [
      "SAPUI5",
      "Spring Boot",
      "Django",
      "AngularJS only"
    ],
    "correct": [0],
    "explanation": "Fiori Elements is built on SAPUI5."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A database tool",
      "A central entry point for applications",
      "A coding language",
      "A server OS"
    ],
    "correct": [1],
    "explanation": "Launchpad provides central access to SAP applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What does a tile in Launchpad represent?",
    "options": [
      "A database table",
      "A clickable app launcher",
      "A backend service",
      "A system log"
    ],
    "correct": [1],
    "explanation": "Tiles are used to launch applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What does CAP stand for in SAP?",
    "options": [
      "Cloud Application Programming Model",
      "Central Application Platform",
      "Cloud Access Protocol",
      "Core Application Processor"
    ],
    "correct": [0],
    "explanation": "CAP is Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What is CDS used for?",
    "options": [
      "Data modeling",
      "UI styling",
      "Network routing",
      "Server configuration"
    ],
    "correct": [0],
    "explanation": "CDS is used for defining data models."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transfer Program",
      "Backend Testing Platform",
      "Business Transaction Processor"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which service is part of SAP BTP?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Linux Kernel",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is part of SAP BTP services."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is SAP Cloud Foundry used for?",
    "options": [
      "Deploying cloud applications",
      "Designing UI themes",
      "Managing hardware",
      "Writing OS scripts"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is used to deploy cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What is a key feature of Cloud Foundry?",
    "options": [
      "Monolithic architecture",
      "Microservices architecture",
      "Single-layer design",
      "Offline execution only"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What does the service layer in CAP expose?",
    "options": [
      "UI themes",
      "Business logic as APIs",
      "Database tables only",
      "Operating system functions"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic via APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in SAP Fiori Elements?",
    "options": [
      "Hardcoded UI components",
      "Metadata-driven UI components",
      "Database tables",
      "Backend scripts"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated from metadata."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the main goal of SAP Fiori Elements?",
    "options": [
      "To replace SAP backend",
      "To speed up app development using templates",
      "To manage operating systems",
      "To design hardware systems"
    ],
    "correct": [1],
    "explanation": "Fiori Elements accelerates development using predefined templates."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "What drives SAP Fiori Elements applications?",
    "options": [
      "Database indexes",
      "Metadata and annotations",
      "CSS files",
      "Manual HTML coding"
    ],
    "correct": [1],
    "explanation": "Fiori Elements apps are driven by metadata and annotations."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What is SAP Fiori Launchpad?",
    "options": [
      "A database system",
      "A central entry point for SAP apps",
      "A programming language",
      "A cloud OS"
    ],
    "correct": [1],
    "explanation": "Launchpad is the central entry point for SAP applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What is required for navigation in Fiori?",
    "options": [
      "Semantic Object and Action",
      "Database tables",
      "CSS styles",
      "HTML pages"
    ],
    "correct": [0],
    "explanation": "Navigation requires semantic object and action."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What does SAP CAP stand for?",
    "options": [
      "Cloud Application Programming Model",
      "Central Application Platform",
      "Cloud Access Processor",
      "Core Application Protocol"
    ],
    "correct": [0],
    "explanation": "CAP is Cloud Application Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "What is CDS in SAP CAP?",
    "options": [
      "Core Data Services for modeling data",
      "Cloud Deployment System",
      "Central Data Store",
      "Core Development Service"
    ],
    "correct": [0],
    "explanation": "CDS is used for defining data models."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What is SAP BTP?",
    "options": [
      "Business Technology Platform",
      "Basic Transfer Program",
      "Backend Testing Platform",
      "Business Transaction Processor"
    ],
    "correct": [0],
    "explanation": "SAP BTP stands for Business Technology Platform."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which is a key SAP BTP service?",
    "options": [
      "SAP HANA Cloud",
      "Windows OS",
      "Android OS",
      "Oracle Forms"
    ],
    "correct": [0],
    "explanation": "SAP HANA Cloud is a core BTP service."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is Cloud Foundry used for?",
    "options": [
      "Running cloud applications",
      "Designing UI themes",
      "Managing hardware",
      "Writing SQL queries"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is a platform to run cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What architecture does Cloud Foundry support?",
    "options": [
      "Monolithic only",
      "Microservices architecture",
      "Single-layer architecture",
      "Desktop architecture"
    ],
    "correct": [1],
    "explanation": "Cloud Foundry supports microservices-based architecture."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What does the service layer in CAP expose?",
    "options": [
      "UI design",
      "Business logic as APIs",
      "Database only",
      "Network configuration"
    ],
    "correct": [1],
    "explanation": "Service layer exposes business logic via APIs."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What are Smart Controls in Fiori Elements?",
    "options": [
      "Hardcoded UI elements",
      "Metadata-driven UI components",
      "Database tables",
      "Server scripts"
    ],
    "correct": [1],
    "explanation": "Smart Controls are generated using metadata."
  },

  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux402",
    "question": "What is the role of annotations in SAP Fiori Elements?",
    "options": [
      "Define UI behavior and metadata",
      "Store database backups",
      "Manage hardware resources",
      "Control network traffic"
    ],
    "correct": [0],
    "explanation": "Annotations define UI behavior and structure in metadata-driven apps."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux402",
    "question": "Which layer primarily uses OData services in SAP Fiori?",
    "options": [
      "Frontend UI layer",
      "Backend service layer",
      "Network layer",
      "Hardware layer"
    ],
    "correct": [1],
    "explanation": "OData services are exposed from the backend service layer."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "ux403",
    "question": "What does a tile do in SAP Fiori Launchpad?",
    "options": [
      "Stores data",
      "Launches applications",
      "Manages database",
      "Runs background jobs"
    ],
    "correct": [1],
    "explanation": "Tiles are used to launch applications in Fiori Launchpad."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux403",
    "question": "What connects a tile to an application?",
    "options": [
      "Catalog",
      "Target Mapping",
      "Group",
      "Theme"
    ],
    "correct": [1],
    "explanation": "Target Mapping connects tiles to applications."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld200",
    "question": "What is SAP CAP used for?",
    "options": [
      "Cloud application development",
      "Hardware configuration",
      "Operating system design",
      "Network routing"
    ],
    "correct": [0],
    "explanation": "CAP is used for building cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld200",
    "question": "Which language is commonly used in SAP CAP?",
    "options": [
      "Node.js / Java",
      "C++ only",
      "Python only",
      "COBOL"
    ],
    "correct": [0],
    "explanation": "SAP CAP commonly uses Node.js and Java."
  },
  {
    "type": "mcq",
    "difficulty": "easy",
    "topic": "cld500",
    "question": "What does SAP BTP provide?",
    "options": [
      "Cloud platform services",
      "Operating system kernel",
      "Hardware drivers",
      "Networking cables"
    ],
    "correct": [0],
    "explanation": "SAP BTP provides cloud platform services."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld500",
    "question": "Which is part of SAP BTP architecture?",
    "options": [
      "Application runtime",
      "Keyboard driver",
      "Mouse firmware",
      "BIOS system"
    ],
    "correct": [0],
    "explanation": "BTP includes application runtime environments."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "cld410",
    "question": "What is Cloud Foundry primarily used for?",
    "options": [
      "Deploying applications",
      "Designing UI themes",
      "Writing spreadsheets",
      "Managing printers"
    ],
    "correct": [0],
    "explanation": "Cloud Foundry is used for deploying cloud applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld410",
    "question": "What is a key benefit of microservices in Cloud Foundry?",
    "options": [
      "Tight coupling",
      "Independent deployment",
      "Single deployment unit",
      "No scalability"
    ],
    "correct": [1],
    "explanation": "Microservices allow independent deployment and scaling."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "What does CDS primarily define in SAP CAP?",
    "options": [
      "UI layouts",
      "Data models",
      "Network rules",
      "Hardware configs"
    ],
    "correct": [1],
    "explanation": "CDS defines data models in CAP."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "What happens if annotations are missing in Fiori Elements?",
    "options": [
      "App runs faster",
      "UI cannot be generated properly",
      "Database improves",
      "Server crashes"
    ],
    "correct": [1],
    "explanation": "Without annotations, Fiori Elements cannot generate UI correctly."
  },



  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is SAPUI5?",
    "options": ["Database", "Frontend Framework", "OS", "Server"],
    "correct": [1],
    "explanation": "SAPUI5 is SAP's JavaScript UI framework."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which pattern is primarily used in SAPUI5?",
    "options": ["MVC", "Singleton", "Factory", "Observer"],
    "correct": [0],
    "explanation": "SAPUI5 applications are commonly built using MVC architecture."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which file contains application metadata in SAPUI5?",
    "options": ["manifest.json", "package.json", "config.xml", "metadata.xml"],
    "correct": [0],
    "explanation": "manifest.json contains app configuration and metadata."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which view type is most commonly used in SAPUI5?",
    "options": ["HTML", "XML", "JSON", "JS"],
    "correct": [1],
    "explanation": "XML Views are the most commonly used view type."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which model is used for OData services?",
    "options": ["JSONModel", "XMLModel", "ODataModel", "ResourceModel"],
    "correct": [2],
    "explanation": "ODataModel is used to consume OData services."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is the purpose of a Controller?",
    "options": ["Store Data", "Handle UI Logic", "Create Database", "Deploy App"],
    "correct": [1],
    "explanation": "Controllers handle events and business logic."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which method is used to get a control by ID in a controller?",
    "options": ["getElement", "byId", "findControl", "getControl"],
    "correct": [1],
    "explanation": "byId() is used to access controls inside a view."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is data binding in SAPUI5?",
    "options": ["Database Join", "Linking UI Controls to Data", "API Call", "Deployment"],
    "correct": [1],
    "explanation": "Data binding connects UI controls with model data."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which binding updates UI automatically when model changes?",
    "options": ["One Time", "One Way", "Two Way", "Manual"],
    "correct": [2],
    "explanation": "Two-way binding synchronizes model and UI."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which model is mainly used for i18n?",
    "options": ["JSONModel", "ResourceModel", "ODataModel", "XMLModel"],
    "correct": [1],
    "explanation": "ResourceModel loads translation texts."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which file stores multilingual texts?",
    "options": ["manifest.json", "i18n.properties", "Component.js", "index.html"],
    "correct": [1],
    "explanation": "i18n.properties stores translatable texts."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which SAPUI5 control displays tabular data?",
    "options": ["Button", "Input", "Table", "Dialog"],
    "correct": [2],
    "explanation": "Table control is used to display tabular data."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is a Fragment?",
    "options": ["Reusable UI Part", "Database Object", "Service", "Model"],
    "correct": [0],
    "explanation": "Fragments are reusable UI pieces without controllers."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which lifecycle method runs after rendering?",
    "options": ["onInit", "onExit", "onAfterRendering", "onBeforeRendering"],
    "correct": [2],
    "explanation": "onAfterRendering executes after UI rendering."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which lifecycle method is called once when controller is instantiated?",
    "options": ["onInit", "onExit", "onRender", "onDestroy"],
    "correct": [0],
    "explanation": "onInit is called during controller initialization."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is routing used for?",
    "options": ["Database Access", "Navigation", "Translation", "Deployment"],
    "correct": [1],
    "explanation": "Routing enables navigation between views."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Where are routes configured?",
    "options": ["Component.js only", "manifest.json", "index.html", "Controller"],
    "correct": [1],
    "explanation": "Routing configuration is maintained in manifest.json."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is a formatter used for?",
    "options": ["Data Transformation", "Deployment", "Routing", "Security"],
    "correct": [0],
    "explanation": "Formatters modify data before displaying it."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which control is used for user text input?",
    "options": ["Input", "Button", "Label", "Image"],
    "correct": [0],
    "explanation": "Input control allows text entry."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which event is triggered when a button is pressed?",
    "options": ["change", "click", "press", "submit"],
    "correct": [2],
    "explanation": "The press event is triggered when a button is clicked."
  }
  ,
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is the purpose of Component.js?",
    "options": ["Store CSS", "Application Bootstrap", "Database Access", "OData Service"],
    "correct": [1],
    "explanation": "Component.js initializes the application and loads manifest.json."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which file is loaded first in a UI5 application?",
    "options": ["View", "Controller", "index.html", "manifest.json"],
    "correct": [2],
    "explanation": "index.html bootstraps SAPUI5."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which model is best for temporary client-side data?",
    "options": ["ODataModel", "JSONModel", "XMLModel", "ResourceModel"],
    "correct": [1],
    "explanation": "JSONModel stores local client-side data."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is aggregation binding?",
    "options": ["Binding single property", "Binding list of items", "Binding events", "Binding routes"],
    "correct": [1],
    "explanation": "Aggregation binding is used for tables, lists, and other collections."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which binding syntax is correct?",
    "options": ["{Name}", "[Name]", "(Name)", "<Name>"],
    "correct": [0],
    "explanation": "Curly braces are used for binding."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which method retrieves a model from a view?",
    "options": ["getData()", "getModel()", "fetchModel()", "loadModel()"],
    "correct": [1],
    "explanation": "getModel() returns the assigned model."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which lifecycle method is called before rendering?",
    "options": ["onBeforeRendering", "onInit", "onExit", "onReady"],
    "correct": [0],
    "explanation": "onBeforeRendering executes before view rendering."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which control is used to display a popup dialog?",
    "options": ["Panel", "Dialog", "HBox", "VBox"],
    "correct": [1],
    "explanation": "Dialog is used for popup windows."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is the advantage of fragments?",
    "options": ["Database Storage", "Reusability", "Security", "Deployment"],
    "correct": [1],
    "explanation": "Fragments promote UI reuse."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which method loads XML Fragment?",
    "options": ["Fragment.load", "loadXML", "createFragment", "XML.load"],
    "correct": [0],
    "explanation": "Fragment.load() loads fragments asynchronously."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is the use of formatter.js?",
    "options": ["Routing", "Formatting Data", "Deployment", "Translation"],
    "correct": [1],
    "explanation": "Formatter functions transform data before display."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which control supports responsive tables?",
    "options": ["sap.ui.table.Table", "sap.m.Table", "Grid", "Tree"],
    "correct": [1],
    "explanation": "sap.m.Table is mobile responsive."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which annotation creates Line Items in Fiori Elements?",
    "options": ["UI.LineItem", "UI.HeaderInfo", "UI.Chart", "UI.FieldGroup"],
    "correct": [0],
    "explanation": "UI.LineItem defines columns."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which annotation defines object page title?",
    "options": ["UI.Chart", "UI.LineItem", "UI.HeaderInfo", "UI.Hidden"],
    "correct": [2],
    "explanation": "HeaderInfo controls title information."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is OData?",
    "options": ["Database", "REST-based Protocol", "Framework", "Library"],
    "correct": [1],
    "explanation": "OData is a REST-based data protocol."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which HTTP method creates data?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "correct": [1],
    "explanation": "POST creates new records."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which HTTP method deletes data?",
    "options": ["POST", "PATCH", "DELETE", "GET"],
    "correct": [2],
    "explanation": "DELETE removes records."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Difference between PUT and PATCH?",
    "options": ["No Difference", "PUT updates complete entity, PATCH partial", "PATCH deletes", "PUT creates"],
    "correct": [1],
    "explanation": "PUT replaces entity while PATCH updates specific fields."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which file contains OData metadata?",
    "options": ["manifest.json", "metadata.xml", "Component.js", "service.js"],
    "correct": [1],
    "explanation": "Metadata defines entity structures."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which URL retrieves metadata?",
    "options": ["/$metadata", "/metadata", "/$service", "/schema"],
    "correct": [0],
    "explanation": "OData metadata endpoint is /$metadata."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is an Entity Type?",
    "options": ["Single Business Object Structure", "Collection", "Database", "Controller"],
    "correct": [0],
    "explanation": "Entity Type defines attributes of an object."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is an Entity Set?",
    "options": ["Single Record", "Collection of Entity Types", "Controller", "View"],
    "correct": [1],
    "explanation": "Entity Set contains multiple entities."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is Association?",
    "options": ["Navigation Relationship", "Database", "View", "Fragment"],
    "correct": [0],
    "explanation": "Associations link entities."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Purpose of Navigation Property?",
    "options": ["Move between related entities", "Routing", "Deployment", "Authentication"],
    "correct": [0],
    "explanation": "Navigation properties access related entities."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which class is used for OData V2?",
    "options": ["ODataModel V2", "JSONModel", "XMLModel", "ResourceModel"],
    "correct": [0],
    "explanation": "sap.ui.model.odata.v2.ODataModel is used."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is Mock Server used for?",
    "options": ["Frontend Testing Without Backend", "Deployment", "Authorization", "Database"],
    "correct": [0],
    "explanation": "Mock server simulates backend responses."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which file generally stores mock data?",
    "options": ["mockdata JSON", "manifest.json", "Controller", "View"],
    "correct": [0],
    "explanation": "Mock data resides in JSON files."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "What is i18n?",
    "options": ["Security", "Internationalization", "Deployment", "OData"],
    "correct": [1],
    "explanation": "i18n enables multilingual applications."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which model supports translations?",
    "options": ["JSONModel", "ResourceModel", "XMLModel", "ODataModel"],
    "correct": [1],
    "explanation": "ResourceModel manages translations."
  },
  {
    "type": "mcq",
    "topic": "ux400",
    "question": "Which tool is used for SAPUI5 development in cloud?",
    "options": ["BAS", "Notepad", "MS Paint", "Excel"],
    "correct": [0],
    "explanation": "Business Application Studio is SAP's cloud IDE."
  },

  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is the purpose of sap.ui.define()?",
    "options": ["Routing", "Module Definition", "Data Binding", "Deployment"],
    "correct": [1],
    "explanation": "sap.ui.define() defines and loads modules asynchronously."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which control is used to display busy indication?",
    "options": ["BusyDialog", "Dialog", "MessageBox", "Popover"],
    "correct": [0],
    "explanation": "BusyDialog informs users that processing is ongoing."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which model method updates backend data?",
    "options": ["create", "read", "getData", "loadData"],
    "correct": [0],
    "explanation": "create() sends POST requests to backend."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which OData operation retrieves data?",
    "options": ["POST", "DELETE", "GET", "PATCH"],
    "correct": [2],
    "explanation": "GET is used to read data."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is a named model?",
    "options": ["Multiple Models with Identifiers", "Database Model", "XML View", "Fragment"],
    "correct": [0],
    "explanation": "Named models allow multiple models in the same application."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is the use of MessageToast?",
    "options": ["Long Popup", "Short Notification", "Routing", "Authentication"],
    "correct": [1],
    "explanation": "MessageToast displays brief messages."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which event occurs when route pattern matches?",
    "options": ["routeMatched", "patternMatched", "matched", "routeFound"],
    "correct": [1],
    "explanation": "patternMatched is triggered when route parameters match."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which aggregation is commonly used in sap.m.Table?",
    "options": ["rows", "items", "cells", "records"],
    "correct": [1],
    "explanation": "sap.m.Table binds data using items aggregation."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is expression binding?",
    "options": ["Direct JavaScript", "Calculated Binding", "Routing Logic", "OData Query"],
    "correct": [1],
    "explanation": "Expression binding allows simple calculations in XML."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which library contains responsive controls?",
    "options": ["sap.ui.table", "sap.m", "sap.viz", "sap.f"],
    "correct": [1],
    "explanation": "sap.m contains mobile-responsive controls."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation controls filter fields in Fiori Elements?",
    "options": ["UI.SelectionFields", "UI.LineItem", "UI.Chart", "UI.Facet"],
    "correct": [0],
    "explanation": "SelectionFields determine filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation creates value help?",
    "options": ["Common.ValueList", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "Common.ValueList provides value help functionality."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation hides a field?",
    "options": ["UI.Hidden", "UI.Chart", "UI.FieldGroup", "UI.HeaderInfo"],
    "correct": [0],
    "explanation": "UI.Hidden suppresses field display."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which parameter expands navigation properties?",
    "options": ["$filter", "$orderby", "$expand", "$count"],
    "correct": [2],
    "explanation": "$expand fetches related entities."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which parameter limits returned fields?",
    "options": ["$expand", "$filter", "$select", "$top"],
    "correct": [2],
    "explanation": "$select reduces payload by returning only required fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does $top=10 do?",
    "options": ["Returns First 10 Records", "Deletes 10 Records", "Updates 10 Records", "Counts 10 Records"],
    "correct": [0],
    "explanation": "$top limits result size."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does $skip=20 do?",
    "options": ["Skips First 20 Records", "Deletes Records", "Filters Records", "Groups Records"],
    "correct": [0],
    "explanation": "$skip is used for paging."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status indicates successful creation?",
    "options": ["200", "201", "400", "404"],
    "correct": [1],
    "explanation": "201 Created indicates successful creation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status indicates unauthorized access?",
    "options": ["200", "201", "401", "500"],
    "correct": [2],
    "explanation": "401 means authentication is required."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status indicates resource not found?",
    "options": ["500", "403", "404", "302"],
    "correct": [2],
    "explanation": "404 means requested resource does not exist."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which lifecycle method should be used to detach event handlers?",
    "options": ["onInit", "onExit", "onBeforeRendering", "onAfterRendering"],
    "correct": [1],
    "explanation": "Cleanup should occur in onExit."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 control supports hierarchical data?",
    "options": ["Tree", "Button", "Input", "Dialog"],
    "correct": [0],
    "explanation": "Tree displays hierarchical structures."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which layout is used for master-detail applications?",
    "options": ["VBox", "HBox", "FlexibleColumnLayout", "Grid"],
    "correct": [2],
    "explanation": "FlexibleColumnLayout supports master-detail-detail layouts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is preload.js used for?",
    "options": ["Performance Optimization", "Routing", "Authorization", "Translation"],
    "correct": [0],
    "explanation": "Preload files reduce application load time."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which tool is commonly used to inspect bindings?",
    "options": ["Browser DevTools", "Excel", "Word", "Paint"],
    "correct": [0],
    "explanation": "Developer tools help inspect bindings and network requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file contains routing configuration in modern UI5 apps?",
    "options": ["manifest.json", "Component.js", "index.html", "view.xml"],
    "correct": [0],
    "explanation": "Routing configuration is generally maintained in manifest.json."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation creates charts in Fiori Elements?",
    "options": ["UI.Chart", "UI.LineItem", "UI.Hidden", "UI.SelectionFields"],
    "correct": [0],
    "explanation": "UI.Chart defines analytical charts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is batch processing in OData?",
    "options": ["Multiple Requests in One Call", "Routing", "Deployment", "Translation"],
    "correct": [0],
    "explanation": "Batch requests improve performance."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method updates existing records in ODataModel?",
    "options": ["update", "create", "read", "remove"],
    "correct": [0],
    "explanation": "update() performs PUT/PATCH operations."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method deletes an entity in ODataModel?",
    "options": ["destroy", "remove", "deleteEntity", "erase"],
    "correct": [1],
    "explanation": "remove() deletes an entity."
  },

  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which object is responsible for navigation in SAPUI5?",
    "options": ["Model", "Router", "Fragment", "View"],
    "correct": [1],
    "explanation": "Router handles navigation between views."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which method is used to get Router instance inside Controller?",
    "options": ["getRouter()", "UIComponent.getRouterFor(this)", "router()", "navTo()"],
    "correct": [1],
    "explanation": "UIComponent.getRouterFor(this) returns router instance."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is the purpose of targets in routing?",
    "options": ["Store Data", "Map Routes to Views", "Create OData", "Handle Security"],
    "correct": [1],
    "explanation": "Targets determine which views are displayed."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which file usually contains routing configuration?",
    "options": ["Component.js", "manifest.json", "index.html", "controller.js"],
    "correct": [1],
    "explanation": "Modern UI5 apps define routing in manifest.json."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is a route pattern?",
    "options": ["Database Query", "URL Pattern", "OData Path", "CSS Rule"],
    "correct": [1],
    "explanation": "Route pattern maps URLs to views."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which parameter passes values through URL navigation?",
    "options": ["Route Arguments", "Metadata", "Fragment", "Binding"],
    "correct": [0],
    "explanation": "Arguments allow passing values between views."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is the advantage of lazy loading views?",
    "options": ["Security", "Performance", "Translation", "Authorization"],
    "correct": [1],
    "explanation": "Views load only when required."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Fragments do not have their own?",
    "options": ["XML", "Controls", "Controller", "Layout"],
    "correct": [2],
    "explanation": "Fragments do not have independent controllers."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "Which fragment type is most common?",
    "options": ["XML Fragment", "JSON Fragment", "HTML Fragment", "CSS Fragment"],
    "correct": [0],
    "explanation": "XML Fragments are widely used."
  },
  {
    "type": "mcq",
    "difficulty": "medium",
    "topic": "ux400",
    "question": "What is the benefit of fragments?",
    "options": ["Faster Database", "Code Reusability", "Deployment", "Security"],
    "correct": [1],
    "explanation": "Fragments help reuse UI sections."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Why should dialogs be loaded asynchronously?",
    "options": ["Reduce Initial Load", "Security", "Translation", "Authorization"],
    "correct": [0],
    "explanation": "Async loading improves performance."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a dependency in Fragment.load()?",
    "options": ["Required Module", "Database", "Route", "Metadata"],
    "correct": [0],
    "explanation": "Dependencies must be loaded before use."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which lifecycle method is ideal for attaching route events?",
    "options": ["onInit", "onExit", "onAfterRendering", "onBeforeRendering"],
    "correct": [0],
    "explanation": "Route handlers are usually attached in onInit."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of Mock Server?",
    "options": ["Simulate Backend", "Deploy App", "Debug CSS", "Authentication"],
    "correct": [0],
    "explanation": "Mock Server simulates OData backend services."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file is required by Mock Server for metadata simulation?",
    "options": ["metadata.xml", "manifest.json", "Component.js", "index.html"],
    "correct": [0],
    "explanation": "Metadata describes service structure."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Where are mock JSON files generally stored?",
    "options": ["webapp/localService/mockdata", "node_modules", "dist", "test-output"],
    "correct": [0],
    "explanation": "Mock data resides in localService/mockdata."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP method corresponds to CREATE?",
    "options": ["GET", "POST", "PATCH", "DELETE"],
    "correct": [1],
    "explanation": "POST creates new records."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP method corresponds to UPDATE?",
    "options": ["PATCH/PUT", "GET", "DELETE", "POST"],
    "correct": [0],
    "explanation": "PATCH and PUT are update operations."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP method corresponds to DELETE?",
    "options": ["REMOVE", "DELETE", "DESTROY", "DROP"],
    "correct": [1],
    "explanation": "DELETE removes resources."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of Component.js?",
    "options": ["Application Initialization", "Database Access", "Security", "Routing Only"],
    "correct": [0],
    "explanation": "Component.js bootstraps application logic."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method is used to initialize Router in Component.js?",
    "options": ["initialize()", "start()", "navTo()", "route()"],
    "correct": [0],
    "explanation": "Router.initialize() activates routing."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does sap.ui.require() do?",
    "options": ["Loads Modules", "Creates Models", "Deploys App", "Creates Views"],
    "correct": [0],
    "explanation": "Used for asynchronous module loading."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is preload generation?",
    "options": ["Bundling Resources", "Routing", "Translation", "Security"],
    "correct": [0],
    "explanation": "Resources are bundled for faster loading."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file improves startup performance?",
    "options": ["Component-preload.js", "manifest.json", "i18n.properties", "view.xml"],
    "correct": [0],
    "explanation": "Preload bundles resources."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which browser tab is most useful for checking OData requests?",
    "options": ["Network", "Elements", "Sources", "Application"],
    "correct": [0],
    "explanation": "Network tab displays backend calls."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which browser tab is useful for JavaScript debugging?",
    "options": ["Sources", "Network", "Elements", "Performance"],
    "correct": [0],
    "explanation": "Sources tab helps debug JavaScript."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 tool displays control hierarchy?",
    "options": ["Support Assistant", "Excel", "Gateway Client", "SE80"],
    "correct": [0],
    "explanation": "Support Assistant helps analyze applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which transaction is commonly used to test OData services?",
    "options": ["/IWFND/GW_CLIENT", "SE11", "SE38", "SU01"],
    "correct": [0],
    "explanation": "Gateway Client tests OData services."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of metadata caching?",
    "options": ["Improve Performance", "Authorization", "Translation", "Deployment"],
    "correct": [0],
    "explanation": "Caching reduces repeated metadata requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which approach reduces OData payload size most effectively?",
    "options": ["$select", "$expand", "$batch", "$metadata"],
    "correct": [0],
    "explanation": "$select fetches only required fields."
  },

  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation defines columns in a Fiori Elements List Report?",
    "options": ["UI.LineItem", "UI.Chart", "UI.Facet", "UI.HeaderInfo"],
    "correct": [0],
    "explanation": "UI.LineItem controls columns displayed in List Reports."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation controls filter bar fields?",
    "options": ["UI.SelectionFields", "UI.LineItem", "UI.Hidden", "UI.Chart"],
    "correct": [0],
    "explanation": "SelectionFields define filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation defines object page sections?",
    "options": ["UI.Facets", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "Facets create sections on object pages."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation creates a field group?",
    "options": ["UI.FieldGroup", "UI.Chart", "UI.Hidden", "UI.Importance"],
    "correct": [0],
    "explanation": "FieldGroup groups related fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation is used for value help?",
    "options": ["Common.ValueList", "UI.Chart", "UI.LineItem", "UI.FieldGroup"],
    "correct": [0],
    "explanation": "ValueList provides F4/value help functionality."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation hides a field from UI?",
    "options": ["UI.Hidden", "UI.Chart", "UI.HeaderInfo", "UI.SelectionFields"],
    "correct": [0],
    "explanation": "UI.Hidden suppresses display."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation controls importance on responsive screens?",
    "options": ["UI.Importance", "UI.Hidden", "UI.Chart", "UI.LineItem"],
    "correct": [0],
    "explanation": "Importance determines field priority."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation is used to create analytical charts?",
    "options": ["UI.Chart", "UI.Hidden", "UI.FieldGroup", "UI.Facet"],
    "correct": [0],
    "explanation": "UI.Chart defines chart configuration."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation controls object page title information?",
    "options": ["UI.HeaderInfo", "UI.Chart", "UI.LineItem", "UI.Hidden"],
    "correct": [0],
    "explanation": "HeaderInfo defines title and description."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Draft-enabled application?",
    "options": ["Supports Temporary Saved Changes", "PDF Generator", "Report App", "Static Application"],
    "correct": [0],
    "explanation": "Draft applications allow saving unfinished changes."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData parameter filters records?",
    "options": ["$filter", "$expand", "$select", "$skip"],
    "correct": [0],
    "explanation": "$filter restricts returned data."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData parameter sorts records?",
    "options": ["$orderby", "$filter", "$top", "$expand"],
    "correct": [0],
    "explanation": "$orderby sorts data."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData parameter returns related entities?",
    "options": ["$expand", "$select", "$top", "$skip"],
    "correct": [0],
    "explanation": "$expand retrieves navigation properties."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData parameter limits number of records?",
    "options": ["$top", "$filter", "$expand", "$count"],
    "correct": [0],
    "explanation": "$top limits record count."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does $count return?",
    "options": ["Record Count", "Filtered Data", "Metadata", "Association"],
    "correct": [0],
    "explanation": "Returns total number of entities."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which Smart Control automatically generates UI from metadata?",
    "options": ["SmartField", "Button", "HBox", "VBox"],
    "correct": [0],
    "explanation": "SmartField uses metadata and annotations."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which Smart Control creates dynamic tables?",
    "options": ["SmartTable", "List", "Grid", "Panel"],
    "correct": [0],
    "explanation": "SmartTable generates tables automatically."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which Smart Control generates filter bars?",
    "options": ["SmartFilterBar", "SearchField", "Input", "ComboBox"],
    "correct": [0],
    "explanation": "SmartFilterBar creates filters from metadata."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the advantage of Smart Controls?",
    "options": ["Less Coding", "More CSS", "Database Creation", "Authorization"],
    "correct": [0],
    "explanation": "Smart Controls reduce manual UI coding."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which control is commonly used for KPI cards?",
    "options": ["NumericContent", "Button", "Input", "Dialog"],
    "correct": [0],
    "explanation": "NumericContent displays KPI values."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of semantic colors?",
    "options": ["Business Meaning", "Performance", "Security", "Routing"],
    "correct": [0],
    "explanation": "Colors convey status and business significance."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which layout is preferred for analytical overview pages?",
    "options": ["OVP", "VBox", "HBox", "Panel"],
    "correct": [0],
    "explanation": "Overview Page provides analytical dashboards."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is OVP in SAP Fiori?",
    "options": ["Overview Page", "Object Value Page", "OData View Provider", "Online View Processor"],
    "correct": [0],
    "explanation": "OVP stands for Overview Page."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation is commonly used for KPIs?",
    "options": ["UI.DataPoint", "UI.LineItem", "UI.Hidden", "UI.Chart"],
    "correct": [0],
    "explanation": "DataPoint defines KPI information."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is intent-based navigation?",
    "options": ["Semantic Navigation", "Database Access", "Data Binding", "Routing Pattern"],
    "correct": [0],
    "explanation": "Intent-based navigation uses semantic objects and actions."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which component handles intent-based navigation?",
    "options": ["CrossApplicationNavigation", "Router", "Fragment", "Model"],
    "correct": [0],
    "explanation": "CrossApplicationNavigation service is used."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of semantic objects?",
    "options": ["Business Navigation", "Database Tables", "CSS Classes", "Metadata"],
    "correct": [0],
    "explanation": "Semantic objects enable app-to-app navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which launchpad service resolves target mappings?",
    "options": ["Target Resolution", "Routing", "Binding", "Deployment"],
    "correct": [0],
    "explanation": "Target Resolution maps intents to applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which Fiori app type requires minimum custom coding?",
    "options": ["Fiori Elements", "Freestyle UI5", "MVC App", "JS View"],
    "correct": [0],
    "explanation": "Fiori Elements is metadata driven."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the biggest advantage of Fiori Elements?",
    "options": ["Rapid Development", "Database Access", "CSS Styling", "Authentication"],
    "correct": [0],
    "explanation": "Fiori Elements significantly reduces development effort."
  },


  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the primary purpose of CDS Views?",
    "options": ["UI Design", "Data Modeling", "Routing", "Deployment"],
    "correct": [1],
    "explanation": "CDS Views provide semantic data models."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which keyword defines a CDS View Entity?",
    "options": ["define view entity", "create view", "entity set", "define table"],
    "correct": [0],
    "explanation": "Modern CDS uses define view entity."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation exposes CDS as OData?",
    "options": ["@OData.publish:true", "@UI.lineItem", "@Search.searchable", "@EndUserText"],
    "correct": [0],
    "explanation": "OData.publish generates service exposure."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which CDS annotation makes an entity searchable?",
    "options": ["@Search.searchable", "@UI.chart", "@Consumption", "@Analytics"],
    "correct": [0],
    "explanation": "Searchable enables enterprise search."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation provides user-friendly labels?",
    "options": ["@EndUserText.label", "@UI.lineItem", "@ObjectModel", "@Search"],
    "correct": [0],
    "explanation": "EndUserText.label defines display labels."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation marks a field as mandatory?",
    "options": ["@Common.FieldControl", "@UI.Hidden", "@Search", "@Analytics"],
    "correct": [0],
    "explanation": "FieldControl can enforce mandatory fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is CAP?",
    "options": ["Cloud Application Programming Model", "Cloud Access Protocol", "Custom Application Process", "Core ABAP Platform"],
    "correct": [0],
    "explanation": "CAP is SAP's framework for cloud-native applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which languages are supported in CAP?",
    "options": ["Node.js and Java", "Python and PHP", "Ruby and Go", "C++ and Rust"],
    "correct": [0],
    "explanation": "CAP officially supports Node.js and Java."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file contains CDS definitions in CAP?",
    "options": [".cds", ".json", ".xml", ".js"],
    "correct": [0],
    "explanation": "CDS models are stored in .cds files."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which folder contains CAP services?",
    "options": ["srv", "db", "app", "test"],
    "correct": [0],
    "explanation": "Service definitions are stored in srv folder."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which folder contains data models in CAP?",
    "options": ["db", "srv", "app", "webapp"],
    "correct": [0],
    "explanation": "Database models reside in db folder."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is an Adaptation Project?",
    "options": ["Extend Standard Fiori Apps", "Database Upgrade", "Gateway Service", "CDS Optimization"],
    "correct": [0],
    "explanation": "Adaptation Projects customize standard SAP apps."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which tool is used to create Adaptation Projects?",
    "options": ["SAP Business Application Studio", "SE80", "HANA Studio", "Gateway Client"],
    "correct": [0],
    "explanation": "BAS supports adaptation project creation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Controller Extension?",
    "options": ["Extend Standard Controller Logic", "Database Extension", "CDS Extension", "Routing Extension"],
    "correct": [0],
    "explanation": "Controller extensions add custom behavior."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is an Extension Point?",
    "options": ["Placeholder for Custom Content", "Database Hook", "OData Endpoint", "CDS Entity"],
    "correct": [0],
    "explanation": "Extension points allow insertion of custom UI."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which manifest section contains data sources?",
    "options": ["sap.app", "sap.ui5", "sap.fiori", "sap.cloud"],
    "correct": [0],
    "explanation": "Data sources are configured under sap.app."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which manifest section contains models?",
    "options": ["sap.ui5", "sap.app", "sap.cloud", "sap.platform"],
    "correct": [0],
    "explanation": "Models are defined under sap.ui5."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is SAP Launchpad?",
    "options": ["Central Entry Point for Apps", "Database", "Framework", "CDS Tool"],
    "correct": [0],
    "explanation": "Launchpad provides access to business applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Catalog in Launchpad?",
    "options": ["Collection of Apps", "Database Table", "CDS View", "Fragment"],
    "correct": [0],
    "explanation": "Catalogs contain app references."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Group in Launchpad?",
    "options": ["Visible App Collection", "Database Cluster", "Role", "OData Service"],
    "correct": [0],
    "explanation": "Groups organize apps for users."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Tile?",
    "options": ["Launchpad Application Shortcut", "Database View", "Fragment", "CDS Entity"],
    "correct": [0],
    "explanation": "Tiles represent applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is Target Mapping?",
    "options": ["Maps Intent to App", "Database Mapping", "CDS Mapping", "Annotation Mapping"],
    "correct": [0],
    "explanation": "Target mapping resolves navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is SAP BTP?",
    "options": ["Business Technology Platform", "Business Tool Provider", "Backend Transfer Protocol", "Business Template Package"],
    "correct": [0],
    "explanation": "BTP is SAP's cloud platform."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which IDE is recommended for SAPUI5 on BTP?",
    "options": ["Business Application Studio", "SE80", "VS Code Only", "NetBeans"],
    "correct": [0],
    "explanation": "BAS is SAP's cloud IDE."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is Cloud Foundry?",
    "options": ["PaaS Environment", "Database", "Framework", "Gateway"],
    "correct": [0],
    "explanation": "Cloud Foundry is a platform-as-a-service runtime."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which command builds an MTA application?",
    "options": ["mbt build", "npm install", "cds watch", "ui5 serve"],
    "correct": [0],
    "explanation": "mbt build creates MTAR archives."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is an MTAR file?",
    "options": ["Deployment Archive", "Metadata File", "CDS File", "Annotation File"],
    "correct": [0],
    "explanation": "MTAR packages applications for deployment."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which service handles authentication on BTP?",
    "options": ["XSUAA", "Destination", "Connectivity", "HTML5 Repo"],
    "correct": [0],
    "explanation": "XSUAA provides authentication and authorization."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Destination Service?",
    "options": ["External System Connectivity", "Database", "Launchpad", "Annotation Service"],
    "correct": [0],
    "explanation": "Destinations manage external connections."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is HTML5 Application Repository used for?",
    "options": ["Hosting UI Applications", "Database Storage", "CDS Models", "Annotations"],
    "correct": [0],
    "explanation": "HTML5 Repository stores deployed UI applications."
  },




  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData version is most commonly used in SAPUI5 applications?",
    "options": ["V1", "V2", "V3", "V5"],
    "correct": [1],
    "explanation": "OData V2 is still widely used in SAPUI5 applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData version is preferred for new SAP developments?",
    "options": ["V1", "V2", "V4", "V3"],
    "correct": [2],
    "explanation": "SAP recommends OData V4 for modern applications."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData query option filters records?",
    "options": ["$expand", "$filter", "$count", "$top"],
    "correct": [1],
    "explanation": "$filter restricts the returned records."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which OData query option sorts records?",
    "options": ["$orderby", "$expand", "$select", "$top"],
    "correct": [0],
    "explanation": "$orderby sorts records."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is ETag used for?",
    "options": ["Caching and Concurrency", "Authentication", "Routing", "Deployment"],
    "correct": [0],
    "explanation": "ETag prevents conflicting updates."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is optimistic locking?",
    "options": ["Concurrency Control", "Data Binding", "Navigation", "Routing"],
    "correct": [0],
    "explanation": "ETags are commonly used for optimistic locking."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is Draft Handling in SAP?",
    "options": ["Temporary Save Mechanism", "Database Backup", "Routing", "Deployment"],
    "correct": [0],
    "explanation": "Draft allows users to save incomplete changes."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which framework supports draft applications natively?",
    "options": ["RAP", "SEGW", "BOPF Only", "Gateway Client"],
    "correct": [0],
    "explanation": "RAP supports draft-enabled business objects."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does RAP stand for?",
    "options": ["RESTful ABAP Programming Model", "Remote Access Platform", "Rapid ABAP Processing", "REST ABAP Protocol"],
    "correct": [0],
    "explanation": "RAP is RESTful ABAP Programming Model."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is RAP mainly used for?",
    "options": ["Building Modern SAP Services", "CSS Styling", "UI Fragment Creation", "Routing"],
    "correct": [0],
    "explanation": "RAP is SAP's strategic programming model."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is a Behavior Definition in RAP?",
    "options": ["Business Logic Definition", "CSS Definition", "Routing Rule", "Annotation"],
    "correct": [0],
    "explanation": "Behavior Definitions define operations and business logic."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which RAP layer contains implementation code?",
    "options": ["Behavior Implementation", "CDS Consumption", "Metadata Extension", "Projection View"],
    "correct": [0],
    "explanation": "Business logic resides in Behavior Implementation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "CAP is mainly targeted for?",
    "options": ["Cloud Development", "GUI Development", "ALV Reports", "Batch Jobs"],
    "correct": [0],
    "explanation": "CAP is SAP's cloud-native programming model."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which command starts a CAP application locally?",
    "options": ["cds watch", "npm start-ui5", "ui5 serve", "cf push"],
    "correct": [0],
    "explanation": "cds watch starts CAP with live reload."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of destinations in BTP?",
    "options": ["External Connectivity", "Routing", "Data Binding", "Caching"],
    "correct": [0],
    "explanation": "Destinations manage external system connections."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which attack is CSRF protection designed to prevent?",
    "options": ["Cross Site Request Forgery", "SQL Injection", "XSS", "DDoS"],
    "correct": [0],
    "explanation": "CSRF tokens protect against forged requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which header is commonly used for CSRF protection?",
    "options": ["X-CSRF-Token", "Authorization", "Content-Type", "ETag"],
    "correct": [0],
    "explanation": "SAP OData services use X-CSRF-Token."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does CORS stand for?",
    "options": ["Cross-Origin Resource Sharing", "Cross Object Routing Service", "Common OData Runtime Service", "Cloud Object Repository Service"],
    "correct": [0],
    "explanation": "CORS controls cross-domain requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is XSS?",
    "options": ["Cross Site Scripting", "Cross System Service", "XML Security Standard", "Extended SAP Service"],
    "correct": [0],
    "explanation": "XSS injects malicious scripts into web pages."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAP BTP service handles authentication?",
    "options": ["XSUAA", "Destination", "Connectivity", "HTML5 Repo"],
    "correct": [0],
    "explanation": "XSUAA manages authentication and authorization."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is lazy loading?",
    "options": ["Load Resources Only When Needed", "Load Everything First", "Disable Routing", "Disable Binding"],
    "correct": [0],
    "explanation": "Lazy loading improves performance."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which technique reduces OData payload size?",
    "options": ["$select", "$metadata", "$expand all", "Full Load"],
    "correct": [0],
    "explanation": "$select retrieves only required fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which option helps reduce backend round trips?",
    "options": ["Batch Requests", "Multiple GET Calls", "Refresh Metadata", "Disable Cache"],
    "correct": [0],
    "explanation": "Batch combines requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which browser tab helps identify slow network requests?",
    "options": ["Network", "Console", "Elements", "Sources"],
    "correct": [0],
    "explanation": "Network tab shows request timings."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which browser tab is useful for JavaScript errors?",
    "options": ["Console", "Elements", "Network", "Performance"],
    "correct": [0],
    "explanation": "Console displays runtime errors."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 diagnostic tool analyzes application issues?",
    "options": ["Support Assistant", "Gateway Client", "SE11", "SM37"],
    "correct": [0],
    "explanation": "Support Assistant checks best practices and issues."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is accessibility in SAP Fiori?",
    "options": ["Support for All Users Including Disabilities", "Performance Optimization", "Deployment Strategy", "Security Mechanism"],
    "correct": [0],
    "explanation": "Accessibility ensures usability for everyone."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which standard is commonly associated with accessibility?",
    "options": ["WCAG", "HTTP", "REST", "SOAP"],
    "correct": [0],
    "explanation": "WCAG provides accessibility guidelines."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 feature helps screen readers?",
    "options": ["ARIA Support", "Batch Requests", "Fragments", "OData"],
    "correct": [0],
    "explanation": "ARIA attributes improve accessibility."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "A table shows no data although the OData call succeeds. What should be checked first?",
    "options": ["Binding Path", "Theme", "CSS", "Manifest Icon"],
    "correct": [0],
    "explanation": "Incorrect binding paths are the most common cause."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method is used to access a control inside the same view?",
    "options": ["byId()", "getElementById()", "querySelector()", "findControl()"],
    "correct": [0],
    "explanation": "this.byId() is preferred within controllers."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the result of calling getModel() without parameters?",
    "options": ["Default Model", "Named Model", "JSON Model Only", "Resource Model"],
    "correct": [0],
    "explanation": "Returns the default model assigned to the control."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which binding type is used for tables and lists?",
    "options": ["Aggregation Binding", "Property Binding", "Element Binding", "Expression Binding"],
    "correct": [0],
    "explanation": "Lists and tables use aggregation binding."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which binding type binds an entire entity?",
    "options": ["Element Binding", "Aggregation Binding", "Property Binding", "Composite Binding"],
    "correct": [0],
    "explanation": "Element binding binds a complete object."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which manifest section contains routing configuration?",
    "options": ["sap.ui5", "sap.app", "sap.fiori", "sap.cloud"],
    "correct": [0],
    "explanation": "Routing is configured under sap.ui5."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What happens if Router.initialize() is not called?",
    "options": ["Routing Will Not Work", "Application Crashes", "Model Fails", "Metadata Missing"],
    "correct": [0],
    "explanation": "Router must be initialized."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which event is commonly attached for route matching?",
    "options": ["attachPatternMatched", "attachPress", "attachChange", "attachDataReceived"],
    "correct": [0],
    "explanation": "attachPatternMatched handles route navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the main purpose of Component-preload.js?",
    "options": ["Performance Optimization", "Routing", "Security", "Translation"],
    "correct": [0],
    "explanation": "Bundles resources for faster loading."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Why should fragments be reused?",
    "options": ["Reduce Duplicate UI Code", "Improve Security", "Improve Authorization", "Reduce Metadata"],
    "correct": [0],
    "explanation": "Fragments support reusable UI components."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which API loads XML Fragments asynchronously?",
    "options": ["Fragment.load()", "loadFragmentXML()", "Fragment.create()", "loadXML()"],
    "correct": [0],
    "explanation": "Fragment.load() is the recommended approach."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "A dialog opens multiple times after repeated navigation. Most likely reason?",
    "options": ["Event Attached Multiple Times", "Metadata Error", "CSRF Issue", "Routing Disabled"],
    "correct": [0],
    "explanation": "Duplicate event registrations often cause this issue."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which lifecycle method is best for initial setup?",
    "options": ["onInit", "onExit", "onBeforeRendering", "onAfterRendering"],
    "correct": [0],
    "explanation": "onInit executes once during controller creation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which lifecycle method is best for cleanup?",
    "options": ["onExit", "onInit", "onAfterRendering", "constructor"],
    "correct": [0],
    "explanation": "Cleanup logic belongs in onExit."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which model is commonly used for local UI state?",
    "options": ["JSONModel", "ODataModel", "XMLModel", "ResourceModel"],
    "correct": [0],
    "explanation": "JSONModel is ideal for client-side state."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the advantage of named models?",
    "options": ["Support Multiple Models", "Increase Security", "Reduce Metadata", "Improve Routing"],
    "correct": [0],
    "explanation": "Named models prevent conflicts between models."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which function refreshes ODataModel data?",
    "options": ["refresh()", "reload()", "rebind()", "restart()"],
    "correct": [0],
    "explanation": "refresh() updates bindings and data."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does create() do in ODataModel?",
    "options": ["POST Request", "GET Request", "DELETE Request", "PATCH Request"],
    "correct": [0],
    "explanation": "create() sends a POST request."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What does remove() do in ODataModel?",
    "options": ["DELETE Request", "POST Request", "GET Request", "PATCH Request"],
    "correct": [0],
    "explanation": "remove() deletes backend entities."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method performs updates in ODataModel?",
    "options": ["update()", "modify()", "edit()", "change()"],
    "correct": [0],
    "explanation": "update() handles PUT/PATCH operations."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of submitChanges()?",
    "options": ["Send Pending Changes", "Refresh Metadata", "Navigate Route", "Load Fragment"],
    "correct": [0],
    "explanation": "Submits deferred OData changes."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status code indicates server error?",
    "options": ["500", "200", "201", "204"],
    "correct": [0],
    "explanation": "500 indicates internal server error."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status code indicates forbidden access?",
    "options": ["403", "404", "200", "201"],
    "correct": [0],
    "explanation": "403 means access is forbidden."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which HTTP status code indicates success without content?",
    "options": ["204", "404", "500", "403"],
    "correct": [0],
    "explanation": "204 indicates successful processing without response body."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "A table displays headers but no rows. Most likely issue?",
    "options": ["Incorrect Binding Path", "Theme Error", "Missing CSS", "Manifest Error"],
    "correct": [0],
    "explanation": "Wrong aggregation path is a common cause."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of formatter functions?",
    "options": ["Transform Data Before Display", "Store Data", "Navigate Views", "Deploy Apps"],
    "correct": [0],
    "explanation": "Formatters convert data into UI-friendly values."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which syntax is used for expression binding?",
    "options": ["{= ... }", "${...}", "[ ... ]", "( ... )"],
    "correct": [0],
    "explanation": "Expression binding begins with {=."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 class handles internationalization?",
    "options": ["ResourceModel", "JSONModel", "XMLModel", "ODataModel"],
    "correct": [0],
    "explanation": "ResourceModel loads i18n texts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file stores translation texts?",
    "options": ["i18n.properties", "manifest.json", "Component.js", "metadata.xml"],
    "correct": [0],
    "explanation": "Translation texts reside in i18n.properties."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which tool is commonly used to inspect OData requests?",
    "options": ["Browser Network Tab", "Excel", "SE11", "Word"],
    "correct": [0],
    "explanation": "Network tab shows request and response details."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the first thing to check when data is not displayed?",
    "options": ["Binding Path", "Theme", "CSS", "Launchpad Tile"],
    "correct": [0],
    "explanation": "Incorrect bindings cause many UI issues."
  }
  ,




  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 model supports two-way binding by default?",
    "options": ["JSONModel", "ResourceModel", "XMLModel", "DeviceModel"],
    "correct": [0],
    "explanation": "JSONModel supports two-way binding by default."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which method retrieves route parameters after navigation?",
    "options": ["getParameter('arguments')", "getRoute()", "getRouter()", "getModel()"],
    "correct": [0],
    "explanation": "Route arguments are available through event parameters."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of attachMatched()?",
    "options": ["Handle Route Match Event", "Bind Data", "Create Model", "Load Fragment"],
    "correct": [0],
    "explanation": "attachMatched() reacts when a route is matched."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation defines identification fields on Object Page?",
    "options": ["UI.Identification", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "UI.Identification defines object identification information."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which annotation is used for KPI values?",
    "options": ["UI.DataPoint", "UI.LineItem", "UI.SelectionFields", "UI.Facet"],
    "correct": [0],
    "explanation": "DataPoint annotations define KPI information."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the primary purpose of metadata extensions?",
    "options": ["Separate UI Annotations", "Create Tables", "Deploy Apps", "Manage Roles"],
    "correct": [0],
    "explanation": "Metadata extensions separate UI annotations from CDS."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which CDS annotation enables authorization checks?",
    "options": ["@AccessControl.authorizationCheck", "@UI.lineItem", "@Search.searchable", "@Analytics.query"],
    "correct": [0],
    "explanation": "Authorization checks are controlled through AccessControl."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAP transaction manages OData services?",
    "options": ["/IWFND/MAINT_SERVICE", "SE11", "SE80", "SU01"],
    "correct": [0],
    "explanation": "Used to register and maintain OData services."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAP transaction is commonly used for Gateway error logs?",
    "options": ["/IWFND/ERROR_LOG", "SE38", "ST22", "SM37"],
    "correct": [0],
    "explanation": "Gateway errors are analyzed here."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of batch groups in OData?",
    "options": ["Group Requests Together", "Create Tables", "Manage Fragments", "Control Routing"],
    "correct": [0],
    "explanation": "Batch groups combine multiple requests."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which operation improves application startup performance?",
    "options": ["Component Preload", "Disable Cache", "Increase Metadata", "Multiple Requests"],
    "correct": [0],
    "explanation": "Preload bundles resources."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which control is preferred for responsive forms?",
    "options": ["SimpleForm", "Button", "Table", "Panel"],
    "correct": [0],
    "explanation": "SimpleForm adapts to screen sizes."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of Device Model?",
    "options": ["Device Information", "OData Access", "Authorization", "Routing"],
    "correct": [0],
    "explanation": "Device Model stores device characteristics."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which model is typically named 'device'?",
    "options": ["JSONModel", "ODataModel", "XMLModel", "ResourceModel"],
    "correct": [0],
    "explanation": "Device model is usually a JSONModel."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of Flexible Column Layout?",
    "options": ["Multi-Column Navigation", "Security", "Batch Processing", "Translations"],
    "correct": [0],
    "explanation": "FCL supports master-detail-detail layouts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which layout supports 3-column navigation?",
    "options": ["FlexibleColumnLayout", "VBox", "HBox", "Grid"],
    "correct": [0],
    "explanation": "FCL can display up to three columns."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is intent-based navigation based on?",
    "options": ["Semantic Objects and Actions", "Routes Only", "Fragments", "Metadata"],
    "correct": [0],
    "explanation": "Semantic objects and actions define navigation."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which Launchpad artifact controls user access?",
    "options": ["Role", "Tile", "Group", "Catalog"],
    "correct": [0],
    "explanation": "Roles determine access permissions."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which BTP service stores UI applications?",
    "options": ["HTML5 Application Repository", "Destination", "XSUAA", "Connectivity"],
    "correct": [0],
    "explanation": "UI apps are stored in HTML5 repository."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which command deploys an MTAR archive?",
    "options": ["cf deploy", "npm install", "cds watch", "ui5 serve"],
    "correct": [0],
    "explanation": "cf deploy deploys MTAR archives."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of XSUAA scopes?",
    "options": ["Authorization", "Routing", "Translation", "Data Binding"],
    "correct": [0],
    "explanation": "Scopes define permissions."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of role collections in BTP?",
    "options": ["Assign Roles to Users", "Store Data", "Deploy Apps", "Manage CDS"],
    "correct": [0],
    "explanation": "Role collections simplify authorization."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which CAP command creates a new project?",
    "options": ["cds init", "cds watch", "cf push", "npm deploy"],
    "correct": [0],
    "explanation": "cds init creates CAP projects."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file contains CAP dependencies?",
    "options": ["package.json", "manifest.json", "metadata.xml", "mta.yaml"],
    "correct": [0],
    "explanation": "Node.js dependencies are maintained in package.json."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file defines deployment modules?",
    "options": ["mta.yaml", "package.json", "manifest.json", "ui5.yaml"],
    "correct": [0],
    "explanation": "mta.yaml defines deployment artifacts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "A List Report column is missing. What should be checked first?",
    "options": ["UI.LineItem Annotation", "Theme", "Router", "Fragment"],
    "correct": [0],
    "explanation": "LineItem controls visible columns."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "A filter field is missing in List Report. What is the likely reason?",
    "options": ["UI.SelectionFields Missing", "Routing Error", "Metadata Cache", "Theme"],
    "correct": [0],
    "explanation": "SelectionFields controls filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which tool is best for analyzing SAPUI5 performance?",
    "options": ["Browser Performance Tab", "SE11", "Gateway Client", "Launchpad Designer"],
    "correct": [0],
    "explanation": "Performance tab helps identify bottlenecks."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the first thing to verify when navigation fails?",
    "options": ["Route Configuration", "Theme", "Device Model", "CSS"],
    "correct": [0],
    "explanation": "Most navigation issues originate from route configuration."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the most common cause of empty tables in SAPUI5?",
    "options": ["Incorrect Binding Path", "Missing CSS", "Theme Error", "Launchpad Issue"],
    "correct": [0],
    "explanation": "Incorrect binding paths are a frequent cause."
  },

  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are commonly found in a SAPUI5 application?",
    "options": ["manifest.json", "Component.js", "i18n.properties", "pom.xml"],
    "correct": [0, 1, 2],
    "explanation": "manifest.json, Component.js, and i18n.properties are standard SAPUI5 files."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which lifecycle methods belong to SAPUI5 controllers?",
    "options": ["onInit", "onExit", "onBeforeRendering", "beforeRouteMatched"],
    "correct": [0, 1, 2],
    "explanation": "The first three are controller lifecycle hooks."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding types exist in SAPUI5?",
    "options": ["Property Binding", "Aggregation Binding", "Element Binding", "Database Binding"],
    "correct": [0, 1, 2],
    "explanation": "Database Binding is not a SAPUI5 binding type."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData operations are CRUD related?",
    "options": ["Create", "Read", "Update", "Delete"],
    "correct": [0, 1, 2, 3],
    "explanation": "CRUD consists of Create, Read, Update, Delete."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP methods are used in OData?",
    "options": ["GET", "POST", "PATCH", "DELETE"],
    "correct": [0, 1, 2, 3],
    "explanation": "All four are standard OData methods."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which query options improve OData performance?",
    "options": ["$select", "$top", "$filter", "$expand"],
    "correct": [0, 1, 2],
    "explanation": "$expand may increase payload size."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which Fiori Elements annotations are commonly used?",
    "options": ["UI.LineItem", "UI.SelectionFields", "UI.HeaderInfo", "UI.Chart"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common annotations."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which Smart Controls are available?",
    "options": ["SmartTable", "SmartField", "SmartFilterBar", "SmartForm"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are SAP Smart Controls."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are important for Mock Server?",
    "options": ["metadata.xml", "mockserver.js", "manifest.json", "mockdata JSON"],
    "correct": [0, 1, 3],
    "explanation": "manifest.json is useful but not a core mock server file."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which tools help debug SAPUI5 applications?",
    "options": ["Browser DevTools", "Support Assistant", "Network Tab", "Gateway Client"],
    "correct": [0, 1, 2, 3],
    "explanation": "All can help in troubleshooting."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are important for deployment on BTP?",
    "options": ["mta.yaml", "xs-security.json", "manifest.json", "package.json"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are commonly used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which services are commonly used in SAP BTP?",
    "options": ["XSUAA", "Destination", "Connectivity", "HTML5 Repo"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are frequently used services."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statements about Fragments are correct?",
    "options": ["Reusable", "No Controller of Their Own", "Can Be XML", "Can Be Loaded Asynchronously"],
    "correct": [0, 1, 2, 3],
    "explanation": "All statements are correct."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statements about Routing are correct?",
    "options": ["Configured in manifest.json", "Uses Router", "Supports Parameters", "Supports Deep Linking"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are true."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotations are related to Object Pages?",
    "options": ["UI.HeaderInfo", "UI.Facets", "UI.Identification", "UI.FieldGroup"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are commonly used on Object Pages."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statements about CAP are correct?",
    "options": ["Supports Node.js", "Supports Java", "Uses CDS", "Can Deploy to BTP"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are CAP features."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statements about RAP are correct?",
    "options": ["ABAP Based", "Supports Draft", "Uses CDS", "Uses Behavior Definitions"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are RAP concepts."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issues can cause data not to appear in a table?",
    "options": ["Wrong Binding Path", "Metadata Problems", "Backend Error", "Empty Dataset"],
    "correct": [0, 1, 2, 3],
    "explanation": "All can result in empty tables."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which security mechanisms are relevant in SAPUI5 applications?",
    "options": ["XSUAA", "CSRF Protection", "Role Collections", "Authorization Checks"],
    "correct": [0, 1, 2, 3],
    "explanation": "All contribute to application security."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which topics are heavily tested in UX400 certification?",
    "options": ["Data Binding", "Routing", "OData", "Fiori Elements"],
    "correct": [0, 1, 2, 3],
    "explanation": "These are among the most frequently tested areas."
  }
  ,


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "You call this.getView().getModel().getProperty('/Employees/0/Name') and receive undefined. What is the most likely reason?",
    "options": ["Wrong Path", "Wrong Theme", "Missing CSS", "Router Error"],
    "correct": [0],
    "explanation": "Incorrect binding path is the most common cause."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A route is configured correctly but navigation does not happen. What should be checked next?",
    "options": ["Router.initialize()", "Theme", "i18n", "CSS"],
    "correct": [0],
    "explanation": "Routing will not work until Router.initialize() is called."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A List Report displays data but filters are missing. Which annotation should be checked?",
    "options": ["UI.SelectionFields", "UI.LineItem", "UI.HeaderInfo", "UI.Chart"],
    "correct": [0],
    "explanation": "SelectionFields controls filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which approach provides the best performance for large datasets?",
    "options": ["Server-side Paging", "Load Everything", "Multiple Reads", "Disable Cache"],
    "correct": [0],
    "explanation": "Server-side paging minimizes payload."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the preferred way to load dialogs in modern SAPUI5?",
    "options": ["Fragment.load()", "new Dialog()", "XMLView.create()", "loadData()"],
    "correct": [0],
    "explanation": "Fragment.load() supports asynchronous loading."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData option should be avoided when performance is critical?",
    "options": ["Unnecessary $expand", "$select", "$top", "$filter"],
    "correct": [0],
    "explanation": "Large expands can significantly increase payload."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the primary advantage of Fiori Elements?",
    "options": ["Metadata Driven Development", "Manual Coding", "Custom CSS", "Routing"],
    "correct": [0],
    "explanation": "Fiori Elements reduces development effort."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which artifact defines business behavior in RAP?",
    "options": ["Behavior Definition", "Metadata Extension", "Projection View", "Consumption View"],
    "correct": [0],
    "explanation": "Behavior Definitions define operations and validations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP folder typically contains CSV seed data?",
    "options": ["db/data", "srv", "app", "test"],
    "correct": [0],
    "explanation": "Seed data is commonly stored under db/data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the most common cause of duplicate records in a table after navigation?",
    "options": ["Repeated Binding/Event Attachment", "Theme", "Metadata", "Router Missing"],
    "correct": [0],
    "explanation": "Events or bindings attached multiple times cause duplication."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which actions improve SAPUI5 performance?",
    "options": ["Use $select", "Use Batch Requests", "Lazy Load Fragments", "Bundle Resources"],
    "correct": [0, 1, 2, 3],
    "explanation": "All improve performance."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotations are commonly used in List Reports?",
    "options": ["UI.LineItem", "UI.SelectionFields", "UI.DataPoint", "UI.Hidden"],
    "correct": [0, 1, 2, 3],
    "explanation": "All may appear in List Reports."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which factors can cause routing failures?",
    "options": ["Wrong Route Name", "Router Not Initialized", "Wrong Pattern", "Missing Target"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common routing issues."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which are advantages of JSONModel?",
    "options": ["Client-side Storage", "Simple Usage", "Two-way Binding", "Fast UI Updates"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are benefits of JSONModel."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statements about OData Batch are correct?",
    "options": ["Reduces Round Trips", "Improves Performance", "Groups Requests", "Supported in SAPUI5"],
    "correct": [0, 1, 2, 3],
    "explanation": "All statements are true."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A POST request fails with 403 Forbidden. What should be checked first?",
    "options": ["CSRF Token", "Theme", "Binding", "Fragment"],
    "correct": [0],
    "explanation": "Missing or invalid CSRF token commonly causes 403."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A Fiori Elements Object Page section is missing. Which annotation should be verified?",
    "options": ["UI.Facets", "UI.Chart", "UI.Hidden", "UI.Importance"],
    "correct": [0],
    "explanation": "Facets define Object Page sections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the main purpose of metadata.xml in Mock Server?",
    "options": ["Service Structure Definition", "Deployment", "Security", "Routing"],
    "correct": [0],
    "explanation": "Metadata describes entities and properties."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which browser tool is best for measuring rendering performance?",
    "options": ["Performance Tab", "Elements", "Console", "Sources"],
    "correct": [0],
    "explanation": "Performance tab provides rendering metrics."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which Launchpad artifact contains target mappings?",
    "options": ["Catalog", "Group", "Tile", "Role"],
    "correct": [0],
    "explanation": "Catalogs contain target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of semantic actions?",
    "options": ["Intent-based Navigation", "Data Binding", "Security", "Caching"],
    "correct": [0],
    "explanation": "Actions work with semantic objects for navigation."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which are SAPUI5 model types?",
    "options": ["JSONModel", "ODataModel", "ResourceModel", "XMLModel"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are valid SAPUI5 models."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are important in CAP projects?",
    "options": ["package.json", "mta.yaml", ".cds Files", "xs-security.json"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are commonly used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which techniques improve security?",
    "options": ["XSUAA", "CSRF Protection", "Authorization Checks", "Role Collections"],
    "correct": [0, 1, 2, 3],
    "explanation": "All contribute to security."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation enables value help?",
    "options": ["Common.ValueList", "UI.Chart", "UI.Hidden", "UI.LineItem"],
    "correct": [0],
    "explanation": "ValueList provides value help support."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP command builds deployable artifacts?",
    "options": ["cds build", "cds watch", "npm install", "cf push"],
    "correct": [0],
    "explanation": "cds build generates deployment artifacts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A SmartTable is not showing columns. What should be checked first?",
    "options": ["Metadata and Annotations", "Theme", "Router", "CSS"],
    "correct": [0],
    "explanation": "Smart controls depend heavily on metadata."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which layer should contain business validations in RAP?",
    "options": ["Behavior Implementation", "Projection View", "Metadata Extension", "UI Layer"],
    "correct": [0],
    "explanation": "Business logic belongs in behavior implementations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the main purpose of ui5.yaml?",
    "options": ["UI5 Tooling Configuration", "Routing", "Authorization", "Annotations"],
    "correct": [0],
    "explanation": "ui5.yaml configures UI5 tooling."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 topic appears most frequently in interviews?",
    "options": ["Data Binding", "Theme Designer", "Custom CSS", "Icons"],
    "correct": [0],
    "explanation": "Data Binding is one of the most frequently discussed topics."
  }
  ,

  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to access the owner component inside a controller?",
    "options": ["getOwnerComponent()", "getComponent()", "owner()", "getAppComponent()"],
    "correct": [0],
    "explanation": "getOwnerComponent() returns the component instance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to retrieve the router from the owner component?",
    "options": ["getRouter()", "getRouterFor()", "router()", "fetchRouter()"],
    "correct": [0],
    "explanation": "Owner component provides access to the router."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if a model name is misspelled in XML binding?",
    "options": ["Binding Fails", "Compilation Error", "Application Stops", "Theme Error"],
    "correct": [0],
    "explanation": "The binding will not resolve correctly."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding syntax accesses a named model property?",
    "options": ["{employee>Name}", "{Name}", "{/Name}", "{#Name}"],
    "correct": [0],
    "explanation": "Named model syntax uses modelName>property."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method retrieves data from JSONModel?",
    "options": ["getProperty()", "getDataByPath()", "fetchData()", "read()"],
    "correct": [0],
    "explanation": "getProperty() retrieves values from model paths."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method updates JSONModel data?",
    "options": ["setProperty()", "update()", "modify()", "changeData()"],
    "correct": [0],
    "explanation": "setProperty() updates model values."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of refresh(true) in ODataModel?",
    "options": ["Force Refresh", "Delete Cache", "Reset Model", "Reload Fragment"],
    "correct": [0],
    "explanation": "Forces the model to refresh bindings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event fires after OData data is received?",
    "options": ["dataReceived", "requestSent", "change", "updateFinished"],
    "correct": [0],
    "explanation": "dataReceived occurs after response processing."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event fires before an OData request is sent?",
    "options": ["requestSent", "dataReceived", "updateFinished", "loaded"],
    "correct": [0],
    "explanation": "requestSent is triggered before the request."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 control is optimized for mobile lists?",
    "options": ["sap.m.List", "sap.ui.table.Table", "TreeTable", "AnalyticalTable"],
    "correct": [0],
    "explanation": "sap.m.List is designed for responsive devices."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which control supports growing functionality?",
    "options": ["sap.m.Table", "Dialog", "Input", "Button"],
    "correct": [0],
    "explanation": "Growing loads records incrementally."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the benefit of growing=true?",
    "options": ["Improved Performance", "Better Security", "Routing", "Caching"],
    "correct": [0],
    "explanation": "Only visible records are loaded initially."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which control displays messages to users without blocking interaction?",
    "options": ["MessageToast", "MessageBox", "Dialog", "Popover"],
    "correct": [0],
    "explanation": "MessageToast shows temporary notifications."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which control blocks user interaction until action is taken?",
    "options": ["MessageBox", "MessageToast", "Label", "Text"],
    "correct": [0],
    "explanation": "MessageBox requires user response."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of BusyIndicator?",
    "options": ["Show Processing State", "Store Data", "Navigate", "Authenticate"],
    "correct": [0],
    "explanation": "BusyIndicator informs users that work is ongoing."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines a criticality indicator?",
    "options": ["UI.Criticality", "UI.Chart", "UI.Hidden", "UI.LineItem"],
    "correct": [0],
    "explanation": "Criticality defines semantic status colors."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which semantic color generally indicates success?",
    "options": ["Green", "Red", "Orange", "Gray"],
    "correct": [0],
    "explanation": "Green usually represents success."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which semantic color generally indicates error?",
    "options": ["Red", "Green", "Blue", "Gray"],
    "correct": [0],
    "explanation": "Red indicates errors or negative states."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of formatter modules?",
    "options": ["Data Transformation", "Routing", "Security", "Deployment"],
    "correct": [0],
    "explanation": "Formatters transform values for display."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Where are formatter functions commonly stored?",
    "options": ["formatter.js", "manifest.json", "Component.js", "index.html"],
    "correct": [0],
    "explanation": "A dedicated formatter.js file is common."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which methods belong to ODataModel CRUD operations?",
    "options": ["create()", "read()", "update()", "remove()"],
    "correct": [0, 1, 2, 3],
    "explanation": "These represent CRUD functionality."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 controls support data binding?",
    "options": ["Text", "Input", "Table", "List"],
    "correct": [0, 1, 2, 3],
    "explanation": "All support binding."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which browser tools are useful for debugging SAPUI5?",
    "options": ["Network", "Console", "Sources", "Performance"],
    "correct": [0, 1, 2, 3],
    "explanation": "All provide debugging capabilities."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are important in SAPUI5 applications?",
    "options": ["manifest.json", "Component.js", "index.html", "i18n.properties"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are core application files."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A table displays 'No Data' but backend returns records. What should be checked first?",
    "options": ["Binding Path", "Theme", "CSS", "Launchpad"],
    "correct": [0],
    "explanation": "Incorrect bindings are the most common cause."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issue often causes duplicate OData calls?",
    "options": ["Repeated Event Attachment", "Theme", "Formatter", "Fragment"],
    "correct": [0],
    "explanation": "Events attached multiple times can trigger repeated requests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the first step when debugging routing issues?",
    "options": ["Check Route Configuration", "Check Theme", "Check CSS", "Check Icons"],
    "correct": [0],
    "explanation": "Routing configuration is usually the root cause."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file usually contains route patterns?",
    "options": ["manifest.json", "formatter.js", "Component-preload.js", "i18n.properties"],
    "correct": [0],
    "explanation": "Routes are typically configured in manifest.json."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 topic is most important for interview coding rounds?",
    "options": ["Data Binding", "Themes", "Icons", "Colors"],
    "correct": [0],
    "explanation": "Data Binding is asked extensively."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 concept is most commonly used in almost every application?",
    "options": ["Models and Binding", "Theme Designer", "Icons", "Custom Fonts"],
    "correct": [0],
    "explanation": "Models and Binding are fundamental to SAPUI5 apps."
  }
  ,

  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Given <Text text='{Name}'/>, where should Name exist?",
    "options": ["Current Binding Context", "Controller", "Fragment Only", "CSS"],
    "correct": [0],
    "explanation": "The property must exist in the current binding context."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with <Text text='{employee/Name}'/>?",
    "options": ["Missing > in Named Model Syntax", "Nothing", "Wrong Control", "Wrong XML"],
    "correct": [0],
    "explanation": "Correct syntax is {employee>Name}."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What will this expression return? {= ${price} > 100 }",
    "options": ["Boolean", "String", "Array", "Object"],
    "correct": [0],
    "explanation": "Expression binding returns true or false."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with this binding? {Name",
    "options": ["Missing Closing Brace", "Wrong Model", "Wrong Property", "Nothing"],
    "correct": [0],
    "explanation": "Binding syntax requires closing brace."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method correctly navigates using Router?",
    "options": ["navTo()", "navigate()", "goTo()", "routeTo()"],
    "correct": [0],
    "explanation": "navTo() is the SAPUI5 router method."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if route name in navTo() does not exist?",
    "options": ["Navigation Fails", "App Crashes", "Database Error", "Theme Error"],
    "correct": [0],
    "explanation": "Router cannot find matching route."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which statement retrieves default model?",
    "options": ["this.getView().getModel()", "this.getModel()", "getDefaultModel()", "fetchModel()"],
    "correct": [0],
    "explanation": "getModel() retrieves default model."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with this path? /Employees//Name",
    "options": ["Double Slash", "Wrong Entity", "Missing Model", "Nothing"],
    "correct": [0],
    "explanation": "Double slash creates an invalid path."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which function reads OData data?",
    "options": ["read()", "create()", "update()", "remove()"],
    "correct": [0],
    "explanation": "read() performs GET requests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which function deletes OData records?",
    "options": ["remove()", "delete()", "destroy()", "erase()"],
    "correct": [0],
    "explanation": "remove() sends DELETE requests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with Fragment.load without await or then()?",
    "options": ["Promise Not Handled", "Nothing", "Routing Error", "Metadata Error"],
    "correct": [0],
    "explanation": "Fragment.load() returns a Promise."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if i18n key does not exist?",
    "options": ["Key Name Displayed", "Application Stops", "Routing Error", "Blank Screen"],
    "correct": [0],
    "explanation": "Usually the key itself appears."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with this named model binding {>Name}?",
    "options": ["Model Name Missing", "Path Error", "Binding Error", "Nothing"],
    "correct": [0],
    "explanation": "Named model must be specified."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the output of this path? /Employees/0",
    "options": ["First Employee Object", "Employee Name", "Array Length", "Boolean"],
    "correct": [0],
    "explanation": "Index 0 accesses first object."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event fires after growing table loads more records?",
    "options": ["updateFinished", "press", "change", "select"],
    "correct": [0],
    "explanation": "updateFinished occurs after update."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issues can break XML View rendering?",
    "options": ["Invalid XML", "Missing Namespace", "Incorrect Aggregation", "Unclosed Tags"],
    "correct": [0, 1, 2, 3],
    "explanation": "All can cause rendering failures."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which causes empty table data?",
    "options": ["Wrong Binding Path", "Empty Dataset", "Failed OData Request", "Wrong Model Name"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are valid causes."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which browser tabs help debug OData issues?",
    "options": ["Network", "Console", "Sources", "Application"],
    "correct": [0, 1, 2],
    "explanation": "Network, Console, and Sources are most useful."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What does submitChanges() send?",
    "options": ["Pending Changes", "Metadata", "Routes", "Fragments"],
    "correct": [0],
    "explanation": "It sends deferred changes."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which error often causes 404 responses?",
    "options": ["Wrong Service URL", "Wrong Theme", "Wrong Fragment", "Wrong Formatter"],
    "correct": [0],
    "explanation": "Invalid endpoint URLs return 404."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status means Unauthorized?",
    "options": ["401", "403", "404", "500"],
    "correct": [0],
    "explanation": "401 indicates authentication required."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status means Forbidden?",
    "options": ["403", "401", "404", "500"],
    "correct": [0],
    "explanation": "403 indicates insufficient permissions."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status means Not Found?",
    "options": ["404", "401", "403", "500"],
    "correct": [0],
    "explanation": "404 indicates resource missing."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status means Internal Server Error?",
    "options": ["500", "404", "403", "401"],
    "correct": [0],
    "explanation": "500 indicates server-side failure."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the most common reason for duplicate dialog creation?",
    "options": ["Fragment Loaded Multiple Times", "Theme", "Metadata", "Routing"],
    "correct": [0],
    "explanation": "Repeated loading creates duplicates."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What should be checked first if formatter is not working?",
    "options": ["Formatter Import", "Theme", "Binding Context", "Route"],
    "correct": [0],
    "explanation": "Incorrect import is common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with getModel('emp') if model name is employee?",
    "options": ["Wrong Model Name", "Wrong Property", "Wrong View", "Nothing"],
    "correct": [0],
    "explanation": "Model names must match exactly."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of attachPatternMatched()?",
    "options": ["Handle Route Match", "Bind Model", "Create Dialog", "Load Fragment"],
    "correct": [0],
    "explanation": "It reacts to route navigation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 concept is most important for debugging?",
    "options": ["Binding Context", "Theme", "Icons", "CSS"],
    "correct": [0],
    "explanation": "Many issues originate from incorrect binding contexts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which topic appears most often in SAPUI5 coding interviews?",
    "options": ["Data Binding and Routing", "Theme Designer", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "Data Binding and Routing dominate interview discussions."
  },

  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Given: this.getView().setModel(oModel,'emp'); Which binding displays employee name?",
    "options": ["{emp>Name}", "{Name}", "{/Name}", "{emp/Name}"],
    "correct": [0],
    "explanation": "Named model binding uses > syntax."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method retrieves a named model?",
    "options": ["getModel('emp')", "getNamedModel()", "fetchModel('emp')", "readModel('emp')"],
    "correct": [0],
    "explanation": "Named models are retrieved using getModel(name)."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A button press event is not firing. What should be checked first?",
    "options": ["Event Handler Name", "Theme", "CSS", "Metadata"],
    "correct": [0],
    "explanation": "Wrong handler names are common causes."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which XML syntax correctly attaches a press event?",
    "options": ["press='.onPress'", "click='.onPress'", "onclick='onPress'", "event='onPress'"],
    "correct": [0],
    "explanation": "press is the correct SAPUI5 event."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which model is best for temporary UI state?",
    "options": ["JSONModel", "ODataModel", "ResourceModel", "XMLModel"],
    "correct": [0],
    "explanation": "JSONModel is lightweight and client-side."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens when setData() is called on JSONModel?",
    "options": ["Model Data Replaced", "App Reloads", "Fragment Reloads", "Nothing"],
    "correct": [0],
    "explanation": "setData replaces existing data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method appends data without replacing existing JSONModel data?",
    "options": ["setProperty()", "setData()", "refresh()", "loadData()"],
    "correct": [0],
    "explanation": "setProperty updates specific paths."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the output path for first employee salary?",
    "options": ["/Employees/0/Salary", "/Employees/Salary/0", "/0/Employees/Salary", "/Salary/Employees/0"],
    "correct": [0],
    "explanation": "Array index comes before property."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding updates automatically when model data changes?",
    "options": ["Two-Way Binding", "Static Binding", "One-Time Binding", "Manual Binding"],
    "correct": [0],
    "explanation": "Two-way binding synchronizes model and UI."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of bindElement()?",
    "options": ["Bind Entire Object", "Bind Aggregation", "Bind Event", "Bind Fragment"],
    "correct": [0],
    "explanation": "Element binding binds a complete context."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event occurs when a route pattern matches?",
    "options": ["patternMatched", "press", "change", "select"],
    "correct": [0],
    "explanation": "Triggered during successful route matching."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method navigates to Detail route with ID?",
    "options": ["navTo('detail',{id:1})", "navigate('detail',1)", "goTo('detail')", "route('detail')"],
    "correct": [0],
    "explanation": "navTo passes route parameters."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A fragment dialog remains in memory after closing. Which method helps cleanup?",
    "options": ["destroy()", "close()", "hide()", "exit()"],
    "correct": [0],
    "explanation": "destroy removes the control completely."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file commonly initializes router?",
    "options": ["Component.js", "manifest.json", "index.html", "formatter.js"],
    "correct": [0],
    "explanation": "Router initialization is often in Component.js."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData method creates records?",
    "options": ["create()", "insert()", "add()", "save()"],
    "correct": [0],
    "explanation": "create sends POST requests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData method updates records?",
    "options": ["update()", "modify()", "save()", "change()"],
    "correct": [0],
    "explanation": "update performs PUT/PATCH."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData method retrieves records?",
    "options": ["read()", "fetch()", "load()", "get()"],
    "correct": [0],
    "explanation": "read performs GET operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What does metadataLoaded() return?",
    "options": ["Promise", "String", "Boolean", "Array"],
    "correct": [0],
    "explanation": "metadataLoaded returns a Promise."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Why use metadataLoaded()?",
    "options": ["Wait Until Metadata Is Available", "Load CSS", "Load Fragment", "Navigate"],
    "correct": [0],
    "explanation": "Ensures metadata is fully loaded."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation controls Object Page title information?",
    "options": ["UI.HeaderInfo", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "HeaderInfo defines object title details."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which are valid SAPUI5 lifecycle methods?",
    "options": ["onInit", "onBeforeRendering", "onAfterRendering", "onExit"],
    "correct": [0, 1, 2, 3],
    "explanation": "All four are controller lifecycle hooks."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which can be defined in manifest.json?",
    "options": ["Routing", "Models", "DataSources", "Dependencies"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common manifest sections."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which improve OData performance?",
    "options": ["$select", "$filter", "Batch Requests", "Pagination"],
    "correct": [0, 1, 2, 3],
    "explanation": "All reduce unnecessary data transfer."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which can cause formatter errors?",
    "options": ["Wrong Import", "Wrong Function Name", "Syntax Error", "Undefined Value"],
    "correct": [0, 1, 2, 3],
    "explanation": "All may break formatter execution."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A SmartTable shows 'No Metadata Available'. What should be checked?",
    "options": ["OData Service Metadata", "Theme", "CSS", "Router"],
    "correct": [0],
    "explanation": "Smart controls depend on metadata."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the most common cause of 500 Internal Server Error?",
    "options": ["Backend Logic Failure", "Theme", "Binding", "Fragment"],
    "correct": [0],
    "explanation": "500 errors usually originate on the server."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which Launchpad concept supports intent-based navigation?",
    "options": ["Target Mapping", "Group", "Tile Color", "Catalog Name"],
    "correct": [0],
    "explanation": "Target mapping resolves intents to apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP artifact defines entities?",
    "options": ["CDS File", "package.json", "mta.yaml", "xs-security.json"],
    "correct": [0],
    "explanation": "Entities are defined in CDS models."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP artifact defines actions and validations?",
    "options": ["Behavior Definition", "Projection View", "Metadata Extension", "Service Binding"],
    "correct": [0],
    "explanation": "Behavior Definitions contain business behavior."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which UX400 topic is considered most important for certification success?",
    "options": ["Data Binding + OData + Routing", "Theme Designer", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "These topics appear frequently in certification and interviews."
  },



  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with <Input value='{Name'> ?",
    "options": ["Missing Closing Brace", "Wrong Control", "Wrong Property", "Nothing"],
    "correct": [0],
    "explanation": "Binding expression is incomplete."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with <mvc:View xmlns:mvc='sap.ui.core.mvc'> when sap.m controls are used?",
    "options": ["sap.m Namespace Missing", "MVC Error", "Binding Error", "Routing Error"],
    "correct": [0],
    "explanation": "sap.m namespace must be declared."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Why will <Button press='onSave'> fail in XML Views?",
    "options": ["Controller Reference Missing", "Button Unsupported", "XML Error", "Manifest Error"],
    "correct": [0],
    "explanation": "Should usually be press='.onSave'."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if an XML tag is not closed?",
    "options": ["View Fails To Render", "Theme Error", "Binding Error", "OData Error"],
    "correct": [0],
    "explanation": "Invalid XML prevents rendering."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which namespace is used for layout controls like VBox and HBox?",
    "options": ["sap.m", "sap.ui.table", "sap.ui.layout.form", "sap.f"],
    "correct": [0],
    "explanation": "VBox and HBox belong to sap.m."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with <Text text='{employee/Name}'/> when employee is a named model?",
    "options": ["Should Use employee>Name", "Theme Issue", "Router Issue", "Nothing"],
    "correct": [0],
    "explanation": "Named models require > syntax."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Why does a Text control show blank although binding path exists?",
    "options": ["Wrong Binding Context", "Theme", "CSS", "Launchpad"],
    "correct": [0],
    "explanation": "Binding context may not point to expected object."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which XML aggregation is used inside sap.m.Table?",
    "options": ["items", "rows", "content", "cellsOnly"],
    "correct": [0],
    "explanation": "sap.m.Table uses items aggregation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which aggregation is used by sap.ui.table.Table?",
    "options": ["rows", "items", "content", "columnsOnly"],
    "correct": [0],
    "explanation": "Desktop table uses rows aggregation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if an aggregation name is incorrect?",
    "options": ["Content Not Rendered", "Theme Error", "Model Error", "Fragment Error"],
    "correct": [0],
    "explanation": "Invalid aggregation prevents child controls rendering."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding displays i18n text?",
    "options": ["{i18n>APP_TITLE}", "{APP_TITLE}", "{/APP_TITLE}", "{text>APP_TITLE}"],
    "correct": [0],
    "explanation": "Resource model uses modelName>key syntax."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if i18n model is not registered?",
    "options": ["Keys Not Resolved", "Routing Stops", "Metadata Error", "OData Error"],
    "correct": [0],
    "explanation": "Text bindings cannot resolve keys."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which control supports value help natively?",
    "options": ["Input", "Text", "Label", "Title"],
    "correct": [0],
    "explanation": "Input supports value help functionality."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which property enables value help on Input?",
    "options": ["showValueHelp", "valueHelp", "enableVH", "valueAssist"],
    "correct": [0],
    "explanation": "showValueHelp=true enables value help icon."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event handles value help requests?",
    "options": ["valueHelpRequest", "press", "change", "search"],
    "correct": [0],
    "explanation": "Triggered when value help icon is pressed."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A List displays no records although model contains data. First thing to verify?",
    "options": ["Aggregation Path", "Theme", "CSS", "Browser"],
    "correct": [0],
    "explanation": "Wrong aggregation path is very common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is wrong with path='Employees' when root path is needed?",
    "options": ["Missing Leading Slash", "Theme Error", "Metadata Error", "Nothing"],
    "correct": [0],
    "explanation": "Root paths generally start with '/'."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What does {= ${amount} > 1000 ? 'High':'Low' } return?",
    "options": ["High or Low", "Boolean", "Number", "Object"],
    "correct": [0],
    "explanation": "Expression binding returns selected string."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which XML control is commonly used for responsive forms?",
    "options": ["SimpleForm", "TextArea", "Table", "Panel"],
    "correct": [0],
    "explanation": "SimpleForm is optimized for forms."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Why might a formatter not execute?",
    "options": ["Formatter Not Imported", "Theme", "Router", "Launchpad"],
    "correct": [0],
    "explanation": "Import issues are common."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issues can break XML Views?",
    "options": ["Missing Namespace", "Invalid Binding", "Unclosed Tags", "Wrong Aggregation"],
    "correct": [0, 1, 2, 3],
    "explanation": "All may prevent correct rendering."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which controls support press events?",
    "options": ["Button", "Link", "GenericTile", "ObjectListItem"],
    "correct": [0, 1, 2, 3],
    "explanation": "All support user interaction events."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which controls are commonly used in forms?",
    "options": ["Input", "Label", "DatePicker", "ComboBox"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common form controls."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which controls support data binding?",
    "options": ["Input", "Text", "Table", "List"],
    "correct": [0, 1, 2, 3],
    "explanation": "All support binding."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which XML attribute binds tooltip text?",
    "options": ["tooltip", "hint", "description", "titleText"],
    "correct": [0],
    "explanation": "tooltip property displays hover information."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issue causes duplicate IDs?",
    "options": ["Same Fragment Loaded Multiple Times Without Unique IDs", "Theme", "Router", "OData"],
    "correct": [0],
    "explanation": "Duplicate IDs are common with fragments."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method helps generate unique fragment IDs?",
    "options": ["this.createId()", "newId()", "generateUUID()", "createUnique()"],
    "correct": [0],
    "explanation": "createId avoids duplicate IDs."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which XML control displays a collection of records most efficiently on mobile?",
    "options": ["sap.m.List", "sap.ui.table.Table", "TreeTable", "AnalyticalTable"],
    "correct": [0],
    "explanation": "sap.m.List is mobile-optimized."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issue often causes XML Parse Errors?",
    "options": ["Invalid Namespace Declaration", "Theme", "OData", "Launchpad"],
    "correct": [0],
    "explanation": "Incorrect namespace declarations cause parser failures."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "In SAPUI5 interviews, which XML topic is asked most often?",
    "options": ["Binding Syntax", "Themes", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "Binding syntax and context questions are extremely common."
  },


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation controls columns in a Fiori Elements List Report?",
    "options": ["UI.LineItem", "UI.HeaderInfo", "UI.Facets", "UI.FieldGroup"],
    "correct": [0],
    "explanation": "UI.LineItem defines table columns."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation controls filter fields in a List Report?",
    "options": ["UI.SelectionFields", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "SelectionFields define filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines the Object Page header title?",
    "options": ["UI.HeaderInfo", "UI.LineItem", "UI.DataPoint", "UI.Chart"],
    "correct": [0],
    "explanation": "HeaderInfo defines title and description."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation creates sections on an Object Page?",
    "options": ["UI.Facets", "UI.LineItem", "UI.Hidden", "UI.SelectionFields"],
    "correct": [0],
    "explanation": "Facets define Object Page sections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A field is not visible in Object Page although present in CDS. What should be checked first?",
    "options": ["UI.Facets/UI.FieldGroup", "Theme", "CSS", "Router"],
    "correct": [0],
    "explanation": "The field must be exposed through annotations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation enables value help in CDS?",
    "options": ["Common.ValueList", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "ValueList provides value help metadata."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation hides a field in Fiori Elements?",
    "options": ["UI.Hidden", "UI.Chart", "UI.Facet", "UI.HeaderInfo"],
    "correct": [0],
    "explanation": "UI.Hidden suppresses field display."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines KPI information?",
    "options": ["UI.DataPoint", "UI.LineItem", "UI.SelectionFields", "UI.Hidden"],
    "correct": [0],
    "explanation": "DataPoint is used for KPIs."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CDS annotation enables search?",
    "options": ["@Search.searchable", "@UI.lineItem", "@Analytics.query", "@Consumption"],
    "correct": [0],
    "explanation": "Makes entity searchable."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of CDS Consumption Views?",
    "options": ["Expose Data For Applications", "Store Data", "Deploy Apps", "Create Roles"],
    "correct": [0],
    "explanation": "Consumption views are designed for application usage."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP object defines available CRUD operations?",
    "options": ["Behavior Definition", "Metadata Extension", "Projection View", "Service Binding"],
    "correct": [0],
    "explanation": "Behavior Definition controls operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP object contains implementation code?",
    "options": ["Behavior Implementation", "Service Definition", "Projection View", "Metadata Extension"],
    "correct": [0],
    "explanation": "Business logic resides there."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP feature allows incomplete changes to be saved?",
    "options": ["Draft Handling", "Batch Processing", "Locking", "Projection"],
    "correct": [0],
    "explanation": "Draft enables temporary save."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP file defines entities and services?",
    "options": [".cds File", "package.json", "mta.yaml", "xs-security.json"],
    "correct": [0],
    "explanation": "CDS is the core modeling language."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP command runs application locally?",
    "options": ["cds watch", "cds deploy", "cf deploy", "mbt build"],
    "correct": [0],
    "explanation": "cds watch starts local server."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP folder typically contains service implementations?",
    "options": ["srv", "db", "app", "test"],
    "correct": [0],
    "explanation": "srv contains services and handlers."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData V4 feature is improved compared to V2?",
    "options": ["Better Standardization", "No Metadata", "No CRUD", "No Batch"],
    "correct": [0],
    "explanation": "V4 provides improved standards compliance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which query option expands navigation entities?",
    "options": ["$expand", "$select", "$top", "$count"],
    "correct": [0],
    "explanation": "Expand retrieves related entities."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which query option limits returned fields?",
    "options": ["$select", "$expand", "$skip", "$orderby"],
    "correct": [0],
    "explanation": "Select reduces payload."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which query option is most useful for pagination?",
    "options": ["$top and $skip", "$expand", "$metadata", "$count only"],
    "correct": [0],
    "explanation": "Top and Skip support paging."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotations are commonly used in List Reports?",
    "options": ["UI.LineItem", "UI.SelectionFields", "UI.DataPoint", "UI.Hidden"],
    "correct": [0, 1, 2, 3],
    "explanation": "All may appear in List Reports."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP artifacts are important?",
    "options": ["CDS Views", "Behavior Definitions", "Behavior Implementations", "Service Bindings"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are key RAP components."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP technologies are commonly used?",
    "options": ["Node.js", "Java", "CDS", "HANA"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are supported."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP services are frequently used in SAPUI5 projects?",
    "options": ["XSUAA", "Destination", "Connectivity", "HTML5 Repo"],
    "correct": [0, 1, 2, 3],
    "explanation": "These are common services."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Deployment succeeds but app is inaccessible. First thing to verify?",
    "options": ["Role Collection Assignment", "Theme", "CSS", "Fragment"],
    "correct": [0],
    "explanation": "Authorization issues are common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Destination test fails on BTP. What should be checked first?",
    "options": ["Destination Configuration", "Theme", "CDS", "Annotation"],
    "correct": [0],
    "explanation": "Incorrect destination setup is common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file defines BTP security scopes and roles?",
    "options": ["xs-security.json", "manifest.json", "package.json", "ui5.yaml"],
    "correct": [0],
    "explanation": "Security definitions reside there."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which command creates MTAR archive?",
    "options": ["mbt build", "cf deploy", "cds watch", "npm run start"],
    "correct": [0],
    "explanation": "mbt build generates MTAR."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP service stores deployed SAPUI5 apps?",
    "options": ["HTML5 Application Repository", "XSUAA", "Destination", "Connectivity"],
    "correct": [0],
    "explanation": "HTML5 Repo stores UI apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which topics are considered most difficult in UX400 certification?",
    "options": ["Fiori Elements + OData + CDS + Routing", "Icons", "Themes", "Fonts"],
    "correct": [0],
    "explanation": "These topics frequently appear in advanced questions."
  },


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which section in manifest.json contains OData service definitions?",
    "options": ["sap.app/dataSources", "sap.ui5/models", "sap.fiori", "sap.cloud"],
    "correct": [0],
    "explanation": "dataSources define backend services."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which manifest section contains routing configuration?",
    "options": ["sap.ui5/routing", "sap.app", "sap.fiori", "sap.cloud"],
    "correct": [0],
    "explanation": "Routes and targets are defined here."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A route exists but navigation fails. What should be checked first?",
    "options": ["Target Configuration", "Theme", "CSS", "i18n"],
    "correct": [0],
    "explanation": "Missing targets are a common reason."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of Component-preload.js?",
    "options": ["Bundle Resources For Faster Loading", "Store Data", "Manage Routing", "Handle Security"],
    "correct": [0],
    "explanation": "Preload files improve startup performance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file usually starts a Mock Server?",
    "options": ["mockserver.js", "manifest.json", "Component.js", "index.html"],
    "correct": [0],
    "explanation": "Mock server initialization is generally in mockserver.js."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is required for a Mock Server to simulate an OData service?",
    "options": ["metadata.xml", "package.json", "ui5.yaml", "mta.yaml"],
    "correct": [0],
    "explanation": "Metadata describes entities and properties."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A Mock Server returns no records. What should be checked first?",
    "options": ["Mock Data JSON Structure", "Theme", "Router", "Fragment"],
    "correct": [0],
    "explanation": "Incorrect mock data structure is common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is an Adaptation Project primarily used for?",
    "options": ["Extend Standard SAP Fiori Apps", "Create CDS Views", "Deploy CAP Apps", "Create Roles"],
    "correct": [0],
    "explanation": "Adaptation Projects customize standard apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which extension type adds custom business logic to a standard app?",
    "options": ["Controller Extension", "Theme Extension", "CSS Extension", "Catalog Extension"],
    "correct": [0],
    "explanation": "Controller Extensions add logic."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is an Extension Point?",
    "options": ["Placeholder For Custom Content", "OData Service", "CDS Annotation", "Role Assignment"],
    "correct": [0],
    "explanation": "Extension Points allow insertion of custom UI."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 concept allows adding custom fields to standard Fiori Elements apps?",
    "options": ["UI Adaptation", "Batch Processing", "Device Model", "Value Help"],
    "correct": [0],
    "explanation": "UI Adaptation enables extensibility."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the Flexible Programming Model?",
    "options": ["Combines Fiori Elements With Custom Code", "Deployment Framework", "Security Framework", "Theme Engine"],
    "correct": [0],
    "explanation": "FPM allows extension of Fiori Elements."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which page type is most commonly generated in Fiori Elements?",
    "options": ["List Report", "Freestyle Dashboard", "ALV Grid", "Launchpad Page"],
    "correct": [0],
    "explanation": "List Reports are very common."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which page usually opens after selecting a row in a List Report?",
    "options": ["Object Page", "Overview Page", "Worklist", "Launchpad"],
    "correct": [0],
    "explanation": "Object Page displays record details."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A Fiori Elements app displays no columns. What should be verified first?",
    "options": ["UI.LineItem Annotation", "Theme", "CSS", "Role Collection"],
    "correct": [0],
    "explanation": "LineItem controls visible columns."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which files are commonly involved in Mock Server setup?",
    "options": ["metadata.xml", "mockserver.js", "mockdata/*.json", "manifest.json"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are commonly used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which areas are commonly extended in Adaptation Projects?",
    "options": ["UI Changes", "Controller Logic", "Custom Fields", "Navigation"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common adaptation scenarios."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which factors can cause Launchpad navigation failures?",
    "options": ["Missing Target Mapping", "Incorrect Semantic Object", "Role Missing", "Catalog Missing"],
    "correct": [0, 1, 2, 3],
    "explanation": "All can break navigation."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 topics are most frequently asked in interviews?",
    "options": ["Data Binding", "Routing", "OData", "Fragments"],
    "correct": [0, 1, 2, 3],
    "explanation": "These topics are heavily tested."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which topic generally has the highest weight in SAPUI5/Fiori interviews?",
    "options": ["Data Binding + OData + Routing", "Themes", "Icons", "Custom Fonts"],
    "correct": [0],
    "explanation": "These form the core of most SAPUI5 applications."
  },

  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is a Semantic Object in Fiori Launchpad?",
    "options": ["Business Object Used For Navigation", "OData Entity", "CDS View", "Role Collection"],
    "correct": [0],
    "explanation": "Semantic Objects are used in intent-based navigation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which format is used for intent-based navigation?",
    "options": ["#SemanticObject-action", "#Route/Path", "/sap/opu/odata", "manifest.json"],
    "correct": [0],
    "explanation": "Intent-based navigation uses SemanticObject-action."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which Launchpad artifact maps intents to applications?",
    "options": ["Target Mapping", "Group", "Tile", "Role"],
    "correct": [0],
    "explanation": "Target Mapping resolves intents."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens if Target Mapping is missing?",
    "options": ["Navigation Fails", "OData Stops", "Theme Breaks", "Metadata Error"],
    "correct": [0],
    "explanation": "Launchpad cannot resolve the intent."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 API performs cross-app navigation?",
    "options": ["CrossApplicationNavigation", "Router", "History", "HashChanger"],
    "correct": [0],
    "explanation": "Used for FLP cross-application navigation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData query option sorts records?",
    "options": ["$orderby", "$filter", "$top", "$select"],
    "correct": [0],
    "explanation": "$orderby sorts results."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData query option filters records?",
    "options": ["$filter", "$orderby", "$expand", "$top"],
    "correct": [0],
    "explanation": "$filter restricts returned data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData query option returns total record count?",
    "options": ["$count", "$top", "$skip", "$orderby"],
    "correct": [0],
    "explanation": "$count returns entity count."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which query minimizes payload size most effectively?",
    "options": ["$select", "$expand", "$count", "$orderby"],
    "correct": [0],
    "explanation": "$select retrieves only needed fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is lazy loading in SAPUI5?",
    "options": ["Loading Resources Only When Needed", "Caching Metadata", "Batch Requests", "CSRF Handling"],
    "correct": [0],
    "explanation": "Improves performance by reducing initial load."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the main purpose of Component-preload.js?",
    "options": ["Reduce HTTP Requests", "Store OData", "Handle Security", "Provide Routing"],
    "correct": [0],
    "explanation": "Bundles resources for performance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status code indicates success?",
    "options": ["200", "404", "500", "403"],
    "correct": [0],
    "explanation": "200 indicates successful request."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP status code indicates resource creation?",
    "options": ["201", "404", "401", "500"],
    "correct": [0],
    "explanation": "201 Created is returned after successful creation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What does CSRF stand for?",
    "options": ["Cross Site Request Forgery", "Cross Server Request Flow", "Client Side Response Format", "Cross Service Runtime Framework"],
    "correct": [0],
    "explanation": "Security protection mechanism."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Why is a CSRF token required?",
    "options": ["Protect State-Changing Requests", "Improve Routing", "Improve Performance", "Load Metadata"],
    "correct": [0],
    "explanation": "Prevents unauthorized request execution."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP service handles authentication?",
    "options": ["XSUAA", "Destination", "Connectivity", "HTML5 Repo"],
    "correct": [0],
    "explanation": "XSUAA provides authentication and authorization."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP service stores destination URLs?",
    "options": ["Destination Service", "Connectivity", "XSUAA", "Audit Log"],
    "correct": [0],
    "explanation": "Destination Service manages endpoints."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of Role Collections?",
    "options": ["Assign Business Authorizations", "Store OData", "Manage Themes", "Create CDS"],
    "correct": [0],
    "explanation": "Role Collections group permissions."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file defines application roles and scopes?",
    "options": ["xs-security.json", "manifest.json", "ui5.yaml", "package.json"],
    "correct": [0],
    "explanation": "Security configuration file."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which browser tab is most useful for OData request analysis?",
    "options": ["Network", "Elements", "Performance", "Application"],
    "correct": [0],
    "explanation": "Network shows requests and responses."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which factors improve SAPUI5 application performance?",
    "options": ["Batch Requests", "$select", "Lazy Loading", "Component Preload"],
    "correct": [0, 1, 2, 3],
    "explanation": "All reduce loading overhead."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which HTTP methods are used in OData CRUD?",
    "options": ["GET", "POST", "PATCH", "DELETE"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are standard CRUD methods."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which security concepts are important in SAP BTP?",
    "options": ["XSUAA", "Role Collections", "Scopes", "CSRF Protection"],
    "correct": [0, 1, 2, 3],
    "explanation": "All contribute to application security."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which tools help debug SAPUI5 applications?",
    "options": ["Browser DevTools", "Support Assistant", "Network Tab", "Console"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are valuable debugging tools."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A deployed application opens locally but not from Launchpad. First thing to check?",
    "options": ["Target Mapping", "Theme", "Formatter", "Mock Data"],
    "correct": [0],
    "explanation": "Launchpad navigation depends on target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 optimization often provides the biggest improvement?",
    "options": ["Reducing OData Payload", "Changing Theme", "Using Icons", "Custom Fonts"],
    "correct": [0],
    "explanation": "Payload reduction significantly impacts performance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which topic is most important when troubleshooting slow applications?",
    "options": ["Network Requests", "Themes", "Icons", "CSS"],
    "correct": [0],
    "explanation": "Network traffic is often the bottleneck."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which interview topic is most frequently asked for experienced SAPUI5 developers?",
    "options": ["OData + Binding + Routing", "Themes", "Fonts", "Icons"],
    "correct": [0],
    "explanation": "Core SAPUI5 concepts dominate interviews."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which certification area often combines SAPUI5, OData and Launchpad concepts?",
    "options": ["End-to-End Application Development", "Theme Design", "CSS Styling", "Image Management"],
    "correct": [0],
    "explanation": "Real scenarios combine multiple concepts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which single topic should be mastered first for SAPUI5 success?",
    "options": ["Data Binding", "Themes", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "Almost every SAPUI5 application relies heavily on binding."
  }
  ,


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to get a control by ID inside a view?",
    "options": ["byId()", "getElementById()", "findById()", "getControl()"],
    "correct": [0],
    "explanation": "this.byId() is the standard SAPUI5 method."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to access the current view?",
    "options": ["getView()", "currentView()", "view()", "fetchView()"],
    "correct": [0],
    "explanation": "getView() returns the current view instance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the output of this.byId('inpName').getValue()?",
    "options": ["Input Field Value", "Entire Control", "Binding Context", "Model Object"],
    "correct": [0],
    "explanation": "Returns the value entered in the Input control."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method sets a value in Input control?",
    "options": ["setValue()", "setText()", "updateValue()", "assignValue()"],
    "correct": [0],
    "explanation": "Input controls use setValue()."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method displays a toast message?",
    "options": ["MessageToast.show()", "Toast.show()", "Alert.show()", "Notification.show()"],
    "correct": [0],
    "explanation": "sap.m.MessageToast.show() is standard."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which class is commonly used for confirmation dialogs?",
    "options": ["MessageBox", "MessageToast", "Popover", "Panel"],
    "correct": [0],
    "explanation": "MessageBox provides confirmation dialogs."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method reads selected item from a List?",
    "options": ["getSelectedItem()", "getItem()", "getCurrentItem()", "fetchSelected()"],
    "correct": [0],
    "explanation": "Returns currently selected list item."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which event is triggered when a list item is pressed?",
    "options": ["itemPress", "change", "select", "pressItem"],
    "correct": [0],
    "explanation": "itemPress is commonly used."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method gets the binding context of a selected item?",
    "options": ["getBindingContext()", "getContext()", "binding()", "context()"],
    "correct": [0],
    "explanation": "Returns current binding context."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of getObject() on binding context?",
    "options": ["Returns Bound Data Object", "Returns Control", "Returns Route", "Returns Model"],
    "correct": [0],
    "explanation": "Retrieves actual bound data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method refreshes bindings of a model?",
    "options": ["refresh()", "reload()", "updateBindings()", "reset()"],
    "correct": [0],
    "explanation": "refresh() updates bindings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What does setBusy(true) do?",
    "options": ["Shows Busy Indicator", "Locks Database", "Disables Routing", "Refreshes Model"],
    "correct": [0],
    "explanation": "Indicates processing state."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "When should setBusy(false) be called?",
    "options": ["After Async Processing Completes", "Before Request", "During Navigation", "Before Binding"],
    "correct": [0],
    "explanation": "Removes busy state."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which OData callback executes after successful read?",
    "options": ["success", "done", "complete", "loaded"],
    "correct": [0],
    "explanation": "success callback receives response."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which callback handles OData read failures?",
    "options": ["error", "fail", "reject", "catch"],
    "correct": [0],
    "explanation": "error callback handles failures."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which operations require CSRF tokens?",
    "options": ["POST", "PUT", "PATCH", "DELETE"],
    "correct": [0, 1, 2, 3],
    "explanation": "All state-changing operations require CSRF protection."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which lifecycle methods execute only once per controller instance?",
    "options": ["onInit", "onExit", "onBeforeRendering", "onAfterRendering"],
    "correct": [0, 1],
    "explanation": "onInit and onExit run once."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which controls are frequently used in SAP Fiori forms?",
    "options": ["Input", "ComboBox", "DatePicker", "CheckBox"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are common form controls."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines table columns in Fiori Elements?",
    "options": ["UI.LineItem", "UI.Chart", "UI.Hidden", "UI.HeaderInfo"],
    "correct": [0],
    "explanation": "LineItem controls visible columns."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines Object Page sections?",
    "options": ["UI.Facets", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "Facets create sections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP command deploys to SQLite locally?",
    "options": ["cds deploy", "cds watch", "cf deploy", "mbt build"],
    "correct": [0],
    "explanation": "cds deploy creates local database artifacts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP folder contains database models?",
    "options": ["db", "srv", "app", "test"],
    "correct": [0],
    "explanation": "Database entities reside in db."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP artifact exposes business objects externally?",
    "options": ["Service Definition", "Behavior Definition", "Metadata Extension", "Projection View"],
    "correct": [0],
    "explanation": "Service Definition exposes entities."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP artifact publishes OData services?",
    "options": ["Service Binding", "Behavior Definition", "Projection", "Metadata Extension"],
    "correct": [0],
    "explanation": "Service Binding publishes protocols."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which debugging tools are useful for SAPUI5 interviews?",
    "options": ["Console", "Network", "Support Assistant", "Breakpoints"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are important debugging tools."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which routing components are configured in manifest.json?",
    "options": ["routes", "targets", "config", "routerClass"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are part of routing configuration."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the most common cause of undefined values in SAPUI5?",
    "options": ["Wrong Binding Path", "Theme", "Launchpad", "CSS"],
    "correct": [0],
    "explanation": "Incorrect paths are a common issue."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the first thing to verify when OData data is not displayed?",
    "options": ["Binding Path", "Theme", "Icons", "CSS"],
    "correct": [0],
    "explanation": "Most display issues originate from incorrect binding."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 topic appears in nearly every project?",
    "options": ["Models and Data Binding", "Themes", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "Every application relies on models and bindings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which three topics should be mastered first for UX400 and interviews?",
    "options": ["Data Binding, Routing, OData", "Themes, Fonts, Icons", "CSS, Bootstrap, jQuery", "Launchpad Colors"],
    "correct": [0],
    "explanation": "These are foundational SAPUI5 concepts."
  },


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method retrieves the Owner Component from a controller?",
    "options": ["this.getOwnerComponent()", "this.getComponent()", "Component.get()", "sap.ui.getComponent()"],
    "correct": [0],
    "explanation": "getOwnerComponent() returns the component instance."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to access Router from a controller?",
    "options": ["this.getOwnerComponent().getRouter()", "this.getRouter()", "sap.ui.getRouter()", "Router.getInstance()"],
    "correct": [0],
    "explanation": "Router is generally accessed through the owner component."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A route parameter is not available after navigation. What should be checked first?",
    "options": ["Route Pattern Definition", "Theme", "CSS", "i18n"],
    "correct": [0],
    "explanation": "Incorrect route patterns commonly cause parameter issues."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which API retrieves route arguments in patternMatched event?",
    "options": ["oEvent.getParameter('arguments')", "oEvent.getArguments()", "oEvent.args", "oEvent.routeArgs"],
    "correct": [0],
    "explanation": "Arguments are passed through the event parameter."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding type is best for displaying a single object?",
    "options": ["Element Binding", "Aggregation Binding", "List Binding", "Factory Binding"],
    "correct": [0],
    "explanation": "Element binding binds an entire object context."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding type is commonly used for tables and lists?",
    "options": ["Aggregation Binding", "Element Binding", "Property Binding", "Expression Binding"],
    "correct": [0],
    "explanation": "Tables and lists use aggregation binding."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A formatter returns undefined. What is the most likely cause?",
    "options": ["Unexpected Input Value", "Theme", "Routing", "Metadata"],
    "correct": [0],
    "explanation": "Input data often does not match expected format."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 model is used for localization texts?",
    "options": ["ResourceModel", "JSONModel", "ODataModel", "XMLModel"],
    "correct": [0],
    "explanation": "ResourceModel handles i18n texts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file commonly contains localization entries?",
    "options": ["i18n.properties", "manifest.json", "Component.js", "ui5.yaml"],
    "correct": [0],
    "explanation": "Localization keys are stored in i18n.properties."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What happens when a model is set at Component level?",
    "options": ["Accessible Across Application", "Only Current View", "Only Current Controller", "Only Fragment"],
    "correct": [0],
    "explanation": "Component-level models are globally accessible."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which feature reduces OData network calls significantly?",
    "options": ["Batch Requests", "Themes", "Fragments", "Formatter"],
    "correct": [0],
    "explanation": "Batch requests combine multiple operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the main purpose of deferred groups in OData?",
    "options": ["Control Request Submission", "Improve CSS", "Enable Routing", "Store Metadata"],
    "correct": [0],
    "explanation": "Deferred groups delay request execution."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method submits deferred changes?",
    "options": ["submitChanges()", "saveChanges()", "commit()", "flush()"],
    "correct": [0],
    "explanation": "submitChanges sends pending modifications."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines a chart in Fiori Elements?",
    "options": ["UI.Chart", "UI.LineItem", "UI.Facets", "UI.Hidden"],
    "correct": [0],
    "explanation": "UI.Chart configures chart visualization."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which annotation defines identification fields?",
    "options": ["UI.Identification", "UI.Chart", "UI.HeaderInfo", "UI.SelectionFields"],
    "correct": [0],
    "explanation": "Used in Object Page details."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CDS annotations are commonly used in Fiori Elements?",
    "options": ["UI.LineItem", "UI.Facets", "UI.SelectionFields", "UI.HeaderInfo"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are heavily used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP components are important?",
    "options": ["CDS", "Service Handlers", "Database Models", "Authentication"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are core CAP components."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP file manages Node.js dependencies?",
    "options": ["package.json", "mta.yaml", "manifest.json", "ui5.yaml"],
    "correct": [0],
    "explanation": "package.json manages dependencies."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which CAP command starts the application in watch mode?",
    "options": ["cds watch", "cds run", "cds deploy", "cf push"],
    "correct": [0],
    "explanation": "cds watch enables live reload."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which RAP concept controls field validation?",
    "options": ["Behavior Definition", "Projection View", "Metadata Extension", "Service Binding"],
    "correct": [0],
    "explanation": "Validations are defined in behavior logic."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP service allows access to on-premise systems?",
    "options": ["Connectivity Service", "HTML5 Repo", "XSUAA", "Audit Log"],
    "correct": [0],
    "explanation": "Connectivity enables secure integration."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which BTP service stores destination configurations?",
    "options": ["Destination Service", "Connectivity", "XSUAA", "Workflow"],
    "correct": [0],
    "explanation": "Destination Service stores endpoint details."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "A deployed app shows a blank page. First thing to inspect?",
    "options": ["Browser Console", "Theme", "Catalog", "Role Collection"],
    "correct": [0],
    "explanation": "Console often reveals runtime errors."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which browser tool is most useful for JavaScript debugging?",
    "options": ["Sources Tab", "Elements", "Application", "Network Only"],
    "correct": [0],
    "explanation": "Sources tab supports breakpoints."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which issues commonly cause OData request failures?",
    "options": ["Wrong URL", "Authorization Issues", "Network Problems", "Backend Errors"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are frequent causes."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which methods belong to JSONModel?",
    "options": ["setData", "getData", "setProperty", "getProperty"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are standard JSONModel APIs."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 feature is most important for reusable UI parts?",
    "options": ["Fragments", "Themes", "Icons", "CSS Variables"],
    "correct": [0],
    "explanation": "Fragments enable reusable UI components."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 feature is most important for application navigation?",
    "options": ["Routing", "Formatter", "Theme Designer", "Resource Bundles"],
    "correct": [0],
    "explanation": "Routing manages navigation flow."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 concept is most critical for displaying backend data?",
    "options": ["Data Binding", "Themes", "Icons", "Fonts"],
    "correct": [0],
    "explanation": "Data Binding connects UI with data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "For UX400 certification and SAPUI5 interviews, which combination provides the strongest foundation?",
    "options": ["Data Binding + OData + Routing + Fiori Elements", "Themes + CSS + Icons", "Fonts + Images + Layouts", "Bootstrap + jQuery"],
    "correct": [0],
    "explanation": "These are the most frequently tested and used concepts."
  },


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is mandatory for displaying columns in a List Report?",
    "options": ["UI.LineItem", "UI.Chart", "UI.Facets", "UI.Hidden"],
    "correct": [0],
    "explanation": "UI.LineItem defines the columns displayed in a List Report."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation defines fields displayed in filter bar?",
    "options": ["UI.SelectionFields", "UI.FieldGroup", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "SelectionFields control filter bar fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is responsible for Object Page title information?",
    "options": ["UI.HeaderInfo", "UI.DataPoint", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "HeaderInfo defines title and description."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation creates Object Page sections?",
    "options": ["UI.Facets", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "Facets create sections and subsections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is used for KPI indicators?",
    "options": ["UI.DataPoint", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "DataPoint is used for KPI display."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is required for chart generation?",
    "options": ["UI.Chart", "UI.DataPoint", "UI.Facets", "UI.Hidden"],
    "correct": [0],
    "explanation": "UI.Chart defines chart metadata."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What is the main purpose of Metadata Extensions?",
    "options": ["Separate UI Annotations", "Deploy Applications", "Create Roles", "Manage Themes"],
    "correct": [0],
    "explanation": "Metadata extensions separate annotations from CDS."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which Fiori Elements page is best for analytical reporting?",
    "options": ["Analytical List Page", "Object Page", "Worklist", "Dashboard Tile"],
    "correct": [0],
    "explanation": "ALP combines analytics and transactional data."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which feature allows custom actions in Fiori Elements?",
    "options": ["Controller Extension", "Theme Extension", "CSS Extension", "Catalog Extension"],
    "correct": [0],
    "explanation": "Controller extensions add custom functionality."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What is the main benefit of Fiori Elements?",
    "options": ["Less Custom Coding", "More CSS", "Manual Routing", "Theme Creation"],
    "correct": [0],
    "explanation": "Fiori Elements is metadata driven."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Launchpad artifact contains app definitions?",
    "options": ["Catalog", "Space", "Page", "Role Collection"],
    "correct": [0],
    "explanation": "Catalogs contain applications and target mappings."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Launchpad artifact organizes apps visually?",
    "options": ["Page", "Role", "Destination", "Scope"],
    "correct": [0],
    "explanation": "Pages organize apps shown to users."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which artifact replaces Groups in modern Launchpad?",
    "options": ["Spaces and Pages", "Tiles", "Themes", "Targets"],
    "correct": [0],
    "explanation": "Spaces and Pages are the modern approach."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which service stores deployed SAPUI5 applications?",
    "options": ["HTML5 Application Repository", "XSUAA", "Destination", "Connectivity"],
    "correct": [0],
    "explanation": "HTML5 Repo stores UI applications."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which BTP service manages authentication?",
    "options": ["XSUAA", "Destination", "Connectivity", "Workflow"],
    "correct": [0],
    "explanation": "XSUAA handles authentication and authorization."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which BTP service stores backend URLs?",
    "options": ["Destination Service", "HTML5 Repo", "Workflow", "Audit Log"],
    "correct": [0],
    "explanation": "Destination Service stores endpoint configurations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "What is the format of Intent-Based Navigation?",
    "options": ["#SemanticObject-action", "#Route/View", "/sap/opu/odata", "manifest.json"],
    "correct": [0],
    "explanation": "Intent navigation uses SemanticObject-action."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which artifact resolves semantic objects to applications?",
    "options": ["Target Mapping", "Role", "Catalog", "Tile"],
    "correct": [0],
    "explanation": "Target Mappings link intents to apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "What happens if Target Mapping is missing?",
    "options": ["Navigation Fails", "Theme Breaks", "OData Stops", "Deployment Fails"],
    "correct": [0],
    "explanation": "FLP cannot resolve navigation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "What is Federated Content?",
    "options": ["Content From Multiple Providers", "Theme Collection", "Role Collection", "App Collection"],
    "correct": [0],
    "explanation": "Work Zone can consume content from multiple providers."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotations are commonly used in List Reports?",
    "options": ["UI.LineItem", "UI.SelectionFields", "UI.DataPoint", "UI.Hidden"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are frequently used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which page types belong to Fiori Elements?",
    "options": ["List Report", "Object Page", "Overview Page", "Analytical List Page"],
    "correct": [0, 1, 2, 3],
    "explanation": "These are standard Fiori Elements templates."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which artifacts are part of Launchpad Content?",
    "options": ["Catalog", "Space", "Page", "Target Mapping"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are important Launchpad objects."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which BTP services are commonly used in Fiori deployments?",
    "options": ["XSUAA", "Destination", "HTML5 Repo", "Connectivity"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are standard services."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation defines identification fields on Object Page?",
    "options": ["UI.Identification", "UI.Chart", "UI.Hidden", "UI.DataPoint"],
    "correct": [0],
    "explanation": "Identification controls important fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is used to group related fields?",
    "options": ["UI.FieldGroup", "UI.LineItem", "UI.Chart", "UI.Hidden"],
    "correct": [0],
    "explanation": "FieldGroup logically groups fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which application is used to manage Launchpad content?",
    "options": ["Content Manager", "Theme Designer", "Workflow Manager", "Destination Explorer"],
    "correct": [0],
    "explanation": "Content Manager manages content and assignments."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which application manages Work Zone sites?",
    "options": ["Site Manager", "Business Application Studio", "Launchpad Designer", "Web IDE"],
    "correct": [0],
    "explanation": "Site Manager controls Work Zone sites."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which development approach requires the least amount of UI coding?",
    "options": ["Fiori Elements", "Freestyle SAPUI5", "jQuery", "HTML"],
    "correct": [0],
    "explanation": "Fiori Elements is metadata-driven."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which concept determines what applications a user can access?",
    "options": ["Role Collection", "Theme", "Page", "Tile"],
    "correct": [0],
    "explanation": "Role Collections define authorizations."
  },


  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation defines criticality colors for KPI fields?",
    "options": ["UI.DataPoint", "UI.Chart", "UI.LineItem", "UI.Facets"],
    "correct": [0],
    "explanation": "DataPoint supports criticality indicators."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is used to define navigation targets?",
    "options": ["UI.Identification", "UI.Hidden", "UI.Chart", "UI.SelectionFields"],
    "correct": [0],
    "explanation": "Identification fields can contain navigation links."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which Fiori Elements page template is best suited for displaying KPIs and analytical charts?",
    "options": ["Analytical List Page", "Object Page", "List Report", "Worklist"],
    "correct": [0],
    "explanation": "ALP combines KPIs, charts and tables."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation controls the visibility of an entire facet?",
    "options": ["UI.Hidden", "UI.Chart", "UI.DataPoint", "UI.HeaderInfo"],
    "correct": [0],
    "explanation": "Hidden annotation can hide facets and fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What is the purpose of a Metadata Extension file?",
    "options": ["Store UI Annotations Separately", "Deploy Application", "Create OData Service", "Manage Roles"],
    "correct": [0],
    "explanation": "Metadata extensions separate UI logic from CDS."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which extension type allows adding custom sections to Object Pages?",
    "options": ["View Extension", "Theme Extension", "Role Extension", "Catalog Extension"],
    "correct": [0],
    "explanation": "View Extensions add custom UI sections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What is the primary goal of Flexible Programming Model?",
    "options": ["Extend Standard Fiori Elements Apps", "Create Themes", "Build Launchpad", "Manage Security"],
    "correct": [0],
    "explanation": "FPM combines standard templates with custom code."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is required for creating charts in ALP?",
    "options": ["UI.Chart", "UI.Facets", "UI.LineItem", "UI.Hidden"],
    "correct": [0],
    "explanation": "Charts require UI.Chart."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation is commonly used with value helps?",
    "options": ["Common.ValueList", "UI.Chart", "UI.LineItem", "UI.Hidden"],
    "correct": [0],
    "explanation": "ValueList defines value help metadata."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which feature allows temporary saving of changes before activation?",
    "options": ["Draft Handling", "Batch Processing", "Deep Insert", "Side Effects"],
    "correct": [0],
    "explanation": "Draft Handling stores incomplete changes."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Launchpad artifact contains semantic object mappings?",
    "options": ["Target Mapping", "Page", "Space", "Theme"],
    "correct": [0],
    "explanation": "Target Mappings connect intents to apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which artifact groups Pages together?",
    "options": ["Space", "Catalog", "Tile", "Role"],
    "correct": [0],
    "explanation": "Spaces contain Pages."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Work Zone component is used to administer sites?",
    "options": ["Site Manager", "Content Manager", "Business Studio", "Theme Manager"],
    "correct": [0],
    "explanation": "Site Manager manages Work Zone sites."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which component imports business content into Work Zone?",
    "options": ["Content Manager", "Theme Designer", "Connectivity Service", "Workflow"],
    "correct": [0],
    "explanation": "Content Manager handles content import."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which service is required to expose backend systems securely?",
    "options": ["Destination Service", "HTML5 Repo", "Theme Service", "Audit Log"],
    "correct": [0],
    "explanation": "Destinations define backend connections."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which BTP service is commonly used with Cloud Foundry authentication?",
    "options": ["XSUAA", "Connectivity", "Workflow", "Audit Log"],
    "correct": [0],
    "explanation": "XSUAA manages authentication and authorization."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "What happens when a user lacks Role Collection assignment?",
    "options": ["Application Access Fails", "Theme Changes", "Metadata Fails", "Deployment Stops"],
    "correct": [0],
    "explanation": "Users cannot access authorized apps."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which concept is central to Intent-Based Navigation?",
    "options": ["Semantic Object", "Fragment", "Formatter", "Theme"],
    "correct": [0],
    "explanation": "Semantic Objects drive navigation."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which format represents Intent-Based Navigation?",
    "options": ["#SemanticObject-action", "#/Route", "/odata/service", "manifest.json"],
    "correct": [0],
    "explanation": "Standard intent navigation syntax."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Launchpad object determines application availability?",
    "options": ["Role Collection", "Theme", "Page", "Tile"],
    "correct": [0],
    "explanation": "Role Collections control access."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotations are heavily used in Object Pages?",
    "options": ["UI.HeaderInfo", "UI.Facets", "UI.FieldGroup", "UI.Identification"],
    "correct": [0, 1, 2, 3],
    "explanation": "All are standard Object Page annotations."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which Fiori Elements templates are available?",
    "options": ["List Report", "Object Page", "Overview Page", "Analytical List Page"],
    "correct": [0, 1, 2, 3],
    "explanation": "These are standard templates."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which Launchpad objects are required for navigation?",
    "options": ["Semantic Object", "Action", "Target Mapping", "Catalog"],
    "correct": [0, 1, 2, 3],
    "explanation": "All contribute to successful navigation."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which BTP services are commonly used in Work Zone projects?",
    "options": ["XSUAA", "Destination", "HTML5 Repo", "Connectivity"],
    "correct": [0, 1, 2, 3],
    "explanation": "These services are widely used."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation helps organize fields logically inside Object Page sections?",
    "options": ["UI.FieldGroup", "UI.Chart", "UI.Hidden", "UI.LineItem"],
    "correct": [0],
    "explanation": "FieldGroup organizes related fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which annotation creates table columns automatically?",
    "options": ["UI.LineItem", "UI.HeaderInfo", "UI.Hidden", "UI.Chart"],
    "correct": [0],
    "explanation": "LineItem generates columns."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which application is used to assign content to roles in Work Zone?",
    "options": ["Content Manager", "Site Manager", "Theme Manager", "Workflow Manager"],
    "correct": [0],
    "explanation": "Content Manager handles assignments."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which concept allows content from S/4HANA to appear in Work Zone?",
    "options": ["Federated Content", "Theme Import", "CDS Replication", "Tile Export"],
    "correct": [0],
    "explanation": "Federated Content exposes remote content."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which development approach minimizes custom UI coding effort?",
    "options": ["Fiori Elements", "Freestyle SAPUI5", "HTML5", "jQuery"],
    "correct": [0],
    "explanation": "Fiori Elements is metadata-driven."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux403",
    "question": "Which topic is most frequently tested in UX403 certification?",
    "options": ["Launchpad Content and Navigation", "CSS Styling", "Theme Design", "Icons"],
    "correct": [0],
    "explanation": "Content management and navigation are core UX403 topics."
  }



];
