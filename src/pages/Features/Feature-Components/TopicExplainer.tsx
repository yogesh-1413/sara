import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";


interface GeminiProps {
  topic: string;
  module: string;
  subject: string;
}

const TopicExplainer: React.FC<GeminiProps> = ({ topic, module, subject }) => {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState<'7to10_lines' | 'short'>('7to10_lines');

  useEffect(() => {
    if (!topic || !module || !subject) return;
    fetchFromGemini();
  }, [topic, module, subject, contentSize]);

  const fetchFromGemini = async () => {
    setLoading(true);
    setOutput(null);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const prompt = `Explain the following topic: "${topic}" in module "${module}" in the subject "${subject}" in ${contentSize} form.`; // 👈 dynamically insert contentSize

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
      };

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Sara AI.';
      setOutput(generatedText);
    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch explanation from Sara AI.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="max-w-4xl mx-auto p-1 h-full">

      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setContentSize('7to10_lines')}
          disabled={loading} // Disable  loading
          className={`px-4 py-2 rounded-md font-semibold transition ${contentSize === '7to10_lines' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // disabled style
        >
          Summary
        </button>


        <button
          onClick={() => setContentSize('short')}
          disabled={loading} // when loading
          className={`px-4 py-2 rounded-md font-semibold transition ${contentSize === 'short' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Button  style
        >
          Explanation
        </button>
        {/* <div className='mx-10'>
            <button
              onClick={() => {
                const encodedTopic = encodeURIComponent(topic); // Ensure spaces & special chars are handled
                window.open(`/VidSelect?topic=${encodedTopic}`, '_blank');
              }}
            >
              Related Videos
            </button>

          </div> */}
      </div>

      {loading && <p className="text-blue-500 text-xl">Loading from SARA AI...🤖</p>}
      {error && <p className="text-red-500">{error}</p>}
      {output && (
        <div className="prose dark:prose-invert min-w-100 text-gray-600 dark:text-gray-300">
          <div className="max-h-[100vh] overflow-y-auto p-4 bg-white dark:bg-[#2c2c2c] rounded-md shadow-inner">
            <ReactMarkdown>
              {output}
            </ReactMarkdown>
          </div>
        </div>
      )}

    </div>
  );
};

export default TopicExplainer;
