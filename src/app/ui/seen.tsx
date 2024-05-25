import React from 'react';

const SeenComponent = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100/50 rounded-lg   my-6 ">
            <h1 className="text-xl font-bold mb-6 text-gray-800">Seen 1</h1>
           
           <div className="flex ">
            
            <div className="relative flex-1">
                <textarea 
                    className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg text-lg resize-none focus:outline-none focus:border-blue-500" 
                    placeholder="Enter your text here..."
                ></textarea>
                <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Regenerate Video
                </button>
            </div>
            <div className="mb-6 flex-1">
                <img src="your-image-url.jpg" alt="Description" className="w-full h-auto rounded-lg" />
            </div>
        </div></div>
    );
};

export default SeenComponent;
