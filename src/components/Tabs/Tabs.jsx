import React, { useState, useEffect } from "react";
import TabButton from "./TabButton";
import TabsData from "./TabData";
function Tabs() {
  const [data, setData] = useState(TabsData);
  const [current, setCurrent] = useState(1);
  const currentTabContent = data.filter((item) => {
    return item.id === current;
  });
  useEffect(() => {
    setData(TabsData);
  }, []);
  return (
    <div className='flex flex-col w-fit min-h-fit'>
      <div className='rounded w-full h-12 bg-gray-100 p-4 flex items-center gap-2'>
        {data.map((item) => {
          return (
            <TabButton
              key={item.id}
              isActive={item.id === current ? true : false}
              title={item.title}
              onClick={() => setCurrent(item.id)}
            />
          );
        })}
      </div>
      <div className='w-fit py-8 min-h-fit'>
        {currentTabContent.map((item) => {
          return <p className='text-3xl font-light'>{item.content}</p>;
        })}
      </div>
    </div>
  );
}

export default Tabs;
