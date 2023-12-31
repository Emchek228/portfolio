import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <Header />
      </div>
    </main>
  );
}
