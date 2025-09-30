import React from 'react';
import statsImage from '@/assets/loading.png';
import searchVehicleImage from '@/assets/find-free.png';
import statisticsImage from '@/assets/ai.png';
import aiFeatureImage from '@/assets/stats.png';
import dotIcon from '@/assets/dot.svg';
interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false
}) => {
  return <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[300px] lg:min-h-[400px]">
          <img src={imageSrc} alt={title} className="w-[400px] h-[400px] object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start gap-3 text-czarny text-lg font-roboto-condensed font-normal leading-6">
                <img src={dotIcon} alt="" className="w-[19px] h-[21px] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>)}
          </div>
          
        </div>
      </div>
    </div>;
};
const FeaturesContainer = () => {
  const features = [{
    title: "Veröffentlichung von Spot-Frachten zum Verkauf",
    description: "Bei CARGOseller fügen Sie eine Fracht einmal hinzu und geben an, welche Tools und Vertriebskanäle Sie aktivieren.",
    features: ["Versand an bis zu 3 Transportbörsen - Sie veröffentlichen Frachten auf Börsen, bei denen Sie ein Konto haben", "Mailing 4.0 - automatische Generierung einer E-Mail mit Ladungsliste an ausgewählte Gruppen vertrauenswürdiger Subunternehmer"],
    imageSrc: statsImage
  }, {
    title: "Automatische Suche nach freien Fahrzeugen",
    description: "Die Integration von CARGOseller mit TIMOCOM ermöglicht die automatische Suche nach freien Fahrzeugen im Umkreis von 100 km vom Beladeort der in CARGOseller hinzugefügten Fracht.",
    features: ["Ab jetzt suchen Sie nicht mehr manuell nach freien Fahrzeugen, das erledigt ein Algorithmus für Sie", "Gefundene Ergebnisse werden in der Spalte 'Vorschläge' zusammen mit Preisvorschlägen aus anderen Systemen angezeigt"],
    imageSrc: searchVehicleImage
  }, {
    title: "KI - schneller, mehr, effektiver",
    description: "Fügen Sie TEXT einer Anfrage ein und das System erstellt mithilfe von KI fertige Angebote. Fügen Sie ein BILD mit Angeboten hinzu und das System erstellt ebenfalls fertige Angebote schneller als ein Mensch.",
    features: ["Die Arbeit mit KI ist eine Möglichkeit, Effizienz und finanzielle Ergebnisse zu verbessern, weil Sie Zeit gewinnen", "Arbeitskomfort - Sie übertragen keine Angebote manuell"],
    imageSrc: statisticsImage
  }, {
    title: "Statistiken",
    description: "Die Streuung des Volumens von Spot-Frachten zum Verkauf auf E-Mails vieler Mitarbeiter macht Analysen unmöglich. Die Aggregation aller Spot-Frachten zum Verkauf im CARGOseller-System ermöglicht die Bereitstellung vollständiger Statistiken.",
    features: ["Statistiken im zeitlichen Verlauf", "Anzahl der eingegebenen und verkauften Frachten"],
    imageSrc: aiFeatureImage
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {features.map((feature, index) => <FeatureItem key={index} title={feature.title} description={feature.description} features={feature.features} imageSrc={feature.imageSrc} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default FeaturesContainer;