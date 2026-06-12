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
  },


{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is used to declare an internal table?",
"options":["DATA lt_tab TYPE TABLE OF mara","CREATE TABLE mara","DECLARE TABLE mara","TABLES mara"],
"correct":[0],
"explanation":"DATA ... TYPE TABLE OF is the standard syntax."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to loop through an internal table?",
"options":["LOOP AT","FOR EACH","ITERATE","WHILE TABLE"],
"correct":[0],
"explanation":"LOOP AT is used to process internal table records."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which are valid ABAP internal table types?",
"options":["STANDARD","SORTED","HASHED","DATABASE"],
"correct":[0,1,2],
"explanation":"STANDARD, SORTED and HASHED are internal table types."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used to read a specific record from an internal table?",
"options":["READ TABLE","SELECT SINGLE","FETCH ROW","GET RECORD"],
"correct":[0],
"explanation":"READ TABLE retrieves data from internal tables."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to create local classes in ABAP?",
"options":["CLASS","OBJECT","METHOD","DEFINE"],
"correct":[0],
"explanation":"CLASS ... DEFINITION creates a class."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which visibility sections exist in ABAP OO?",
"options":["PUBLIC SECTION","PROTECTED SECTION","PRIVATE SECTION","VISIBLE SECTION"],
"correct":[0,1,2],
"explanation":"ABAP supports Public, Protected and Private sections."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which method is called automatically when an object is created?",
"options":["CONSTRUCTOR","INIT","CREATE","NEW"],
"correct":[0],
"explanation":"Constructor executes during object creation."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement creates an object instance?",
"options":["CREATE OBJECT","NEW OBJECT","INSTANCE OF","ALLOCATE"],
"correct":[0],
"explanation":"CREATE OBJECT instantiates classes."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is used to retrieve database records?",
"options":["SELECT","FETCH","GET","READ"],
"correct":[0],
"explanation":"SELECT retrieves database data."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which SQL clauses are commonly used with SELECT?",
"options":["WHERE","ORDER BY","GROUP BY","HAVING"],
"correct":[0,1,2,3],
"explanation":"All are valid SQL clauses."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction is used to create an OData service in SEGW?",
"options":["SEGW","SE80","SICF","SE11"],
"correct":[0],
"explanation":"SEGW is the SAP Gateway Service Builder."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which method is implemented to fetch entity set data?",
"options":["GET_ENTITYSET","GET_ENTITY","CREATE_ENTITY","UPDATE_ENTITY"],
"correct":[0],
"explanation":"GET_ENTITYSET retrieves collections."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which method retrieves a single entity?",
"options":["GET_ENTITY","GET_ENTITYSET","READ_ENTITY","FETCH_ENTITY"],
"correct":[0],
"explanation":"GET_ENTITY retrieves one record."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which CRUD methods exist in SEGW?",
"options":["CREATE_ENTITY","GET_ENTITY","UPDATE_ENTITY","DELETE_ENTITY"],
"correct":[0,1,2,3],
"explanation":"These methods implement CRUD operations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction activates SAP Gateway services?",
"options":["/IWFND/MAINT_SERVICE","SEGW","SE80","SM30"],
"correct":[0],
"explanation":"Services are registered in MAINT_SERVICE."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which file contains OData metadata information?",
"options":["$metadata","manifest.json","Component.js","annotation.xml"],
"correct":[0],
"explanation":"Metadata document describes entities and properties."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which HTTP methods are used in OData V2?",
"options":["GET","POST","PUT","DELETE"],
"correct":[0,1,2,3],
"explanation":"All are standard OData operations."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command starts a CAP application in watch mode?",
"options":["cds watch","cds serve","npm start","cf push"],
"correct":[0],
"explanation":"cds watch enables live reload."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which folder contains CAP service definitions?",
"options":["srv","db","app","test"],
"correct":[0],
"explanation":"Services are defined in srv."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which file extension is used for CDS models?",
"options":[".cds",".js",".xml",".json"],
"correct":[0],
"explanation":"CDS files use .cds extension."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP databases are commonly supported?",
"options":["SQLite","SAP HANA","PostgreSQL","H2"],
"correct":[0,1,2],
"explanation":"CAP commonly supports SQLite, HANA and PostgreSQL."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword defines an entity?",
"options":["entity","table","class","model"],
"correct":[0],
"explanation":"entity is used to define business objects."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command deploys CAP artifacts to a local database?",
"options":["cds deploy","cds watch","cf deploy","mbt build"],
"correct":[0],
"explanation":"cds deploy initializes the database."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP features are built-in?",
"options":["Authentication","Authorization","Draft Handling","OData Exposure"],
"correct":[0,1,2,3],
"explanation":"CAP provides all these features."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact defines business behavior?",
"options":["Behavior Definition","Service Binding","Metadata Extension","Projection View"],
"correct":[0],
"explanation":"Behavior Definitions define business logic."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact exposes entities externally?",
"options":["Service Definition","Behavior Definition","CDS Entity","Metadata Extension"],
"correct":[0],
"explanation":"Service Definitions expose business objects."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact publishes OData services?",
"options":["Service Binding","Behavior Pool","Projection View","Behavior Definition"],
"correct":[0],
"explanation":"Service Binding publishes services."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which implementation types are available in RAP?",
"options":["Managed","Unmanaged","Managed with Draft","Projection"],
"correct":[0,1,2],
"explanation":"These are RAP implementation approaches."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP feature provides temporary editing before save?",
"options":["Draft","Locking","Projection","Association"],
"correct":[0],
"explanation":"Draft supports temporary changes."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP concepts are important for interviews?",
"options":["CDS Views","Behavior Definitions","Service Bindings","Draft Handling"],
"correct":[0,1,2,3],
"explanation":"All are core RAP concepts."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which protocol version is used by SAP Gateway services by default?",
"options":["OData V2","OData V4","REST V3","SOAP"],
"correct":[0],
"explanation":"SAP Gateway traditionally uses OData V2."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which URL returns metadata in OData V2?",
"options":["/$metadata","/metadata","/service","/entity"],
"correct":[0],
"explanation":"Metadata is exposed through $metadata."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which query options are available in OData V2?",
"options":["$filter","$top","$skip","$orderby"],
"correct":[0,1,2,3],
"explanation":"All are standard query options."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which SAPUI5 model is used for OData V2?",
"options":["sap.ui.model.odata.v2.ODataModel","JSONModel","ResourceModel","XMLModel"],
"correct":[0],
"explanation":"This is the standard V2 model."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which SAPUI5 model supports OData V4?",
"options":["sap.ui.model.odata.v4.ODataModel","JSONModel","XMLModel","ResourceModel"],
"correct":[0],
"explanation":"This is the official OData V4 model."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which binding type is heavily used in OData V4?",
"options":["Context Binding","XML Binding","HTML Binding","CSS Binding"],
"correct":[0],
"explanation":"Context bindings are common in OData V4."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which features are improved in OData V4?",
"options":["Performance","Batch Processing","Annotations","Data Handling"],
"correct":[0,1,2,3],
"explanation":"OData V4 improves all these areas."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which CAP protocol version is commonly exposed?",
"options":["OData V4","OData V2","SOAP","RFC"],
"correct":[0],
"explanation":"CAP exposes OData V4 by default."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is used to append a record to an internal table?",
"options":["APPEND","INSERT","ADD","PUSH"],
"correct":[0],
"explanation":"APPEND adds a record at the end of an internal table."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement removes records from an internal table?",
"options":["DELETE","REMOVE","CLEAR","DROP"],
"correct":[0],
"explanation":"DELETE removes entries from internal tables."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which looping statements are available in ABAP?",
"options":["LOOP","DO","WHILE","SELECT ... ENDSELECT"],
"correct":[0,1,2,3],
"explanation":"All are valid looping mechanisms."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to define a structure?",
"options":["TYPES","STRUCTURE","DATA","FIELD"],
"correct":[0],
"explanation":"TYPES is commonly used for custom structures."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What does sy-subrc indicate?",
"options":["Return Code","System Date","User Name","Memory Usage"],
"correct":[0],
"explanation":"sy-subrc stores the result status of operations."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which system fields are frequently used in ABAP?",
"options":["sy-subrc","sy-datum","sy-uzeit","sy-uname"],
"correct":[0,1,2,3],
"explanation":"These are common SAP system fields."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement clears all rows from an internal table?",
"options":["CLEAR","DELETE","REFRESH","REMOVE"],
"correct":[2],
"explanation":"REFRESH clears all entries of an internal table."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used for inheritance in ABAP OO?",
"options":["INHERITING FROM","EXTENDS","IMPLEMENTS","SUPER"],
"correct":[0],
"explanation":"ABAP uses INHERITING FROM."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword creates an interface?",
"options":["INTERFACE","ABSTRACT","CLASS","OBJECT"],
"correct":[0],
"explanation":"INTERFACE defines contracts in ABAP."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which access modifiers are available for methods?",
"options":["PUBLIC","PROTECTED","PRIVATE","FRIENDS"],
"correct":[0,1,2],
"explanation":"ABAP OO supports Public, Protected and Private."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which generated class contains business logic in SEGW?",
"options":["DPC_EXT","MPC_EXT","SEGW_EXT","GW_EXT"],
"correct":[0],
"explanation":"DPC_EXT contains data provider implementation."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which class contains metadata definitions?",
"options":["MPC_EXT","DPC_EXT","SE24","SE80"],
"correct":[0],
"explanation":"Metadata Provider Class defines metadata."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which method handles create operations?",
"options":["CREATE_ENTITY","POST_ENTITY","INSERT_ENTITY","NEW_ENTITY"],
"correct":[0],
"explanation":"CREATE_ENTITY is called for POST requests."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which method handles delete requests?",
"options":["DELETE_ENTITY","REMOVE_ENTITY","DROP_ENTITY","DESTROY_ENTITY"],
"correct":[0],
"explanation":"DELETE_ENTITY processes delete operations."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which artifacts can be created in SEGW?",
"options":["Entity Type","Entity Set","Association","Function Import"],
"correct":[0,1,2,3],
"explanation":"All are Gateway artifacts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction is used to test OData services?",
"options":["/IWFND/GW_CLIENT","SEGW","SE11","SE24"],
"correct":[0],
"explanation":"Gateway Client is used for testing."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"What is Function Import used for?",
"options":["Custom Operations","Table Creation","Database Backup","Authorization"],
"correct":[0],
"explanation":"Function Imports expose custom logic."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which HTTP methods are mapped to CRUD?",
"options":["GET","POST","PUT","DELETE"],
"correct":[0,1,2,3],
"explanation":"CRUD operations use these HTTP methods."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which file contains CAP project dependencies?",
"options":["package.json","manifest.json","cds.json","mta.yaml"],
"correct":[0],
"explanation":"package.json stores project dependencies."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command creates a CAP project?",
"options":["cds init","cds create","cap init","npm cap"],
"correct":[0],
"explanation":"cds init initializes a CAP project."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which keyword defines a relationship in CDS?",
"options":["Association","Join","Relation","Reference"],
"correct":[0],
"explanation":"Associations define relationships."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP folders are commonly present?",
"options":["app","db","srv","test"],
"correct":[0,1,2,3],
"explanation":"These are standard CAP folders."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP feature generates OData services automatically?",
"options":["CDS Service Definition","Node.js","Express","MTA"],
"correct":[0],
"explanation":"Service definitions generate endpoints."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command compiles CDS models?",
"options":["cds compile","cds build","npm compile","cf build"],
"correct":[0],
"explanation":"cds compile converts CDS artifacts."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP runtimes are officially supported?",
"options":["Node.js","Java","Python","ABAP"],
"correct":[0,1],
"explanation":"CAP supports Node.js and Java runtimes."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which CDS view type is commonly used in RAP?",
"options":["View Entity","Database View","Classic View","Transparent View"],
"correct":[0],
"explanation":"View Entities are recommended in RAP."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object contains implementation logic?",
"options":["Behavior Pool","Metadata Extension","Service Binding","Projection View"],
"correct":[0],
"explanation":"Behavior Pools implement behavior."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP keyword enables create operation?",
"options":["create","insert","new","post"],
"correct":[0],
"explanation":"create enables record creation."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which operations can be enabled in Behavior Definitions?",
"options":["create","update","delete","read"],
"correct":[0,1,2,3],
"explanation":"These operations define business behavior."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP concept ensures data consistency?",
"options":["Locking","Theming","Routing","Launchpad"],
"correct":[0],
"explanation":"Locking prevents conflicting updates."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifacts are mandatory in most applications?",
"options":["CDS View","Behavior Definition","Service Definition","Service Binding"],
"correct":[0,1,2,3],
"explanation":"These are core RAP artifacts."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method is used in SAPUI5 OData V2 model to read data?",
"options":["read()","fetch()","get()","retrieve()"],
"correct":[0],
"explanation":"read() retrieves data from backend."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method creates records in OData V2?",
"options":["create()","insert()","post()","add()"],
"correct":[0],
"explanation":"create() sends POST requests."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method updates records in OData V2?",
"options":["update()","modify()","edit()","save()"],
"correct":[0],
"explanation":"update() performs updates."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which OData query options improve performance?",
"options":["$select","$filter","$top","$skip"],
"correct":[0,1,2,3],
"explanation":"These reduce transferred data."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which CAP-generated service protocol is default?",
"options":["OData V4","OData V2","SOAP","REST XML"],
"correct":[0],
"explanation":"CAP exposes OData V4 by default."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which feature is strongly integrated with OData V4 in Fiori Elements?",
"options":["Annotations","jQuery","Bootstrap","SOAP"],
"correct":[0],
"explanation":"Annotations drive UI generation."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which SAP technologies commonly expose OData V4?",
"options":["CAP","RAP","Fiori Elements","BTP"],
"correct":[0,1,2,3],
"explanation":"All heavily use OData V4."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which binding model class is used for OData V4?",
"options":["sap.ui.model.odata.v4.ODataModel","sap.ui.model.json.JSONModel","sap.ui.model.xml.XMLModel","sap.ui.model.resource.ResourceModel"],
"correct":[0],
"explanation":"This is the OData V4 model class."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used to sort an internal table?",
"options":["SORT","ORDER","ARRANGE","SEQUENCE"],
"correct":[0],
"explanation":"SORT arranges internal table records."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to define constants?",
"options":["CONSTANTS","FINAL","STATIC","FIXED"],
"correct":[0],
"explanation":"CONSTANTS defines immutable values."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement checks whether a record exists in an internal table?",
"options":["READ TABLE","CHECK TABLE","VERIFY TABLE","SEARCH TABLE"],
"correct":[0],
"explanation":"READ TABLE followed by sy-subrc is commonly used."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statements are used for modularization in ABAP?",
"options":["FORM","FUNCTION MODULE","METHOD","SUBROUTINE"],
"correct":[0,1,2,3],
"explanation":"All are modularization techniques."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is the purpose of FIELD-SYMBOLS?",
"options":["Dynamic Memory Reference","Database Table","Authorization","Locking"],
"correct":[0],
"explanation":"Field symbols act like pointers."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator is used for string concatenation?",
"options":["&&","||","+","CONCAT"],
"correct":[0],
"explanation":"&& concatenates strings in modern ABAP."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP events exist in executable programs?",
"options":["START-OF-SELECTION","INITIALIZATION","END-OF-SELECTION","AT SELECTION-SCREEN"],
"correct":[0,1,2,3],
"explanation":"All are executable program events."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement creates a work area?",
"options":["DATA wa TYPE mara","CREATE WORKAREA","NEW WORKAREA","DECLARE WA"],
"correct":[0],
"explanation":"DATA is used to declare work areas."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL statement inserts data into a database table?",
"options":["INSERT","APPEND","ADD","UPDATE"],
"correct":[0],
"explanation":"INSERT adds records to database tables."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL statement modifies existing database records?",
"options":["UPDATE","MODIFY","CHANGE","ALTER"],
"correct":[0],
"explanation":"UPDATE changes existing records."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction is used to activate an ICF service?",
"options":["SICF","SEGW","SE80","SM59"],
"correct":[0],
"explanation":"SICF manages Internet Communication Framework services."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which generated class should not be modified directly?",
"options":["DPC","DPC_EXT","MPC_EXT","Custom Class"],
"correct":[0],
"explanation":"Generated classes can be overwritten during regeneration."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which OData operation corresponds to HTTP POST?",
"options":["CREATE_ENTITY","GET_ENTITY","DELETE_ENTITY","UPDATE_ENTITY"],
"correct":[0],
"explanation":"POST creates new entities."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which objects are part of OData metadata?",
"options":["Entity Types","Properties","Associations","Entity Sets"],
"correct":[0,1,2,3],
"explanation":"All appear in metadata."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction displays Gateway error logs?",
"options":["/IWFND/ERROR_LOG","SLG1","SM21","ST22"],
"correct":[0],
"explanation":"Gateway errors are monitored there."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which SEGW object represents a collection of entities?",
"options":["Entity Set","Entity Type","Association","Property"],
"correct":[0],
"explanation":"Entity Sets contain multiple entities."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which HTTP response codes indicate success?",
"options":["200","201","204","202"],
"correct":[0,1,2,3],
"explanation":"All indicate successful processing."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which method handles PUT requests?",
"options":["UPDATE_ENTITY","CREATE_ENTITY","DELETE_ENTITY","GET_ENTITY"],
"correct":[0],
"explanation":"PUT updates records."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command generates deployment artifacts for CAP?",
"options":["cds build","cds deploy","npm build","cf push"],
"correct":[0],
"explanation":"cds build generates deployable artifacts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword creates a service?",
"options":["service","entity","action","projection"],
"correct":[0],
"explanation":"service exposes business entities."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword creates reusable types?",
"options":["type","entity","service","association"],
"correct":[0],
"explanation":"type defines reusable data types."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP authentication strategies are common?",
"options":["XSUAA","Mock Authentication","IAS","JWT"],
"correct":[0,1,2,3],
"explanation":"All are commonly used."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which file defines CAP project deployment configuration?",
"options":["mta.yaml","manifest.json","Component.js","xs-app.json"],
"correct":[0],
"explanation":"mta.yaml defines deployment modules."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword creates a custom operation?",
"options":["action","field","property","key"],
"correct":[0],
"explanation":"Actions implement business logic."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP features reduce coding effort?",
"options":["Generic Providers","Draft Support","OData Generation","Authorization"],
"correct":[0,1,2,3],
"explanation":"CAP provides these capabilities automatically."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP database is most commonly used in SAP BTP production?",
"options":["SAP HANA","SQLite","MongoDB","Oracle"],
"correct":[0],
"explanation":"SAP HANA is the primary production database."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object defines UI annotations?",
"options":["Metadata Extension","Behavior Definition","Service Binding","Behavior Pool"],
"correct":[0],
"explanation":"Metadata Extensions contain annotations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP implementation style requires custom CRUD coding?",
"options":["Unmanaged","Managed","Draft","Projection"],
"correct":[0],
"explanation":"Unmanaged RAP requires manual implementation."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact consumes a CDS View Entity?",
"options":["Behavior Definition","ICF Service","Gateway Service","RFC"],
"correct":[0],
"explanation":"Behavior Definitions are based on CDS entities."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP features improve transactional consistency?",
"options":["ETag","Locking","Draft","Authorization"],
"correct":[0,1,2],
"explanation":"These support consistency and concurrency."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object is responsible for protocol exposure?",
"options":["Service Binding","Behavior Pool","Metadata Extension","CDS Entity"],
"correct":[0],
"explanation":"Service Binding publishes OData."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which protocols can be exposed through RAP Service Binding?",
"options":["OData V2","OData V4","Web API","SOAP"],
"correct":[0,1],
"explanation":"RAP primarily supports OData V2 and V4."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method removes records using OData V2 Model?",
"options":["remove()","delete()","destroy()","erase()"],
"correct":[0],
"explanation":"remove() issues DELETE requests."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which parameter is used for success callbacks in read()?",
"options":["success","done","complete","resolve"],
"correct":[0],
"explanation":"success executes when read succeeds."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which parameter handles failures in OData V2 operations?",
"options":["error","catch","fail","reject"],
"correct":[0],
"explanation":"error callback handles failures."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which OData V2 operations require CSRF tokens?",
"options":["POST","PUT","DELETE","PATCH"],
"correct":[0,1,2,3],
"explanation":"All modifying operations require CSRF protection."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method refreshes OData model bindings?",
"options":["refresh()","reload()","update()","rebind()"],
"correct":[0],
"explanation":"refresh() updates bindings."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation is commonly used to define table columns in Fiori Elements?",
"options":["UI.LineItem","UI.Chart","UI.HeaderInfo","UI.Hidden"],
"correct":[0],
"explanation":"UI.LineItem controls table columns."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation defines Object Page sections?",
"options":["UI.Facets","UI.Chart","UI.FieldGroup","UI.Hidden"],
"correct":[0],
"explanation":"UI.Facets creates sections."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which SAP technologies rely heavily on OData V4?",
"options":["CAP","RAP","Fiori Elements","SAP BTP"],
"correct":[0,1,2,3],
"explanation":"All extensively use OData V4."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which protocol is preferred for new SAP cloud applications?",
"options":["OData V4","OData V2","SOAP","RFC"],
"correct":[0],
"explanation":"SAP recommends OData V4 for new developments."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used to join two database tables in Open SQL?",
"options":["INNER JOIN","TABLE JOIN","LINK TABLE","MERGE JOIN"],
"correct":[0],
"explanation":"INNER JOIN combines records from multiple tables."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is used to stop loop processing?",
"options":["EXIT","BREAK","STOP","END"],
"correct":[0],
"explanation":"EXIT terminates the current loop."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to skip the current loop iteration?",
"options":["CONTINUE","NEXT","SKIP","PASS"],
"correct":[0],
"explanation":"CONTINUE moves to the next iteration."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL operations modify database data?",
"options":["INSERT","UPDATE","DELETE","MODIFY"],
"correct":[0,1,2,3],
"explanation":"All are data modification statements."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used to define a method implementation?",
"options":["METHOD ... ENDMETHOD","FUNCTION ... ENDFUNCTION","FORM ... ENDFORM","CLASS ... ENDCLASS"],
"correct":[0],
"explanation":"Methods are implemented between METHOD and ENDMETHOD."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is the purpose of SE24?",
"options":["Class Builder","Data Dictionary","Gateway Service","Transport Organizer"],
"correct":[0],
"explanation":"SE24 is used for ABAP Objects development."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP Dictionary objects exist?",
"options":["Table","View","Data Element","Domain"],
"correct":[0,1,2,3],
"explanation":"All are Data Dictionary objects."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is used to create database tables?",
"options":["SE11","SE24","SE38","SE80"],
"correct":[0],
"explanation":"SE11 is the ABAP Dictionary transaction."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement checks a condition and skips processing if false?",
"options":["CHECK","IF","CASE","VERIFY"],
"correct":[0],
"explanation":"CHECK exits processing when condition fails."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used for multiple conditional branches?",
"options":["CASE","CHECK","WHILE","DO"],
"correct":[0],
"explanation":"CASE handles multiple conditions elegantly."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction is used to clear Gateway metadata cache?",
"options":["/IWFND/CACHE_CLEANUP","SEGW","SM30","SE11"],
"correct":[0],
"explanation":"Metadata cache issues are resolved using CACHE_CLEANUP."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction displays Gateway request traces?",
"options":["/IWFND/TRACES","ST05","SM50","ST22"],
"correct":[0],
"explanation":"Gateway traces help troubleshoot OData issues."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which HTTP method corresponds to GET_ENTITYSET?",
"options":["GET","POST","PUT","DELETE"],
"correct":[0],
"explanation":"GET retrieves data."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which SEGW project generation artifacts are created automatically?",
"options":["DPC","DPC_EXT","MPC","MPC_EXT"],
"correct":[0,1,2,3],
"explanation":"Gateway generates all these classes."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which class should contain custom metadata enhancements?",
"options":["MPC_EXT","DPC","MPC","SEGW"],
"correct":[0],
"explanation":"MPC_EXT is used for metadata extensions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which object represents a relationship between entity types?",
"options":["Association","Property","Entity Set","Function Import"],
"correct":[0],
"explanation":"Associations define relationships."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which OData query options are commonly supported?",
"options":["$filter","$expand","$orderby","$top"],
"correct":[0,1,2,3],
"explanation":"All are standard OData query options."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which HTTP status code indicates resource creation?",
"options":["201","200","400","404"],
"correct":[0],
"explanation":"201 Created is returned after successful POST."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which file can contain CAP configuration settings?",
"options":["package.json","index.html","Component.js","manifest.json"],
"correct":[0],
"explanation":"CAP configuration is often stored in package.json."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword is used for projections?",
"options":["projection","entity","view","service"],
"correct":[0],
"explanation":"Projection exposes selected fields."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command deploys CAP application to Cloud Foundry?",
"options":["cf push","npm start","cds watch","cds deploy"],
"correct":[0],
"explanation":"Cloud Foundry deployments use cf push."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP artifacts are commonly written in CDS?",
"options":["Entities","Services","Actions","Projections"],
"correct":[0,1,2,3],
"explanation":"All are CDS artifacts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command shows available CDS commands?",
"options":["cds help","cds watch","cds build","cds serve"],
"correct":[0],
"explanation":"cds help displays command information."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP feature automatically exposes CRUD endpoints?",
"options":["Generic Service Provider","Node.js","Express Router","MTA Builder"],
"correct":[0],
"explanation":"Generic providers generate CRUD operations."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which deployment targets are common for CAP?",
"options":["Cloud Foundry","Kyma","Local SQLite","SAP HANA Cloud"],
"correct":[0,1,2,3],
"explanation":"CAP supports all these environments."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword defines a key field?",
"options":["key","primary","id","unique"],
"correct":[0],
"explanation":"key marks primary identifiers."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP layer is exposed to UI applications?",
"options":["Projection Layer","Persistence Layer","Database Layer","Behavior Pool"],
"correct":[0],
"explanation":"Projection layer is consumed by applications."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object defines transactional behavior?",
"options":["Behavior Definition","Metadata Extension","Service Binding","Projection View"],
"correct":[0],
"explanation":"Behavior Definitions describe operations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP feature supports optimistic locking?",
"options":["ETag","Draft","Authorization","Projection"],
"correct":[0],
"explanation":"ETags help avoid update conflicts."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP implementation objects are generated?",
"options":["Behavior Pool","Service Definition","Behavior Definition","Service Binding"],
"correct":[0,1,2,3],
"explanation":"All are RAP development artifacts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object is responsible for business validations?",
"options":["Behavior Pool","Metadata Extension","Projection View","Service Binding"],
"correct":[0],
"explanation":"Validation logic resides in Behavior Pools."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP operations can trigger validations?",
"options":["Create","Update","Delete","Action"],
"correct":[0,1,2,3],
"explanation":"Validations can be executed for all these operations."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which SAPUI5 model event is triggered after metadata loads?",
"options":["metadataLoaded","loaded","metadataReady","onLoad"],
"correct":[0],
"explanation":"metadataLoaded indicates metadata availability."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method submits pending changes?",
"options":["submitChanges","saveChanges","commit","pushChanges"],
"correct":[0],
"explanation":"submitChanges sends batch updates."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which query option selects specific fields?",
"options":["$select","$filter","$orderby","$expand"],
"correct":[0],
"explanation":"$select limits returned fields."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which model operations are asynchronous?",
"options":["read","create","update","remove"],
"correct":[0,1,2,3],
"explanation":"All OData operations are asynchronous."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation is used for page title information?",
"options":["UI.HeaderInfo","UI.LineItem","UI.Facets","UI.Chart"],
"correct":[0],
"explanation":"UI.HeaderInfo defines object page headers."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation is used to create charts in Fiori Elements?",
"options":["UI.Chart","UI.LineItem","UI.Hidden","UI.FieldGroup"],
"correct":[0],
"explanation":"UI.Chart defines analytical visualizations."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotations are most common in Fiori Elements?",
"options":["UI.LineItem","UI.HeaderInfo","UI.Facets","UI.FieldGroup"],
"correct":[0,1,2,3],
"explanation":"These annotations drive Fiori Elements UIs."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which SAP development model is considered the future for S/4HANA Cloud?",
"options":["RAP + OData V4","SEGW + OData V2","RFC","BDC"],
"correct":[0],
"explanation":"RAP with OData V4 is SAP's strategic direction."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is used to search a value in an internal table?",
"options":["READ TABLE","FIND TABLE","SEARCH TABLE","LOOKUP TABLE"],
"correct":[0],
"explanation":"READ TABLE is the standard statement for searching records."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which addition allows binary search in ABAP?",
"options":["BINARY SEARCH","FAST SEARCH","HASH SEARCH","QUICK SEARCH"],
"correct":[0],
"explanation":"BINARY SEARCH improves lookup performance in sorted tables."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which internal table operations affect performance significantly?",
"options":["SORT","READ TABLE","LOOP AT","DELETE"],
"correct":[0,1,2,3],
"explanation":"All can impact performance depending on data volume."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement creates a range table?",
"options":["RANGES","TABLES","SELECT-OPTIONS","FIELD-SYMBOLS"],
"correct":[0],
"explanation":"RANGES creates range structures programmatically."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is the purpose of SELECT SINGLE?",
"options":["Fetch One Record","Fetch All Records","Create Record","Delete Record"],
"correct":[0],
"explanation":"SELECT SINGLE retrieves only one matching record."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL addition limits returned records?",
"options":["UP TO n ROWS","LIMIT","TOP","MAX ROWS"],
"correct":[0],
"explanation":"UP TO n ROWS restricts result count."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which performance tools are commonly used in ABAP?",
"options":["ST05","SAT","SQLM","SCI"],
"correct":[0,1,2,3],
"explanation":"These tools help analyze performance and code quality."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction executes ABAP reports?",
"options":["SE38","SE11","SE24","SE80"],
"correct":[0],
"explanation":"SE38 is used to run and maintain reports."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used for exception handling?",
"options":["TRY","HANDLE","ERROR","EXCEPTION"],
"correct":[0],
"explanation":"TRY...CATCH blocks handle exceptions."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which blocks are part of exception handling?",
"options":["TRY","CATCH","CLEANUP","ENDTRY"],
"correct":[0,1,2,3],
"explanation":"These blocks form ABAP exception handling."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which SEGW artifact defines the structure of business data?",
"options":["Entity Type","Entity Set","Association","Navigation Property"],
"correct":[0],
"explanation":"Entity Types define fields and structure."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which SEGW object represents navigation between entities?",
"options":["Navigation Property","Property","Function Import","Complex Type"],
"correct":[0],
"explanation":"Navigation Properties allow entity traversal."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which methods are generated in DPC_EXT?",
"options":["GET_ENTITY","GET_ENTITYSET","CREATE_ENTITY","DELETE_ENTITY"],
"correct":[0,1,2,3],
"explanation":"CRUD methods are available in DPC_EXT."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which transaction is used to check backend Gateway errors?",
"options":["/IWBEP/ERROR_LOG","SEGW","SM30","SE11"],
"correct":[0],
"explanation":"Backend Gateway errors are stored there."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"What is the purpose of $expand?",
"options":["Fetch Related Entities","Filter Data","Sort Data","Limit Data"],
"correct":[0],
"explanation":"$expand retrieves associated entities."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux410",
"question":"Which query options are frequently used in Fiori apps?",
"options":["$filter","$select","$expand","$orderby"],
"correct":[0,1,2,3],
"explanation":"These optimize data retrieval."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which OData URL returns service metadata?",
"options":["/$metadata","/$service","/$schema","/$entity"],
"correct":[0],
"explanation":"$metadata returns service definitions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which class extension should contain custom business logic?",
"options":["DPC_EXT","MPC","DPC","SEGW"],
"correct":[0],
"explanation":"Custom logic belongs in DPC_EXT."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword defines an action parameter?",
"options":["in","param","using","input"],
"correct":[0],
"explanation":"Actions can define input parameters."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which command starts a CAP service without watch mode?",
"options":["cds serve","cds watch","npm run dev","cf push"],
"correct":[0],
"explanation":"cds serve runs the service normally."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP artifacts can be generated automatically?",
"options":["CRUD APIs","OData Metadata","Service Endpoints","Database Tables"],
"correct":[0,1,2,3],
"explanation":"CAP automates much of the application stack."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which file commonly contains CDS service definitions?",
"options":["srv.cds","package.json","mta.yaml","manifest.json"],
"correct":[0],
"explanation":"Service definitions are usually in srv.cds files."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP concept reduces custom coding effort?",
"options":["Generic Providers","Express Middleware","REST Handlers","Custom Controllers"],
"correct":[0],
"explanation":"Generic Providers implement CRUD automatically."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP deployment descriptors may be used?",
"options":["mta.yaml","package.json","xs-security.json",".cdsrc.json"],
"correct":[0,1,2,3],
"explanation":"These files are common in CAP projects."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP database adapter is commonly used during development?",
"options":["SQLite","SAP HANA Cloud","Oracle","DB2"],
"correct":[0],
"explanation":"SQLite is lightweight and widely used locally."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword exposes entities in a service?",
"options":["entity","using","annotate","type"],
"correct":[0],
"explanation":"Entities are exposed through services."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP object defines custom business actions?",
"options":["Behavior Definition","Metadata Extension","Projection View","Service Binding"],
"correct":[0],
"explanation":"Actions are declared in Behavior Definitions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP feature allows temporary unsaved changes?",
"options":["Draft","Projection","Association","ETag"],
"correct":[0],
"explanation":"Draft mode stores temporary changes."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which operations can be defined as RAP actions?",
"options":["Approve","Reject","Submit","Custom Business Logic"],
"correct":[0,1,2,3],
"explanation":"Actions support custom business processes."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP layer directly accesses the database?",
"options":["Persistence Layer","Projection Layer","Service Layer","UI Layer"],
"correct":[0],
"explanation":"Persistence layer handles database interaction."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact controls authorization checks?",
"options":["Behavior Definition","Theme","Manifest","Launchpad"],
"correct":[0],
"explanation":"Authorizations are configured in RAP behavior."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP concepts are frequently asked in interviews?",
"options":["Managed Scenario","Unmanaged Scenario","Draft","ETag"],
"correct":[0,1,2,3],
"explanation":"These are core RAP interview topics."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which method retrieves a specific entity in OData V2?",
"options":["read()","create()","update()","remove()"],
"correct":[0],
"explanation":"read() fetches data from the service."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which event fires when metadata is available?",
"options":["metadataLoaded","requestCompleted","batchCompleted","dataReceived"],
"correct":[0],
"explanation":"metadataLoaded ensures metadata is ready."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which OData V2 model methods perform CRUD?",
"options":["create","read","update","remove"],
"correct":[0,1,2,3],
"explanation":"These are the primary CRUD methods."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav2",
"question":"Which query option is used for sorting results?",
"options":["$orderby","$filter","$expand","$select"],
"correct":[0],
"explanation":"$orderby sorts returned data."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation groups fields into sections?",
"options":["UI.FieldGroup","UI.Chart","UI.LineItem","UI.Hidden"],
"correct":[0],
"explanation":"UI.FieldGroup organizes related fields."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation hides fields from the UI?",
"options":["UI.Hidden","UI.Chart","UI.LineItem","UI.HeaderInfo"],
"correct":[0],
"explanation":"UI.Hidden prevents field display."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which annotation categories are common in Fiori Elements?",
"options":["UI","Common","Capabilities","Core"],
"correct":[0,1,2,3],
"explanation":"These annotation vocabularies are widely used."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"odatav4",
"question":"Which SAP technology generates Fiori Elements UIs primarily from annotations?",
"options":["RAP","Web Dynpro","BDC","Module Pool"],
"correct":[0],
"explanation":"RAP with annotations drives Fiori Elements applications."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which modern ABAP syntax declares a variable inline?",
"options":["DATA(lv_name)","VAR lv_name","DECLARE lv_name","LET lv_name"],
"correct":[0],
"explanation":"Inline declarations use DATA(...)."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator creates object instances in modern ABAP?",
"options":["NEW","CREATE","INSTANCE","OBJECT"],
"correct":[0],
"explanation":"NEW is the preferred modern syntax."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator converts values between data types?",
"options":["CONV","CAST","TYPE","CONVERT"],
"correct":[0],
"explanation":"CONV performs explicit type conversion."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which modern ABAP operators are commonly used?",
"options":["VALUE","NEW","CONV","CORRESPONDING"],
"correct":[0,1,2,3],
"explanation":"These are key modern ABAP operators."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator copies matching fields between structures?",
"options":["CORRESPONDING","MOVE-CORRESPONDING","ASSIGN","TRANSFER"],
"correct":[0],
"explanation":"CORRESPONDING is the modern syntax."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to define an abstract class?",
"options":["ABSTRACT","VIRTUAL","INTERFACE","FINAL"],
"correct":[0],
"explanation":"ABSTRACT classes cannot be instantiated."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword prevents inheritance of a class?",
"options":["FINAL","PRIVATE","STATIC","LOCKED"],
"correct":[0],
"explanation":"FINAL classes cannot be inherited."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which OOP concepts are supported in ABAP?",
"options":["Inheritance","Polymorphism","Encapsulation","Abstraction"],
"correct":[0,1,2,3],
"explanation":"ABAP Objects supports all major OOP concepts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to redefine a superclass method?",
"options":["REDEFINITION","OVERRIDE","EXTEND","REPLACE"],
"correct":[0],
"explanation":"REDEFINITION overrides inherited methods."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is polymorphism?",
"options":["Same Interface Different Implementations","Database Optimization","Data Conversion","Authorization Concept"],
"correct":[0],
"explanation":"Polymorphism allows different behavior through a common interface."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement is used to raise an exception?",
"options":["RAISE EXCEPTION","THROW","ERROR","ABORT"],
"correct":[0],
"explanation":"RAISE EXCEPTION triggers exception handling."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword catches exceptions?",
"options":["CATCH","HANDLE","ERROR","EXCEPTION"],
"correct":[0],
"explanation":"CATCH processes raised exceptions."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which exception categories exist in ABAP?",
"options":["CX_STATIC_CHECK","CX_DYNAMIC_CHECK","CX_NO_CHECK","CX_ROOT"],
"correct":[0,1,2,3],
"explanation":"These are important ABAP exception classes."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is commonly used for SQL trace analysis?",
"options":["ST05","SAT","SE80","SE11"],
"correct":[0],
"explanation":"ST05 provides SQL tracing."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is used for runtime analysis?",
"options":["SAT","ST05","SM37","ST22"],
"correct":[0],
"explanation":"SAT analyzes program performance."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which performance best practices are recommended?",
"options":["Avoid SELECT inside LOOP","Use WHERE clause","Select Required Fields Only","Use Proper Table Types"],
"correct":[0,1,2,3],
"explanation":"All improve ABAP performance."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL clause groups records?",
"options":["GROUP BY","ORDER BY","SORT BY","CLUSTER BY"],
"correct":[0],
"explanation":"GROUP BY creates aggregated groups."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which SQL function returns the number of records?",
"options":["COUNT","SUM","AVG","MAX"],
"correct":[0],
"explanation":"COUNT counts matching rows."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which aggregate functions are available in Open SQL?",
"options":["COUNT","SUM","AVG","MAX"],
"correct":[0,1,2,3],
"explanation":"These are common SQL aggregate functions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Open SQL addition is used to avoid duplicate rows?",
"options":["DISTINCT","UNIQUE","NO DUPLICATES","FILTER"],
"correct":[0],
"explanation":"DISTINCT removes duplicates."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP Dictionary object defines technical attributes of a field?",
"options":["Domain","Table","View","Search Help"],
"correct":[0],
"explanation":"Domains define technical properties."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which Dictionary object provides field labels and semantics?",
"options":["Data Element","Domain","Table","View"],
"correct":[0],
"explanation":"Data Elements provide business meaning."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which objects belong to the ABAP Dictionary?",
"options":["Domain","Data Element","Table","Search Help"],
"correct":[0,1,2,3],
"explanation":"All are Dictionary objects."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which enhancement technique is SAP's strategic enhancement framework?",
"options":["BAdI","Modification","Repair","Access Key"],
"correct":[0],
"explanation":"BAdI is SAP's preferred enhancement method."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What does BAdI stand for?",
"options":["Business Add-In","Business Additional Interface","Business Adapter Integration","Business Add Identifier"],
"correct":[0],
"explanation":"BAdI means Business Add-In."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which enhancement techniques exist in SAP?",
"options":["User Exit","Customer Exit","BAdI","Enhancement Spot"],
"correct":[0,1,2,3],
"explanation":"These are common enhancement mechanisms."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is used to analyze short dumps?",
"options":["ST22","SM37","ST05","SAT"],
"correct":[0],
"explanation":"ST22 displays ABAP dumps."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction monitors background jobs?",
"options":["SM37","ST22","SE80","SE11"],
"correct":[0],
"explanation":"SM37 is used for job monitoring."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which debugging tools are available in ABAP?",
"options":["Breakpoint","Watchpoint","Conditional Breakpoint","Debugger Scripts"],
"correct":[0,1,2,3],
"explanation":"All are supported debugging tools."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement is commonly used to process large datasets efficiently?",
"options":["FOR ALL ENTRIES","SELECT *","NESTED LOOP","READ DATABASE"],
"correct":[0],
"explanation":"FOR ALL ENTRIES reduces database round trips when used correctly."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which prerequisite must be checked before using FOR ALL ENTRIES?",
"options":["Internal Table Not Empty","Database Connected","sy-subrc = 0","Sorted Table"],
"correct":[0],
"explanation":"An empty internal table causes unexpected results."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP statement creates a sorted internal table key automatically?",
"options":["SORTED TABLE","STANDARD TABLE","HASH TABLE","INDEX TABLE"],
"correct":[0],
"explanation":"SORTED TABLE maintains sorted order."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which table type provides the fastest key access?",
"options":["HASHED TABLE","STANDARD TABLE","SORTED TABLE","DATABASE TABLE"],
"correct":[0],
"explanation":"HASHED TABLE provides constant-time key access."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which table types support unique keys?",
"options":["HASHED TABLE","SORTED TABLE","STANDARD TABLE","DATABASE TABLE"],
"correct":[0,1],
"explanation":"HASHED and SORTED tables can enforce unique keys."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement inserts a row at a specific position in an internal table?",
"options":["INSERT","APPEND","ADD","COLLECT"],
"correct":[0],
"explanation":"INSERT can place records at a specific index."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is the purpose of COLLECT?",
"options":["Aggregate Records with Same Key","Delete Duplicates","Sort Records","Filter Records"],
"correct":[0],
"explanation":"COLLECT aggregates numeric fields for matching keys."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statements are used with internal tables?",
"options":["APPEND","INSERT","MODIFY","DELETE"],
"correct":[0,1,2,3],
"explanation":"These are common internal table operations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement changes an existing internal table row?",
"options":["MODIFY","UPDATE","CHANGE","REPLACE"],
"correct":[0],
"explanation":"MODIFY updates internal table entries."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to define a local type?",
"options":["TYPES","DATA","CLASS","TYPE-POOL"],
"correct":[0],
"explanation":"TYPES defines custom local types."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which statement dynamically assigns a field symbol?",
"options":["ASSIGN","MOVE","BIND","POINT"],
"correct":[0],
"explanation":"ASSIGN links field symbols to memory areas."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword defines a static method?",
"options":["CLASS-METHODS","STATIC METHOD","GLOBAL METHOD","METHODS STATIC"],
"correct":[0],
"explanation":"CLASS-METHODS declares static methods."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword defines static attributes?",
"options":["CLASS-DATA","STATIC-DATA","GLOBAL-DATA","SHARED-DATA"],
"correct":[0],
"explanation":"CLASS-DATA declares static attributes."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP OO components can be static?",
"options":["Methods","Attributes","Constants","Events"],
"correct":[0,1,2,3],
"explanation":"All these can be declared at class level."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP keyword implements an interface?",
"options":["INTERFACES","IMPLEMENTS","USING","ADOPT"],
"correct":[0],
"explanation":"INTERFACES integrates interface definitions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which keyword is used to cast object references?",
"options":["CAST","CONV","NEW","VALUE"],
"correct":[0],
"explanation":"CAST converts object references."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which OOP concepts are frequently asked in interviews?",
"options":["Inheritance","Polymorphism","Casting","Interfaces"],
"correct":[0,1,2,3],
"explanation":"These are common ABAP OOP interview topics."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is used to create function modules?",
"options":["SE37","SE80","SE24","SE11"],
"correct":[0],
"explanation":"SE37 manages function modules."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which type of RFC executes synchronously?",
"options":["sRFC","qRFC","tRFC","bgRFC"],
"correct":[0],
"explanation":"sRFC waits for the remote result."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which RFC guarantees execution order?",
"options":["qRFC","sRFC","tRFC","aRFC"],
"correct":[0],
"explanation":"Queued RFC ensures sequence."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which RFC types exist in SAP?",
"options":["sRFC","tRFC","qRFC","bgRFC"],
"correct":[0,1,2,3],
"explanation":"These are standard RFC variants."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What does BAPI stand for?",
"options":["Business Application Programming Interface","Business API","Backend API","Business Application Process Integration"],
"correct":[0],
"explanation":"BAPI is a standardized SAP business interface."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is commonly used to test BAPIs?",
"options":["SE37","SE11","SE24","SM37"],
"correct":[0],
"explanation":"BAPIs can be executed from SE37."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which modern ABAP operator creates internal tables directly?",
"options":["VALUE","NEW","CONV","CAST"],
"correct":[0],
"explanation":"VALUE can create and populate tables."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator filters records from an internal table?",
"options":["FILTER","VALUE","CAST","CONV"],
"correct":[0],
"explanation":"FILTER returns matching entries."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which operator performs reductions and aggregations?",
"options":["REDUCE","FILTER","VALUE","CORRESPONDING"],
"correct":[0],
"explanation":"REDUCE calculates aggregated values."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which modern ABAP expressions improve readability?",
"options":["VALUE","FILTER","REDUCE","COND"],
"correct":[0,1,2,3],
"explanation":"These reduce procedural coding."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction is used for Code Inspector?",
"options":["SCI","SAT","ST05","SE24"],
"correct":[0],
"explanation":"SCI performs static code analysis."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction performs extended program checks?",
"options":["SLIN","SCI","SAT","SM37"],
"correct":[0],
"explanation":"SLIN checks potential coding issues."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which tools help improve ABAP code quality?",
"options":["SCI","SLIN","ATC","SAT"],
"correct":[0,1,2,3],
"explanation":"These tools identify issues and optimizations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction runs ABAP Test Cockpit?",
"options":["ATC","SCI","SLIN","SE80"],
"correct":[0],
"explanation":"ATC performs advanced quality checks."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which ABAP object is used to transport changes between systems?",
"options":["Transport Request","Package","Program","Workbench"],
"correct":[0],
"explanation":"Transport Requests move developments across landscapes."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which SAP system landscape tiers are common?",
"options":["Development","Quality","Production","Sandbox"],
"correct":[0,1,2,3],
"explanation":"These are standard SAP environments."
},



