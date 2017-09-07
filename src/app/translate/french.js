const textFR = {};
// -HEADER
textFR.header = {};
// --section
textFR.header.section = [];
// --- item 0
addInHeaderSection(textFR,{'name': "Jeux"})
// --- item 1
addInHeaderSection(textFR,{'name': "Contact"})
// --github
textFR.header.github = "Regarder les sources sur Github";
// -FOOTER
textFR.footer = {};
// --select language
textFR.footer.language = "Langue choisie :";
// -HOMEPAGE
textFR.homepage = {};
// --CONTENT
textFR.homepage.content = {};
// ---button
textFR.homepage.content.button = "";
// ---card
textFR.homepage.content.card = [];
// ---FontAwesomeIcon
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-bolt",
    "title" : "Rapide à installer",
    "text" : "Vous n'avez qu'a décomprésser le jeu pour pouvoir y jouer."
});
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-cog",
    "title" : "Facile à jouer",
    "text" : "Tout les jeux possèdent des scripts pour faciliter leurs exécutions."
});
addInHomepageContentCard(textFR,{
    "fa-icon": "fa fa-users",
    "title" : "Communautaire",
    "text" : "Ce projet est le votre, pour toutes améliorations contactez-moi ou 'fork' ce projet."
});
// -CONTACT
textFR.contact = {};
// --Formulaire
textFR.contact.form = {};
// ---Title
textFR.contact.form.title = "Contactez-Moi";
// ---Name
textFR.contact.form.name = "Votre Nom/Pseudonyme";
// ---Email
textFR.contact.form.email = "Votre E-Mail";
// ---Message
textFR.contact.form.message = "Message";
// ---Subject
textFR.contact.form.subject = "Sujet";
// ---Submit
textFR.contact.form.submit = "Envoyer";
// FUNCTION
// -section
function addInHeaderSection(dic,obj) {
    let size = (dic.header.section).length;
    obj.id = size;
    dic.header.section.push(obj);
};
// -card
function addInHomepageContentCard(dic,obj) {
    let size = (dic.homepage.content.card).length;
    obj.id = size;
    dic.homepage.content.card.push(obj);
};
// -contact.subject
function addInListSubject(dic,obj) {
    dic.contact.form.subject.options.push(obj);
}