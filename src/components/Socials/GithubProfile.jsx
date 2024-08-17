import { githubData } from '../../../utils/data';

const GithubProfile = () => {
  const user = githubData;
  return (
    <div className="w-full h-full p-4 bg-black dark:bg-[#ffffff] rounded-lg border flex flex-row justify-between items-center px-10">
      <div className='flex flex-col justify-start gap-5'>
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.29 3.438 9.773 8.205 11.36.6.113.82-.26.82-.577v-2.045c-3.338.726-4.033-1.39-4.033-1.39-.546-1.388-1.334-1.757-1.334-1.757-1.09-.744.082-.729.082-.729 1.203.085 1.836 1.234 1.836 1.234 1.07 1.834 2.81 1.305 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.47-2.38 1.236-3.22-.124-.304-.536-1.527.117-3.18 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.29-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.876.118 3.18.768.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.814 1.103.814 2.222v3.293c0 .32.218.695.824.577C20.565 22.272 24 17.79 24 12.5c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </div>
        </div>
        <div className="text-lg font-medium text-white dark:text-black">{user?.data?.name}</div>
        <a href={user.url} target='_blank' className="rounded-md p-3 px-5 bg-blue-500 text-white">
          Follow me
        </a>
      </div>
      <div className="ml-auto">
        <div className="flex flex-row gap-2">
          {
            Array.from({ length: 13 }, (_, week) =>(<div className='flex flex-col gap-2' key={_}>
                {user.data?.contributions[week]?.contributions.map((day) => ( <div
                    key={day.color}
                    className={`w-5 h-5 rounded-md dark:border`}
                    style={{ backgroundColor: day.color }}
                  />
                ))}
              </div>)
            ).flat()
          }
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
