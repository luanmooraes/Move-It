import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Inicio Move It</title>
      </Head>
      
      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div >
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          
          <div>
            <ChallengeBox />

          </div>
          
        </section>
      </CountdownProvider>
    </div>
  );
}

