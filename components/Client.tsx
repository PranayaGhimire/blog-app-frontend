'use client'
import {Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {store} from "../redux/store";
const queryClient = new QueryClient();
const Client = ({children}:{children:React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster/>
         <Provider store={store}>
              {children}
        </Provider>
    </QueryClientProvider>
  )
}

export default Client
