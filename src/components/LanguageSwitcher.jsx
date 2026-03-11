import React from 'react';
import { useTranslation } from 'react-i18next';

// Definição dos idiomas disponíveis e suas bandeiras/nomes
const flagUrls = {
  pt: 'https://cdn.countryflags.com/thumbs/portugal/flag-800.png',
  en: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-800.png', // Mudei para UK para ser mais genérico que England
  es: 'https://cdn.countryflags.com/thumbs/spain/flag-800.png',
  fr: 'https://cdn.countryflags.com/thumbs/france/flag-800.png',
  // Se quiser adicionar mais, inclua aqui.
};

// Mapeamento para nomes de exibição (opcional)
const languageNames = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
    fr: 'Français',
};

export const LanguageSwitcherMenu = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = (i18n.language || 'pt').split('-')[0]; // Pega apenas 'pt', 'en', etc.
  
  // Filtra apenas os idiomas para os quais temos URL e que são diferentes do selecionado
  const availableLanguages = Object.keys(flagUrls).filter(lng => lng !== selectedLanguage);

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    // Opcional: fechar o menu após a seleção, dependendo da sua lógica.
  };

 return (
    <div className="mt-8 pt-4 border-t border-gray-200 w-full flex flex-col items-center">
      
      {/* 1. Bandeira Atual */}
      <div className="mb-4 flex items-center gap-3">
        <img loading="lazy" src={flagUrls[selectedLanguage] || flagUrls.en} // Usa bandeira padrão se a URL não existir
          alt={`Selected language: ${selectedLanguage}`} 
          className="w-10 h-auto rounded shadow-md border-2 border-indigo-600"
        />
        <span className="text-lg font-semibold text-gray-800">
            {languageNames[selectedLanguage]}
        </span>
      </div>

      {/* 2. Opções de Idioma */}
      <div className="flex gap-4">
        {availableLanguages.map(lng => (
          <button 
            key={lng} 
            title={languageNames[lng]}
            onClick={() => handleChangeLanguage(lng)}
            className="transition-transform transform hover:scale-110"
          >
            <img 
              loading="lazy" 
              src={flagUrls[lng]} 
              alt={`${languageNames[lng]} Flag`} 
              className="w-8 h-auto rounded shadow-sm opacity-80 hover:opacity-100"
            />
          </button>
        ))}
      </div>
    </div>
  );
};