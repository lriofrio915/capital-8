import React, { useRef } from "react";
import Layout from '../components/Layout';
import { Main } from  "../screens/Home";

export default function Home() {
  
  const scrollToRef = useRef(null);

  return (
    <Layout>
      <Main scrollToRef={scrollToRef} />
    </Layout>
  );
}