{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which JavaScript testing framework is the default unit testing framework in SAPUI5?",
"options":["QUnit","Jasmine","Mocha","Jest"],
"correct":[0],
"explanation":"QUnit is the standard SAPUI5 unit testing framework."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which SAPUI5 testing framework is used for integration and end-to-end testing?",
"options":["OPA5","QUnit","Sinon","Jest"],
"correct":[0],
"explanation":"OPA5 is used for UI integration testing."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which library is commonly used for mocking and stubbing in SAPUI5 tests?",
"options":["Sinon","QUnit","OPA5","Mocha"],
"correct":[0],
"explanation":"Sinon provides spies, stubs and mocks."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which features are provided by Sinon.js?",
"options":["Spies","Mocks","Stubs","Fake Timers"],
"correct":[0,1,2,3],
"explanation":"Sinon supports all these testing features."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which QUnit method is used to verify equality?",
"options":["assert.equal()","assert.same()","assert.check()","assert.verify()"],
"correct":[0],
"explanation":"assert.equal() compares expected and actual values."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which OPA5 object is commonly used to define actions?",
"options":["When","Then","Given","Assert"],
"correct":[0],
"explanation":"When is used to execute user actions."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which OPA5 objects are used in test flows?",
"options":["Given","When","Then","Opa5"],
"correct":[0,1,2],
"explanation":"OPA5 follows Given-When-Then structure."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which method starts an SAPUI5 application in OPA5 tests?",
"options":["iStartMyApp","startUI","launchApp","openApplication"],
"correct":[0],
"explanation":"iStartMyApp is commonly used."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which testing framework is behavior-driven and commonly used outside SAPUI5?",
"options":["Jasmine","OPA5","Sinon","QUnit"],
"correct":[0],
"explanation":"Jasmine follows BDD principles."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which SAPUI5 testing layers exist?",
"options":["Unit Tests","Integration Tests","OPA Tests","Manual Tests"],
"correct":[0,1,2],
"explanation":"These are the primary testing layers."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS annotation exposes a service as OData?",
"options":["@path","@odata","@service","@expose"],
"correct":[0],
"explanation":"@path defines service endpoints."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword defines a custom operation with side effects?",
"options":["action","function","method","procedure"],
"correct":[0],
"explanation":"Actions are used for state-changing operations."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS keyword defines a read-only operation?",
"options":["function","action","entity","service"],
"correct":[0],
"explanation":"Functions should not modify data."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS artifacts are commonly used in CAP?",
"options":["Entity","Service","Action","Function"],
"correct":[0,1,2,3],
"explanation":"All are core CDS constructs."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP file typically contains security roles?",
"options":["xs-security.json","package.json","mta.yaml","cds.json"],
"correct":[0],
"explanation":"xs-security.json defines scopes and roles."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which authentication providers are common in CAP on BTP?",
"options":["XSUAA","IAS","Mock","JWT"],
"correct":[0,1,2,3],
"explanation":"All are supported authentication mechanisms."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact defines validations?",
"options":["Behavior Definition","Service Binding","Projection View","Metadata Extension"],
"correct":[0],
"explanation":"Validations are declared in Behavior Definitions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact implements validations and actions?",
"options":["Behavior Pool","Projection View","Metadata Extension","Service Definition"],
"correct":[0],
"explanation":"Behavior Pools contain implementation logic."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP behavior features are frequently used?",
"options":["Validation","Determination","Action","Authorization"],
"correct":[0,1,2,3],
"explanation":"All are common RAP features."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which file defines stages in an Azure DevOps pipeline?",
"options":["azure-pipelines.yml","package.json","manifest.json","pom.xml"],
"correct":[0],
"explanation":"azure-pipelines.yml defines the CI/CD pipeline."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which command is commonly used to build an MTA application?",
"options":["mbt build","cf build","npm deploy","cds deploy"],
"correct":[0],
"explanation":"mbt build creates the MTAR archive."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which command deploys an MTAR file to Cloud Foundry?",
"options":["cf deploy","mbt deploy","cf push mtar","npm deploy"],
"correct":[0],
"explanation":"cf deploy deploys MTAR archives."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"devops",
"question":"Which stages are common in CI/CD pipelines?",
"options":["Build","Test","Deploy","Release"],
"correct":[0,1,2,3],
"explanation":"These are standard pipeline stages."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which file defines modules and resources for SAP BTP deployments?",
"options":["mta.yaml","package.json","manifest.json","xs-app.json"],
"correct":[0],
"explanation":"mta.yaml describes deployment structure."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"devops",
"question":"Which tools are commonly used in SAP BTP CI/CD?",
"options":["Jenkins","Azure DevOps","GitHub Actions","Project Piper"],
"correct":[0,1,2,3],
"explanation":"All are used for SAP CI/CD automation."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS annotation restricts access based on authorization?",
"options":["@restrict","@auth","@secure","@role"],
"correct":[0],
"explanation":"@restrict is commonly used in CAP authorization."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP features are generated automatically?",
"options":["CRUD Operations","OData Metadata","Draft Support","Validation Hooks"],
"correct":[0,1,2,3],
"explanation":"CAP provides these features with minimal coding."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which file is the entry point for QUnit test suites?",
"options":["testsuite.qunit.html","manifest.json","Component.js","index.html"],
"correct":[0],
"explanation":"testsuite.qunit.html loads and executes tests."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which topics are commonly asked in SAPUI5 testing interviews?",
"options":["QUnit","OPA5","Sinon","Mock Server"],
"correct":[0,1,2,3],
"explanation":"These are core SAPUI5 testing topics."
},



{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which SAPUI5 utility is used to simulate backend OData services during development?",
"options":["MockServer","FakeServer","TestServer","LocalServer"],
"correct":[0],
"explanation":"sap.ui.core.util.MockServer simulates OData services."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which file usually contains OData metadata for Mock Server?",
"options":["metadata.xml","manifest.json","Component.js","mockdata.json"],
"correct":[0],
"explanation":"metadata.xml defines entity structures."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which MockServer method starts the simulation?",
"options":["start()","run()","simulate()","execute()"],
"correct":[0],
"explanation":"start() activates the mock server."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which files are commonly present in localService folder?",
"options":["metadata.xml","mockserver.js","mockdata","annotations.xml"],
"correct":[0,1,2,3],
"explanation":"These are common Mock Server artifacts."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"What is the purpose of annotations.xml?",
"options":["UI Metadata","Mock Data","Routing","Authorization"],
"correct":[0],
"explanation":"Annotations drive Fiori Elements behavior."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which property defines the service URL in MockServer?",
"options":["rootUri","serviceUri","baseUrl","odataPath"],
"correct":[0],
"explanation":"rootUri identifies the mocked service endpoint."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which testing utilities are commonly used together?",
"options":["QUnit","OPA5","Sinon","MockServer"],
"correct":[0,1,2,3],
"explanation":"These tools cover unit and integration testing."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which SAPUI5 artifact is used for reusable dialog definitions?",
"options":["Fragment","View","Controller","Component"],
"correct":[0],
"explanation":"Fragments allow reusable UI sections."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which method loads XML fragments asynchronously?",
"options":["Fragment.load()","loadFragment()","Fragment.create()","createFragment()"],
"correct":[0],
"explanation":"Fragment.load() returns a Promise."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which fragment types are supported by SAPUI5?",
"options":["XML Fragment","JS Fragment","HTML Fragment","Fragment Definition"],
"correct":[0,1,2],
"explanation":"SAPUI5 supports XML, JS and HTML fragments."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which class is extended to create custom controls?",
"options":["sap.ui.core.Control","sap.m.Input","sap.ui.model.Model","sap.ui.core.Fragment"],
"correct":[0],
"explanation":"Custom controls inherit from sap.ui.core.Control."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which section defines properties in a custom control?",
"options":["metadata","renderer","init","onAfterRendering"],
"correct":[0],
"explanation":"metadata defines properties, events and aggregations."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which custom control metadata sections are common?",
"options":["properties","events","aggregations","associations"],
"correct":[0,1,2,3],
"explanation":"These metadata sections are frequently used."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP event handler executes before database persistence?",
"options":["before","after","on","init"],
"correct":[0],
"explanation":"before handlers run before CRUD execution."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP event handler executes after database processing?",
"options":["after","before","on","execute"],
"correct":[0],
"explanation":"after handlers run after operations complete."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP handler fully overrides default processing?",
"options":["on","before","after","post"],
"correct":[0],
"explanation":"on handlers can replace generic behavior."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CAP lifecycle handlers exist?",
"options":["before","on","after","reject"],
"correct":[0,1,2],
"explanation":"These are CAP event phases."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS relationship type represents ownership?",
"options":["Composition","Association","Reference","Navigation"],
"correct":[0],
"explanation":"Composition implies lifecycle dependency."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS relationship type represents loose coupling?",
"options":["Association","Composition","Containment","Link"],
"correct":[0],
"explanation":"Associations connect entities without ownership."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld200",
"question":"Which CDS modeling concepts are important?",
"options":["Association","Composition","Aspect","Projection"],
"correct":[0,1,2,3],
"explanation":"These are fundamental CDS concepts."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP behavior section contains custom actions?",
"options":["Behavior Definition","Metadata Extension","Projection View","Service Binding"],
"correct":[0],
"explanation":"Actions are declared in Behavior Definitions."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP feature automatically creates draft tables?",
"options":["Draft Enablement","Projection","Authorization","ETag"],
"correct":[0],
"explanation":"Draft support generates additional artifacts."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP concepts are specific to managed scenarios?",
"options":["Determinations","Validations","Actions","Draft"],
"correct":[0,1,2,3],
"explanation":"These are key managed RAP features."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which Cloud Foundry command logs into a BTP subaccount?",
"options":["cf login","cf connect","cf auth","cf open"],
"correct":[0],
"explanation":"cf login authenticates users."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which Cloud Foundry concept groups applications logically?",
"options":["Space","Route","Org","Service"],
"correct":[0],
"explanation":"Applications are deployed within spaces."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"btp",
"question":"Which Cloud Foundry resources are commonly used?",
"options":["Org","Space","Service Instance","Route"],
"correct":[0,1,2,3],
"explanation":"These are core Cloud Foundry concepts."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which SAP tool provides reusable CI/CD pipeline templates?",
"options":["Project Piper","Cloud Connector","Web IDE","ADT"],
"correct":[0],
"explanation":"Project Piper simplifies SAP CI/CD."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"devops",
"question":"Which file typically defines Jenkins pipelines?",
"options":["Jenkinsfile","pipeline.yaml","mta.yaml","package.json"],
"correct":[0],
"explanation":"Jenkinsfile contains pipeline stages."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"devops",
"question":"Which activities are usually automated in CI/CD?",
"options":["Build","Test","Code Quality","Deployment"],
"correct":[0,1,2,3],
"explanation":"Modern pipelines automate all these tasks."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which SAPUI5 feature allows grouping multiple controls into a reusable package?",
"options":["Composite Control","Fragment","View","Model"],
"correct":[0],
"explanation":"Composite Controls combine multiple controls."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which advanced SAPUI5 topics are frequently asked in interviews?",
"options":["Custom Controls","Fragments","Mock Server","OPA5"],
"correct":[0,1,2,3],
"explanation":"These topics are common in experienced SAPUI5 interviews."
},



