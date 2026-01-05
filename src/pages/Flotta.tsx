import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, CheckCircle, Gauge, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import fleetImage from '@/assets/fleet-lineup.jpg';
import trucksNight from '@/assets/trucks-night.jpg';

const standards = [
  {
    icon: Wrench,
    title: 'Manutenzione Programmata',
    description: 'Interventi regolari secondo le specifiche del costruttore per garantire affidabilità e sicurezza.',
  },
  {
    icon: Shield,
    title: 'Controlli di Sicurezza',
    description: 'Verifiche quotidiane pre-partenza su freni, luci, pneumatici e sistemi di fissaggio.',
  },
  {
    icon: Gauge,
    title: 'Efficienza Operativa',
    description: 'Mezzi moderni con consumi ottimizzati e ridotto impatto ambientale.',
  },
  {
    icon: Settings,
    title: 'Configurazioni Versatili',
    description: 'Allestimenti specifici per il trasporto legname e adattabili per merci generiche.',
  },
];

const Flotta = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={fleetImage}
              alt="Flotta Sangiorgi Trasporti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          </div>
          <div className="relative container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                La Nostra <span className="text-gradient-copper">Flotta</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mezzi dedicati e costantemente mantenuti per garantire trasporti sicuri e puntuali.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Fleet Gallery */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden aspect-video"
              >
                <img
                  src={fleetImage}
                  alt="Schieramento flotta Sangiorgi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-video"
              >
                <img
                  src={trucksNight}
                  alt="Camion Sangiorgi in operatività notturna"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fleet Description */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Mezzi Professionali per Ogni Esigenza
                </h2>
                <div className="divider-copper mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La nostra flotta è composta da mezzi pesanti appositamente attrezzati per il trasporto legname e configurabili per merci generiche. Ogni veicolo è sottoposto a manutenzione programmata e controlli periodici.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Investiamo costantemente nell'aggiornamento della flotta per garantire efficienza, sicurezza e rispetto delle normative ambientali vigenti.
                </p>
                
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Configurazioni Disponibili</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Semirimorchi per trasporto tronchi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Allestimenti per merci generiche</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Mezzi con gru su richiesta</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * Specifiche tecniche dettagliate disponibili su richiesta
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid gap-6">
                  {standards.map((standard, index) => (
                    <div key={standard.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <standard.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{standard.title}</h4>
                        <p className="text-sm text-muted-foreground">{standard.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vuoi saperne di più sulla nostra flotta?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattaci per informazioni dettagliate sui nostri mezzi e sulle configurazioni disponibili.
            </p>
            <Link to="/contatti">
              <Button variant="copper" size="xl" className="gap-2">
                Contattaci
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Flotta;
