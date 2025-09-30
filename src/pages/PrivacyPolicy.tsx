import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] min-h-screen flex flex-col items-center py-[26px]">
      <Header />
      
      <main className="w-full max-w-[1200px] px-8 py-16">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Startseite</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Datenschutzerklärung</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Wer wir sind</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Diese Richtlinie bezieht sich auf die Website, die unter der Adresse www.cargoseller.pl funktioniert</li>
              <li>Der Administrator legt großen Wert auf die Einhaltung der Rechte der Nutzer, die die im Rahmen der Website angebotenen Dienste und Funktionalitäten nutzen, sowie der Nutzer, die die Website ohne Nutzung der angebotenen Dienste und Funktionalitäten verwenden, mit besonderem Augenmerk auf das Recht auf Schutz der Privatsphäre. Daher sammeln wir nur ein Minimum an Informationen, die uns helfen, die Bedürfnisse der Nutzer besser zu verstehen und die Website, ihre Funktionalitäten und Ergonomie an die sich ändernden Erwartungen der Nutzer anzupassen. Unter anderem zu diesem Zweck sammeln und verarbeiten wir notwendige Nutzerdaten, einschließlich personenbezogener Daten und anderer, die nicht diese Eigenschaft besitzen. Die Sammlung erfolgt je nach Art der Daten auf Initiative des Nutzers oder automatisch.</li>
              <li>Der Administrator verarbeitet personenbezogene Daten in Übereinstimmung mit den Bestimmungen der DSGVO sowie anderen einschlägigen Bestimmungen des geltenden Rechts, insbesondere nationalen Vorschriften zum Schutz personenbezogener Daten. Der Administrator wendet zur effektiven Datensicherung angemessene Sicherheitsmaßnahmen für die Datenverarbeitung an, die den in den geltenden Rechtsvorschriften festgelegten Anforderungen entsprechen (u.a. Zugangskennwörter, Beschränkung von Personen mit Zugriffsrechten oder Unterbringung von Daten sammelnden Servern in dafür vorgesehenen Räumen oder deren Verwaltung durch spezialisierte Einheiten).</li>
              <li>Der Betreiber der Website und Administrator der personenbezogenen Daten ist:
                <div className="ml-6 mt-2 font-semibold">CS SOFT Monika Janczukowicz z siedzibą Szydłowo 189, 64-930 Szydłowo<br/>NIP: 7651604754 REGON: 302309608</div>
              </li>
              <li>E-Mail-Kontaktadresse des Betreibers: kontakt@cargoseller.pl</li>
              <li>Der Betreiber ist Administrator Ihrer personenbezogenen Daten in Bezug auf freiwillig in der Website angegebene Daten.</li>
              <li>Die Website verwendet personenbezogene Daten für folgende Zwecke:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Bearbeitung von Anfragen über das Formular</li>
                  <li>Präsentation von Angeboten oder Informationen</li>
                </ul>
              </li>
              <li>Die Website erfüllt die Funktionen der Informationsbeschaffung über Nutzer und ihr Verhalten auf folgende Weise:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Durch freiwillig in Formularen eingegebene Daten, die in die Systeme des Betreibers eingegeben werden.</li>
                  <li>Durch Speichern von Cookie-Dateien (sog. „Cookies") auf Endgeräten.</li>
                </ul>
              </li>
              <li>Die Website cargoseller.pl behält sich das Recht vor, Änderungen an der Datenschutzerklärung vorzunehmen. Für jeden Nutzer der Website gilt die aktuelle Datenschutzerklärung, die sich auf der Seite https://cargoseller.pl/polityka-prywatnosci/ befindet. Alle vorgenommenen Änderungen beeinflussen nicht den Grundsatz: <strong>Die Website verkauft oder gibt keine personenbezogenen oder Adressdaten von Kunden/Nutzern ihrer Dienste und Publikationen an Dritte für Marketingzwecke weiter.</strong></li>
              <li>Wenn Sie mit der Datenschutzerklärung nicht einverstanden sind, besuchen Sie bitte die Website nicht und erwerben Sie keine von der Website angebotenen Produkte und Dienstleistungen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">2. Personenbezogene Daten</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Während der Nutzung der zur Website gehörenden Dienste können Sie aufgefordert werden, einige Ihrer personenbezogenen Daten durch Ausfüllen eines Kontaktformulars anzugeben. Die Daten, um die Sie gebeten werden, sind Vor- und Nachname, Telefonnummer, E-Mail-Adresse, Firmenname.</li>
              <li>Wir verlangen nur die Daten, die für die Kontaktaufnahme erforderlich sind. Das Nichtausfüllen der erforderlichen Formularfelder macht eine Kontaktaufnahme unmöglich.</li>
              <li>Nutzerdaten werden für folgende Zwecke verarbeitet:
                <ol className="ml-6 mt-2 list-decimal list-inside">
                  <li>Ermöglichung der Nutzung der Website-Dienste durch die Nutzer (Art. 6 Abs. 1 lit. a) DSGVO – freiwillige Einwilligung und Art. 6 Abs. 1 lit. b) DSGVO – im Umfang der für die Erbringung von Dienstleistungen/Vertragserfüllung erforderlichen Daten);</li>
                  <li>Beantwortung von Anfragen, Aufforderungen oder Anträgen der Nutzer durch den Administrator (Art. 6 Abs. 1 lit. a) DSGVO – freiwillige Einwilligung und Art. 6 Abs. 1 lit. b) DSGVO – im Umfang der für die Erbringung von Dienstleistungen/Vertragserfüllung erforderlichen Daten),</li>
                  <li>Erfüllung der rechtmäßig gerechtfertigten Zwecke des Administrators in Form des Marketings von Produkten und Dienstleistungen des Administrators (Art. 6 Abs. 1 lit. f) DSGVO – berechtigtes Interesse des Administrators);</li>
                </ol>
              </li>
              <li>In einigen Situationen hat der Administrator das Recht, Ihre personenbezogenen Daten an andere Empfänger weiterzugeben, wenn dies zur Erfüllung des mit Ihnen geschlossenen Vertrags oder zur Erfüllung der dem Administrator obliegenden Pflichten erforderlich ist. Dies betrifft folgende Empfängergruppen:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Hosting-Unternehmen auf Auftragsverarbeitungsbasis</li>
                  <li>Öffentliche Behörden</li>
                  <li>Unternehmen, die Dienstleistungen für den Administrator erbringen (Software House)</li>
                </ul>
              </li>
              <li>Ihre personenbezogenen Daten werden vom Administrator nicht länger verarbeitet, als dies zur Durchführung der damit verbundenen, durch separate Vorschriften festgelegten Tätigkeiten erforderlich ist.</li>
              <li>Sie haben das Recht, vom Administrator Folgendes zu verlangen:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Zugang zu Ihren personenbezogenen Daten,</li>
                  <li>deren Berichtigung,</li>
                  <li>Löschung,</li>
                  <li>Einschränkung der Verarbeitung,</li>
                  <li>sowie Datenübertragbarkeit.</li>
                </ul>
              </li>
              <li>Sie haben das Recht, Widerspruch gegen die in Punkt 3.3 c) genannte Verarbeitung personenbezogener Daten zum Zweck der Erfüllung rechtmäßig gerechtfertigter Interessen des Administrators, einschließlich Profiling, einzulegen, wobei das Widerspruchsrecht nicht ausgeübt werden kann, wenn wichtige rechtmäßig gerechtfertigte Gründe für die Verarbeitung bestehen, die Ihre Interessen, Rechte und Freiheiten überwiegen, insbesondere zur Feststellung, Geltendmachung oder Verteidigung von Ansprüchen.</li>
              <li>Gegen Handlungen des Administrators kann Beschwerde beim Präsidenten des Amtes für den Schutz personenbezogener Daten, ul. Stawki 2, 00-193 Warszawa, eingelegt werden.</li>
              <li>Die Angabe personenbezogener Daten ist freiwillig, aber für die Nutzung der Website erforderlich.</li>
              <li>In Bezug auf Sie können Maßnahmen ergriffen werden, die in einer automatisierten Entscheidungsfindung bestehen, einschließlich Profiling zum Zweck der Erbringung von Dienstleistungen im Rahmen des geschlossenen Vertrags sowie zum Zweck der Durchführung von Direktmarketing durch den Administrator.</li>
              <li>Personenbezogene Daten werden nicht in Drittländer im Sinne der Datenschutzbestimmungen übermittelt. Dies bedeutet, dass wir sie nicht außerhalb der Europäischen Union übertragen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">3. Wichtige Marketingtechniken</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Der Betreiber verwendet statistische Analysen des Website-Verkehrs über Google Analytics (Google Inc. mit Sitz in den USA). Der Betreiber übermittelt dem Betreiber dieses Dienstes keine personenbezogenen Daten, sondern nur anonymisierte Informationen. Der Dienst basiert auf der Verwendung von Cookies auf dem Endgerät des Nutzers. Im Bereich der vom Google-Werbenetzwerk gesammelten Informationen über Nutzerpräferenzen kann der Nutzer die aus Cookie-Dateien resultierenden Informationen mit dem Tool einsehen und bearbeiten: https://www.google.com/ads/preferences/</li>
              <li>Der Betreiber verwendet Remarketing-Techniken, die es ermöglichen, Werbebotschaften an das Nutzerverhalten auf der Website anzupassen, was den Eindruck erwecken kann, dass die personenbezogenen Daten des Nutzers zu seiner Verfolgung verwendet werden, aber in der Praxis erfolgt keine Übermittlung personenbezogener Daten vom Betreiber an Werbebetreiber. Die technologische Voraussetzung für solche Maßnahmen ist die Aktivierung der Cookie-Unterstützung.</li>
              <li>Der Betreiber verwendet das Facebook-Pixel. Diese Technologie bewirkt, dass der Dienst Facebook (Facebook Inc. mit Sitz in den USA) weiß, dass eine bestimmte bei ihm registrierte Person die Website nutzt. In diesem Fall basiert er auf Daten, für die er selbst Administrator ist, der Betreiber übermittelt keine zusätzlichen personenbezogenen Daten an den Facebook-Dienst. Der Dienst basiert auf der Verwendung von Cookies auf dem Endgerät des Nutzers</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">4. Unangekündigte Nachrichten</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Die Website behält sich das Recht vor, unangekündigte Nachrichten an Personen zu senden, deren Kontaktdaten sie besitzt und die mit der Datenschutzerklärung einverstanden sind. Unter dem Begriff unangekündigte Nachrichten versteht man Informationen, die sich direkt auf ihre Website und ihr Produkt beziehen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">5. Cookies</h2>
            <p className="text-gray-700">
              Einige Bereiche der zur Website gehörenden Dienste können Cookies verwenden, d.h. kleine Textdateien, die an den Computer des Internetnutzers gesendet werden und ihn auf die für die Vereinfachung oder Durchführung einer bestimmten Operation erforderliche Weise identifizieren. Cookies sind weder für den Computer noch für seinen Benutzer und seine Daten schädlich. Die Bedingung für das Funktionieren von Cookies ist ihre Akzeptanz durch den Browser und dass sie nicht von der Festplatte gelöscht werden.
            </p>
          </section>
        </div>
      </main>
      
      <div className="w-full flex justify-center px-4">
        <ContactSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
