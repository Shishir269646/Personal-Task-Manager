'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    
      <Provider store={store}>
        <Navbar/>
      </Provider>
    
  );
}
