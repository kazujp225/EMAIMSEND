import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import OutsourcingValue from '@/components/OutsourcingValue';
import SimpleSteps from '@/components/SimpleSteps';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import IndustryDemo from '@/components/IndustryDemo';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <OutsourcingValue />
        <SimpleSteps />
        <Features />
        <Comparison />
        <IndustryDemo />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
