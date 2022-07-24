const getGitHubUser = (user) => {
  if (user.trim() === '') return null;
  const API = ' https://api.github.com/users';
  return fetch(`${API}/${user}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Not Found') return 'not found';
      return data;
    });
};
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser('mojombo');
  const orange = await getGitHubUser('');
  const rudiTabuti = await getGitHubUser('rudi.tabuti');

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
};

printGitHubUser();
