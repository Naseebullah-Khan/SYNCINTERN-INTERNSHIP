export const menuData = [
  { name: "Home", url: "/index.html" },
  { name: "Dashboard", url: "#dashboard" },
  { name: "Courses", url: "#courses" },
  { name: "Teachers", url: "#teachers" },
  { name: "Students", url: "#students" },
  { name: "Tests", url: "#tests" },
  { name: "Assignments", url: "#assignments" },
];

export const announcements = [
  {
    date: "2023-10-03",
    announcement:
      "The midterms for Introduction to Computer Science and Data Structures and Algorithms will be held on October 10th and 15th, respectively. Please start studying early!",
  },
  {
    date: "2023-10-02",
    announcement:
      "The deadline for the Software Engineering project has been extended to October 30th.",
  },
  {
    date: "2023-10-01",
    announcement:
      "A new lecture hall has been assigned for the Machine Learning course. The new lecture hall is located in Building 1, Room 210.",
  },
];

export const featured_courses = [
  {
    courseCode: "COMP101",
    courseName: "Introduction to Computer Science",
    instructor: "Professor John Doe",
  },
  {
    courseCode: "COMP201",
    courseName: "Data Structures and Algorithms",
    instructor: "Professor Jane Doe",
  },
  {
    courseCode: "COMP301",
    courseName: "Software Engineering",
    instructor: "Professor Peter Parker",
  },
  {
    courseCode: "COMP401",
    courseName: "Machine Learning",
    instructor: "Professor Mary Jane Watson",
  },
];

export const courses = [
  { code: "COMP101", name: "Introduction to Computer Science", creditHours: 3 },
  { code: "COMP102", name: "Data Structures and Algorithms", creditHours: 3 },
  { code: "COMP103", name: "Object-Oriented Programming", creditHours: 3 },
  { code: "COMP201", name: "Software Engineering", creditHours: 0 },
  { code: "COMP202", name: "Machine Learning", creditHours: 3 },
  { code: "COMP301", name: "Computer Architecture", creditHours: 3 },
  { code: "COMP302", name: "Operating Systems", creditHours: 3 },
  { code: "COMP303", name: "Databases", creditHours: 3 },
  { code: "COMP401", name: "Compiler Design", creditHours: 3 },
  { code: "COMP402", name: "Artificial Intelligence", creditHours: 3 },
  { code: "COMP403", name: "Computer Graphics", creditHours: 3 },
];

export const upcomingCourses = [
  {
    code: "COMP101",
    name: "Introduction to Computer Science",
    startDate: "2023-08-21",
    endDate: "2023-12-15",
    instructor: "Professor John Doe",
  },
  {
    code: "COMP201",
    name: "Data Structures and Algorithms",
    startDate: "2023-08-21",
    endDate: "2023-12-15",
    instructor: "Professor Jane Doe",
  },
  {
    code: "COMP301",
    name: "Software Engineering",
    startDate: "2023-08-21",
    endDate: "2023-12-15",
    instructor: "Professor Peter Parker",
  },
  {
    code: "COMP401",
    name: "Machine Learning",
    startDate: "2023-08-21",
    endDate: "2023-12-15",
    instructor: "Professor Mary Jane Watson",
  },
];

export const featured_teachers = [
  {
    teacherName: "Dr. Jane Doe",
    yearsOfExperience: 10,
    education: "PhD in Computer Science from Stanford University",
    awardsAndRecognition:
      "Received the National Science Foundation's CAREER Award",
  },
  {
    teacherName: "Mr. Peter Parker",
    yearsOfExperience: 5,
    education:
      "Master's degree in Computer Science from the University of California, Berkeley",
    awardsAndRecognition:
      "Received the Computer Science Teachers Association's Outstanding Teacher Award",
  },
  {
    teacherName: "Ms. Mary Jane Watson",
    yearsOfExperience: 5,
    education: "Bachelor's degree in Computer Science from MIT",
    awardsAndRecognition: "Received the Google Anita Borg Memorial Scholarship",
  },
];

