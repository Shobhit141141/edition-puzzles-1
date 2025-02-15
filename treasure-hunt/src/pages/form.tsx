import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import seaImg from "../assets/sea.jpg";

const Form = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validatePassword = (value: string): boolean => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError("Password must be alphanumeric without special characters");
      return;
    }
    setError(null);
    // Redirect to /treasure page upon successful form submission
    navigate("/treasure");
    // Reset the form
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${seaImg})` }}>
      <form
        onSubmit={handleSubmit}
        className="max-sm:mr-2 max-sm:ml-2 w-full max-w-md p-8 max-sm:pr-4 max-sm:pl-4 bg-blue-100 border-2 border-white rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-blue-900 block mb-2 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-blue-900 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="hover:cursor-pointer w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
