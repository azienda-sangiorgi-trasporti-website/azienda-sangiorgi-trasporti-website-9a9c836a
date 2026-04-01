import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import fleetLineup from '@/assets/fleet-lineup-new.jpg';
import fleetTimber from '@/assets/fleet-timber-load.jpg';
import fleetAlpine from '@/assets/fleet-alpine.jpg';

const features = [
  { icon: Truck, text: 'Autotreni e bilici' },
  { icon: CheckCircle, text: 'Allestimenti centinati e aperti' },
  { icon: CheckCircle, text: 'Soluzioni per trasporto tronchi' },
  { icon: CheckCircle, text: 'Gru Palfinger per movimentazione legname' },
  { icon: CheckCircle, text: 'Manutenzione programmata' },
];

const galleryImages = [
  { src: fleetLineup, alt: 'Flotta operativa Sangiorgi - mezzi IVECO schierati', caption: 'Flotta operativa e mezzi dedicati' },
  { src: fleetTimber, alt: 'Autotreno Sangiorgi con carico di tronchi', caption: 'Autotreni e bilici per carichi lunghi' },
  { src: fleetAlpine, alt: 'Camion Sangiorgi con tronchi su tratta alpina invernale', caption: 'Operatività su tratte montane' },
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

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Main large image */}
              <div className="col-span-2 md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden shadow-card group">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover aspect-[3/4] md:aspect-auto md:h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-4 left-4 text-xs text-foreground/80 font-medium">
                  {galleryImages[0].caption}
                </span>
              </div>

              {/* Top right */}
              <div className="relative rounded-2xl overflow-hidden shadow-card group">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={340}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs text-foreground/80 font-medium">
                  {galleryImages[1].caption}
                </span>
              </div>

              {/* Bottom right */}
              <div className="relative rounded-2xl overflow-hidden shadow-card group">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={340}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs text-foreground/80 font-medium">
                  {galleryImages[2].caption}
                </span>
              </div>
            </div>

            {/* HVO Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-copper rounded-xl p-5 shadow-copper z-10">
              <div className="text-2xl font-bold text-primary-foreground">HVO</div>
              <div className="text-xs text-primary-foreground/80">Carburante alternativo</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
