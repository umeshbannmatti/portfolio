"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, personal } from "@/data/portfolio";
export function Navigation() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("home");
  const [firstName, ...lastNameParts] = personal.name.split(" ");
  const lastName = lastNameParts.join(" ");
  useEffect(() => { const sections = navigation.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[]; const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id); }, { rootMargin: "-25% 0px -60%", threshold: [0, .25, .6] }); sections.forEach((section) => observer.observe(section)); return () => observer.disconnect(); }, []);
  function toggleTheme() { const next = !document.documentElement.classList.contains("dark"); document.documentElement.classList.toggle("dark", next); document.documentElement.style.colorScheme = next ? "dark" : "light"; localStorage.setItem("theme", next ? "dark" : "light"); }
  return <nav className="site-nav" aria-label="Primary navigation"><div className="nav-inner"><a className="wordmark" href="#home" aria-label={`${personal.name}, home`}><strong>{firstName.toUpperCase()}</strong><span>{lastName.toUpperCase()}</span></a><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}><span className="menu-label">{open ? "Close" : "Menu"}</span>{open ? <X /> : <Menu />}</button><div id="mobile-menu" className={`nav-links ${open ? "is-open" : ""}`}>{navigation.map((item) => <a key={item.href} className={active === item.href.slice(1) ? "active" : ""} href={item.href} aria-current={active === item.href.slice(1) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}</div><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle color theme"><Moon className="theme-moon" size={20}/><Sun className="theme-sun" size={20}/></button></div></nav>;
}
