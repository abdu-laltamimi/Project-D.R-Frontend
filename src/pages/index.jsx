"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FiUploadCloud, FiPrinter, FiShare2 } from "react-icons/fi"
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const MMULogo = () => (
  <Image src="/mmu2.png" alt="MMU Logo" width={100} height={100} />
)

function generateRecommendations(prediction) {
  if (prediction.includes("No DR")) {
    return [
      "Schedule a follow-up examination in 12 months.",
      "Educate the patient on maintaining good blood sugar control and a healthy lifestyle.",
      "Encourage regular eye exams, even in the absence of symptoms.",
      "Advise on the importance of controlling blood pressure and cholesterol levels.",
      "Recommend a balanced diet rich in vitamins A, C, and E to support eye health.",
    ]
  } else {
    return [
      "Refer the patient to an ophthalmologist for a comprehensive eye examination.",
      "Consider additional tests to assess the extent of retinopathy and potential treatment options.",
      "Advise on the importance of strict glycemic control to slow disease progression.",
      "Discuss potential need for more frequent monitoring of retinal health.",
      "Educate on the signs and symptoms of worsening retinopathy to report immediately.",
    ]
  }
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [apiUrl, setApiUrl] = useState("")
  const [isUrlSubmitted, setIsUrlSubmitted] = useState(false)

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    if (!apiUrl.trim()) {
      setError("Please enter a valid API URL")
      return
    }
    setIsUrlSubmitted(true)
    setError(null)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.includes("image/")) {
      setError("Please upload an image file")
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setSelectedImage(reader.result)
      analyzeImage(file)
    }
    reader.onerror = () => {
      setError("Error reading file")
    }
    reader.readAsDataURL(file)
  }

  const analyzeImage = async (file) => {
    setAnalyzing(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("image", file)

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("API response:", data)
      setResult({
        prediction: data.prediction,
        confidence: data.confidence,
        recommendations: generateRecommendations(data.prediction),
      })
    } catch (err) {
      console.error("Error analyzing image:", err)
      setError(`Failed to analyze image: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setAnalyzing(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          <div className="text-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              <MMULogo />
              <MdOutlineHealthAndSafety className="h-16 w-16 text-blue-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800">Project D.R</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload a retinal image for automated Diabetic Retinopathy Detection. Our system provides instant analysis
              with high accuracy.
            </p>
          </div>
        </motion.div>
        {!isUrlSubmitted && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200"
          >
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Connect to API</h3>
              <div className="space-y-2">
                <input
                  type="url"
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  placeholder="Enter your API URL (e.g., https://your-ngrok-url.ngrok-free.app/predict)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Connect
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
        {isUrlSubmitted && (
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Upload Image</h3>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center"
                >
                  <label className="cursor-pointer w-full">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition-colors">
                      <div className="space-y-4 text-center">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <FiUploadCloud className="mx-auto h-12 w-12 text-blue-500" />
                        </motion.div>
                        <div>
                          <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept="image/png, image/jpeg"
                            onChange={handleImageUpload}
                          />
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("file-upload")?.click()}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Select Image
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-400">Supported formats: JPEG, PNG</p>
                      </div>
                    </div>
                  </label>
                </motion.div>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center mt-2"
                  >
                    {error}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <AnimatePresence>
              {selectedImage && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Analysis Results</h3>
                    <motion.div 
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="aspect-square relative rounded-xl overflow-hidden border border-gray-200"
                    >
                      <Image
                        src={selectedImage}
                        alt="Retinal scan analysis"
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority
                        className="object-contain"
                      />
                    </motion.div>

                    {analyzing ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <p className="text-center font-medium text-gray-800">Analyzing image...</p>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="flex justify-center"
                        >
                          <AiOutlineLoading3Quarters className="w-8 h-8 text-blue-500" />
                        </motion.div>
                      </motion.div>
                    ) : result ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-gray-200/50 rounded-xl space-y-2 border border-gray-200"
                        >
                          <h4 className="font-semibold text-gray-800">Diagnosis</h4>
                          <p className="text-2xl font-bold text-blue-400">{result.prediction}</p>
                          <p className="text-sm text-gray-600">Confidence: {result.confidence}</p>
                        </motion.div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800">Recommendations</h4>
                          <ul className="space-y-2">
                            {result.recommendations.map((rec, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-sm text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-blue-500">•</span>
                                {rec}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.print()}
                            className="w-full px-4 py-3 border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-200/50 flex items-center justify-center gap-2"
                          >
                            <FiPrinter className="w-5 h-5" />
                            Print Results
                          </motion.button>
                        </div>
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600"
      >
        <p>&copy; {new Date().getFullYear()} Manchester Metropolitan University. All rights reserved.</p>
        <p className="mt-1">Developed by the Faculty of Health and Education</p>
      </motion.footer>
    </motion.div>
  )
}