export const teachers = [
  {
    name: "Dr. Andrew Ng",
    institution: "Stanford University",
    areaOfExpertise: "Machine Learning, Artificial Intelligence",
  },
  {
    name: "Dr. Fei-Fei Li",
    institution: "Stanford University",
    areaOfExpertise: "Computer Vision, Artificial Intelligence",
  },
  {
    name: "Dr. Geoffrey Hinton",
    institution: "University of Toronto",
    areaOfExpertise: "Artificial Intelligence, Machine Learning",
  },
  {
    name: "Dr. Yann LeCun",
    institution: "Facebook AI Research",
    areaOfExpertise: "Artificial Intelligence, Machine Learning",
  },
  {
    name: "Dr. David Patterson",
    institution: "University of California, Berkeley",
    areaOfExpertise: "Computer Architecture, Computer Organization",
  },
  {
    name: "Dr. John Hennessy",
    institution: "Stanford University",
    areaOfExpertise: "Computer Architecture, Computer Organization",
  },
  {
    name: "Dr. Barbara Liskov",
    institution: "Massachusetts Institute of Technology",
    areaOfExpertise: "Programming Languages, Software Engineering",
  },
  {
    name: "Dr. Donald Knuth",
    institution: "Stanford University",
    areaOfExpertise: "Algorithms, Data Structures",
  },
  {
    name: "Dr. Eric Schmidt",
    institution: "Google",
    areaOfExpertise: "Computer Science Education, Technology",
  },
  {
    name: "Dr. Bill Gates",
    institution: "Microsoft",
    areaOfExpertise: "Operating Systems, Programming Languages",
  },
  {
    name: "Dr. Steve Jobs",
    institution: "Apple",
    areaOfExpertise: "Computer Hardware, Software Design",
  },
  {
    name: "Dr. Larry Page",
    institution: "Google",
    areaOfExpertise: "Search Engines, Computer Science Education",
  },
  {
    name: "Dr. Sergey Brin",
    institution: "Google",
    areaOfExpertise: "Search Engines, Computer Science Education",
  },
  {
    name: "Dr. Timnit Gebru",
    institution: "Distributed Ethics in AI",
    areaOfExpertise: "Artificial Intelligence, Machine Learning",
  },
  {
    name: "Dr. Margaret Mitchell",
    institution: "Google AI",
    areaOfExpertise: "Artificial Intelligence, Machine Learning",
  },
  {
    name: "Dr. Alex Graves",
    institution: "DeepMind",
    areaOfExpertise: "Artificial Intelligence, Machine Learning",
  },
];

export const featured_students = [
  {
    studentName: "John Doe",
    year: "Freshman",
    major: "Computer Science",
    achievements:
      "Received the Computer Science Department's Freshman of the Year Award.",
  },
  {
    studentName: "Jane Doe",
    year: "Sophomore",
    major: "Computer Science",
    achievements:
      "Developed a new algorithm for image processing that has been published in a top academic journal.",
  },
  {
    studentName: "Peter Parker",
    year: "Junior",
    major: "Computer Science",
    achievements:
      "Interned at Google AI over the summer and worked on a project to develop new AI models for natural language processing.",
  },
  {
    studentName: "Mary Jane Watson",
    year: "Senior",
    major: "Computer Science",
    achievements:
      "Founded a startup that is developing a new social media platform for engineers and scientists.",
  },
];

