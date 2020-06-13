# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: Mais est-ce que tu as *vu* ce "reportage" à propos de cette chose horrible qui s'est passée quelque part ?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Je déteste vraiment les infos. C'est tout le temps juste du sensationnalisme et du piège-à-clics.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: Sym... sympa comme fête...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: C'est vrai, mais ils font juste ce que le marché les incite à faire. Le *vrai* problème c'est les gens qui cliquent sur les pièges-à-clics.

```
publish("act2",["dee",3]);
```

s: Qui retweeterait un reportage aussi épouvantable, et rendrait tous ses amis tristes ?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Argh, on est d'accord, hein ?

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: Mais est-ce que tu as *vu* ce "reportage" qui est devenu viral ?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Ouais, un truc complètement bidon. Qui tomberait dans le panneau et retweeterait ça ?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: Sym... sympa comme fête...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Sérieusement mec. Genre, t'ouvres Google et tu vérifies d'abord, non ?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Argh, on est d'accord, hein ?

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: Comme je le disais, le Complexe Industriel des Mèmes exploite les chats.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Dis-m'en plus.

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: Sym... sympa comme fête...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Eh bien, hier j'ai vu quelqu'un retweeter un GIF où un chat buvait du lait.

```
publish("act2",["dee",3]);
```

s: Ils ne peuvent pas digérer cette ^merde^ ! Qui retweeterait de la *cruauté animale* comme ça ?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Argh, on est d'accord, hein ?

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: Donc ouais, je n'ai jamais reçu de réponse !

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Même si vous avez matché sur Tinder ?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: Sym... sympa comme fête...

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! J'ai l'air d'{{host_an}} *{{killer}}* ou quoi ? Faut vraiment être parano.

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Argh, on est d'accord, hein ?

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! Peut-être qu'{{l_spronoun}} pense qu'un flirt ne peut pas remplir le vide dans son cœur ?

s: Arrête d'être aussi prude ! Ouvre ton esprit, puis tes jambes !

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Argh, on est d'accord, hein ?

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! Pas si sexy que ça, mais ç'aurait été une bonne prise !

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Attrapez-les tous !™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: DEUXIÈME ROUND : *COMBATTEZ !*

