# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: Santé !

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *Ah* ça cogne la où il faut.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: Tu sais, gamin...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Plus précisement, les endroits cognés sont mes amygdales gauche et droite.
```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Tu me rappelle moi quand j'était plus jeune. A l'époque où j'étais tourmentée par l'animal dans ma tête.
```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Je suis si reconnaissante de pouvoir le transmettre, et t'aider à tuer ta bête comme j'ai tuée la mienne.

```
publish("act3",["roofhunter",2]);
```

r: Hé, question rapide: action ou véri--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: ACTION !

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: Haha! Bien.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Ok. Tu vois cette piscine bleu clair en bas ?
```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Ouais? Six étages plus bas?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Saute dedans.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Attend, quoi ?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: L'animal à commencé à gémir, n'est-ce pas ?

```
publish("act3",["roofhunter",23]);
```

r: *Oh nooooon c'est dangereux, ne le fais paaaaas.*

```
publish("act3",["roofhunter",22]);
```

r: Mais c'est exactement pour ça que nous avons besoin de défier la mort ! Party hard! Carpe diem! Sniffer de la coke sur le ^cul^ d'une pute, #YOLO!

```
publish("act3",["roofhunter",10]);
```

r: Montre à cet animal qu'on s'en bas les *^couilles^* de ses *^putain^* de râlements ! Saute.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Euh, mais des fois, hum... la peur à raison...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: Pardon, tu t'est fait avoir par cette mode McPleineconscience qui dit que se sentir mal c'est *bien?*

```
publish("act3",["roofhunter",17]);
```

r: Le plaisir c'est l'opposé de la douleur. En ^putain^ de conséquent, tu peux utiliser le plaisir pour combattre la douleur !

```
publish("act3",["roofhunter",18]);
```

r: Comment font ces pseudos-Bouddhistes de la Silicon Valley pour ne pas s'apercevoir de cette ^merde^ ?!

```
publish("act3",["roofhunter",6]);
```

r: Gamin, je sais que *tu* sais que cet animal fait *souffrir* les gens comme nous. Il *torture* les gens comme nous.

```
publish("act3",["roofhunter",19]);
```

r: Ce n'est pas notre ami. C'est une bête enragée, qui doit soit être *tranquillisée*,

```
publish("act3",["roofhunter",20]);
```

r: Ou *se prendre une balle dans le crâne*.

```
publish("act3",["roofhunter",27]);
```

r: Sinon, tu vas la laisser gagner.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: Non, tu a tort.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: Je ne la laisserai pas gagner.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: ^Fuck^ yeah ! Je crois en toi, bébé ! Bute la ! <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: non non non non non non

n: CE CHAPITRE A DEUX FINS POSSIBLES. UNE DES DEUX EST *VRAIMENT, VRAIMENT GRAVE.*

b: NON NON NON NON NON NON NON NON NON NON NON NON NON NON

n: CHOISIS SAGEMENT. PROTEGE TON HUMAIN

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: BONNE CHANCE

```
Game.clearText();
bb({ eyes:"start" });
```

[Humain, tu pourrais vraiment MOURIR là !](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[C'est stupide et auto-destructeur !](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[Ces malades ne sont pas vraiment tes amis !](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: H--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: T--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: T--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Tu sais, j'aurais pu te croire... Si t'avais pas déja essayé ça un million de fois.

h: Tu es le loup qui a crié au loup.

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: T'a déja essayé ça.

b: humain, je t'en prie...

`hong({ eyes:"look_right" });`

h: Oh je suis*désolé* que Big Pharme n'approuve pas mon auto-médication.

h: Regarde ^connard^, on a tous un moyen de te faire fermer ta *putain* de gueule.

`hong({ body:"look_up", eyes:"look_up" });`

h: Certains se lancent dans le travail à corps perdu.
`hong({ body:"look_down", eyes:"look_down" });`

h: Certains se lancent dans le sexe, la drogue, et le rafraichissement de leur feed Facebook.

`hong({ body:"normal", eyes:"look_right" });`

h: Certains se lancent vers d'autres gens. 

`hong({ eyes:"angry" });`

h: Je vais me lancer dans cette piscine.

[Tu es bourré et c'est SIX ÉTAGES PLUS BAS](#act3_bad_1_harm)

[Bon sang, c'est ça mes remerciements ?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Okay, je l'admet. J'ai merdé.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: Même si tu atteris dans l'eau, la tension surfacique va *au moins* te briser les côtes et te donner une commotion !

h: Meh.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: J'ai vu un mec Russe faire ça sur youtube une fois.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Je- Excuse moi, tes *remerciements ?*

`bb({ eyes:"angry" });`

b: C'est exactement pour ça que j'*existe !* Parce qu'on ne peut pas faire confiance aux humains pour se protéger d'eux-même !

b: J'ai passée ma vie à essayer de protéger ton stupide derrière et maintenant tu vas just--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: Heh.

`hong({ body:"laugh_2" })``