export const students = [
  {
    name: "Alice Smith",
    institution: "Stanford University",
    year: "PhD",
    researchInterests: "Machine learning, natural language processing",
  },
  {
    name: "Bob Jones",
    institution: "Massachusetts Institute of Technology",
    year: "",
    researchInterests: "Computer vision, robotics",
  },
  {
    name: "Carol Williams",
    institution: "University of California, Berkeley",
    year: "BS",
    researchInterests: "Software engineering, artificial intelligence",
  },
  {
    name: "David Miller",
    institution: "Carnegie Mellon University",
    year: "BS",
    researchInterests: "Computer architecture, operating systems",
  },
  {
    name: "Emily Brown",
    institution: "University of Washington",
    year: "BS",
    researchInterests: "Databases, data mining",
  },
  {
    name: "Frank Chen",
    institution: "University of Illinois at Urbana-Champaign",
    year: "BS",
    researchInterests: "Computer graphics, human-computer interaction",
  },
  {
    name: "Grace Garcia",
    institution: "Georgia Institute of Technology",
    year: "BS",
    researchInterests: "Computer security, cryptography",
  },
  {
    name: "Henry Johnson",
    institution: "Cornell University",
    year: "BS",
    researchInterests: "Networks, distributed systems",
  },
  {
    name: "Isabella Taylor",
    institution: "University of Michigan",
    year: "BS",
    researchInterests: "Algorithms, computational complexity",
  },
  {
    name: "Jack Williams",
    institution: "University of Texas at Austin",
    year: "BS",
    researchInterests: "Programming languages, software engineering",
  },
  {
    name: "Kim Brown",
    institution: "University of California, Los Angeles",
    year: "BS",
    researchInterests: "Theoretical computer science, quantum computing",
  },
  {
    name: "Leo Chen",
    institution: "University of Southern California",
    year: "BS",
    researchInterests: "Artificial intelligence, machine learning",
  },
  {
    name: "Mary Garcia",
    institution: "University of California, San Diego",
    year: "BS",
    researchInterests: "Computer graphics, human-computer interaction",
  },
  {
    name: "Nicholas Johnson",
    institution: "University of Pennsylvania",
    year: "BS",
    researchInterests: "Computer security, cryptography",
  },
  {
    name: "Olivia Taylor",
    institution: "Columbia University",
    year: "BS",
    researchInterests: "Networks, distributed systems",
  },
];

export const featured_tests = [
  {
    test: "AP Computer Science A",
    description:
      "A college-level intro to computer science, covering programming, data structures, and algorithms.",
    link: `<a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a">Link</a>`,
  },
  {
    test: "AP Computer Science Principles",
    description:
      "A foundational computer science course that teaches you computational thinking, programming, algorithms, data structures, and networking.",
    link: `<a href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles">Link</a>`,
  },
  {
    test: "International Olympiad in Informatics",
    description:
      "An international programming competition for high school students.",
    link: `<a href="https://ioinformatics.org/">Link</a>`,
  },
  {
    test: "Google Code Jam",
    description:
      "	An online programming competition hosted by Google. It's open to all skill levels and is a great way to practice your coding skills.",
    link: `<a href="https://codingcompetitions.withgoogle.com/codejam">Link</a>`,
  },
  {
    test: "HackerRank",
    description:
      "A platform for practicing and competing in programming challenges. It offers a variety of challenges in different programming languages and skill levels.",
    link: `<a href="https://www.hackerrank.com/">Link</a>`,
  },
];

