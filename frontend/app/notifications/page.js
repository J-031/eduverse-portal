"use client";

export default function Notifications() {

  const notifications = [

    {
      title: "UG/PG Examination Timetable Released",
      date: "09 May 2026"
    },

    {
      title: "B.E 6th Semester Results Announced",
      date: "08 May 2026"
    },

    {
      title: "Revaluation & Photocopy Applications Open",
      date: "07 May 2026"
    },

    {
      title: "Internship Circular for Final Year Students",
      date: "06 May 2026"
    },

    {
      title: "Scholarship Renewal Notice 2026",
      date: "05 May 2026"
    },

    {
      title: "Academic Calendar Updated for Even Semester",
      date: "04 May 2026"
    }

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* HEADER */}

      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg mb-10">

        <h1 className="text-5xl font-bold">
          EduVerse Notifications
        </h1>

        <p className="mt-3 text-lg">
          Latest Circulars & Academic Announcements
        </p>

      </div>

      {/* NOTIFICATIONS */}

      <div className="space-y-6">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-900"
          >

            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              📢 {item.title}
            </h2>

            <p className="text-gray-600">
              Published on: {item.date}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}