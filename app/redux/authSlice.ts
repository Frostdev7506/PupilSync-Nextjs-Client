import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { decode as jwt_decode } from "jwt-decode";

interface AuthState {
  token: string | null;
  userName: string | null;
  isAdminLogin: boolean;
  loginState: boolean | null;
}

const initialState: AuthState = {
  token: null,
  userName: null,
  isAdminLogin: false,
  loginState: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (
    {
      username,
      password,
      appType,
    }: { username: string; password: string; appType: string },
    { dispatch }
  ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, appType }),
      }
    );
    const data = await response.json();

    if (data.token) {
      dispatch(setToken(data.token));
      dispatch(setIsAdminLogin(appType === "admins"));
      localStorage.setItem("token", data.token);

      const decodedToken = jwt_decode(data.token) as { username: string };
      const { username } = decodedToken;
      dispatch(setUserName(username));
      localStorage.setItem("userName", username);
    }
    if (data.error === "Invalid credentials") {
      dispatch(setLoginState(false));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setIsAdminLogin: (state, action: PayloadAction<boolean>) => {
      state.isAdminLogin = action.payload;
    },
    setLoginState: (state, action: PayloadAction<boolean | null>) => {
      state.loginState = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userName = null;
      state.isAdminLogin = false;
      state.loginState = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loginState = null;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.loginState = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loginState = false;
      });
  },
});

export const { setToken, setUserName, setIsAdminLogin, setLoginState, logout } =
  authSlice.actions;
export default authSlice.reducer;