export const tests = [
  {
    testName: "AP Computer Science A Exam",
    description:
      "This exam covers the fundamental concepts of computer science, including programming, algorithms, and data structures.",
    difficulty: "Medium",
    topicsCovered:
      "Introduction to Computer Science, Programming, Algorithms, Data Structures",
  },
  {
    testName: "SAT Subject Test in Computer Science",
    description:
      "This exam covers the fundamental concepts of computer science, including programming, algorithms, and data structures.",
    difficulty: "Medium",
    topicsCovered:
      "Introduction to Computer Science, Programming, Algorithms, Data Structures",
  },
  {
    testName: "Google Code Jam",
    description:
      "This online coding competition is open to all ages and skill levels. It features a variety of programming challenges that cover a wide range of computer science topics.",
    difficulty: "Easy to Hard",
    topicsCovered: "Programming, Algorithms, Data Structures",
  },
  {
    testName: "Facebook Hacker Cup",
    description:
      "This online coding competition is open to all ages and skill levels. It features a variety of programming challenges that cover a wide range of computer science topics.",
    difficulty: "Easy to Hard",
    topicsCovered: "Programming, Algorithms, Data Structures",
  },
  {
    testName: "TopCoder Open",
    description:
      "This online coding competition is open to all ages and skill levels. It features a variety of programming challenges that cover a wide range of computer science topics.",
    difficulty: "Easy to Hard",
    topicsCovered: "Programming, Algorithms, Data Structures",
  },
  {
    testName: "ACM International Collegiate Programming Contest (ICPC)",
    description:
      "This team-based programming competition is open to all undergraduate students. It features a variety of programming challenges that cover a wide range of computer science topics.",
    difficulty: "Hard",
    topicsCovered: "Programming, Algorithms, Data Structures",
  },
  {
    testName: "IEEE International Olympiad in Informatics (IOI)",
    description:
      "This international programming competition is open to high school students. It features a variety of programming challenges that cover a wide range of computer science topics.",
    difficulty: "Hard",
    topicsCovered: "Programming, Algorithms, Data Structures",
  },
  {
    testName: "Introduction to Computer Science Test",
    description:
      "This test covers the fundamental concepts of computer science, including programming, algorithms, and data structures.",
    difficulty: "Easy",
    topicsCovered: "Introduction to Computer Science",
  },
  {
    testName: "Data Structures and Algorithms Test",
    description:
      "This test covers the design and implementation of efficient data structures and algorithms for solving a variety of problems.",
    difficulty: "Medium",
    topicsCovered: "Data Structures and Algorithms",
  },
  {
    testName: "Software Engineering Test",
    description:
      "This test covers the principles of software engineering, including software design, testing, and maintenance.",
    difficulty: "Hard",
    topicsCovered: "Software Engineering",
  },
  {
    testName: "Machine Learning Test",
    description:
      "This test covers the fundamental concepts of machine learning, including supervised learning, unsupervised learning, and reinforcement learning.",
    difficulty: "Hard",
    topicsCovered: "Machine Learning",
  },
  {
    testName: "Computer Architecture Test",
    description:
      "This test covers the design and implementation of computer hardware and software systems.",
    difficulty: "Hard",
    topicsCovered: "Computer Architecture",
  },
  {
    testName: "Operating Systems Test",
    description:
      "This test covers the design and implementation of operating systems.",
    difficulty: "Hard",
    topicsCovered: "Operating Systems",
  },
  {
    testName: "Computer Networks Test",
    description:
      "This test covers the design and implementation of computer networks.",
    difficulty: "Hard",
    topicsCovered: "Computer Networks",
  },
  {
    testName: "Database Systems Test",
    description:
      "This test covers the design and implementation of database systems.",
    difficulty: "Hard",
    topicsCovered: "Database Systems",
  },
];

export const upcomingAssignments = [
  {
    course: "Introduction to Computer Science",
    assignment: "Write a program to calculate the factorial of a number.",
    dueDate: "2023-10-10",
  },
  {
    course: "Data Structures and Algorithms",
    assignment:
      "Implement a linked list in a programming language of your choice.",
    dueDate: "2023-10-15",
  },
  {
    course: "Object-Oriented Programming",
    assignment:
      "Design and implement a class hierarchy to represent the different types of employees in a company.",
    dueDate: "2023-10-20",
  },
  {
    course: "Software Engineering",
    assignment:
      "Write a software requirements specification for a simple web application.",
    dueDate: "2023-10-25",
  },
  {
    course: "Machine Learning",
    assignment:
      "Train a machine learning model to classify images of cats and dogs.",
    dueDate: "2023-10-30",
  },
];

export const recentlyCompletedAssignments = [
  {
    course: "Introduction to Computer Science",
    assignment: "Write a program to calculate the factorial of a number.",
    dueDate: "2023-10-10",
    grade: "A",
  },
  {
    course: "Data Structures and Algorithms",
    assignment:
      "Implement a linked list in a programming language of your choice.",
    dueDate: "2023-10-15",
    grade: "B+",
  },
  {
    course: "Object-Oriented Programming",
    assignment:
      "Design and implement a class hierarchy to represent the different types of employees in a company.",
    dueDate: "2023-10-20",
    grade: "A-",
  },
  {
    course: "Introduction to Computer Science",
    assignment: "Write a program to calculate the factorial of a number.",
    dueDate: "2023-10-10",
    grade: "A",
  },
  {
    course: "Data Structures and Algorithms",
    assignment:
      "Implement a linked list in a programming language of your choice.",
    dueDate: "2023-10-15",
    grade: "B+",
  },
  {
    course: "Object-Oriented Programming",
    assignment:
      "Design and implement a class hierarchy to represent the different types of employees in a company.",
    dueDate: "2023-10-20",
    grade: "A-",
  },
];
