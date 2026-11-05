// =====================================================================
//  SF ADMIN SCENARIO QUIZ — Question Bank
//  Fixed 40 questions per session: 20 Scenario + 20 MCQ
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════
  {
    "id": 1,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "OOP Concepts Refresher",
    "scenario": "A developer is building a Salesforce application that manages different types of employees. All employees share common properties such as Name, Email, and Salary, but different employee types have their own specific behaviors.",
    "question": "How can Object-Oriented Programming concepts such as Inheritance, Encapsulation, Polymorphism, and Abstraction be used to design this application? Explain with suitable examples.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 2,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Salesforce Orgs: Editions, Licenses and Environments",
    "scenario": "ABC Technologies is planning to implement Salesforce for its sales and customer support teams. The company also wants to develop new features, test them without affecting live data, and deploy them to production.",
    "question": "Which Salesforce editions, user licenses, and environments should the company consider? Explain the differences between Production, Sandbox, and Developer Edition.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 3,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Multi-Tenant Architecture and Org Setup",
    "scenario": "A company is using Salesforce along with thousands of other organizations. The company wants to understand how Salesforce maintains customer data separately while sharing the same infrastructure.",
    "question": "Explain how Salesforce Multi-Tenant Architecture works. How does Salesforce ensure data isolation between different organizations, and what are the important considerations while setting up a new Salesforce Org?",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 4,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Salesforce Certifications and Q&A",
    "scenario": "A fresher has completed Salesforce Admin training and wants to build a career in Salesforce. The fresher is confused about which certification to attempt first and how certifications help in career development.",
    "question": "Which Salesforce certification would you recommend as the starting point? Explain the certification preparation approach and how Salesforce certifications can help in professional development.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 5,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Standard and Custom Objects, Fields and Data Types",
    "scenario": "ABC College wants to maintain information about Students and Courses in Salesforce. Salesforce already provides standard objects such as Account and Contact, but the college needs additional objects and fields to store student-specific information.",
    "question": "How would you design this requirement using standard objects, custom objects, and custom fields? Which field data types would you choose for Student Name, Date of Birth, Email, Phone Number, Admission Fee, and Enrollment Status?",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 6,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Object Relationships",
    "scenario": "A college wants to maintain information about Students and Courses. One student can enroll in multiple courses, and one course can have multiple students. Additionally, every employee in the company should be associated with their reporting manager.",
    "question": "How would you establish the relationships between Students and Courses? Which relationship would you use for the employee and reporting manager requirement? Explain the appropriate use of Lookup, Master-Detail, Many-to-Many, Self, and Hierarchical relationships.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 7,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Roll-Up Summary, Formula Fields and Schema Builder",
    "scenario": "A company maintains Accounts and related Opportunities. Management wants to display the total Opportunity Amount, number of Opportunities, and a calculated annual discount directly on the Account record. The administrator also wants to understand the object relationships visually.",
    "question": "How would you implement these requirements using Roll-Up Summary Fields and Formula Fields? How can Schema Builder help you understand and maintain the object relationships?",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 8,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Profiles, Permission Sets, Permission Set Groups and Users",
    "scenario": "A company has 50 Salesforce users. Sales representatives should have access to create and edit Accounts and Opportunities, while managers should have additional permissions to delete records. A few users also need temporary access to export reports.",
    "question": "How would you configure Users, Profiles, Permission Sets, and Permission Set Groups to meet these requirements? Explain how you would provide temporary additional permissions without creating unnecessary profiles.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 9,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Public Groups, Queues and Roles",
    "scenario": "A company has separate Sales, Support, and Marketing teams. Incoming support cases should be assigned to the Support team, while sales managers should have visibility into records owned by their reporting team members.",
    "question": "How would you use Public Groups, Queues, Roles, and Roles and Subordinates to manage record ownership, assignment, and access? Explain the difference between these features.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 10,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "FLS, OWD, Sharing Rules, Manual Sharing and Role Hierarchy",
    "scenario": "A company stores employee salary information in a custom Employee object. All employees can view basic employee details, but only HR users should view salary information. Sales managers should access records owned by their teams, while specific records must also be shared with selected users.",
    "question": "How would you configure Field-Level Security, Organization-Wide Defaults, Role Hierarchy, Sharing Rules, and Manual Sharing to meet these security requirements?",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 11,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Salesforce Tabs",
    "scenario": "A company has created a custom Project object and a Visualforce page for project management. Users should access the Project records, an external company website, and the Visualforce page directly from the Salesforce navigation menu.",
    "question": "Which types of tabs would you create to meet these requirements? Explain the differences between Standard Object Tabs, Custom Object Tabs, Web Tabs, Lightning Tabs, and Visualforce Tabs.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 12,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Page Layouts, Lightning Pages and Assignments",
    "scenario": "A company wants Sales users to see Opportunity-related fields and sections in a particular arrangement, while Support users should see a different record page experience. The company also wants to display custom Lightning components on selected record pages.",
    "question": "How would you use Page Layouts and Lightning Record Pages to achieve this requirement? Explain how Page Layout Assignment and Lightning Page Activation work.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 13,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Search Layouts and List Views",
    "scenario": "Sales representatives work with thousands of Account records. They want to quickly find Accounts based on their Industry and Rating and create a list displaying only Accounts assigned to their team.",
    "question": "How would you configure Search Layouts and List Views to improve record searching and filtering? Explain the difference between these two features.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 14,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Field Dependencies",
    "scenario": "A company maintains customer information with Country and State picklist fields. When a user selects India as the Country, only Indian states should appear in the State field. When the user selects the USA, only US states should appear.",
    "question": "How would you implement this requirement using Field Dependencies? Explain the roles of Controlling Fields and Dependent Fields.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 15,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Record Types",
    "scenario": "A company uses the Case object for both Technical Support and Billing Support. Technical Support cases require fields related to Product and Issue Type, whereas Billing Support cases require fields related to Invoice Number and Payment Status. Both teams also need different picklist values.",
    "question": "How would you use Record Types, Page Layouts, and picklist value assignments to support both departments using the same Case object?",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 16,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Validation Rules",
    "scenario": "A company wants to prevent users from creating an Opportunity with a Close Date earlier than today. Additionally, an Opportunity should not be marked as Closed Won unless the Amount field contains a value greater than zero.",
    "question": "How would you implement these business requirements using Validation Rules? Explain the conditions under which the validation rules should display error messages.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 17,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Profiles, Permission Sets and Field-Level Security",
    "scenario": "A Salesforce administrator has given a user Read and Edit permissions on the Account object through a Permission Set. However, the user is unable to edit the Account Phone field.",
    "question": "What could be the reason for this issue? Explain how Object-Level Permissions and Field-Level Security work together to control access to Salesforce records and fields.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 18,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Object Relationships and Roll-Up Summary Fields",
    "scenario": "A company maintains Parent Account and Child Account records using a relationship between Accounts. Management wants to calculate the total revenue of all child Accounts and display it on the Parent Account.",
    "question": "Can a Roll-Up Summary Field be directly created for this requirement using the standard Account relationship? Explain why or why not and suggest an alternative approach.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 19,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Page Layouts and Record Types",
    "scenario": "A company has three types of customers: Individual Customers, Business Customers, and Government Customers. Each customer type requires different fields, picklist values, and page layouts. However, all customers should be maintained using the same Account object.",
    "question": "How would you implement this requirement using Record Types, Page Layouts, and Profiles? Explain how users receive the appropriate record type and page layout.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 20,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Validation Rules and Data Quality",
    "scenario": "A company wants to maintain accurate Contact information. Users should not be allowed to save a Contact without an Email address, and the Email must contain a valid email format. Additionally, the Birthdate should not be a future date.",
    "question": "How would you create Validation Rules to enforce these business requirements? Explain the formulas and error messages you would use.",
    "placeholder": "Enter your answer..."
  },
  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════
  {
    "id": 21,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "OOP Concepts Refresher",
    "scenario": "A developer creates a parent class Employee and a child class Manager. The Manager class reuses the properties and methods of the Employee class.",
    "question": "Which Object-Oriented Programming concept is demonstrated in this scenario?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    "answer": 1
  },
  {
    "id": 22,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Salesforce Orgs: Editions, Licenses and Environments",
    "scenario": "A company wants developers to build and test new features independently without affecting its production environment.",
    "question": "Which Salesforce environment is commonly used for development and testing within an existing production organization?",
    "options": [
      "Production Org",
      "Sandbox",
      "Trailhead Playground",
      "AppExchange"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Multi-Tenant Architecture",
    "scenario": "Multiple companies use Salesforce on shared infrastructure, but each company maintains its own separate data and configuration.",
    "question": "Which Salesforce architecture supports this model?",
    "options": [
      "Single-Tenant Architecture",
      "Client-Server Architecture",
      "Multi-Tenant Architecture",
      "Peer-to-Peer Architecture"
    ],
    "answer": 2
  },
  {
    "id": 24,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Salesforce Certifications",
    "scenario": "A beginner wants to validate their knowledge of Salesforce administration, including user management, security, automation, and data management.",
    "question": "Which Salesforce certification is the most suitable starting point?",
    "options": [
      "Salesforce Certified Platform Developer II",
      "Salesforce Certified Administrator",
      "Salesforce Certified Technical Architect",
      "Salesforce Certified JavaScript Developer I"
    ],
    "answer": 1
  },
  {
    "id": 25,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Standard and Custom Objects",
    "scenario": "A company wants to store information about its customers and also maintain additional information about college admissions using a newly created object.",
    "question": "Which option correctly identifies the two types of objects?",
    "options": [
      "Account is a Custom Object and Admission is a Standard Object",
      "Account and Admission are both Standard Objects",
      "Account is a Standard Object and Admission can be a Custom Object",
      "Account and Admission are both Custom Objects"
    ],
    "answer": 2
  },
  {
    "id": 26,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Object Relationships",
    "scenario": "A company wants to maintain Students and Courses. One student can enroll in multiple courses, and each course can have multiple students.",
    "question": "Which relationship design should be used to implement this Many-to-Many relationship?",
    "options": [
      "One Lookup Relationship",
      "One Master-Detail Relationship",
      "A Junction Object with two Master-Detail Relationships",
      "A Hierarchical Relationship"
    ],
    "answer": 2
  },
  {
    "id": 27,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Roll-Up Summary Fields",
    "scenario": "An Account has multiple related Opportunities. The administrator wants to calculate the total Amount of all related Opportunities and display the result on the Account.",
    "question": "Which field type should be used when the relationship supports roll-up summaries?",
    "options": [
      "Formula Field",
      "Roll-Up Summary Field",
      "Text Field",
      "Lookup Field"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Formula Fields",
    "scenario": "A company wants to automatically calculate the total price by multiplying Quantity and Unit Price. Users should not manually enter the calculated value.",
    "question": "Which Salesforce field type is most appropriate?",
    "options": [
      "Text Field",
      "Picklist Field",
      "Formula Field",
      "Auto Number Field"
    ],
    "answer": 2
  },
  {
    "id": 29,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Profiles and Permission Sets",
    "scenario": "An administrator wants to provide additional permissions to a particular user without changing the user's existing Profile.",
    "question": "Which Salesforce feature should the administrator use?",
    "options": [
      "Role",
      "Permission Set",
      "Public Group",
      "Queue"
    ],
    "answer": 1
  },
  {
    "id": 30,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Public Groups and Queues",
    "scenario": "A company wants all incoming support Cases to be assigned to a group of support agents. Any available agent should be able to take ownership of a Case.",
    "question": "Which Salesforce feature is designed for this requirement?",
    "options": [
      "Role Hierarchy",
      "Public Group",
      "Queue",
      "Permission Set Group"
    ],
    "answer": 2
  },
  {
    "id": 31,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "FLS and OWD",
    "scenario": "A company wants all users to have access to view Account records, but only administrators should be able to edit them through record-level access settings.",
    "question": "Which Organization-Wide Default setting would be appropriate?",
    "options": [
      "Private",
      "Public Read Only",
      "Public Read/Write",
      "Controlled by Parent"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Role Hierarchy and Sharing Rules",
    "scenario": "A sales manager should automatically gain access to records owned by users below them in the Salesforce role hierarchy.",
    "question": "Which Salesforce feature provides this access mechanism by default for standard objects?",
    "options": [
      "Field-Level Security",
      "Role Hierarchy",
      "Validation Rules",
      "Search Layouts"
    ],
    "answer": 1
  },
  {
    "id": 33,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Salesforce Tabs",
    "scenario": "An administrator wants users to access an external company website directly from a Salesforce navigation tab.",
    "question": "Which type of tab should be created?",
    "options": [
      "Custom Object Tab",
      "Standard Object Tab",
      "Web Tab",
      "Visualforce Tab"
    ],
    "answer": 2
  },
  {
    "id": 34,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Page Layouts",
    "scenario": "An administrator wants to control the arrangement of fields, buttons, related lists, and sections on an Account record page.",
    "question": "Which Salesforce feature should be configured?",
    "options": [
      "Page Layout",
      "Search Layout",
      "List View",
      "Role Hierarchy"
    ],
    "answer": 0
  },
  {
    "id": 35,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Search Layouts and List Views",
    "scenario": "A sales representative wants to display only Accounts belonging to the Banking Industry with a Rating of Hot.",
    "question": "Which Salesforce feature allows the user to filter records based on these conditions and save the filtered results?",
    "options": [
      "Page Layout",
      "List View",
      "Lightning Record Page",
      "Schema Builder"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Field Dependencies",
    "scenario": "A company has two picklist fields: Country and State. The available State values should change depending on the selected Country.",
    "question": "In this scenario, which field acts as the Controlling Field?",
    "options": [
      "State",
      "Country",
      "Both Country and State",
      "Neither Country nor State"
    ],
    "answer": 1
  },
  {
    "id": 37,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Record Types",
    "scenario": "A company uses the Case object for Technical Support and Billing Support. Each department requires different picklist values and page layouts.",
    "question": "Which Salesforce feature allows administrators to provide different business processes, picklist values, and page layouts for different user groups?",
    "options": [
      "Validation Rules",
      "Record Types",
      "Formula Fields",
      "Sharing Rules"
    ],
    "answer": 1
  },
  {
    "id": 38,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Validation Rules",
    "scenario": "A company wants to prevent users from saving an Opportunity when the Amount is less than or equal to zero.",
    "question": "Which formula would correctly enforce this requirement using a Validation Rule?",
    "options": [
      "Amount > 0",
      "Amount <= 0",
      "ISBLANK(Amount)",
      "Amount = 100"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Hierarchical Relationships",
    "scenario": "A company wants to establish a relationship between two User records to identify an employee's manager.",
    "question": "Which relationship type is available specifically on the User object for this purpose?",
    "options": [
      "Master-Detail Relationship",
      "Lookup Relationship",
      "Hierarchical Relationship",
      "Many-to-Many Relationship"
    ],
    "answer": 2
  },
  {
    "id": 40,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Sharing Rules",
    "scenario": "A company has set the Organization-Wide Default for a custom object to Private. All users in the Marketing role should receive Read access to records owned by users in the Sales role.",
    "question": "Which Salesforce feature should the administrator configure to provide this additional record access?",
    "options": [
      "Validation Rules",
      "Sharing Rules",
      "Field Dependencies",
      "Page Layout Assignment"
    ],
    "answer": 1
  }
];
