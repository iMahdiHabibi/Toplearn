/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'sr-latn' ]: { dictionary, getPluralForm } } = {"sr-latn":{"dictionary":{"Words: %0":"Reči: %0","Characters: %0":"Karakteri: %0","Widget toolbar":"Видгет трака са алаткама","Insert paragraph before block":"Уметните одломак пре блока","Insert paragraph after block":"Уметните одломак после блока","Press Enter to type after or press Shift + Enter to type before the widget":"Pritisnite Enter da kucate posle ili pritisnite Shift + Enter da kucate pre vidžeta","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Pritisci na tastere koji se mogu koristiti kada je vidžet izabran (na primer: slika, tabela, itd.)  ","Insert a new paragraph directly after a widget":"Umetnite novi pasus direktno posle vidžeta","Insert a new paragraph directly before a widget":"Umetnite novi pasus direktno ispred vidžeta","Move the caret to allow typing directly before a widget":"Pomerite kursor da biste omogućili kucanje direktno pre vidžeta","Move the caret to allow typing directly after a widget":"Pomerite kursor da biste omogućili kucanje direktno posle vidžeta","Move focus from an editable area back to the parent widget":"Pomerite fokus sa oblasti za uređivanje nazad na roditeljski vidžet","Upload in progress":"Postavljanje u toku","Undo":"Povlačenje","Redo":"Ponovo","Rich Text Editor":"Prošireni uređivač teksta","Editor editing area: %0":"Oblast za uređivanje urednika: %0","Edit block":"Blok uređivač","Click to edit block":"Kliknite da biste uredili blok","Drag to move":"Prevucite da biste premestili","Next":"Sledeći","Previous":"Prethodni","Editor toolbar":"Uređivač traka sa alatkama","Dropdown toolbar":"Padajuća traka sa alatkama","Black":"Crna","Dim grey":"Bledo siva","Grey":"Siva","Light grey":"Svetlo siva","White":"Bela","Red":"Crvena","Orange":"Narandžasta","Yellow":"Žuta","Light green":"Svetlo zelena","Green":"Zelena","Aquamarine":"Zelenkastoplava","Turquoise":"Tirkizna","Light blue":"Svetloplava","Blue":"Plava","Purple":"Ljubičasta","Editor block content toolbar":"Traka sa alatkama za blokiranje sadržaja uređivača","Editor contextual toolbar":"Kontekstualna traka sa alatkama Editor","HEX":"HEX","No results found":"Nije pronađen nijedan rezultat","No searchable items":"Nema stavki koje se mogu pretražiti","Editor dialog":"Editor dijalog","Close":"Blizu","Help Contents. To close this dialog press ESC.":"Sadržaj pomoći. Da biste zatvorili ovaj dijalog, pritisnite ESC.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Ispod možete pronaći listu prečica na tastaturi koje se mogu koristiti u uređivaču.","(may require <kbd>Fn</kbd>)":"(možda zahteva Fn)","Accessibility":"Pristupačnost","Accessibility help":"Pomoć za pristupačnost","Press %0 for help.":"Pritisnite %0 za pomoć.","Move focus in and out of an active dialog window":"Pomeranje fokusa u i van aktivnog prozora dijaloga","MENU_BAR_MENU_FILE":"File","MENU_BAR_MENU_EDIT":"Uredi","MENU_BAR_MENU_VIEW":"View","MENU_BAR_MENU_INSERT":"Ubaci","MENU_BAR_MENU_FORMAT":"Format","MENU_BAR_MENU_TOOLS":"Alati","MENU_BAR_MENU_HELP":"Pomoć","MENU_BAR_MENU_TEXT":"Tekst","MENU_BAR_MENU_FONT":"Font","Editor menu bar":"Traka menija uređivača","Please enter a valid color (e.g. \"ff0000\").":"Unesite važeću boju (npr. „ff0000“).","Insert table":"Dodaj tabelu","Header column":"Kolona za zaglavlje","Insert column left":"Dodaj kolonu levo","Insert column right":"Dodaj kolonu desno","Delete column":"Briši kolonu","Select column":"Odaberi kolonu","Column":"Kolona","Header row":"Red za zaglavlje","Insert row below":"Dodaj red ispod","Insert row above":"Dodaj red iznad","Delete row":"Briši red","Select row":"Odaberi red","Row":"Red","Merge cell up":"Spoj ćelije na gore","Merge cell right":"Spoj ćelije na desno","Merge cell down":"Spoj ćelije na dole","Merge cell left":"Spoj ćelije na levo","Split cell vertically":"Deli ćelije uspravno","Split cell horizontally":"Deli ćelije vodoravno","Merge cells":"Spoj ćelije","Table toolbar":"Tabela traka sa alatkama","Table properties":"Svojstva tabele","Cell properties":"Svojstva ćelije","Border":"Granica","Style":"Stil","Width":"Širina","Height":"Visina","Color":"Boja","Background":"Pozadina","Padding":"Postavljanje","Dimensions":"Dimenzija","Table cell text alignment":"Poravnaj tekst u tabeli","Alignment":"Poravnanje","Horizontal text alignment toolbar":"Horizontalna traka sa alatkama za  poravnavanje teksta","Vertical text alignment toolbar":"Vertikalna traka sa alatkama za poravnavanje teksta","Table alignment toolbar":"Traka sa alatkama za poravnavanje tabele","None":"Nijedan","Solid":"Čvrst","Dotted":"Sa tačkama","Dashed":"Razbijeno","Double":"Dvostruki","Groove":"Kolosek","Ridge":"Greben","Inset":"Prilog","Outset":"Početak","Align cell text to the left":"Poravnajte tekst ćelije levo","Align cell text to the center":"Poravnajte tekst ćelije u sredinu","Align cell text to the right":"Poravnajte tekst ćelije desno","Justify cell text":"Opravdajte tekst ćelije","Align cell text to the top":"Poravnajte tekst ćelije prema gore","Align cell text to the middle":"Poravnajte tekst ćelije u sredinu","Align cell text to the bottom":"Poravnajte tekst ćelije prema dole","Align table to the left":"Poravnajte tabelu na levu stranu","Center table":"Centar tabele","Align table to the right":"Poravnajte tabelu na desnu stranu","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Boja je nevažeća. Pokušajte sa \"# FF0000\" ili \"rgb (255,0,0)\" ili \"crvena\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Vrednost je nevažeća. Pokušajte sa „10pk“ ili „2em“ ili jednostavno „2“.","Color picker":"Birač boja","Enter table caption":"Unesite naslov tabele","Keystrokes that can be used in a table cell":"","Move the selection to the next cell":"","Move the selection to the previous cell":"","Insert a new table row (when in the last cell of a table)":"","Navigate through the table":"","Table":"","Styles":"Stilovi","Multiple styles":"Više stilova","Block styles":"Blok stilovi","Text styles":"Stilovi teksta","Special characters":"Specijalni karakteri","Category":"","All":"Svi","Arrows":"Strelica","Currency":"Valute","Latin":"Latinični","Mathematical":"Matematički","Text":"Tekst","leftwards simple arrow":"jednostavna strelica nalevo","rightwards simple arrow":"jednostavna strelica udesno","upwards simple arrow":"jednostavna strelica nagore","downwards simple arrow":"jednostavna strelica nadole","leftwards double arrow":"Dupla strlica levo","rightwards double arrow":"Dupla strelica desno","upwards double arrow":"Dupla strelica prema gore","downwards double arrow":"Dupla strelica prema dole","leftwards dashed arrow":"Prekidana strelica levo","rightwards dashed arrow":"Prekidana strelica desno","upwards dashed arrow":"Prekidana strelica prema gore","downwards dashed arrow":"Prekidana strelica prema dole","leftwards arrow to bar":"Strelica nalevo ka traci","rightwards arrow to bar":"Strelica nadesno ka traci","upwards arrow to bar":"Strelica prema gore ka traci","downwards arrow to bar":"Strelica prema dole ka traci","up down arrow with base":"Strelica nadole sa bazom","back with leftwards arrow above":"Nazad sa strelicom levo","end with leftwards arrow above":"Završite strelicom levo","on with exclamation mark with left right arrow above":"Uključeno sa uzvičnikom sa strelicom levo desno","soon with rightwards arrow above":"Uskoro sa strelicom nadesno","top with upwards arrow above":"Na vrhu sa strelicom prema gore","Dollar sign":"Znak dolara","Euro sign":"Znak eura","Yen sign":"Znak jena","Pound sign":"Znak funti","Cent sign":"Znak centа","Euro-currency sign":"Znak valute eura","Colon sign":"Dvotačka","Cruzeiro sign":"Znak cruzeiro","French franc sign":"Znak francuskog franaka","Lira sign":"Znak lire","Currency sign":"Znak valute","Bitcoin sign":"Znak bitcoina","Mill sign":"Znak mlina","Naira sign":"Znak naira","Peseta sign":"Znak pezeta","Rupee sign":"Znak rupia","Won sign":"Znak von","New sheqel sign":"Znak novi šekel","Dong sign":"Znak dong","Kip sign":"Znak kip","Tugrik sign":"Znak tugrik","Drachma sign":"Znak drahma","German penny sign":"Znak nemački peni","Peso sign":"Znak peso","Guarani sign":"Znak guarani","Austral sign":"Australni znak","Hryvnia sign":"Znak grivna","Cedi sign":"Znak cedi","Livre tournois sign":"Znak livre tournois","Spesmilo sign":"Znak spesmilio","Tenge sign":"Znak tenge","Indian rupee sign":"Znak indijske rupije","Turkish lira sign":"Znak turskih lira","Nordic mark sign":"Nordijski znak","Manat sign":"Znak manat","Ruble sign":"Znak ruble","Latin capital letter a with macron":"Latinsko veliko slovo a sa makronom","Latin small letter a with macron":"Latinsko malo slovo a sa makronom","Latin capital letter a with breve":"Latinsko veliko slovo a sa brevom","Latin small letter a with breve":"Latinsko malo slovo a sa  brevom","Latin capital letter a with ogonek":"Latinsko veliko slovo a sa ogonek","Latin small letter a with ogonek":"Latinsko malo slovo a sa ogonek","Latin capital letter c with acute":"Latinsko veliko slovo c sa akutom","Latin small letter c with acute":"Latinsko malo slovo c sa akutom","Latin capital letter c with circumflex":"Latinsko veliko slovo c sa circumflex","Latin small letter c with circumflex":"Latino malo slovo c sa circumflex","Latin capital letter c with dot above":"Latinsko veliko slovo c sa tačkom iznad","Latin small letter c with dot above":"Latinsko malo slovo c sa tačkom iznad","Latin capital letter c with caron":"Latinsko veliko slovo c sa caronom","Latin small letter c with caron":"Latinsko malo slovo c sa caronom","Latin capital letter d with caron":"Latinsko veliko slovo d sa caronom","Latin small letter d with caron":"Latinsko malo slovo d sa caronom","Latin capital letter d with stroke":"Latinsko veliko slovo d sa stroke","Latin small letter d with stroke":"Latinsko malo slovo d sa stroke","Latin capital letter e with macron":"Latinsko veliko slovo e sa macron","Latin small letter e with macron":"Latinsko malo slovo e sa macron","Latin capital letter e with breve":"Latinsko veliko slovo e sa breve","Latin small letter e with breve":"Latinsko malo slovo e sa breve","Latin capital letter e with dot above":"Latinsko veliko slovo e sa tačkom iznad","Latin small letter e with dot above":"Latinsko malo slovo e sa tačkom iznad","Latin capital letter e with ogonek":"Latinsko veliko slovo e sa ogonek","Latin small letter e with ogonek":"Latinsko malo slovo e sa ogonek","Latin capital letter e with caron":"Latinsko veliko slovo e sa caron","Latin small letter e with caron":"Latinsko malo slovo e sa caron","Latin capital letter g with circumflex":"Latinsko veliko slovo g sa circumflex","Latin small letter g with circumflex":"Latinsko malo slovo g sa circumflex","Latin capital letter g with breve":"Latinsko veliko slovo g sa breve","Latin small letter g with breve":"Latinsko malo slovo g sa breve","Latin capital letter g with dot above":"Latinsko veliko slovo g sa tačkom iznad","Latin small letter g with dot above":"Latinsko malo slovo g sa tačkom iznad","Latin capital letter g with cedilla":"Latinsko veliko slovo g sa cedillom","Latin small letter g with cedilla":"Latinsko malo slovo g sa cedillom","Latin capital letter h with circumflex":"Latinsko veliko slovo h sa circumflex","Latin small letter h with circumflex":"Latinsko malo slovo h sa circumflex","Latin capital letter h with stroke":"Latinsko veliko slovo h sa stroke","Latin small letter h with stroke":"Latinsko malo slovo h sa stroke","Latin capital letter i with tilde":"Latinsko veliko slovo i sa tildom","Latin small letter i with tilde":"Latinsko malo slovo i sa tildom","Latin capital letter i with macron":"Latinsko veliko slovo i sa macron","Latin small letter i with macron":"Latinsko malo slovo i sa macron","Latin capital letter i with breve":"Latinsko veloko slovo i sa breve","Latin small letter i with breve":"Latinsko malo slovo i sa breve","Latin capital letter i with ogonek":"Latinsko veliko slovo i sa ogonek","Latin small letter i with ogonek":"Latinsko malo slovo i sa ogonek","Latin capital letter i with dot above":"Latinsko veliko slovo i sa tackom iznad","Latin small letter dotless i":"Latinsko malo slovo i bez tačke","Latin capital ligature ij":"Latinska velika ligatura ij","Latin small ligature ij":"Latinska mala ligatura ij","Latin capital letter j with circumflex":"Latinsko veliko slovo j sa circumflex","Latin small letter j with circumflex":"Latinsko malo slovo j sa circumflex","Latin capital letter k with cedilla":"Latinsko veliko slovo k sa cedila","Latin small letter k with cedilla":"Latinsko malo slovo k sa cedila","Latin small letter kra":"Latinsko malo slovo kra","Latin capital letter l with acute":"Latinsko veloko slovo l sa akutom","Latin small letter l with acute":"Latinsko malo slovo l sa akutom","Latin capital letter l with cedilla":"Latinsko veliko slovo l sa cedila","Latin small letter l with cedilla":"Latinsko malo slovo l sa cedila","Latin capital letter l with caron":"Latinsko veliko slovo l sa caron","Latin small letter l with caron":"Latinsko malo slovo l sa caron","Latin capital letter l with middle dot":"Latinsko veliko slovo l sa srednjom tačkom","Latin small letter l with middle dot":"Latinsko malo slovo l sa srednjom tačkom","Latin capital letter l with stroke":"Latinsko veliko slovo l sa stroke","Latin small letter l with stroke":"Latinsko malo slovo l sa stroke","Latin capital letter n with acute":"Latinsko veliko slovo n sa akutom ","Latin small letter n with acute":"Latinsko malo slovo n sa akutom ","Latin capital letter n with cedilla":"Latinsko veliko slovo n sa cedilom","Latin small letter n with cedilla":"Latinsko malo slovo n sa cedilom","Latin capital letter n with caron":"Latinsko veliko slovo n sa caron","Latin small letter n with caron":"Latinsko malo slovo n sa caron ","Latin small letter n preceded by apostrophe":"Latinsko malo slovo n koje prethodi apostrof","Latin capital letter eng":"Latinsko veliko slovo eng","Latin small letter eng":"Latinsko malo slovo eng","Latin capital letter o with macron":"Latinsko veliko slovo o sa macron","Latin small letter o with macron":"Latinsko malo slovo o sa macron","Latin capital letter o with breve":"Latinsko veliko slovo o sa breve","Latin small letter o with breve":"Latinsko malo slovo o sa breve","Latin capital letter o with double acute":"Latinsko veliko slovo o sa dvostrukom akutom","Latin small letter o with double acute":"Latinsko malo slovo o sa dvostrukom akutom","Latin capital ligature oe":"Latinska velika ligatura oe","Latin small ligature oe":"Latinska mala ligatura oe","Latin capital letter r with acute":"Latinsko veliko slovo r sa akutom","Latin small letter r with acute":"Latinsko malo slovo r sa akutom","Latin capital letter r with cedilla":"Latinsko veliko slovo r sa cedila","Latin small letter r with cedilla":"Latinsko malo slovo r sa cedila","Latin capital letter r with caron":"Latinsko veliko slovo r sa caron","Latin small letter r with caron":"Latinsko malo slovo r sa caron","Latin capital letter s with acute":"Latinsko veliko slovo s sa akutom","Latin small letter s with acute":"Latinsko malo slovo s sa akutom","Latin capital letter s with circumflex":"Latinsko veliko slovo s sa circumflex","Latin small letter s with circumflex":"Latinsko malo slovo s sa circumflex","Latin capital letter s with cedilla":"Latinsko veliko slovo s sa cedila","Latin small letter s with cedilla":"Latinsko malo slovo s sa cedila","Latin capital letter s with caron":"Latinsko veliko slovo s sa caron","Latin small letter s with caron":"Latinsko malo slovo s sa caron","Latin capital letter t with cedilla":"Latinsko veliko slovo t sa cedila","Latin small letter t with cedilla":"Latinsko malo slovo t sa cedila","Latin capital letter t with caron":"Latinsko veliko slovo t sa caron","Latin small letter t with caron":"Latinsko malo slovo t sa caron","Latin capital letter t with stroke":"Latinsko veliko slovo t sa stroke","Latin small letter t with stroke":"Latinsko malo slovo t sa stroke","Latin capital letter u with tilde":"Latinsko veliko slovo u sa tildom","Latin small letter u with tilde":"Latinsko malo slovo u sa tildom","Latin capital letter u with macron":"Latinsko veliko slovo u sa macron","Latin small letter u with macron":"Latinsko malo slovo u sa macron","Latin capital letter u with breve":"Latinsko veliko slovo u sa breve","Latin small letter u with breve":"Latinsko malo slovo u sa breve","Latin capital letter u with ring above":"Latinsko veliko slovo u s prstenom iznad","Latin small letter u with ring above":"Latinsko malo slovo u s prstenom iznad","Latin capital letter u with double acute":"Latinsko veliko slovo u s dvostrukom akutom","Latin small letter u with double acute":"Latinsko malo slovo u s dvostrukom akutom","Latin capital letter u with ogonek":"Latinsko veliko slovo u sa ogonek","Latin small letter u with ogonek":"Latinsko malo slovo u sa ogonek","Latin capital letter w with circumflex":"Latinsko veliko slovo w sa circumflex","Latin small letter w with circumflex":"Latinsko malo slovo w sa circumflex","Latin capital letter y with circumflex":"Latinsko veliko slovo y sa circumflex","Latin small letter y with circumflex":"Latinsko malo slovo y sa circumflex","Latin capital letter y with diaeresis":"Latinsko veliko slovo y sa dijarezom","Latin capital letter z with acute":"Latinsko veliko slovo z sa akutom","Latin small letter z with acute":"Latinsko malo slovo z sa akutom","Latin capital letter z with dot above":"Latinsko veliko slovo z sa tačkom iznad","Latin small letter z with dot above":"Latinsko malo slovo z sa tačkom iznad","Latin capital letter z with caron":"Latinsko veliko slovo z sa caron","Latin small letter z with caron":"Latinsko malo slovo z sa caron","Latin small letter long s":"Latinsko malo slovo dugačko s","Less-than sign":"Znak manje od","Greater-than sign":"Znak veće od","Less-than or equal to":"Znak manje od ili jednako","Greater-than or equal to":"Znak veće od ili jednako","En dash":"En crtica","Em dash":"Em crtica","Macron":"Macron","Overline":"Overline","Degree sign":"Znak stepena","Minus sign":"Znak minus","Plus-minus sign":"Znak plus-minus","Division sign":"Znak divizije","Fraction slash":"Crta frakcije","Multiplication sign":"Znak množenja","Latin small letter f with hook":"Latinsko malo slovo f sa kukom","Integral":"Integral","N-ary summation":"N-ari zbir","Infinity":"Beskonačnost","Square root":"Kvadratni koren","Tilde operator":"Tilde operator","Approximately equal to":"Otprilike jednako","Almost equal to":"Skoro jednako","Not equal to":"Nejednako sa","Identical to":"Identičan","Element of":"Element od","Not an element of":"Nije element","Contains as member":"Sadrži kao član","N-ary product":"N-ari proizvod","Logical and":"Logički i","Logical or":"Logički ili","Not sign":"Nije znak","Intersection":"Raskrsnica","Union":"Unija","Partial differential":"Delimični diferencijal","For all":"Za sve","There exists":"Postoji","Empty set":"Prazan set","Nabla":"Nabla","Asterisk operator":"Asterisk operator","Proportional to":"Srazmerno","Angle":"Ugao","Vulgar fraction one quarter":"Vulgarna frakcija jedna četvrtina","Vulgar fraction one half":"Vulgarna frakcija jedna polovina","Vulgar fraction three quarters":"Vulgarna frakcija tri četvrtine","Single left-pointing angle quotation mark":"Pojedinačni navodnik ugla levog pokazivanja","Single right-pointing angle quotation mark":"Pojedinačni navodnik ugla desnog pokazivanja","Left-pointing double angle quotation mark":"Levi dvostrani navodnik dvostrukog ugla","Right-pointing double angle quotation mark":"Desni dvostrani navodnik dvostrukog ugla","Left single quotation mark":"Levi pojedinačni navodnik","Right single quotation mark":"Desni pojedinačni navodnik","Left double quotation mark":"Levi dvostruki navodnik","Right double quotation mark":"Desni dvostruki navodnik","Single low-9 quotation mark":"Jedan niski-9 navodnik","Double low-9 quotation mark":"Dvostruki niski-9 navodnik","Inverted exclamation mark":"Obrnuti uzvičnik","Inverted question mark":"Obrnuti upitnik","Two dot leader":"Vodja sa dve tačke","Horizontal ellipsis":"Horizontalna elipsa","Double dagger":"Dvostruki bodež","Per mille sign":"Znak per mile","Per ten thousand sign":"Znak za deset hiljada","Double exclamation mark":"Dvosrtuki uzvičnik","Question exclamation mark":"Znak upitnika uzvičnika","Exclamation question mark":"Znak uzvičnika upitnika","Double question mark":"Dvostruki upitnik","Copyright sign":"Simbol autorskog prava","Registered sign":"Registrovani znak","Trade mark sign":"Znak brenda","Section sign":"Znak sekcija","Paragraph sign":"Znak paragraf","Reversed paragraph sign":"Obrnuti znak paragrafa","Source":"Izvor","Show source":"","Show blocks":"Prikaži blokove","Select all":"Označi sve","Disable editing":"Nemoguće uređivanje","Enable editing":"Omogući uređivanje","Previous editable region":"Prethodna regija za uređivanje","Next editable region":"Sledeća regija za uređivanje","Navigate editable regions":"Pronađi regije za uređivanje","Remove Format":"Ukloni formatiranje","Page break":"Prelom stranice","media widget":"Media widget","Media URL":"Media URL","Paste the media URL in the input.":" Nalepi medijski URL u polje za unos.","Tip: Paste the URL into the content to embed faster.":"Savet: Zalepite URL u sadržaj da bi ste ga brže ugradili.","The URL must not be empty.":"URL ne sme biti prazan.","This media URL is not supported.":"Ovaj media URL tip nije podržan.","Insert media":"Dodaj media","Media":"","Media toolbar":"Mediji traka sa alatkama","Open media in new tab":"Otvorite medije u novoj kartici","Numbered List":"Lista sa brojevima","Bulleted List":"Nabrajane liste","To-do List":"Lista obaveza","Bulleted list styles toolbar":"Traka sa alatkama za nabrajane liste","Numbered list styles toolbar":"Traka sa altakama za liste sa brojevima","Toggle the disc list style":"Uključite / isključite stil liste diskova","Toggle the circle list style":"Uključite / isključite stil liste krugova","Toggle the square list style":"Uključite / isključite stil liste kvadrata","Toggle the decimal list style":"Uključi / isključi stil dekadne liste","Toggle the decimal with leading zero list style":"Prebaci decimalni znak sa vodećim stilom liste nula","Toggle the lower–roman list style":"Uključite / isključite stil donje rimske liste","Toggle the upper–roman list style":"Uključite / isključite stil gornje rimske liste","Toggle the lower–latin list style":"Uključite / isključite stil donje liste latinice","Toggle the upper–latin list style":"Uključite / isključite stil gornje liste latinice","Disc":"Disk","Circle":"Krug","Square":"Kvadrat","Decimal":"Decimala","Decimal with leading zero":"Decimalni broj sa nulom na početku","Lower–roman":"Donji - rimski","Upper-roman":"Gornji - rimski","Lower-latin":"Donji - latinski","Upper-latin":"Gornji - latinski","List properties":"Navedite svojstva","Start at":"Početi u","Invalid start index value.":"Nevažeća vrednost početnog indeksa.","Start index must be greater than 0.":"Početni indeks mora biti veći od 0.","Reversed order":"Obrnuti redosled","Keystrokes that can be used in a list":"Pritisci na tastere koji se mogu koristiti na listi","Increase list item indent":"Povećaj uvlačenje stavke liste","Decrease list item indent":"Smanji uvlačenje stavke liste","Entering a to-do list":"Unošenje liste obaveza","Leaving a to-do list":"Ostavljanje liste obaveza","Unlink":"Оtkloni link","Link":"Link","Link URL":"URL link","Link URL must not be empty.":"URL linka ne sme biti prazan.","Link image":"Link slike","Edit link":"Ispravi link","Open link in new tab":"Otvori link u novom prozoru","This link has no URL":"Link ne sadrži URL","Open in a new tab":"Otvori u novoj kartici","Downloadable":"Moguće preuzimanje","Create link":"Kreirajte vezu","Move out of a link":"Pomerite se sa veze","Language":"Jezik","Choose language":"Izaberi jezik","Remove language":"Odstrani jezik","Increase indent":"Povećaj uclačenje","Decrease indent":"Smanji uvlačenje","image widget":"modul sa slikom","Wrap text":"Prelomiti tekst","Break text":"Prelom teksta","In line":"U redu","Side image":"Bočna slika","Full size image":"Slika u punoj veličini","Left aligned image":"Leva slika","Centered image":"Slika u sredini","Right aligned image":"Desna slika","Change image text alternative":"Izmena alternativnog teksta","Text alternative":"Alternativni tekst","Enter image caption":"Odredi tekst ispod slike","Insert image":"Dodaj sliku","Replace image":"Zamenite sliku","Upload from computer":"Otpremite sa računara","Replace from computer":"Zamenite sa računara","Upload image from computer":"Otpremite sliku sa računara","Image from computer":"Slika sa računara","From computer":"Sa kompjutera","Replace image from computer":"Zamenite sliku sa računara","Upload failed":"Postavljanje neuspešno","You have no image upload permissions.":"","Image toolbar":"Slika traka sa alatkama","Resize image":"Promenite veličinu slike","Resize image to %0":"Promenite veličinu slike na% 0","Resize image to the original size":"Promenite veličinu slike do originalne veličine","Resize image (in %0)":"Promenite veličinu slike (u %0)","Original":"Original","Custom image size":"Prilagođena veličina slike","Custom":"Prilagodjen","Image resize list":"Lista veličine slike","Insert image via URL":"Ubaci sliku preko URL-a","Insert via URL":"Ubaci preko URL-a","Image via URL":"Slika preko URL-a","Via URL":"Preko URL-a","Update image URL":"Ažuriraj URL slike","Caption for the image":"Natpis za sliku","Caption for image: %0":"Natpis za sliku:%0","The value must not be empty.":"Vrednost ne sme biti prazna.","The value should be a plain number.":"Vrednost treba da bude običan broj.","Uploading image":"Otpremanje slike","Image upload complete":"Otpremanje slike je završeno","Error during image upload":"Greška tokom otpremanja slike","Image":"Slika","HTML object":"HTML objеkat","Insert HTML":"Umetni HTML","HTML snippet":"HTML deo","Paste raw HTML here...":"Ovde nalepite HTML ...","Edit source":"Uredi izvor","Save changes":"Sačuvaj promene","No preview available":"Prikaz nije dostupan","Empty snippet content":"Sadržaj praznog isečka","Horizontal line":"Horizontalna razdelna linija","Yellow marker":"Žuti marker","Green marker":"Zeleni marker","Pink marker":"Roza marker","Blue marker":"Plavi marker","Red pen":"Crvena olovka","Green pen":"Zelena olovka","Remove highlight":"Ukloni isticanje","Highlight":"Isticanje","Text highlight toolbar":"Alatke za markiranje teksta","Paragraph":"Pasus","Heading":"Stilovi","Choose heading":"Odredi stil","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","Type your title":"Odredite naslov","Type or paste your content here.":"Upišite ili nalepite naslov","Font Size":"Veličina fonta","Tiny":"Sitno","Small":"Malo","Big":"Veliko","Huge":"Ogromno","Font Family":"Font","Default":"Оsnovni","Font Color":"Boja slova","Font Background Color":"Boja pozadine slova","Document colors":"Boje dokumenta","Find and replace":"Nađji i zameni","Find in text…":"Pronađji u tekstu…","Find":"Pronađji","Previous result":"Prethodni rezultat","Next result":"Sledeći rezultat","Replace":"Zameni","Replace all":"Zameni sve","Match case":"Podudaranje slučaj","Whole words only":"Samo cele reči","Replace with…":"Zameni sa…","Text to find must not be empty.":"Tekst za pronalaženje ne sme biti prazan.","Tip: Find some text first in order to replace it.":"Savet: Prvo pronađjite neki tekst da biste ga zamenili.","Advanced options":"Napredne opcije","Find in the document":"Pronađite u dokumentu","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Umetnite meku pauzu (element &lt;br&gt;)","Insert a hard break (a new paragraph)":"Ubacite čvrstu pauzu (novi pasus)  ","Cancel":"Odustani","Clear":"Obriši","Remove color":"Otkloni boju","Restore default":"Vrati podrazumevano","Save":"Sačuvaj","Show more items":"Prikaži još stavki","%0 of %1":"%0 of %1","Cannot upload file:":"Postavljanje fajla je neuspešno:","Rich Text Editor. Editing area: %0":"Uređivač bogatijeg teksta. Prostor za uređivanje:  %0","Insert with file manager":"Ubacite pomoću menadžera datoteka","Replace with file manager":"Zamenite menadžerom datoteka","Insert image with file manager":"Umetnite sliku pomoću menadžera datoteka","Replace image with file manager":"Zamenite sliku menadžerom datoteka","File":"File","With file manager":"Sa menadžerom datoteka","Toggle caption off":"Isključivanje natpisa","Toggle caption on":"Uključite naslov","Content editing keystrokes":"Pritisci na tastere za uređivanje sadržaja","These keyboard shortcuts allow for quick access to content editing features.":"Ove prečice na tastaturi omogućavaju brz pristup funkcijama za uređivanje sadržaja.","User interface and content navigation keystrokes":"Korisnički interfejs i tasteri za navigaciju sadržaja  ","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Koristite sledeće tastere za efikasniju navigaciju u korisničkom interfejsu CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Zatvorite kontekstualne balone, padajuće menije i dijaloge","Open the accessibility help dialog":"Otvorite dijalog pomoći za pristupačnost","Move focus between form fields (inputs, buttons, etc.)":"Pomerite fokus između polja obrasca (unosi, dugmad, itd.)","Move focus to the menu bar, navigate between menu bars":"Premestite fokus na traku menija, navigirajte između traka menija","Move focus to the toolbar, navigate between toolbars":"Premestite fokus na traku sa alatkama, navigirajte između traka sa alatkama","Navigate through the toolbar or menu bar":"Krećite se kroz traku sa alatkama ili traku menija","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Izvršite trenutno fokusirano dugme. Izvršavanje dugmadi koja su u interakciji sa sadržajem uređivača pomera fokus nazad na sadržaj.","Accept":"Prihvati","Insert code block":"Dodaj blok koda","Plain text":"Običan tekst","Leaving %0 code snippet":"Ostavljate %0 isečak koda","Entering %0 code snippet":"Unosite %0 isečak koda","Entering code snippet":"Unošenje isečka koda","Leaving code snippet":"Ostavljanje fragmenta koda  ","Code block":"Blok koda","Copy selected content":"Kopirajte izabrani sadržaj","Paste content":"Nalepite sadržaj","Paste content as plain text":"Nalepite sadržaj kao običan tekst","Insert image or file":"Dodaj sliku ili fajl","Could not obtain resized image URL.":"URL slikа promenjeniih dimenzija nije dostupna.","Selecting resized image failed":"Odabir slike promenjenih dimenzija nije uspešnо","Could not insert image at the current position.":"Nemoguće je dodati sliku na ovo mesto.","Inserting image failed":"Dodavanje slike je neuspešno","Open file manager":"Otvori upravljač datotekama","Cannot determine a category for the uploaded file.":"Nije moguće odrediti kategoriju za otpremljenu datoteku.","Cannot access default workspace.":"Nije moguće pristupiti podrazumevanom radnom prostoru.","You have no image editing permissions.":"","Edit image":"Uredi sliku","Processing the edited image.":"Obrada uređene slike.","Server failed to process the image.":"Server nije uspeo da obradi sliku.","Failed to determine category of edited image.":"Određivanje kategorije uređene slike nije uspelo.","Block quote":"Citat","Bold":"Podebljano","Italic":"Kurziv","Underline":"Podvučen","Code":"Kod","Strikethrough":"Precrtan","Subscript":"Index dole","Superscript":"Index gore","Italic text":"Kurziv tekst","Move out of an inline code style":"Izađite iz inline stila koda","Bold text":"Zadebljani tekst","Underline text":"Podvuci tekst","Strikethrough text":"Precrtan tekst","Saving changes":"Sačuvaj izmene","Revert autoformatting action":"Vrati radnju automatskog formatiranja","Align left":"Levo ravnanje","Align right":"Desno ravnanje","Align center":"Centralno ravnanje","Justify":"Obostrano ravnanje","Text alignment":"Ravnanje teksta","Text alignment toolbar":"Alatke za ravnanje teksta"},getPluralForm(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);}}};
e[ 'sr-latn' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'sr-latn' ].dictionary = Object.assign( e[ 'sr-latn' ].dictionary, dictionary );
e[ 'sr-latn' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