h: Hahahaha

`hong({ body:"laugh_3" })``

h: HAHAHAHAHAHA

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: Oh WOW ! C'est le plus gros *^putain^* d'euphémisme du siècle !

`hong({ body:"yell_2" });`

h: Ouais, tas de ^merde^ ensanglanté ! T'as vraiment bien foiré !

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: D'autres remarques, Captain Obvious ?

[Mais te venger de moi n'est pas la réponse !](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Mais cette fois, j'ai *vraiment* raison !](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Je t'ai blessé.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Tu dois avoir il relation saine avec tes émotions, plutôt que de les noyer wi--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Alors s'il te plaît, pose cette bouteille et on y va--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: S'il te plaît... non...

h: Ta bars d'énergie paraît basse, loup.

h: Si j'étais toi, je choisirais vos prochains mots avec soin..

`bb({ eyes:"normal" });`

[Fine. I'm done protecting you.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[I was right all along.](#act3_bad_2_right)

[I'm sorry.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Alors, allons y et saute. Regarde ce qui m'inportre

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Ok donc. Bottoms up.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: ATTEND NON, C'ÉTAIT DE LA PSYCHOLOGIE INVERSÉE, TU ÉTIAIS SUPPOSÉ FAIRE L' *OPPOSÉ* DE CE QUE J'AI DIT.--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: Tu "es" en train de te mettre en danger. Your so-called friends *are* using you. And *you* are using your so-called friends.

`bb({ eyes:"sad" });`

b: Alors s'il te plaît, humain... pourquoi tu ne me crois pas ?!?!

h: Parce que tu n'as jamais cru en *moi*.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Other guard-wolves have humans who actually take time to patiently train them, to *learn* to work together,

b: Rather than hate the guard-wolves for trying to protect them! So why can't you jus--

`bb({ eyes:"normal" });`

h: Mauvaise réponse ^fuck^ing.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"The only thing to fear is fear itself."*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Don't worry, be happy!"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: All the wise folk of our time agree: negative emotions are *bad!*

`hong({ eyes:"less_angry" });`

h: Duh! That's why they're called *negative!*

b: human... please...

`hong({ eyes:"normal" });`

h: A while back, I said: “I just want to be free from all this pain.”

h: I got my wish. I no longer feel pain, or fear, or anxiety...

h: I don't feel anything at all.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: I was so obsessed with making sure nothing else hurt you, that I didn't realize *I* was creating the hurt.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: NO. S^HIT^.

`hong({ body:"yell_1" });`

h: ^GODDAMN^. It really took you this long to finally figure it out?!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: You could've saved us so much trouble, you big fluffy dumb^ass^. Why didn't you realize this sooner?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...you're *sorry.*

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: Sorry for *what*?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[I'm sorry I wasn't a good protector.](#act3_good_3_protector)

[I'm sorry I didn't respect you.](#act3_good_3_respect)

[I'm sorry.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[I'm sorry I have a terrible human!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[I'm sorry I didn't respect you.](#act3_good_3_respect)

[I'm sorry I hurt you.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: It's my duty to warn you against *real* danger, but I kept barking at cars and the mailman.

`bb({eyes:"sorry_up"});`

b: Barking at shadows. Barking so much.

`bb({eyes:"sorry"});`

b: It only makes sense that you'd want to muzzle me.

`bb({eyes:"sorry_down"});`

b: I'm sorry.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: I was supposed to be *your* loyal guard-dog, but I acted as if you were supposed to obey *me*.

`bb({eyes:"sorry_up"});`

b: There's a difference between a protector and a prison warden, and I crossed the line.

`bb({eyes:"sorry_down"});`

b: I'm sorry.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: I was so obsessed with trying to protect you from being hurt, I never stopped to realize *I* was hurting you.

`bb({eyes:"sorry_up"});`

b: I was a bad dog.

`bb({eyes:"sorry_down"});`

b: I'm sorry.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Yeah, well, this was a dumb idea anyway.

h: I only did this to mess you up, and, well, I messed you up.

h: Let's just call this round a tie, okay?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Okay.

h: Okay.

n: *TIE*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: Oh *come on*. After all that animal's done to you, you're just *giving up?*

r: What's the matter, kid? Are you *scared?*

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Yes.

h2: I'm scared.

`publish('hong-next')`

h2: And that's okay!

`publish('hong-next')`

h2: It's okay to be scared.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: Did they just lock the door?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: no...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: no no no

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: NO!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
