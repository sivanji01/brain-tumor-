import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import CodeBlock from '../components/CodeBlock';

const CodeExplanation: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Code Explanation" 
        subtitle="Detailed breakdown of our algorithm implementation" 
      />
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Step-by-Step Explanation</h2>
        <p className="text-gray-700 mb-8">
          Let's walk through each section of the code to understand how our brain tumor detection system works.
        </p>
        
        <div className="space-y-12">
          {/* Section 1: Import Libraries */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">1. Importing Libraries</h3>
            <CodeBlock code={`import cv2
import numpy as np
import matplotlib.pyplot as plt`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">We import three essential libraries:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>cv2 (OpenCV)</strong>: A powerful computer vision library that provides functions for image processing, like reading images, thresholding, and contour detection.</li>
                <li><strong>numpy (np)</strong>: Used for numerical operations and array manipulations, crucial for efficient image data handling.</li>
                <li><strong>matplotlib.pyplot (plt)</strong>: For creating visualizations and plots to display our results.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 2: Loading Images */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">2. Loading the MRI and Mask Images</h3>
            <CodeBlock code={`# Load MRI image and ground truth mask
mri = cv2.imread('/content/drive/MyDrive/MIP/image.png')
mask = cv2.imread('/content/drive/MyDrive/MIP/mask.png',cv2.IMREAD_GRAYSCALE)`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">In this section:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We load the MRI image in color (BGR format, which is OpenCV's default).</li>
                <li>We load the mask image as grayscale using the <code>cv2.IMREAD_GRAYSCALE</code> flag, since masks are typically single-channel images.</li>
                <li>The paths specified are specific to the Google Drive environment where this code was developed.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 3: Thresholding */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">3. Applying Binary Thresholding</h3>
            <CodeBlock code={`# Threshold if needed (in case mask is not binary)
_, binary_mask = cv2.threshold(mask, 127, 1, cv2.THRESH_BINARY)`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">This step ensures we have a true binary mask:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The <code>cv2.threshold</code> function converts grayscale images to binary by setting all pixels above a threshold (127 in this case) to a specific value (1 here).</li>
                <li>The <code>THRESH_BINARY</code> flag specifies we want a binary output (0 or 1 values only).</li>
                <li>The underscore (_) discards the threshold value returned by the function, as we only need the binary image.</li>
                <li>This step is important to ensure consistent tumor segmentation, especially if the mask might not be perfectly binary.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 4: Tumor Extraction */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">4. Extracting the Tumor Region</h3>
            <CodeBlock code={`# Extract only the tumor region
tumor_only = cv2.bitwise_and(mri, mri, mask=binary_mask)`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">To isolate the tumor from the rest of the brain:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We use the <code>cv2.bitwise_and</code> function, which performs a bitwise AND operation.</li>
                <li>The MRI image is provided twice as the input images (this is how OpenCV's function works).</li>
                <li>The binary mask is provided as the mask parameter, which means the operation will only be applied where the mask has non-zero values (i.e., the tumor region).</li>
                <li>The result is a new image (<code>tumor_only</code>) where only the tumor region from the original MRI is preserved, and everything else is black.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 5: Size Calculation */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">5. Calculating Tumor Size</h3>
            <CodeBlock code={`# Calculate tumor size
tumor_pixels = np.sum(binary_mask)
pixel_spacing = 0.5  # mm, adjust if needed
tumor_size_mm2 = tumor_pixels * (pixel_spacing ** 2)`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">To determine the tumor's actual size:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We count the number of pixels in the tumor by summing all values in the binary mask using <code>np.sum()</code>. Since the mask has values of 1 where the tumor is present, the sum gives us the total pixel count.</li>
                <li>We define a <code>pixel_spacing</code> variable representing the physical size of each pixel (0.5mm in this case).</li>
                <li>We calculate the actual tumor area in square millimeters by multiplying the pixel count by the square of the pixel spacing.</li>
                <li>This conversion is essential for meaningful medical interpretation, as pixel counts alone aren't standardized across different MRI machines and scan parameters.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 6: Stage Classification */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">6. Classifying Tumor Stage</h3>
            <CodeBlock code={`# Stage classification
if tumor_size_mm2 < 500:
    stage = "Stage I (Small)"
elif tumor_size_mm2 < 2000:
    stage = "Stage II (Medium)"
else:
    stage = "Stage III (Large)"`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">Based on the calculated tumor size, we classify it into stages:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stage I (Small): Tumors smaller than 500 mm²</li>
                <li>Stage II (Medium): Tumors between 500 mm² and 2000 mm²</li>
                <li>Stage III (Large): Tumors larger than 2000 mm²</li>
              </ul>
              <p className="mt-3">
                These thresholds were determined based on medical literature and can be adjusted according to specific clinical guidelines or tumor types. The staging provides a quick assessment of the tumor's severity and potential implications.
              </p>
            </div>
          </div>
          
          {/* Section 7: Visualization */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">7. Drawing Contours and Annotating</h3>
            <CodeBlock code={`# Draw contours on original image
contours, _ = cv2.findContours(binary_mask.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
output = mri.copy()
cv2.drawContours(output, contours, -1, (0, 255, 0), 2)
cv2.putText(output, f"{stage}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2)`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">To visualize the tumor on the original MRI:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We first find the contours (boundaries) of the tumor in the binary mask using <code>cv2.findContours</code>.</li>
                <li>We create a copy of the original MRI to avoid modifying it directly.</li>
                <li>We draw green contours (0, 255, 0) with a thickness of 2 pixels around the tumor using <code>cv2.drawContours</code>.</li>
                <li>The -1 parameter means we're drawing all detected contours.</li>
                <li>We add a text label showing the tumor stage in the top-left corner using <code>cv2.putText</code>.</li>
                <li>The text uses the HERSHEY_SIMPLEX font, white color (255,255,255), and a line thickness of 2.</li>
              </ul>
            </div>
          </div>
          
          {/* Section 8: Displaying Results */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">8. Displaying the Results</h3>
            <CodeBlock code={`# Show everything
plt.figure(figsize=(15,5))
plt.subplot(1,3,1)
plt.imshow(cv2.cvtColor(mri, cv2.COLOR_BGR2RGB))
plt.title("Original MRI")
plt.axis('off')

plt.subplot(1,3,2)
plt.imshow(mask, cmap='gray')
plt.title("Ground Truth Mask")
plt.axis('off')

plt.subplot(1,3,3)
plt.imshow(cv2.cvtColor(output, cv2.COLOR_BGR2RGB))
plt.title(f"Tumor Highlighted\\nSize: {tumor_size_mm2:.2f} mm²\\n{stage}")
plt.axis('off')

plt.tight_layout()
plt.show()`} language="python" />
            
            <div className="mt-4 text-gray-700">
              <p className="mb-3">Finally, we create a comprehensive visualization:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We create a figure with a size of 15×5 inches to display three images side by side.</li>
                <li>For the original MRI, we convert from BGR (OpenCV format) to RGB (Matplotlib format) before displaying.</li>
                <li>We display the ground truth mask in grayscale using the 'gray' colormap.</li>
                <li>We show the annotated result with the tumor contour and stage information, also converting from BGR to RGB.</li>
                <li>Each subplot includes a title, and we turn off the axes for a cleaner presentation.</li>
                <li>The title of the third subplot includes the calculated tumor size (formatted to 2 decimal places) and the classified stage.</li>
                <li><code>plt.tight_layout()</code> ensures proper spacing between subplots.</li>
                <li>Finally, <code>plt.show()</code> displays the complete figure.</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer className="bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Implementation Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Considerations</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Pixel Spacing Calibration:</strong> Accurate tumor size calculation relies on proper pixel spacing values. In real clinical settings, this would be obtained from the DICOM metadata of the MRI scan.
              </li>
              <li>
                <strong>Mask Generation:</strong> This code assumes a pre-existing ground truth mask. In a fully automated system, this would be generated using segmentation algorithms such as U-Net or other deep learning approaches.
              </li>
              <li>
                <strong>Color Space Conversion:</strong> Note the conversion between BGR (OpenCV) and RGB (Matplotlib) color spaces, which is a common source of confusion when working with these libraries together.
              </li>
              <li>
                <strong>Classification Thresholds:</strong> The stage classification thresholds should be validated by medical experts and adjusted based on the specific type of brain tumor being analyzed.
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Potential Extensions</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>3D Volume Calculation:</strong> Extending the analysis to work with 3D MRI data to calculate tumor volume rather than just area.
              </li>
              <li>
                <strong>Automated Segmentation:</strong> Implementing deep learning models like U-Net for automatic tumor segmentation without requiring ground truth masks.
              </li>
              <li>
                <strong>Additional Measurements:</strong> Including more tumor characteristics such as shape metrics, texture analysis, and boundary irregularity.
              </li>
              <li>
                <strong>DICOM Integration:</strong> Directly reading DICOM files to extract pixel spacing and other relevant metadata automatically.
              </li>
              <li>
                <strong>Multi-class Segmentation:</strong> Extending to segment different tumor components (e.g., necrotic core, active tumor, edema) and provide separate measurements for each.
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CodeExplanation;