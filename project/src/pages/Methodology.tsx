import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';

const Methodology: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Methodology" 
        subtitle="Our approach to brain tumor detection and classification" 
      />
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our Approach</h2>
        <p className="text-gray-700 mb-6">
          Our brain tumor detection system follows a systematic approach that combines image processing 
          techniques with medical knowledge to provide accurate and reliable results. The process involves 
          multiple stages, from image acquisition to final diagnosis.
        </p>
        
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Image Acquisition and Preprocessing</h3>
            <p className="text-gray-700 mb-3">
              We begin by loading the MRI scan images and applying preprocessing techniques to enhance image quality 
              and prepare it for analysis. This includes:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Loading MRI images using OpenCV</li>
              <li>Converting images to appropriate color spaces</li>
              <li>Applying noise reduction filters if necessary</li>
              <li>Standardizing image dimensions and intensity levels</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Tumor Segmentation</h3>
            <p className="text-gray-700 mb-3">
              The next step involves segmenting the tumor region from the rest of the brain tissue:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Utilizing ground truth masks for training and validation</li>
              <li>Applying binary thresholding to create a binary mask</li>
              <li>Using bitwise operations to isolate tumor regions</li>
              <li>Extracting only the tumor portion from the original MRI</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Feature Extraction and Measurement</h3>
            <p className="text-gray-700 mb-3">
              Once the tumor is segmented, we extract important features and measurements:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Counting tumor pixels using NumPy's sum function</li>
              <li>Converting pixel count to actual size using pixel spacing parameters</li>
              <li>Calculating tumor area in square millimeters</li>
              <li>Finding tumor contours for boundary visualization</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">4. Stage Classification</h3>
            <p className="text-gray-700 mb-3">
              Based on the tumor measurements, we classify the tumor into different stages:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Stage I (Small): Tumor size less than 500 mm²</li>
              <li>Stage II (Medium): Tumor size between 500 mm² and 2000 mm²</li>
              <li>Stage III (Large): Tumor size greater than 2000 mm²</li>
            </ul>
            <p className="text-gray-700 mt-3">
              These classification thresholds are based on established medical criteria and can be adjusted 
              according to specific clinical guidelines.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">5. Visualization and Reporting</h3>
            <p className="text-gray-700 mb-3">
              Finally, we generate visualizations and reports to present the results:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Drawing contours around the detected tumor</li>
              <li>Overlaying tumor boundaries on the original MRI</li>
              <li>Adding text annotations with tumor size and stage information</li>
              <li>Creating side-by-side comparisons of original and processed images</li>
              <li>Presenting results using Matplotlib for clear visualization</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer className="bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Technical Considerations</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Pixel Spacing Calibration</h3>
            <p className="text-gray-700">
              Accurate measurement of tumor size requires proper calibration of pixel spacing. We use a standardized 
              value of 0.5mm per pixel, but this can be adjusted based on the specific MRI acquisition parameters.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Algorithm Limitations</h3>
            <p className="text-gray-700">
              Our current approach relies on ground truth masks for segmentation. Future improvements could incorporate 
              automated segmentation using deep learning techniques to eliminate the need for manual mask creation.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Validation Methodology</h3>
            <p className="text-gray-700">
              The system's accuracy is validated by comparing results against expert radiologist assessments. 
              This ensures that our automated measurements align with professional medical evaluations.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Methodology;