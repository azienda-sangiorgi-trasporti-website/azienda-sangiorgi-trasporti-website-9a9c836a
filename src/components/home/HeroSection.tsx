import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Award, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-truck-mountains.jpg';

const trustBadges = [
  { icon: Shield, text: 'Conto terzi (ATECO 49.41)' },
  { icon: Award, text: 'Iscritti Albo Autotrasportatori' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Camion Sangiorgi con carico di tronchi in montagna"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, hsla(220, 45%, 6%, 0.95) 0%, hsla(220, 45%, 6%, 0.8) 40%, hsla(220, 45%, 6%, 0.4) 70%, hsla(220, 45%, 6%, 0.2) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Trasporto Merci Professionale</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Trasporto legname e merci su strada, con{' '}
              <span className="text-gradient-copper">affidabilità da partner industriale</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Operiamo in Italia e su richiesta anche internazionale. Sicurezza del carico, puntualità e gestione documentale completa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contatti">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Richiedi Preventivo
                </Button>
              </Link>
              <a href="https://wa.me/393408107572?text=Buongiorno%2C%20vorrei%20un%20preventivo%20rapido.%0A%0ATipo%20merce%3A%0ATratta%3A%0AData%3A%0AQuantit%C3%A0%3A" target="_blank" rel="noopener noreferrer">
                <Button variant="outlineLight" size="xl" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Parla con Noi
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scopri di più</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
