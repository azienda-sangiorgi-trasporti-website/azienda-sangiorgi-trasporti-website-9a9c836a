import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Award } from 'lucide-react';
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
              <a href="https://wa.me/393408107572?text=Buongiorno%2C%20avrei%20bisogno%20di%20un%20preventivo%20per%20un%20trasporto.%0A%0ATipo%20merce%3A%0ATratta%3A%0AData%3A%0AQuantit%C3%A0%3A" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
                >
                  <svg viewBox="0 0 32 32" className="w-5 h-5 text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.792 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.748.244-1.118 0-.215-.058-.43-.215-.6-.302-.343-2.092-1.087-2.493-1.087zm-2.42 7.34h-.025c-1.747 0-3.45-.488-4.927-1.405l-.348-.21-3.65.953.973-3.54-.227-.36a9.398 9.398 0 0 1-1.434-4.995c0-5.18 4.214-9.394 9.41-9.394 2.512 0 4.87.98 6.643 2.756a9.345 9.345 0 0 1 2.756 6.643c0 5.18-4.214 9.394-9.395 9.394zm7.71-17.087A10.85 10.85 0 0 0 16.69 4.25C10.673 4.25 5.78 9.144 5.78 15.16a10.81 10.81 0 0 0 1.453 5.444L5.69 26.25l5.788-1.518a10.85 10.85 0 0 0 5.21 1.327h.005c6.016 0 10.91-4.894 10.91-10.91 0-2.913-1.137-5.652-3.193-7.71z"/>
                  </svg>
                  Scrivici su WhatsApp
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
