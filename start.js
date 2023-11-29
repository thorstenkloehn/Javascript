/**
 * Dokumenten start 
    * @param {string} start - Startseite
    * @return {string} return - Startseite
    * 
**/
let Websiteobjekt = {
    sitetitel:"Startseite",
    seitenbeschreibung:"Startseite",
    seitenkeywords:"Startseite",
    ausgabe: function(){
        return this.sitetitel + " " + this.seitenbeschreibung + " " + this.seitenkeywords;
    }
};
console.log(Websiteobjekt);
console.log(Websiteobjekt.sitetitel);
console.log(Websiteobjekt["sitetitel"])
console.log(Websiteobjekt.ausgabe());
