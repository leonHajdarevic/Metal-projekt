import './App.css';
import slika1 from "./img/head.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function naslovna() {
    return (
        <div className="App">
            <Header/>

            <div className="head">
                <h1>Metal Muzika</h1>
            </div>

            <div className="navbar">
                <table className='nav'>
                    <tr>
                        <td>
                            <Link to="/srednji">Metal kroz kraj 1990-ih te kroz 2000-te</Link>
                        </td>
                        <td>
                            <Link to="/novi">Metal do kraja 2000-ih te kroz 2010-te i 2020-te</Link>
                        </td>
                        <td>
                            <Link to="/zene">Žene u metalu</Link>
                        </td>
                        <td>
                            <Link to="/natjecaj">Budi metalac mjeseca!</Link>
                        </td>
                    </tr>
                </table>
            </div>

            <br />

            <div className="slika">
                <img src={slika1} />
            </div>

            <br />
            <br />

            <div>
                <h1>Generalno o Metalu</h1>
                <p>
                    Metal, također službeno nazvan "heavy metal", je podžanr rock glazbe
                    koji naglašava volumen, brzinu i snagu. Kao rock glazba,
                    karakteristike metal glazbe sastoje se od velikih zvukova, naglašenih
                    otkucaja, duge i složene gitarske solaže između pjesama, i ekstremne
                    glasnoća. Kada su u pitanju njihove teme, heavy metal pjesme se obično
                    fokusiraju na agresiju i muškost.
                </p>
                <p>
                    Godine 1968. osnovana su tri najpoznatija pionira žanra – britanski
                    bendovi Led Zeppelin, Black Sabbath i Deep Purple. Iako su htjeli
                    privući široku publiku, kritičari su ih često ismijavali. Nekoliko
                    američkih bendova modificiralo je heavy metal u pristupačnije oblike
                    tijekom 1970-ih: sirovi, ljigavi zvuk i šok rock Alicea Coopera i
                    Kissa; blues ukorijenjeni rock Aerosmitha; i blistave gitarske
                    predloške i party rock Van Halena. Sredinom 1970-ih, Judas Priest je
                    pomogao potaknuti evoluciju žanra odbacujući velik dio njegovog blues
                    utjecaja, dok je Motörhead uveo punk rock senzibilitet i sve veći
                    naglasak na brzini. Počevši od kasnih 1970-ih, bendovi u novom valu
                    britanskog heavy metala kao što su Iron Maiden i Saxon slijedili su na
                    sličan način. Do kraja desetljeća obožavatelji heavy metala postali su
                    poznati kao "metalci" ili "headbangeri". Stihovi nekih metal žanrova
                    postali su povezani s agresijom i mačizmom, problemom koji je ponekad
                    dovodio do optužbi za mizoginiju.
                </p>
            </div>

            <div>
                <h1>Karakteristike</h1>
                <p>
                    Heavy metal tradicionalno karakteriziraju glasne distorzirane gitare,
                    naglašeni ritmovi, gust zvuk basa i bubnja te snažan vokal. Heavy
                    metal podžanrovi različito naglašavaju, mijenjaju ili izostavljaju
                    jedan ili više ovih atributa. Tipična postava benda uključuje
                    bubnjara, basista, ritam gitarista, glavnog gitarista i pjevača, koji
                    može, ali ne mora biti instrumentalist. Instrumenti s tipkama ponekad
                    se koriste za poboljšanje punoće zvuka.
                </p>
                <p>
                    Električna gitara i zvučna snaga koju projicira kroz pojačanje
                    povijesno je bila ključni element u heavy metalu. Zvuk heavy metal
                    gitare dolazi od kombinirane upotrebe velike glasnoće i teške dlačice.
                    Za ton klasične heavy metal gitare, gitaristi održavaju dobitak na
                    umjerenim razinama, bez pretjeranog izobličenja pretpojačala ili
                    pedale, kako bi zadržali otvorene prostore i zrak u glazbi; gitarsko
                    pojačalo se pojačava kako bi proizvelo karakteristiku "udaranja i
                    mljevenja". Zvuk thrash metal gitare ima skupljene srednje frekvencije
                    i čvrsto komprimirani zvuk s više frekvencija basa. Gitarske solaže su
                    "bitan element koda heavy metala... koji naglašava značaj gitare" za
                    žanr. Većina heavy metal pjesama "sadrži barem jednu solo gitaru", što
                    je "primarno sredstvo putem kojeg izvođač heavy metala izražava
                    virtuoznost".
                </p>
                <p>
                    Neke su iznimke nu metal i grindcore bendovi, koji imaju tendenciju
                    izostavljanja gitarskih solaža. S dionicama ritam gitare, "teški zvuk
                    škripanja u heavy metalu ... [nastaje] stišavanjem žica dlanom" rukom
                    za prebiranje i korištenjem distorzije. Stišavanje dlana stvara
                    čvršći, precizniji zvuk i naglašava niske tonove.
                </p>
            </div>

            <div>
                <h1>Podžanrovi metala</h1>
                <h2>Thrash metal</h2>
                <p>
                    Thrash metal pojavio se ranih 1980-ih pod utjecajem hardcore punka i
                    novog vala britanskog heavy metala, osobito pjesama u ubrzanom stilu
                    poznatom kao speed metal. Pokret je započeo u Sjedinjenim Državama, a
                    Bay Area thrash metal je bila vodeća scena. Zvuk koji su razvile
                    thrash grupe bio je brži i agresivniji od zvuka originalnih metal
                    bendova i njihovih glam metal nasljednika. Gitarski rifovi niskog
                    registra obično su prekriveni oštrim ritmovima. Stihovi često
                    izražavaju nihilističke stavove ili se bave društvenim problemima
                    koristeći visceralni, krvavi jezik. Thrash je opisan kao oblik "urbane
                    mučne glazbe" i "blijedoliki rođak rapa".
                </p>
                <p>
                    Podžanr je popularizirala "velika četvorka thrasha": Metallica,
                    Anthrax, Megadeth i Slayer. Tri njemačka benda, Kreator, Sodom i
                    Destruction, odigrala su središnju ulogu u donošenju stila u Europu
                    Iako je thrash metal započeo kao underground pokret i ostao to
                    uglavnom gotovo cijelo desetljeće, vodeći bendovi scene počeli su
                    dosezati širu publiku. Metallica je dovela zvuk među 40 najboljih na
                    Billboardovoj ljestvici albuma 1986. s Master of Puppets, prvom
                    platinastom pločom tog žanra. Dvije godine kasnije album benda ... And
                    Justice for All zasjeo je na 6. mjesto, dok su Megadeth i Anthrax
                    također imali top 40 ploča na američkim top listama.
                </p>
                <p>
                    Iako manje komercijalno uspješan od ostatka velike četvorke, Slayer je
                    izdao jednu od definitivnih ploča žanra: Reign in Blood (1986.)
                    zaslužan je za uključivanje žešćih gitarskih tonova i uključivanje
                    eksplicitnih prikaza smrti, patnje, nasilja i okultnog u stihovima
                    thrash metala . Slayer je privukao sljedbenike među ultradesničarskim
                    skinheadima , a bend su pratile optužbe za promicanje nasilja i
                    nacističkih tema. Iako Slayer nisu bili značajno medijski izloženi,
                    njihova je glazba odigrala ključnu ulogu u razvoju ekstremnog metala .
                </p>

                <h2>Death metal</h2>
                <p>
                    Thrash metal se ubrzo počeo razvijati i dijeliti na ekstremnije metal
                    žanrove. "Slayerova glazba bila je izravno odgovorna za uspon death
                    metala", prema MTV Newsu. NWOBHM bend Venom također je bio važan
                    rodonačelnik. Death metal pokret u Sjevernoj Americi i Europi usvojio
                    je i naglasio elemente bogohuljenja i dijabolizma koji se koriste
                    takvim činovima. Floridski Death , Possessed iz San Francisco Bay Area
                    i Necrophagia iz Ohija prepoznati su kao temeljni bendovi u stilu. Sva
                    trojica su zaslužna za nadahnuće imena podžanra. Possessed su to
                    posebno učinili putem svog demo snimka iz 1984., Death Metal , i
                    njihove pjesme "Death Metal", koja dolazi s njihovog debi albuma iz
                    1985., Seven Churches .
                </p>
                <p>
                    Death metal koristi brzinu i agresiju i thrasha i hardcorea,
                    stopljenog s tekstovima koji su zaokupljeni nasiljem u slasher
                    filmovima Z-grade i sotonizmom . Death metal vokali su tipično
                    sumorni, uključuju grleno " smrtno režanje ", visokotonsko vrištanje ,
                    "smrtno rašpanje" i druge neuobičajene tehnike. Duboki, agresivni
                    vokalni stil nadopunjuju niže ugođene, jako distorzirane gitare i
                    iznimno brze udaraljke, često s brzim bubnjanjem kontrabasa i blast
                    ritmovima u stilu "zida zvuka" . Česte promjene tempa i takta te
                    sinkopa su također tipične.
                </p>
                <p>
                    Death metal, kao i thrash metal, općenito odbacuje teatralnost ranijih
                    metal stilova, odlučujući se umjesto toga za svakodnevni izgled
                    poderanih traperica i običnih kožnih jakni. Jedna velika iznimka od
                    ovog pravila bio je Glen Benton iz Deicidea , koji je stavio obrnuti
                    križ na svoje čelo i nosio oklop na pozornici. Morbidni anđeo usvojio
                    je neofašističke slike. Ova dva benda, zajedno s Death i Obituary ,
                    bili su predvodnici glavne death metal scene koja se pojavila na
                    Floridi sredinom 1980-ih. U Velikoj Britaniji, srodni stil grindcore ,
                    predvođen bendovima kao što su Napalm Death i Extreme Noise Terror ,
                    proizašao je iz anarho-punk pokreta.
                </p>

                <h2>Black metal</h2>
                <p>
                    Prvi val black metala pojavio se u Europi početkom i sredinom 1980-ih,
                    a predvodili su ga Venom iz Ujedinjenog Kraljevstva, Mercyful Fate iz
                    Danske , Hellhammer i Celtic Frost iz Švicarske te Bathory iz Švedske
                    . Do kasnih 1980-ih, norveški bendovi kao što su Mayhem i Burzum bili
                    su na čelu drugog vala. Black metal se znatno razlikuje u stilu i
                    kvaliteti produkcije, iako većina bendova naglašava vrišteće i
                    režajuće vokale, visoko distorzirane gitare koje se često sviraju s
                    brzim trzanjem tremola , mračnu atmosferu i namjerno lo-fi produkciju,
                    često s ambijentalnom bukom i pozadinsko šištanje.
                </p>
                <p>
                    Sotonističke teme česte su u black metalu, iako mnogi bendovi crpe
                    inspiraciju iz drevnog poganstva , promičući povratak navodnim
                    pretkršćanskim vrijednostima. Brojni black metal bendovi također
                    "eksperimentiraju sa zvukovima svih mogućih oblika metala, folka,
                    klasične glazbe, elektronike i avangarde". Bubnjar Darkthronea Fenriz
                    objasnio je: "To je imalo veze s produkcijom, tekstovima, načinom na
                    koji su se odijevali i predanošću stvaranju ružnih, sirovih, sumornih
                    stvari. Nije bilo generičkog zvuka."
                </p>
                <p>
                    Iako su bendovi poput Sarcófaga nosili corpsepaint , do 1990. Mayhem
                    ga je redovito nosio; mnogi drugi black metal izvođači također su
                    prihvatili izgled. Bathory je nadahnuo vikinški metal i folk metal
                    pokrete, a Immortal je stavio blast beatove u prvi plan. Neki bendovi
                    na skandinavskoj black metal sceni postali su povezani sa značajnim
                    nasiljem u ranim 1990-ima, s Mayhemom i Burzumom povezanim s paljenjem
                    crkava. Rastuća komercijalna pompa oko death metala izazvala je
                    reakciju; počevši od Norveške, velik dio skandinavskog metal
                    undergrounda preusmjerio se kako bi podržao black metal scenu koja se
                    opirala kooptaciji od strane komercijalne metal industrije.
                </p>

                <h2>Power metal</h2>
                <p>
                    Tijekom kasnih 1980-ih, power metal scena okupila se uglavnom kao
                    reakcija na oštrinu deatha i black metala. Iako relativno underground
                    stil u Sjevernoj Americi, uživa veliku popularnost u Europi, Japanu i
                    Južnoj Americi. Power metal fokusiran je na optimistične, epske
                    melodije i teme koje "privlače slušateljev osjećaj hrabrosti i
                    ljepote". Prototip zvuka uspostavili su sredinom do kasnih 1980-ih
                    njemački Helloween , koji su na svojim albumima Keeper of the Seven
                    Keys iz 1987. i 1988. kombinirali snažne riffove, melodični pristup i
                    visok, "čist" " stil pjevanja bendova kao što su Judas Priest i Iron
                    Maiden s thrash brzinom i energijom, "kristalizirajući zvučne sastojke
                    onoga što je danas poznato kao power metal".
                </p>
                <p>
                    Tradicionalni power metal bendovi kao što su švedski HammerFall ,
                    engleski DragonForce i američki Iced Earth imaju zvuk koji jasno
                    duguje klasičnom NWOBHM stilu. Mnogi power metal bendovi kao što su
                    američki Kamelot , finski Nightwish , Stratovarius i Sonata Arctica ,
                    talijanski Rhapsody of Fire i ruski Catharsis imaju "simfonijski" zvuk
                    baziran na klavijaturama , ponekad angažirajući orkestre i operne
                    pjevače. Power metal izgradio je snažnu bazu obožavatelja u Japanu i
                    Južnoj Americi, gdje su bendovi poput brazilske Angre i argentinske
                    Rata Blanca popularni.
                </p>
                <p>
                    Blisko povezan s power metalom je progresivni metal , koji usvaja
                    složeni pristup kompoziciji bendova kao što su Rush i King Crimson .
                    Ovaj se stil pojavio u Sjedinjenim Državama početkom i sredinom
                    1980-ih, s inovatorima kao što su Queensrÿche , Fates Warning i Dream
                    Theater . Mješavina progresivnog i power metal zvuka tipična je za
                    Symphony X iz New Jerseya , čiji je gitarist Michael Romeo među
                    najpriznatijim shredderima novijeg doba.
                </p>

                <h2>Doom metal</h2>
                <p>
                    Pojavljujući se sredinom 1980-ih s bendovima kao što su kalifornijski
                    Saint Vitus , The Obsessed iz Marylanda , čikaški Trouble i švedski
                    Candlemass , doom metal pokret odbacio je naglasak drugih metal
                    stilova na brzini, usporivši svoju glazbu do puzanja. Doom metal vuče
                    korijene iz lirskih tema i glazbenog pristupa ranog Black Sabbatha.
                    Melvinsi su također značajno utjecali na doom metal i niz njegovih
                    podžanrova. Doom metal naglašava melodiju, melankolična tempa i
                    sepulkralno raspoloženje u odnosu na mnoge druge vrste metala.
                </p>
                <p>
                    zdanje Forest of Equilibrium iz 1991. , debitantskog albuma britanskog
                    benda Cathedral , pomoglo je pokrenuti novi val doom metala. Tijekom
                    istog razdoblja, doom-death fusion stil britanskih bendova Paradise
                    Lost , My Dying Bride i Anathema iznjedrio je europski gothic metal .
                    sa svojim prepoznatljivim aranžmanima s dva vokala, čiji su primjeri
                    Norveški Theatre of Tragedy i Tristania . Newyorški Type O Negative
                    predstavio je američki pogled na stil.
                </p>
                <p>
                    U Sjedinjenim Državama, sludge metal , koji miješa doom metal i
                    hardcore punk, pojavio se kasnih 1980-ih; Eyehategod i Crowbar bili su
                    predvodnici velike mulj scene u Louisiani . Početkom sljedećeg
                    desetljeća, kalifornijski Kyuss i Sleep , inspirirani ranijim doom
                    metal bendovima, predvodili su uspon stoner metala , dok je Earth iz
                    Seattlea pomogao u razvoju podžanra drone metala . Kasnih 1990-ih su
                    se formirali novi bendovi kao što su Goatsnake iz Los Angelesa , s
                    klasičnim stoner/doom zvukom, i Sunn O))) , koji križa granice između
                    dooma, dronea i mračnog ambijentalnog metala; New York Times usporedio
                    je njihov zvuk s " indijskom ragom usred potresa".
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default naslovna;