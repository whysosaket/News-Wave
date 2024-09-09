import axios from 'axios'

const backendURL = 'http://127.0.0.1:9000'

export const registerUser = async ({ name, email, password }: { name: string, email: string, password: string }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.post(
      `${backendURL}/api/auth/register`,
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

export const verifyUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    console.log("Hrllo",email, password)
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