"use client";
import Header from "@/header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";






function Home() {
  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <Header />
      <Preview />
      <Configurator />      

    </div>
  )
}
export default Home;