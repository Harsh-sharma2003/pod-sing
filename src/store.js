import { configureStore } from "@reduxjs/toolkit"; //  This line imports the configureStore function from the Redux Toolkit package. configureStore is a function provided by Redux Toolkit to create a Redux store with pre-configured middleware and other options.

import userReducer from "./slices/userSlice"; // This line imports the user reducer from the file located at "./slices/userSlice". A reducer in Redux is a function that specifies how the application's state changes in response to actions. The user reducer likely contains the logic for managing the user-related state in the application.
import podcastReducer from "./slices/podcastSlice"; //  This line imports the podcast reducer from the file located at "./slices/podcastSlice". Similar to the user reducer, the podcast reducer likely contains the logic for managing the podcast-related state in the application.
export default configureStore({
  reducer: {                      // his line exports the result of calling the configureStore function with an object containing configuration options. The configureStore function creates and configures the Redux store for the application. In this case, it receives an object with a reducer key, which specifies the root reducer for the store.
    user: userReducer,
    podcasts: podcastReducer, // This part of the configuration object specifies the root reducer for the store. It combines multiple reducers into a single reducer object using object shorthand notation. The userReducer is assigned to the user key, indicating that it will manage the state under the user namespace in the Redux store. Similarly, the podcastReducer is assigned to the podcasts key, indicating that it will manage the state under the podcasts namespace in the Redux store.
  },
});