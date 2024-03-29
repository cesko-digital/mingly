"use client";

import { ReactNode, useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "helpers/classNames";

interface Props {
  request?: React.ReactNode,
  favourite?: React.ReactNode 
}

const Tabs = ({ request, favourite }: Props) => {
  //TODO: Budou se Tabs používat ještě na něco jiného? Zflexibilnit?
  let [categories] = useState({
    Přátelé: [
      {
        id: 1,
        title: "Čekající žádosti",
        contents: request
      },
    ],
    Oblíbení: [
      {
        id: 2,
        title: "Moji oblíbení",
        contents: favourite
      },
    ],
  });

  return (
    <div className="w-full max-w-md">
      <Tab.Group>
        <Tab.List className="flex gap-2 rounded-full bg-gray-10 p-1">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-full py-3 px-6",
                  selected
                    ? "bg-violet-70 text-white font-medium"
                    : "text-gray-60 hover:bg-violet-20 hover:text-violet-70",
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames(" bg-white p-3")}>
              <ul>
                {posts.map(post => (
                  <li key={post.id} className="flex flex-col gap-3 relative rounded-md p-3">
                    <h3 className="text-gray-100">{post.title}</h3>

                    <div className="mt-1">{post.contents}</div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
