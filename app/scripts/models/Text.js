let textEN = {};
let textFR = {};
// Define language
textEN = {};
textFR = {};
function getDict(lang){
    if (lang=='en'){
        return textEN;
    } else if (lang=='fr') {
        return textFR;
    }
}
// -HEADER
textEN.header = {};
textFR.header = {};
// --title
textEN.header.title = "Gamez for LAN";
textFR.header.title = "Gamez for LAN";
// --section
textEN.header.section = [];
textFR.header.section = [];
// --- item 0
addInHeaderSection(textEN,{'name': "Games"})
addInHeaderSection(textFR,{'name': "Jeux Vidéo"})
// --- item 1
addInHeaderSection(textEN,{'name': "Request"})
addInHeaderSection(textFR,{'name': "Requête"})
// --section/function
function addInHeaderSection(dic,obj) {
    let size = (dic.header.section).length;
    obj.id = size;
    dic.header.section.push(obj);
}
// --github
textEN.header.github = "View source on Github";
textFR.header.github = "Voir les sources sur le Github";
// -FOOTER
textEN.footer = {};
textFR.footer = {};
// --copyright
textEN.footer.copyright = "© 2017 Copyright - Text";
textFR.footer.copyright = "© 2017 Copyright - Texte";
// --select language
textEN.footer.language = "Change language :";
textFR.footer.language = "Changer la langue :";
// -HOMEPAGE
textEN.homepage = {};
textFR.homepage = {};
// --CONTENT
textEN.homepage.content = {};
textFR.homepage.content = {};
// ---title
textEN.homepage.content.title = "Welcome !";
textFR.homepage.content.title = "Bienvenue !";
// ---describ
textEN.homepage.content.describ = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur tortor eget vehicula fermentum. Sed eget elit tellus. Pellentesque sed odio tristique, cursus lorem sed, fermentum velit. In malesuada nibh dolor. Pellentesque erat lectus, semper sollicitudin felis quis, tristique ullamcorper diam. Pellentesque eu mauris vitae massa malesuada molestie. Fusce tortor purus, mollis et diam eget, aliquam pellentesque ex. Vivamus dapibus erat ut leo ultricies malesuada.";
textFR.homepage.content.describ = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur tortor eget vehicula fermentum. Sed eget elit tellus. Pellentesque sed odio tristique, cursus lorem sed, fermentum velit. In malesuada nibh dolor. Pellentesque erat lectus, semper sollicitudin felis quis, tristique ullamcorper diam. Pellentesque eu mauris vitae massa malesuada molestie. Fusce tortor purus, mollis et diam eget, aliquam pellentesque ex. Vivamus dapibus erat ut leo ultricies malesuada.";
// ---button
textEN.homepage.content.button = "";
textFR.homepage.content.button = "";
// ---card
textEN.homepage.content.card = [];
textFR.homepage.content.card = [];
// ---FontAwesomeIcon
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-bolt",
    "title" : "Quick to install",
    "text" : "You only have to decompress the game to be able to launch it.",
    "button" : "Learn More"
});
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-bolt",
    "title" : "Rapide à installer",
    "text" : "You only have to decompress the game to be able to launch it.",
    "button" : "En savoir plus"
});
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-cog",
    "title" : "Easy to play",
    "text" : "All the games offered have scripts to install / to run.",
    "button" : "Learn More"
});
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-cog",
    "title" : "Facile à exécuter",
    "text" : "All the games offered have scripts to install / to run.",
    "button" : "En savoir plus"
});
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-users",
    "title" : "Powered by Community",
    "text" : "The content of the site depends on Community, whether for requests or for improvements in content.",
    "button" : "Learn More"
});
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-users",
    "title" : "Evolue avec la Communauté",
    "text" : "The content of the site depends on Community, whether for requests or for improvements in content.",
    "button" : "En savoir plus"
});
// ---card/function
function addInHomepageContentCard(dic,obj) {
    let size = (dic.homepage.content.card).length;
    obj.id = size;
    dic.homepage.content.card.push(obj);
}