import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import type { Technology } from "./types/Technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

 
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  const removeFromStack = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack!`
      );
    }
  };


  const removeAllFromStack = () => {
    setStack([]);

    toast.info(
      "All technologies removed from your stack!"
    );
  };


  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);

        toast.error(
          "Failed to load technologies!"
        );
      });
  }, []);

 if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-semibold text-gray-600">
        Loading technologies...
      </p>
    </div>
  );
}


  return (
    <>
      {}
      <Navbar />

      {}
      <Hero />

      {}
    <section id="technologies" className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          {}
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the Technologies
          </h2>

          <p className="mt-2 text-gray-500">
            Choose the technologies you want to add to your stack.
          </p>

          {}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAddToStack={addToStack}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}

            </div>

            {}
            <div className="lg:col-span-1">

              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAllFromStack}
              />

            </div>

          </div>
        </div>
      </section>

      {}
      <Footer />

      {}
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;