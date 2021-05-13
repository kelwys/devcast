import { useState } from "react";
import Link from "next/link";
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { FiSun, FiMoon } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header() {
  const [currentTheme, setCurrentTheme] = useState('light')

  const currentDate = format(new Date(), "EEEEEE, dd 'de' MMMM", {
    locale: ptBR,
  });

  function toggleTheme() {
    const $html = document.querySelector('body')
    if (currentTheme === 'light') {
      $html.classList.toggle('dark-mode')
      setCurrentTheme('dark');
    }
    else {
      $html.classList.toggle('dark-mode')
      setCurrentTheme('light')
    }
  }
  
  return (
    <header className={styles.headerContainer}>
      <Link href={`/`}>
        <img src={
          currentTheme == 'light' ? 'logo-dark.svg' 
          : 'logo-light.svg'} 
          alt="DevCast"
        />
      </Link>
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <button type="button" onClick={toggleTheme}>
        {currentTheme === 'light' ? (
          <FiMoon size={24} color="#808080" />
        ) : (
          <FiSun size={24} color="#d0d2d6" />
        )}
      </button>
    </header>
  );
}