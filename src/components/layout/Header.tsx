import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Flotta', href: '/flotta' },
  { name: 'Legname', href: '/legname' },
  { name: 'Qualità', href: '/qualita' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Contatti', href: '/contatti' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground">
                SANGIORGI
              </span>
              <span className="text-xs font-medium tracking-widest text-primary uppercase">
                Trasporti
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="mailto:sangiorgitrasporti@gmail.com">
              <Button variant="ghost" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </Button>
            </a>
            <a href="tel:+393408107572">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Chiama</span>
              </Button>
            </a>
            <a href="https://wa.me/393408107572?text=Buongiorno%2C%20vorrei%20un%20preventivo.%0A%0ATipo%20merce%3A%20(tronchi%2Flegname%2Faltro)%0ATratta%20(origine%20%E2%86%92%20destinazione%20%2B%20CAP)%3A%0APeso%2FVolume%20(se%20disponibile)%3A%0AData%20indicativa%3A%0ASvizzera%2Fdogana%3A%20s%C3%AC%2Fno%0ANote%3A" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-2 text-green-500 hover:text-green-400">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </Button>
            </a>
            <Link to="/contatti">
              <Button variant="copper" size="default">
                Richiedi Preventivo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+393408107572" className="w-full">
                  <Button variant="outlineCopper" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Chiama Ora
                  </Button>
                </a>
                <a href="https://wa.me/393408107572?text=Buongiorno%2C%20vorrei%20un%20preventivo.%0A%0ATipo%20merce%3A%20(tronchi%2Flegname%2Faltro)%0ATratta%20(origine%20%E2%86%92%20destinazione%20%2B%20CAP)%3A%0APeso%2FVolume%20(se%20disponibile)%3A%0AData%20indicativa%3A%0ASvizzera%2Fdogana%3A%20s%C3%AC%2Fno%0ANote%3A" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outlineCopper" className="w-full gap-2 text-green-500 border-green-500/30 hover:bg-green-500/10">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
                <Link to="/contatti" className="w-full">
                  <Button variant="copper" className="w-full">
                    Richiedi Preventivo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
