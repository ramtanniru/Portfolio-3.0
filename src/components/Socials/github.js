export const fetchGitHubActivity = async (username) => {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { username } }),
    });
  
    const data = await response.json();
    console.log(data);
    
    if (!response.ok) {
      throw new Error(data.errors ? data.errors[0].message : 'Failed to fetch data');
    }
  
    return data.data.user.contributionsCollection.contributionCalendar.weeks;
  };
  