import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Mountain, FileCheck, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-truck-mountains.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
  {
    icon: TreePine,
    title: 'Specializzazione nel Settore',
    description: 'Anni di esperienza nel trasporto di legname ci permettono di gestire ogni tipologia di prodotto forestale con competenza.',
  },
  {
    icon: Mountain,
    title: 'Accessi Montani',
    description: 'Conosciamo le sfide delle tratte montane e degli accessi difficili. I nostri autisti hanno esperienza su percorsi impegnativi.',
  },
  {
    icon: FileCheck,
    title: 'Documentazione Completa',
    description: 'Gestiamo tutta la documentazione necessaria: DDT, certificazioni, report di consegna e eventuali pratiche specifiche.',
  },
  {
    icon: Clock,
    title: 'Tempistiche Ottimizzate',
    description: 'Pianificazione accurata dei tempi di carico e scarico per massimizzare l\'efficienza operativa.',
  },
];

const faqs = [
  {
    question: 'Che informazioni servono per ricevere un preventivo?',
    answer: 'Per quotare un trasporto legname abbiamo bisogno di: tipologia di legname (tronchi, segato, etc.), volume o peso stimato, località di carico e scarico, tempistiche desiderate. Più dettagli ci fornite, più preciso sarà il preventivo.',
  },
  {
    question: 'Come gestite il fissaggio del carico?',
    answer: 'Utilizziamo attrezzature specifiche per il trasporto legname: stanti, catene, cinghie e reti di contenimento. Ogni carico viene assicurato secondo le normative vigenti e verificato prima della partenza.',
  },
  {
    question: 'Potete raggiungere zone di carico in montagna?',
    answer: 'Sì, abbiamo esperienza consolidata su tratte montane e accessi forestali. Valutiamo sempre preventivamente l\'accessibilità per garantire un servizio sicuro e puntuale.',
  },
  {
    question: 'Quali documenti vengono forniti per il trasporto?',
    answer: 'Forniamo DDT (Documento di Trasporto), eventuale CMR per trasporti internazionali, report di consegna e foto del carico se richieste. Tutta la documentazione è disponibile anche in formato digitale.',
  },
  {
    question: 'Effettuate anche trasporti urgenti?',
    answer: 'Sì, possiamo gestire urgenze programmate. Contattaci per verificare la disponibilità e pianificare il trasporto nel minor tempo possibile.',
  },
];

const Legname = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Camion con carico di tronchi in montagna"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>
          <div className="relative container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <TreePine className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Specializzazione</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Trasporto <span className="text-gradient-copper">Legname</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Partner affidabile per segherie, industrie forestali e aziende del settore legno. Trasportiamo tronchi, semilavorati e prodotti forestali con competenza ed esperienza.
              </p>
              <Link to="/contatti">
                <Button variant="hero" size="xl" className="gap-2">
                  Richiedi Preventivo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perché scegliere noi per il legname
              </h2>
              <div className="divider-copper mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Non siamo un'azienda di trasporti generica. Il legname è la nostra specializzazione.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium group hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Transport */}
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
                  Cosa trasportiamo
                </h2>
                <div className="divider-copper mb-6" />
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Tronchi e legname grezzo</h4>
                    <p className="text-sm text-muted-foreground">Trasporto di tronchi interi dalle zone di taglio alle segherie e centri di lavorazione.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Legname segato e semilavorati</h4>
                    <p className="text-sm text-muted-foreground">Tavole, travi, pannelli e altri prodotti della prima lavorazione.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Biomassa e cippato</h4>
                    <p className="text-sm text-muted-foreground">Trasporto di materiale per centrali a biomassa e impianti di produzione pellet.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Prodotti forestali vari</h4>
                    <p className="text-sm text-muted-foreground">Pali, travature, legname per edilizia e altri prodotti del settore.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={heroImage}
                  alt="Trasporto legname"
                  className="rounded-2xl shadow-card w-full"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">FAQ</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Domande Frequenti
                </h2>
                <div className="divider-copper mx-auto" />
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-night">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto a spedire il tuo legname?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contattaci oggi per ricevere un preventivo personalizzato. Risponderemo entro 24 ore lavorative.
            </p>
            <Link to="/contatti">
              <Button variant="copper" size="xl" className="gap-2">
                Richiedi Preventivo
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

export default Legname;
