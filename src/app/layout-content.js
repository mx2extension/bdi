'use client';

import { useLayoutEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayoutContent({ children }) {
  useLayoutEffect(() => {
    // This disables the browser's default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}