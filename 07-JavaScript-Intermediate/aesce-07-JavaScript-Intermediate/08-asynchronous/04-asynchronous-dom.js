/* eslint-disable no-alert */
const elFormUsername = document.querySelector('#form-username');
const elCard = document.querySelector('.card');
const elCardImg = document.querySelector('.card-img-top');
const elCardBtn = document.querySelector('#card-btn');
const elCardTitle = document.querySelector('#card-title');

const addClass = (cls, el) => {
  el.classList.remove(cls);
  el.classList.toggle(cls);
};

const removeClass = (cls, el) => el.classList.remove(cls);

const setUserEl = (user = null) => {
  if (user === null) {
    elCardBtn.removeEventListener('click', () => {});
    elCardImg.src = '...';
    elCardImg.src = '';
    elCardTitle.innerText = 'Card Title';
    addClass('d-none', elCardBtn);
    addClass('d-none', elCardImg);
    addClass('d-none', elCard);
    return;
  }
  if (typeof user === 'string') {
    elCardBtn.removeEventListener('click', () => {});
    elCardImg.src = '...';
    elCardImg.src = '';
    elCardTitle.innerText = 'Not Found';
    addClass('d-none', elCardBtn);
    addClass('d-none', elCardImg);
    removeClass('d-none', elCard);
  }
  if (typeof user === 'object') {
    elCardBtn.addEventListener('click', () => {
      window.location.href = user.html_url;
    });
    elCardImg.src = user.avatar_url;
    elCardImg.alt = `${user.login}-avatar`;
    elCardTitle.innerText = user.login;
    removeClass('d-none', elCard);
  }
};

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

elFormUsername.onsubmit = (ev) => {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const githubUser = getGitHubUser(formData.get('username'));
  if (githubUser === null) {
    window.alert('username is empty.');
    setUserEl();
    return;
  }
  if (githubUser !== null) {
    githubUser.then((data) => {
      setUserEl(data);
    });
  }
  ev.target.reset();
};
