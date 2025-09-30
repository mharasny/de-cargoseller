import React, { useState } from 'react';
import addLoadingImg from '@/assets/add-loading.png';
import getPropositionImg from '@/assets/get-proposition.jpg';
import loadingListImg from '@/assets/loading-list.png';
import refreshDeleteImg from '@/assets/refresh-delete.png';
import automailingImg from '@/assets/automailing.jpg';
import myloadingsImg from '@/assets/myloadings.png';
import integrationsImg from '@/assets/integrations.jpg';
import statisticsImg from '@/assets/new-statistics.png';

const FunctionalitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Fracht hinzufügen",
    "Preisvorschläge sammeln",
    "Frachtliste",
    "Aktualisieren und Löschen von Frachten",
    "Automatisches Mailing der Frachtliste",
    "Frachten in meinem Unternehmen",
    "Integrationen",
    "Statistiken"
  ];

  const tabImages = [
    addLoadingImg,
    getPropositionImg,
    loadingListImg,
    refreshDeleteImg,
    automailingImg,
    myloadingsImg,
    integrationsImg,
    statisticsImg
  ];

  const tabDescriptions = [
    "Fügen Sie Fracht schneller hinzu dank Schnellauswahloptionen, Archiv oder Vorlagen, veröffentlichen Sie auf bis zu 3 Börsen, aktivieren Sie automatische Aktualisierung von Angeboten und Fahrzeugsuche auf TIMOCOM, senden Sie optional ein Mailing mit Ihrer Frachtliste an Ihre vertrauenswürdigen Transportunternehmen - alles in einem Fenster.",
    "Das System holt Preisvorschläge von der TIMOCOM-Börse und vom Mailing-Kanal Ihrer vertrauenswürdigen Transportunternehmen ab, zusätzlich holt es von TIMOCOM Angebote für freie Fahrzeuge im Umkreis von 100 km vom Beladeort.",
    "Das Hauptfenster mit der Frachtliste spart Ihnen 50-70% der Zeit. Von hier aus können Sie Angebote löschen, aktualisieren, hinzufügen, bearbeiten, Preisvorschläge und Vorschläge für freie Fahrzeuge durchsehen, Transaktionen mit Auswirkung auf 3 Börsen abschließen.",
    "Die zyklische Aktualisierung von Frachten ist eine sehr häufige Praxis bei Spediteuren, die den Verkauf erleichtert. Bei uns erfolgt der Aktualisierungsprozess automatisch alle 35 Minuten. Optional können Sie manuell aktualisieren. Ähnlich verhält es sich mit dem Löschen von Angeboten - Sie löschen viele oder einzelne Angebote mit Auswirkung auf die Börsen.",
    "Gängige Praxis: das Versenden einer E-Mail mit der Frachtliste an Ihre vertrauenswürdigen Transportunternehmen. Derzeit eine separate Tätigkeit neben der Eingabe auf Börsen. Unser Integrator ermöglicht es Ihnen, diese Tätigkeit beim Veröffentlichen auf Börsen durchzuführen, Zeit zu sparen und dies komfortabler als je zuvor zu tun. Das System generiert automatisch eine personalisierte E-Mail mit der Frachtliste.",
    "Überprüfen Sie einfach, was in Ihrem Unternehmen (in allen Niederlassungen) derzeit zum Verkauf angeboten wird und über welche Vertriebskanäle. Sie können sich leicht mit einem Mitarbeiter bezüglich einer Fracht in Verbindung setzen und Kollegen unterstützen, indem Sie eine Fracht als Ihre eigene veröffentlichen, ohne sie neu eingeben zu müssen.",
    "Die Integration Ihres Benutzerkontos mit Börsen dauert weniger als 3 Minuten und Sie sind bereit, den Arbeitsprozess zu optimieren und bessere Verkaufsergebnisse zu erzielen. Sie können auch Ihr TMS-System mit unserem System integrieren - das ist eine einfache und schnelle Integration anstelle von umfangreichen, separaten Integrationen mit jeder Börse. Wir werden für Sie zum Integrations-HUB - ein moderner Ansatz in der Welt digitaler Lösungen, der Integrationen beschleunigt und deren Kosten erheblich reduziert.",
    "Überprüfen Sie Statistiken, die das Gesamtvolumen der zum Verkauf hinzugefügten Frachten zeigen. Erfahren Sie, wie viele unverkaufte Frachten es gibt, und optimieren Sie diesen Bereich. Vergleichen Sie Monate, Jahre, durchsuchen Sie Daten zu Margen und Einnahmen aufgeschlüsselt nach Niederlassungen und dem gesamten Unternehmen."
  ];

  return (
    <section id="funkcjonalnosci" className="w-full max-w-[1520px] mt-[131px] max-md:max-w-full max-md:mt-10 scroll-mt-24">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Funktionalitäten
      </h2>
      <div className="flex w-full flex-col items-stretch text-lg text-[#4E4D4D] font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-[40px_60px] flex-wrap rounded-2xl max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full items-center gap-3 leading-none flex-wrap max-md:max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl transition-colors hover:bg-[#5aa085] hover:text-white ${
                    activeTab === index
                      ? 'text-white bg-[#66BC98]'
                      : 'bg-white text-[#4E4D4D]'
                  }`}
                >
                  <div className="flex justify-center items-center">
                    {tab}
                  </div>
                
                </button>
              ))}
            </div>
            <div className="text-czarny font-roboto-condensed text-lg font-normal leading-6 mt-6 max-md:max-w-full">
              {tabDescriptions[activeTab]}
            </div>
          </div>
          <img
            src={tabImages[activeTab]}
            alt={`Screenshot for ${tabs[activeTab]}`}
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
