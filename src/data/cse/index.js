const cse = {
  label: "Computer Science",
  eyebrow: "BTech quiz app",
  title: "CS Fundamentals",
  description:
    "A branch quiz with subject-wise practice for computer science students.",
  subjects: {
    dsa: {
      label: "DSA",
      questions: [
        {
          id: 1,
          prompt: "Which data structure follows the LIFO principle?",
          options: ["Queue", "Stack", "Tree", "Graph"],
          answerIndex: 1,
          explanation:
            "A stack removes the last inserted item first, which is why it follows LIFO.",
        },
        {
          id: 2,
          prompt:
            "What is the time complexity of binary search on a sorted array?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          answerIndex: 1,
          explanation:
            "Binary search halves the search space on each step, giving logarithmic time complexity.",
        },
        {
          id: 3,
          prompt: "Which traversal visits nodes in root-left-right order?",
          options: ["Inorder", "Preorder", "Postorder", "Level order"],
          answerIndex: 1,
          explanation:
            "Preorder traversal visits the root before its subtrees.",
        },
      ],
    },
    os: {
      label: "Operating Systems",
      questions: [
        {
          id: 1,
          prompt: "Which OS component manages process scheduling?",
          options: ["Loader", "Scheduler", "Compiler", "Linker"],
          answerIndex: 1,
          explanation: "The scheduler allocates CPU time among processes.",
        },
        {
          id: 2,
          prompt: "What does virtual memory mainly help with?",
          options: [
            "Printing files",
            "Memory abstraction",
            "Packet routing",
            "Code compilation",
          ],
          answerIndex: 1,
          explanation:
            "Virtual memory lets the OS present a larger logical memory space to applications.",
        },
        {
          id: 3,
          prompt: "Which condition is required for deadlock?",
          options: [
            "Concurrency",
            "Mutual exclusion",
            "Pagination",
            "Multiplexing",
          ],
          answerIndex: 1,
          explanation:
            "Mutual exclusion is one of the essential deadlock conditions.",
        },
      ],
    },
    dbms: {
      label: "DBMS",
      questions: [
        {
          id: 1,
          prompt: "Which SQL statement is used to fetch data?",
          options: ["INSERT", "DELETE", "SELECT", "ALTER"],
          answerIndex: 2,
          explanation: "SELECT retrieves records from a database table.",
        },
        {
          id: 2,
          prompt: "Which normal form removes transitive dependency?",
          options: ["1NF", "2NF", "3NF", "4NF"],
          answerIndex: 2,
          explanation:
            "Third normal form removes transitive dependency between non-key attributes.",
        },
        {
          id: 3,
          prompt: "Which key uniquely identifies a row?",
          options: [
            "Foreign key",
            "Primary key",
            "Alternate key",
            "Super key",
          ],
          answerIndex: 1,
          explanation:
            "A primary key uniquely identifies each tuple in a relation.",
        },
      ],
    },
    cn: {
      label: "Computer Networks",
      questions: [
        {
          id: 1,
          prompt: "Which protocol is connection-oriented?",
          options: ["TCP", "UDP", "ICMP", "ARP"],
          answerIndex: 0,
          explanation: "TCP establishes a connection before transferring data.",
        },
        {
          id: 2,
          prompt: "Which device forwards data packets across networks?",
          options: ["Hub", "Switch", "Router", "Repeater"],
          answerIndex: 2,
          explanation: "Routers connect different networks and route packets.",
        },
        {
          id: 3,
          prompt: "What does DNS do?",
          options: [
            "Compress files",
            "Resolve domain names",
            "Assign memory",
            "Schedule tasks",
          ],
          answerIndex: 1,
          explanation: "DNS converts domain names into IP addresses.",
        },
      ],
    },
    oop: {
      label: "OOP",
      questions: [
        {
          id: 1,
          prompt: "Which principle bundles data and methods together?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Iteration",
          ],
          answerIndex: 0,
          explanation:
            "Encapsulation combines data and methods into a single unit.",
        },
        {
          id: 2,
          prompt: "Which principle allows code reuse from a parent class?",
          options: [
            "Inheritance",
            "Abstraction",
            "Encapsulation",
            "Polymorphism",
          ],
          answerIndex: 0,
          explanation:
            "Inheritance enables reuse and extension of existing class behavior.",
        },
        {
          id: 3,
          prompt: "Which principle lets the same function behave differently?",
          options: ["Polymorphism", "Compilation", "Scoping", "Linking"],
          answerIndex: 0,
          explanation:
            "Polymorphism gives multiple forms to the same operation.",
        },
      ],
    },
  },
};

export default cse;