const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

const students = {

  "1rv23is405": {
    studentName: "Jhanavi S",
    usn: "1RV23IS405",
    semester: "3rd Semester",
    branch: "Information Science and Engineering",
    sgpa: "9.1",
    cgpa: "8.9",
    results: [
      {
        subjectCode: "BCS301",
        subject: "Mathematics",
        internal: 48,
        external: 40,
        total: 88,
        result: "P"
      },
      {
        subjectCode: "BCS302",
        subject: "Data Structures",
        internal: 49,
        external: 42,
        total: 91,
        result: "P"
      },
      {
        subjectCode: "BCS303",
        subject: "DBMS",
        internal: 45,
        external: 39,
        total: 84,
        result: "P"
      },
      {
        subjectCode: "BCS304",
        subject: "Operating Systems",
        internal: 43,
        external: 37,
        total: 80,
        result: "P"
      }
    ]
  },

  "1rv23cs444": {
    studentName: "Rahul Kumar",
    usn: "1RV23CS444",
    semester: "3rd Semester",
    branch: "Computer Science and Engineering",
    sgpa: "8.7",
    cgpa: "8.5",
    results: [
      {
        subjectCode: "BCS301",
        subject: "Mathematics",
        internal: 44,
        external: 39,
        total: 83,
        result: "P"
      },
      {
        subjectCode: "BCS302",
        subject: "Java Programming",
        internal: 46,
        external: 41,
        total: 87,
        result: "P"
      },
      {
        subjectCode: "BCS303",
        subject: "Computer Networks",
        internal: 42,
        external: 36,
        total: 78,
        result: "P"
      },
      {
        subjectCode: "BCS304",
        subject: "Cloud Computing",
        internal: 45,
        external: 40,
        total: 85,
        result: "P"
      }
    ]
  },

  "1rv23ec201": {
    studentName: "Ananya R",
    usn: "1RV23EC201",
    semester: "3rd Semester",
    branch: "Electronics and Communication Engineering",
    sgpa: "8.8",
    cgpa: "8.6",
    results: [
      {
        subjectCode: "BEC301",
        subject: "Digital Electronics",
        internal: 47,
        external: 38,
        total: 85,
        result: "P"
      },
      {
        subjectCode: "BEC302",
        subject: "Signals and Systems",
        internal: 46,
        external: 41,
        total: 87,
        result: "P"
      },
      {
        subjectCode: "BEC303",
        subject: "Microcontrollers",
        internal: 42,
        external: 36,
        total: 78,
        result: "P"
      }
    ]
  }

};

const timetable = [
  {
    subject: "Mathematics",
    date: "10-05-2026",
    time: "10:30 AM"
  },
  {
    subject: "DBMS",
    date: "12-05-2026",
    time: "10:30 AM"
  },
  {
    subject: "Java Programming",
    date: "15-05-2026",
    time: "2:00 PM"
  },
  {
    subject: "Cloud Computing",
    date: "18-05-2026",
    time: "10:30 AM"
  }
];
  const announcements = [
  {
    title: "UG 3rd Semester Results Announced",
    link: "https://results.vtu.ac.in"
  },
  {
    title: "Revaluation Results Published",
    link: "https://vtu.ac.in/en/examination"
  },
  {
    title: "MBA Examination Results Released",
    link: "https://vtu.ac.in/en/examination"
  }
];

const liveNotifications = [
  {
    message: "EduVerse Results Portal Active",
    time: "2 mins ago"
  },
  {
    message: "Exam Timetable Updated",
    time: "10 mins ago"
  },
  {
    message: "Internship Circular Published",
    time: "25 mins ago"
  },
  {
    message: "Student Login Portal Updated",
    time: "1 hour ago"
  }
];

app.get("/", (req, res) => {
  res.send("VTU Backend Running");
});

app.get("/results/:usn", (req, res) => {

  const usn = req.params.usn.toUpperCase();

  // Simple VTU-style USN validation
  const usnPattern = /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/;

  if (!usnPattern.test(usn)) {
    return res.status(404).json({
      message: "Invalid USN Format"
    });
  }

  // Random student names
  const names = [
    "Rahul Kumar",
    "Jhanavi J",
    "Ananya R",
    "Rohit Sharma",
    "Priya Patel",
    "Kishen S",
    "Sneha R",
    "Arjun M",
    "Varun R",
    "Aishwarya N"
  ];

  // Random branches
  const branches = [
    "Computer Science and Engineering",
    "Information Science and Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ];

  // Subjects
  const subjects = [
    {
      code: "BCS301",
      name: "Mathematics"
    },
    {
      code: "BCS302",
      name: "Data Structures"
    },
    {
      code: "BCS303",
      name: "DBMS"
    },
    {
      code: "BCS304",
      name: "Operating Systems"
    },
    {
      code: "BCS305",
      name: "Cloud Computing"
    }
  ];

  // Generate results dynamically
  const generatedResults = subjects.map((sub) => {

    const internal = Math.floor(Math.random() * 20) + 30;
    const external = Math.floor(Math.random() * 25) + 25;
    const total = internal + external;

    return {
      subjectCode: sub.code,
      subject: sub.name,
      internal,
      external,
      total,
      result: total >= 40 ? "P" : "F"
    };
  });

  const studentData = {
    studentName:
      names[Math.floor(Math.random() * names.length)],

    usn: usn,

    semester:
      `${Math.floor(Math.random() * 8) + 1}th Semester`,

    branch:
      branches[Math.floor(Math.random() * branches.length)],

    sgpa:
      (Math.random() * 2 + 7).toFixed(2),

    cgpa:
      (Math.random() * 2 + 7).toFixed(2),

    results: generatedResults
  };

  res.json(studentData);

});
app.get("/announcements", (req, res) => {
  res.json(announcements);
});

app.get("/live-notifications", (req, res) => {
  res.json(liveNotifications);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});