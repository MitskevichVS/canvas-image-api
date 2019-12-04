import netlify from 'netlify-auth-providers';

const authentication = () => {
  const errorMessage = document.querySelector('.header__container-error');
  const userLogo = document.querySelector('.user__image');
  const userNickname = document.querySelector('.user__name');
  const loginButton = document.querySelector('.header__button-oauth');
  const userContainer = document.querySelector('.header__container-user');
  const authenticator = new netlify({
    site_id: '505fe7e3-3366-48e1-99eb-3f34263e84de',
  });

  authenticator.authenticate({ provider: 'github', scope: 'user' }, (err, data) => {
    if (err) {
      errorMessage.classList.remove('header__container-error-hide');
    } else {
      const targetUrl = 'https://api.github.com/user';
      fetch(targetUrl,
        {
          method: 'GET',
          headers: {
            Authorization: ` token ${data.token}`,
          },
        })
        .then(responce => responce.json())
        .then((userData) => {
          errorMessage.classList.add('header__container-error-hide');
          loginButton.classList.add('header__button-oauth-hide');
          userLogo.src = userData.avatar_url;
          userNickname.childNodes[3].textContent = userData.login;
          userContainer.classList.add('header__container-user-show');
        });
    }
  });
};

export default authentication;
