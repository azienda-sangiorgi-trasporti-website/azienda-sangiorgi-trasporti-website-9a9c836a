import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                SANGIORGI
              </span>
              <span className="block text-sm font-medium tracking-widest text-primary uppercase mt-1">
                Alessandro Trasporti
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Trasporto merci su strada conto terzi con specializzazione nel trasporto legname.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4 text-primary" />
              <span>ATECO 49.41</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Servizi', href: '/servizi' },
                { name: 'Flotta', href: '/flotta' },
                { name: 'Trasporto Legname', href: '/legname' },
                { name: 'Qualità e Sicurezza', href: '/qualita' },
                { name: 'Chi Siamo', href: '/chi-siamo' },
                { name: 'Contatti', href: '/contatti' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <span className="text-muted-foreground">Sede Legale:</span>
                  <p className="text-foreground">Corso Valsesia 166</p>
                  <p className="text-foreground">13045 Gattinara (VC)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <span className="text-muted-foreground">Deposito:</span>
                  <p className="text-foreground">Via Torino 1</p>
                  <p className="text-foreground">13060 Roasio (VC)</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <span className="text-muted-foreground">PEC:</span>
                  <p className="text-foreground break-all">sangiorgialessandro@cert.cna.it</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm">
                  <span className="text-muted-foreground">Telefono:</span>
                  <a href="tel:+393408107572" className="text-foreground hover:text-primary transition-colors">+39 340 810 7572</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Dati Aziendali
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">Ragione Sociale:</span>
                <p>Sangiorgi Alessandro Trasporti</p>
              </li>
              <li>
                <span className="text-foreground font-medium">P.IVA:</span>
                <p>02635580026</p>
              </li>
              <li>
                <span className="text-foreground font-medium">Iscrizioni:</span>
                <p>Albo Autotrasportatori</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sangiorgi Alessandro Trasporti. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
