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
function App() {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState('en');
  const [lang, setLang] = useState(English);
  const changeLang = getLang => {
    setLocale(getLang.target.value);
    i18n.changeLanguage(getLang.target.value);
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
      <select name="pets" id="pet-select" onChange={changeLang}>
        <option value="">--Please choose an option--</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="it">Italy</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabe</option>
        <option value="tr">Turkish</option>
      </select>
      <div>
        {lang.translation.fact.map((item, key) => (
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
        ))}


      </div>
      <h1>{t('wakeup')}</h1>
    </div>
  );
}

export default App;
