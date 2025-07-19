import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header with name and username */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600">@{username}</p>
      </div>

      {/* Contact Information */}
      <div className="text-gray-600 space-y-1 mb-4">
        <p>📧 {email}</p>
        <p>📞 {phone}</p>
        <p>🌐 {website}</p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-gray-600">
          📍 {address.suite}, {address.street}, {address.city} {address.zipcode}
        </p>
      </div>

      {/* Company */}
      <div className="mb-4">
        <p className="text-gray-600">
          🏢 <span className="font-medium">{company.name}</span>
        </p>
        <p className="text-sm text-gray-500 italic">
          &quot;{company.catchPhrase}&quot;
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
        <span>Location: {address.city}</span>
      </div>
    </div>
  );
};

export default UserCard;
