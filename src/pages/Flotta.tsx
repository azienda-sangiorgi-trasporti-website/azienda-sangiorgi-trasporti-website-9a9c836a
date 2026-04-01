import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, CheckCircle, Gauge, Settings, Truck, Satellite, MapPin, Clock, Grip } from 'lucide-react';

// Use Grip as a stand-in icon for crane
const CraneIcon = Grip;
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
    description: 'Autotreni e bilici con allestimenti centinati e aperti, adatti a diverse tipologie di carico.',
  },
];

const fleetTypes = [
  {
    icon: Truck,
    title: 'Autotreni e Bilici',
    description: 'Mezzi pesanti per trasporti nazionali e internazionali, con capacità di carico ottimali.',
  },
  {
    icon: CheckCircle,
    title: 'Allestimenti Centinati',
    description: 'Configurazioni chiuse per merci che richiedono protezione dalle intemperie.',
  },
  {
    icon: CheckCircle,
    title: 'Pianali Aperti',
    description: 'Ideali per il trasporto tronchi e carichi voluminosi con facilità di carico/scarico.',
  },
];

const operativityFeatures = [
  {
    icon: Satellite,
    title: 'Controllo Satellitare',
    description: 'Flotta tracciata e sotto controllo satellitare per una gestione operativa affidabile.',
  },
  {
    icon: MapPin,
    title: 'Monitoraggio Tratte',
    description: 'Pianificazione e monitoraggio delle tratte per ottimizzare tempi e risorse.',
  },
  {
    icon: Clock,
    title: 'Gestione Tempi',
    description: 'Aggiornamenti operativi e maggiore affidabilità nella gestione delle consegne.',
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
              alt="Flotta Sangiorgi Trasporti - Autotreni e bilici"
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
                Autotreni e bilici, centinati o aperti, per adattarci alle esigenze del carico. 
                Mezzi dedicati e costantemente mantenuti per trasporti sicuri e puntuali.
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
                  alt="Schieramento flotta Sangiorgi - bilici centinati"
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

        {/* Tipologia Mezzi */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tipologia Mezzi
              </h2>
              <div className="divider-copper mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Autotreni e bilici, centinati o aperti, per adattarci alle esigenze del carico, inclusi tronchi.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {fleetTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Dimensioni Mezzi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 mt-12"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Dimensioni Mezzi</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Autotreno</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Motrice <span className="text-foreground font-medium">6,40 m</span> + Rimorchio <span className="text-foreground font-medium">8,20 m</span></p>
                </div>
                <div className="p-5 rounded-xl bg-background border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Bilico</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">Semirimorchio <span className="text-foreground font-medium">13,60 m</span></p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Configurazioni selezionate in base al carico e alle esigenze operative.
              </p>
            </motion.div>

            {/* Gru Palfinger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 mt-8"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-copper flex items-center justify-center shrink-0">
                  <CraneIcon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Movimentazione con gru Palfinger per legname
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disponibilità di soluzioni operative con gru Palfinger per movimentazione e supporto alle fasi di carico/scarico (su richiesta e previa verifica).
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                * Specifiche tecniche dettagliate e numero mezzi disponibili su richiesta
              </p>
            </div>
          </div>
        </section>

        {/* Operatività e Controllo */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Operatività e Controllo
                </h2>
                <div className="divider-copper mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Flotta tracciata e sotto controllo satellitare per una gestione operativa affidabile. 
                  Monitoriamo le tratte per garantire pianificazione efficiente e comunicazione costante.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Questo si traduce in maggiore affidabilità, gestione ottimale dei tempi 
                  e visibilità sullo stato delle consegne.
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Satellite className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Tracciabilità Operativa Integrata
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid gap-4">
                  {operativityFeatures.map((feature, index) => (
                    <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fleet Description & Standards */}
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
                  Standard Operativi
                </h2>
                <div className="divider-copper mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  La nostra flotta è composta da mezzi pesanti appositamente attrezzati per il trasporto legname 
                  e configurabili per merci generiche. Ogni veicolo è sottoposto a manutenzione programmata 
                  e controlli periodici.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Investiamo costantemente nell'aggiornamento della flotta per garantire efficienza, 
                  sicurezza e rispetto delle normative ambientali vigenti.
                </p>
                
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Soluzioni per Trasporto Tronchi</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Pianali aperti con sistemi di fissaggio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Configurazioni centinate su richiesta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Mezzi con gru disponibili su richiesta</span>
                    </li>
                  </ul>
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
