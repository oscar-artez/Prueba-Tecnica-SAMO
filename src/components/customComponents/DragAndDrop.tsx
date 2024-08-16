import React, { useState, DragEvent } from "react";

interface ImageFile {
  file: File;
  preview: string;
}


export default function ImageUploader () {
  const [images, setImages] = useState<ImageFile[]>([]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(
      (file) => file.type.startsWith("image/") && images.length < 4
    );

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 4));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(
        (file) => file.type.startsWith("image/") && images.length < 4
      );

      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImages((prevImages) => [...prevImages, ...newImages].slice(0, 4));
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 rounded shadow-lg max-w-md">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center"
      >
        <p className="text-gray-600">Drag and drop images here</p>
        <p className="text-gray-600">or</p>
        <label className="text-blue-600 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          Click to upload
        </label>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.preview}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-24 object-cover rounded-md"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              type="button"
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