{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which architecture pattern is used in SAPUI5?",
"options":["MVC","MVP","MVVM","Layered"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which file is the entry point of a SAPUI5 application?",
"options":["Component.js","manifest.json","index.html","Controller.js"],
"correct":[2]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which method returns the current view in a controller?",
"options":["getView()","currentView()","view()","fetchView()"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which SAPUI5 models are commonly used?",
"options":["JSONModel","ODataModel","ResourceModel","XMLModel"],
"correct":[0,1,2,3]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which file stores routing configuration?",
"options":["manifest.json","index.html","Component-preload.js","i18n.properties"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which control is used for user text input?",
"options":["Input","Text","Label","Title"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which control displays tabular data?",
"options":["Table","Button","Panel","Label"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which method displays a toast message?",
"options":["MessageToast.show()","Toast.show()","Alert.show()","Popup.show()"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux400",
"question":"What is i18n used for?",
"options":["Localization","Authorization","Routing","Testing"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"ux400",
"question":"Which data binding modes exist?",
"options":["OneWay","TwoWay","OneTime","Expression Binding"],
"correct":[0,1,2]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction is used to create ABAP reports?",
"options":["SE38","SE11","SE24","SE80"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which ABAP statement reads a record from an internal table?",
"options":["READ TABLE","FETCH","SELECT","GET"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which table type provides fastest key access?",
"options":["HASHED TABLE","STANDARD TABLE","DATABASE TABLE","INDEX TABLE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction displays short dumps?",
"options":["ST22","SM37","SE80","SAT"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which internal table types exist?",
"options":["STANDARD","SORTED","HASHED","INDEX"],
"correct":[0,1,2]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux410",
"question":"Which transaction is used to create OData services?",
"options":["SEGW","SE11","SE80","SE38"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux410",
"question":"Which URL returns metadata?",
"options":["/$metadata","/$service","/$schema","/$entity"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"ux410",
"question":"Which CRUD methods are generated in SEGW?",
"options":["GET_ENTITY","GET_ENTITYSET","CREATE_ENTITY","DELETE_ENTITY"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"odatav2",
"question":"Which method reads data in OData V2 model?",
"options":["read()","create()","update()","remove()"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"odatav2",
"question":"Which method creates records?",
"options":["create()","read()","remove()","refresh()"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"odatav2",
"question":"Which CRUD methods exist in OData V2?",
"options":["create","read","update","remove"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"What does CAP stand for?",
"options":["Cloud Application Programming","Cloud Access Program","Core Application Platform","Cloud Application Process"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which folder contains database entities?",
"options":["db","srv","app","test"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which folder contains service definitions?",
"options":["srv","db","app","test"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which CAP event handlers exist?",
"options":["before","on","after","reject"],
"correct":[0,1,2]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld500",
"question":"What does RAP stand for?",
"options":["RESTful ABAP Programming Model","Rapid ABAP Program","Remote Application Programming","REST ABAP Platform"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld500",
"question":"Which RAP artifact publishes an OData service?",
"options":["Service Binding","Behavior Definition","Projection View","Metadata Extension"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld500",
"question":"Which RAP artifact defines actions and validations?",
"options":["Behavior Definition","Service Binding","CDS View","DCL"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"cld500",
"question":"Which RAP features are common?",
"options":["Draft","Actions","Determinations","Validations"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"testing",
"question":"Which framework is used for unit testing in SAPUI5?",
"options":["QUnit","OPA5","Sinon","Jasmine"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"testing",
"question":"Which framework is used for integration testing?",
"options":["OPA5","QUnit","Sinon","Mocha"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"testing",
"question":"Which library provides spies and stubs?",
"options":["Sinon","OPA5","QUnit","Jasmine"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"testing",
"question":"Which Sinon features exist?",
"options":["Spy","Stub","Mock","Fake Timer"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"btp",
"question":"Which command deploys an MTAR file?",
"options":["cf deploy","cf push","npm deploy","cds deploy"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"btp",
"question":"Which file defines an MTA project?",
"options":["mta.yaml","package.json","manifest.json","xs-app.json"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"btp",
"question":"Which command builds an MTAR archive?",
"options":["mbt build","cf build","npm build","mta build"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"btp",
"question":"Which Cloud Foundry concepts are important?",
"options":["Org","Space","Route","Service Instance"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cds",
"question":"Which CDS relationship represents ownership?",
"options":["Composition","Association","Reference","Join"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cds",
"question":"Which CDS relationship represents loose coupling?",
"options":["Association","Composition","Containment","Ownership"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"cds",
"question":"Which CDS artifacts are common?",
"options":["Entity","Service","Action","Function"],
"correct":[0,1,2,3]
},


{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which lifecycle method is called only once when a controller is instantiated?",
"options":["onInit","onBeforeRendering","onAfterRendering","onExit"],
"correct":[0],
"explanation":"onInit executes once when the controller instance is created."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which lifecycle method is executed before every rendering cycle?",
"options":["onBeforeRendering","onInit","onExit","constructor"],
"correct":[0],
"explanation":"onBeforeRendering runs before the view is rendered."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which lifecycle methods are available in SAPUI5 controllers?",
"options":["onInit","onBeforeRendering","onAfterRendering","onExit"],
"correct":[0,1,2,3],
"explanation":"These are standard controller lifecycle hooks."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which method is used to retrieve a named model from a view?",
"options":["getModel('modelName')","fetchModel()","getNamedModel()","retrieveModel()"],
"correct":[0],
"explanation":"getModel('name') accesses named models."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which binding type binds an entire object to a control?",
"options":["Element Binding","Property Binding","Aggregation Binding","Composite Binding"],
"correct":[0],
"explanation":"Element binding binds complete objects."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which formatter is commonly used in SAPUI5?",
"options":["Custom JavaScript Function","SQL Formatter","XML Formatter","CSS Formatter"],
"correct":[0],
"explanation":"JavaScript formatter functions transform displayed values."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which routing configuration sections are defined in manifest.json?",
"options":["routes","targets","config","routerClass"],
"correct":[0,1,2,3],
"explanation":"All are part of routing configuration."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which method is used for navigation through the router?",
"options":["navTo()","navigate()","routeTo()","goto()"],
"correct":[0],
"explanation":"Router.navTo() performs navigation."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which SAPUI5 model is best suited for local client-side data?",
"options":["JSONModel","ODataModel","ResourceModel","XMLModel"],
"correct":[0],
"explanation":"JSONModel stores client-side JSON data."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which SAPUI5 controls support user input?",
"options":["Input","ComboBox","DatePicker","TextArea"],
"correct":[0,1,2,3],
"explanation":"All these controls accept user input."
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What is sy-subrc used for?",
"options":["Checking execution result","Sorting tables","Creating objects","Database locking"],
"correct":[0],
"explanation":"sy-subrc contains return codes of ABAP statements."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What value of sy-subrc generally indicates success?",
"options":["0","1","4","8"],
"correct":[0],
"explanation":"0 usually means successful execution."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement creates an internal table without a header line?",
"options":["DATA gt_tab TYPE TABLE OF mara","TABLES mara","DATA gt_tab LIKE mara","TABLE mara"],
"correct":[0],
"explanation":"Modern ABAP uses explicit internal table declarations."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table type automatically maintains sort order?",
"options":["SORTED TABLE","STANDARD TABLE","HASHED TABLE","INDEX TABLE"],
"correct":[0],
"explanation":"SORTED TABLE remains sorted automatically."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which ABAP Dictionary objects are reusable?",
"options":["Domain","Data Element","Structure","Table Type"],
"correct":[0,1,2,3],
"explanation":"All can be reused across developments."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which transaction is used to create database tables?",
"options":["SE11","SE38","SE24","SE37"],
"correct":[0],
"explanation":"SE11 is the ABAP Dictionary transaction."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which ABAP statement adds records at the end of an internal table?",
"options":["APPEND","INSERT","COLLECT","MODIFY"],
"correct":[0],
"explanation":"APPEND places rows at the end."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which loop statements exist in ABAP?",
"options":["LOOP AT","DO","WHILE","SELECT ... ENDSELECT"],
"correct":[0,1,2,3],
"explanation":"All are looping mechanisms."
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"Which class extension should contain custom SEGW logic?",
"options":["DPC_EXT","MPC","DPC","SEGW"],
"correct":[0],
"explanation":"Custom code should be written in DPC_EXT."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"Which OData query option filters records?",
"options":["$filter","$expand","$orderby","$select"],
"correct":[0],
"explanation":"$filter limits returned records."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"Which query option returns only selected fields?",
"options":["$select","$filter","$expand","$top"],
"correct":[0],
"explanation":"$select reduces payload size."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux410",
"question":"Which OData query options are frequently used?",
"options":["$filter","$orderby","$expand","$select"],
"correct":[0,1,2,3],
"explanation":"These options optimize data retrieval."
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP command starts the application in watch mode?",
"options":["cds watch","cds deploy","cds serve","cf push"],
"correct":[0],
"explanation":"cds watch reloads changes automatically."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP folder usually contains UI applications?",
"options":["app","srv","db","test"],
"correct":[0],
"explanation":"The app folder stores frontend applications."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP databases are commonly supported?",
"options":["SQLite","SAP HANA Cloud","PostgreSQL","H2"],
"correct":[0,1,2,3],
"explanation":"CAP supports multiple databases."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which keyword defines an entity in CDS?",
"options":["entity","table","model","define"],
"correct":[0],
"explanation":"Entities are declared using the entity keyword."
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP object is responsible for business behavior?",
"options":["Behavior Definition","Service Binding","Metadata Extension","DCL"],
"correct":[0],
"explanation":"Behavior Definitions describe business behavior."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP artifact exposes business objects externally?",
"options":["Service Definition","Behavior Definition","Projection View","Metadata Extension"],
"correct":[0],
"explanation":"Service Definitions expose entities."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP operations can be controlled through behavior definitions?",
"options":["Create","Update","Delete","Action"],
"correct":[0,1,2,3],
"explanation":"Behavior Definitions manage these operations."
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"testing",
"question":"Which OPA5 section performs validations?",
"options":["Then","When","Given","Assert"],
"correct":[0],
"explanation":"Then contains assertions and validations."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"testing",
"question":"Which Sinon feature verifies whether a function was called?",
"options":["Spy","Stub","Mock Server","Fake Timer"],
"correct":[0],
"explanation":"Spies track function calls."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"testing",
"question":"Which testing tools are officially common in SAPUI5 projects?",
"options":["QUnit","OPA5","Sinon","MockServer"],
"correct":[0,1,2,3],
"explanation":"These are frequently used together."
},


{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What is the primary purpose of SAPUI5 Mock Server?",
"options":["Simulate Backend OData Service","Deploy Applications","Create CDS Views","Generate RAP Services"],
"correct":[0],
"explanation":"Mock Server simulates OData services during development and testing."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which SAPUI5 class is used to create a Mock Server?",
"options":["sap.ui.core.util.MockServer","sap.ui.mock.Server","sap.ui.test.MockServer","sap.m.MockServer"],
"correct":[0],
"explanation":"sap.ui.core.util.MockServer is the standard class."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which file typically contains the OData service metadata used by Mock Server?",
"options":["metadata.xml","manifest.json","Component.js","mockserver.js"],
"correct":[0],
"explanation":"metadata.xml describes entities and service structure."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which folder usually contains sample entity data for Mock Server?",
"options":["mockdata","webapp","controller","view"],
"correct":[0],
"explanation":"mockdata contains JSON files representing entity data."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which method generates mock requests based on metadata?",
"options":["simulate()","generate()","createMock()","mock()"],
"correct":[0],
"explanation":"simulate() creates mock endpoints from metadata."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which method starts the Mock Server?",
"options":["start()","run()","execute()","launch()"],
"correct":[0],
"explanation":"start() activates the mock service."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which method stops the Mock Server?",
"options":["stop()","close()","shutdown()","destroy()"],
"correct":[0],
"explanation":"stop() disables the mock service."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which files are commonly found inside localService folder?",
"options":["metadata.xml","mockserver.js","mockdata","annotations.xml"],
"correct":[0,1,2,3],
"explanation":"These are standard Mock Server resources."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What does rootUri represent in Mock Server configuration?",
"options":["Service Base URL","Application URL","Deployment URL","Controller Path"],
"correct":[0],
"explanation":"rootUri identifies the OData service endpoint."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"For Mock Server to work correctly, rootUri should match?",
"options":["Manifest Data Source URI","View Name","Controller Name","Route Pattern"],
"correct":[0],
"explanation":"The URI must match the application's OData service URI."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Why do developers use Mock Server?",
"options":["Frontend Development Without Backend","Testing","Offline Development","Demo Applications"],
"correct":[0,1,2,3],
"explanation":"Mock Server enables all these scenarios."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which file usually initializes the Mock Server?",
"options":["mockserver.js","Component.js","index.html","manifest.json"],
"correct":[0],
"explanation":"mockserver.js contains initialization logic."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What format is commonly used inside mockdata files?",
"options":["JSON","XML","CSV","YAML"],
"correct":[0],
"explanation":"Mock data is generally stored in JSON format."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What happens if metadata.xml is missing?",
"options":["Mock Server Cannot Simulate OData Service","Application Deploys Faster","Routing Fails","Theme Changes"],
"correct":[0],
"explanation":"Metadata is required to generate service endpoints."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which OData operations can Mock Server simulate?",
"options":["GET","POST","PUT","DELETE"],
"correct":[0,1,2,3],
"explanation":"Mock Server supports CRUD simulation."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which function loads metadata and mock data together?",
"options":["simulate()","start()","loadData()","initialize()"],
"correct":[0],
"explanation":"simulate() reads metadata and mock data."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"If mockdata is not provided, Mock Server can?",
"options":["Generate Random Sample Data","Stop Application","Delete Metadata","Skip Requests"],
"correct":[0],
"explanation":"Mock Server can auto-generate sample records."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which parameters are commonly passed to simulate()?",
"options":["Metadata URL","Mock Data Base URL","Generate Missing Mock Data","Error Simulation"],
"correct":[0,1,2,3],
"explanation":"simulate() supports these configurations."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which configuration allows generation of missing mock data?",
"options":["bGenerateMissingMockData","generateData","autoData","createMissingData"],
"correct":[0],
"explanation":"This parameter generates records automatically."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which SAPUI5 testing framework commonly works with Mock Server?",
"options":["OPA5","Bootstrap","jQuery","Launchpad"],
"correct":[0],
"explanation":"OPA5 integration tests frequently use Mock Server."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which testing tools are often used together in SAPUI5 projects?",
"options":["QUnit","OPA5","Sinon","MockServer"],
"correct":[0,1,2,3],
"explanation":"These form the standard SAPUI5 testing stack."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is the most common reason Mock Server requests fail?",
"options":["rootUri Mismatch","Theme Error","CSS Error","Icon Missing"],
"correct":[0],
"explanation":"Service URI mismatches are a frequent issue."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What should be checked first when Mock Server returns no data?",
"options":["metadata.xml and rootUri","Theme","Fonts","Manifest Title"],
"correct":[0],
"explanation":"Metadata and URI configuration are usually the cause."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which Mock Server interview topics are frequently asked?",
"options":["rootUri","metadata.xml","simulate()","mockdata"],
"correct":[0,1,2,3],
"explanation":"These are the most common Mock Server interview topics."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"If manifest.json contains '/sap/opu/odata/sap/ZEMP_SRV/', what should Mock Server rootUri generally be?",
"options":["/sap/opu/odata/sap/ZEMP_SRV/","/mock/","/local/","/service/"],
"correct":[0],
"explanation":"rootUri must match the service URI used by the application."
},


{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What is the purpose of metadata.xml in Mock Server?",
"options":["Defines OData Service Structure","Stores Routing","Stores CSS","Stores Controllers"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What does rootUri represent in Mock Server?",
"options":["OData Service URL","Application URL","View Path","Controller Path"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What is the purpose of simulate() method?",
"options":["Generate Mock OData Endpoints","Navigate Pages","Create Views","Deploy App"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which Mock Server artifacts are important?",
"options":["metadata.xml","mockdata","rootUri","simulate()"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP handler executes before database operation?",
"options":["before","on","after","init"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP handler completely overrides default processing?",
"options":["on","before","after","validate"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP handler executes after successful processing?",
"options":["after","before","on","init"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP event handlers exist?",
"options":["before","on","after","reject"],
"correct":[0,1,2]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS relationship implies ownership?",
"options":["Composition","Association","Reference","Join"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Deleting a parent record automatically deletes child records in?",
"options":["Composition","Association","Projection","Aspect"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS relationship is loosely coupled?",
"options":["Association","Composition","Containment","Dependency"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which statements are true for Composition?",
"options":[
"Strong Parent Child Relationship",
"Child Depends On Parent",
"Cascade Delete Possible",
"Represents Ownership"
],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP artifact exposes business objects?",
"options":["Service Definition","Behavior Definition","Metadata Extension","DCL"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP artifact publishes OData services?",
"options":["Service Binding","Projection View","Behavior Definition","DCL"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld500",
"question":"Without Service Binding, a RAP service can be consumed?",
"options":["No","Yes","Only Locally","Only Through CDS"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld500",
"question":"Which RAP artifacts are mandatory for service exposure?",
"options":["Service Definition","Service Binding","CDS Entity","Behavior Definition"],
"correct":[0,1]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"testing",
"question":"Which framework is used for SAPUI5 Unit Testing?",
"options":["QUnit","OPA5","Sinon","Jasmine"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"testing",
"question":"Which framework is used for SAPUI5 Integration Testing?",
"options":["OPA5","QUnit","Sinon","Mocha"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"testing",
"question":"Which library provides Spies, Stubs and Mocks?",
"options":["Sinon","OPA5","QUnit","Jasmine"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"testing",
"question":"Match the testing tools with purpose.",
"options":[
"QUnit - Unit Testing",
"OPA5 - Integration Testing",
"Sinon - Mocking/Stubbing",
"MockServer - Backend Simulation"
],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table type provides fastest key lookup?",
"options":["HASHED TABLE","STANDARD TABLE","INDEX TABLE","DATABASE TABLE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table automatically maintains sorted order?",
"options":["SORTED TABLE","STANDARD TABLE","HASHED TABLE","TRANSPARENT TABLE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table allows duplicate entries and linear search?",
"options":["STANDARD TABLE","HASHED TABLE","SORTED TABLE","BUFFER TABLE"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Match table type characteristics.",
"options":[
"HASHED TABLE - Fast Key Access",
"SORTED TABLE - Maintains Order",
"STANDARD TABLE - Sequential Access",
"HASHED TABLE - Unique Key"
],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What does sy-subrc contain?",
"options":["Return Code","Database Record","Program Name","Current User"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which value of sy-subrc generally indicates success?",
"options":["0","4","8","12"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"After which statements is sy-subrc commonly checked?",
"options":["READ TABLE","SELECT","AUTHORITY-CHECK","CALL FUNCTION"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What must be checked before using FOR ALL ENTRIES?",
"options":["Internal Table Not Empty","Database Connected","Sorted Table","Transport Request"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Why is FOR ALL ENTRIES used?",
"options":["Reduce Database Calls","Create Tables","Sort Data","Delete Records"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Advantages of FOR ALL ENTRIES?",
"options":[
"Performance Improvement",
"Reduced Database Access",
"Fetch Related Records",
"Avoid Nested SELECT"
],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement reads a row from an internal table?",
"options":["READ TABLE","SELECT","FETCH","GET"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"After successful READ TABLE, sy-subrc becomes?",
"options":["0","4","8","12"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"READ TABLE can search using?",
"options":["INDEX","KEY","BINARY SEARCH","TABLE KEY"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"GET_ENTITY is used to fetch?",
"options":["Single Record","Multiple Records","Metadata","Service Definition"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"GET_ENTITYSET is used to fetch?",
"options":["Multiple Records","Single Record","Only Metadata","Only Keys"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux410",
"question":"Which method is triggered when opening a list report?",
"options":["GET_ENTITYSET","GET_ENTITY","CREATE_ENTITY","DELETE_ENTITY"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux410",
"question":"Which SEGW CRUD methods are commonly implemented?",
"options":["GET_ENTITY","GET_ENTITYSET","CREATE_ENTITY","UPDATE_ENTITY"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What happens if rootUri in MockServer does not match the OData service URI configured in manifest.json?",
"options":["Requests fail or no data is returned","Application automatically fixes it","Metadata is regenerated","Routing stops working"],
"correct":[0],
"explanation":"URI mismatch is one of the most common MockServer issues."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which parameter of simulate() is used to generate data when mock JSON files are missing?",
"options":["bGenerateMissingMockData","autoGenerate","createData","generateMock"],
"correct":[0],
"explanation":"bGenerateMissingMockData creates sample records automatically."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"What can be generated from metadata.xml by MockServer?",
"options":["Entity Sets","Entity Types","Navigation Properties","CRUD Endpoints"],
"correct":[0,1,2,3],
"explanation":"MockServer uses metadata to generate the service."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which file usually starts the MockServer in SAPUI5 projects?",
"options":["mockserver.js","manifest.json","Component.js","index.html"],
"correct":[0],
"explanation":"mockserver.js contains MockServer initialization logic."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CAP handler is best suited for validating data before insertion?",
"options":["before","after","on","srv"],
"correct":[0],
"explanation":"Validation logic is commonly placed in before handlers."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which handler should be used to modify response data after a READ operation?",
"options":["after","before","on","init"],
"correct":[0],
"explanation":"after handlers can modify outgoing data."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld200",
"question":"In which CAP events can custom business logic be implemented?",
"options":["before","on","after","init"],
"correct":[0,1,2],
"explanation":"These are the primary CAP event phases."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which statement about Association is correct?",
"options":["Child can exist independently","Parent owns child","Cascade delete is mandatory","Records are physically embedded"],
"correct":[0],
"explanation":"Associated entities are independent."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which statement about Composition is correct?",
"options":["Child lifecycle depends on parent","Child is always independent","No navigation possible","No delete propagation"],
"correct":[0],
"explanation":"Composition represents ownership."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld200",
"question":"Which examples are suitable for Composition?",
"options":["SalesOrder → Items","PurchaseOrder → Items","Employee → Dependents","Book → Chapters"],
"correct":[0,1,2,3],
"explanation":"These represent ownership relationships."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld500",
"question":"Which RAP artifact determines whether the service is OData V2 or OData V4?",
"options":["Service Binding","Behavior Definition","Projection View","DCL"],
"correct":[0],
"explanation":"Protocol selection is configured in Service Binding."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld500",
"question":"Which RAP artifact is created after Service Definition to expose the service externally?",
"options":["Service Binding","Metadata Extension","Behavior Pool","DCL"],
"correct":[0],
"explanation":"Service Binding publishes the service."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld500",
"question":"Which information is configured in a Service Binding?",
"options":["Protocol","Service Publication","Preview","Service Activation"],
"correct":[0,1,2,3],
"explanation":"Service Binding controls publication settings."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"testing",
"question":"Which testing tool is most appropriate for testing controller functions without UI interaction?",
"options":["QUnit","OPA5","MockServer","Launchpad"],
"correct":[0],
"explanation":"QUnit is designed for unit testing."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"testing",
"question":"Which tool verifies navigation and button presses in a running SAPUI5 application?",
"options":["OPA5","QUnit","Sinon","ESLint"],
"correct":[0],
"explanation":"OPA5 performs UI integration testing."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"testing",
"question":"Which Sinon feature replaces a real function with a fake implementation?",
"options":["Stub","Spy","Assert","Module"],
"correct":[0],
"explanation":"Stubs replace actual functionality."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"testing",
"question":"Which activities are commonly performed using Sinon?",
"options":["Mocking","Spying","Stubbing","Fake Timers"],
"correct":[0,1,2,3],
"explanation":"Sinon provides all these capabilities."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which internal table type provides O(1) average lookup complexity?",
"options":["HASHED TABLE","STANDARD TABLE","SORTED TABLE","INDEX TABLE"],
"correct":[0],
"explanation":"Hashed tables use hash algorithms for access."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which internal table type supports BINARY SEARCH naturally due to sorting?",
"options":["SORTED TABLE","STANDARD TABLE","HASHED TABLE","POOL TABLE"],
"correct":[0],
"explanation":"Sorted tables maintain ordered keys."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which statements about HASHED TABLE are true?",
"options":[
"Unique Key Required",
"Fast Key Access",
"No Index Access",
"Automatically Hashed"
],
"correct":[0,1,2,3],
"explanation":"These are characteristics of hashed tables."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What does sy-subrc contain after READ TABLE fails?",
"options":["4","0","1","-1"],
"correct":[0],
"explanation":"4 commonly indicates record not found."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Why should FOR ALL ENTRIES internal table be checked for emptiness?",
"options":["To avoid full table selection","To sort results","To create indexes","To enable joins"],
"correct":[0],
"explanation":"Empty tables may cause unwanted full data retrieval."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which practices improve FOR ALL ENTRIES performance?",
"options":[
"Remove Duplicates",
"Check Table Not Empty",
"Select Only Required Fields",
"Use Proper Keys"
],
"correct":[0,1,2,3],
"explanation":"These are standard performance recommendations."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which addition improves READ TABLE performance on STANDARD TABLE?",
"options":["BINARY SEARCH","FAST ACCESS","HASH SEARCH","KEY SEARCH"],
"correct":[0],
"explanation":"Binary search improves lookup speed on sorted data."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which SEGW method is executed when requesting '/Employees(100)'?",
"options":["GET_ENTITY","GET_ENTITYSET","CREATE_ENTITY","UPDATE_ENTITY"],
"correct":[0],
"explanation":"A key is supplied, so a single entity is requested."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which SEGW method is executed when requesting '/Employees'?",
"options":["GET_ENTITYSET","GET_ENTITY","DELETE_ENTITY","CREATE_ENTITY"],
"correct":[0],
"explanation":"The entire collection is requested."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux410",
"question":"Which SEGW methods correspond to CRUD operations?",
"options":[
"CREATE_ENTITY",
"GET_ENTITY",
"UPDATE_ENTITY",
"DELETE_ENTITY"
],
"correct":[0,1,2,3],
"explanation":"These implement CRUD functionality in Gateway services."
},


{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"What does ABAP stand for?",
"options":["Advanced Business Application Programming","Advanced Business Application Process","Application Business ABAP Program","Advanced Backend Application Programming"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction is used to create ABAP reports?",
"options":["SE38","SE11","SE24","SE37"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction is used to create database tables?",
"options":["SE11","SE38","SE80","SE24"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction is used for Function Modules?",
"options":["SE37","SE11","SE24","SE80"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which transaction is used to create Classes?",
"options":["SE24","SE38","SE11","SE37"],
"correct":[0]
},

{
"type":"mcma",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which ABAP Dictionary objects exist?",
"options":["Domain","Data Element","Table","Structure"],
"correct":[0,1,2,3]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What is the purpose of a Domain?",
"options":["Technical Attributes","Field Labels","Business Logic","Authorization"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What is the purpose of a Data Element?",
"options":["Semantic Meaning and Labels","Storage","Authorization","Performance"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which object stores actual data in database?",
"options":["Transparent Table","Structure","Domain","Data Element"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which Dictionary object cannot store data?",
"options":["Structure","Transparent Table","Cluster Table","Pool Table"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"fundamental",
"topic":"ux402",
"question":"Which statement adds a row at the end of an internal table?",
"options":["APPEND","INSERT","MODIFY","COLLECT"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement inserts a row at a specific position?",
"options":["INSERT","APPEND","MODIFY","UPDATE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement updates an existing row in an internal table?",
"options":["MODIFY","INSERT","APPEND","COLLECT"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement removes rows from an internal table?",
"options":["DELETE","REMOVE","CLEAR","DROP"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which operations are commonly performed on internal tables?",
"options":["APPEND","INSERT","MODIFY","DELETE"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table type provides fastest key access?",
"options":["HASHED TABLE","STANDARD TABLE","SORTED TABLE","INDEX TABLE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table automatically maintains sorting?",
"options":["SORTED TABLE","STANDARD TABLE","HASHED TABLE","DATABASE TABLE"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which internal table allows duplicate entries?",
"options":["STANDARD TABLE","HASHED TABLE","SORTED TABLE","UNIQUE TABLE"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Characteristics of HASHED TABLE?",
"options":["Unique Key","Fast Lookup","No Index Access","Hash Algorithm"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What does sy-subrc = 0 indicate?",
"options":["Success","Error","Warning","Dump"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"What does sy-subrc = 4 commonly indicate?",
"options":["Record Not Found","Success","Authorization Error","Syntax Error"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"After which statements is sy-subrc commonly checked?",
"options":["READ TABLE","SELECT","AUTHORITY-CHECK","CALL FUNCTION"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement reads a row from an internal table?",
"options":["READ TABLE","SELECT","FETCH","GET"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which addition improves READ TABLE performance?",
"options":["BINARY SEARCH","FAST SEARCH","HASH SEARCH","INDEX SEARCH"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"READ TABLE can be performed using?",
"options":["INDEX","KEY","TABLE KEY","BINARY SEARCH"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Why should FOR ALL ENTRIES table be checked for emptiness?",
"options":["Avoid Full Table Scan","Improve UI","Avoid Syntax Error","Create Index"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"FOR ALL ENTRIES is mainly used for?",
"options":["Reducing Database Calls","Sorting Data","Deleting Data","Authorization"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Best practices for FOR ALL ENTRIES?",
"options":["Check Table Not Empty","Remove Duplicates","Use Keys","Select Needed Fields"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which statement retrieves exactly one database record?",
"options":["SELECT SINGLE","SELECT ALL","READ TABLE","GET RECORD"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which SQL clause sorts database results?",
"options":["ORDER BY","GROUP BY","HAVING","SORT"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which SQL clause groups records?",
"options":["GROUP BY","ORDER BY","SORT BY","COLLECT BY"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which Open SQL clauses are common?",
"options":["WHERE","ORDER BY","GROUP BY","HAVING"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which JOIN returns matching records from both tables?",
"options":["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL JOIN"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which JOIN returns all records from left table and matching right records?",
"options":["LEFT OUTER JOIN","INNER JOIN","CROSS JOIN","SELF JOIN"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which techniques improve database performance?",
"options":["Indexes","Proper WHERE Clause","FOR ALL ENTRIES","JOINs"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which Function Module parameter sends data into the function?",
"options":["IMPORTING","EXPORTING","TABLES","CHANGING"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which Function Module parameter returns data?",
"options":["EXPORTING","IMPORTING","TABLES","EXCEPTION"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which Function Module parameter types exist?",
"options":["IMPORTING","EXPORTING","CHANGING","TABLES"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which OOP concept hides implementation details?",
"options":["Encapsulation","Inheritance","Polymorphism","Abstraction"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which OOP concept allows one class to inherit another?",
"options":["Inheritance","Polymorphism","Encapsulation","Instantiation"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux402",
"question":"Which OOP concept allows same method name with different behavior?",
"options":["Polymorphism","Inheritance","Encapsulation","Aggregation"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux402",
"question":"Which OOP concepts are fundamental in ABAP OO?",
"options":["Encapsulation","Inheritance","Polymorphism","Abstraction"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which transaction displays ABAP runtime dumps?",
"options":["ST22","SM37","SAT","SE80"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which transaction is used for SQL Trace?",
"options":["ST05","ST22","SM12","SAT"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which transaction is used for Runtime Analysis?",
"options":["SAT","ST22","SE11","SM37"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which ABAP debugging/performance tools are important?",
"options":["ST22","ST05","SAT","Breakpoints"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What is the difference between a Domain and a Data Element?",
"options":[
"Domain defines technical properties, Data Element defines semantic meaning",
"Domain defines labels, Data Element defines data type",
"Both are identical",
"Data Element contains table records"
],
"correct":[0],
"explanation":"Domain defines technical attributes like type and length, while Data Element provides field labels and meaning."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What is the main difference between Structure and Transparent Table?",
"options":[
"Structure cannot store data physically",
"Structure stores data, table does not",
"Both store data physically",
"Both are identical"
],
"correct":[0],
"explanation":"Structures are logical groupings of fields and do not store data."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which statement is preferred in modern ABAP instead of HEADER LINE tables?",
"options":[
"DATA lt_tab TYPE TABLE OF mara",
"TABLES mara",
"OCCURS 0",
"DATA BEGIN OF"
],
"correct":[0],
"explanation":"Header line tables are obsolete."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which statement removes duplicate adjacent records?",
"options":[
"DELETE ADJACENT DUPLICATES",
"REMOVE DUPLICATES",
"DELETE DUPLICATES",
"COLLECT"
],
"correct":[0],
"explanation":"ABAP provides DELETE ADJACENT DUPLICATES."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Requirements before using DELETE ADJACENT DUPLICATES effectively?",
"options":[
"Sort Internal Table",
"Specify Comparing Fields",
"Use LOOP",
"Use READ TABLE"
],
"correct":[0,1],
"explanation":"The table should generally be sorted before deleting adjacent duplicates."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which statement automatically sums numeric fields for duplicate keys?",
"options":[
"COLLECT",
"APPEND",
"INSERT",
"MODIFY"
],
"correct":[0],
"explanation":"COLLECT aggregates records with same key."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What is the purpose of MOVE-CORRESPONDING?",
"options":[
"Copy matching fields between structures",
"Move complete tables",
"Sort structures",
"Create structures"
],
"correct":[0],
"explanation":"Only fields with matching names are copied."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which statements are commonly used with internal tables?",
"options":[
"APPEND",
"COLLECT",
"MODIFY",
"DELETE"
],
"correct":[0,1,2,3],
"explanation":"All are common internal table operations."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What is the purpose of a Search Help?",
"options":[
"Provide F4 Value Help",
"Store Data",
"Authorize User",
"Create Reports"
],
"correct":[0],
"explanation":"Search Helps provide value selection assistance."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which Dictionary object is used to lock database records?",
"options":[
"Lock Object",
"Domain",
"Structure",
"Search Help"
],
"correct":[0],
"explanation":"Lock Objects prevent concurrent updates."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which DDIC objects are frequently used?",
"options":[
"Domain",
"Data Element",
"Search Help",
"Lock Object"
],
"correct":[0,1,2,3],
"explanation":"These are important Dictionary artifacts."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which event is executed first in a classical report?",
"options":[
"INITIALIZATION",
"START-OF-SELECTION",
"END-OF-SELECTION",
"TOP-OF-PAGE"
],
"correct":[0],
"explanation":"INITIALIZATION runs before selection screen processing."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which report event contains main program logic?",
"options":[
"START-OF-SELECTION",
"INITIALIZATION",
"AT SELECTION-SCREEN",
"TOP-OF-PAGE"
],
"correct":[0],
"explanation":"Most business logic resides here."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which classical report events exist?",
"options":[
"INITIALIZATION",
"AT SELECTION-SCREEN",
"START-OF-SELECTION",
"END-OF-SELECTION"
],
"correct":[0,1,2,3],
"explanation":"These are common report processing events."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which keyword is used to define a local class?",
"options":[
"CLASS",
"METHOD",
"INTERFACE",
"OBJECT"
],
"correct":[0],
"explanation":"CLASS defines a class."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which section contains method declarations?",
"options":[
"PUBLIC SECTION",
"METHOD IMPLEMENTATION",
"ENDCLASS",
"CREATE OBJECT"
],
"correct":[0],
"explanation":"Methods are declared in sections."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which ABAP statement creates an object instance?",
"options":[
"CREATE OBJECT",
"NEW CLASS",
"INSTANTIATE",
"BUILD OBJECT"
],
"correct":[0],
"explanation":"CREATE OBJECT instantiates classes."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux402",
"question":"Which visibility sections exist in ABAP OO?",
"options":[
"PUBLIC",
"PROTECTED",
"PRIVATE",
"GLOBAL"
],
"correct":[0,1,2],
"explanation":"ABAP OO supports Public, Protected and Private visibility."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"What is an Interface in ABAP OO?",
"options":[
"A contract containing method declarations",
"A database table",
"A function module",
"A report"
],
"correct":[0],
"explanation":"Interfaces define method signatures."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Can a class implement multiple interfaces?",
"options":[
"Yes",
"No",
"Only One",
"Only Two"
],
"correct":[0],
"explanation":"ABAP supports multiple interface implementation."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which is generally more efficient for related data retrieval?",
"options":[
"JOIN",
"Nested SELECT",
"LOOP with SELECT",
"Multiple READ TABLE"
],
"correct":[0],
"explanation":"JOINs are usually preferred over nested database access."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"What is a common drawback of nested SELECT statements?",
"options":[
"Performance Issues",
"Syntax Errors",
"Authorization Problems",
"Data Loss"
],
"correct":[0],
"explanation":"Nested SELECTs can generate many database calls."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which techniques improve ABAP performance?",
"options":[
"Use JOINs",
"Use Proper WHERE Clauses",
"Avoid SELECT *",
"Use Index Fields"
],
"correct":[0,1,2,3],
"explanation":"These are standard ABAP performance recommendations."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction displays background jobs?",
"options":[
"SM37",
"ST22",
"SE38",
"SE11"
],
"correct":[0],
"explanation":"SM37 is used to monitor background jobs."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux402",
"question":"Which transaction manages lock entries?",
"options":[
"SM12",
"SM37",
"ST05",
"SE24"
],
"correct":[0],
"explanation":"SM12 displays SAP lock entries."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux402",
"question":"Which SAP transactions are important for ABAP developers?",
"options":[
"SE11",
"SE38",
"SE24",
"SE37"
],
"correct":[0,1,2,3],
"explanation":"These are core ABAP development transactions."
},






{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"What does CAP stand for?",
"options":["Cloud Application Programming","Cloud Application Platform","Core Application Programming","Cloud Access Programming"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which file is used to define data models in CAP?",
"options":[".cds",".js",".json",".xml"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which folder contains CDS data models?",
"options":["db","srv","app","test"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which folder contains service definitions and handlers?",
"options":["srv","db","app","node_modules"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"fundamental",
"topic":"cld200",
"question":"Which folders are part of a CAP project?",
"options":["db","srv","app","test"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP command starts the application with live reload?",
"options":["cds watch","cds deploy","cf push","npm deploy"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP command deploys to local SQLite database?",
"options":["cds deploy","cds watch","cf deploy","mbt build"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP event handlers are available?",
"options":["before","on","after","init"],
"correct":[0,1,2]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS relationship represents ownership?",
"options":["Composition","Association","Reference","Join"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS relationship allows independent existence of entities?",
"options":["Association","Composition","Aspect","Projection"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS artifacts are commonly used?",
"options":["Entity","Service","Action","Function"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"btp",
"question":"What does BTP stand for?",
"options":["Business Technology Platform","Business Transformation Platform","Backend Technology Platform","Business Technical Process"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"btp",
"question":"Which environment is most commonly used for CAP applications on BTP?",
"options":["Cloud Foundry","Neo","ABAP Trial","Kyma Runtime Only"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"btp",
"question":"Which command logs into Cloud Foundry?",
"options":["cf login","cf push","cf deploy","cf init"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"btp",
"question":"Which Cloud Foundry concepts are important?",
"options":["Org","Space","Route","Service Instance"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which file defines modules and resources for deployment?",
"options":["mta.yaml","manifest.json","package.json","xs-app.json"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which command creates an MTAR archive?",
"options":["mbt build","cf build","npm build","cds build"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which command deploys an MTAR file?",
"options":["cf deploy","cf push","mbt deploy","npm deploy"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"btp",
"question":"Which deployment steps are common in BTP?",
"options":["Build","Package","Deploy","Verify"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which service stores destination configurations in BTP?",
"options":["Destination Service","Connectivity Service","XSUAA","HTML5 Repo"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which service is primarily used for authentication and authorization?",
"options":["XSUAA","Destination","HTML5 Repo","Workflow"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"btp",
"question":"Which BTP services are commonly used with SAPUI5 applications?",
"options":["Destination Service","XSUAA","HTML5 Repository","Connectivity Service"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld500",
"question":"What does RAP stand for?",
"options":["RESTful ABAP Programming Model","Rapid ABAP Programming","REST ABAP Platform","Remote ABAP Programming"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld500",
"question":"Which RAP artifact exposes business objects?",
"options":["Service Definition","Behavior Definition","DCL","Metadata Extension"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld500",
"question":"Which RAP artifact publishes the service as OData?",
"options":["Service Binding","Projection View","Behavior Pool","DCL"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld500",
"question":"Which RAP concepts are frequently used?",
"options":["Draft","Actions","Determinations","Validations"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which file defines security scopes and roles for XSUAA?",
"options":["xs-security.json","mta.yaml","manifest.json","xs-app.json"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which BTP repository is commonly used to host SAPUI5 applications?",
"options":["HTML5 Application Repository","Destination Service","Connectivity Service","Document Service"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"btp",
"question":"Which topics are most frequently asked in CLD200/CLD500 assessments?",
"options":[
"CAP before/on/after",
"Association vs Composition",
"Service Definition vs Service Binding",
"mta.yaml and Deployment"
],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CDS keyword is used to define an entity?",
"options":["entity","table","class","service"],
"correct":[0],
"explanation":"entity is used to define persistent data models."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which file usually contains CAP service handlers?",
"options":["cat-service.js","package.json","mta.yaml","manifest.json"],
"correct":[0],
"explanation":"Business logic is often implemented in service handler files."
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"cld200",
"question":"Which database is used by default in local CAP development?",
"options":["SQLite","HANA","Oracle","MySQL"],
"correct":[0],
"explanation":"SQLite is the default local database."
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"cld200",
"question":"Which CAP databases are commonly supported?",
"options":["SQLite","SAP HANA","PostgreSQL","H2"],
"correct":[0,1,2,3],
"explanation":"CAP supports multiple database providers."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CDS keyword is used to define a service?",
"options":["service","entity","projection","action"],
"correct":[0],
"explanation":"service exposes entities and operations."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CDS keyword is used to expose selected fields from another entity?",
"options":["projection","entity","aspect","service"],
"correct":[0],
"explanation":"Projection exposes a subset of fields."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CDS artifacts can be exposed through services?",
"options":["Entities","Actions","Functions","Projections"],
"correct":[0,1,2,3],
"explanation":"All can be part of a service."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"What is the purpose of an Action in CAP?",
"options":["Perform Business Logic","Define Entity","Create Service","Deploy Application"],
"correct":[0],
"explanation":"Actions execute custom business operations."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"What is the difference between Action and Function?",
"options":["Action may change data, Function should not","No Difference","Function changes data","Action only reads data"],
"correct":[0],
"explanation":"Functions are expected to be side-effect free."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CAP operations are CRUD operations?",
"options":["CREATE","READ","UPDATE","DELETE"],
"correct":[0,1,2,3],
"explanation":"These form CRUD functionality."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"What is an Organization in Cloud Foundry?",
"options":["Top-Level Administrative Unit","Database","Application","Deployment Package"],
"correct":[0],
"explanation":"Organizations contain spaces and resources."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"What is a Space in Cloud Foundry?",
"options":["Logical Area for Applications","Database Schema","Role Collection","Repository"],
"correct":[0],
"explanation":"Applications are deployed inside spaces."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"btp",
"question":"Cloud Foundry hierarchy consists of?",
"options":["Org","Space","Application","Service"],
"correct":[0,1,2,3],
"explanation":"These are common Cloud Foundry concepts."
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"Which file maps frontend routes to backend destinations?",
"options":["xs-app.json","package.json","mta.yaml","ui5.yaml"],
"correct":[0],
"explanation":"xs-app.json is used in App Router."
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"btp",
"question":"What is the purpose of App Router?",
"options":["Route Requests and Handle Authentication","Store Data","Deploy Applications","Create CDS Models"],
"correct":[0],
"explanation":"App Router acts as an entry point."
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"btp",
"question":"Which App Router features are commonly used?",
"options":["Routing","Authentication","Destination Access","URL Rewriting"],
"correct":[0,1,2,3],
"explanation":"These are core App Router responsibilities."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which service enables secure access to on-premise systems?",
"options":["Connectivity Service","HTML5 Repo","XSUAA","Workflow"],
"correct":[0],
"explanation":"Connectivity service helps connect to on-premise systems."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which component works with Connectivity Service for on-premise access?",
"options":["Cloud Connector","Launchpad","Workbench","Gateway Builder"],
"correct":[0],
"explanation":"Cloud Connector bridges BTP and on-premise landscapes."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"btp",
"question":"Which services are important in hybrid BTP scenarios?",
"options":["Connectivity Service","Cloud Connector","Destination Service","XSUAA"],
"correct":[0,1,2,3],
"explanation":"These services work together frequently."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP artifact contains business behavior implementation?",
"options":["Behavior Definition","Service Binding","Metadata Extension","DCL"],
"correct":[0],
"explanation":"Behavior Definitions define operations and behavior."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP feature allows temporary saving before activation?",
"options":["Draft","Projection","Association","Facet"],
"correct":[0],
"explanation":"Draft handling is a major RAP feature."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP behavior features are commonly asked in interviews?",
"options":["Actions","Determinations","Validations","Draft"],
"correct":[0,1,2,3],
"explanation":"These are key RAP concepts."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"What is a Determination in RAP?",
"options":["Automatic Logic Triggered by Events","Authorization Object","CDS View","Service Publication"],
"correct":[0],
"explanation":"Determinations execute automatically."
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"cld500",
"question":"What is a Validation in RAP?",
"options":["Business Rule Check","Database Table","Projection Layer","Metadata Annotation"],
"correct":[0],
"explanation":"Validations ensure data correctness."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"cld500",
"question":"Which RAP layers are commonly involved?",
"options":["CDS View","Behavior Definition","Service Definition","Service Binding"],
"correct":[0,1,2,3],
"explanation":"These layers form the RAP architecture."
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"btp",
"question":"Which artifact defines application modules and resources in multi-target applications?",
"options":["mta.yaml","manifest.json","package.json","xs-app.json"],
"correct":[0],
"explanation":"mta.yaml is the central MTA descriptor."
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"btp",
"question":"Which files are frequently discussed in CLD200/CLD500 interviews?",
"options":["mta.yaml","xs-app.json","xs-security.json","package.json"],
"correct":[0,1,2,3],
"explanation":"These files are commonly used in BTP projects."
},



{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"What is SAP Fiori Launchpad?",
"options":["Central Entry Point For Fiori Apps","Database Tool","Deployment Tool","ABAP Editor"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which configuration file is the heart of a SAPUI5 application?",
"options":["manifest.json","package.json","ui5.yaml","xs-app.json"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which section of manifest.json defines OData services?",
"options":["dataSources","routes","targets","sap.ui5"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which section of manifest.json defines routing?",
"options":["routing","models","dependencies","resources"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which configurations are commonly found in manifest.json?",
"options":["Routing","Models","DataSources","Dependencies"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is adaptation project used for?",
"options":["Extend Standard Fiori Apps","Create CDS Views","Deploy CAP Apps","Create RAP BO"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which command is commonly used to start Adaptation Project preview?",
"options":["npm start","Preview Application","cf push","cds watch"],
"correct":[1]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is Adaptation Project based on?",
"options":["UI5 Flexibility","ABAP Dictionary","Gateway Service","CDS Compiler"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which changes can be done in Adaptation Project?",
"options":["Hide Fields","Move Controls","Add Custom Fields","Change Labels"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which file contains project configuration for UI5 Tooling?",
"options":["ui5.yaml","manifest.json","Component.js","xs-app.json"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which file contains npm dependencies?",
"options":["package.json","manifest.json","ui5.yaml","Component.js"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"medium",
"topic":"ux400",
"question":"Which file acts as application descriptor?",
"options":["manifest.json","package.json","ui5.yaml","index.html"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"medium",
"topic":"ux400",
"question":"Which configuration files are important in SAPUI5 projects?",
"options":["manifest.json","package.json","ui5.yaml","xs-app.json"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which file bootstraps a SAPUI5 application?",
"options":["index.html","manifest.json","Component.js","ui5.yaml"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which file is the entry point for component-based applications?",
"options":["Component.js","manifest.json","index.html","controller.js"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which files are loaded during application startup?",
"options":["index.html","Component.js","manifest.json","i18n.properties"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is the purpose of i18n.properties?",
"options":["Internationalization","Routing","OData Metadata","Authorization"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which model type is commonly used for i18n?",
"options":["ResourceModel","JSONModel","ODataModel","XMLModel"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which localization artifacts are commonly used?",
"options":["i18n.properties","ResourceModel","{i18n>key}","Resource Bundle"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which Launchpad artifact groups apps together?",
"options":["Catalog","Domain","Namespace","Theme"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which Launchpad artifact controls homepage organization?",
"options":["Group","OData Service","Target Mapping","Tile"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which Launchpad artifact maps a tile to an application?",
"options":["Target Mapping","Catalog","Role","Theme"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which Launchpad concepts are important?",
"options":["Catalog","Group","Tile","Target Mapping"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which URL parameter enables SAPUI5 diagnostics?",
"options":["sap-ui-debug=true","debug=true","ui5=true","sap-debug=true"],
"correct":[0]
},
{
"type":"mcq",
"difficulty":"expert",
"topic":"ux400",
"question":"Which tool helps analyze SAPUI5 application issues?",
"options":["Support Assistant","SE11","SE37","ST22"],
"correct":[0]
},
{
"type":"mcma",
"difficulty":"expert",
"topic":"ux400",
"question":"Which debugging tools are important for SAPUI5?",
"options":["Support Assistant","Browser Console","Network Tab","Breakpoints"],
"correct":[0,1,2,3]
},


{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is the purpose of Component.js?",
"options":["Application Entry Component","Database Layer","Routing Table","OData Service"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which file contains application descriptor information?",
"options":["manifest.json","Component.js","index.html","package.json"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which file contains application descriptor information?",
"options":["manifest.json","Component.js","index.html","package.json"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"Which SAPUI5 artifact is reused across multiple views?",
"options":["Fragment","Controller","Route","Model"],
"correct":[0]
},


{
"type":"mcq",
"difficulty":"hard",
"topic":"ux400",
"question":"What is the main purpose of a Formatter?",
"options":["Format Data Before Display","Create OData Service","Handle Routing","Deploy Application"],
"correct":[0]
},


{
"type":"mcma",
"difficulty":"hard",
"topic":"ux400",
"question":"Which model types are available in SAPUI5?",
"options":["JSONModel","ODataModel","ResourceModel","XMLModel"],
"correct":[0,1,2,3]
},
{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which query option retrieves related entities?",
"options":["$expand","$filter","$select","$top"],
"correct":[0]
},

{
"type":"mcma",
"difficulty":"hard",
"topic":"ux410",
"question":"Which OData query options are commonly used?",
"options":["$filter","$expand","$orderby","$select"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which query option selects specific fields?",
"options":["$select","$expand","$orderby","$skip"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"expert",
"topic":"ux410",
"question":"Which OData V4 feature improves performance by reducing round trips?",
"options":["Batch Requests","XML Views","Fragments","Formatters"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which class is used to implement business logic in SEGW?",
"options":["DPC_EXT","MPC_EXT","Controller","Behavior Definition"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux410",
"question":"Which class is responsible for metadata definition?",
"options":["MPC_EXT","DPC_EXT","SE11","SE24"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which keyword creates an object in ABAP?",
"options":["CREATE OBJECT","NEW OBJECT","INSTANTIATE","BUILD OBJECT"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"ux402",
"question":"Which visibility section is accessible everywhere?",
"options":["PUBLIC","PRIVATE","PROTECTED","LOCAL"],
"correct":[0]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CDS keyword creates a projection?",
"options":["projection","entity","service","action"],
"correct":[0]
},

{
"type":"mcma",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CDS artifacts are common?",
"options":["Entity","Projection","Aspect","Service"],
"correct":[0,1,2,3]
},

{
"type":"mcq",
"difficulty":"hard",
"topic":"cld200",
"question":"Which CAP handler can completely replace default processing?",
"options":["on","before","after","init"],
"correct":[0]
},





  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the purpose of Component.js?",
    "options": [
      "Application Entry Component",
      "Database Layer",
      "Routing Table",
      "OData Service"
    ],
    "correct": [0],
    "explanation": "Component.js is the root component of a SAPUI5 application."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file contains application descriptor information?",
    "options": [
      "manifest.json",
      "Component.js",
      "index.html",
      "package.json"
    ],
    "correct": [0],
    "explanation": "manifest.json contains metadata, models, routing and application configuration."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which SAPUI5 artifact is reused across multiple views?",
    "options": [
      "Fragment",
      "Controller",
      "Route",
      "Model"
    ],
    "correct": [0],
    "explanation": "Fragments are reusable UI parts without their own controller."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "What is the main purpose of a Formatter?",
    "options": [
      "Format Data Before Display",
      "Create OData Service",
      "Handle Routing",
      "Deploy Application"
    ],
    "correct": [0],
    "explanation": "Formatters transform values before displaying them in UI."
  },
  {
    "type": "mcma",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which model types are available in SAPUI5?",
    "options": [
      "JSONModel",
      "ODataModel",
      "ResourceModel",
      "XMLModel"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are commonly used SAPUI5 model types."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file is used for internationalization texts?",
    "options": [
      "i18n.properties",
      "manifest.json",
      "Component.js",
      "ui5.yaml"
    ],
    "correct": [0],
    "explanation": "i18n.properties stores translatable application texts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which file is used by UI5 Tooling?",
    "options": [
      "ui5.yaml",
      "manifest.json",
      "Component.js",
      "package.json"
    ],
    "correct": [0],
    "explanation": "ui5.yaml contains UI5 Tooling configuration."
  },
  {
    "type": "mcma",
    "difficulty": "hard",
    "topic": "ux400",
    "question": "Which files are commonly present in SAPUI5 projects?",
    "options": [
      "manifest.json",
      "Component.js",
      "ui5.yaml",
      "package.json"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are important SAPUI5 project files."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query option retrieves related entities?",
    "options": [
      "$expand",
      "$filter",
      "$select",
      "$top"
    ],
    "correct": [0],
    "explanation": "$expand retrieves navigation properties and related entities."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query option selects specific fields?",
    "options": [
      "$select",
      "$expand",
      "$orderby",
      "$skip"
    ],
    "correct": [0],
    "explanation": "$select restricts returned fields."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query option filters records?",
    "options": [
      "$filter",
      "$expand",
      "$skip",
      "$top"
    ],
    "correct": [0],
    "explanation": "$filter applies conditions on records."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query options are commonly used?",
    "options": [
      "$filter",
      "$expand",
      "$orderby",
      "$select"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are frequently used OData options."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which SEGW class implements business logic?",
    "options": [
      "DPC_EXT",
      "MPC_EXT",
      "SE11",
      "SE24"
    ],
    "correct": [0],
    "explanation": "DPC_EXT contains service implementation logic."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which SEGW class defines metadata?",
    "options": [
      "MPC_EXT",
      "DPC_EXT",
      "SE11",
      "SE80"
    ],
    "correct": [0],
    "explanation": "MPC_EXT handles metadata definitions."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which CRUD methods are commonly redefined in DPC_EXT?",
    "options": [
      "GET_ENTITY",
      "GET_ENTITYSET",
      "CREATE_ENTITY",
      "UPDATE_ENTITY"
    ],
    "correct": [0,1,2,3],
    "explanation": "These methods implement CRUD operations."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "Which keyword creates an object instance in ABAP?",
    "options": [
      "CREATE OBJECT",
      "NEW OBJECT",
      "BUILD OBJECT",
      "INSTANCE"
    ],
    "correct": [0],
    "explanation": "CREATE OBJECT instantiates ABAP classes."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "Which visibility section is accessible everywhere?",
    "options": [
      "PUBLIC",
      "PRIVATE",
      "PROTECTED",
      "LOCAL"
    ],
    "correct": [0],
    "explanation": "Public members are accessible globally."
  },
  {
    "type": "mcma",
    "difficulty": "hard",
    "topic": "ux402",
    "question": "Which OOP concepts are supported in ABAP?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    "correct": [0,1,2,3],
    "explanation": "ABAP Objects supports all major OOP concepts."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "Which CAP handler can replace default processing?",
    "options": [
      "on",
      "before",
      "after",
      "init"
    ],
    "correct": [0],
    "explanation": "on handlers override default processing."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld200",
    "question": "Which CAP command starts the application with live reload?",
    "options": [
      "cds watch",
      "cds deploy",
      "cf push",
      "mbt build"
    ],
    "correct": [0],
    "explanation": "cds watch starts development mode with live reload."
  },
  {
    "type": "mcq",
    "difficulty": "hard",
    "topic": "cld500",
    "question": "Which RAP artifact publishes a service?",
    "options": [
      "Service Binding",
      "Behavior Definition",
      "Projection View",
      "Metadata Extension"
    ],
    "correct": [0],
    "explanation": "Service Binding publishes the service as OData."
  },
  {
    "type": "mcma",
    "difficulty": "hard",
    "topic": "cld500",
    "question": "Which RAP features are commonly used?",
    "options": [
      "Draft",
      "Actions",
      "Determinations",
      "Validations"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are important RAP concepts."
  },




  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method is used to access the router in a controller?",
    "options": [
      "getRouter()",
      "getOwnerComponent().getRouter()",
      "router()",
      "fetchRouter()"
    ],
    "correct": [1],
    "explanation": "getOwnerComponent().getRouter() is commonly used."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which routing event is triggered when a route pattern is matched?",
    "options": [
      "attachPatternMatched",
      "attachMatched",
      "routeMatched",
      "onMatched"
    ],
    "correct": [0],
    "explanation": "attachPatternMatched is widely used."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which routing artifacts are configured in manifest.json?",
    "options": [
      "routes",
      "targets",
      "config",
      "routerClass"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are routing configurations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of a Fragment?",
    "options": [
      "Reusable UI Content",
      "Database Access",
      "Routing",
      "Authorization"
    ],
    "correct": [0],
    "explanation": "Fragments provide reusable UI pieces."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which fragment type is most commonly used?",
    "options": [
      "XML Fragment",
      "JSON Fragment",
      "HTML Fragment",
      "YAML Fragment"
    ],
    "correct": [0],
    "explanation": "XML Fragments are most common."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What can be implemented using Fragments?",
    "options": [
      "Dialogs",
      "Popovers",
      "Reusable Forms",
      "Value Helps"
    ],
    "correct": [0,1,2,3],
    "explanation": "Fragments are frequently used for these."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which SAPUI5 control is commonly used for tables in responsive applications?",
    "options": [
      "sap.m.Table",
      "sap.ui.table.Table",
      "GridTable",
      "HTMLTable"
    ],
    "correct": [0],
    "explanation": "sap.m.Table is mobile-friendly and responsive."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which control is commonly used for desktop analytical tables?",
    "options": [
      "sap.ui.table.Table",
      "sap.m.Table",
      "ResponsiveTable",
      "Tree"
    ],
    "correct": [0],
    "explanation": "sap.ui.table.Table is desktop-oriented."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding modes are available in SAPUI5?",
    "options": [
      "OneWay",
      "TwoWay",
      "OneTime",
      "Default"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are valid binding modes."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which binding updates both model and UI automatically?",
    "options": [
      "TwoWay",
      "OneWay",
      "OneTime",
      "Static"
    ],
    "correct": [0],
    "explanation": "TwoWay binding synchronizes both directions."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData method creates a new record?",
    "options": [
      "create",
      "read",
      "update",
      "remove"
    ],
    "correct": [0],
    "explanation": "create() performs POST operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData method updates an existing record?",
    "options": [
      "update",
      "create",
      "read",
      "refresh"
    ],
    "correct": [0],
    "explanation": "update() performs PUT/MERGE operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData method deletes a record?",
    "options": [
      "remove",
      "delete",
      "destroy",
      "erase"
    ],
    "correct": [0],
    "explanation": "remove() executes DELETE requests."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which CRUD methods exist in ODataModel?",
    "options": [
      "create",
      "read",
      "update",
      "remove"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are standard CRUD operations."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query option limits the number of returned records?",
    "options": [
      "$top",
      "$expand",
      "$select",
      "$filter"
    ],
    "correct": [0],
    "explanation": "$top restricts record count."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux410",
    "question": "Which OData query option skips records?",
    "options": [
      "$skip",
      "$top",
      "$filter",
      "$expand"
    ],
    "correct": [0],
    "explanation": "$skip is used for pagination."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "cld200",
    "question": "Which CAP file defines project dependencies?",
    "options": [
      "package.json",
      "manifest.json",
      "mta.yaml",
      "ui5.yaml"
    ],
    "correct": [0],
    "explanation": "Node.js dependencies are managed in package.json."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "cld200",
    "question": "Which CAP command generates database artifacts?",
    "options": [
      "cds build",
      "cds watch",
      "cf push",
      "npm install"
    ],
    "correct": [0],
    "explanation": "cds build generates deployment artifacts."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "cld200",
    "question": "Which CAP artifacts can be defined in CDS?",
    "options": [
      "Entity",
      "Service",
      "Action",
      "Function"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are valid CDS artifacts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "cld500",
    "question": "Which RAP object contains business rules and behavior?",
    "options": [
      "Behavior Definition",
      "Service Binding",
      "Projection View",
      "Metadata Extension"
    ],
    "correct": [0],
    "explanation": "Behavior Definitions define transactional behavior."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "cld500",
    "question": "Which RAP feature allows users to save unfinished work?",
    "options": [
      "Draft",
      "Projection",
      "Association",
      "Composition"
    ],
    "correct": [0],
    "explanation": "Draft enables temporary saving."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "cld500",
    "question": "Which RAP concepts are frequently tested?",
    "options": [
      "Draft",
      "Determinations",
      "Validations",
      "Actions"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are core RAP concepts."
  },



  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is the purpose of a Mock Server in SAPUI5?",
    "options": [
      "Simulate Backend OData Service",
      "Deploy Application",
      "Create CDS Views",
      "Generate Routing"
    ],
    "correct": [0],
    "explanation": "Mock Server simulates OData services during development."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which file usually contains OData metadata for Mock Server?",
    "options": [
      "metadata.xml",
      "manifest.json",
      "Component.js",
      "package.json"
    ],
    "correct": [0],
    "explanation": "metadata.xml defines entity sets and properties."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which MockServer method starts the mock service?",
    "options": [
      "start()",
      "run()",
      "execute()",
      "init()"
    ],
    "correct": [0],
    "explanation": "start() activates the mock server."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which method loads metadata and mock data automatically?",
    "options": [
      "simulate()",
      "load()",
      "bind()",
      "generate()"
    ],
    "correct": [0],
    "explanation": "simulate() uses metadata.xml and mock data."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which artifacts are commonly used with Mock Server?",
    "options": [
      "metadata.xml",
      "mockdata",
      "rootUri",
      "simulate()"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are essential mock server concepts."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "What is rootUri in Mock Server?",
    "options": [
      "Base URL of OData Service",
      "Database Table",
      "Routing Pattern",
      "Application ID"
    ],
    "correct": [0],
    "explanation": "rootUri must match the OData service URL."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "If rootUri does not match service URL, what happens?",
    "options": [
      "Requests Fail",
      "Application Deploys",
      "Metadata Changes",
      "Routing Stops"
    ],
    "correct": [0],
    "explanation": "The mock service cannot intercept requests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which testing framework is used for unit testing in SAPUI5?",
    "options": [
      "QUnit",
      "OPA5",
      "Sinon",
      "Jasmine"
    ],
    "correct": [0],
    "explanation": "QUnit is the standard unit testing framework."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which testing framework is used for integration testing?",
    "options": [
      "OPA5",
      "QUnit",
      "Sinon",
      "Jest"
    ],
    "correct": [0],
    "explanation": "OPA5 is used for integration and UI tests."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which library is used to create spies, stubs and mocks?",
    "options": [
      "Sinon",
      "OPA5",
      "QUnit",
      "Mocha"
    ],
    "correct": [0],
    "explanation": "Sinon is used for mocking and spying."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux400",
    "question": "Which testing tools are commonly used in SAPUI5?",
    "options": [
      "QUnit",
      "OPA5",
      "Sinon",
      "MockServer"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are widely used for testing."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which internal table provides fastest key-based access?",
    "options": [
      "HASHED TABLE",
      "STANDARD TABLE",
      "SORTED TABLE",
      "INDEX TABLE"
    ],
    "correct": [0],
    "explanation": "Hashed tables use hash algorithms for lookup."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which internal table keeps records automatically sorted?",
    "options": [
      "SORTED TABLE",
      "STANDARD TABLE",
      "HASHED TABLE",
      "BUFFER TABLE"
    ],
    "correct": [0],
    "explanation": "Sorted tables maintain sort order."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which system field indicates statement success or failure?",
    "options": [
      "sy-subrc",
      "sy-index",
      "sy-tabix",
      "sy-datum"
    ],
    "correct": [0],
    "explanation": "sy-subrc contains execution result code."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What does sy-subrc = 0 generally mean?",
    "options": [
      "Success",
      "Error",
      "Warning",
      "Authorization Failure"
    ],
    "correct": [0],
    "explanation": "0 indicates successful execution."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which statement is used to read an internal table?",
    "options": [
      "READ TABLE",
      "FETCH TABLE",
      "GET TABLE",
      "SELECT TABLE"
    ],
    "correct": [0],
    "explanation": "READ TABLE retrieves entries from internal tables."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which additions can be used with READ TABLE?",
    "options": [
      "WITH KEY",
      "INDEX",
      "TRANSPORTING NO FIELDS",
      "BINARY SEARCH"
    ],
    "correct": [0,1,2,3],
    "explanation": "All are valid READ TABLE additions."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Why is FOR ALL ENTRIES used?",
    "options": [
      "Fetch Related Records Efficiently",
      "Create Tables",
      "Delete Records",
      "Lock Records"
    ],
    "correct": [0],
    "explanation": "It retrieves matching records for internal table entries."
  },
  {
    "type": "mcq",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "What should be checked before FOR ALL ENTRIES?",
    "options": [
      "Internal Table Not Empty",
      "sy-subrc",
      "Authorization",
      "Lock Object"
    ],
    "correct": [0],
    "explanation": "Empty tables can return unintended results."
  },
  {
    "type": "mcma",
    "difficulty": "expert",
    "topic": "ux402",
    "question": "Which ABAP performance topics are commonly asked?",
    "options": [
      "FOR ALL ENTRIES",
      "JOIN",
      "READ TABLE",
      "Internal Tables"
    ],
    "correct": [0,1,2,3],
    "explanation": "These are core performance-related topics."
  },






  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"What is the primary purpose of SAP Fiori Launchpad?",
    "options":[
      "Single Entry Point For Business Applications",
      "Database Administration",
      "ABAP Development",
      "OData Generation"
    ],
    "correct":[0],
    "explanation":"Launchpad provides a central access point for SAP applications."
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which Launchpad artifact contains application tiles?",
    "options":[
      "Catalog",
      "Role",
      "Theme",
      "Space"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which Launchpad artifact maps a tile to an application?",
    "options":[
      "Target Mapping",
      "Catalog",
      "Theme",
      "Group"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which Launchpad concepts are important?",
    "options":[
      "Catalog",
      "Group",
      "Tile",
      "Target Mapping"
    ],
    "correct":[0,1,2,3]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What replaced Groups in modern Fiori Launchpad design?",
    "options":[
      "Spaces and Pages",
      "Catalogs",
      "Roles",
      "Themes"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Launchpad objects are assigned through roles?",
    "options":[
      "Catalogs",
      "Spaces",
      "Pages",
      "Apps"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"btp",
    "question":"What is SAP Build Work Zone primarily used for?",
    "options":[
      "Digital Workplace Experience",
      "Database Modeling",
      "ABAP Development",
      "CDS Creation"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"btp",
    "question":"Which service can host SAPUI5 applications in BTP?",
    "options":[
      "HTML5 Application Repository",
      "XSUAA",
      "Destination",
      "Connectivity"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"hard",
    "topic":"btp",
    "question":"Which artifacts can be integrated into Work Zone?",
    "options":[
      "SAPUI5 Apps",
      "CAP Apps",
      "Launchpad Content",
      "External Links"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which SAPUI5 theme is commonly used in SAP Fiori 3?",
    "options":[
      "sap_fiori_3",
      "sap_bluecrystal",
      "sap_goldreflection",
      "sap_classic"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which theme supports dark mode?",
    "options":[
      "sap_fiori_3_dark",
      "sap_bluecrystal",
      "sap_belize",
      "sap_hcb"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"hard",
    "topic":"ux400",
    "question":"Which standard SAPUI5 themes exist?",
    "options":[
      "sap_fiori_3",
      "sap_fiori_3_dark",
      "sap_belize",
      "sap_horizon"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which command installs npm dependencies?",
    "options":[
      "npm install",
      "npm build",
      "npm deploy",
      "npm create"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which command builds a UI5 application?",
    "options":[
      "ui5 build",
      "npm install",
      "cf push",
      "cds watch"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which command deploys an application to Cloud Foundry?",
    "options":[
      "cf push",
      "npm start",
      "ui5 serve",
      "cds watch"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which steps are common in deployment pipelines?",
    "options":[
      "Build",
      "Test",
      "Package",
      "Deploy"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table provides unique key access with best lookup performance?",
    "options":[
      "HASHED TABLE",
      "STANDARD TABLE",
      "SORTED TABLE",
      "DATABASE TABLE"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table maintains sorted order automatically?",
    "options":[
      "SORTED TABLE",
      "STANDARD TABLE",
      "HASHED TABLE",
      "INDEX TABLE"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table allows duplicate entries by default?",
    "options":[
      "STANDARD TABLE",
      "HASHED TABLE",
      "SORTED TABLE WITH UNIQUE KEY",
      "HASHED UNIQUE"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table types exist in ABAP?",
    "options":[
      "STANDARD",
      "SORTED",
      "HASHED",
      "INDEX"
    ],
    "correct":[0,1,2]
  },

  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux402",
    "question":"Which transaction opens ABAP Dictionary?",
    "options":[
      "SE11",
      "SE38",
      "SE80",
      "SE24"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux402",
    "question":"Which transaction is used to execute ABAP reports?",
    "options":[
      "SE38",
      "SE11",
      "SE16",
      "SM37"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"hard",
    "topic":"ux402",
    "question":"Which transaction is used for Function Modules?",
    "options":[
      "SE37",
      "SE24",
      "SE11",
      "SM12"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"hard",
    "topic":"ux402",
    "question":"Which ABAP transactions are frequently used?",
    "options":[
      "SE11",
      "SE38",
      "SE37",
      "SE24"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"What does SAP HANA stand for?",
    "options":[
      "High Performance Analytic Appliance",
      "High Availability Network Appliance",
      "Hybrid Analytical Node Architecture",
      "High Access Native Application"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which type of database is SAP HANA?",
    "options":[
      "In-Memory Database",
      "File Database",
      "NoSQL Only",
      "Object Database"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Why is SAP HANA faster than traditional databases?",
    "options":[
      "Data Stored In Memory",
      "More Tables",
      "More Transactions",
      "Less Security"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which SAP HANA features are important?",
    "options":[
      "Column Store",
      "In-Memory Processing",
      "Parallel Processing",
      "Compression"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"database",
    "question":"Which SQL statement retrieves data?",
    "options":[
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"database",
    "question":"Which SQL operations belong to CRUD?",
    "options":[
      "CREATE",
      "READ",
      "UPDATE",
      "DELETE"
    ],
    "correct":[0,1,2,3]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"database",
    "question":"Which JOIN returns matching records from both tables?",
    "options":[
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"database",
    "question":"Which SQL JOIN types are commonly used?",
    "options":[
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "correct":[0,1,2,3]
  },



  
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which file contains application routing configuration in SAPUI5?",
    "options":["manifest.json","Component.js","index.html","package.json"],
    "correct":[0],
    "explanation":"Routing is configured inside manifest.json."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which section of manifest.json contains route definitions?",
    "options":["routing.routes","models","dependencies","resources"],
    "correct":[0],
    "explanation":"Routes are configured under routing.routes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which files are loaded during SAPUI5 application startup?",
    "options":["index.html","Component.js","manifest.json","i18n.properties"],
    "correct":[0,1,2,3],
    "explanation":"All are part of application initialization."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of sap.ui.define()?",
    "options":["Define AMD Modules","Create OData Service","Create CDS View","Handle Routing"],
    "correct":[0],
    "explanation":"sap.ui.define is used for module definition."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which function is used to load dependencies asynchronously?",
    "options":["sap.ui.require","sap.ui.load","sap.ui.import","sap.ui.module"],
    "correct":[0],
    "explanation":"sap.ui.require loads modules asynchronously."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of a Component Container?",
    "options":["Host UI5 Components","Create Tables","Manage Routing","Store Models"],
    "correct":[0],
    "explanation":"ComponentContainer hosts UI5 components."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding types exist in SAPUI5?",
    "options":["Property Binding","Element Binding","Aggregation Binding","Expression Binding"],
    "correct":[0,1,2,3],
    "explanation":"These are standard SAPUI5 bindings."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding is used to bind a collection of data to a table?",
    "options":["Aggregation Binding","Property Binding","Expression Binding","Element Binding"],
    "correct":[0],
    "explanation":"Aggregation binding is used for lists and tables."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding is used for a single field value?",
    "options":["Property Binding","Aggregation Binding","Route Binding","Collection Binding"],
    "correct":[0],
    "explanation":"Property binding binds individual values."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding is used for an entire object context?",
    "options":["Element Binding","Aggregation Binding","Property Binding","Model Binding"],
    "correct":[0],
    "explanation":"Element binding binds an object context."
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which HTTP method is used by OData CREATE operation?",
    "options":["POST","GET","PUT","DELETE"],
    "correct":[0],
    "explanation":"POST creates new entities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which HTTP method is used by OData UPDATE operation?",
    "options":["PUT","GET","POST","OPTIONS"],
    "correct":[0],
    "explanation":"PUT updates resources."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which HTTP method is used by OData DELETE operation?",
    "options":["DELETE","PUT","POST","PATCH"],
    "correct":[0],
    "explanation":"DELETE removes resources."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which HTTP methods are commonly used in OData?",
    "options":["GET","POST","PUT","DELETE"],
    "correct":[0,1,2,3],
    "explanation":"These correspond to CRUD operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData metadata endpoint provides service metadata?",
    "options":["$metadata","$expand","$filter","$batch"],
    "correct":[0],
    "explanation":"$metadata exposes entity definitions."
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP hook runs before default processing?",
    "options":["before","on","after","init"],
    "correct":[0],
    "explanation":"before executes prior to processing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP hook runs after request processing?",
    "options":["after","before","on","init"],
    "correct":[0],
    "explanation":"after executes after processing."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP lifecycle hooks exist?",
    "options":["before","on","after","init"],
    "correct":[0,1,2,3],
    "explanation":"These hooks are available in CAP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS relationship automatically deletes child records?",
    "options":["Composition","Association","Projection","Aspect"],
    "correct":[0],
    "explanation":"Composition represents ownership."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS relationship allows independent lifecycle?",
    "options":["Association","Composition","Projection","Aspect"],
    "correct":[0],
    "explanation":"Associated entities can exist independently."
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP artifact exposes business entities?",
    "options":["Service Definition","Behavior Definition","Metadata Extension","DCL"],
    "correct":[0],
    "explanation":"Service Definition exposes entities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP artifact publishes OData services?",
    "options":["Service Binding","Behavior Definition","Projection View","DCL"],
    "correct":[0],
    "explanation":"Service Binding publishes services."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP artifacts are commonly created?",
    "options":["CDS View","Behavior Definition","Service Definition","Service Binding"],
    "correct":[0,1,2,3],
    "explanation":"These are core RAP artifacts."
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which transaction is used for Data Browser?",
    "options":["SE16","SE38","SE11","SE24"],
    "correct":[0],
    "explanation":"SE16 is used to view table data."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which transaction is used to analyze ABAP dumps?",
    "options":["ST22","SM37","ST05","SE80"],
    "correct":[0],
    "explanation":"ST22 displays runtime dumps."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which transaction is used for SQL trace analysis?",
    "options":["ST05","ST22","SM12","SE11"],
    "correct":[0],
    "explanation":"ST05 is used for performance tracing."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which transactions are important for debugging and performance?",
    "options":["ST22","ST05","SM12","SM37"],
    "correct":[0,1,2,3],
    "explanation":"All are frequently used by ABAP developers."
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which storage type is optimized for analytical queries in SAP HANA?",
    "options":["Column Store","Row Store","File Store","Object Store"],
    "correct":[0],
    "explanation":"Column Store is optimized for analytics."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which storage type is optimized for transactional processing?",
    "options":["Row Store","Column Store","Object Store","Cache Store"],
    "correct":[0],
    "explanation":"Row Store is suitable for transactional workloads."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which SAP HANA advantages are frequently mentioned?",
    "options":["In-Memory Processing","Compression","Parallel Processing","Column Store"],
    "correct":[0,1,2,3],
    "explanation":"These are major HANA advantages."
  },





  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is SAP Build Process Automation primarily used for?",
    "options":[
      "Workflow and Process Automation",
      "Database Administration",
      "ABAP Development",
      "OData Generation"
    ],
    "correct":[0],
    "explanation":"Build Process Automation automates workflows and approvals."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is a User Task in a workflow?",
    "options":[
      "Task Performed By Human User",
      "Automatic Background Step",
      "Database Operation",
      "Deployment Activity"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is a Service Task in SAP Build Process Automation?",
    "options":[
      "Automated Step Calling External Service",
      "Manual Approval",
      "Database Table",
      "Launchpad Tile"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which task type requires no human interaction?",
    "options":[
      "Service Task",
      "User Task",
      "Approval Task",
      "Form Task"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which workflow task types are commonly used?",
    "options":[
      "User Task",
      "Service Task",
      "Approval Task",
      "Form Task"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is the purpose of a Process Form?",
    "options":[
      "Collect User Input",
      "Store Database Data",
      "Create CDS View",
      "Deploy Application"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which component is used to define approval flows?",
    "options":[
      "Workflow",
      "Destination",
      "Launchpad",
      "CAP Service"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which workflow artifacts are common?",
    "options":[
      "Process",
      "Forms",
      "Decisions",
      "Tasks"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is a Semantic Object in Fiori?",
    "options":[
      "Business Object Used For Navigation",
      "Database Table",
      "Theme Configuration",
      "OData Entity"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is an Action in Intent-Based Navigation?",
    "options":[
      "Target Operation Like Display Or Manage",
      "OData Operation",
      "Workflow Step",
      "ABAP Method"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which combination forms an intent?",
    "options":[
      "Semantic Object + Action",
      "Catalog + Group",
      "Route + Target",
      "Entity + Service"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which concepts are related to Intent-Based Navigation?",
    "options":[
      "Semantic Object",
      "Action",
      "Target Mapping",
      "Launchpad"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Fiori Elements floorplan displays tabular business data?",
    "options":[
      "List Report",
      "Overview Page",
      "Analytical List Page",
      "Object Page"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Fiori Elements floorplan displays details of a selected record?",
    "options":[
      "Object Page",
      "List Report",
      "Worklist",
      "Overview Page"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Fiori Elements floorplans are commonly used?",
    "options":[
      "List Report",
      "Object Page",
      "Overview Page",
      "Analytical List Page"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which annotation defines columns in List Report?",
    "options":[
      "UI.LineItem",
      "UI.Facets",
      "UI.Hidden",
      "UI.Chart"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which annotation defines sections in Object Page?",
    "options":[
      "UI.Facets",
      "UI.LineItem",
      "UI.Chart",
      "UI.Hidden"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which annotations are heavily used in Fiori Elements?",
    "options":[
      "UI.LineItem",
      "UI.Facets",
      "UI.HeaderInfo",
      "UI.SelectionFields"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What does EML stand for in RAP?",
    "options":[
      "Entity Manipulation Language",
      "Enterprise Modeling Layer",
      "Entity Metadata Language",
      "Enterprise Management Logic"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is the purpose of EML?",
    "options":[
      "Perform CRUD Operations On RAP BOs",
      "Deploy Applications",
      "Create CDS Views",
      "Generate OData Services"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which EML operations are available?",
    "options":[
      "READ ENTITIES",
      "MODIFY ENTITIES",
      "CREATE",
      "DELETE"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP approach is preferred for new development?",
    "options":[
      "Managed RAP",
      "Unmanaged RAP",
      "SEGW",
      "BOPF"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"In Managed RAP, who handles most CRUD operations?",
    "options":[
      "Framework",
      "Developer",
      "Gateway",
      "Database"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP concepts are frequently asked?",
    "options":[
      "Managed RAP",
      "Unmanaged RAP",
      "Draft",
      "EML"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which service stores destination configurations in BTP?",
    "options":[
      "Destination Service",
      "Connectivity Service",
      "HTML5 Repository",
      "Workflow Service"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which service provides authentication and authorization?",
    "options":[
      "XSUAA",
      "Destination",
      "Connectivity",
      "Workflow"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which BTP services are most commonly used in projects?",
    "options":[
      "Destination Service",
      "XSUAA",
      "Connectivity Service",
      "HTML5 Application Repository"
    ],
    "correct":[0,1,2,3]
  },



  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the primary purpose of Adaptation Projects?",
    "options":[
      "Extend Standard SAP Fiori Apps",
      "Create CDS Views",
      "Create HANA Tables",
      "Manage Destinations"
    ],
    "correct":[0],
    "explanation":"Adaptation Projects allow extension of standard SAP-delivered applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which option is commonly used to preview an Adaptation Project?",
    "options":[
      "Adaptation Preview",
      "CDS Preview",
      "Launchpad Designer",
      "Gateway Client"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What can be modified using Adaptation Projects?",
    "options":[
      "UI Controls",
      "Visibility",
      "Texts",
      "Layout"
    ],
    "correct":[0,1,2,3]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of an Extension Point?",
    "options":[
      "Insert Custom Content",
      "Deploy Application",
      "Generate Metadata",
      "Create OData Service"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control helps users choose values from a large dataset?",
    "options":[
      "Value Help Dialog",
      "MessageBox",
      "Popover",
      "Panel"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of Variant Management?",
    "options":[
      "Save User Preferences",
      "Deploy Applications",
      "Generate OData",
      "Create Roles"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Smart Controls are frequently used?",
    "options":[
      "SmartTable",
      "SmartFilterBar",
      "SmartField",
      "SmartForm"
    ],
    "correct":[0,1,2,3]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which Smart Control provides filtering functionality?",
    "options":[
      "SmartFilterBar",
      "SmartTable",
      "SmartChart",
      "SmartForm"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What is Deep Insert in OData?",
    "options":[
      "Create Parent And Child Entities Together",
      "Delete Multiple Records",
      "Batch Read",
      "Metadata Generation"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData feature executes multiple operations in one request?",
    "options":[
      "$batch",
      "$expand",
      "$filter",
      "$top"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which HTTP header is used for CSRF protection?",
    "options":[
      "X-CSRF-Token",
      "Authorization",
      "Content-Type",
      "Accept"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which operations generally require CSRF tokens?",
    "options":[
      "POST",
      "PUT",
      "PATCH",
      "DELETE"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement adds a record at the end of an internal table?",
    "options":[
      "APPEND",
      "INSERT",
      "MODIFY",
      "COLLECT"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement inserts a record at a specific position?",
    "options":[
      "INSERT",
      "APPEND",
      "READ",
      "LOOP"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement removes duplicate adjacent records?",
    "options":[
      "DELETE ADJACENT DUPLICATES",
      "REMOVE DUPLICATES",
      "DELETE DUPLICATES",
      "CLEAR DUPLICATES"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which ABAP feature acts like a pointer?",
    "options":[
      "Field Symbol",
      "Work Area",
      "Internal Table",
      "Structure"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which ABAP enhancement techniques exist?",
    "options":[
      "BADI",
      "User Exit",
      "Enhancement Spot",
      "Customer Exit"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS artifact exposes only selected fields from another entity?",
    "options":[
      "Projection",
      "Composition",
      "Association",
      "Aspect"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS feature is used to reuse common fields?",
    "options":[
      "Aspect",
      "Projection",
      "Composition",
      "Association"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP artifacts can be exposed in services?",
    "options":[
      "Entities",
      "Actions",
      "Functions",
      "Projections"
    ],
    "correct":[0,1,2,3]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which folder usually contains service definitions in CAP?",
    "options":[
      "srv",
      "db",
      "app",
      "test"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which file defines routes and authentication for App Router?",
    "options":[
      "xs-app.json",
      "manifest.json",
      "package.json",
      "mta.yaml"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which file defines security roles and scopes?",
    "options":[
      "xs-security.json",
      "manifest.json",
      "ui5.yaml",
      "package.json"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which file defines modules and resources for deployment?",
    "options":[
      "mta.yaml",
      "manifest.json",
      "xs-app.json",
      "ui5.yaml"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which BTP deployment files are commonly used?",
    "options":[
      "mta.yaml",
      "xs-app.json",
      "xs-security.json",
      "package.json"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which SAP HANA engine is optimized for calculations and analytics?",
    "options":[
      "Calculation Engine",
      "Workflow Engine",
      "Gateway Engine",
      "ABAP Engine"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which SAP HANA concepts are frequently asked in interviews?",
    "options":[
      "Column Store",
      "Row Store",
      "Compression",
      "In-Memory Processing"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow component is used to route approvals?",
    "options":[
      "Decision",
      "Destination",
      "Catalog",
      "Theme"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow task is executed automatically by the system?",
    "options":[
      "Service Task",
      "User Task",
      "Approval Task",
      "Form Task"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow elements are commonly used?",
    "options":[
      "Start Event",
      "User Task",
      "Service Task",
      "Decision"
    ],
    "correct":[0,1,2,3]
  },




  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of Flexible Column Layout (FCL)?",
    "options":[
      "Display Multiple Pages Side By Side",
      "Create OData Services",
      "Manage Themes",
      "Handle Authorization"
    ],
    "correct":[0],
    "explanation":"FCL provides master-detail-detail layouts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 control implements Flexible Column Layout?",
    "options":[
      "sap.f.FlexibleColumnLayout",
      "sap.m.Page",
      "sap.m.SplitApp",
      "sap.ui.layout.Grid"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which layouts are available in Flexible Column Layout?",
    "options":[
      "OneColumn",
      "TwoColumnsMidExpanded",
      "ThreeColumnsMidExpanded",
      "ThreeColumnsEndExpanded"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of Message Manager?",
    "options":[
      "Central Message Handling",
      "Routing",
      "Deployment",
      "Database Access"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control is commonly used to display validation messages?",
    "options":[
      "MessagePopover",
      "Dialog",
      "Panel",
      "VBox"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which file defines navigation targets in Launchpad?",
    "options":[
      "manifest.json",
      "ui5.yaml",
      "Component.js",
      "package.json"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData V4 feature improves network efficiency?",
    "options":[
      "Batch Requests",
      "XML Views",
      "Fragments",
      "Formatters"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData operation retrieves a single entity?",
    "options":[
      "GET_ENTITY",
      "GET_ENTITYSET",
      "CREATE_ENTITY",
      "UPDATE_ENTITY"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData operation retrieves multiple entities?",
    "options":[
      "GET_ENTITYSET",
      "GET_ENTITY",
      "DELETE_ENTITY",
      "UPDATE_ENTITY"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is the purpose of a Work Area in ABAP?",
    "options":[
      "Hold One Row Of Data",
      "Store Multiple Tables",
      "Create CDS Views",
      "Manage Locks"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement clears the contents of a variable?",
    "options":[
      "CLEAR",
      "FREE",
      "DELETE",
      "REMOVE"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement releases memory used by internal tables?",
    "options":[
      "FREE",
      "CLEAR",
      "DELETE",
      "REFRESH"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statements are used with internal tables?",
    "options":[
      "APPEND",
      "INSERT",
      "MODIFY",
      "DELETE"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which ABAP statement is preferred on SAP HANA for better performance?",
    "options":[
      "JOIN",
      "FOR ALL ENTRIES",
      "NESTED LOOP",
      "SELECT INSIDE LOOP"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which coding practice should be avoided for performance reasons?",
    "options":[
      "SELECT Inside LOOP",
      "JOIN",
      "READ TABLE",
      "SORT"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Which transaction is used to create Gateway projects?",
    "options":[
      "SEGW",
      "SE11",
      "SE80",
      "SE24"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Which class contains generated runtime artifacts?",
    "options":[
      "DPC",
      "SE11",
      "MPC_EXT",
      "BADI"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Where should custom code be written in SEGW?",
    "options":[
      "DPC_EXT",
      "DPC",
      "MPC",
      "Generated Classes"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which command creates a new CAP project?",
    "options":[
      "cds init",
      "cds watch",
      "cds deploy",
      "cf push"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which file contains CDS data model definitions?",
    "options":[
      ".cds files",
      "manifest.json",
      "package.json",
      "ui5.yaml"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP databases are commonly supported?",
    "options":[
      "SQLite",
      "SAP HANA",
      "PostgreSQL",
      "H2"
    ],
    "correct":[0,1,2]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP artifact defines business behavior?",
    "options":[
      "Behavior Definition",
      "Service Binding",
      "Metadata Extension",
      "DCL"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP feature executes logic automatically when data changes?",
    "options":[
      "Determination",
      "Draft",
      "Projection",
      "Binding"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP feature checks business rules before save?",
    "options":[
      "Validation",
      "Draft",
      "Projection",
      "Association"
    ],
    "correct":[0]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is the purpose of Cloud Connector?",
    "options":[
      "Connect On-Premise Systems To BTP",
      "Deploy UI5 Apps",
      "Create CDS Views",
      "Manage Launchpad"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which BTP services are commonly used in SAP projects?",
    "options":[
      "Destination Service",
      "XSUAA",
      "Cloud Connector",
      "HTML5 Repository"
    ],
    "correct":[0,1,2,3]
  },

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow element decides the next path based on conditions?",
    "options":[
      "Decision",
      "User Task",
      "Form",
      "Event"
    ],
    "correct":[0]
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow element usually starts a process?",
    "options":[
      "Start Event",
      "User Task",
      "Decision",
      "Service Task"
    ],
    "correct":[0]
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which SAP Build Process Automation components are commonly used?",
    "options":[
      "Processes",
      "Forms",
      "Business Rules",
      "Automations"
    ],
    "correct":[0,1,2,3]
  },



  
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which command adds CI/CD pipeline support to a CAP project?",
    "options":["cds add pipeline","cds add cicd","cf add pipeline","npm add pipeline"],
    "correct":[0],
    "explanation":"cds add pipeline generates CI/CD artifacts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which file is generated when running cds add pipeline?",
    "options":["Jenkinsfile","manifest.json","ui5.yaml","xs-app.json"],
    "correct":[0],
    "explanation":"A Jenkinsfile is generated for SAP Continuous Integration and Delivery."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which artifacts are typically generated by cds add pipeline?",
    "options":["Jenkinsfile",".pipeline/config.yml","manifest.json","package.json"],
    "correct":[0,1],
    "explanation":"The command generates Jenkinsfile and pipeline configuration files."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow task is used to call an external REST API?",
    "options":["Service Task","User Task","Approval Task","Form Task"],
    "correct":[0],
    "explanation":"Service Tasks invoke external services automatically."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Where is workflow runtime data stored?",
    "options":["Workflow Container","Destination Service","Cloud Connector","HTML5 Repository"],
    "correct":[0],
    "explanation":"Workflow data is maintained in the workflow container."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow components are commonly used in SAP Build Process Automation?",
    "options":["User Task","Service Task","Decision","Form"],
    "correct":[0,1,2,3],
    "explanation":"These are the most common workflow building blocks."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is Principal Propagation used for?",
    "options":["Forward User Identity To On-Premise Systems","Deploy Applications","Generate OData Services","Create Launchpad Sites"],
    "correct":[0],
    "explanation":"Principal Propagation forwards the cloud user's identity securely."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which services are involved in Principal Propagation?",
    "options":["Connectivity Service","Cloud Connector","Destination Service","On-Premise System"],
    "correct":[0,1,2,3],
    "explanation":"All these components participate in the principal propagation flow."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which file stores translatable texts in SAPUI5?",
    "options":["i18n.properties","manifest.json","Component.js","ui5.yaml"],
    "correct":[0],
    "explanation":"i18n.properties contains application texts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which framework is primarily used for SAPUI5 unit testing?",
    "options":["QUnit","OPA5","Sinon","Jasmine"],
    "correct":[0],
    "explanation":"QUnit is SAPUI5's standard unit testing framework."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which framework is used for SAPUI5 integration testing?",
    "options":["OPA5","QUnit","Sinon","Mocha"],
    "correct":[0],
    "explanation":"OPA5 is used for integration and end-to-end UI testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which framework provides spies, mocks, and stubs?",
    "options":["Sinon","OPA5","QUnit","Karma"],
    "correct":[0],
    "explanation":"Sinon is used for mocking and stubbing dependencies."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which features are provided by Sinon?",
    "options":["Spy","Stub","Mock","Fake Timers"],
    "correct":[0,1,2,3],
    "explanation":"Sinon supports spies, stubs, mocks, and fake timers."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"What is the purpose of metadata.xml in a Mock Server?",
    "options":["Define OData Metadata","Store Mock Data","Configure Themes","Define Routes"],
    "correct":[0],
    "explanation":"metadata.xml describes entities, properties, and associations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which method starts a SAPUI5 Mock Server?",
    "options":["start()","simulate()","run()","execute()"],
    "correct":[0],
    "explanation":"start() starts the mock server."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which method loads metadata and mock data into a Mock Server?",
    "options":["simulate()","start()","load()","mock()"],
    "correct":[0],
    "explanation":"simulate() loads metadata and local mock data."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"What is rootUri used for in a Mock Server?",
    "options":["Base Service URL","Theme Path","Fragment Path","Model Name"],
    "correct":[0],
    "explanation":"rootUri represents the OData service endpoint."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What does sy-subrc = 0 indicate?",
    "options":["Operation Successful","Operation Failed","Authorization Failure","Runtime Error"],
    "correct":[0],
    "explanation":"A value of 0 indicates successful execution."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is sy-subrc after a successful READ TABLE statement?",
    "options":["0","4","8","12"],
    "correct":[0],
    "explanation":"READ TABLE sets sy-subrc to 0 if the record is found."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What does sy-subrc = 4 usually mean after READ TABLE?",
    "options":["Record Not Found","Success","Authorization Error","Database Error"],
    "correct":[0],
    "explanation":"A value of 4 indicates that no matching record was found."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table types are available in ABAP?",
    "options":["STANDARD","SORTED","HASHED","DATABASE"],
    "correct":[0,1,2],
    "explanation":"STANDARD, SORTED, and HASHED are the three main table types."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table type provides the fastest key access?",
    "options":["HASHED TABLE","STANDARD TABLE","SORTED TABLE","INDEX TABLE"],
    "correct":[0],
    "explanation":"HASHED TABLE provides constant-time key access."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Which SEGW method retrieves a single entity?",
    "options":["GET_ENTITY","GET_ENTITYSET","CREATE_ENTITY","UPDATE_ENTITY"],
    "correct":[0],
    "explanation":"GET_ENTITY is used to fetch a single record."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Which SEGW method retrieves multiple entities?",
    "options":["GET_ENTITYSET","GET_ENTITY","DELETE_ENTITY","EXECUTE_ACTION"],
    "correct":[0],
    "explanation":"GET_ENTITYSET returns a collection of entities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which SAP BTP user type is intended for developers and administrators?",
    "options":["Platform User","Business User","Technical User","Workflow User"],
    "correct":[0],
    "explanation":"Platform Users administer and develop on BTP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which SAP BTP user type typically consumes business applications?",
    "options":["Business User","Platform User","Developer User","Admin User"],
    "correct":[0],
    "explanation":"Business Users access business applications."
  },



  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 router class is commonly used as the base router in SAP Fiori applications?",
    "options":[
      "sap.m.routing.Router",
      "sap.ui.core.routing.Router",
      "sap.m.Router",
      "sap.routing.Router"
    ],
    "correct":[0],
    "explanation":"sap.m.routing.Router extends the core router and is commonly used in SAP Fiori apps."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which are the main configuration objects in SAPUI5 routing?",
    "options":[
      "config",
      "routes",
      "targets",
      "routing"
    ],
    "correct":[0,1,2],
    "explanation":"Routing configuration mainly consists of config, routes, and targets."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which artifacts are part of an OData URL structure?",
    "options":[
      "Service Root URI",
      "Resource Path",
      "Query Options",
      "Header Data"
    ],
    "correct":[0,1,2],
    "explanation":"OData URLs consist of service root URI, resource path, and query options."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which file contains the implementation of a SAPUI5 Component?",
    "options":[
      "Component.js",
      "Component.json",
      "BaseComponent.js",
      "UIComponent.json"
    ],
    "correct":[0],
    "explanation":"Component.js contains the implementation of the application component."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control embeds a component inside another application?",
    "options":[
      "sap.ui.core.ComponentContainer",
      "sap.ui.core.ComponentPanel",
      "sap.ui.core.ComponentGroup",
      "sap.ui.core.ComponentArea"
    ],
    "correct":[0],
    "explanation":"ComponentContainer is used to host a component."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method initializes routing in a SAPUI5 application?",
    "options":[
      "this.getRouter().initialize()",
      "this.getRouter().setup()",
      "this.getRouter().init()",
      "this.getRouter().registerRoutes()"
    ],
    "correct":[0],
    "explanation":"initialize() activates the router and processes the current hash."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which routing configuration property handles invalid hashes?",
    "options":[
      "bypassed",
      "fallback",
      "invalidHash",
      "defaultTarget"
    ],
    "correct":[0],
    "explanation":"The bypassed target is displayed when no route matches."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What does OData use for resource identification?",
    "options":[
      "URI",
      "Email Address",
      "XPath",
      "WSDL"
    ],
    "correct":[0],
    "explanation":"OData resources are identified using URIs."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which function checks whether an OData model contains unsaved changes?",
    "options":[
      "hasPendingChanges()",
      "hasUpdatedValues()",
      "hasPendingValues()",
      "hasModifiedData()"
    ],
    "correct":[0],
    "explanation":"hasPendingChanges() returns true if local changes exist."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData versions are supported by SAPUI5?",
    "options":[
      "OData V2",
      "OData V4",
      "OData V1",
      "OData V7"
    ],
    "correct":[0,1],
    "explanation":"SAPUI5 officially supports OData V2 and OData V4."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which query option returns OData data in JSON format?",
    "options":[
      "$format=json",
      "$json",
      "format=json",
      "json=true"
    ],
    "correct":[0],
    "explanation":"$format=json is the standard OData query option."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which parameter is required when calling simulate() on a SAPUI5 Mock Server?",
    "options":[
      "Metadata file path and mock data folder",
      "Only rootUri",
      "Only service URL",
      "Only autoRespondAfter"
    ],
    "correct":[0],
    "explanation":"simulate() requires the metadata.xml path and mock data location."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which concurrency control mechanism is supported by OData using ETags?",
    "options":[
      "Optimistic Concurrency Control",
      "Pessimistic Concurrency Control",
      "Exclusive Locking",
      "No Concurrency Control"
    ],
    "correct":[0],
    "explanation":"OData uses optimistic concurrency through ETags."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What is returned by ODataModel.createEntry()?",
    "options":[
      "Binding Context",
      "JSON Object",
      "Entity ID",
      "Response Object"
    ],
    "correct":[0],
    "explanation":"createEntry() returns a binding context for the created entry."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which backend method supports Deep Insert in SAP Gateway?",
    "options":[
      "CREATE_DEEP_ENTITY",
      "INSERT_ENTITY_DEEP",
      "CREATE_ENTITY",
      "DEEP_INSERT"
    ],
    "correct":[0],
    "explanation":"CREATE_DEEP_ENTITY is implemented for deep insert operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"In which namespace are Smart Controls provided?",
    "options":[
      "sap.ui.comp",
      "sap.ui.smart",
      "sap.m",
      "sap.f"
    ],
    "correct":[0],
    "explanation":"Smart Controls are provided in sap.ui.comp."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which statements about SAP Fiori Elements are correct?",
    "options":[
      "Apps are annotation-driven",
      "Apps are based on OData services",
      "Heavy UI coding is usually required",
      "Predefined templates are available"
    ],
    "correct":[0,1,3],
    "explanation":"Fiori Elements is metadata-driven and uses predefined templates."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which testing framework is used for user interaction and navigation tests?",
    "options":[
      "OPA5",
      "QUnit",
      "Sinon",
      "Jasmine"
    ],
    "correct":[0],
    "explanation":"OPA5 is used for integration, navigation, and user interaction tests."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which capabilities are provided by OPA5?",
    "options":[
      "User Interaction Testing",
      "Navigation Testing",
      "Integration Testing",
      "Mocking AJAX Requests"
    ],
    "correct":[0,1,2],
    "explanation":"OPA5 focuses on UI interaction and integration testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which pattern is used by QUnit tests?",
    "options":[
      "Arrange Act Assert",
      "Given When Then",
      "MVC",
      "Observer"
    ],
    "correct":[0],
    "explanation":"QUnit commonly follows the Arrange-Act-Assert pattern."
  },




  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 router class is commonly used as the base router in SAP Fiori applications?",
    "options":[
      "sap.m.routing.Router",
      "sap.ui.core.routing.Router",
      "sap.m.Router",
      "sap.routing.Router"
    ],
    "correct":[0],
    "explanation":"sap.m.routing.Router extends the core router and is commonly used in SAP Fiori apps."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which are the main configuration objects in SAPUI5 routing?",
    "options":[
      "config",
      "routes",
      "targets",
      "routing"
    ],
    "correct":[0,1,2],
    "explanation":"Routing configuration mainly consists of config, routes, and targets."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which artifacts are part of an OData URL structure?",
    "options":[
      "Service Root URI",
      "Resource Path",
      "Query Options",
      "Header Data"
    ],
    "correct":[0,1,2],
    "explanation":"OData URLs consist of service root URI, resource path, and query options."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which file contains the implementation of a SAPUI5 Component?",
    "options":[
      "Component.js",
      "Component.json",
      "BaseComponent.js",
      "UIComponent.json"
    ],
    "correct":[0],
    "explanation":"Component.js contains the implementation of the application component."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control embeds a component inside another application?",
    "options":[
      "sap.ui.core.ComponentContainer",
      "sap.ui.core.ComponentPanel",
      "sap.ui.core.ComponentGroup",
      "sap.ui.core.ComponentArea"
    ],
    "correct":[0],
    "explanation":"ComponentContainer is used to host a component."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method initializes routing in a SAPUI5 application?",
    "options":[
      "this.getRouter().initialize()",
      "this.getRouter().setup()",
      "this.getRouter().init()",
      "this.getRouter().registerRoutes()"
    ],
    "correct":[0],
    "explanation":"initialize() activates the router and processes the current hash."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which routing configuration property handles invalid hashes?",
    "options":[
      "bypassed",
      "fallback",
      "invalidHash",
      "defaultTarget"
    ],
    "correct":[0],
    "explanation":"The bypassed target is displayed when no route matches."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What does OData use for resource identification?",
    "options":[
      "URI",
      "Email Address",
      "XPath",
      "WSDL"
    ],
    "correct":[0],
    "explanation":"OData resources are identified using URIs."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which function checks whether an OData model contains unsaved changes?",
    "options":[
      "hasPendingChanges()",
      "hasUpdatedValues()",
      "hasPendingValues()",
      "hasModifiedData()"
    ],
    "correct":[0],
    "explanation":"hasPendingChanges() returns true if local changes exist."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData versions are supported by SAPUI5?",
    "options":[
      "OData V2",
      "OData V4",
      "OData V1",
      "OData V7"
    ],
    "correct":[0,1],
    "explanation":"SAPUI5 officially supports OData V2 and OData V4."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which query option returns OData data in JSON format?",
    "options":[
      "$format=json",
      "$json",
      "format=json",
      "json=true"
    ],
    "correct":[0],
    "explanation":"$format=json is the standard OData query option."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which parameter is required when calling simulate() on a SAPUI5 Mock Server?",
    "options":[
      "Metadata file path and mock data folder",
      "Only rootUri",
      "Only service URL",
      "Only autoRespondAfter"
    ],
    "correct":[0],
    "explanation":"simulate() requires the metadata.xml path and mock data location."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which concurrency control mechanism is supported by OData using ETags?",
    "options":[
      "Optimistic Concurrency Control",
      "Pessimistic Concurrency Control",
      "Exclusive Locking",
      "No Concurrency Control"
    ],
    "correct":[0],
    "explanation":"OData uses optimistic concurrency through ETags."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What is returned by ODataModel.createEntry()?",
    "options":[
      "Binding Context",
      "JSON Object",
      "Entity ID",
      "Response Object"
    ],
    "correct":[0],
    "explanation":"createEntry() returns a binding context for the created entry."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which backend method supports Deep Insert in SAP Gateway?",
    "options":[
      "CREATE_DEEP_ENTITY",
      "INSERT_ENTITY_DEEP",
      "CREATE_ENTITY",
      "DEEP_INSERT"
    ],
    "correct":[0],
    "explanation":"CREATE_DEEP_ENTITY is implemented for deep insert operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"In which namespace are Smart Controls provided?",
    "options":[
      "sap.ui.comp",
      "sap.ui.smart",
      "sap.m",
      "sap.f"
    ],
    "correct":[0],
    "explanation":"Smart Controls are provided in sap.ui.comp."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which statements about SAP Fiori Elements are correct?",
    "options":[
      "Apps are annotation-driven",
      "Apps are based on OData services",
      "Heavy UI coding is usually required",
      "Predefined templates are available"
    ],
    "correct":[0,1,3],
    "explanation":"Fiori Elements is metadata-driven and uses predefined templates."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which testing framework is used for user interaction and navigation tests?",
    "options":[
      "OPA5",
      "QUnit",
      "Sinon",
      "Jasmine"
    ],
    "correct":[0],
    "explanation":"OPA5 is used for integration, navigation, and user interaction tests."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which capabilities are provided by OPA5?",
    "options":[
      "User Interaction Testing",
      "Navigation Testing",
      "Integration Testing",
      "Mocking AJAX Requests"
    ],
    "correct":[0,1,2],
    "explanation":"OPA5 focuses on UI interaction and integration testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which pattern is used by QUnit tests?",
    "options":[
      "Arrange Act Assert",
      "Given When Then",
      "MVC",
      "Observer"
    ],
    "correct":[0],
    "explanation":"QUnit commonly follows the Arrange-Act-Assert pattern."
  },


  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 model is best suited for client-side JSON data?",
    "options":[
      "JSONModel",
      "ODataModel",
      "ResourceModel",
      "XMLModel"
    ],
    "correct":[0],
    "explanation":"JSONModel stores and manages client-side JSON data."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which model types are commonly used in SAPUI5?",
    "options":[
      "JSONModel",
      "ODataModel",
      "ResourceModel",
      "XMLModel"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are standard SAPUI5 model types."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding type binds a single property to a control?",
    "options":[
      "Property Binding",
      "Aggregation Binding",
      "Element Binding",
      "Expression Binding"
    ],
    "correct":[0],
    "explanation":"Property binding connects one model property to a control property."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding type is used to bind collections to controls like Table or List?",
    "options":[
      "Aggregation Binding",
      "Property Binding",
      "Element Binding",
      "Object Binding"
    ],
    "correct":[0],
    "explanation":"Aggregation binding is used for lists and tables."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of Element Binding?",
    "options":[
      "Bind An Entire Object Context",
      "Bind A Single Property",
      "Bind Multiple Models",
      "Bind Routes"
    ],
    "correct":[0],
    "explanation":"Element binding binds a control to a complete object."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which formatter function is used to modify displayed values?",
    "options":[
      "Custom JavaScript Formatter",
      "XML Formatter",
      "CSS Formatter",
      "Route Formatter"
    ],
    "correct":[0],
    "explanation":"Formatter functions transform data before display."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which files are commonly found in a SAPUI5 application?",
    "options":[
      "manifest.json",
      "Component.js",
      "index.html",
      "i18n.properties"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are standard SAPUI5 application files."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of manifest.json?",
    "options":[
      "Application Descriptor",
      "Mock Data Storage",
      "Database Configuration",
      "ABAP Configuration"
    ],
    "correct":[0],
    "explanation":"manifest.json acts as the application descriptor."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which section of manifest.json defines data sources?",
    "options":[
      "sap.app",
      "sap.ui5",
      "sap.platform",
      "sap.routing"
    ],
    "correct":[0],
    "explanation":"Data sources are configured under sap.app."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method is used to navigate to another route?",
    "options":[
      "navTo()",
      "navigate()",
      "goTo()",
      "routeTo()"
    ],
    "correct":[0],
    "explanation":"navTo() performs routing navigation."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which route parameters can be passed using navTo()?",
    "options":[
      "ID",
      "Product",
      "Order",
      "Custom Parameters"
    ],
    "correct":[0,1,2,3],
    "explanation":"Any route parameters defined in the route pattern can be passed."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query option limits the number of returned records?",
    "options":[
      "$top",
      "$skip",
      "$filter",
      "$orderby"
    ],
    "correct":[0],
    "explanation":"$top restricts the number of records returned."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query option skips records?",
    "options":[
      "$skip",
      "$top",
      "$count",
      "$expand"
    ],
    "correct":[0],
    "explanation":"$skip is used for pagination."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query option filters records?",
    "options":[
      "$filter",
      "$expand",
      "$count",
      "$top"
    ],
    "correct":[0],
    "explanation":"$filter applies conditions to the dataset."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query option sorts records?",
    "options":[
      "$orderby",
      "$filter",
      "$expand",
      "$count"
    ],
    "correct":[0],
    "explanation":"$orderby is used for sorting."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query option loads related entities?",
    "options":[
      "$expand",
      "$top",
      "$count",
      "$orderby"
    ],
    "correct":[0],
    "explanation":"$expand retrieves associated entities."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData query options are frequently used?",
    "options":[
      "$filter",
      "$expand",
      "$orderby",
      "$top"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are the most commonly used OData query options."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"What is the primary purpose of SAPUI5 Mock Server?",
    "options":[
      "Simulate Backend OData Services",
      "Deploy Applications",
      "Create CDS Views",
      "Generate RAP Artifacts"
    ],
    "correct":[0],
    "explanation":"Mock Server enables frontend development without a real backend."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which file usually contains mock records for an entity set?",
    "options":[
      "JSON File",
      "XML View",
      "manifest.json",
      "Component.js"
    ],
    "correct":[0],
    "explanation":"Mock data is usually stored in JSON files."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"mockserver",
    "question":"Which items are required for Mock Server simulation?",
    "options":[
      "metadata.xml",
      "rootUri",
      "Mock Data",
      "simulate()"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are essential components of a typical Mock Server setup."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 lifecycle method executes before rendering?",
    "options":[
      "onBeforeRendering",
      "onInit",
      "onAfterRendering",
      "onExit"
    ],
    "correct":[0],
    "explanation":"onBeforeRendering executes before the view is rendered."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which lifecycle method executes after rendering?",
    "options":[
      "onAfterRendering",
      "onInit",
      "onBeforeRendering",
      "onExit"
    ],
    "correct":[0],
    "explanation":"onAfterRendering executes after the UI has been rendered."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 controller lifecycle methods are available?",
    "options":[
      "onInit",
      "onBeforeRendering",
      "onAfterRendering",
      "onExit"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are the four main lifecycle hooks."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method is used to access the owner component from a controller?",
    "options":[
      "getOwnerComponent()",
      "getComponent()",
      "ownerComponent()",
      "fetchComponent()"
    ],
    "correct":[0],
    "explanation":"getOwnerComponent() returns the component instance."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method retrieves a named model from a view?",
    "options":[
      "getModel()",
      "fetchModel()",
      "retrieveModel()",
      "loadModel()"
    ],
    "correct":[0],
    "explanation":"getModel() retrieves default or named models."
  },



  
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is the primary purpose of SAP Fiori Launchpad?",
    "options":[
      "Single Entry Point For Fiori Applications",
      "Database Management",
      "ABAP Development",
      "Workflow Execution"
    ],
    "correct":[0],
    "explanation":"Fiori Launchpad provides a central access point for business applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is a Catalog in SAP Fiori Launchpad?",
    "options":[
      "Collection Of Apps And Target Mappings",
      "Collection Of Users",
      "Collection Of Databases",
      "Collection Of Themes"
    ],
    "correct":[0],
    "explanation":"Catalogs contain tiles and target mappings."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is the purpose of a Group in SAP Fiori Launchpad?",
    "options":[
      "Organize Apps On Home Page",
      "Manage OData Services",
      "Store User Data",
      "Manage Themes"
    ],
    "correct":[0],
    "explanation":"Groups organize applications visible on the Launchpad."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which Launchpad concept replaces Groups in newer versions?",
    "options":[
      "Spaces",
      "Roles",
      "Catalogs",
      "Themes"
    ],
    "correct":[0],
    "explanation":"Spaces and Pages are the modern approach."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is a Page in SAP Fiori Launchpad?",
    "options":[
      "Layout Inside A Space",
      "Collection Of Roles",
      "OData Metadata",
      "Authorization Object"
    ],
    "correct":[0],
    "explanation":"Pages define how apps are displayed within Spaces."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which Launchpad content artifacts are commonly used?",
    "options":[
      "Catalog",
      "Space",
      "Page",
      "Target Mapping"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are core Launchpad content artifacts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is a Target Mapping?",
    "options":[
      "Maps Intent To Application",
      "Maps User To Role",
      "Maps Theme To User",
      "Maps CDS To OData"
    ],
    "correct":[0],
    "explanation":"Target Mapping resolves semantic object and action to an app."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"What is Intent-Based Navigation based on?",
    "options":[
      "Semantic Object And Action",
      "Route And Target",
      "View And Controller",
      "CDS And Service"
    ],
    "correct":[0],
    "explanation":"Intent navigation uses Semantic Object + Action."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"What is SAP Build Work Zone primarily used for?",
    "options":[
      "Digital Workplace Experience",
      "Database Administration",
      "ABAP Runtime",
      "CDS Modeling"
    ],
    "correct":[0],
    "explanation":"Work Zone provides a unified digital workplace."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"Which Work Zone edition is commonly used with SAP BTP?",
    "options":[
      "Standard Edition",
      "ABAP Edition",
      "Gateway Edition",
      "SEGW Edition"
    ],
    "correct":[0],
    "explanation":"Standard Edition is commonly used on SAP BTP."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"Which content can be integrated into SAP Build Work Zone?",
    "options":[
      "Fiori Apps",
      "UI5 Applications",
      "CAP Applications",
      "External Websites"
    ],
    "correct":[0,1,2,3],
    "explanation":"Work Zone can aggregate content from multiple sources."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 control provides responsive page layout with header and content?",
    "options":[
      "DynamicPage",
      "Page",
      "Panel",
      "VBox"
    ],
    "correct":[0],
    "explanation":"DynamicPage provides a responsive layout with flexible header behavior."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control is used for responsive cards in Overview Pages?",
    "options":[
      "Card",
      "Panel",
      "Dialog",
      "Shell"
    ],
    "correct":[0],
    "explanation":"Cards are commonly used in Overview Pages."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 layout controls are commonly used?",
    "options":[
      "VBox",
      "HBox",
      "Grid",
      "FlexBox"
    ],
    "correct":[0,1,2,3],
    "explanation":"These controls help create responsive layouts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"adaptation",
    "question":"What is Adaptation Project primarily used for?",
    "options":[
      "Extend Standard Fiori Apps",
      "Create CDS Views",
      "Generate RAP Services",
      "Create Databases"
    ],
    "correct":[0],
    "explanation":"Adaptation Projects allow extension of standard SAP Fiori applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"adaptation",
    "question":"Which SAP Business Application Studio feature creates an Adaptation Project?",
    "options":[
      "Adapt UI Project",
      "CAP Project",
      "MTA Project",
      "Workflow Project"
    ],
    "correct":[0],
    "explanation":"Adapt UI Project wizard is used."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"adaptation",
    "question":"What is adaptation-preview used for?",
    "options":[
      "Preview Adapted Changes",
      "Deploy Application",
      "Generate Metadata",
      "Run Unit Tests"
    ],
    "correct":[0],
    "explanation":"adaptation-preview helps validate changes before deployment."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"Which Git command uploads local commits to a remote repository?",
    "options":[
      "git push",
      "git commit",
      "git clone",
      "git status"
    ],
    "correct":[0],
    "explanation":"git push sends local commits to the remote repository."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"Which Git command downloads a repository?",
    "options":[
      "git clone",
      "git push",
      "git add",
      "git merge"
    ],
    "correct":[0],
    "explanation":"git clone creates a local copy of a repository."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"Which Git command stages files for commit?",
    "options":[
      "git add",
      "git push",
      "git clone",
      "git branch"
    ],
    "correct":[0],
    "explanation":"git add places files into the staging area."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"git",
    "question":"Which Git commands are used daily by developers?",
    "options":[
      "git add",
      "git commit",
      "git push",
      "git pull"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are the most frequently used Git commands."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is the purpose of the Destination Service?",
    "options":[
      "Store External System Connections",
      "Store User Data",
      "Manage Themes",
      "Generate OData Metadata"
    ],
    "correct":[0],
    "explanation":"Destination Service stores connectivity information."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which service provides authentication and authorization on SAP BTP?",
    "options":[
      "XSUAA",
      "Destination Service",
      "Cloud Connector",
      "HTML5 Repository"
    ],
    "correct":[0],
    "explanation":"XSUAA handles identity, authentication and authorization."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which service connects SAP BTP securely to on-premise systems?",
    "options":[
      "Cloud Connector",
      "Workflow Service",
      "HTML5 Repository",
      "Launchpad Service"
    ],
    "correct":[0],
    "explanation":"Cloud Connector provides secure connectivity to on-premise landscapes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which services are commonly used in SAP BTP projects?",
    "options":[
      "Destination Service",
      "XSUAA",
      "Cloud Connector",
      "HTML5 Application Repository"
    ],
    "correct":[0,1,2,3],
    "explanation":"These services are widely used in SAP BTP applications."
  },


  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the primary purpose of a Fragment in SAPUI5?",
    "options":[
      "Reusable UI Part",
      "Database Connection",
      "Routing Configuration",
      "Model Definition"
    ],
    "correct":[0],
    "explanation":"Fragments are reusable UI parts without their own controller."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which method loads an XML Fragment asynchronously?",
    "options":[
      "Fragment.load()",
      "sap.ui.xmlfragment()",
      "loadFragment()",
      "createFragment()"
    ],
    "correct":[0],
    "explanation":"Fragment.load() is the recommended asynchronous API."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which fragment types are supported in SAPUI5?",
    "options":[
      "XML Fragment",
      "JS Fragment",
      "HTML Fragment",
      "JSON Fragment"
    ],
    "correct":[0,1,2],
    "explanation":"XML, JS and HTML fragments are supported."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the benefit of using Fragments?",
    "options":[
      "UI Reusability",
      "Database Optimization",
      "Faster Deployment",
      "Automatic Routing"
    ],
    "correct":[0],
    "explanation":"Fragments reduce duplicate UI code."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding allows JavaScript-like expressions directly in XML views?",
    "options":[
      "Expression Binding",
      "Element Binding",
      "Aggregation Binding",
      "Context Binding"
    ],
    "correct":[0],
    "explanation":"Expression Binding enables calculations and conditions in XML."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which syntax starts an Expression Binding?",
    "options":[
      "{=",
      "{/",
      "{{",
      "#{"
    ],
    "correct":[0],
    "explanation":"Expression bindings start with {= ... }."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"When should a Formatter be preferred over Expression Binding?",
    "options":[
      "Complex Logic",
      "Simple Comparison",
      "Visibility Toggle",
      "Boolean Check"
    ],
    "correct":[0],
    "explanation":"Complex transformations belong in formatter functions."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which are advantages of Formatter Functions?",
    "options":[
      "Code Reusability",
      "Complex Logic Support",
      "Better Maintainability",
      "Centralized Formatting"
    ],
    "correct":[0,1,2,3],
    "explanation":"Formatters improve code organization and reuse."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of EventBus in SAPUI5?",
    "options":[
      "Communication Between Components",
      "Database Access",
      "Routing Configuration",
      "Theme Management"
    ],
    "correct":[0],
    "explanation":"EventBus enables publish-subscribe communication."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which EventBus method publishes an event?",
    "options":[
      "publish()",
      "fire()",
      "trigger()",
      "emit()"
    ],
    "correct":[0],
    "explanation":"publish() sends an event through EventBus."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which EventBus method subscribes to an event?",
    "options":[
      "subscribe()",
      "listen()",
      "attach()",
      "observe()"
    ],
    "correct":[0],
    "explanation":"subscribe() registers an event handler."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which EventBus methods are commonly used?",
    "options":[
      "publish",
      "subscribe",
      "unsubscribe",
      "destroy"
    ],
    "correct":[0,1,2],
    "explanation":"Publish, subscribe and unsubscribe are the main methods."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What is the purpose of a CSRF Token in OData?",
    "options":[
      "Protect Against Cross-Site Request Forgery",
      "Improve Performance",
      "Enable Routing",
      "Support Deep Insert"
    ],
    "correct":[0],
    "explanation":"CSRF tokens protect state-changing operations."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which OData operations require CSRF protection?",
    "options":[
      "POST",
      "PUT",
      "PATCH",
      "DELETE"
    ],
    "correct":[0,1,2,3],
    "explanation":"All state-changing operations require CSRF protection."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"What is the purpose of MPC_EXT class?",
    "options":[
      "Metadata Extension Logic",
      "Data Retrieval Logic",
      "Authorization Logic",
      "Routing Logic"
    ],
    "correct":[0],
    "explanation":"MPC_EXT extends metadata provider functionality."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"What is the purpose of DPC_EXT class?",
    "options":[
      "Business Logic Implementation",
      "Metadata Definition",
      "Theme Configuration",
      "Launchpad Setup"
    ],
    "correct":[0],
    "explanation":"DPC_EXT contains custom OData service logic."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"segw",
    "question":"Which method is used for Deep Insert processing in SEGW?",
    "options":[
      "CREATE_DEEP_ENTITY",
      "GET_ENTITYSET",
      "EXECUTE_ACTION",
      "UPDATE_ENTITY"
    ],
    "correct":[0],
    "explanation":"CREATE_DEEP_ENTITY handles deep insert requests."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS relationship implies ownership and cascading delete?",
    "options":[
      "Composition",
      "Association",
      "Projection",
      "Aspect"
    ],
    "correct":[0],
    "explanation":"Composition represents strong ownership."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS relationship represents a loose connection between entities?",
    "options":[
      "Association",
      "Composition",
      "Aspect",
      "Projection"
    ],
    "correct":[0],
    "explanation":"Associations do not imply ownership."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which statements about Composition are correct?",
    "options":[
      "Represents Ownership",
      "Supports Cascading Delete",
      "Parent Controls Child Lifecycle",
      "Used For Strong Relationships"
    ],
    "correct":[0,1,2,3],
    "explanation":"Composition is used for parent-child ownership scenarios."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP event handler executes before the default processing?",
    "options":[
      "before",
      "on",
      "after",
      "around"
    ],
    "correct":[0],
    "explanation":"before handlers run prior to standard processing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP event handler replaces the default implementation?",
    "options":[
      "on",
      "before",
      "after",
      "pre"
    ],
    "correct":[0],
    "explanation":"on handlers provide custom implementation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP event handler executes after processing is completed?",
    "options":[
      "after",
      "before",
      "on",
      "replace"
    ],
    "correct":[0],
    "explanation":"after handlers run after successful processing."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP event handlers are available?",
    "options":[
      "before",
      "on",
      "after",
      "reject"
    ],
    "correct":[0,1,2],
    "explanation":"before, on and after are the standard CAP handlers."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP artifact exposes business objects externally?",
    "options":[
      "Service Definition",
      "Behavior Definition",
      "Metadata Extension",
      "Determination"
    ],
    "correct":[0],
    "explanation":"Service Definitions expose entities for consumption."
  },


  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is the purpose of a Behavior Definition in RAP?",
    "options":[
      "Define Business Behavior Of Entities",
      "Publish OData Service",
      "Create Database Tables",
      "Configure Launchpad"
    ],
    "correct":[0],
    "explanation":"Behavior Definition defines CRUD operations, actions, validations and determinations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is a Determination in RAP?",
    "options":[
      "Automatic Logic Triggered During Entity Processing",
      "Authorization Check",
      "Database Trigger",
      "OData Metadata Extension"
    ],
    "correct":[0],
    "explanation":"Determinations automatically derive or update values during processing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is a Validation in RAP?",
    "options":[
      "Business Rule Check Before Save",
      "UI Control Validation",
      "Database Index",
      "Routing Validation"
    ],
    "correct":[0],
    "explanation":"Validations verify business rules before data is persisted."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is an Action in RAP?",
    "options":[
      "Custom Business Operation",
      "Database Table",
      "Navigation Route",
      "Authorization Object"
    ],
    "correct":[0],
    "explanation":"Actions execute custom business logic such as Approve or Reject."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which are common RAP Behavior components?",
    "options":[
      "Action",
      "Validation",
      "Determination",
      "Authorization"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are frequently used behavior definition elements."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is the purpose of a Service Binding?",
    "options":[
      "Publish Service Through Protocol",
      "Create CDS View",
      "Create Database Table",
      "Configure Workflow"
    ],
    "correct":[0],
    "explanation":"Service Binding publishes services as OData V2 or OData V4."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which protocols are commonly supported by RAP Service Binding?",
    "options":[
      "OData V2",
      "OData V4",
      "SOAP",
      "REST"
    ],
    "correct":[0,1],
    "explanation":"RAP commonly publishes OData V2 and OData V4 services."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What is Draft Handling in RAP?",
    "options":[
      "Save Incomplete Changes Before Activation",
      "Create Temporary Database",
      "Generate Metadata",
      "Deploy Service"
    ],
    "correct":[0],
    "explanation":"Draft allows users to save work before final activation."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which are advantages of RAP Draft?",
    "options":[
      "Autosave Support",
      "Resume Editing Later",
      "Improved User Experience",
      "Transactional Consistency"
    ],
    "correct":[0,1,2,3],
    "explanation":"Draft improves usability and transaction management."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is Cloud Foundry in SAP BTP?",
    "options":[
      "Application Runtime Environment",
      "Database Service",
      "Workflow Engine",
      "Launchpad Service"
    ],
    "correct":[0],
    "explanation":"Cloud Foundry is the primary runtime environment on SAP BTP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which command logs into Cloud Foundry?",
    "options":[
      "cf login",
      "cf connect",
      "cf start",
      "cf auth"
    ],
    "correct":[0],
    "explanation":"cf login authenticates a user into Cloud Foundry."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which command deploys an application to Cloud Foundry?",
    "options":[
      "cf push",
      "cf deploy",
      "cf upload",
      "cf build"
    ],
    "correct":[0],
    "explanation":"cf push uploads and deploys applications."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which Cloud Foundry concepts are important?",
    "options":[
      "Org",
      "Space",
      "Route",
      "App"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are fundamental Cloud Foundry concepts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is xs-app.json primarily used for?",
    "options":[
      "Approuter Configuration",
      "Database Configuration",
      "CDS Definition",
      "Workflow Definition"
    ],
    "correct":[0],
    "explanation":"xs-app.json defines routing and authentication rules for Approuter."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which component reads xs-app.json?",
    "options":[
      "Approuter",
      "CAP Runtime",
      "HANA Database",
      "Workflow Engine"
    ],
    "correct":[0],
    "explanation":"Approuter uses xs-app.json for request routing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is xs-security.json used for?",
    "options":[
      "Security Configuration",
      "Theme Configuration",
      "Routing Configuration",
      "Deployment Configuration"
    ],
    "correct":[0],
    "explanation":"xs-security.json defines scopes, roles and authorization settings."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which artifacts are commonly used in BTP security?",
    "options":[
      "xs-security.json",
      "Role Collections",
      "Scopes",
      "XSUAA"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are key security artifacts in SAP BTP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is the purpose of mta.yaml?",
    "options":[
      "Multi-Target Application Deployment Descriptor",
      "Database Schema Definition",
      "Workflow Configuration",
      "CDS Service Definition"
    ],
    "correct":[0],
    "explanation":"mta.yaml describes modules, resources and deployment configuration."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which command generates an MTAR file?",
    "options":[
      "mbt build",
      "cf push",
      "cds watch",
      "npm start"
    ],
    "correct":[0],
    "explanation":"mbt build creates the MTAR deployment archive."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What does 'cds add pipeline' generate?",
    "options":[
      "CI/CD Configuration Files",
      "Database Tables",
      "OData Metadata",
      "Workflow Definitions"
    ],
    "correct":[0],
    "explanation":"cds add pipeline generates CI/CD pipeline artifacts such as Jenkins configuration."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which file is commonly generated when using 'cds add pipeline'?",
    "options":[
      "Jenkinsfile",
      "manifest.json",
      "Component.js",
      "metadata.xml"
    ],
    "correct":[0],
    "explanation":"A Jenkinsfile is typically generated for CI/CD automation."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which folders are standard in a CAP project?",
    "options":[
      "app",
      "db",
      "srv",
      "test"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are standard CAP project folders."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What does sy-subrc contain after an ABAP statement executes?",
    "options":[
      "Return Code",
      "Database Connection",
      "Memory Address",
      "Program Name"
    ],
    "correct":[0],
    "explanation":"sy-subrc indicates success or failure of many ABAP statements."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What does sy-subrc = 0 generally indicate?",
    "options":[
      "Successful Execution",
      "Runtime Error",
      "Authorization Failure",
      "Database Lock"
    ],
    "correct":[0],
    "explanation":"A value of 0 usually means success."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table types exist in ABAP?",
    "options":[
      "STANDARD",
      "SORTED",
      "HASHED",
      "INDEX"
    ],
    "correct":[0,1,2],
    "explanation":"STANDARD, SORTED and HASHED are the primary internal table types."
  },




  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table provides the fastest key-based access in ABAP?",
    "options":[
      "HASHED TABLE",
      "STANDARD TABLE",
      "SORTED TABLE",
      "TRANSPARENT TABLE"
    ],
    "correct":[0],
    "explanation":"HASHED TABLE provides O(1) key access and requires a unique key."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which internal table automatically maintains sorted order?",
    "options":[
      "SORTED TABLE",
      "STANDARD TABLE",
      "HASHED TABLE",
      "DATABASE TABLE"
    ],
    "correct":[0],
    "explanation":"SORTED TABLE always keeps entries sorted by key."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statement is used to read a single row from an internal table?",
    "options":[
      "READ TABLE",
      "SELECT SINGLE",
      "LOOP AT",
      "FETCH TABLE"
    ],
    "correct":[0],
    "explanation":"READ TABLE retrieves a specific row from an internal table."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"After a successful READ TABLE statement, what is the value of sy-subrc?",
    "options":[
      "0",
      "4",
      "8",
      "12"
    ],
    "correct":[0],
    "explanation":"sy-subrc = 0 indicates the record was found."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which additions can be used with READ TABLE?",
    "options":[
      "WITH KEY",
      "INDEX",
      "TRANSPORTING NO FIELDS",
      "BINARY SEARCH"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are valid READ TABLE additions."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is the main purpose of FOR ALL ENTRIES?",
    "options":[
      "Fetch Related Records Using Internal Table Values",
      "Sort Internal Tables",
      "Create Database Tables",
      "Lock Records"
    ],
    "correct":[0],
    "explanation":"FOR ALL ENTRIES performs a database selection using values from an internal table."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What must be checked before using FOR ALL ENTRIES?",
    "options":[
      "Internal Table Is Not Empty",
      "Table Is Sorted",
      "Database Is Locked",
      "Program Is Active"
    ],
    "correct":[0],
    "explanation":"An empty internal table may result in unexpected full table selection."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statements about FOR ALL ENTRIES are correct?",
    "options":[
      "Used To Reduce Database Calls",
      "Requires Internal Table",
      "Should Check Internal Table Is Not Initial",
      "Acts Similar To SQL IN Condition"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are important FOR ALL ENTRIES characteristics."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is a Function Module in ABAP?",
    "options":[
      "Reusable Procedure Stored In Function Group",
      "Database Table",
      "Class Method",
      "CDS Entity"
    ],
    "correct":[0],
    "explanation":"Function Modules provide reusable procedural logic."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which transaction is used to create Function Modules?",
    "options":[
      "SE37",
      "SE80",
      "SE11",
      "SE24"
    ],
    "correct":[0],
    "explanation":"SE37 is the Function Builder transaction."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What does RFC stand for?",
    "options":[
      "Remote Function Call",
      "Reusable Function Component",
      "Runtime Function Call",
      "Remote File Connector"
    ],
    "correct":[0],
    "explanation":"RFC allows communication between SAP and external systems."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is a BAPI?",
    "options":[
      "Standard SAP Business API",
      "Database Procedure",
      "CDS Annotation",
      "Gateway Service"
    ],
    "correct":[0],
    "explanation":"BAPIs are business-oriented APIs exposed by SAP."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which are types of RFC?",
    "options":[
      "sRFC",
      "aRFC",
      "tRFC",
      "qRFC"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are standard RFC communication types."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is a User Exit?",
    "options":[
      "Enhancement Technique For Standard SAP Programs",
      "Database Trigger",
      "Workflow Task",
      "Authorization Object"
    ],
    "correct":[0],
    "explanation":"User Exits allow custom code in SAP standard processes."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is a BADI?",
    "options":[
      "Object-Oriented Enhancement Framework",
      "Database Index",
      "Gateway Service",
      "CDS View"
    ],
    "correct":[0],
    "explanation":"BADI is SAP's object-oriented enhancement technique."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which enhancement technique supports multiple implementations?",
    "options":[
      "BADI",
      "User Exit",
      "Customer Exit",
      "Substitution"
    ],
    "correct":[0],
    "explanation":"BADIs can support multiple active implementations."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which ABAP enhancement techniques are commonly used?",
    "options":[
      "BADI",
      "User Exit",
      "Customer Exit",
      "Enhancement Point"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are SAP enhancement mechanisms."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata",
    "question":"Which SEGW method is called when reading multiple records?",
    "options":[
      "GET_ENTITYSET",
      "GET_ENTITY",
      "CREATE_ENTITY",
      "DELETE_ENTITY"
    ],
    "correct":[0],
    "explanation":"GET_ENTITYSET retrieves collections of records."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata",
    "question":"Which SEGW method is called when reading a single record?",
    "options":[
      "GET_ENTITY",
      "GET_ENTITYSET",
      "UPDATE_ENTITY",
      "EXECUTE_ACTION"
    ],
    "correct":[0],
    "explanation":"GET_ENTITY retrieves a single entity."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"odata",
    "question":"Which CRUD methods are commonly implemented in DPC_EXT?",
    "options":[
      "GET_ENTITY",
      "GET_ENTITYSET",
      "CREATE_ENTITY",
      "UPDATE_ENTITY"
    ],
    "correct":[0,1,2,3],
    "explanation":"These methods support OData CRUD operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata",
    "question":"What is the purpose of \$batch in OData?",
    "options":[
      "Execute Multiple Requests In One HTTP Call",
      "Create Metadata",
      "Generate CDS Views",
      "Create RAP Behavior"
    ],
    "correct":[0],
    "explanation":"$batch improves performance by grouping requests."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata",
    "question":"What is a Navigation Property in OData?",
    "options":[
      "Relationship Between Entities",
      "UI Route",
      "Launchpad Intent",
      "Database Index"
    ],
    "correct":[0],
    "explanation":"Navigation properties define entity relationships."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"odata",
    "question":"Which advanced OData concepts are frequently asked in interviews?",
    "options":[
      "Deep Insert",
      "Batch Processing",
      "Navigation Property",
      "Function Import"
    ],
    "correct":[0,1,2,3],
    "explanation":"These concepts are commonly discussed in SAP OData interviews."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the purpose of the Device Model in SAPUI5?",
    "options":[
      "Provide Device Information To The Application",
      "Store OData Records",
      "Manage Routing",
      "Handle Authentication"
    ],
    "correct":[0],
    "explanation":"Device Model exposes information such as phone, tablet and desktop."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which device properties are commonly used from Device Model?",
    "options":[
      "Phone",
      "Tablet",
      "Desktop",
      "Touch"
    ],
    "correct":[0,1,2,3],
    "explanation":"These properties help create responsive applications."
  },



  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"qunit",
    "question":"What is the primary purpose of QUnit in SAPUI5?",
    "options":[
      "Unit Testing",
      "Integration Testing",
      "Performance Testing",
      "Security Testing"
    ],
    "correct":[0],
    "explanation":"QUnit is the standard framework for unit testing in SAPUI5."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"qunit",
    "question":"Which QUnit function is used to define a test case?",
    "options":[
      "QUnit.test",
      "QUnit.case",
      "QUnit.check",
      "QUnit.run"
    ],
    "correct":[0],
    "explanation":"QUnit.test() defines an individual test case."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"qunit",
    "question":"Which assertions are available in QUnit?",
    "options":[
      "equal",
      "strictEqual",
      "ok",
      "deepEqual"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are commonly used QUnit assertions."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"opa5",
    "question":"What is the purpose of OPA5?",
    "options":[
      "Integration And UI Testing",
      "Unit Testing",
      "Database Testing",
      "Load Testing"
    ],
    "correct":[0],
    "explanation":"OPA5 is used for end-to-end UI and integration testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"opa5",
    "question":"What does OPA stand for?",
    "options":[
      "One Page Acceptance",
      "Open Process Automation",
      "Object Process API",
      "Operation Planning Assistant"
    ],
    "correct":[0],
    "explanation":"OPA stands for One Page Acceptance."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"opa5",
    "question":"Which OPA5 concepts are commonly used?",
    "options":[
      "Given",
      "When",
      "Then",
      "Page Objects"
    ],
    "correct":[0,1,2,3],
    "explanation":"OPA5 follows Given-When-Then testing style."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"sinon",
    "question":"What is Sinon primarily used for?",
    "options":[
      "Mocking And Stubbing",
      "UI Rendering",
      "Database Queries",
      "Routing"
    ],
    "correct":[0],
    "explanation":"Sinon provides mocks, stubs and spies for testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"sinon",
    "question":"What is a Spy in Sinon?",
    "options":[
      "Tracks Function Calls",
      "Creates Database Tables",
      "Mocks OData",
      "Creates Routes"
    ],
    "correct":[0],
    "explanation":"Spy observes function execution without changing behavior."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"sinon",
    "question":"What is a Stub in Sinon?",
    "options":[
      "Replace Function Behavior",
      "Track Calls Only",
      "Create OData Service",
      "Generate Metadata"
    ],
    "correct":[0],
    "explanation":"Stubs replace actual implementation during testing."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"sinon",
    "question":"Which test doubles are provided by Sinon?",
    "options":[
      "Spy",
      "Stub",
      "Mock",
      "Fake"
    ],
    "correct":[0,1,2,3],
    "explanation":"Sinon provides multiple test double utilities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is a CDS Projection View in CAP?",
    "options":[
      "Filtered View Of Existing Entity",
      "Database Trigger",
      "Workflow Service",
      "Authorization Role"
    ],
    "correct":[0],
    "explanation":"Projection views expose selected fields from entities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which file usually contains CDS entity definitions?",
    "options":[
      ".cds File",
      ".js File",
      ".xml File",
      ".json File"
    ],
    "correct":[0],
    "explanation":"CDS models are defined in .cds files."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CDS artifacts are commonly used?",
    "options":[
      "Entity",
      "Projection",
      "Association",
      "Aspect"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are common CDS modeling artifacts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is a CAP Action?",
    "options":[
      "Custom Business Operation",
      "Database Table",
      "Navigation Route",
      "Authorization Object"
    ],
    "correct":[0],
    "explanation":"Actions implement business operations beyond CRUD."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is a CAP Function?",
    "options":[
      "Read-Only Operation Returning Data",
      "Database Trigger",
      "Deployment Artifact",
      "Authentication Service"
    ],
    "correct":[0],
    "explanation":"Functions return data and do not modify state."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which CAP service operations are supported?",
    "options":[
      "CRUD",
      "Actions",
      "Functions",
      "Events"
    ],
    "correct":[0,1,2,3],
    "explanation":"CAP supports CRUD, Actions, Functions and Events."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"What does SAP HANA stand for?",
    "options":[
      "High Performance Analytic Appliance",
      "High Availability Network Architecture",
      "Hybrid Analytical Network Access",
      "Hyper Application Native Architecture"
    ],
    "correct":[0],
    "explanation":"SAP HANA stands for High Performance Analytic Appliance."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"hana",
    "question":"What type of database is SAP HANA?",
    "options":[
      "In-Memory Database",
      "File-Based Database",
      "NoSQL Database",
      "Graph Database Only"
    ],
    "correct":[0],
    "explanation":"SAP HANA stores data primarily in memory."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"hana",
    "question":"Which are advantages of SAP HANA?",
    "options":[
      "Fast Performance",
      "Real-Time Analytics",
      "Column Store",
      "In-Memory Processing"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are key SAP HANA advantages."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"abap",
    "question":"Which transaction code is used for Data Dictionary objects?",
    "options":[
      "SE11",
      "SE80",
      "SE24",
      "SE37"
    ],
    "correct":[0],
    "explanation":"SE11 is used for Data Dictionary maintenance."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"abap",
    "question":"Which transaction code is used for ABAP Class Builder?",
    "options":[
      "SE24",
      "SE11",
      "SE37",
      "SE38"
    ],
    "correct":[0],
    "explanation":"SE24 is used to create and maintain classes."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"abap",
    "question":"Which transaction code is used for Function Modules?",
    "options":[
      "SE37",
      "SE24",
      "SE11",
      "SE80"
    ],
    "correct":[0],
    "explanation":"SE37 is the Function Builder."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"abap",
    "question":"Which ABAP transaction codes are frequently asked in interviews?",
    "options":[
      "SE11",
      "SE24",
      "SE37",
      "SE80"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are commonly used ABAP development transactions."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"What is a Decision in SAP Build Process Automation?",
    "options":[
      "Rule-Based Branching Logic",
      "Database Query",
      "Deployment Step",
      "Authentication Process"
    ],
    "correct":[0],
    "explanation":"Decisions control workflow branching."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workflow",
    "question":"Which workflow artifacts are commonly used?",
    "options":[
      "User Task",
      "Service Task",
      "Decision",
      "Form"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are core SAP Build Process Automation artifacts."
  }
,

  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"What does EML stand for in RAP?",
    "options":[
      "Entity Manipulation Language",
      "Enterprise Modeling Language",
      "Entity Metadata Layer",
      "Enterprise Management Logic"
    ],
    "correct":[0],
    "explanation":"EML is used to access RAP Business Objects programmatically."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which EML statement is used to read RAP entities?",
    "options":[
      "READ ENTITIES",
      "SELECT ENTITIES",
      "GET ENTITIES",
      "FETCH ENTITIES"
    ],
    "correct":[0],
    "explanation":"READ ENTITIES retrieves RAP business object data."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which EML statement is used to create, update or delete entities?",
    "options":[
      "MODIFY ENTITIES",
      "UPDATE ENTITIES",
      "CHANGE ENTITIES",
      "MANAGE ENTITIES"
    ],
    "correct":[0],
    "explanation":"MODIFY ENTITIES handles create, update and delete operations."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which operations are supported through EML?",
    "options":[
      "READ",
      "CREATE",
      "UPDATE",
      "DELETE"
    ],
    "correct":[0,1,2,3],
    "explanation":"EML supports complete CRUD operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP approach requires developers to implement persistence logic manually?",
    "options":[
      "Unmanaged RAP",
      "Managed RAP",
      "Draft RAP",
      "Projection RAP"
    ],
    "correct":[0],
    "explanation":"Unmanaged RAP requires manual implementation of persistence logic."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which RAP approach is recommended for most new applications?",
    "options":[
      "Managed RAP",
      "Unmanaged RAP",
      "SEGW",
      "BOPF"
    ],
    "correct":[0],
    "explanation":"Managed RAP reduces development effort through framework-managed operations."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld500",
    "question":"Which features are provided automatically by Managed RAP?",
    "options":[
      "CRUD Handling",
      "Transactional Processing",
      "Draft Support",
      "Lock Handling"
    ],
    "correct":[0,1,2,3],
    "explanation":"Managed RAP provides many framework-managed capabilities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Which annotation defines fields displayed in the Object Page header?",
    "options":[
      "UI.HeaderInfo",
      "UI.LineItem",
      "UI.Facets",
      "UI.Chart"
    ],
    "correct":[0],
    "explanation":"UI.HeaderInfo controls Object Page header information."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Which annotation is used to define identification fields?",
    "options":[
      "UI.Identification",
      "UI.LineItem",
      "UI.SelectionFields",
      "UI.Hidden"
    ],
    "correct":[0],
    "explanation":"UI.Identification defines important business object fields."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Which annotation defines filter fields in List Reports?",
    "options":[
      "UI.SelectionFields",
      "UI.LineItem",
      "UI.HeaderInfo",
      "UI.Chart"
    ],
    "correct":[0],
    "explanation":"UI.SelectionFields controls Smart Filter Bar fields."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Which annotation groups fields together on an Object Page?",
    "options":[
      "UI.FieldGroup",
      "UI.LineItem",
      "UI.Hidden",
      "UI.Chart"
    ],
    "correct":[0],
    "explanation":"UI.FieldGroup logically groups related fields."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Which annotations are commonly used in Fiori Elements projects?",
    "options":[
      "UI.LineItem",
      "UI.FieldGroup",
      "UI.HeaderInfo",
      "UI.SelectionFields"
    ],
    "correct":[0,1,2,3],
    "explanation":"These annotations are frequently used in Fiori Elements."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"bas",
    "question":"What is a Dev Space in SAP Business Application Studio?",
    "options":[
      "Development Environment Container",
      "Database Instance",
      "Deployment Package",
      "Workflow Runtime"
    ],
    "correct":[0],
    "explanation":"Dev Spaces provide isolated development environments."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"bas",
    "question":"Which Dev Space type is commonly used for SAP Fiori development?",
    "options":[
      "SAP Fiori",
      "ABAP Cloud",
      "Data Science",
      "HANA Modeling"
    ],
    "correct":[0],
    "explanation":"The SAP Fiori Dev Space contains tools for UI5 and Fiori development."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"bas",
    "question":"Which tools are commonly available in SAP Fiori Dev Space?",
    "options":[
      "SAP Fiori Tools",
      "Node.js",
      "Git",
      "UI5 CLI"
    ],
    "correct":[0,1,2,3],
    "explanation":"These tools are commonly preconfigured."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is HTML5 Application Repository used for?",
    "options":[
      "Store And Serve HTML5 Applications",
      "Store CDS Models",
      "Store RAP Services",
      "Store Workflows"
    ],
    "correct":[0],
    "explanation":"HTML5 Repository stores deployed UI applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which component routes requests between frontend and backend services?",
    "options":[
      "Approuter",
      "Destination Service",
      "XSUAA",
      "Cloud Connector"
    ],
    "correct":[0],
    "explanation":"Approuter acts as the central entry point."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which components are commonly used in a BTP deployment architecture?",
    "options":[
      "Approuter",
      "XSUAA",
      "Destination Service",
      "HTML5 Repository"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are common building blocks of SAP BTP solutions."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"abap_sql",
    "question":"Which ABAP SQL statement retrieves data from a database table?",
    "options":[
      "SELECT",
      "FETCH",
      "READ",
      "GET"
    ],
    "correct":[0],
    "explanation":"SELECT is the primary Open SQL statement."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"abap_sql",
    "question":"Which statement retrieves exactly one row from a database table?",
    "options":[
      "SELECT SINGLE",
      "READ TABLE",
      "GET SINGLE",
      "FETCH ONE"
    ],
    "correct":[0],
    "explanation":"SELECT SINGLE is used for a single database record."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"abap_sql",
    "question":"Which Open SQL operations are available?",
    "options":[
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correct":[0,1,2,3],
    "explanation":"Open SQL supports standard CRUD operations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cds",
    "question":"What is the primary purpose of a CDS View?",
    "options":[
      "Semantic Data Modeling",
      "UI Rendering",
      "Workflow Processing",
      "Authorization Management"
    ],
    "correct":[0],
    "explanation":"CDS Views provide a semantic layer over database tables."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cds",
    "question":"Which CDS view type is usually built directly on database tables?",
    "options":[
      "Basic View",
      "Consumption View",
      "Projection View",
      "Metadata Extension"
    ],
    "correct":[0],
    "explanation":"Basic Views form the foundation of the VDM architecture."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cds",
    "question":"Which CDS concepts are frequently discussed in interviews?",
    "options":[
      "Association",
      "Composition",
      "Annotation",
      "Projection"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are core CDS modeling concepts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"amdp",
    "question":"What does AMDP stand for?",
    "options":[
      "ABAP Managed Database Procedure",
      "ABAP Metadata Definition Procedure",
      "Advanced Managed Data Processing",
      "ABAP Model Driven Programming"
    ],
    "correct":[0],
    "explanation":"AMDP allows database procedures to be implemented in ABAP classes."
  },



  
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What kind of dev space is needed to develop SAPUI5 applications?",
    "options":[
      "Basic",
      "SAP Mobile Application",
      "Full Stack Cloud Application",
      "SAP Fiori"
    ],
    "correct":[3],
    "explanation":"SAP Fiori Dev Space is recommended for SAPUI5 and Fiori application development."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the name of the standard bootstrap file recommended for typical SAPUI5 use cases?",
    "options":[
      "preload.js",
      "sap-ui-core.js",
      "sap-m.js",
      "init-default.js"
    ],
    "correct":[1],
    "explanation":"sap-ui-core.js is the standard SAPUI5 bootstrap file."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which JavaScript method is used to define an SAPUI5 module?",
    "options":[
      "sap.ui.declare",
      "jQuery.sap.require",
      "sap.ui.define",
      "jQuery.sap.define"
    ],
    "correct":[2],
    "explanation":"sap.ui.define() is the AMD-style module definition method used in SAPUI5."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which lifecycle hook method is used to perform initial setup in a controller?",
    "options":[
      "onSetup",
      "setup",
      "onInit",
      "init"
    ],
    "correct":[2],
    "explanation":"onInit() is executed once when the controller is instantiated."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which view type is recommended by SAP?",
    "options":[
      "XML View",
      "JSON View",
      "Typed View",
      "HTML View"
    ],
    "correct":[0],
    "explanation":"XML Views are the recommended view type in SAPUI5."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which class is normally used as the base class for SAPUI5 controllers?",
    "options":[
      "sap.ui.core.mvc.Controller",
      "sap.ui.view.Controller",
      "sap.m.Controller",
      "sap.ui.layout.Controller"
    ],
    "correct":[0],
    "explanation":"sap.ui.core.mvc.Controller is the standard base controller class."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 module automatically creates component instances declared in an HTML page?",
    "options":[
      "sap/ui/core/ComponentSupport",
      "sap/ui/core/ComponentModule",
      "sap/ui/core/ComponentAPI",
      "sap/ui/core/ComponentMarkup"
    ],
    "correct":[0],
    "explanation":"ComponentSupport enables declarative component instantiation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which control is used to embed a UI component in a control tree?",
    "options":[
      "sap.ui.core.ComponentBox",
      "sap.ui.core.ComponentConnector",
      "sap.ui.core.ComponentArea",
      "sap.ui.core.ComponentContainer"
    ],
    "correct":[3],
    "explanation":"ComponentContainer hosts a UI component within another control tree."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"In which file is the component controller implemented?",
    "options":[
      "Component.json",
      "manifest.json",
      "Component.js",
      "manifest.js"
    ],
    "correct":[2],
    "explanation":"Component.js contains the component controller implementation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which marker attribute is required to load a component declaratively in HTML?",
    "options":[
      "data-sap-ui-container",
      "data-sap-ui-component",
      "data-sap-ui-area",
      "data-sap-ui-section"
    ],
    "correct":[1],
    "explanation":"data-sap-ui-component marks the DOM element for component creation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which hierarchy represents a typical SAPUI5 application control tree?",
    "options":[
      "ComponentContainer → Shell → XMLView → App → XMLView → Page",
      "ComponentContainer → Page → XMLView → Shell → App → XMLView",
      "ComponentContainer → App → XMLView → Shell → XMLView → Page",
      "ComponentContainer → XMLView → Shell → App → XMLView → Page"
    ],
    "correct":[0],
    "explanation":"This is the standard hierarchy used by SAP Fiori applications."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which SAPUI5 CSS classes trigger specific content densities?",
    "options":[
      "sapUiSizeTouch",
      "sapUiSizeDesktop",
      "sapUiSizeCozy",
      "sapUiSizeCompact"
    ],
    "correct":[2,3],
    "explanation":"sapUiSizeCozy and sapUiSizeCompact are SAPUI5 content density classes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which controls are used to implement forms in SAPUI5?",
    "options":[
      "sap.ui.layout.form.SimpleForm",
      "sap.ui.layout.form.BasicForm",
      "sap.ui.layout.form.Form",
      "sap.ui.layout.Form"
    ],
    "correct":[0,2],
    "explanation":"SimpleForm and Form are valid SAPUI5 form controls."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which controller method can be used to instantiate a fragment?",
    "options":[
      "this.getFragment()",
      "this.createFragment()",
      "this.load()",
      "this.loadFragment()"
    ],
    "correct":[3],
    "explanation":"loadFragment() is the recommended asynchronous API."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which fragment types are supported by SAPUI5?",
    "options":[
      "XML Fragments",
      "JSON Fragments",
      "HTML Fragments",
      "JavaScript Fragments"
    ],
    "correct":[0,2,3],
    "explanation":"XML, HTML and JavaScript fragments are supported. JSON fragments are not."
  },



  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which binding types does SAPUI5 provide?",
    "options":[
      "Aggregation Binding",
      "Entity Binding",
      "Property Binding",
      "Attribute Binding",
      "Element Binding",
      "Table Binding"
    ],
    "correct":[0,2,4],
    "explanation":"SAPUI5 supports Property Binding, Element Binding and Aggregation Binding."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which of the following are predefined model types in SAPUI5?",
    "options":[
      "OData V3 Model",
      "Resource Model",
      "XML Model",
      "HTML Model"
    ],
    "correct":[1,2],
    "explanation":"ResourceModel and XMLModel are standard SAPUI5 model types."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What event is fired by sap.m.Table when the selection changes through user interaction?",
    "options":[
      "itemSelected",
      "selectionChange",
      "itemChange",
      "selectedItem"
    ],
    "correct":[1],
    "explanation":"selectionChange is fired whenever the selected item changes."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which property in complex binding syntax specifies a formatter function?",
    "options":[
      "formatOptions",
      "type",
      "formatter",
      "path"
    ],
    "correct":[2],
    "explanation":"The formatter property points to a formatter function."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which statements about sorting are correct?",
    "options":[
      "Element binding can specify sorting criteria.",
      "The sorter property is used in complex binding syntax.",
      "The sort() method is used on a binding object.",
      "Sorters are instances of sap.ui.model.Sorter.",
      "Only one sorter can be applied at a time."
    ],
    "correct":[1,3],
    "explanation":"Sorting is configured using the sorter property and sap.ui.model.Sorter objects."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which functionalities are provided by SAPUI5 simple types?",
    "options":[
      "Parsing User Input",
      "Formatting Model Data For UI",
      "Reporting Error Messages On UI",
      "Validating User Input"
    ],
    "correct":[0,1,3],
    "explanation":"Simple types support parsing, formatting and validation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"What is the default binding mode of a JSONModel?",
    "options":[
      "One-Time",
      "One-Way",
      "Two-Way",
      "One-Way-To-Source"
    ],
    "correct":[2],
    "explanation":"JSONModel uses Two-Way binding by default."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which statements about filtering are correct?",
    "options":[
      "Element binding can specify filter criteria.",
      "The filter property is used in binding syntax.",
      "The filter() method is used on binding objects.",
      "Filters are instances of sap.ui.model.Filter.",
      "Only one filter can be applied at a time."
    ],
    "correct":[2,3],
    "explanation":"Filtering is performed using filter() and sap.ui.model.Filter objects."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which bootstrap attribute enables expression binding?",
    "options":[
      "data-sap-ui-compatVersion=\"edge\"",
      "data-sap-ui-async=\"true\"",
      "data-sap-ui-theme=\"sap_horizon\"",
      "data-sap-ui-binding=\"expression\""
    ],
    "correct":[0],
    "explanation":"compatVersion=edge enables expression binding support."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"Which parameter specifies the base properties file for a ResourceModel?",
    "options":[
      "bundle",
      "bundleName",
      "bundleUrl",
      "url"
    ],
    "correct":[1],
    "explanation":"bundleName specifies the SAPUI5 module name of the resource bundle."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"If locale de_DE is detected and no supportedLocales or fallbackLocale is defined, what is the fallback chain?",
    "options":[
      "de_DE → de → ''",
      "de_DE → de → en → ''",
      "de_DE → de → '' → en",
      "de → de_DE → ''"
    ],
    "correct":[0],
    "explanation":"SAPUI5 falls back from de_DE to de and then to the raw bundle."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux400",
    "question":"How can texts be accessed from a resource bundle?",
    "options":[
      "Aggregation Binding",
      "Module sap/base/i18n/ResourceModel",
      "Module sap/base/i18n/ResourceBundle",
      "Data Binding Via Resource Model"
    ],
    "correct":[2,3],
    "explanation":"Texts are usually accessed through ResourceBundle APIs or ResourceModel binding."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata_v4",
    "question":"What is the default binding mode of the OData V4 Model?",
    "options":[
      "One-Time",
      "One-Way",
      "Two-Way",
      "One-Way-To-Source"
    ],
    "correct":[1],
    "explanation":"OData V4 Model uses One-Way binding by default."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"odata_v4",
    "question":"Which are valid SAPUI5 OData V4 Group IDs?",
    "options":[
      "$direct",
      "$api",
      "$batch",
      "$auto"
    ],
    "correct":[0,3],
    "explanation":"$auto and $direct are predefined group IDs in OData V4."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"odata",
    "question":"Which OData versions are currently supported by SAPUI5?",
    "options":[
      "OData V1",
      "OData V2",
      "OData V3",
      "OData V4"
    ],
    "correct":[1,3],
    "explanation":"SAPUI5 provides OData V2 and OData V4 model implementations."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"routing",
    "question":"Which URL hashes match the route pattern 'detail/{customerId}'?",
    "options":[
      "detail",
      "detail/",
      "detail/456",
      "detail/(00505604-4e85-1edd-818f-21e64b9cd2cf)",
      "detail/abc",
      "/detail/456",
      "detail/456/Orders"
    ],
    "correct":[2,3,4],
    "explanation":"Any single path segment after detail/ matches the placeholder."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"routing",
    "question":"Which router method is used for navigation?",
    "options":[
      "display",
      "goTo",
      "navTo",
      "setRoute"
    ],
    "correct":[2],
    "explanation":"navTo() navigates to a configured route."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"routing",
    "question":"Which routing property defines targets displayed when no route matches?",
    "options":[
      "bypassed",
      "invalidHash",
      "defaultTarget",
      "noMatch"
    ],
    "correct":[0],
    "explanation":"The bypassed configuration handles unmatched hashes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"routing",
    "question":"Which sections make up the routing configuration in manifest.json?",
    "options":[
      "router",
      "targets",
      "config",
      "hashes",
      "routes"
    ],
    "correct":[1,2,4],
    "explanation":"Routing configuration consists of config, routes and targets."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"routing",
    "question":"Which method initializes routing and evaluates the current hash?",
    "options":[
      "this.getRouter().initialize()",
      "this.getRouter().setup()",
      "this.getRouter().init()",
      "this.getRouter().registerRoutes()"
    ],
    "correct":[2],
    "explanation":"init() starts router processing."
  },



  
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"routing",
    "question":"What does History.getPreviousHash() return when no navigation has occurred yet?",
    "options":[
      "Empty String",
      "null",
      "undefined",
      "Root Route Pattern"
    ],
    "correct":[2],
    "explanation":"If there is no previous navigation state, getPreviousHash() returns undefined."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"When should local data be used?",
    "options":[
      "When working with static data",
      "When productive system performance is poor",
      "To quickly test without creating backend data",
      "To reduce application complexity"
    ],
    "correct":[0,2],
    "explanation":"Local data is mainly used for static content and development/testing purposes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which sap.m.Column properties are used for responsive behavior?",
    "options":[
      "importance",
      "minScreenWidth",
      "demandPopin",
      "visible"
    ],
    "correct":[1,2],
    "explanation":"minScreenWidth and demandPopin control responsive table behavior."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which elements are part of routing configuration?",
    "options":[
      "targets",
      "config",
      "pages",
      "routes",
      "rootView"
    ],
    "correct":[0,1,3],
    "explanation":"Routing consists of config, routes and targets."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"From which control does sap.m.App inherit navigation capabilities?",
    "options":[
      "sap.m.NavigationContainer",
      "sap.m.NavContainer",
      "sap.ui.core.NavContainer",
      "sap.ui.layout.NavContainer"
    ],
    "correct":[1],
    "explanation":"sap.m.App extends sap.m.NavContainer."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Where are routes typically defined?",
    "options":[
      "Component.js",
      "Root View",
      "manifest.json",
      "Controller.js"
    ],
    "correct":[2],
    "explanation":"Modern SAPUI5 applications define routing in manifest.json."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Where should local mock data be stored?",
    "options":[
      "models",
      "localService/mockdata",
      "test",
      "webapp"
    ],
    "correct":[1],
    "explanation":"Mock data is stored in localService/mockdata."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is the recommended design for a full-screen application?",
    "options":[
      "One XML file for App and one for each page",
      "One XML file containing App and all pages",
      "One main XML view and one XML view for each page",
      "Single XML file only"
    ],
    "correct":[2],
    "explanation":"SAP recommends a main App view and separate page views."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which methods are commonly implemented in the Detail controller?",
    "options":[
      "onPress",
      "_onBindingChange",
      "onNavBack",
      "onSelectionChange"
    ],
    "correct":[1,2],
    "explanation":"Detail pages usually implement binding-change and back navigation handlers."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"odata_v2",
    "question":"Which query option requests JSON format from an OData V2 service?",
    "options":[
      "$json",
      "$format=json",
      "format=json",
      "$metadata=json"
    ],
    "correct":[1],
    "explanation":"$format=json explicitly requests JSON payload."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which method is used to navigate from the master view to the detail view?",
    "options":[
      "attachMatched",
      "attachRouteMatched",
      "navTo",
      "toPage"
    ],
    "correct":[2],
    "explanation":"Router navigation is done using navTo()."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is the key difference in navigation for list-detail applications?",
    "options":[
      "No difference",
      "Uses FlexibleColumnLayout",
      "Uses only DynamicPage",
      "Uses SplitApp only"
    ],
    "correct":[2],
    "explanation":"List-detail applications are implemented using FlexibleColumnLayout while routing concepts remain similar."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"When is a list-detail pattern NOT recommended?",
    "options":[
      "Complex filtering requirements",
      "Displaying a single object",
      "Displaying different facets of same object",
      "Displaying master-detail data"
    ],
    "correct":[1,2],
    "explanation":"List-detail is unsuitable for single-object and facet-oriented scenarios."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Where are action buttons displayed in DynamicPage?",
    "options":[
      "DynamicPageHeader",
      "DynamicPageTitle",
      "Content Area",
      "Footer"
    ],
    "correct":[1],
    "explanation":"Actions are displayed in DynamicPageTitle."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Where is the device model created in SAPUI5 template applications?",
    "options":[
      "models.js",
      "Component.js",
      "manifest.json",
      "index.html"
    ],
    "correct":[1],
    "explanation":"The device model is typically instantiated in Component.js."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"The FlexibleColumnLayout is a control of the main list view.",
    "options":[
      "True",
      "False"
    ],
    "correct":[0],
    "explanation":"FlexibleColumnLayout is typically placed in the root view hosting list and detail pages."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which control is the primary container for list-detail applications?",
    "options":[
      "sap.f.DynamicPage",
      "sap.f.FlexibleColumnLayout",
      "sap.ui.layout.VerticalLayout",
      "sap.ui.layout.HorizontalLayout"
    ],
    "correct":[1],
    "explanation":"FlexibleColumnLayout is the main control used for list-detail applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which control is commonly used for the detail page in list-detail applications?",
    "options":[
      "sap.f.DynamicPage",
      "sap.uxap.ObjectPageLayout",
      "sap.m.Page",
      "sap.ui.layout.Grid"
    ],
    "correct":[1],
    "explanation":"ObjectPageLayout is frequently used to display detailed business object information."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which routing differences exist in list-detail applications?",
    "options":[
      "controlId references FlexibleColumnLayout",
      "NotFound view is unnecessary",
      "targets require transition property",
      "targets require controlAggregation"
    ],
    "correct":[0,3],
    "explanation":"FlexibleColumnLayout routing uses controlId and controlAggregation to place views."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"On phones, item selection should occur via active list items rather than list selection mode.",
    "options":[
      "True",
      "False"
    ],
    "correct":[0],
    "explanation":"This is SAP's recommended responsive behavior."
  },





  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"What is the base class for all UI controls in SAPUI5?",
    "options":[
      "sap.ui.Control",
      "sap.ui.core.Control",
      "sap.ui.base.Control",
      "sap.ui.Element"
    ],
    "correct":[1],
    "explanation":"sap.ui.core.Control is the base class for all UI controls."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which renderer function adds control ID and enables event handling support?",
    "options":[
      "writeClasses",
      "writeIcon",
      "writeControlData",
      "write"
    ],
    "correct":[2],
    "explanation":"writeControlData() writes control-specific data including the ID."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which type should be used for a width property of a custom control?",
    "options":[
      "string",
      "sap.ui.core.Integer",
      "sap.ui.core.CSSSize",
      "sap.ui.core.type.CSSSize"
    ],
    "correct":[2],
    "explanation":"sap.ui.core.CSSSize is the recommended type for width properties."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statements are correct regarding custom renderers?",
    "options":[
      "Implement render() in the control",
      "Renderer can be in a separate file",
      "Renderer can use AMD syntax",
      "Assign renderer to renderer property"
    ],
    "correct":[1,2,3],
    "explanation":"Renderers are normally separate modules using AMD syntax and assigned through the renderer property."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which file contains initialization code for a UI library?",
    "options":[
      "library.load.js",
      "library.js",
      "loadlibrary.js",
      "lib.dll"
    ],
    "correct":[1],
    "explanation":"library.js initializes a custom SAPUI5 library."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which statements about UI Elements are correct?",
    "options":[
      "A UI element has an API",
      "A UI element does not have a renderer",
      "A UI element has a renderer",
      "A UI element can have events"
    ],
    "correct":[0,1,3],
    "explanation":"Elements have APIs and events but do not render themselves."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"How can a renderer access properties, associations and aggregations?",
    "options":[
      "Developer creates custom methods",
      "SAPUI5 provides generated accessor methods",
      "Metadata extension only",
      "Renderer cannot access them"
    ],
    "correct":[1],
    "explanation":"SAPUI5 automatically generates accessor methods."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux402",
    "question":"Which method is called in library.js to initialize a library?",
    "options":[
      "registerLibrary",
      "initLibrary",
      "loadLibrary",
      "runLibrary"
    ],
    "correct":[1],
    "explanation":"sap.ui.getCore().initLibrary() initializes custom libraries."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"What can create UIs from OData metadata?",
    "options":[
      "SAP Fiori Elements Floorplans",
      "Flexible Model Programming",
      "Smart Fields",
      "Flexible Column Layout"
    ],
    "correct":[0,2],
    "explanation":"Fiori Elements and Smart Controls use metadata-driven UI generation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Where are SmartTable columns defined?",
    "options":[
      "smartField aggregation",
      "UI.LineItem annotation",
      "smartForm aggregation",
      "UI.DataField annotation"
    ],
    "correct":[1],
    "explanation":"UI.LineItem controls table column generation."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"fiori_elements",
    "question":"Can Smart Controls be used with any OData version?",
    "options":[
      "True",
      "False"
    ],
    "correct":[1],
    "explanation":"Smart Controls are primarily designed for OData V2 services."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"opa5",
    "question":"Which statements about OPA5 are correct?",
    "options":[
      "Supports user interaction testing",
      "Supports integration testing",
      "Is a controller unit test framework",
      "Can test navigation"
    ],
    "correct":[0,1,3],
    "explanation":"OPA5 is used for integration and UI interaction testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"qunit",
    "question":"Does QUnit support SAPUI5 view testing?",
    "options":[
      "Yes",
      "No, OPA5 should be used",
      "Only with Selenium",
      "Only with Sinon"
    ],
    "correct":[1],
    "explanation":"UI testing is typically handled by OPA5 rather than QUnit."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"qunit",
    "question":"Which statements about QUnit are correct?",
    "options":[
      "Supports only synchronous testing",
      "Is a JavaScript unit and integration testing framework",
      "Supports asynchronous testing",
      "Can test generic JavaScript code"
    ],
    "correct":[1,2,3],
    "explanation":"QUnit supports both sync and async JavaScript testing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"What does Git merge do?",
    "options":[
      "Deletes a branch",
      "Combines changes from one branch into another",
      "Creates a repository",
      "Resets commits"
    ],
    "correct":[1],
    "explanation":"Merge integrates changes from one branch into another."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"What is a Git branch?",
    "options":[
      "Main development line only",
      "Local repository",
      "Independent line of development",
      "SAP-specific Git feature"
    ],
    "correct":[2],
    "explanation":"Branches enable independent development streams."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"What happens when a commit is created?",
    "options":[
      "A branch is created",
      "A snapshot of files is stored",
      "Repository is recreated",
      "Remote repository is updated"
    ],
    "correct":[1],
    "explanation":"Commits capture a snapshot of tracked files."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"git",
    "question":"After cloning a repository, files are initially in which state?",
    "options":[
      "Staged and Modified",
      "Tracked and Unmodified",
      "Tracked and Staged",
      "Modified and Tracked"
    ],
    "correct":[1],
    "explanation":"Cloned files are tracked and unchanged."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"git",
    "question":"Which are valid Git file states?",
    "options":[
      "Committed",
      "Changed",
      "Released",
      "Modified"
    ],
    "correct":[0,3],
    "explanation":"Committed and Modified are official Git file states."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"What is the main benefit of having one common UX?",
    "options":[
      "Reduces training costs and improves data quality",
      "Eliminates development effort",
      "Removes backend dependencies",
      "Avoids testing"
    ],
    "correct":[0],
    "explanation":"A consistent UX improves usability and lowers training effort."
  },



  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which practices should be avoided according to the SAP Fiori rule 'Every app must run as a web app'?",
    "options":[
      "Absolute URLs generated in frontend or backend",
      "Using SAPUI5",
      "Hard dependencies between apps",
      "Calling UI2 services directly instead of APIs",
      "Using platform-specific functionality without availability checks"
    ],
    "correct":[0,2,3,4],
    "explanation":"Apps should remain platform-independent and loosely coupled."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Why should custom CSS generally be avoided in SAPUI5 applications?",
    "options":[
      "SAPUI5 does not support CSS",
      "Theme Designer provides centralized styling",
      "CSS slows down OData requests",
      "CSS prevents routing"
    ],
    "correct":[1],
    "explanation":"SAP recommends centralized theming through Theme Designer."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Which factors are important for user assistance?",
    "options":[
      "Instant",
      "Context-sensitive",
      "Confusing",
      "Seamless",
      "Error-prone"
    ],
    "correct":[0,1,2],
    "explanation":"User assistance should be instant, context-sensitive and seamless."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which tile areas are mandatory in SAP Fiori Launchpad?",
    "options":[
      "Subtitle",
      "Header Area",
      "Content Area",
      "Status Area",
      "KPI Area"
    ],
    "correct":[1,2],
    "explanation":"Header and Content areas are mandatory tile sections."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which components are part of SAP Fiori Launchpad?",
    "options":[
      "Shell Services",
      "UI2 Services",
      "Shell Container",
      "Runtime Container",
      "Runtime Configuration"
    ],
    "correct":[0,1,2],
    "explanation":"Shell Services, UI2 Services and Shell Container are FLP core components."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which service types are supported by SAP Fiori Launchpad?",
    "options":[
      "Platform-specific Services",
      "UI5 Services",
      "Platform-independent Services",
      "UI2 Services"
    ],
    "correct":[0,2],
    "explanation":"Launchpad supports platform-specific and platform-independent services."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which Launchpad application helps users find available applications?",
    "options":[
      "Tile Finder",
      "Application Finder",
      "Fiori Designer",
      "Fiori App Search"
    ],
    "correct":[1],
    "explanation":"Application Finder allows users to discover apps available to them."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which information defines a target application in Cross Application Navigation?",
    "options":[
      "Semantic Object",
      "Action",
      "Application URL",
      "Application ID"
    ],
    "correct":[0,1],
    "explanation":"Intent-based navigation uses Semantic Object and Action."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which transaction is used to create a semantic object?",
    "options":[
      "/UI5/LPD_CUST",
      "/UI2/SEMOBJ",
      "/UI5/SEMOBJ",
      "PFCG",
      "SU01"
    ],
    "correct":[1],
    "explanation":"Semantic objects are maintained using transaction /UI2/SEMOBJ."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"launchpad",
    "question":"Which elements are part of a Launchpad tile configuration?",
    "options":[
      "Semantic Object",
      "Launchpad creation via LPD_CUST",
      "Target Mapping",
      "Tile Configuration",
      "Tile Implementation"
    ],
    "correct":[0,2,3],
    "explanation":"Tile configuration includes semantic object, target mapping and tile definition."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"ux410",
    "question":"Flexible Column Layout should be used to split a single object into multiple columns.",
    "options":[
      "True",
      "False"
    ],
    "correct":[0],
    "explanation":"Flexible Column Layout supports multi-column object display."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"adaptation",
    "question":"Which extension techniques are available for SAPUI5 applications?",
    "options":[
      "View Extension",
      "View Enhancement",
      "View Replacement",
      "View Modification"
    ],
    "correct":[0,2,3],
    "explanation":"SAPUI5 extensibility supports extension, replacement and modification."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"adaptation",
    "question":"Which control is used as an extension hook in SAPUI5?",
    "options":[
      "sap.m.Extend",
      "sap.ui.core.Extend",
      "sap.ui.core.ExtensionPoint",
      "sap.comp.ExtendControl"
    ],
    "correct":[2],
    "explanation":"ExtensionPoint enables custom content injection."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is the recommended way to add custom business logic in SAP S/4HANA Cloud?",
    "options":[
      "Modify SAP Standard Code",
      "Use Side-by-Side Extensions on BTP",
      "Direct ABAP Modifications",
      "Custom Database Procedures"
    ],
    "correct":[1],
    "explanation":"SAP recommends side-by-side extensibility using SAP BTP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which programming model is primarily used for non-ABAP extensions on SAP BTP?",
    "options":[
      "RAP",
      "CAP",
      "Fiori Programming Model",
      "SEGW"
    ],
    "correct":[1],
    "explanation":"CAP is SAP's cloud-native development model."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which is NOT a core component of SAP BTP Developer Guide?",
    "options":[
      "ABAP Cloud",
      "CAP",
      "SAP Build Code",
      "SAP Financial Reporting Tools"
    ],
    "correct":[3],
    "explanation":"Financial Reporting Tools are not part of the SAP BTP development stack."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"JSON is built on which two structures?",
    "options":[
      "Collections of Name/Value Pairs",
      "Collections of Value/Value Pairs",
      "Unordered List of Strings",
      "Ordered List of Values"
    ],
    "correct":[0,3],
    "explanation":"JSON consists of objects (name/value pairs) and arrays (ordered values)."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Which command installs project dependencies?",
    "options":[
      "cds",
      "yum",
      "bash",
      "npm"
    ],
    "correct":[3],
    "explanation":"npm install is used to install Node.js dependencies."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"Are namespaces mandatory in CDS models?",
    "options":[
      "Mandatory",
      "Optional"
    ],
    "correct":[1],
    "explanation":"Namespaces are optional but recommended."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cld200",
    "question":"What is the default IDE for SAP BTP development?",
    "options":[
      "Eclipse",
      "Oxygen",
      "SAP Business Application Studio",
      "VS Code"
    ],
    "correct":[2],
    "explanation":"SAP Business Application Studio is SAP's recommended cloud IDE."
  },



  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"In CAP, which keyword is used to send custom events?",
    "options":[
      "throw",
      "emit",
      "action",
      "trigger"
    ],
    "correct":[1],
    "explanation":"srv.emit() is used to emit custom events in CAP."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which JavaScript statement is used to create an exception in Node.js?",
    "options":[
      "throw",
      "try",
      "catch",
      "error"
    ],
    "correct":[0],
    "explanation":"The throw statement raises an exception."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which pattern is used to register event handlers in CAP?",
    "options":[
      "event()",
      "phase()",
      "srv()",
      "handler()"
    ],
    "correct":[2],
    "explanation":"CAP handlers are registered using srv.before(), srv.on(), and srv.after()."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which event phases are available in CAP?",
    "options":[
      "before",
      "on",
      "after",
      "during"
    ],
    "correct":[0,1,2],
    "explanation":"CAP provides before, on and after phases."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which event phase executes before the standard processing logic?",
    "options":[
      "before",
      "on",
      "after",
      "emit"
    ],
    "correct":[0],
    "explanation":"before handlers execute before CAP processes the request."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which event phase is typically used to override standard processing?",
    "options":[
      "before",
      "on",
      "after",
      "init"
    ],
    "correct":[1],
    "explanation":"on handlers replace or implement request processing."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which event phase is used to enrich response data?",
    "options":[
      "before",
      "on",
      "after",
      "emit"
    ],
    "correct":[2],
    "explanation":"after handlers modify or enrich results before returning them."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which Service APIs are commonly used in CAP?",
    "options":[
      "Messaging API",
      "Event Handling API",
      "Querying API",
      "Custom API"
    ],
    "correct":[0,1,2],
    "explanation":"Messaging, Event Handling and Query APIs are standard CAP APIs."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"How many event handlers can be registered for one event phase?",
    "options":[
      "Multiple",
      "Exactly One",
      "Exactly Two",
      "Exactly Three"
    ],
    "correct":[0],
    "explanation":"Multiple handlers can be registered for the same phase."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"cap",
    "question":"What is the recommended way to provide meaningful error messages in CAP?",
    "options":[
      "Catch Exceptions",
      "Hide Errors",
      "Restart Service",
      "Disable Logging"
    ],
    "correct":[0],
    "explanation":"Exceptions should be caught and transformed into meaningful responses."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"cap",
    "question":"Which statements about CAP custom event handlers are correct?",
    "options":[
      "Can implement domain logic",
      "Multiple handlers can be registered",
      "CRUD requests are always handled by custom handlers",
      "One handler can serve multiple events"
    ],
    "correct":[0,1,3],
    "explanation":"Custom handlers add business logic and can be reused."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"security",
    "question":"Which file represents the security descriptor of a CAP application?",
    "options":[
      "xs-sec.json",
      "xs-app.json",
      "xs-security.json",
      "security.json"
    ],
    "correct":[0],
    "explanation":"xs-security.json is commonly referred to as xs-sec.json in training material."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"security",
    "question":"Which files commonly store project configuration?",
    "options":[
      ".cdsrc.json",
      "passport.js",
      "package.json",
      "manifest.yaml"
    ],
    "correct":[0,2],
    "explanation":"CAP configuration is typically stored in .cdsrc.json and package.json."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"security",
    "question":"Which user types work on and with SAP BTP?",
    "options":[
      "Professional Users",
      "Platform Users",
      "Trial Users",
      "Business Users"
    ],
    "correct":[1,3],
    "explanation":"Platform Users and Business Users are the main SAP BTP user categories."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"xsuaa",
    "question":"What capabilities does XSUAA provide?",
    "options":[
      "Store real users",
      "Identify users by email and user ID",
      "Check user roles",
      "Create CDS entities"
    ],
    "correct":[1,2],
    "explanation":"XSUAA provides authentication and authorization."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"xsuaa",
    "question":"Which command adds XSUAA support to a CAP project?",
    "options":[
      "cds add security",
      "cds add uaa",
      "cds add xsuaa",
      "cds add auth"
    ],
    "correct":[2],
    "explanation":"cds add xsuaa adds authorization artifacts."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"xsuaa",
    "question":"What is the default identity provider for SAP BTP platform users?",
    "options":[
      "SAP Cloud Identity Services",
      "SAP ID Service",
      "SAML",
      "XSUAA"
    ],
    "correct":[1],
    "explanation":"SAP ID Service is the default identity provider for platform users."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"testing",
    "question":"Which assertion library is commonly used in Node.js unit testing?",
    "options":[
      "Chai",
      "Express",
      "Passport",
      "Mocha"
    ],
    "correct":[0],
    "explanation":"Chai provides assertion capabilities for Node.js tests."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"testing",
    "question":"What is the key characteristic of unit testing?",
    "options":[
      "Testing components in isolation",
      "Testing production systems",
      "Testing integrations only",
      "Testing user interfaces only"
    ],
    "correct":[0],
    "explanation":"Unit testing validates individual units of code independently."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"integration",
    "question":"Which methods can connect a CAP application to external cloud systems?",
    "options":[
      "BTP Destinations",
      "Cloud Connector",
      "Node.js Configured Destinations",
      "Global Account Destinations"
    ],
    "correct":[0,1,2],
    "explanation":"These are common integration approaches in CAP."
  },


  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"Which role collection is required when integrating with SAP Build Work Zone, Standard Edition?",
    "options":[
      "SAP_ALL",
      "Admin_All",
      "Launchpad_Admin",
      "WorkZone_User"
    ],
    "correct":[2],
    "explanation":"Launchpad_Admin role collection is required for administration tasks."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"Which SAP Build Work Zone feature enables shell plugins and custom branding?",
    "options":[
      "Application Integration",
      "Extensibility",
      "User Management",
      "Site Runtime"
    ],
    "correct":[1],
    "explanation":"Extensibility allows branding and custom extensions."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"What is the primary benefit of SAP Build Work Zone, Standard Edition?",
    "options":[
      "Complex Coding Environment",
      "Centralized Access To Applications And Information",
      "Database Management",
      "ABAP Development"
    ],
    "correct":[1],
    "explanation":"Work Zone provides a central digital workplace experience."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"Which capabilities are provided by SAP Build Work Zone?",
    "options":[
      "Centralized Access",
      "Content Management",
      "Application Integration",
      "Digital Workplace Experience"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are key Work Zone capabilities."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is SAP Build Process Automation primarily used for?",
    "options":[
      "Workflow And Process Automation",
      "Database Administration",
      "ABAP Development",
      "OData Generation"
    ],
    "correct":[0],
    "explanation":"Build Process Automation automates workflows and business processes."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is a User Task in SAP Build Process Automation?",
    "options":[
      "Task Performed By A Human User",
      "Automated API Call",
      "Database Operation",
      "Deployment Step"
    ],
    "correct":[0],
    "explanation":"User Tasks require human interaction."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is a Service Task?",
    "options":[
      "Automated Step Calling A Service",
      "Manual Approval",
      "Form Submission",
      "Launchpad Navigation"
    ],
    "correct":[0],
    "explanation":"Service Tasks execute automatically without user involvement."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which task type requires no human interaction?",
    "options":[
      "Service Task",
      "User Task",
      "Approval Task",
      "Form Task"
    ],
    "correct":[0],
    "explanation":"Service Tasks run automatically."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which task types are commonly used in workflows?",
    "options":[
      "User Task",
      "Service Task",
      "Approval Task",
      "Form Task"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are common workflow task types."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is the purpose of a Process Form?",
    "options":[
      "Collect User Input",
      "Store Database Tables",
      "Create CDS Views",
      "Generate OData Services"
    ],
    "correct":[0],
    "explanation":"Forms are used to collect information from users."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which component is used to define approval flows?",
    "options":[
      "Workflow",
      "Destination",
      "CAP Service",
      "Launchpad"
    ],
    "correct":[0],
    "explanation":"Workflow artifacts model approval processes."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which workflow artifacts are commonly available?",
    "options":[
      "Processes",
      "Forms",
      "Decisions",
      "Tasks"
    ],
    "correct":[0,1,2,3],
    "explanation":"All are workflow building blocks."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is a Decision in SAP Build Process Automation?",
    "options":[
      "Business Rule Evaluation",
      "Database Trigger",
      "Deployment Action",
      "Theme Configuration"
    ],
    "correct":[0],
    "explanation":"Decisions evaluate conditions and determine process flow."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which SAP BTP service stores destination configurations?",
    "options":[
      "Destination Service",
      "Connectivity Service",
      "Workflow Service",
      "HTML5 Repository"
    ],
    "correct":[0],
    "explanation":"Destination Service stores remote system configurations."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which SAP BTP service provides authentication and authorization?",
    "options":[
      "XSUAA",
      "Destination Service",
      "Connectivity Service",
      "Build Process Automation"
    ],
    "correct":[0],
    "explanation":"XSUAA handles authentication and authorization."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which services are frequently used in SAP BTP projects?",
    "options":[
      "Destination Service",
      "XSUAA",
      "Connectivity Service",
      "HTML5 Application Repository"
    ],
    "correct":[0,1,2,3],
    "explanation":"These services are commonly used in cloud projects."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which repository stores deployed SAPUI5 applications in BTP?",
    "options":[
      "HTML5 Application Repository",
      "Destination Service",
      "Workflow Service",
      "Connectivity Service"
    ],
    "correct":[0],
    "explanation":"HTML5 Application Repository stores UI applications."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"btp",
    "question":"What is the purpose of the Connectivity Service?",
    "options":[
      "Secure Access To On-Premise Systems",
      "Store UI5 Apps",
      "Manage Users",
      "Create CDS Models"
    ],
    "correct":[0],
    "explanation":"Connectivity Service enables secure communication with on-premise systems."
  },
  {
    "type":"mcma",
    "difficulty":"expert",
    "topic":"btp",
    "question":"Which SAP BTP concepts are frequently asked in interviews?",
    "options":[
      "Destinations",
      "XSUAA",
      "Connectivity",
      "HTML5 Repository"
    ],
    "correct":[0,1,2,3],
    "explanation":"These are fundamental SAP BTP services."
  },
  {
    "type":"mcq",
    "difficulty":"expert",
    "topic":"workzone",
    "question":"What is the relationship between SAP Build Work Zone and SAP Fiori Launchpad?",
    "options":[
      "Work Zone Extends Launchpad Capabilities",
      "Both Are Unrelated",
      "Launchpad Replaces Work Zone",
      "Work Zone Replaces SAPUI5"
    ],
    "correct":[0],
    "explanation":"Work Zone builds upon Launchpad concepts and extends them with collaboration and content capabilities."
  }






























];
