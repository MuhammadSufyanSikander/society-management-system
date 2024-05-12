// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import configureStore from '@/app/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export function Providers({ children }) {
  const { persistor, store } = configureStore()
  return (
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </NextUIProvider>
  )
}
