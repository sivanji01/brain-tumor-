import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import TeamMember from '../components/TeamMember';
import { Brain } from 'lucide-react';

const Home: React.FC = () => {
  const teamMembers = [
    { name: 'G. Asritha Chinmai', id: 'RA2211013010006' },
    { name: 'Alluri Sivanji', id: 'RA2211013010007' },
    { name: 'D. Jaya Lakshmi Gayathri', id: 'RA2211013010009' },
    { name: 'M.Anshitha Reddy', id: 'RA2211013010012' },
    { name: 'Gogula Sathvika', id: 'RA2211013010017' }
  ];

  return (
    <div>
      <PageHeader 
        title="Brain Tumor Detection System" 
        subtitle="Medical Image Processing Project" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:w-1/2 bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 flex items-center justify-center">
            <div className="text-center">
              <Brain className="w-24 h-24 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">BrainScan</h2>
              <p className="text-blue-100">
                Advanced medical image processing for brain tumor detection
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Project Overview</h3>
            <p className="text-gray-700 mb-6">
              Our system uses advanced image processing techniques to detect brain tumors from MRI scans. 
              The algorithm can identify tumors, calculate their size, and classify them into different stages, 
              providing crucial diagnostic information for medical professionals.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">Key Features</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Automatic tumor detection from MRI images</li>
                <li>Precise tumor size calculation in mm²</li>
                <li>Stage classification (Stage I, II, or III)</li>
                <li>Visual highlighting of tumor regions</li>
                <li>Comprehensive analysis report generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <SectionContainer>
        <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <TeamMember 
              key={member.id} 
              name={member.name} 
              id={member.id} 
            />
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer className="bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">About the Project</h2>
        <p className="text-gray-700 mb-4">
          This medical image processing project was developed as part of our advanced coursework in 
          biomedical engineering. The system leverages computer vision and image processing techniques 
          to assist medical professionals in diagnosing and analyzing brain tumors from MRI scans.
        </p>
        <p className="text-gray-700 mb-4">
          Early and accurate detection of brain tumors is crucial for effective treatment planning. 
          Our system aims to provide a reliable, automated method for tumor detection, size measurement, 
          and stage classification, potentially improving diagnostic workflows and patient outcomes.
        </p>
        <p className="text-gray-700">
          The project utilizes OpenCV and NumPy for image processing, implements contour detection 
          algorithms for tumor boundary identification, and applies pixel-based measurements to 
          calculate tumor dimensions. The stage classification is based on established medical criteria 
          relating to tumor size.
        </p>
      </SectionContainer>
    </div>
  );
};

export default Home;