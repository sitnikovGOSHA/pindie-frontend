export const getData = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const isResponseOk = (response) => {
  return !(response instanceof Error)
}

const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj)

  str = str.replaceAll('_id', 'id');
  const newObj = JSON.parse(str)
  const result = { ...newObj, category: newObj.categories }
  return result;
}

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item)
  })
}

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`)
  return isResponseOk(data) ? normalizeDataObject(data) : data
}


// ИСПРАВЛЕНО: При получении игр по категории, если массив окажется пустым, приложение выдаст ошибку.


export const getNormalizedGamesDataByCategory = async (url, category) => {
  try {
    const data = await getData(`${url}?categories.name=${category}`);
    // Проверка, что data действительно массив и не пустой
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Нет игр в категории');
    }
    // Предполагается, что функция isResponseOk проверяет корректность ответа,
    // а функция normalizeData нормализует данные
    return isResponseOk(data) ? normalizeData(data) : data;
  } catch (error) {
    // Возвращаем объект ошибки для последующей обработки
    console.error(error);
    return []; // Возвращаем пустой массив для безопасности и универсальности
  }
}

export const authorize = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      throw new Error('Ошибка авторизации')
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

export const setJWT = (jwt) => {
  document.cookie = `jwt=${jwt}`
  localStorage.setItem('jwt', jwt)
}

export const getJWT = () => {
  if (document.cookie === '') {
    return localStorage.getItem('jwt')
  }
  const jwt = document.cookie.split(';').find((item) => item.includes('jwt'))
  return jwt ? jwt.split('=')[1] : null
}

export const removeJWT = () => {
  document.cookie = 'jwt=;'
  localStorage.removeItem('jwt')
}

export const getMe = async (url, jwt) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

export const checkIfUserVoted = (game, userId) => {
  return game.users.find((user) => user.id === user)
}

export const vote = async (url, jwt, usersArray) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ users: usersArray })
    })
    if (response.status !== 200) {
      throw new Error('Ошибка голосования')
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}
