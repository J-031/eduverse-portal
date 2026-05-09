export default function Login() {

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          EduVerse Login
        </h1>

        <input
          type="text"
          placeholder="USN / Email"
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-6"
        />

        <button className="bg-blue-900 text-white w-full py-3 rounded">
          Login
        </button>

      </div>

    </div>

  );
}