"use client";
import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

const Home = () => {
  const [pokempnList, setPokemonList] = useState([]);

  const getPokemonData = async () => {
    const response = await axios.get(
      " https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const result = await response.data;
    console.log(result.results);

    setPokemonList(result.results);
  };

  return (
    <main className={styles.main}>
      <button onClick={getPokemonData}>Fetch Pokemon</button>
      <ul>
        {pokempnList.map((item, index) => {
          return (
          <li key={index}>
            {item.name.toUpperCase()}
          </li>);
        })}
      </ul>
    </main>
  );
};

export default Home;
