import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { logout } from "../features/user-slice";

const baseUrl = `${process.env.REACT_APP_API_URL}`;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
});

const customFetchBase = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (!result.error || (result.error && !result.error.data.detail))
    return result;
  if (result.error.data.detail === "You are not logged in") {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          { credentials: "include", url: "auth/refresh" },
          api,
          extraOptions
        );
        console.log(refreshResult);
        if (refreshResult.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
          window.location.href = "/";
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
