import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import fleetImage from '@/assets/fleet-lineup.jpg';

const features = [
  { icon: Truck, text: 'Autotreni e bilici' },
  { icon: CheckCircle, text: 'Allestimenti centinati e aperti' },
  { icon: CheckCircle, text: 'Soluzioni per trasporto tronchi' },
  { icon: CheckCircle, text: 'Manutenzione programmata' },
];

const FleetSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              La nostra flotta
            </h2>
            <div className="divider-copper mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Autotreni e bilici, centinati o aperti, per adattarci alle esigenze del carico. 
              Mezzi dedicati al trasporto legname e merci generiche, costantemente mantenuti.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Configurazioni adatte a diverse tipologie di carico, inclusi tronchi e materiali forestali.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Link to="/flotta">
              <Button variant="copper" size="lg" className="gap-2">
                Scopri la flotta
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={fleetImage}
                alt="Flotta Sangiorgi Trasporti - Autotreni e bilici"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-copper rounded-xl p-6 shadow-copper">
              <div className="text-3xl font-bold text-primary-foreground">
                2017
              </div>
              <div className="text-sm text-primary-foreground/80">
                Anno di fondazione
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
