import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value }
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {["name", "username", "email", "phone", "website"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={(user as any)[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <h3 className="font-semibold text-gray-800 mb-2">Company Info</h3>
          {["name", "catchPhrase", "bs"].map((field) => (
            <div className="mb-4" key={`company.${field}`}>
              <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
              <input
                type="text"
                name={`company.${field}`}
                value={user.company[field as keyof typeof user.company]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
