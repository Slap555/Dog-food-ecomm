import React, { useState } from "react";
import { useController } from "react-hook-form";

const ImageUpload = ({ control, name, label, required }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: required ? "Image is required" : false },
  });

  const [preview, setPreview] = useState(
    value ? URL.createObjectURL(value[0]) : null
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(e.target.files);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onChange([file]);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="image-upload">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center relative cursor-pointer border-blue-500 hover:border-blue-300 focus-within:border-blue-300"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="object-cover w-full h-full rounded-lg"
          />
        ) : (
          <span className="text-gray-500">
            Drag and drop, or click to select
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default ImageUpload;
