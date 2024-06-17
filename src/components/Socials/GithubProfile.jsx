import Image from 'next/image';

const GithubProfile = ({ userData, activityData }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
        <div className="flex items-center">
          <Image
            src={userData.avatar_url}
            alt={userData.login}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{userData.name || userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {userData.login}
            </a>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Recent Activity</h3>
          <ul className="mt-2">
            {activityData.map((event) => (
              <li key={event.id} className="mb-2">
                <span className="text-gray-600">{new Date(event.created_at).toLocaleDateString()}</span> - {event.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
