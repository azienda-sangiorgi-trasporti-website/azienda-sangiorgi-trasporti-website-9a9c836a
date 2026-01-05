import { Shield, FileCheck, Building2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ComplianceSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Compliance Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conformità e Sicurezza
            </h2>
            <div className="divider-copper mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Operiamo nel pieno rispetto delle normative vigenti, con procedure consolidate per garantire sicurezza e affidabilità in ogni fase del trasporto.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Albo Autotrasportatori</h4>
                  <p className="text-sm text-muted-foreground">Regolarmente iscritti all'albo nazionale</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Procedure di Sicurezza</h4>
                  <p className="text-sm text-muted-foreground">Protocolli operativi rigorosi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Gestione Documentale</h4>
                  <p className="text-sm text-muted-foreground">Tracciabilità completa dei trasporti</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Copertura Territoriale</h4>
                  <p className="text-sm text-muted-foreground">Italia e internazionale su richiesta</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Company Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-background border border-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Dati Aziendali
              </h3>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <span className="text-sm text-muted-foreground">Ragione Sociale</span>
                  <p className="text-lg font-semibold text-foreground mt-1">
                    SANGIORGI ALESSANDRO TRASPORTI
                  </p>
                </div>
                
                <div className="pb-6 border-b border-border">
                  <span className="text-sm text-muted-foreground">Settore</span>
                  <p className="text-foreground mt-1">
                    Trasporto merci su strada conto terzi
                  </p>
                  <span className="inline-flex items-center px-3 py-1 mt-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    ATECO 49.41
                  </span>
                </div>
                
                <div className="pb-6 border-b border-border">
                  <span className="text-sm text-muted-foreground">Sede Legale</span>
                  <p className="text-foreground mt-1">
                    Corso Valsesia 166<br />
                    13045 Gattinara (VC), Italia
                  </p>
                </div>
                
                <div className="pb-6 border-b border-border">
                  <span className="text-sm text-muted-foreground">Unità Locale / Deposito</span>
                  <p className="text-foreground mt-1">
                    Via Torino 1<br />
                    13060 Roasio (VC)
                  </p>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">PEC</span>
                  <p className="text-foreground mt-1 break-all">
                    sangiorgialessandro@cert.cna.it
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
