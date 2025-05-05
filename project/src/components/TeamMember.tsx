import React from 'react';

interface TeamMemberProps {
  name: string;
  id: string;
  role?: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, id, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 mb-4 overflow-hidden flex items-center justify-center text-white text-3xl font-bold">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{id}</p>
        {role && <p className="text-xs text-gray-500 mt-1">{role}</p>}
      </div>
    </div>
  );
};

export default TeamMember;