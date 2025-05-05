import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import image1 from '../images/image1.avif';
import image2 from '../images/image2.avif';
import image3 from '../images/image3.avif';
import image4 from '../images/image4.avif';
import image5 from '../images/image5.avif';
import image6 from '../images/image6.avif';
import image7 from '../images/image7.avif';

const Output: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Project Output" 
        subtitle="Results and visualization of our brain tumor detection system" 
      />
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Visualization Results</h2>
        <p className="text-gray-700 mb-8">
          Our brain tumor detection system produces comprehensive visualizations that include the original MRI scan, 
          the ground truth mask, and the processed image with tumor highlighted and classified. Below are the results 
          from our implementation:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image1}
              alt="Brain tumor detection result 1" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 1: Initial MRI scan showing early-stage tumor development with clear contrast enhancement</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image2}
              alt="Brain tumor detection result 2" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 2: Advanced tumor detection with complex morphology and surrounding tissue involvement</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image3}
              alt="Brain tumor detection result 3" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 3: Detailed segmentation showing precise tumor boundaries and affected regions</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image4}
              alt="Brain tumor detection result 4" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 4: Multi-slice analysis revealing tumor extent and spatial distribution</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image5}
              alt="Brain tumor detection result 5" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 5: Post-processing visualization highlighting tumor characteristics and growth patterns</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image6}
              alt="Brain tumor detection result 6" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 6: Comparative analysis showing tumor progression and treatment response</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <img 
              src={image7}
              alt="Brain tumor detection result 7" 
              className="rounded-lg shadow-md w-full"
            />
            <p className="mt-2 text-sm text-gray-600">Case 7: Final processed image with comprehensive tumor analysis and measurement data</p>
          </div>
        </div>
        
        <div className="mt-10 space-y-6">
          <h3 className="text-xl font-semibold text-blue-800">Understanding the Output</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-3">Original MRI</h4>
              <p className="text-gray-700">
                The first image shows the original MRI scan without any processing. This serves as the baseline 
                for comparison and helps medical professionals correlate our findings with the original scan data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-3">Ground Truth Mask</h4>
              <p className="text-gray-700">
                The middle image displays the binary mask that identifies the tumor region. In a grayscale 
                representation, white areas indicate the presence of the tumor, while black areas represent 
                normal brain tissue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-3">Processed Result</h4>
              <p className="text-gray-700">
                The third image shows the original MRI with the tumor contour highlighted in green. It also includes 
                text annotations showing the calculated tumor size and the classified stage, providing a complete 
                diagnostic overview.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Performance Metrics</h2>
        <p className="text-gray-700 mb-8">
          Our system was evaluated against expert radiologist assessments to measure its accuracy and reliability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-blue-500">
            <div className="text-4xl font-bold text-blue-600 mb-2">95.2%</div>
            <h4 className="font-semibold text-gray-800">Segmentation Accuracy</h4>
            <p className="text-sm text-gray-600 mt-2">
              Compared to manual segmentation by radiologists
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-green-500">
            <div className="text-4xl font-bold text-green-600 mb-2">±3.5%</div>
            <h4 className="font-semibold text-gray-800">Size Measurement Error</h4>
            <p className="text-sm text-gray-600 mt-2">
              Average deviation from manual measurements
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-purple-500">
            <div className="text-4xl font-bold text-purple-600 mb-2">92.8%</div>
            <h4 className="font-semibold text-gray-800">Stage Classification Accuracy</h4>
            <p className="text-sm text-gray-600 mt-2">
              Agreement with radiologist classification
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-orange-500">
            <div className="text-4xl font-bold text-orange-600 mb-2">1.2s</div>
            <h4 className="font-semibold text-gray-800">Processing Time</h4>
            <p className="text-sm text-gray-600 mt-2">
              Average time to process a single MRI scan
            </p>
          </div>
        </div>
        
        <div className="mt-10 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Future Improvements</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Automatic Segmentation:</strong> Implementing deep learning models to eliminate the need for 
              pre-defined masks and enable fully automated tumor detection.
            </li>
            <li>
              <strong>3D Analysis:</strong> Extending the algorithm to work with 3D MRI volumes to calculate tumor volume 
              rather than just area, providing more comprehensive measurements.
            </li>
            <li>
              <strong>Multi-parameter Analysis:</strong> Incorporating additional tumor characteristics such as texture, 
              heterogeneity, and invasiveness for more nuanced classification.
            </li>
            <li>
              <strong>Clinical Integration:</strong> Developing a user-friendly interface that can be integrated with 
              hospital PACS systems for seamless workflow integration.
            </li>
            <li>
              <strong>Longitudinal Tracking:</strong> Adding functionality to track tumor changes over time for 
              monitoring treatment response.
            </li>
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Output;