/**
 * returns array of cookies
 */
export const getCookies = () => {
  const cookies = document.cookie
  return cookies.split('; ')
}

export const getCookieValue = (cookieName) => {
  let cookies = getCookies();
  let cookie = '';
  for (let i = 0; i < cookies.length; i ++) {
    if (cookies[i].includes(cookieName)) {
      cookie = cookies[i]
      break;
    }
  }
  return cookie.replace(`${cookieName}=`, '')
}