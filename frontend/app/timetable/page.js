"use client";

import { useEffect, useState } from "react";

export default function Timetable() {

  const [timetable, setTimetable] = useState([]);

  useEffect(() => {

    fetch("https://eduverse-backend-c6ic.onrender.com/timetable")
      .then((res) => res.json())
      .then((data) => setTimetable(data));

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        Examination Timetable
      </h1>

      <table className="w-full bg-white shadow-lg">

        <thead>

          <tr className="bg-blue-900 text-white">

            <th className="p-4">
              Subject
            </th>

            <th className="p-4">
              Date
            </th>

            <th className="p-4">
              Time
            </th>

          </tr>

        </thead>

        <tbody>

          {timetable.map((item, index) => (

            <tr
              key={index}
              className="text-center border-b"
            >

              <td className="p-4">
                {item.subject}
              </td>

              <td className="p-4">
                {item.date}
              </td>

              <td className="p-4">
                {item.time}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}