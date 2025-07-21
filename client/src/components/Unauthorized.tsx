const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-extrabold mb-4">Access Denied</h1>
        <p className="text-lg mb-6 text-gray-300">
          You do not have the necessary permissions to access this page.
        </p>
        <a
          href="/enter-pin"
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
        >
          Return to Login
        </a>
      </div>
    </div>
  );
};

export default Unauthorized;
