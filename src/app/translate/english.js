const textEN = {};
// -HEADER
textEN.header = {};
// --section
textEN.header.section = [];
// --- item 0
addInHeaderSection(textEN,{'name': "Game"})
// --- item 1
addInHeaderSection(textEN,{'name': "Contact"})
// --github
textEN.header.github = "View source on Github";
// -FOOTER
textEN.footer = {};
// --select language
textEN.footer.language = "Change language :";
// -HOMEPAGE
textEN.homepage = {};
// --CONTENT
textEN.homepage.content = {};
// ---button
textEN.homepage.content.button = "";
// ---card
textEN.homepage.content.card = [];
// ---FontAwesomeIcon
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-bolt",
    "title" : "Quick to install",
    "text" : "You only have to decompress the game to be able to launch it."
});
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-cog",
    "title" : "Easy to play",
    "text" : "All the games offered have scripts to install / to run.",
    "button" : "Learn More"
});
addInHomepageContentCard(textEN,{
    "fa-icon": "fa fa-users",
    "title" : "Powered by Community",
    "text" : "The content of the site depends on Community, whether for requests or for improvements in content.",
    "button" : "Learn More"
});
// -CONTACT
textEN.contact = {};
// --Formulaire
textEN.contact.form = {};
// ---Title
textEN.contact.form.title = "Contact Us";
// ---Name
textEN.contact.form.name = "Your Name/Pseudo";
// ---Email
textEN.contact.form.email = "Your E-Mail";
// ---Message
textEN.contact.form.message = "Message";
// ---Subject
textEN.contact.form.subject = "Subject";
// ---Submit
textEN.contact.form.submit = "Submit";
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