const supportedLanguages = ['it', 'es', 'en', 'de'];

const translations = {
  it: {
    nav: {
      servizi: 'Servizi',
      chiSono: 'Chi Sono',
      processo: 'Come Funziona',
      testimonianze: 'Testimonianze',
      prenota: 'Prenota Consulenza'
    },
    hero: {
      badge: 'Odontotecnico Certificato',
      title: 'Protesi dentali<br>su misura,<br><em>direttamente da te</em>',
      desc: 'Qualità artigianale di laboratorio portata al tuo studio o a domicilio. Flessibilità, precisione e un servizio personalizzato che il mercato tradizionale non offre.',
      ctaPrimary: 'Richiedi Consulenza',
      ctaSecondary: 'Scopri i servizi',
      float1Title: 'Qualità',
      float1Subtitle: 'Materiali CE',
      float2Title: 'Consegna',
      float2Subtitle: 'Entro 48h'
    },
    stats: {
      exp: 'Anni di esperienza',
      protesi: 'Protesi realizzate',
      materiali: 'Materiali certificati',
      tempo: 'Tempi di risposta'
    },
    about: {
      badge: 'Chi Sono',
      title: 'Un professionista <em>vicino a te</em>, non solo un laboratorio',
      p1: 'Sono un odontotecnico con oltre 15 anni di esperienza nel settore. Ho scelto di offrire un servizio diverso: portare la qualità del laboratorio direttamente al tuo studio odontoiatrico o, quando necessario, al domicilio del paziente.',
      p2: 'Lavoro con materiali certificati CE, strumentazione di precisione e un approccio su misura per ogni caso clinico. La flessibilità è il mio punto di forza.',
      quality1: 'Iscritto all\'Albo degli Odontotecnici — N. 12345/IT',
      quality2: 'Materiali 100% certificati CE e biocompatibili',
      quality3: 'Disponibilità flessibile: mattina, pomeriggio, sabato',
      quality4: 'Servizio domiciliare per pazienti con difficoltà di mobilità'
    },
    services: {
      badge: 'Cosa Offro',
      title: 'Servizi <em>specializzati</em>',
      cta: 'Richiedi un preventivo',
      card1: {
        title: 'Protesi Fissa',
        desc: 'Corone, ponti e faccette in ceramica, zirconio o metallo-ceramica. Realizzazione artigianale con precisione millimetrica e colori personalizzati.',
        badge: 'Alta Estetica'
      },
      card2: {
        title: 'Protesi Mobile',
        desc: 'Protesi totali e parziali mobili, scheletrati in metallo o resina acrilica. Riparazioni e rilievi funzionali anche a domicilio del paziente.',
        badge: 'Servizio Domiciliare'
      },
      card3: {
        title: 'Implantoprotesi',
        desc: 'Sovrastrutture su impianti: corone singole, protesi avvitate e cementate. Compatibile con tutti i sistemi implantari presenti sul mercato.',
        badge: 'Alta Tecnologia'
      },
      card4: {
        title: 'Apparecchi Ortodontici',
        desc: 'Placche ortodontiche rimovibili, retainer e dispositivi funzionali per bambini e adulti. Realizzazione in resine biocompatibili certificate.',
        badge: 'Pediatrico & Adulti'
      },
      card5: {
        title: 'Bite e Dispositivi',
        desc: 'Bite notturni per bruxismo, mascherine sportive personalizzate e dispositivi per apnea notturna. Consegna entro 48 ore.',
        badge: 'Consegna Rapida'
      },
      card6: {
        title: 'Consulenza & Urgenze',
        desc: 'Riparazioni urgenti di protesi, rilavorazioni e consulenze tecniche per casi complessi. Disponibilità anche nel fine settimana su prenotazione.',
        badge: 'Disponibile H24'
      }
    },
    why: {
      badge: 'Perché Scegliermi',
      title: 'La differenza che <em>fa la differenza</em>',
      intro: 'In un mercato standardizzato, offro un approccio artigianale e personalizzato che i grandi laboratori non possono garantire.',
      item1: {
        title: 'Qualità Certificata',
        desc: 'Lavoro esclusivamente con materiali certificati CE. Ogni protesi è accompagnata da documentazione completa di conformità e tracciabilità.'
      },
      item2: {
        title: 'Tempi Certi',
        desc: 'Rispetto dei tempi concordati è una priorità. Ricevi aggiornamenti sull\'avanzamento del lavoro e notifiche anticipate in caso di variazioni.'
      },
      item3: {
        title: 'Servizio a Domicilio',
        desc: 'Mi sposto al tuo studio o dal paziente. Elimina intermediari, riduci i costi logistici e offri un servizio premium ai tuoi pazienti.'
      },
      item4: {
        title: 'Flessibilità Totale',
        desc: 'Lavoro con piccoli studi, cliniche indipendenti e privati. Mi adatto ai tuoi ritmi, non il contrario. Disponibile anche nei weekend.'
      }
    },
    process: {
      badge: 'Come Funziona',
      title: 'Un processo <em>semplice</em> e trasparente',
      intro: 'Dal primo contatto alla consegna, ogni passaggio è chiaro e concordato con te in anticipo.',
      step1: {
        title: 'Contatto',
        desc: 'Mi contatti via telefono, email o WhatsApp. Descrivi il caso e concordiamo un primo appuntamento.'
      },
      step2: {
        title: 'Consultazione',
        desc: 'Visito il tuo studio o il paziente. Raccolgo impronte, misure e documentazione fotografica del caso.'
      },
      step3: {
        title: 'Realizzazione',
        desc: 'Realizzo la protesi con materiali certificati. Ti aggiorno sull\'avanzamento e gestisco eventuali modifiche.'
      },
      step4: {
        title: 'Consegna',
        desc: 'Consegno personalmente il lavoro con tutta la documentazione. Sono disponibile per aggiustamenti post-consegna.'
      }
    },
    testimonials: {
      badge: 'Testimonianze',
      title: 'Cosa dicono <em>i professionisti</em> che lavorano con me',
      intro: 'La fiducia dei dentisti e dei pazienti è la mia miglior ricompensa.',
      card1: {
        text: 'Lavoro con lui da tre anni. La qualità delle sue protesi ceramiche è notevole, e la puntualità nelle consegne mi ha permesso di ottimizzare i miei appuntamenti senza sorprese.',
        name: 'Dr. Marco Rossi',
        role: 'Odontoiatra, Milano'
      },
      card2: {
        text: 'Servizio completamente diverso dai laboratori tradizionali. Viene lui da noi, capisce le esigenze estetiche dei pazienti, e il risultato finale è sempre eccellente. Altamente raccomandato.',
        name: 'Dr.ssa Anna Bianchi',
        role: 'Studio Dentistico, Roma'
      },
      card3: {
        text: 'Avevo urgenza di riparare una protesi rotta prima di partire. È venuto a casa mia in meno di 24 ore. Professionalità assoluta e persona di grande fiducia.',
        name: 'Giuseppe Ferri',
        role: 'Paziente, Torino'
      }
    },
    contact: {
      badge: 'Contatti',
      title: 'Iniziamo a <em>collaborare</em>',
      formTitle: 'Richiedi una consulenza gratuita',
      nomeLabel: 'Nome',
      nomePlaceholder: 'Mario Rossi',
      professioneLabel: 'Professione',
      professioneOptionDefault: 'Seleziona...',
      professioneOption1: 'Odontoiatra',
      professioneOption2: 'Clinica Dentistica',
      professioneOption3: 'Paziente Privato',
      professioneOption4: 'Altro',
      emailLabel: 'Email',
      emailPlaceholder: 'mario@studio.it',
      telefonoLabel: 'Telefono',
      telefonoPlaceholder: '+39 333 123 4567',
      servizioLabel: 'Servizio Richiesto',
      servizioOptionDefault: 'Seleziona un servizio...',
      servizioOption1: 'Protesi Fissa',
      servizioOption2: 'Protesi Mobile',
      servizioOption3: 'Implantoprotesi',
      servizioOption4: 'Apparecchi Ortodontici',
      servizioOption5: 'Bite / Dispositivi',
      servizioOption6: 'Urgenza / Riparazione',
      servizioOption7: 'Consulenza Generale',
      messaggioLabel: 'Descrivi il caso',
      messaggioPlaceholder: 'Descrivi brevemente il caso clinico o la tua necessità...',
      submit: 'Invia Richiesta',
      infoTitle: 'Contattami direttamente',
      infoDesc: 'Compila il modulo o raggiungimi direttamente. Rispondo entro 24 ore lavorative. Disponibile anche per urgenze.',
      infoCard1Label: 'Telefono & WhatsApp',
      infoCard1Value: '+39 333 456 7890',
      infoCard1Sub: 'Disponibile lun–sab, 8:00–19:00',
      infoCard2Label: 'Email',
      infoCard2Value: 'info@odontart.it',
      infoCard2Sub: 'Risposta garantita entro 24h',
      infoCard3Label: 'Zona di Intervento',
      infoCard3Value: 'Roma e provincia',
      infoCard3Sub: 'Su richiesta: tutto il Lazio e dintorni',
      infoCard4Label: 'Orari Flessibili',
      infoCard4Value: 'Lun – Sab, 7:30 – 20:00',
      infoCard4Sub: 'Urgenze: anche domenica su appuntamento',
      trust1: 'Albo ODT Certificato',
      trust2: 'Materiali CE',
      trust3: 'Servizio Domiciliare',
      trust4: 'Tempi Garantiti'
    },
    footer: {
      privacy: 'Privacy Policy',
      copy: '© 2025 OdontArt — P.IVA IT12345678901'
    },
    alert: {
      missingFields: 'Per favore compila almeno nome ed email.',
      success: 'Grazie {name}! La tua richiesta è stata inviata. Ti contatterò entro 24 ore.'
    }
  },
  es: {
    nav: {
      servizi: 'Servicios',
      chiSono: 'Quién Soy',
      processo: 'Cómo Funciona',
      testimonianze: 'Testimonios',
      prenota: 'Reserva Consulta'
    },
    hero: {
      badge: 'Técnico Dental Certificado',
      title: 'Prótesis dentales<br>a medida,<br><em>directamente para ti</em>',
      desc: 'Calidad artesanal de laboratorio llevada a tu clínica o domicilio. Flexibilidad, precisión y un servicio personalizado que el mercado tradicional no ofrece.',
      ctaPrimary: 'Solicitar Consulta',
      ctaSecondary: 'Descubre los servicios',
      float1Title: 'Calidad',
      float1Subtitle: 'Materiales CE',
      float2Title: 'Entrega',
      float2Subtitle: 'En 48h'
    },
    stats: {
      exp: 'Años de experiencia',
      protesi: 'Prótesis realizadas',
      materiali: 'Materiales certificados',
      tempo: 'Tiempos de respuesta'
    },
    about: {
      badge: 'Quién Soy',
      title: 'Un profesional <em>cerca de ti</em>, no solo un laboratorio',
      p1: 'Soy técnico dental con más de 15 años de experiencia en el sector. He elegido ofrecer un servicio diferente: llevar la calidad del laboratorio directamente a tu clínica dental o, cuando sea necesario, al domicilio del paciente.',
      p2: 'Trabajo con materiales certificados CE, instrumentación de precisión y un enfoque a medida para cada caso clínico. La flexibilidad es mi punto fuerte.',
      quality1: 'Inscrito en el Colegio de Técnicos Dentales — N. 12345/IT',
      quality2: 'Materiales 100% certificados CE y biocompatibles',
      quality3: 'Disponibilidad flexible: mañana, tarde, sábado',
      quality4: 'Servicio a domicilio para pacientes con movilidad reducida'
    },
    services: {
      badge: 'Qué Ofrezco',
      title: 'Servicios <em>especializados</em>',
      cta: 'Solicitar presupuesto',
      card1: {
        title: 'Prótesis Fija',
        desc: 'Coronas, puentes y carillas en cerámica, zirconio o metal-cerámica. Fabricación artesanal con precisión milimétrica y colores personalizados.',
        badge: 'Alta Estética'
      },
      card2: {
        title: 'Prótesis Removible',
        desc: 'Prótesis totales y parciales removibles, esqueléticos en metal o resina acrílica. Reparaciones y tomas funcionales también a domicilio.',
        badge: 'Servicio a Domicilio'
      },
      card3: {
        title: 'Implantoprótesis',
        desc: 'Sobreestructuras sobre implantes: coronas individuales, prótesis atornilladas y cementadas. Compatible con todos los sistemas implantológicos del mercado.',
        badge: 'Alta Tecnología'
      },
      card4: {
        title: 'Aparatos Ortodónticos',
        desc: 'Placas ortodónticas removibles, retenedores y dispositivos funcionales para niños y adultos. Fabricación en resinas biocompatibles certificadas.',
        badge: 'Pediátrico y Adultos'
      },
      card5: {
        title: 'Férulas y Dispositivos',
        desc: 'Férulas para bruxismo, máscaras deportivas personalizadas y dispositivos para apnea del sueño. Entrega en 48 horas.',
        badge: 'Entrega Rápida'
      },
      card6: {
        title: 'Consulta y Urgencias',
        desc: 'Reparaciones urgentes de prótesis, retrabajos y consultas técnicas para casos complejos. Disponible también los fines de semana con cita previa.',
        badge: 'Disponible 24h'
      }
    },
    why: {
      badge: 'Por Qué Elegirme',
      title: 'La diferencia que <em>marca la diferencia</em>',
      intro: 'En un mercado estandarizado, ofrezco un enfoque artesanal y personalizado que los grandes laboratorios no pueden garantizar.',
      item1: {
        title: 'Calidad Certificada',
        desc: 'Trabajo exclusivamente con materiales certificados CE. Cada prótesis se acompaña de documentación completa de conformidad y trazabilidad.'
      },
      item2: {
        title: 'Plazos Seguros',
        desc: 'Cumplir los plazos acordados es una prioridad. Recibe actualizaciones sobre el avance del trabajo y avisos anticipados en caso de cambios.'
      },
      item3: {
        title: 'Servicio a Domicilio',
        desc: 'Me desplazo a tu clínica o al paciente. Elimina intermediarios, reduce costes logísticos y ofrece un servicio premium a tus pacientes.'
      },
      item4: {
        title: 'Flexibilidad Total',
        desc: 'Trabajo con pequeños estudios, clínicas independientes y particulares. Me adapto a tus ritmos, no al revés. Disponible también en fines de semana.'
      }
    },
    process: {
      badge: 'Cómo Funciona',
      title: 'Un proceso <em>simple</em> y transparente',
      intro: 'Desde el primer contacto hasta la entrega, cada paso es claro y acordado contigo por adelantado.',
      step1: {
        title: 'Contacto',
        desc: 'Me contactas por teléfono, email o WhatsApp. Describe el caso y acordamos una primera cita.'
      },
      step2: {
        title: 'Consulta',
        desc: 'Visito tu clínica o al paciente. Recojo impresiones, medidas y documentación fotográfica del caso.'
      },
      step3: {
        title: 'Fabricación',
        desc: 'Fabricar la prótesis con materiales certificados. Te actualizo sobre el avance y gestiono posibles modificaciones.'
      },
      step4: {
        title: 'Entrega',
        desc: 'Entrego personalmente el trabajo con toda la documentación. Estoy disponible para ajustes posteriores a la entrega.'
      }
    },
    testimonials: {
      badge: 'Testimonios',
      title: 'Qué dicen <em>los profesionales</em> que trabajan conmigo',
      intro: 'La confianza de los dentistas y pacientes es mi mejor recompensa.',
      card1: {
        text: 'Trabajo con él desde hace tres años. La calidad de sus prótesis cerámicas es notable, y la puntualidad en las entregas me ha permitido optimizar mis citas sin sorpresas.',
        name: 'Dr. Marco Rossi',
        role: 'Odontólogo, Milán'
      },
      card2: {
        text: 'Servicio totalmente diferente a los laboratorios tradicionales. Viene él a nosotros, entiende las necesidades estéticas de los pacientes y el resultado final siempre es excelente. Muy recomendado.',
        name: 'Dra. Anna Bianchi',
        role: 'Clínica Dental, Roma'
      },
      card3: {
        text: 'Tenía urgencia de reparar una prótesis rota antes de viajar. Vino a mi casa en menos de 24 horas. Profesionalidad absoluta y persona de gran confianza.',
        name: 'Giuseppe Ferri',
        role: 'Paciente, Turín'
      }
    },
    contact: {
      badge: 'Contactos',
      title: 'Empecemos a <em>colaborar</em>',
      formTitle: 'Solicita una consulta gratuita',
      nomeLabel: 'Nombre',
      nomePlaceholder: 'Mario Rossi',
      professioneLabel: 'Profesión',
      professioneOptionDefault: 'Selecciona...',
      professioneOption1: 'Odontólogo',
      professioneOption2: 'Clínica Dental',
      professioneOption3: 'Paciente Privado',
      professioneOption4: 'Otro',
      emailLabel: 'Email',
      emailPlaceholder: 'mario@clinica.es',
      telefonoLabel: 'Teléfono',
      telefonoPlaceholder: '+34 600 123 456',
      servizioLabel: 'Servicio Solicitado',
      servizioOptionDefault: 'Selecciona un servicio...',
      servizioOption1: 'Prótesis Fija',
      servizioOption2: 'Prótesis Removible',
      servizioOption3: 'Implantoprótesis',
      servizioOption4: 'Aparatos Ortodónticos',
      servizioOption5: 'Férulas / Dispositivos',
      servizioOption6: 'Urgencia / Reparación',
      servizioOption7: 'Consulta General',
      messaggioLabel: 'Describe el caso',
      messaggioPlaceholder: 'Describe brevemente el caso clínico o tu necesidad...',
      submit: 'Enviar Solicitud',
      infoTitle: 'Contáctame directamente',
      infoDesc: 'Completa el formulario o contáctame directamente. Respondo dentro de 24 horas laborables. Disponible también para urgencias.',
      infoCard1Label: 'Teléfono & WhatsApp',
      infoCard1Value: '+39 333 456 7890',
      infoCard1Sub: 'Disponible lun–sáb, 8:00–19:00',
      infoCard2Label: 'Correo',
      infoCard2Value: 'info@odontart.it',
      infoCard2Sub: 'Respuesta garantizada en 24h',
      infoCard3Label: 'Zona de Trabajo',
      infoCard3Value: 'Roma y provincia',
      infoCard3Sub: 'Bajo petición: todo el Lacio y alrededores',
      infoCard4Label: 'Horarios Flexibles',
      infoCard4Value: 'Lun – Sab, 7:30 – 20:00',
      infoCard4Sub: 'Urgencias: también domingo con cita previa',
      trust1: 'Colegio ODT Certificado',
      trust2: 'Materiales CE',
      trust3: 'Servicio a Domicilio',
      trust4: 'Tiempos Garantizados'
    },
    footer: {
      privacy: 'Política de Privacidad',
      copy: '© 2025 OdontArt — P.IVA IT12345678901'
    },
    alert: {
      missingFields: 'Por favor completa al menos nombre y email.',
      success: 'Gracias {name}! Tu solicitud ha sido enviada. Te contactaré en 24 horas.'
    }
  },
  en: {
    nav: {
      servizi: 'Services',
      chiSono: 'About',
      processo: 'How it Works',
      testimonianze: 'Testimonials',
      prenota: 'Book Consultation'
    },
    hero: {
      badge: 'Certified Dental Technician',
      title: 'Custom dental prostheses<br>tailored for you,<br><em>delivered directly</em>',
      desc: 'Laboratory craftsmanship brought to your practice or home. Flexibility, precision and a personalized service that traditional providers can’t match.',
      ctaPrimary: 'Request Consultation',
      ctaSecondary: 'Explore Services',
      float1Title: 'Quality',
      float1Subtitle: 'CE Materials',
      float2Title: 'Delivery',
      float2Subtitle: 'Within 48h'
    },
    stats: {
      exp: 'Years of experience',
      protesi: 'Prostheses completed',
      materiali: 'Certified materials',
      tempo: 'Response time'
    },
    about: {
      badge: 'About',
      title: 'A professional <em>close to you</em>, not just a lab',
      p1: 'I am a dental technician with over 15 years of experience in the field. I chose to offer a different service: bringing laboratory quality directly to your dental office or, when needed, to the patient’s home.',
      p2: 'I work with CE-certified materials, precision instruments and a tailored approach for every clinical case. Flexibility is my greatest strength.',
      quality1: 'Registered in the Dental Technicians’ Register — No. 12345/IT',
      quality2: '100% CE-certified and biocompatible materials',
      quality3: 'Flexible availability: morning, afternoon, Saturday',
      quality4: 'Home service for patients with mobility challenges'
    },
    services: {
      badge: 'What I Offer',
      title: 'Specialized <em>services</em>',
      cta: 'Request a quote',
      card1: {
        title: 'Fixed Prosthetics',
        desc: 'Crowns, bridges and veneers in ceramic, zirconia or metal-ceramic. Handcrafted with millimeter precision and custom shading.',
        badge: 'High Aesthetics'
      },
      card2: {
        title: 'Removable Prosthetics',
        desc: 'Full and partial removable prostheses, metal frameworks or acrylic resin. Repairs and functional impressions also at the patient’s home.',
        badge: 'Home Service'
      },
      card3: {
        title: 'Implant Prosthetics',
        desc: 'Implant-supported structures: single crowns, screw-retained and cemented prostheses. Compatible with all major implant systems.',
        badge: 'High Tech'
      },
      card4: {
        title: 'Orthodontic Appliances',
        desc: 'Removable orthodontic plates, retainers and functional devices for children and adults. Made with certified biocompatible resins.',
        badge: 'Pediatric & Adult'
      },
      card5: {
        title: 'Bite Guards & Devices',
        desc: 'Night guards for bruxism, custom sports mouthguards and sleep apnea devices. Delivered within 48 hours.',
        badge: 'Fast Delivery'
      },
      card6: {
        title: 'Consultation & Urgencies',
        desc: 'Urgent prosthesis repairs, refinements and technical consultations for complex cases. Weekend availability by appointment.',
        badge: 'Available 24/7'
      }
    },
    why: {
      badge: 'Why Choose Me',
      title: 'The difference that <em>makes the difference</em>',
      intro: 'In a standardized market, I offer a handcrafted and personalized approach that large labs cannot guarantee.',
      item1: {
        title: 'Certified Quality',
        desc: 'I work exclusively with CE-certified materials. Every prosthesis is accompanied by complete compliance and traceability documentation.'
      },
      item2: {
        title: 'Reliable Timing',
        desc: 'Meeting agreed deadlines is a priority. Receive updates on progress and early notifications in case of changes.'
      },
      item3: {
        title: 'Home Service',
        desc: 'I travel to your practice or the patient. Eliminate intermediaries, reduce logistics costs and offer premium service to your patients.'
      },
      item4: {
        title: 'Total Flexibility',
        desc: 'I work with small practices, independent clinics and private patients. I adapt to your rhythms, not the other way around. Available on weekends too.'
      }
    },
    process: {
      badge: 'How it Works',
      title: 'A <em>simple</em> and transparent process',
      intro: 'From first contact to delivery, every step is clear and agreed with you in advance.',
      step1: {
        title: 'Contact',
        desc: 'Reach out by phone, email or WhatsApp. Describe the case and we schedule an initial appointment.'
      },
      step2: {
        title: 'Consultation',
        desc: 'I visit your office or the patient. I collect impressions, measurements and case photos.'
      },
      step3: {
        title: 'Production',
        desc: 'I produce the prosthesis with certified materials. I keep you updated on progress and manage any changes.'
      },
      step4: {
        title: 'Delivery',
        desc: 'I personally deliver the work with all documentation. I am available for adjustments after delivery.'
      }
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What <em>professionals</em> who work with me say',
      intro: 'The trust of dentists and patients is my best reward.',
      card1: {
        text: 'I have worked with him for three years. The quality of his ceramic prostheses is remarkable, and the punctuality of deliveries has allowed me to optimize my appointments without surprises.',
        name: 'Dr. Marco Rossi',
        role: 'Dentist, Milan'
      },
      card2: {
        text: 'A completely different service from traditional labs. He comes to us, understands the aesthetic needs of patients, and the final result is always excellent. Highly recommended.',
        name: 'Dr. Anna Bianchi',
        role: 'Dental Practice, Rome'
      },
      card3: {
        text: 'I urgently needed a broken prosthesis repaired before traveling. He came to my home in less than 24 hours. Absolute professionalism and a very trusted person.',
        name: 'Giuseppe Ferri',
        role: 'Patient, Turin'
      }
    },
    contact: {
      badge: 'Contact',
      title: 'Let’s <em>collaborate</em>',
      formTitle: 'Request a free consultation',
      nomeLabel: 'Name',
      nomePlaceholder: 'Mario Rossi',
      professioneLabel: 'Profession',
      professioneOptionDefault: 'Select...',
      professioneOption1: 'Dentist',
      professioneOption2: 'Dental Clinic',
      professioneOption3: 'Private Patient',
      professioneOption4: 'Other',
      emailLabel: 'Email',
      emailPlaceholder: 'mario@clinic.com',
      telefonoLabel: 'Phone',
      telefonoPlaceholder: '+39 333 123 4567',
      servizioLabel: 'Requested Service',
      servizioOptionDefault: 'Select a service...',
      servizioOption1: 'Fixed Prosthetics',
      servizioOption2: 'Removable Prosthetics',
      servizioOption3: 'Implant Prosthetics',
      servizioOption4: 'Orthodontic Appliances',
      servizioOption5: 'Bite Guards / Devices',
      servizioOption6: 'Urgency / Repair',
      servizioOption7: 'General Consultation',
      messaggioLabel: 'Describe the case',
      messaggioPlaceholder: 'Briefly describe the clinical case or your need...',
      submit: 'Send Request',
      infoTitle: 'Contact me directly',
      infoDesc: 'Fill out the form or reach out directly. I reply within 24 working hours. Also available for urgencies.',
      infoCard1Label: 'Phone & WhatsApp',
      infoCard1Value: '+39 333 456 7890',
      infoCard1Sub: 'Available Mon–Sat, 8:00–19:00',
      infoCard2Label: 'Email',
      infoCard2Value: 'info@odontart.it',
      infoCard2Sub: 'Guaranteed response within 24h',
      infoCard3Label: 'Coverage Area',
      infoCard3Value: 'Rome and province',
      infoCard3Sub: 'On request: all Lazio and surroundings',
      infoCard4Label: 'Flexible Hours',
      infoCard4Value: 'Mon – Sat, 7:30 – 20:00',
      infoCard4Sub: 'Urgencies: also Sunday by appointment',
      trust1: 'Certified ODT Register',
      trust2: 'CE Materials',
      trust3: 'Home Service',
      trust4: 'Guaranteed Timing'
    },
    footer: {
      privacy: 'Privacy Policy',
      copy: '© 2025 OdontArt — P.IVA IT12345678901'
    },
    alert: {
      missingFields: 'Please complete at least name and email.',
      success: 'Thank you {name}! Your request has been sent. I will contact you within 24 hours.'
    }
  },
  de: {
    nav: {
      servizi: 'Leistungen',
      chiSono: 'Über mich',
      processo: 'Ablauf',
      testimonianze: 'Referenzen',
      prenota: 'Beratung Buchen'
    },
    hero: {
      badge: 'Zertifizierter Zahntechniker',
      title: 'Maßgeschneiderte Zahnprothesen<br>direkt für dich,<br><em>auf Wunsch geliefert</em>',
      desc: 'Handwerkliche Laborqualität in Ihre Praxis oder nach Hause gebracht. Flexibilität, Präzision und ein persönlicher Service, den der traditionelle Markt nicht bietet.',
      ctaPrimary: 'Beratung Anfordern',
      ctaSecondary: 'Leistungen Entdecken',
      float1Title: 'Qualität',
      float1Subtitle: 'CE-Materialien',
      float2Title: 'Lieferung',
      float2Subtitle: 'In 48h'
    },
    stats: {
      exp: 'Jahre Erfahrung',
      protesi: 'Prothesen gefertigt',
      materiali: 'Zertifizierte Materialien',
      tempo: 'Antwortzeit'
    },
    about: {
      badge: 'Über mich',
      title: 'Ein Profi <em>in deiner Nähe</em>, nicht nur ein Labor',
      p1: 'Ich bin Zahntechniker mit über 15 Jahren Erfahrung. Ich habe mich entschieden, einen anderen Service anzubieten: Laborqualität direkt in Ihre Zahnarztpraxis oder bei Bedarf zum Patienten nach Hause zu bringen.',
      p2: 'Ich arbeite mit CE-zertifizierten Materialien, Präzisionsinstrumenten und einem maßgeschneiderten Ansatz für jeden klinischen Fall. Flexibilität ist meine Stärke.',
      quality1: 'Eingetragen im Register der Zahntechniker — Nr. 12345/IT',
      quality2: '100 % CE-zertifizierte und biokompatible Materialien',
      quality3: 'Flexible Verfügbarkeit: Vormittag, Nachmittag, Samstag',
      quality4: 'Hausbesuch-Service für Patienten mit eingeschränkter Mobilität'
    },
    services: {
      badge: 'Was ich biete',
      title: 'Spezialisierte <em>Leistungen</em>',
      cta: 'Angebot anfordern',
      card1: {
        title: 'Festsitzender Zahnersatz',
        desc: 'Kronen, Brücken und Veneers aus Keramik, Zirkon oder Metall-Keramik. Handgefertigt mit Millimeterpräzision und individuellen Farben.',
        badge: 'Hohe Ästhetik'
      },
      card2: {
        title: 'Herausnehmbarer Zahnersatz',
        desc: 'Total- und Teilprothesen, Gerüste aus Metall oder Acrylharz. Reparaturen und funktionelle Abdrücke auch beim Patienten zu Hause.',
        badge: 'Hausbesuch-Service'
      },
      card3: {
        title: 'Implantatprothetik',
        desc: 'Auf Implantaten befestigte Suprakonstruktionen: Einzelkronen, verschraubte und zementierte Prothesen. Kompatibel mit allen gängigen Implantatsystemen.',
        badge: 'Hightech'
      },
      card4: {
        title: 'Kieferorthopädische Geräte',
        desc: 'Herausnehmbare kieferorthopädische Platten, Retainer und Funktionsgeräte für Kinder und Erwachsene. Hergestellt aus zertifizierten biokompatiblen Harzen.',
        badge: 'Kinder & Erwachsene'
      },
      card5: {
        title: 'Schienensysteme & Geräte',
        desc: 'Aufbissschienen bei Bruxismus, individuelle Sportmundschützer und Geräte bei Schlafapnoe. Lieferung innerhalb von 48 Stunden.',
        badge: 'Schnelle Lieferung'
      },
      card6: {
        title: 'Beratung & Notfälle',
        desc: 'Dringende Prothesenreparaturen, Nacharbeiten und technische Beratungen für komplexe Fälle. Wochenende auf Termin verfügbar.',
        badge: '24/7 Verfügbar'
      }
    },
    why: {
      badge: 'Warum mich wählen',
      title: 'Der Unterschied, der <em>den Unterschied macht</em>',
      intro: 'Auf einem standardisierten Markt biete ich einen handwerklichen und persönlichen Ansatz, den große Labore nicht garantieren können.',
      item1: {
        title: 'Zertifizierte Qualität',
        desc: 'Ich arbeite ausschließlich mit CE-zertifizierten Materialien. Jede Prothese wird von vollständigen Konformitäts- und Rückverfolgbarkeitsdokumenten begleitet.'
      },
      item2: {
        title: 'Sichere Fristen',
        desc: 'Die Einhaltung vereinbarter Termine hat Priorität. Erhalten Sie Updates zum Fortschritt und frühzeitige Benachrichtigungen bei Änderungen.'
      },
      item3: {
        title: 'Hausbesuchsservice',
        desc: 'Ich komme in Ihre Praxis oder zum Patienten. Eliminieren Sie Zwischenhändler, reduzieren Sie Logistikkosten und bieten Sie Ihren Patienten Premium-Service.'
      },
      item4: {
        title: 'Totale Flexibilität',
        desc: 'Ich arbeite mit kleinen Praxen, unabhängigen Kliniken und Privatpersonen. Ich passe mich Ihrem Rhythmus an, nicht umgekehrt. Auch an Wochenenden verfügbar.'
      }
    },
    process: {
      badge: 'Ablauf',
      title: 'Ein <em>einfacher</em> und transparenter Prozess',
      intro: 'Vom ersten Kontakt bis zur Lieferung ist jeder Schritt klar und im Voraus mit Ihnen abgestimmt.',
      step1: {
        title: 'Kontakt',
        desc: 'Sie kontaktieren mich per Telefon, E-Mail oder WhatsApp. Beschreiben Sie den Fall und wir vereinbaren einen ersten Termin.'
      },
      step2: {
        title: 'Beratung',
        desc: 'Ich besuche Ihre Praxis oder den Patienten. Ich nehme Abdrücke, Maße und Fotodokumentation des Falls auf.'
      },
      step3: {
        title: 'Fertigung',
        desc: 'Ich fertige die Prothese mit zertifizierten Materialien. Ich halte Sie über den Fortschritt informiert und verwalte mögliche Änderungen.'
      },
      step4: {
        title: 'Lieferung',
        desc: 'Ich liefere die Arbeit persönlich mit allen Unterlagen. Für Nachbesserungen nach der Lieferung stehe ich zur Verfügung.'
      }
    },
    testimonials: {
      badge: 'Referenzen',
      title: 'Was <em>Fachleute</em>, die mit mir arbeiten, sagen',
      intro: 'Das Vertrauen von Zahnärzten und Patienten ist meine größte Belohnung.',
      card1: {
        text: 'Ich arbeite seit drei Jahren mit ihm. Die Qualität seiner keramischen Prothesen ist bemerkenswert, und die Pünktlichkeit bei der Lieferung hat es mir ermöglicht, meine Termine ohne Überraschungen zu optimieren.',
        name: 'Dr. Marco Rossi',
        role: 'Zahnarzt, Mailand'
      },
      card2: {
        text: 'Ein völlig anderer Service als traditionelle Labore. Er kommt zu uns, versteht die ästhetischen Bedürfnisse der Patienten und das Endergebnis ist immer ausgezeichnet. Sehr empfehlenswert.',
        name: 'Dr.in Anna Bianchi',
        role: 'Zahnarztpraxis, Rom'
      },
      card3: {
        text: 'Ich musste eine gebrochene Prothese dringend vor der Abreise reparieren lassen. Er kam innerhalb von 24 Stunden zu mir nach Hause. Absolute Professionalität und ein sehr vertrauenswürdiger Mensch.',
        name: 'Giuseppe Ferri',
        role: 'Patient, Turin'
      }
    },
    contact: {
      badge: 'Kontakt',
      title: 'Lassen Sie uns <em>zusammenarbeiten</em>',
      formTitle: 'Fordern Sie eine kostenlose Beratung an',
      nomeLabel: 'Name',
      nomePlaceholder: 'Mario Rossi',
      professioneLabel: 'Beruf',
      professioneOptionDefault: 'Auswählen...',
      professioneOption1: 'Zahnarzt',
      professioneOption2: 'Zahnklinik',
      professioneOption3: 'Privatpatient',
      professioneOption4: 'Andere',
      emailLabel: 'Email',
      emailPlaceholder: 'mario@praxis.de',
      telefonoLabel: 'Telefon',
      telefonoPlaceholder: '+49 170 123 4567',
      servizioLabel: 'Gewünschte Leistung',
      servizioOptionDefault: 'Wählen Sie eine Leistung...',
      servizioOption1: 'Festsitzender Zahnersatz',
      servizioOption2: 'Herausnehmbarer Zahnersatz',
      servizioOption3: 'Implantatprothetik',
      servizioOption4: 'Kieferorthopädische Geräte',
      servizioOption5: 'Schienen / Geräte',
      servizioOption6: 'Notfall / Reparatur',
      servizioOption7: 'Allgemeine Beratung',
      messaggioLabel: 'Beschreiben Sie den Fall',
      messaggioPlaceholder: 'Beschreiben Sie kurz den klinischen Fall oder Ihr Anliegen...',
      submit: 'Anfrage Senden',
      infoTitle: 'Kontaktieren Sie mich direkt',
      infoDesc: 'Füllen Sie das Formular aus oder kontaktieren Sie mich direkt. Ich antworte innerhalb von 24 Arbeitsstunden. Auch für Notfälle verfügbar.',
      infoCard1Label: 'Telefon & WhatsApp',
      infoCard1Value: '+39 333 456 7890',
      infoCard1Sub: 'Verfügbar Mo–Sa, 8:00–19:00',
      infoCard2Label: 'E-Mail',
      infoCard2Value: 'info@odontart.it',
      infoCard2Sub: 'Antwort garantiert innerhalb von 24h',
      infoCard3Label: 'Einsatzgebiet',
      infoCard3Value: 'Rom und Provinz',
      infoCard3Sub: 'Auf Anfrage: ganz Latium und Umgebung',
      infoCard4Label: 'Flexible Zeiten',
      infoCard4Value: 'Mo – Sa, 7:30 – 20:00',
      infoCard4Sub: 'Notfälle: auch Sonntag nach Vereinbarung',
      trust1: 'Zertifiziertes ODT Register',
      trust2: 'CE-Materialien',
      trust3: 'Hausbesuch-Service',
      trust4: 'Garantierte Zeiten'
    },
    footer: {
      privacy: 'Datenschutzerklärung',
      copy: '© 2025 OdontArt — P.IVA IT12345678901'
    },
    alert: {
      missingFields: 'Bitte füllen Sie mindestens Name und E-Mail aus.',
      success: 'Danke {name}! Ihre Anfrage wurde gesendet. Ich werde Sie innerhalb von 24 Stunden kontaktieren.'
    }
  }
};
