import './App.css';
import Footer from "./Footer";
import slika3 from "./img/core.jpg";
import { Link } from "react-router-dom";
import Header from "./Header";

function metalNovi() {
    return (
        <div className="App">
            <Header/>

            <div className="navbars">
                <Link to="/">Naslovnica</Link>
            </div>

            <div className="head">
                <h1>Najnoviji stilovi: od sredine do kraja 2000-ih, 2010-ih i 2020-ih</h1>
            </div>

            <br />

            <div className="slika">
                <img src={slika3} />
            </div>

            <br/>
            <br/>

            <h2>Pojava i Razvoj Metalcorea</h2>
            <p>Metalcore, hibrid ekstremnog metala i hardcore punka, pojavio se kao
                komercijalna sila sredinom 2000-ih, nakon što je uglavnom bio underground
                fenomen tijekom 1980-ih i 1990-ih. Pionirski bendovi kao što su Earth Crisis,
                Converge, Hatebreed i Shai Hulud postavili su temelje žanra kombinirajući teške
                rifove i brze ritmove hardcore punka s brutalnošću i tehničkom preciznošću
                ekstremnog metala. Earth Crisis su se posebno istaknuli svojim militantnim
                veganskim i straight edge stavovima, dok su Converge privukli pažnju svojim
                emotivno nabijenim i tehnički sofisticiranim albumima poput "Jane Doe" iz 2001.
                godine.
            </p>
            <p>Do 2004. melodični metalcore – pod utjecajem melodičnog death metala – postao je
                dovoljno popularan da su albumi "The End of Heartache" grupe Killswitch Engage i
                "The War Within" grupe Shadows Fall debitirali na 21. i 20. mjestu, respektivno, na
                Billboardovoj ljestvici albuma. Killswitch Engage su posebno postali istaknuti
                predstavnici žanra zahvaljujući hitovima kao što su "My Last Serenade" i "The End
                of Heartache", čiji su emotivni tekstovi i melodični refreni privukli širu publiku.
                Shadows Fall su također ostvarili uspjeh svojim mješavinom melodičnih gitarskih harmonija
                i agresivnih vokala, pridonoseći popularizaciji žanra.
            </p>

            <h2>Razvoj Mathcorea</h2>
            <p>Još dalje od metalcorea evoluirao je mathcore, ritmički kompliciraniji i progresivniji
                stil koji su iznijeli na vidjelo bendovi kao što su The Dillinger Escape Plan, Converge
                i Protest the Hero. Mathcoreova glavna definirajuća kvaliteta je korištenje neparnih
                taktova i kompleksnih struktura pjesama, a opisano je da posjeduje ritmičku usporedivost
                s free jazzom. The Dillinger Escape Plan, s albumima kao što su "Calculating Infinity" i
                "Miss Machine", postali su poznati po svojoj tehničkoj virtuoznosti i energičnim live nastupima.
                Njihova muzika kombinira frenetičnu energiju hardcore punka s tehničkom složenošću i eksperimentalnim
                pristupom, stvarajući jedinstven i intenzivan zvuk.
            </p>

            <h2>Popularnost Heavy Metala u Europi</h2>
            <p>Heavy metal ostao je popularan u 2000-ima, osobito u kontinentalnoj Europi. Do novog tisućljeća,
                Skandinavija je postala jedno od područja koja proizvode inovativne i uspješne bendove, dok su
                Belgija, Nizozemska i posebno Njemačka bila najznačajnija tržišta. Metal glazba je bolje
                prihvaćena u Skandinaviji i Sjevernoj Europi nego u drugim regijama zbog društvene i političke
                otvorenosti u tim regijama; Posebno se Finska često naziva "obećanom zemljom heavy metala",
                budući da postoji više od 50 metal bendova na svakih 100.000 stanovnika – više nego bilo koja
                druga nacija na svijetu. Etablirani kontinentalni metal bendovi koji su s više albuma smjestili
                u prvih 20 njemačkih ljestvica između 2003. i 2008. uključuju finske Children of Bodom,
                norveški Dimmu Borgir, njemački Blind Guardian i švedski HammerFall.
            </p>
            <p>Skandinavski metal bendovi poput Opetha, Amon Amartha i In Flames također su stekli međunarodnu
                popularnost. Opeth je poznat po svojoj mješavini death metala i progresivnog rocka, dok su
                Amon Amarth i In Flames poznati po melodičnom death metalu s tematikom nordijske mitologije
                i epskih priča.
            </p>

            <h2>Ekstremni Metal i Deathcore</h2>
            <p>U 2000-ima se pojavio žanr ekstremne metal fuzije poznat kao deathcore. Deathcore uključuje
                elemente death metala, hardcore punka i metalcorea. Deathcore ima karakteristike kao što
                su death metal rifovi, hardcore punk breakdowns, smrtno režanje, vokali koji zvuče kao
                "svinjski skvik" i vrištanje. Deathcore bendovi kao što su Whitechapel, Suicide Silence,
                Despised Icon i Carnifex postali su prepoznatljivi po svojoj brutalnoj energiji i tehničkoj
                preciznosti. Whitechapelov album "This Is Exile" iz 2008. godine, kao i Suicide Silenceov
                "The Cleansing" iz 2007., postali su ključni albumi koji su definirali žanr.
            </p>

            <h2>Retro-metal i Njegovi Predstavnici</h2>
            <p>Izraz "retro-metal" korišten je za opisivanje bendova kao što su teksaški The Sword,
                kalifornijski High on Fire, švedski Witchcraft i australski Wolfmother. The Sword's
                "Age of Winters" (2006.) uvelike se oslanjao na rad Black Sabbatha i Pentagrama, dok je
                Witchcraft dodao elemente folk rocka i psihodeličnog rocka. Wolfmotherov istoimeni debitantski
                album iz 2005. uključivao je "orgulje poput Deep Purplea" i "Jimmyja Pagea -vrijedan akordski rif".
                Mastodon, koji svira progresivni/sludge stil metala, nadahnuo je tvrdnje o oživljavanju metala
                u Sjedinjenim Državama, što su neki kritičari nazvali "novim valom američkog heavy metala".
                Mastodonov album "Leviathan" iz 2004. godine, inspiriran romanom "Moby Dick", dobio je pohvale
                kritike i postavio bend kao ključne igrače u modernom metalu. Njihov kasniji album,
                "Crack the Skye" iz 2009. godine, dodatno je učvrstio njihovu reputaciju svojim ambicioznim
                konceptom i kompleksnom muzikom.
            </p>

            <h2>Evolucija Metalcorea i Djenta</h2>
            <p>Do ranih 2010-ih metalcore je evoluirao kako bi sve češće uključivao sintisajzere i elemente
                iz žanrova izvan rocka i metala. Album "Reckless & Relentless" britanskog benda Asking Alexandria,
                koji je prodan u 31.000 primjeraka u prvom tjednu, i album The Devil Wears Prada iz 2011.
                "Dead Throne", koji je prodan u 32.400 primjeraka u prvom tjednu, dosegli su 9. i 10. mjesto
                na Billboard 200 ljestvici. Godine 2013. britanski bend Bring Me the Horizon objavio je svoj
                četvrti studijski album, "Sempiternal", koji je dobio pohvale kritike. Album je debitirao na 3.
                mjestu UK Album Chart-a i na 1. mjestu u Australiji. Album je prodan u 27.522 primjerka u SAD-u
                i zauzeo je 11. mjesto na Billboardovoj ljestvici, što ga čini njihovim izdanjem s najvišom
                ljestvicom u Americi sve do albuma koji je uslijedio, "That's the Spirit", koji je debitirao na
                2. mjestu 2015. godine. "That's the Spirit" označio je daljnju evoluciju njihovog zvuka prema
                više mainstream rock pristupu, dok su zadržali elemente metalcorea.
            </p>
            <p>Također u 2010-ima, metal stil nazvan "djent" razvio se kao spinoff standardnog progresivnog metala.
                Djent glazba koristi ritmičku i tehničku složenost, jako distorzirane gitarske akorde prigušene
                dlanom, sinkopirane riffove i poliritmove uz virtuozno soliranje. Druga tipična karakteristika je
                upotreba gitara sa sedam, osam i devet žica proširenog raspona. Djent bendovi uključuju Periphery,
                Tesseract i Textures. Peripheryjev album "Periphery II: This Time It's Personal" iz 2012. godine
                postao je prekretnica za žanr, dok su Tesseractovi kompleksni aranžmani i atmosferični zvuk na
                albumima poput "Altered State" donijeli nov pristup progresivnom metalu.
            </p>

            <h2>Oživljavanje Nu Metala kroz Elektropop Fuzije</h2>
            <p>Spoj nu metala s elektropopom pjevačica i tekstopisaca Poppy, Grimes i Rina Sawayama doživio je
                popularan i kritički oživljavanje prethodnog žanra kasnih 2010-ih i 2020-ih, posebno na njihovim
                albumima "I Disagree", "Miss Anthropocene" i "Sawayama". Poppy je s "I Disagree" iz 2020. godine
                izazvala senzaciju spajanjem agresivnih gitarskih riffova i elektro-pop melodija, dok je Grimes
                na "Miss Anthropocene" kombinirala mračne, futurističke zvukove s metal elementima. Rina Sawayama
                je na svom albumu "Sawayama" iz 2020. godine donijela eklektičan spoj žanrova, uključujući
                nu metal, pop i R&B, što je rezultiralo širokom hvalom kritike i obožavatelja. Poppy je, osim
                što je integrirala metal u svoj zvuk, poznata po svojoj eklektičnoj i avangardnoj estetici
                koja privlači različite fanove, dok Grimes svojim eksperimentalnim pristupom i temama futurizma
                i tehnologije dodaje dodatnu dimenziju svom zvuku.
            </p>


            <Footer />

        </div>
    );
}

export default metalNovi;