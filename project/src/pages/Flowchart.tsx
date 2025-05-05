import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';

const Flowchart: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Project Flowchart" 
        subtitle="Visual representation of our algorithm process" 
      />
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Process Flow</h2>
        <p className="text-gray-700 mb-8">
          This flowchart illustrates the step-by-step process of our brain tumor detection and classification system, 
          from image input to final diagnosis output.
        </p>
        
        <div className="relative mx-auto max-w-3xl py-8">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-300"></div>
          
          {/* Step 1 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 ml-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Image Input</h3>
                <p className="text-gray-700">
                  Loading MRI image and ground truth mask using OpenCV.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  mri = cv2.imread('/path/to/image.png')<br />
                  mask = cv2.imread('/path/to/mask.png', cv2.IMREAD_GRAYSCALE)
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 mr-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Image Preprocessing</h3>
                <p className="text-gray-700">
                  Converting mask to binary format and preparing for segmentation.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  _, binary_mask = cv2.threshold(mask, 127, 1, cv2.THRESH_BINARY)
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 ml-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Tumor Segmentation</h3>
                <p className="text-gray-700">
                  Isolating the tumor region from the rest of the brain tissue.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  tumor_only = cv2.bitwise_and(mri, mri, mask=binary_mask)
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 mr-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Size Calculation</h3>
                <p className="text-gray-700">
                  Measuring tumor size by counting pixels and converting to mm².
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  tumor_pixels = np.sum(binary_mask)<br />
                  pixel_spacing = 0.5  # mm<br />
                  tumor_size_mm2 = tumor_pixels * (pixel_spacing ** 2)
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">5</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 ml-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Stage Classification</h3>
                <p className="text-gray-700">
                  Classifying tumor into stages based on size measurements.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  if tumor_size_mm2 &lt; 500:<br />
                  &nbsp;&nbsp;stage = "Stage I (Small)"<br />
                  elif tumor_size_mm2 &lt; 2000:<br />
                  &nbsp;&nbsp;stage = "Stage II (Medium)"<br />
                  else:<br />
                  &nbsp;&nbsp;stage = "Stage III (Large)"
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 6 */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">6</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 mr-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Contour Visualization</h3>
                <p className="text-gray-700">
                  Drawing contours around the tumor region for visualization.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  contours, _ = cv2.findContours(binary_mask.astype(np.uint8),<br />
                  &nbsp;&nbsp;cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)<br />
                  output = mri.copy()<br />
                  cv2.drawContours(output, contours, -1, (0, 255, 0), 2)
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 7 */}
          <div className="relative">
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">7</div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 ml-16 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Results Visualization</h3>
                <p className="text-gray-700">
                  Displaying the original image, mask, and annotated results.
                </p>
                <div className="mt-4 text-sm bg-gray-100 p-3 rounded-md font-mono">
                  plt.figure(figsize=(15,5))<br />
                  plt.subplot(1,3,1)<br />
                  plt.imshow(cv2.cvtColor(mri, cv2.COLOR_BGR2RGB))<br />
                  plt.title("Original MRI")<br />
                  # ... more visualization code
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer className="bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Key Components Interaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Image Processing Module</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>OpenCV Image I/O</li>
              <li>Thresholding Operations</li>
              <li>Contour Detection</li>
              <li>Morphological Operations</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Measurement Module</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Pixel Counting</li>
              <li>Size Calculation</li>
              <li>Pixel-to-mm Conversion</li>
              <li>Area Computation</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Visualization Module</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Matplotlib Plotting</li>
              <li>Image Annotation</li>
              <li>Side-by-side Comparison</li>
              <li>Results Presentation</li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Flowchart;