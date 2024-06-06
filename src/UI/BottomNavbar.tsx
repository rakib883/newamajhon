import Link from 'next/link';
import React from 'react';

function BottomNavbar() {
  const menu = [
    { name: "home", id: 1, pathName: "/" },
    { name: "shop", id: 2, pathName: "/shop" },
    { name: "blog", id: 3, pathName: "/blog" },
    { name: "sale", id: 4, pathName: "/sale" },
    { name: "about", id: 5, pathName: "/about" },
  ];

  return (
    <div>
      <div className="menu bg-[#E0F3FF] py-2 w-full">
        <ul className="flex gap-4 font-mainFont uppercase mx-w-md justify-center items-center text-sm mx-8 text-center">
          {menu.map((item: any) => (
            <li key={item.id}>
              <Link className="cursor-pointer font-semibold " href={item.pathName}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BottomNavbar;
