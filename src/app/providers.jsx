// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import configureStore from '@/app/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import toast, { Toaster } from 'react-hot-toast'

const { persistor, store } = configureStore()
export function Providers({ children }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <Toaster />
        </PersistGate>
      </Provider>
    </NextUIProvider>
  )
}