[Oh non, ils nous détestent tous !](#act2a_social)

[T'étais vraiment en train de *reluquer* {{host_lcpronoun}} {{redhead}} ?](#act2a_perv)

[Hé, parlons du sens de la vie.](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: On ruine l'ambiance de la fête en étant un tel tas de tristesse !

`bb({eyes:"shock", body:"two_up"})`

b: On tue la bonne ambiance, là ! On est en train de commettre un ambiancicide volontaire !

`bb({eyes:"normal", body:"normal"})`

b: {{human}}, on doit partir *maintenant* avant que--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: {{host_spronounplural}} sont plus {{pretty}} que nous, ce qui veut dire que si on ose même les *regarder*, alors--

`bb({eyes:"shock", body:"two_up"})`

b: ON EST {{scary}}

`bb({body:"normal"})`

b: On est en train d'être {{an}} {{pervert}} horrible, {{an}} {{pervert}} {{l_scary}} horrible horrible horrib--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: En fin de compte, qu'est-ce qu'on peut vraiment faire qui ait de l'importance ?

`bb({body:"normal", eyes:"sad"})`

b: Contribuer à l'humanité ? Toutes les grandes œuvres se décomposent à la manière d'Ozymandias. L'amour ? La mort séparera toujours ceux qui s'aiment.

`bb({eyes:"sad_r"})`

b: Et de la mort, il y en a ! *On* va mourir. *Nos êtres aimés* vont mourir.

`bb({eyes:"shock", body:"two_up"})`

b: Diable, la Seconde loi de la thermodynamique implique que même notre *univers* va mourir !

`bb({eyes:"suspect", body:"normal"})`

b: Oh, "la mort nous fait apprécier la vie" ? C'est comme dire que l'esclavage, c'est bien parce que ça nous fait apprécier la liberté !

`bb({body:"one_up"})`

b: Oh, "tu dois donner ton propre sens à la vie" ? C'est ce que les cultistes et les théoriciens du complot font !

`bb({eyes:"shock", body:"two_up"})`

b: La vie n'a pas de sens, la mort n'a pas de sens, même le *sens* n'a pas de sens ! Qu'est-ce qu'une âme mortelle est supposée--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: Euh... est-ce-que tu m'entends, {{l_human}} ?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *GASP*

`bb({mouth:"small_talk"})`

b: JE DOIS T'AVERTIR AU SUJET...

[De *DAVANTAGE* du même danger !](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[D'un danger social *différent* !](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[D'un danger moral *différent* !](#act2b_different_moral)
{{/if}}

[Tu ignores le danger ! C'est dangereux, ça !](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: LES ÉMOTIONS SONT CONTAGIEUSES ! DONC SI TU NE PARS PAS TU VAS INFECTER TOUT LE MONDE AVEC TON PROBLÈME MENTAL !

b: Tu vas créer une épidémie mortelle de SYNDROME DE LA TRISTESSE !

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: On doit se barrer d'ici et se mettre en quarantaine dans une petite pièce avec Netflix et livraison à domicile !

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "de quarantaine";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: ARRÊTE D'ÊTRE {{u_scary}}. C'EST ILLÉGAL D'ÊTRE {{u_scary}} !

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Loi des Gens Flippants, Section 74.5 : (1) N'importe qui matant (a) ces épaules musclées (b) ces fesses rebondies (2) doit être certifié par la présente comme

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: "UN GROS PERVERS DÉGUEULASSE"

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "de la loi";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: En fait, même si tu trouves un noble but à ta vie, tu peux *toujours* tout faire foirer !

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel voulait la paix dans le monde et que les cultures se comprennent entre elles. Donc il a décidé de simplifier les voyages.

`bb({eyes:"normal_r"})`

b: Donc il devait trouver un moyen de créer des tunnels pour les trains pour pas cher. Alors, il a inventé un nouveau matériau appelé "dynamite"...

`bb({body:"one_up", eyes:"normal"})`

b: qui a été utilisé pendant la Première Guerre mondiale pour TUER DES MILLIONS DE GENS

`bb({body:"two_up", eyes:"shock"})`

b: C'EST L'EFFET PAPILLON, {{u_human}} ! COMBIEN DE GENS ES-TU ACCIDENTELLEMENT EN TRAIN DE TUER LÀ TOUT DE SUITE

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "de la Première Guerre mondiale";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: En fait, tu sais ce qui est pire que la possibilité que personne ne t'aime ? Que *tout le monde* t'aime.

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: C'est-à-dire, que tu deviennes un de ces *animaux* fêtards en chasse de toujours plus de plaisir.

`bb({body:"normal", mouth:"small"})`

b: Une vie superficielle avec des amis superficiels qui connaissent uniquement ton côté superficiel !

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: {{human}}, on doit fuir ces zombies du plaisir avant qu'ils ne nous transforment en l'{{one}} des leurs !

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "de zombies";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Des gens meurent de famines et de génocides *là maintenant tout de suite* et nous, on fait la fête !

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Une sage personne a un jour dit, "la seule chose qui permet au mal de triompher est l'inaction des hommes de bien".

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: ON EST EN TRAIN DE NE RIEN FAIRE.

`bb({mouth:"small"})`

b: EN FAISANT LA FÊTE, ON EST EN TRAIN D'AIDER *HITLER*.

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "d'Hitler";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Tu penses que t'es en sécurité parce que tu as retiré les batteries du détecteur de monoxyde de carbone ?

`bb({eyes:"suspect_r"})`

b: Tu ne sentiras même pas le poison ! Tu vas juste t'assoupir et après tu vas--

`bb({body:"scream_c_1"})`

b: MOURIIIIIIIIIIIIIIIIIIR

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "de monoxyde de carbone";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: Oh Dieu merci, {{l_human}}, je pense que tu peux m'entendre à nouveau !

`bb({eyes:"closed", body:"point"})`

b: JE DOIS T'AVERTIR À PROPOS...

{{if _.a2_first_choice=="louder"}}
[*D'encore plus* du même danger !](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[*De davantage* du même danger !](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[D'un danger social *différent* !](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[D'un danger moral *différent* !](#act2c_different_moral)
{{/if}}

[Est-ce que t'as vérifié ce punch avant de le boire ?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: En fait, même Netflix & la livraison de nourriture ne nous permettront pas d'être assez {{confined}} ! On pourra toujours infecter le livreur !

`bb({body:"one_up", mouth:"small"})`

b: Il faut qu'on déménage dans le Yukon au Canada, et qu'on se fasse livrer la nourriture par drone !

`bb({body:"two_up", mouth:"normal"})`

b: Et ensuite, le drone devra être stérilisé pour retirer nos GERMES DE SALE TAS DE TRISTESSE

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "de quarantaine";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: {{cpronoun}} {{pervert_bis}} devra être {{condemned}} à 72 heures dans un de ces dispositifs d'humiliation publique médiévaux

b: à moins qu'en fait ce ne soit son *genre de trucs*

`bb({body:"scream_a_1"})`

b: parce que c'est {{an}} TRÈS {{pervert_bis}}

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "de la loi";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: EFFET PAPILLON ! T'es en train d'utiliser un verre en plastique non biodégradable ?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: BAM, DU POISON S'ÉCHAPPE D'UNE DÉCHARGE ET TUE UN ENFANT

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: T'es en train de transpirer et ton cœur bat très fort ?

`bb({body:"scream_a_1"})`

b: BAM, TU METS EN FAILLITE TON ASSURANCE SANTÉ ET DES MILLIONS DE GENS MEURENT

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "de l'effet papillon";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Ces zombies du plaisir boîteront lentement vers toi en marmonnant,

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: DES LIIIIIIKES. DES LIIIIIIIIKES.

`bb({body:"scream_a_1"})`

b: Puis, ils te MORDRONT et te transformeront en {{pleasure_zombie}} !

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "de zombies";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: LES NAZIS MARCHENT AU PAS DANS LES RUES LÀ TOUT DE SUITE

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: Et ils se disent, *heureusement que les 'bonnes personnes' se relâchaient avec des trucs comme la 'détente' et la 'relaxation' !*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Maintenant nos plans vont se dérouler sans souci, le Reich sera là dans les délais !*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "d'Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: En y repensant, est-ce qu'on sait si le bâtiment *a* un détecteur de monoxyde ?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b: Et si on était en train d'être {{poisoned}} *LÀ TOUT DE SUITE ?*

`bb({body:"scream_a_1"})`

b: ON NE VERRAIT MÊME PAS LA MORT S'APPROCHER. ON S'ARRÊTERAIT JUSTE D'EXISTER POUR TOUJOURS ET À JAMA--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "de monoxyde de carbone";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: Et si on était juste *fondamentalement incapable* d'être {{loved}}, ou d'aimer quelqu'un ?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Et si quelque chose était irréversiblement cassé à l'intérieur de nous depuis longtemps ? Ou si cette chose n'avait en fait jamais été là ?

`bb({body:"scream_a_1"})`

b: AHH ON EST {{u_broken}} ! TELLEMENT {{u_broken}} TELLEMENT {{u_broken}} TELLEMENT CASS--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Et si on était juste *fondamentalement {{rotten}} ?*

`bb({body:"one_up", eyes:"sad"})`

b: Les autres ont cette pulsion intérieure de faire le bien, mais nous, on fait le "bien" uniquement par culpabilité ou honte, voire pas du tout.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Et si c'était dans notre nature de blesser les autres ? Et si on ne pouvait rien être *d'autre* qu'un fardeau pour nos proches ?

`bb({body:"scream_a_1"})`

b: AHH ON EST {{u_broken}} ! TELLEMENT {{u_broken}} TELLEMENT {{u_broken}} TELLEMENT CASS--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Je ne suis pas irrationnel. Les gens mettent *vraiment* de la drogue dans les bols de punch. C'est un truc qui se fait vraiment.

`bb({eyes:"suspect"})`

b: {{human}}, est-ce que ta tête te fait mal ? Est-ce que tes membres sont mous ? Je pense qu'on est en train de mourir.

`bb({body:"scream_a_1"})`

b: AHHH ON EST EN TRAIN DE MOURIR ! ON MEURT ON MEURT ON ME--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "de bols de punch";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: P^UUUUTAIN^ !

h: P^UTAIN^ DE P^UTAIN^ DE M^EEEEERDE^

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: Ouais, {{l_human}} ! Je suis trop content que tu m'entendes de nouveau !

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: Pourquoi est-ce que tu m'ignorais ?

`hong({body:"facepalm"})`

h: Oh ^bordel^, espèce d'idiot.

`hong({body:"facepalm_2"})`

h: Tu connais cette histoire des natifs américains ?

h: "Il y a deux loups à l'intérieur de toi, l'un est espoir, l'autre est désespoir, lequel des deux loups gagne ? Celui que tu nourris."

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: J'essayais de *t'affamer*, espèce de ^trou du cul^ sadique !

`hong({body:"smile", mouth:"smile"})`

h: Oh je m'en fiche, je ferai des affirmations positives à la place.

h: *Je suis {{loved}}. Je suis {{kind}}. Je suis {{smart}}. Je suis {{special}}.*

`bb({eyes:"suspect"});`

[Mon Dieu, que c'est narcissique !](#act2d_narcissist)

[Tu sais que cette technique a été *prouvée comme inefficace* ?](#act2d_disproven)

[OMG, n'associe pas les amérindiens à une histoire random comme ça !](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: À vrai dire, elle *se retourne* contre les gens qui ont peu d'estime d'eux-mêmes !

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: Ça vient d'une bonne étude - avec essai contrôlé, randomisée et effectuée en double aveugle.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Résultats : si tu as déjà peu d'estime de toi-même, te répéter ce genre d'affirmations te fait te sentir *pire* que ne pas le faire !

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Psychological Science. Va voir sur Google Scholar, {{l_human}},

`bb({body:"scream_b_1"})`

b: ET ARRÊTE DE PROPAGER DES FAKE NEWS NON SCIENTIFIQUES

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Tu *dois* regarder humblement tes propres défauts pour pouvoir grandir en tant que personne !

`bb({body:"two_up", eyes:"suspect"})`

b: Tu ne peux pas mettre du spray pour rafraîchir l'air dans une salle toute moisie ! Couvrir tes défauts ne fait que te rendre pire sur le long terme.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Heureusement, moi, en tant que loyal loup protecteur, je peux t'alerter de tes défauts. Et là tout de suite, c'est-

`bb({body:"scream_b_1"})`

b: TOUT. TOUT EST MAL

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Les natifs américains sont de *vrais gens*, pas des "bons sauvages" dont tu peux balancer le nom pour rendre tes conseils de biscuits chinois plus *exotiques*.

`bb({eyes:"suspect_r"})`

b: Tu es en train de réduire des individus & des cultures complexes à une carte de vœux ! C'est du "racisme bienveillant" !

`bb({body:"scream_b_1"})`

b: ARRÊTE D'ÊTRE RACISTE ESPÈCE D'^ENFOIRÉ^ ÉTROIT D'ESPRIT

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ^BORDEL DE MERDE^.

`hong({body:"yell", mouth:"yell"})`

h: Tu sais quoi ? Tu es *irrationnel*.

h: Tout le monde sait que les émotions sont irrationnelles ! Surtout la peur !

`hong({body:"facepalm_2"})`

h: T'es un reste inutile dû à l'évolution, comme mon appendice ou mes dents de sagesse !

`hong({body:"yell", mouth:"yell"})`

h: ^Putain^, toute cette métaphore à base de loup est stupide ! T'es juste un tas de neuro-transmetteurs dans ma tête.

`hong({body:"cross", mouth:"cross"})`

h: Alors pourquoi est-ce que je devrais écouter une ^merde^ inutile, irrationnelle et inexistante comme toi ?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Sérieux, {{l_human}}. Ça me blesse, ce que tu dis.](#act2e_hurtful)

[Je suis un sentiment. Les sentiments sont valides.](#act2e_valid)

[Humain, on est *tous les deux* "juste un tas de neuro-transmetteurs".](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Je suis une *partie* de toi, tu sais. Quand tu dis ça, tu te fais du mal à *toi-même*.

`bb({body:"scream_a_1"})`

b: Pourquoi tu te fais du mal, {{l_human}} ? ARRÊTE DE TE FAIRE DU MAL.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Tes plus profondes motivations sont de la dopamine, tes joies les plus riches sont de la sérotonine.

`bb({body:"one_up"});`

b: Tes souvenirs sont des liaisons synaptiques, ta raison est un ensemble de signaux électriques faillibles.

`bb({eyes:"normal", body:"normal"});`

b: Donc si parce que je suis "juste un tas de neuro-transmetteurs" *je suis* irrationnel... alors ça veut dire que *tu es* {{irrational}} !

`bb({body:"two_up", eyes:"shock"});`

b: Et si on *tous les deux* irrationnels, alors on n'arrivera *jamais* à trouver comment être {{full}} et {{happy}} !

`bb({body:"scream_a_1"})`

b: AHHH ON EST {{u_broken}} ! TELLEMENT {{u_broken}} TELLEMENT {{u_broken}} TELLEMENT CASS--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Attends... "on" dit que les sentiments sont valides, qu'on devrait toujours accepter ses propres émotions.

`bb({eyes:"suspect_r"});`

b: Mais "on" dit aussi que les émotions sont irrationnelles, que les émotions ne sont pas dignes de confiance.

`bb({eyes:"angry"});`

b: Oh mon Dieu, "on" nous a menti pendant tout ce temps !

`bb({body:"scream_a_1"})`

b: "ON" NOUS NOURRIT DE CONTRADICTIONS POUR NOUS RENDRE DÉPÉNDANT DU COMPLEXE INDUSTRIEL DU DÉVELOPPEMENT PERSONNEL

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: Je déteste ça. Dieu que ça fait mal tellement je *déteste* ça.

h: Je ne peux pas t'apaiser. Je ne peux pas t'ignorer. Je ne peux pas te combattre.

`bb({eyes:"suspect"});`

h: Qu'importe ce que je fais, je ne peux pas me débarrasser de to--

`bb({body:"cry_1"});`

b: Eh bien peut-être que tu N'ES PAS *{{u_meant_to}}* TE DÉBARRASSER DE MOI.

`bb({body:"cry_2"});`

b: Comment tu penses que *je* me sens, {{l_human}} ?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: Je fais de mon mieux pour être ton chien de garde, mais tu continues à me voir comme le Grand Méchant Loup !

b: Alors j'essaie encore plus *fort* pour t'alerter du danger ! De *davantage* de danger ! *D'autres* dangers !

`bb({eyes:"cry_2"})`

b: Mais qu'importe à quel point j'essaie de te protéger, tu penses *toujours* que je suis ton ennemi !

`bb({body:"cry_5"});`

b: Qu'est-ce que je fais de mal ?!

`bb({body:"cry_2"});`

b: Je *sais* que je suis nul dans mon boulot. Mais j'*essaie*, {{l_human}} !

`bb({body:"cry_3"});`

b: ...j'essaie.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: Tu n'es pas {{forced}} de tenir compte de mes avertissements, ou d'être d'accord avec moi, ou même de *m'aimer*.

`bb({eyes:"cry_r_2"});`

b: Je veux juste... Tout ce que je veux c'est que tu sois {{patient}} avec moi.

`bb({eyes:"cry_r_3"});`

b: Je veux juste que tu t'asseoies avec moi un moment, au lieu de te détourner et--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Hé.

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: On dirait que tu es {{taken}} dans une bataille avec toi-même, {{little_one}}.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: Ça se voyait tant que ça ?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Tu étais en train de, euh, marmonner dans ton sweat à propos {{_.a2_hoodie_callback}} ou un truc du genre.

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: Oh bon sang, je suis tellement lamentable.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Hé. T'es pas tout seul, l'{{friend}}. L'anxiété, c'est super commun.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: Tiens, hier à peine, j'ai entendu dire que quelqu'un a pété un plomb et explosé son téléphone !
{{/if}}

{{if _.act1_ending=="flight"}}
r: Tiens, hier à peine, j'ai entendu dire que quelqu'un s'est mis en boule comme un tatou et a pleuré en public !
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Écoute : je sais ce que c'est qu'avoir un animal dans sa tête.

```
publish("act2",["party_hunter",8]);
```

r: On le sait *tous*. C'est pour ça que j'organise ces fêtes chaque week-end, pour oublier nos inquiétudes, oublier l'animal.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: Mais mon anxiété...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: T'inquiète pas, {{little_one}}. J'étais comme toi avant. Mais j'ai trouvé une petite astuce pour faire taire à jamais cette voix négative...

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: Mon mélange spécial ! C'est un peu plus fort que... eh bien, que quoi que ce soit de légal en fait.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: Cul sec, ^bââ-taard^!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh mon Dieu.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[C'est une mauvaise façon de gérer tes problèmes.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[Ne prends pas des boissons tendues par des inconnus.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: O--

(#act2g)

# act2g_2

b: C--

(#act2g)

# act2g_3

b: N--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: Mmm, quelle palette exquise !

h: Une saveur corsée de "ferme-la, conscience", avec un subtil arrière-goût de "ne plus jamais rien ressentir de nouveau" !

b: C'est mal, {{l_human}}. C'est vraiment, vraiment mal.

[C'est *vraiment* comme ça que l'addiction commence.](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[Je *savais* que cet hôte était profondément taré !](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[Et ça aussi, ça a pu être drogué !](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: C'est *vraim*--

(#act2h)

# act2h_opt2

b: Et ça aussi, ça a p--

(#act2h)

# act2h_opt3

b: Je *savais* qu--

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: Délicieux, *et* moins cher que la thérapie !

b: {{u_human}} S'IL TE PLAÎT ARRÊTE

h: Héhéhé !

h: Et qu'est-ce que *tu* vas faire à propos de ça, ^trou du cul^ ?

b: Je suis vraiment désolé, {{l_human}}.

b: Je vais utiliser mon ATTAQUE SPÉCIALE

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: C'est quoi cette ^merde^ ?

h: Tu vas *aboyer* encore plus de mots stupid--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: C'ÉTAIT QUOI CE ^BORDEL^ ?

b: Je suis désolé. Je devais te montrer les conséquences.

{{if _.SPECIAL_ATTACK=="harm"}}
h: JE POUVAIS *VOIR* MON PROPRE CORPS. JE POUVAIS *SENTIR* LA SENSATION D'ÊTRE VRAIMENT {{u_dead}}.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone"}}
h: JE POUVAIS *VOIR* LE REGARD DE DÉGOÛT DE TOUT LE MONDE. JE POUVAIS *ENTENDRE* TOUTES LES CHOSES QU'ILS DISAIENT.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad"}}
h: JE POUVAIS *ENTENDRE* LE BROIEMENT DES CÔTES. JE POUVAIS *GOÛTER* LE SANG DANS L'AIR.
{{/if}}

b: Je suis désolé, {{l_human}}.

n: *FINIS-{{u_cpronoun}}*

[{COMBATTRE : Frappe l'hôte.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{FUIR : Partons d'ici tout de suite.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: {{that}} psychopathe était en train de prendre l'avantage sur toi.

b: {{host_spronoun}} voulait te corrompre, te rendre aussi {{mad}} {{than_host}} !

`bb({ body:"yell_angry_1" });`

b: Frappe {{l_that}} {{bastard}} ! Mets-{{host_lcpronoun}} KO !

`bb({ body:"final_1" });`

b: FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAPPE-{{host_ucpronoun}} FRAP--

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: Je *savais* que ces fêtards étaient tous tarés. Ils engourdissent leur douleur avec des choses horribles !

`bb({ body:"yell_1" });`

b: Et ils voulaient te piéger pour que tu fasses la même chose ! Ils sont en train de te corrompre ! On doit partir !

`bb({ body:"final_1" });`

b: SORS D'ICI SORS D'ICI SORS D'ICI SORS D'ICI SORS D'ICI SORS D'ICI SORS D'ICI SORS D'ICI SORS D'IC--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Ça va, {{little_one}} ?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: T-tu...

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: es *{{vicious}}*.

r: J'aime ça. Viens à ma fête la semaine prochaine, {{cutie}}.

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: ok au revoir, ciao, adios, bye

r: L'animal a peut-être gagné aujourd'hui, mais reviens, et je te préparerai quelque chose d'encore plus fort !

h2: sayōnara, auf wiedersehen, zài jiàn, shalom

r: Toi et moi, {{l_kiddo}}, on va montrer à cette bête qui est le patron !

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: ok {{l_sorry}} je dois partir

`publish("act2",["party_hunter",16]);`

r: ^Fait chier^. La bête a gagné aujourd'hui, hein ?

`publish("act2",["party_hunter",15]);`

h2: non non, juste, euh, j'dois courir un marathon. "gotta go fast".

`publish("act2",["party_hunter",19]);`

r: Viens à ma fête la semaine prochaine, {{cutie}}. Je te mélangerai un truc encore plus fort.

h2: ok merci faut que j'coure coure coure coure coure

r: Toi et moi, {{l_kiddo}}, on va montrer à cette bête qui c'est le patron !

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: {{human}} ! Ça va ?!

```
publish("act2", ["act2_end","next"]);
```

b: Bon sang, c'était *juste.* On aurait p--

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: Je retournerai à la fête la semaine prochaine.

h: La prochaine fois qu'on se battra, je ne vais pas juste te *vaincre*...

h: Je vais te ^putain^ de tuer.

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)
