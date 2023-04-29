import React, { useRef } from "react";
import Layout from '../components/Layout';
import Learn from "@/screens/Home/Learn";
import Main from "../screens/Home/Main";
import Trend from "../screens/Home/Trend";

export default function Home() {
  
  const scrollToRef = useRef(null);

  return (
    <Layout>
      <Main scrollToRef={scrollToRef} />
      <Learn scrollToRef={scrollToRef} />
      <Trend/>
    </Layout>
  );
}
