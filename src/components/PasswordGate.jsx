import { useEffect, useState } from "react";

const PasswordGate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const access = localStorage.getItem("site_access");
    if (access === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = () => {
    const correctPassword = import.meta.env.VITE_SITE_PASSWORD;
    if (input === correctPassword) {
      localStorage.setItem("site_access", "true");
      setIsAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-xs">
          <h2 className="text-xl font-semibold text-center">Enter Password</h2>
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded-md focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default PasswordGate;
