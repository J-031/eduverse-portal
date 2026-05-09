export default function Signup() {

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-lg shadow-lg w-[450px]">

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          EduVerse Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="text"
          placeholder="USN"
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-6"
        />

        <button className="bg-blue-900 text-white w-full py-3 rounded mb-4">
          Create Account
        </button>

      </div>

    </div>

  );
}