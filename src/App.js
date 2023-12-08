import { useState } from 'react';
import './App.css';
import English from "./translation/en.json";
import French from "./translation/fr.json";
import Spanish from "./translation/es.json";
import German from "./translation/de.json";
import Italy from "./translation/it.json";
import Hindi from "./translation/hi.json";
import Turkish from "./translation/tr.json";
import Arabe from "./translation/ar.json";

import { useTranslation } from 'react-i18next';
import { Banner } from './components/banner';
import { Facts } from './components/facts';
import { Footer } from './components/footer';
function App() {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState('en');
  const [lang, setLang] = useState(English);
  const changeLang = getLang => {
    i18n.changeLanguage(getLang.target.value);
    setLocale(getLang.target.value);
    switch (getLang) {
      case 'en':
        setLang(English)
        break;
      case 'fr':
        setLang(French)
        break;
      case 'es':
        setLang(Spanish)
        break;
      case 'de':
        setLang(German)
        break;
      case 'it':
        setLang(Italy)
        break;
      case 'hi':
        setLang(Hindi)
        break;
      case 'ar':
        setLang(Arabe)
        break;
      case 'tr':
        setLang(Turkish)
        break;
      default:
        setLang(English);
    }

  }


  return (

    <div className="App">
      <Banner />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
