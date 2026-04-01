import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileCheck, Truck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', icon: FileCheck, title: 'Pianificazione', description: 'Organizzazione tratta, documentazione e tempistiche' },
  { number: '02', icon: MapPin, title: 'Dogana (partner)', description: 'Sdoganamento gestito da partner ufficiali in Svizzera' },
  { number: '03', icon: Truck, title: 'Consegna', description: 'Trasporto sicuro e puntuale a destinazione' },
];

const SwitzerlandSection = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">🇮🇹 → 🇨🇭</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specializzazione <span className="text-gradient-copper">Italia–Svizzera</span>
            </h2>
            <div className="divider-copper mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Tratte ricorrenti Italia–Svizzera con supporto documentale e sdoganamento gestito da partner.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ci avvaliamo di partner ufficiali dislocati sul territorio svizzero per garantire una gestione documentale e operativa efficiente e conforme.
            </p>

            <Link to="/contatti">
              <Button variant="copper" size="lg" className="gap-2">
                Richiedi preventivo Italia–Svizzera
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Mini-map / Route Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Stylized route */}
            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Processo operativo</span>
              </div>

              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />

                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                      className="relative flex items-start gap-5"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-copper flex items-center justify-center shrink-0 shadow-copper">
                        <step.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="pt-1">
                        <span className="text-xs font-bold text-primary mb-1 block">{step.number}</span>
                        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Route summary */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">Nord Italia</span>
                </div>
                <div className="flex-1 mx-4 border-t border-dashed border-primary/40" />
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">Svizzera</span>
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SwitzerlandSection;
