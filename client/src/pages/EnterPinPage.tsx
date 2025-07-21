import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EnterPinPage = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredPin = pin.join('');

    try {
      const res = await fetch('http://localhost:3000/admin/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: enteredPin }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        localStorage.setItem('authenticated', 'true');
        toast.success('Login successful!', { autoClose: 3000 });
        setTimeout(() => navigate('/dashboard'), 100); // Keep small delay
      } else {
        toast.error('Invalid PIN', { autoClose: 3000 });
      }
    } catch (err) {
      toast.error('Error checking PIN', { autoClose: 3000 });
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-black flex flex-col items-center"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-black mb-6">Enter PIN</h1>
        <div className="flex gap-3 sm:gap-4 mb-6">
          {pin.map((digit, i) => (
            <input
              key={i}
              id={`pin-${i}`}
              type="password"
              inputMode="numeric"
              maxLength={1}
              className="w-10 sm:w-12 h-12 text-center text-black border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-800"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnterPinPage;
