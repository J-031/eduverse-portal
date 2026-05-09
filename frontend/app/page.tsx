export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          EduVerse
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="/">Home</a>
          <a href="/results">Results</a>
          <a href="/notifications">Notifications</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

      </nav>

      <section className="text-center py-24 bg-white">

        <h2 className="text-5xl font-bold text-blue-900 mb-6">
          Welcome to EduVerse
        </h2>

        <p className="text-xl text-gray-700 mb-8">
          Smart Academic Portal for Students and Universities
        </p>

        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg">
          Explore Portal
        </button>

      </section>

      <section className="p-10">

        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Latest Notifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Examination Timetable Released
            </h3>

            <p className="text-gray-600">
              Semester examination timetable has been announced.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Results Published
            </h3>

            <p className="text-gray-600">
              6th semester results are now available online.
            </p>
          </div>

        </div>

      </section>

      <footer className="bg-blue-900 text-white text-center p-4 mt-10">

        <p>
          © 2026 EduVerse. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}