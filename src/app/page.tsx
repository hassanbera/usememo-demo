"use client";
import {useMemo,useState} from "react";
import { initialItems } from "@/utils";

export default function Home() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const [isAutoClicking, setIsAutoClicking] = useState(false);

  //low-performance
  const selectedItem = items.find((item) => item.isSelected);

  //high-performance
  // const selectedItem = useMemo(()=>{
  //   return items.find((item)=>item.isSelected);
  // }, [items]);

  const handleAutoIncrement = () => {
    if (isAutoClicking) return;
    
    setIsAutoClicking(true);
    

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setCount(prevCount => prevCount + 1);
        
        
        if (i === 99) {
          setTimeout(() => setIsAutoClicking(false), 20);
        }
      }, i * 20);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Count: {count}</h1>
        <h2 className="text-2xl mb-8">Selected Item ID: {selectedItem?.id}</h2>
        <button
          className={`px-8 py-4 text-xl text-white rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 ${
            isAutoClicking 
              ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={handleAutoIncrement}
          disabled={isAutoClicking}
        >
          {isAutoClicking ? 'Auto Incrementing...' : 'Increment'}
        </button>
      </div>
    </main>
  );


}
