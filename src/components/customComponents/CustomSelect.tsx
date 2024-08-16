import React, { useState } from "react";
import { Input } from "../input";

const MultiSelect: React.FC = () => {
  const [services, setServices] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddService = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setServices((prevServices) => [...prevServices, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveService = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-md">
      <div className="border p-2 rounded-md shadow-sm flex flex-wrap gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className=" text-white px-3 py-1 rounded-full flex items-center"
          >
            {service}
            <button
            type="button"
              onClick={() => handleRemoveService(index)}
              className="ml-2 text-white hover:text-blue-900"
            >
              &times;
            </button>
          </div>
        ))}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddService}
          placeholder="Escribe un servicio y presiona Enter"
          className="flex-grow p-1 outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default MultiSelect;
