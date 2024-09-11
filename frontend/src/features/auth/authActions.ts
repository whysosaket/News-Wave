import axios from 'axios'

const backendURL = import.meta.env.VITE_SERVER

export const registerUser = async ({ name, email, password }: { name: string, email: string, password: string }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.post(
      `${backendURL}/api/auth/signup`,
      { name, email, password },
      config
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.post(
      `${backendURL}/api/auth/login`,
      { email, password },
      config
    )
    return response.data
  } catch (error) {
    console.log(error);
}
}

export const verifyUser = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('news-auth-token')
      },
    }
    const response = await axios.get(
      `${backendURL}/api/auth/verify`,
      config
    )
    return response.data
  } catch (error) {
    console.log(error);
}
}