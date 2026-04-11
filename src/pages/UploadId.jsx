import React, { useState, useContext } from "react";
import { FaUpload, FaImage, FaCheckCircle } from "react-icons/fa";
import Context from "../context";
import SummaryApi from "../common";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UploadId = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "front") {
      setFrontImage(file);
    } else {
      setBackImage(file);
    }
  };

  // Drag & drop
  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (type === "front") {
      setFrontImage(file);
    } else {
      setBackImage(file);
    }
  };

  const handleUpload = async () => {
    try {
      if (!user?.email) {
        toast.error("User not logged in");
        return;
      }

      if (!frontImage || !backImage) {
        toast.error("Please upload both images");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("email", user.email);

      // ⚠️ IMPORTANT: order matters (front first)
      formData.append("images", frontImage);
      formData.append("images", backImage);

      const response = await fetch(SummaryApi.uploadId.url, {
        method: SummaryApi.uploadId.method,
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("ID uploaded successfully 🎉");

        // optional redirect
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !frontImage || !backImage || loading;

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl text-center text-amber-400 font-bold mb-6">
          Upload Identification
        </h2>

        <p className="text-center text-gray-400 mb-8">
          Upload front and back of your ID for verification
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* FRONT IMAGE */}
          <div
            onDrop={(e) => handleDrop(e, "front")}
            onDragOver={(e) => e.preventDefault()}
            className="relative border-2 border-dashed border-amber-400/30 rounded-xl p-4 h-52 flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-400 transition"
          >
            <p className="text-sm text-gray-400 mb-2">Front ID</p>

            {frontImage ? (
              <img
                src={URL.createObjectURL(frontImage)}
                alt="front-preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <FaUpload className="text-3xl text-amber-400 mb-2" />
                <p className="text-gray-400 text-sm">
                  Drag & drop or click to upload
                </p>
              </>
            )}

            <input
              type="file"
              onChange={(e) => handleFileChange(e, "front")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {/* BACK IMAGE */}
          <div
            onDrop={(e) => handleDrop(e, "back")}
            onDragOver={(e) => e.preventDefault()}
            className="relative border-2 border-dashed border-amber-400/30 rounded-xl p-4 h-52 flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-400 transition"
          >
            <p className="text-sm text-gray-400 mb-2">Back ID</p>

            {backImage ? (
              <img
                src={URL.createObjectURL(backImage)}
                alt="back-preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <FaImage className="text-3xl text-amber-400 mb-2" />
                <p className="text-gray-400 text-sm">
                  Drag & drop or click to upload
                </p>
              </>
            )}

            <input
              type="file"
              onChange={(e) => handleFileChange(e, "back")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={isDisabled}
          className={`mt-8 w-full py-3 rounded-lg font-semibold transition
          ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-400 text-black hover:bg-amber-500 cursor-pointer active:scale-95"
          }`}
        >
          {loading ? "Uploading..." : "Upload ID"}
        </button>

        {/* Status */}
        {frontImage && backImage && !loading && (
          <div className="mt-4 flex items-center justify-center gap-2 text-green-400">
            <FaCheckCircle />
            <span>Ready to upload</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default UploadId;