"use client";

import { useState } from "react";

export default function Results() {

  const [usn, setUsn] = useState("");
  const [student, setStudent] = useState(null);

  const fetchResults = async () => {

    const response = await fetch(
      `https://eduverse-backend-c6ic.onrender.com/results/${usn}`
    );

    const data = await response.json();

    setStudent(data);
  };

  const downloadPDF = () => {
    window.print();
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* HEADER */}

      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg mb-10">

        <h1 className="text-5xl font-bold">
          EduVerse Results Portal
        </h1>

        <p className="mt-3 text-lg">
          Check Semester Examination Results
        </p>

      </div>

      {/* SEARCH */}

      <div className="bg-white p-6 rounded-lg shadow-lg mb-10 flex gap-4">

        <input
          type="text"
          placeholder="Enter USN"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchResults();
            }
          }}
          className="border p-4 rounded w-80"
        />

        <button
          onClick={fetchResults}
          className="bg-blue-900 text-white px-6 py-4 rounded"
        >
          Search Results
        </button>

      </div>

      {/* RESULTS */}

      {student && (

        <>

          {/* DOWNLOAD BUTTON */}

          <div className="mb-6">

            <button
              onClick={downloadPDF}
              className="bg-green-700 text-white px-6 py-3 rounded"
            >
              Download Result PDF
            </button>

          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            {/* STUDENT INFO */}

            <div className="bg-gray-200 p-5 border-b">

              <h2 className="text-3xl font-bold text-blue-900">
                Student Details
              </h2>

            </div>

            <div className="p-6 grid grid-cols-2 gap-4 text-lg">

              <p>
                <strong>Name:</strong> {student.studentName}
              </p>

              <p>
                <strong>USN:</strong> {student.usn}
              </p>

              <p>
                <strong>Branch:</strong> {student.branch}
              </p>

              <p>
                <strong>Semester:</strong> {student.semester}
              </p>

              <p>
                <strong>SGPA:</strong> {student.sgpa}
              </p>

              <p>
                <strong>CGPA:</strong> {student.cgpa}
              </p>

            </div>

            {/* TABLE */}

            <div className="p-6">

              <table className="w-full border">

                <thead>

                  <tr className="bg-blue-900 text-white">

                    <th className="p-3 border">
                      Subject
                    </th>

                    <th className="p-3 border">
                      Internal
                    </th>

                    <th className="p-3 border">
                      External
                    </th>

                    <th className="p-3 border">
                      Total
                    </th>

                    <th className="p-3 border">
                      Result
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {student.results.map((item, index) => (

                    <tr
                      key={index}
                      className="text-center"
                    >

                      <td className="border p-3">
                        {item.subject}
                      </td>

                      <td className="border p-3">
                        {item.internal}
                      </td>

                      <td className="border p-3">
                        {item.external}
                      </td>

                      <td className="border p-3">
                        {item.total}
                      </td>

                      <td className="border p-3 text-green-700 font-bold">
                        {item.result}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </>

      )}

    </div>

  );
}