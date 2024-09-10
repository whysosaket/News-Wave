import { createAppSlice } from '@/app/CreateAppSlice'
import { registerUser, loginUser, verifyUser } from './authActions'

export interface User {
    name: string | null
    email: string | null
}

export interface AuthSliceState {
    loading: boolean
    userInfo: User
    userToken: string | null
    error: Error | null
    success: boolean
    status: string
}

const initialState: AuthSliceState = {
  loading: false,
  userInfo: {name: null, email: null}, 
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  status: "idle"
}

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: create => ({
    logout: create.reducer( state => {
        state.userInfo = {name: null, email: null};
        state.userToken = null;
        state.success = false;
        localStorage.removeItem('news-auth-token')
    }),

    register: create.asyncThunk( 
      async ({name, email, password}:{name: string, email: string, password: string}) => {
        const response = await registerUser({ name, email, password})
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state) => {
          state.status = "idle"
        },
        rejected: state => {
          state.status = "failed"
        },
      }
    ),
    login: create.asyncThunk(
        async ({email, password}:{email: string, password: string}) => {
          const response = await loginUser({email, password})
          return response
        },
        {
          pending: state => {
            state.status = "loading"
          },
          fulfilled: (state, action) => {
            state.status = "idle"
            state.userInfo = action.payload.user
            state.userToken = action.payload.authtoken
            localStorage.setItem('news-auth-token', action.payload.authtoken)
          },
          rejected: state => {
            state.status = "failed"
          },
        }
    ),
    verify: create.asyncThunk( 
      async () => {
        const response = await verifyUser()
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.userInfo = action.payload.user
          state.userToken = localStorage.getItem('news-auth-token') || null
        },
        rejected: state => {
          state.status = "failed"
        },
      }
    ),
  }),
  
  selectors: {
    selectToken: auth => auth.userToken,
    selectUserInfo: auth => auth.userInfo,
    selectUserStatus: auth => auth.status
  },
 
})

export const { selectToken, selectUserInfo, selectUserStatus } = authSlice.selectors
export const { login, register, logout, verify } = authSlice.actions
