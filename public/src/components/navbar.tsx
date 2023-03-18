import { useEffect } from "react";
import SwitchTheme from "./SwitchTheme";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const links = [
    { label: "Home", path: "/" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
  ];
  return (
    <div className="bg-base-100 shadow-xl">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <SwitchTheme />
              </li>
              {links.map((item, idx) => {
                return (<li key={idx}>
                  <Link href={item.path}>{item.label}</Link>
                </li>)
              })}
            </ul>
          </div>
          <Link href={"/"}>
            <button className="btn btn-ghost normal-case text-xl flex gap-x-4">
              <img className="object-contain w-8" src="/images/logo.jpg" />
              Fix Logistic
            </button>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links.map((item, idx) => {
                return (<li key={idx}>
                  <Link href={item.path}>{item.label}</Link>
                </li>)
              })}
              <li>
                <SwitchTheme />
              </li>
            </ul>
          </div>
          {/* <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"></img>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
