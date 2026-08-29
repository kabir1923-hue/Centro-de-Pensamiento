/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Proposito } from "./components/Proposito";
import { Libros } from "./components/Libros";
import { SocialBanner } from "./components/SocialBanner";
import { Opinion } from "./components/Opinion";
import { Noticias } from "./components/Noticias";
import { NavBanner } from "./components/NavBanner";
import { Stats } from "./components/Stats";
import { Hablemos } from "./components/Hablemos";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased selection:bg-brand-yellow selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <Proposito />
        <Libros />
        <SocialBanner />
        <Opinion />
        <Noticias />
        <NavBanner />
        <Stats />
        <Hablemos />
      </main>
      <Footer />
    </div>
  );
}

