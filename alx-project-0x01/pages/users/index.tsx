import React, { useState } from "react";
import { UserProps } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUserData: Omit<UserProps, 'id'>) => {
    // Generate a new ID (in a real app, this would be handled by the backend)
    const newId = Math.max(...users.map(u => u.id), 0) + 1;
    
    const newUser: UserProps = {
      id: newId,
      ...newUserData
    };

    // Add the new user to the beginning of the list
    setUsers(prevUsers => [newUser, ...prevUsers]);
    
    // In a real application, you would make an API call here to persist the user
    console.log('New user added:', newUser);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Users</h1>
          <p className="text-gray-600">Meet our community members</p>
        </div>
        <button
          onClick={openModal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add User
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  
  return {
    props: {
      posts,
    },
  };
}

export default Users;