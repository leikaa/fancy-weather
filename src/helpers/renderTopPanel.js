export default function renderTopPanel(language) {
    // top left panel buttons
    const leftPanelButtonsContainer = document.createDocumentFragment();
    const divSwitchImage = document.createElement('div');
    divSwitchImage.className = 'button weather-info__top-panel-switch-image';
    leftPanelButtonsContainer.appendChild(divSwitchImage);

    //language select
    const divSwitchLanguage = document.createElement('div');
    divSwitchLanguage.className = 'weather-info__top-panel-switch-language';
    leftPanelButtonsContainer.appendChild(divSwitchLanguage);

    const divCurrentLanguage = document.createElement('div');
    divCurrentLanguage.className = 'button weather-info__top-panel-switch-language_title';
    divCurrentLanguage.innerText = language.toUpperCase();
    divSwitchLanguage.appendChild(divCurrentLanguage);

    const ulLanguageList = document.createElement('ul');
    ulLanguageList.className = 'weather-info__top-panel-switch-language_list';
    divSwitchLanguage.appendChild(ulLanguageList);

    const liEn = document.createElement('li');
    liEn.className = 'active-lang weather-info__top-panel-switch-language_list-item';
    liEn.innerText = 'EN';
    ulLanguageList.appendChild(liEn);

    const liRu = document.createElement('li');
    liRu.className = 'weather-info__top-panel-switch-language_list-item';
    liRu.innerText = 'RU';
    ulLanguageList.appendChild(liRu);

    const liBe = document.createElement('li');
    liBe.className = 'weather-info__top-panel-switch-language_list-item';
    liBe.innerText = 'BE';
    ulLanguageList.appendChild(liBe);

    // temperature
    const divSwitchTemperature = document.createElement('div');
    divSwitchTemperature.className = 'weather-info__top-panel-switch-temperature';
    const divFahrenheit = document.createElement('div');
    divFahrenheit.className = 'active button weather-info__top-panel-switch-temperature_fahrenheit';
    divFahrenheit.innerHTML = '&deg;F';
    divSwitchTemperature.appendChild(divFahrenheit);
    const divCelsius = document.createElement('div');
    divCelsius.className = 'button weather-info__top-panel-switch-temperature_celsius';
    divCelsius.innerHTML = '&deg;C';
    divSwitchTemperature.appendChild(divCelsius);
    leftPanelButtonsContainer.appendChild(divSwitchTemperature);

    // top right search panel
    const rightPanelSearchBarContainer = document.createDocumentFragment();
    const inputSearch = document.createElement('input');
    inputSearch.type = "text";
    inputSearch.className = 'weather-info__top-panel-search';
    rightPanelSearchBarContainer.appendChild(inputSearch);

    const inputSubmitSearch = document.createElement('div');
    inputSubmitSearch.innerText = 'search'.toUpperCase();
    inputSubmitSearch.className = 'button weather-info__top-panel-submit';
    rightPanelSearchBarContainer.appendChild(inputSubmitSearch);

    // top panel
    const divTopPanelBlock = document.createElement('div');
    divTopPanelBlock.className = 'weather-info__top-panel';

    const divLeftPanelBlock = document.createElement('div');
    divLeftPanelBlock.className = 'weather-info__top-panel_left';
    divLeftPanelBlock.appendChild(leftPanelButtonsContainer);
    divTopPanelBlock.appendChild(divLeftPanelBlock);

    const divRightPanelBlock = document.createElement('div');
    divRightPanelBlock.className = 'weather-info__top-panel_right';
    divRightPanelBlock.appendChild(rightPanelSearchBarContainer);
    divTopPanelBlock.appendChild(divRightPanelBlock);

    return divTopPanelBlock;
}