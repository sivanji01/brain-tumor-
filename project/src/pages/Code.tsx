import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import CodeBlock from '../components/CodeBlock';

const Code: React.FC = () => {
  const sourceCode = `import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load MRI image and ground truth mask
mri = cv2.imread('/content/drive/MyDrive/MIP/image.png')
mask = cv2.imread('/content/drive/MyDrive/MIP/mask.png',cv2.IMREAD_GRAYSCALE)

# Threshold if needed (in case mask is not binary)
_, binary_mask = cv2.threshold(mask, 127, 1, cv2.THRESH_BINARY)

# Extract only the tumor region
tumor_only = cv2.bitwise_and(mri, mri, mask=binary_mask)

# Calculate tumor size
tumor_pixels = np.sum(binary_mask)
pixel_spacing = 0.5  # mm, adjust if needed
tumor_size_mm2 = tumor_pixels * (pixel_spacing ** 2)

# Stage classification
if tumor_size_mm2 < 500:
    stage = "Stage I (Small)"
elif tumor_size_mm2 < 2000:
    stage = "Stage II (Medium)"
else:
    stage = "Stage III (Large)"

# Draw contours on original image
contours, _ = cv2.findContours(binary_mask.astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
output = mri.copy()
cv2.drawContours(output, contours, -1, (0, 255, 0), 2)
cv2.putText(output, f"{stage}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2)

# Show everything
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
plt.show()`;

  return (
    <div>
      <PageHeader 
        title="Source Code" 
        subtitle="Implementation of our brain tumor detection algorithm" 
      />
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Complete Source Code</h2>
        <p className="text-gray-700 mb-6">
          Below is the complete Python code for our brain tumor detection and classification system. 
          This code uses OpenCV for image processing, NumPy for numerical operations, and Matplotlib for visualization.
        </p>
        
        <CodeBlock code={sourceCode} language="python" />
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Dependencies</h3>
          <p className="text-gray-700 mb-3">
            To run this code, you'll need the following Python libraries:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>OpenCV (cv2): For image processing operations</li>
            <li>NumPy: For numerical calculations and array operations</li>
            <li>Matplotlib: For visualization and plotting</li>
          </ul>
          <p className="text-gray-700 mt-3">
            These can be installed using pip:
          </p>
          <div className="mt-2 text-sm bg-gray-100 p-3 rounded-md font-mono">
            pip install opencv-python numpy matplotlib
          </div>
        </div>
      </SectionContainer>
      
      <SectionContainer className="bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Code Structure</h2>
        <p className="text-gray-700 mb-6">
          The code is organized into several logical sections that follow the processing pipeline:
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Image Loading</h3>
            <p className="text-gray-700">
              The first section loads the MRI image and the ground truth mask using OpenCV's imread function.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Preprocessing</h3>
            <p className="text-gray-700">
              The code then applies thresholding to ensure the mask is binary, which is essential for accurate segmentation.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Tumor Extraction</h3>
            <p className="text-gray-700">
              Using bitwise operations, the tumor region is isolated from the rest of the brain tissue.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Size Calculation</h3>
            <p className="text-gray-700">
              The tumor size is calculated by counting the number of pixels in the binary mask and converting to mm².
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Stage Classification</h3>
            <p className="text-gray-700">
              Based on the tumor size, a conditional statement classifies the tumor into different stages.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Visualization</h3>
            <p className="text-gray-700">
              The final section creates visualizations of the original MRI, the mask, and the annotated result using Matplotlib.
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Code;