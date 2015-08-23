const data = {
  "1": {
    "short_effect":"Inflicts regular damage with no additional effect.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}."
  },
  "2": {
    "short_effect":"Puts the target to sleep.",
    "effect":"Puts the target to [sleep]{mechanic:sleep}."
  },
  "3": {
    "short_effect":"Has a $effect_chance% chance to [poison]{mechanic:poison} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [poison]{mechanic:poison} the target."
  },
  "4": {
    "short_effect":"Drains half the damage inflicted to heal the user.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  [Drains]{mechanic:drain} half the damage inflicted to heal the user."
  },
  "5": {
    "short_effect":"Has a $effect_chance% chance to [burn]{mechanic:burn} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target."
  },
  "6": {
    "short_effect":"Has a $effect_chance% chance to [freeze]{mechanic:freeze} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [freeze]{mechanic:freeze} the target."
  },
  "7": {
    "short_effect":"Has a $effect_chance% chance to [paralyze]{mechanic:paralysis} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [paralyze]{mechanic:paralyze} the target."
  },
  "8": {
    "short_effect":"User faints.",
    "effect":"User [faint]{mechanic:faint}s, even if the attack [fail]{mechanic:fail}s or [miss]{mechanic:miss}es.  Inflicts [regular damage]{mechanic:regular-damage}."
  },
  "9": {
    "short_effect":"Only works on sleeping Pokémon.  Drains half the damage inflicted to heal the user.",
    "effect":"[Fails]{mechanic:fail} if not used on a [sleep]{mechanic:sleep}ing Pokémon.  Inflicts [regular damage]{mechanic:regular-damage}.  [Drains]{mechanic:drain} half the damage inflicted to heal the user."
  },
  "10": {
    "short_effect":"Uses the target's last used move.",
    "effect":"Uses the last move targeted at the user by a Pokémon still on the [field]{mechanic:field}.  A move counts as targeting the user even if it hit multiple Pokémon, as long as the user was one of them; however, moves targeting the [field]{mechanic:field} itself do not count.  If the user has not been targeted by an appropriate move since entering the [field]{mechanic:field}, or if no Pokémon that targeted the user remains on the [field]{mechanic:field}, this move will [fail]{mechanic:fail}.\n\nMoves that [fail]{mechanic:fail}ed, [miss]{mechanic:miss}ed, had [no effect]{mechanic:no-effect}, or were [block]{mechanic:block}ed are still copied.\n\nAssist moves, time-delayed moves, “meta” moves that operate on other moves/Pokémon/abilities, and some other special moves cannot be copied and are ignored; if the last move to hit the user was such a move, the previous move will be used instead.  The full list of ignored moves is: []{move:acid-armor}, []{move:acupressure}, []{move:after-you}, []{move:agility}, []{move:ally-switch}, []{move:amnesia}, []{move:aqua-ring}, []{move:aromatherapy}, []{move:aromatic-mist}, []{move:assist}, []{move:autotomize}, []{move:barrier}, []{move:baton-pass}, []{move:belch}, []{move:belly-drum}, []{move:bide}, []{move:bulk-up}, []{move:calm-mind}, []{move:camouflage}, []{move:celebrate}, []{move:charge}, []{move:coil}, []{move:conversion}, []{move:conversion-2}, []{move:copycat}, []{move:cosmic-power}, []{move:cotton-guard}, []{move:counter}, []{move:crafty-shield}, []{move:curse}, []{move:defend-order}, []{move:defense-curl}, []{move:destiny-bond}, []{move:detect}, []{move:doom-desire}, []{move:double-team}, []{move:dragon-dance}, []{move:electric-terrain}, []{move:endure}, []{move:final-gambit}, []{move:flower-shield}, []{move:focus-energy}, []{move:focus-punch}, []{move:follow-me}, []{move:future-sight}, []{move:geomancy}, []{move:grassy-terrain}, []{move:gravity}, []{move:growth}, []{move:grudge}, []{move:guard-split}, []{move:hail}, []{move:happy-hour}, []{move:harden}, []{move:haze}, []{move:heal-bell}, []{move:heal-order}, []{move:heal-pulse}, []{move:healing-wish}, []{move:helping-hand}, []{move:hold-hands}, []{move:hone-claws}, []{move:howl}, []{move:imprison}, []{move:ingrain}, []{move:ion-deluge}, []{move:iron-defense}, []{move:kings-shield}, []{move:light-screen}, []{move:lucky-chant}, []{move:lunar-dance}, []{move:magic-coat}, []{move:magnet-rise}, []{move:magnetic-flux}, []{move:mat-block}, []{move:me-first}, []{move:meditate}, []{move:metronome}, []{move:milk-drink}, []{move:mimic}, []{move:minimize}, []{move:mirror-coat}, []{move:mirror-move}, []{move:mist}, []{move:misty-terrain}, []{move:moonlight}, []{move:morning-sun}, []{move:mud-sport}, []{move:nasty-plot}, []{move:nature-power}, []{move:perish-song}, []{move:power-split}, []{move:power-trick}, []{move:protect}, []{move:psych-up}, []{move:quick-guard}, []{move:quiver-dance}, []{move:rage-powder}, []{move:rain-dance}, []{move:recover}, []{move:recycle}, []{move:reflect}, []{move:reflect-type}, []{move:refresh}, []{move:rest}, []{move:rock-polish}, []{move:role-play}, []{move:roost}, []{move:rototiller}, []{move:safeguard}, []{move:sandstorm}, []{move:shadow-blast}, []{move:shadow-bolt}, []{move:shadow-half}, []{move:shadow-rush}, []{move:shadow-shed}, []{move:shadow-sky}, []{move:shadow-storm}, []{move:shadow-wave}, []{move:sharpen}, []{move:shell-smash}, []{move:shift-gear}, []{move:sketch}, []{move:slack-off}, []{move:sleep-talk}, []{move:snatch}, []{move:soft-boiled}, []{move:spikes}, []{move:spiky-shield}, []{move:spit-up}, []{move:splash}, []{move:stealth-rock}, []{move:sticky-web}, []{move:stockpile}, []{move:struggle}, []{move:substitute}, []{move:sunny-day}, []{move:swallow}, []{move:swords-dance}, []{move:synthesis}, []{move:tail-glow}, []{move:tailwind}, []{move:teleport}, []{move:toxic-spikes}, []{move:transform}, []{move:water-sport}, []{move:wide-guard}, []{move:wish}, []{move:withdraw} and []{move:work-up}.\n\nThis move cannot be selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}, nor forced by []{move:encore}."
  },
  "11": {
    "short_effect":"Raises the user's Attack by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}."
  },
  "12": {
    "short_effect":"Raises the user's Defense by one stage.",
    "effect":"Raises the user's [Defense]{mechanic:defense} by one [stage]{mechanic:stage}."
  },
  "14": {
    "short_effect":"Raises the user's Special Attack by one stage.",
    "effect":"Raises the user's [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage}."
  },
  "17": {
    "short_effect":"Raises the user's evasion by one stage.",
    "effect":"Raises the user's [evasion]{mechanic:evasion} by one [stage]{mechanic:stage}."
  },
  "18": {
    "short_effect":"Never misses.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers."
  },
  "19": {
    "short_effect":"Lowers the target's Attack by one stage.",
    "effect":"Lowers the target's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}."
  },
  "20": {
    "short_effect":"Lowers the target's Defense by one stage.",
    "effect":"Lowers the target's [Defense]{mechanic:defense} by one [stage]{mechanic:stage}."
  },
  "21": {
    "short_effect":"Lowers the target's Speed by one stage.",
    "effect":"Lowers the target's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}."
  },
  "24": {
    "short_effect":"Lowers the target's accuracy by one stage.",
    "effect":"Lowers the target's [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}."
  },
  "25": {
    "short_effect":"Lowers the target's evasion by one stage.",
    "effect":"Lowers the target's [evasion]{mechanic:evasion} by one [stage]{mechanic:stage}."
  },
  "26": {
    "short_effect":"Resets all Pokémon's stats, accuracy, and evasion.",
    "effect":"Removes [stat]{mechanic:stat}, [accuracy]{mechanic:accuracy}, and [evasion]{mechanic:evasion} modifiers from every Pokémon on the [field]{mechanic:field}.\n\nThis does not count as a stat reduction for the purposes of []{ability:clear-body} or []{ability:white-smoke}."
  },
  "27": {
    "short_effect":"User waits for two turns, then hits back for twice the damage it took.",
    "effect":"User waits for two turns.  On the second turn, the user inflicts twice the damage it accumulated on the last Pokémon to hit it.  Damage inflicted is [typeless]{mechanic:typeless}.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "28": {
    "short_effect":"Hits every turn for 2-3 turns, then confuses the user.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes [confused]{mechanic:confused}.\n\n[]{move:safeguard} does not protect against the [confusion]{mechanic:confusion} from this move."
  },
  "29": {
    "short_effect":"Immediately ends wild battles.  Forces trainers to switch Pokémon.",
    "effect":"[Switch]{mechanic:switch}es the target out for another of its trainer's Pokémon selected at random.  Wild battles end immediately.\n\nDoesn't affect Pokémon with []{ability:suction-cups} or under the effect of []{move:ingrain}."
  },
  "30": {
    "short_effect":"Hits 2-5 times in one turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use."
  },
  "31": {
    "short_effect":"User's type changes to the type of one of its moves at random.",
    "effect":"User's [type]{mechanic:type} changes to the [type]{mechanic:type} of one of its moves, selected at random.  []{move:hidden-power} and []{move:weather-ball} are treated as []{type:normal}.  Only moves with a different [type]{mechanic:type} are eligible, and []{move:curse} is never eligible.  If the user has no suitable moves, this move will [fail]{mechanic:fail}."
  },
  "32": {
    "short_effect":"Has a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to make the target []{mechanic:flinch}."
  },
  "33": {
    "short_effect":"Heals the user by half its max HP.",
    "effect":"Heals the user for half its max [HP]{mechanic:hp}."
  },
  "34": {
    "short_effect":"Badly poisons the target, inflicting more damage every turn.",
    "effect":"[Badly poisons]{mechanic:badly-poisons} the target.  Never misses when used by a []{type:poison}-type Pokémon."
  },
  "35": {
    "short_effect":"Scatters money on the ground worth five times the user's level.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  After the battle ends, the winner receives five times the user's level in extra money for each time this move was used."
  },
  "36": {
    "short_effect":"Reduces damage from special attacks by 50% for five turns.",
    "effect":"Erects a barrier around the user's side of the field that reduces damage from [special]{mechanic:special} attacks by half for five turns.  In double battles, the reduction is 1/3.  [Critical hit]{mechanic:critical-hit}s are not affected by the barrier.\n\nIf the user is holding []{item:light-clay}, the barrier lasts for eight turns.\n\n[]{move:brick-break} or []{move:defog} used by an opponent will destroy the barrier."
  },
  "37": {
    "short_effect":"Has a $effect_chance% chance to [burn]{mechanic:burn}, [freeze]{mechanic:freeze}, or [paralyze]{mechanic:paralysis} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [burn]{mechanic:burn}, [freeze]{mechanic:freeze}, or [paralyze]{mechanic:paralyze} the target.  One of these effects is selected at random; they do not each have independent chances to occur."
  },
  "38": {
    "short_effect":"User sleeps for two turns, completely healing itself.",
    "effect":"User falls to [sleep]{mechanic:sleep} and immediately regains all its [HP]{mechanic:hp}.  If the user has another [major status effect]{mechanic:major-status-effect}, [sleep]{mechanic:sleep} will replace it.  The user will always wake up after two turns, or one turn with []{ability:early-bird}.\n\nThis move [fail]{mechanic:fail}s if the Pokémon cannot fall asleep due to []{move:uproar}, []{ability:insomnia}, or []{ability:vital-spirit}.  It also fails if the Pokémon is at full health or is already asleep."
  },
  "39": {
    "short_effect":"Causes a one-hit KO.",
    "effect":"Inflicts damage equal to the target's max [HP]{mechanic:hp}.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.  This move's [accuracy]{mechanic:accuracy} is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will [fail]{mechanic:fail}.\n\nBecause this move inflicts a specific and finite amount of damage, []{move:endure} still prevents the target from fainting.\n\nThe effects of []{move:lock-on}, []{move:mind-reader}, and []{ability:no-guard} still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through []{move:detect} or []{move:protect}."
  },
  "40": {
    "short_effect":"Requires a turn to charge before attacking.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User's [critical hit]{mechanic:critical-hit} rate is one level higher when using this move.  User charges for one turn before attacking.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "41": {
    "short_effect":"Inflicts damage equal to half the target's HP.",
    "effect":"Inflicts [typeless]{mechanic:typeless} damage equal to half the target's remaining [HP]{mechanic:hp}."
  },
  "42": {
    "short_effect":"Inflicts 40 points of damage.",
    "effect":"Inflicts exactly 40 damage."
  },
  "43": {
    "short_effect":"Prevents the target from fleeing and inflicts damage for 2-5 turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the [field]{mechanic:field}, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\n[]{move:rapid-spin} cancels this effect."
  },
  "44": {
    "short_effect":"Has an increased chance for a critical hit.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User's [critical hit]{mechanic:critical-hit} rate is one level higher when using this move."
  },
  "45": {
    "short_effect":"Hits twice in one turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Hits twice in one turn."
  },
  "46": {
    "short_effect":"If the user misses, it takes half the damage it would have inflicted in recoil.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If this move misses, is blocked by []{move:protect} or []{move:detect}, or has no effect, the user takes half the damage it would have inflicted in recoil.  This recoil damage will not exceed half the user's max HP.\n\nThis move cannot be used while []{move:gravity} is in effect."
  },
  "47": {
    "short_effect":"Protects the user's stats from being changed by enemy moves.",
    "effect":"Pokémon on the user's side of the [field]{mechanic:field} are immune to stat-lowering effects for five turns.\n\n[]{move:guard-swap}, []{move:heart-swap}, and []{move:power-swap} may still be used.\n\n[]{move:defog} used by an opponent will end this effect."
  },
  "48": {
    "short_effect":"Increases the user's chance to score a critical hit.",
    "effect":"User's [critical hit]{mechanic:critical-hit} rate is two levels higher until it leaves the field.  If the user has already used []{move:focus-energy} since entering the field, this move will [fail]{mechanic:fail}.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "49": {
    "short_effect":"User receives 1/4 the damage it inflicts in recoil.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/4 the damage it inflicts in recoil."
  },
  "50": {
    "short_effect":"Confuses the target.",
    "effect":"[Confuse]{mechanic:confuse}s the target."
  },
  "51": {
    "short_effect":"Raises the user's Attack by two stages.",
    "effect":"Raises the user's [Attack]{mechanic:attack} by two [stages]{mechanic:stage}."
  },
  "52": {
    "short_effect":"Raises the user's Defense by two stages.",
    "effect":"Raises the user's [Defense]{mechanic:defense} by two [stages]{mechanic:stage}."
  },
  "53": {
    "short_effect":"Raises the user's Speed by two stages.",
    "effect":"Raises the user's [Speed]{mechanic:speed} by two [stages]{mechanic:stage}."
  },
  "54": {
    "short_effect":"Raises the user's Special Attack by two stages.",
    "effect":"Raises the user's [Special Attack]{mechanic:special-attack} by two [stages]{mechanic:stage}."
  },
  "55": {
    "short_effect":"Raises the user's Special Defense by two stages.",
    "effect":"Raises the user's [Special Defense]{mechanic:special-defense} by two [stages]{mechanic:stage}."
  },
  "58": {
    "short_effect":"User becomes a copy of the target until it leaves battle.",
    "effect":"User copies the target's species, weight, type, [ability]{mechanic:ability}, [calculated stats]{mechanic:calculated-stats} (except [HP]{mechanic:hp}), and moves.  Copied moves will all have 5 [PP]{mechanic:pp} remaining.  [IV]{mechanic:iv}s are copied for the purposes of []{move:hidden-power}, but stats are not recalculated.\n\n[]{item:choice-band}, []{item:choice-scarf}, and []{item:choice-specs} stay in effect, and the user must select a new move.\n\nThis move cannot be copied by []{move:mirror-move}, nor forced by []{move:encore}."
  },
  "59": {
    "short_effect":"Lowers the target's Attack by two stages.",
    "effect":"Lowers the target's [Attack]{mechanic:attack} by two [stages]{mechanic:stage}."
  },
  "60": {
    "short_effect":"Lowers the target's Defense by two stages.",
    "effect":"Lowers the target's [Defense]{mechanic:defense} by two [stages]{mechanic:stage}."
  },
  "61": {
    "short_effect":"Lowers the target's Speed by two stages.",
    "effect":"Lowers the target's [Speed]{mechanic:speed} by two [stages]{mechanic:stage}."
  },
  "63": {
    "short_effect":"Lowers the target's Special Defense by two stages.",
    "effect":"Lowers the target's [Special Defense]{mechanic:special-defense} by two [stages]{mechanic:stage}."
  },
  "66": {
    "short_effect":"Reduces damage from physical attacks by half.",
    "effect":"Erects a barrier around the user's side of the field that reduces damage from [physical]{mechanic:physical} attacks by half for five turns.  In double battles, the reduction is 1/3.  [Critical hit]{mechanic:critical-hit}s are not affected by the barrier.\n\nIf the user is holding []{item:light-clay}, the barrier lasts for eight turns.\n\n[]{move:brick-break} or []{move:defog} used by an opponent will destroy the barrier."
  },
  "67": {
    "short_effect":"Poisons the target.",
    "effect":"[Poisons]{mechanic:poisons} the target."
  },
  "68": {
    "short_effect":"Paralyzes the target.",
    "effect":"[Paralyzes]{mechanic:paralyzes} the target."
  },
  "69": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Attack by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}."
  },
  "70": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Defense by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Defense]{mechanic:defense} by one [stage]{mechanic:stage}."
  },
  "71": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Speed by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}."
  },
  "72": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Special Attack by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage}."
  },
  "73": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage}."
  },
  "74": {
    "short_effect":"Has a $effect_chance% chance to lower the target's accuracy by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}."
  },
  "76": {
    "short_effect":"User charges for one turn before attacking.  Has a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User charges for one turn before attacking.  [Critical hit chance]{mechanic:critical-hit-chance} is one level higher than normal.  Has a $effect_chance% chance to make the target [flinch]{mechanic:flinch}.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "77": {
    "short_effect":"Has a $effect_chance% chance to confuse the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [confuse]{mechanic:confuse} the target."
  },
  "78": {
    "short_effect":"Hits twice in the same turn.  Has a $effect_chance% chance to poison the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Hits twice in the same turn.  Has a $effect_chance% chance to [poison]{mechanic:poison} the target."
  },
  "79": {
    "short_effect":"Never misses.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers."
  },
  "80": {
    "short_effect":"Transfers 1/4 of the user's max HP into a doll, protecting the user from further damage or status changes until it breaks.",
    "effect":"Transfers 1/4 the user's max [HP]{mechanic:hp} into a doll that absorbs damage and causes most negative move effects to [fail]{mechanic:fail}.  If the user leaves the [field]{mechanic:field}, the doll will vanish.  If the user cannot pay the [HP]{mechanic:hp} cost, this move will fail.\n\nThe doll takes damage as normal, using the user's stats and types, and will break when its [HP]{mechanic:hp} reaches zero.  Self-inflicted damage from [confusion]{mechanic:confusion} or recoil is not absorbed.  Healing effects from opponents ignore the doll and heal the user as normal.  Moves that work based on the user's [HP]{mechanic:hp} still do so; the doll's [HP]{mechanic:hp} does not influence any move.\n\nThe doll will block [major status effect]{mechanic:major-status-effect}s, [confusion]{mechanic:confusion}, and [flinch]{mechanic:flinch}ing.  The effects of []{move:smelling-salts} and []{move:wake-up-slap} do not trigger against a doll, even if the Pokémon behind the doll has the appropriate [major status effect]{mechanic:major-status-effect}.  Multi-turn trapping moves like []{move:wrap} will hit the doll for their [regular damage]{mechanic:regular-damage}, but the multi-turn trapping and damage effects will not activate.\n\nMoves blocked or damage absorbed by the doll do not count as hitting the user or inflicting damage for any effects that respond to such, e.g., []{move:avalanche}, []{move:counter}, or a []{item:rowap-berry}.  []{move:magic-coat} still works as normal, even against moves the doll would block.  Opposing Pokémon that damage the doll with a leech move like []{move:absorb} are healed as normal.\n\nIt will also block []{move:acupressure}, []{move:block}, the curse effect of []{move:curse}, []{move:dream-eater}, []{move:embargo}, []{move:flatter}, []{move:gastro-acid}, []{move:grudge}, []{move:heal-block}, []{move:leech-seed}, []{move:lock-on}, []{move:mean-look}, []{move:mimic}, []{move:mind-reader}, []{move:nightmare}, []{move:pain-split}, []{move:psycho-shift}, []{move:spider-web}, []{move:sketch}, []{move:swagger}, []{move:switcheroo}, []{move:trick}, []{move:worry-seed}, and []{move:yawn}.  A Pokémon affected by []{move:yawn} before summoning the doll will still fall to [sleep]{mechanic:sleep}.\n\nThe doll blocks []{ability:intimidate}, but all other abilities act as though the doll did not exist.  If the user has an ability that absorbs moves of a certain type for [HP]{mechanic:hp} (such as []{ability:volt-absorb} absorbing []{move:thunder-wave}), such moves will not be blocked.\n\n[]{item:life-orb} and berries that cause [confusion]{mechanic:confusion} still work as normal, but their respective [HP]{mechanic:hp} loss and [confusion]{mechanic:confusion} are absorbed/blocked by the doll.\n\nThe user is still vulnerable to damage inflicted when entering or leaving the [field]{mechanic:field}, such as by []{move:pursuit} or []{move:spikes}; however, the doll will block the [poison]{mechanic:poison} effect of []{move:toxic-spikes}.\n\nThe doll is passed on by []{move:baton-pass}.  It keeps its existing [HP]{mechanic:hp}, but uses the replacement Pokémon's stats and types for damage calculation.\n\nAll other effects work as normal."
  },
  "81": {
    "short_effect":"User foregoes its next turn to recharge.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User loses its next turn to \"recharge\", and cannot attack or [switch]{mechanic:switch} out during that turn."
  },
  "82": {
    "short_effect":"If the user is hit after using this move, its Attack rises by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Every time the user is hit after it uses this move but before its next action, its [Attack]{mechanic:attack} raises by one [stage]{mechanic:stage}."
  },
  "83": {
    "short_effect":"Copies the target's last used move.",
    "effect":"This move is replaced by the target's last successfully used move, and its PP changes to 5.  If the target hasn't used a move since entering the field, if it tried to use a move this turn and [failed]{mechanic:fail}, or if the user already knows the targeted move, this move will fail.  This effect vanishes when the user leaves the field.\n\nIf []{move:chatter}, []{move:metronome}, []{move:mimic}, []{move:sketch}, or []{move:struggle} is selected, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}, nor forced by []{move:encore}."
  },
  "84": {
    "short_effect":"Randomly selects and uses any move in the game.",
    "effect":"Selects any move at random and uses it.  Moves the user already knows are not eligible.  Assist, meta, protection, and reflection moves are also not eligible; specifically, []{move:assist}, []{move:chatter}, []{move:copycat}, []{move:counter}, []{move:covet}, []{move:destiny-bond}, []{move:detect}, []{move:endure}, []{move:feint}, []{move:focus-punch}, []{move:follow-me}, []{move:helping-hand}, []{move:me-first}, []{move:metronome}, []{move:mimic}, []{move:mirror-coat}, []{move:mirror-move}, []{move:protect}, []{move:quick-guard}, []{move:sketch}, []{move:sleep-talk}, []{move:snatch}, []{move:struggle}, []{move:switcheroo}, []{move:thief}, []{move:trick}, and []{move:wide-guard} will not be selected by this move.\n\nThis move cannot be copied by []{move:mimic} or []{move:mirror-move}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "85": {
    "short_effect":"Seeds the target, stealing HP from it every turn.",
    "effect":"Plants a seed on the target that [drains]{mechanic:drain} 1/8 of its max [HP]{mechanic:hp} at the end of every turn and heals the user for the amount taken.  Has no effect on []{type:grass} Pokémon.  The seed remains until the target leaves the field.\n\nThe user takes damage instead of being healed if the target has []{ability:liquid-ooze}.\n\n[]{move:rapid-spin} will remove this effect.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "86": {
    "short_effect":"Does nothing.",
    "effect":"Does nothing.\n\nThis move cannot be used while []{move:gravity} is in effect."
  },
  "87": {
    "short_effect":"Disables the target's last used move for 1-8 turns.",
    "effect":"Disables the target's last used move, preventing its use for 4–7 turns, selected at random, or until the target leaves the [field]{mechanic:field}.  If the target hasn't used a move since entering the [field]{mechanic:field}, if it tried to use a move this turn and [failed]{mechanic:failed},  if its last used move has 0 PP remaining, or if it already has a move disabled, this move will fail."
  },
  "88": {
    "short_effect":"Inflicts damage equal to the user's level.",
    "effect":"Inflicts damage equal to the user's level.  Type immunity applies, but other type effects are ignored."
  },
  "89": {
    "short_effect":"Inflicts damage between 50% and 150% of the user's level.",
    "effect":"Inflicts [typeless]{mechanic:typeless} damage between 50% and 150% of the user's level, selected at random in increments of 10%."
  },
  "90": {
    "short_effect":"Inflicts twice the damage the user received from the last physical hit it took.",
    "effect":"Targets the last opposing Pokémon to hit the user with a [physical]{mechanic:physical} move this turn.  Inflicts twice the damage that move did to the user.  If there is no eligible target, this move will [fail]{mechanic:fail}.  Type immunity applies, but other type effects are ignored.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}."
  },
  "91": {
    "short_effect":"Forces the target to repeat its last used move every turn for 2 to 6 turns.",
    "effect":"The next 4–8 times (selected at random) the target attempts to move, it is forced to repeat its last used move.  If the selected move allows the trainer to select a target, an opponent will be selected at random each turn.  If the target is prevented from using the selected move by some other effect, []{move:struggle} will be used instead.  This effect ends if the selected move runs out of [PP]{mechanic:pp}.\n\nIf the target hasn't used a move since entering the [field]{mechanic:field}, if it tried to use a move this turn and [failed]{mechanic:failed}, if it does not know the selected move, or if the selected move has 0 [PP]{mechanic:pp} remaining, this move will fail.  If the target's last used move was []{move:encore}, []{move:mimic}, []{move:mirror-move}, []{move:sketch}, []{move:struggle}, or []{move:transform}, this move will fail."
  },
  "92": {
    "short_effect":"Sets the user's and targets's HP to the average of their current HP.",
    "effect":"Changes the user's and target's remaining [HP]{mechanic:hp} to the average of their current remaining [HP]{mechanic:hp}.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.  This effect does not count as inflicting damage for other moves and effects that respond to damage taken.\n\nThis effect [fail]{mechanic:fail}s against a []{move:substitute}."
  },
  "93": {
    "short_effect":"Has a $effect_chance% chance to make the target flinch.  Only works if the user is sleeping.",
    "effect":"Only usable if the user is [sleep]{mechanic:sleep}ing.  Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to make the target []{mechanic:flinch}."
  },
  "94": {
    "short_effect":"Changes the user's type to a random type either resistant or immune to the last move used against it.",
    "effect":"Changes the user's type to a type either resistant or immune to the last damaging move that hit it.  The new type is selected at random and cannot be a type the user already is.  If there is no eligible new type, this move will [fail]{mechanic:fail}."
  },
  "95": {
    "short_effect":"Ensures that the user's next move will hit the target.",
    "effect":"If the user targets the same target again before the end of the next turn, the move it uses is guaranteed to hit.  This move itself also ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.\n\nOne-hit KO moves are also guaranteed to hit, as long as the user is equal or higher level than the target.  This effect also allows the user to hit Pokémon that are off the field due to moves such as []{move:dig} or []{move:fly}.\n\nIf the target uses []{move:detect} or []{move:protect} while under the effect of this move, the user is not guaranteed to hit, but has a (100 - accuracy)% chance to break through the protection.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "96": {
    "short_effect":"Permanently becomes the target's last used move.",
    "effect":"Permanently replaces itself with the target's last used move.  If that move is []{move:chatter} or []{move:struggle}, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mimic} or []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}, nor forced by []{move:encore}."
  },
  "98": {
    "short_effect":"Randomly uses one of the user's other three moves.  Only works if the user is sleeping.",
    "effect":"Only usable if the user is [sleep]{mechanic:sleep}ing.  Randomly selects and uses one of the user's other three moves.  Use of the selected move requires and costs 0 [PP]{mechanic:pp}.\n\nThis move will not select []{move:assist}, []{move:bide}, []{move:bounce}, []{move:chatter}, []{move:copycat}, []{move:dig}, []{move:dive}, []{move:fly}, []{move:focus-punch}, []{move:me-first}, []{move:metronome}, []{move:mirror-move}, []{move:shadow-force}, []{move:skull-bash}, []{move:sky-attack}, []{move:sky-drop}, []{move:sleep-talk}, []{move:solar-beam}, []{move:razor-wind}, or []{move:uproar}.\n\nIf the selected move requires a recharge turn—i.e., one of []{move:blast-burn}, []{move:frenzy-plant}, []{move:giga-impact}, []{move:hydro-cannon}, []{move:hyper-beam}, []{move:roar-of-time}, or []{move:rock-wrecker}—and the user is still [sleep]{mechanic:sleep}ing next turn, then it's forced to use this move again and pay another [PP]{mechanic:pp} for the recharge turn.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "99": {
    "short_effect":"If the user faints this turn, the target automatically will, too.",
    "effect":"If the user [faints]{mechanic:faints} before its next move, the Pokémon that [faint]{mechanic:faint}ed it will automatically [faint]{mechanic:faint}.  End-of-turn damage is ignored.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "100": {
    "short_effect":"Inflicts more damage when the user has less HP remaining, with a maximum of 200 power.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power varies inversely with the user's proportional remaining [HP]{mechanic:hp}.\n\n64 * current HP / max HP | Power\n-----------------------: | ----:\n 0– 1                    |  200\n 2– 5                    |  150\n 6–12                    |  100\n13–21                    |   80\n22–42                    |   40\n43–64                    |   20\n"
  },
  "101": {
    "short_effect":"Lowers the PP of the target's last used move by 4.",
    "effect":"Lowers the PP of the target's last used move by 4.  If the target hasn't used a move since entering the [field]{mechanic:field}, if it tried to use a move this turn and [failed]{mechanic:failed}, or if its last used move has 0 PP remaining, this move will fail."
  },
  "102": {
    "short_effect":"Cannot lower the target's HP below 1.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Will not reduce the target's [HP]{mechanic:hp} below 1."
  },
  "103": {
    "short_effect":"Cures the entire party of major status effects.",
    "effect":"Removes [major status effects]{mechanic:major-status-effects} and [confusion]{mechanic:confusion} from every Pokémon in the user's party."
  },
  "104": {
    "short_effect":"Inflicts regular damage with no additional effect.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}."
  },
  "105": {
    "short_effect":"Hits three times, increasing power by 100% with each successful hit.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Hits three times in the same turn.  The second hit has double power, and the third hit has triple power.  Each hit has a separate [accuracy]{mechanic:accuracy} check, and this move stops if a hit misses.\n\n[]{ability:skill-link} does not apply."
  },
  "106": {
    "short_effect":"Takes the target's item.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is holding an item and the user is not, the user will permanently take the item.  Damage is still inflicted if an item cannot be taken.\n\nPokémon with []{ability:sticky-hold} or []{ability:multitype} are immune to the item theft effect.\n\nThe target cannot recover its item with []{move:recycle}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "107": {
    "short_effect":"Prevents the target from leaving battle.",
    "effect":"The target cannot [switch out]{mechanic:switch-out} normally.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.  This effect ends when the user leaves the [field]{mechanic:field}.\n\nThe target may still escape by using []{move:baton-pass}, []{move:u-turn}, or a []{item:shed-shell}.\n\nBoth the user and the target pass on this effect with []{move:baton-pass}."
  },
  "108": {
    "short_effect":"Target loses 1/4 its max HP every turn as long as it's asleep.",
    "effect":"Only works on [sleep]{mechanic:sleep}ing Pokémon.  Gives the target a nightmare, damaging it for 1/4 its max [HP]{mechanic:hp} every turn.  If the target wakes up or leaves the [field]{mechanic:field}, this effect ends."
  },
  "109": {
    "short_effect":"Raises the user's evasion by two stages.",
    "effect":"Raises the user's [evasion]{mechanic:evasion} by two [stages]{mechanic:stage}.\n\n[]{move:stomp} and []{move:steamroller} have double power against Pokémon that have used this move since entering the [field]{mechanic:field}."
  },
  "110": {
    "short_effect":"Ghosts pay half their max HP to hurt the target every turn.  Others decrease Speed but raise Attack and Defense.",
    "effect":"If the user is a []{type:ghost}: user pays half its max [HP]{mechanic:hp} to place a curse on the target, damaging it for 1/4 its max [HP]{mechanic:hp} every turn.\nOtherwise: Lowers the user's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}, and raises its [Attack]{mechanic:attack} and [Defense]{mechanic:defense} by one [stage]{mechanic:stage} each.\n\nThe curse effect is passed on by []{move:baton-pass}.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "112": {
    "short_effect":"Prevents any moves from hitting the user this turn.",
    "effect":"No moves will hit the user for the remainder of this turn.  If the user is last to act this turn, this move will [fail]{mechanic:fail}.\n\nIf the user successfully used []{move:detect}, []{move:endure}, []{move:protect}, []{move:quick-guard}, or []{move:wide-guard} on the last turn, this move has a 50% chance to [fail]{mechanic:fail}.\n\n[]{move:lock-on}, []{move:mind-reader}, and []{ability:no-guard} provide a (100 – accuracy)% chance for moves to break through this move.  This does not apply to one-hit KO moves ([]{move:fissure}, []{move:guillotine}, []{move:horn-drill}, and []{move:sheer-cold}); those are always blocked by this move.\n\n[]{move:thunder} during []{move:rain-dance} and []{move:blizzard} during []{move:hail} have a 30% chance to break through this move.\n\nThe following effects are not prevented by this move:\n\n* []{move:acupressure} from an ally\n* []{move:curse}'s curse effect\n* Delayed damage from []{move:doom-desire} and []{move:future-sight}; however, these moves will be prevented if they are used this turn\n* []{move:feint}, which will also end this move's protection after it hits\n* []{move:imprison}\n* []{move:perish-song}\n* []{move:shadow-force}\n* Moves that merely copy the user, such as []{move:transform} or []{move:psych-up}\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "113": {
    "short_effect":"Scatters Spikes, hurting opposing Pokémon that switch in.",
    "effect":"Scatters spikes around the opposing [field]{mechanic:field}, which damage opposing Pokémon that enter the [field]{mechanic:field} for 1/8 of their max [HP]{mechanic:hp}.  Pokémon immune to []{type:ground} moves are immune to this damage, except during []{move:gravity}.  Up to three layers of spikes may be laid down, adding 1/16 to the damage done: two layers of spikes damage for 3/16 max [HP]{mechanic:hp}, and three layers damage for 1/4 max [HP]{mechanic:hp}.\n\n[]{ability:wonder-guard} does not block damage from this effect.\n\n[]{move:rapid-spin} removes this effect from its user's side of the [field]{mechanic:field}.  []{move:defog} removes this effect from its target's side of the [field]{mechanic:field}."
  },
  "114": {
    "short_effect":"Forces the target to have no Evade, and allows it to be hit by Normal and Fighting moves even if it's a Ghost.",
    "effect":"Resets the target's [evasion]{mechanic:evasion} to normal and prevents any further boosting until the target leaves the [field]{mechanic:field}.  A []{type:ghost} under this effect takes normal damage from []{type:normal} and []{type:fighting} moves.  This move itself ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers."
  },
  "115": {
    "short_effect":"User and target both faint after three turns.",
    "effect":"Every Pokémon is given a counter that starts at 3 and decreases by 1 at the end of every turn, including this one.  When a Pokémon's counter reaches zero, that Pokémon [faint]{mechanic:faint}s.  A Pokémon that leaves the [field]{mechanic:field} will lose its counter; its replacement does not inherit the effect, and other Pokémon's counters remain.\n\nThis effect is passed on by []{move:baton-pass}.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "116": {
    "short_effect":"Changes the weather to a sandstorm for five turns.",
    "effect":"Changes the weather to a sandstorm for five turns.  Pokémon that are not []{type:ground}, []{type:rock}, or []{type:steel} take 1/16 their max [HP]{mechanic:hp} at the end of every turn.  Every []{type:rock} Pokémon's original [Special Defense]{mechanic:special-defense} is raised by 50% for the duration of this effect.\n\n[]{move:solar-beam}'s power is halved.\n\n[]{move:moonlight}, []{move:morning-sun}, and []{move:synthesis} only heal 1/4 the user's max [HP]{mechanic:hp}."
  },
  "117": {
    "short_effect":"Prevents the user's HP from lowering below 1 this turn.",
    "effect":"The user's [HP]{mechanic:hp} cannot be lowered below 1 by any means for the remainder of this turn.\n\nIf the user successfully used []{move:detect}, []{move:endure}, []{move:protect}, []{move:quick-guard}, or []{move:wide-guard} on the last turn, this move has a 50% chance to [fail]{mechanic:fail}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "118": {
    "short_effect":"Power doubles every turn this move is used in succession after the first, resetting after five turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User is forced to use this move for five turns.  Power doubles every time this move is used in succession to a maximum of 16x, and resets to normal after the lock-in ends.  If this move misses or becomes unusable, the lock-in ends.\n\nIf the user has used []{move:defense-curl} since entering the field, this move has double power."
  },
  "119": {
    "short_effect":"Raises the target's Attack by two stages and confuses the target.",
    "effect":"Raises the target's [Attack]{mechanic:attack} by two [stages]{mechanic:stage}, then [confuses]{mechanic:confuses} it.  If the target's [Attack]{mechanic:attack} cannot be [raised]{mechanic:raised} by two [stages]{mechanic:stage}, the [confusion]{mechanic:confusion} is not applied."
  },
  "120": {
    "short_effect":"Power doubles every turn this move is used in succession after the first, maxing out after five turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power doubles after every time this move is used, whether consecutively or not, maxing out at 16x.  If this move misses or the user leaves the [field]{mechanic:field}, power resets."
  },
  "121": {
    "short_effect":"Target falls in love if it has the opposite gender, and has a 50% chance to refuse attacking the user.",
    "effect":"Causes the target to fall in love with the user, giving it a 50% chance to do nothing each turn.  If the user and target are the same gender, or either is genderless, this move will [fail]{mechanic:fail}.  If either Pokémon leaves the [field]{mechanic:field}, this effect ends."
  },
  "122": {
    "short_effect":"Power increases with happiness, up to a maximum of 102.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power increases with [happiness]{mechanic:happiness}, given by `happiness * 2 / 5`, to a maximum of 102.  Power bottoms out at 1."
  },
  "123": {
    "short_effect":"Randomly inflicts damage with power from 40 to 120 or heals the target for 1/4 its max HP.",
    "effect":"Randomly uses one of the following effects.\n\nEffect                                             | Chance\n-------------------------------------------------- | -----:\nInflicts [regular damage]{mechanic:regular-damage} with 40 power  |    40%\nInflicts [regular damage]{mechanic:regular-damage} with 80 power  |    30%\nInflicts [regular damage]{mechanic:regular-damage} with 120 power |    10%\nHeals the target for 1/4 its max [HP]{mechanic:hp}    |    20%\n\nOn average, this move inflicts [regular damage]{mechanic:regular-damage} with 52 power and heals the target for 1/20 its max [HP]{mechanic:hp}."
  },
  "124": {
    "short_effect":"Power increases as happiness decreases, up to a maximum of 102.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power increases inversely with [happiness]{mechanic:happiness}, given by `(255 - happiness) * 2 / 5`, to a maximum of 102.  Power bottoms out at 1."
  },
  "125": {
    "short_effect":"Protects the user's field from major status ailments and confusion for five turns.",
    "effect":"Protects Pokémon on the user's side of the [field]{mechanic:field} from [major status]{mechanic:major-status} effects and [confusion]{mechanic:confusion} for five turns.  Does not cancel existing ailments.  This effect remains even if the user leaves the [field]{mechanic:field}.\n\nIf []{move:yawn} is used while this move is in effect, it will immediately [fail]{mechanic:fail}.\n\n[]{move:defog} used by an opponent will end this effect.\n\nThis effect does not prevent the [confusion]{mechanic:confusion} caused by []{move:outrage}, []{move:petal-dance}, or []{move:thrash}."
  },
  "126": {
    "short_effect":"Has a $effect_chance% chance to [burn]{mechanic:burn} the target.  Lets frozen Pokémon thaw themselves.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target.  [Frozen]{mechanic:frozen} Pokémon may use this move, in which case they will thaw."
  },
  "127": {
    "short_effect":"Power varies randomly from 10 to 150.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power is selected at random between 10 and 150, with an average of 71:\n\nMagnitude | Power | Chance\n--------: | ----: | -----:\n        4 |    10 |     5%\n        5 |    30 |    10%\n        6 |    50 |    20%\n        7 |    70 |    30%\n        8 |    90 |    20%\n        9 |   110 |    10%\n       10 |   150 |     5%\n\nThis move has double power against Pokémon currently underground due to []{move:dig}."
  },
  "128": {
    "short_effect":"Allows the trainer to switch out the user and pass effects along to its replacement.",
    "effect":"User [switches out]{mechanic:switches-out}, and the trainer selects a replacement Pokémon from the party.  [Stat]{mechanic:stat} changes, [confusion]{mechanic:confusion}, and persistent move effects are passed along to the replacement Pokémon.\n\nThe following move effects are passed:\n\n* []{move:aqua-ring}\n* both the user's and target's effect of []{move:block}, []{move:mean-look}, and []{move:spider-web}\n* the curse effect of []{move:curse}\n* []{move:embargo}\n* []{move:focus-energy} or an activated []{item:lansat-berry}\n* []{move:gastro-acid}\n* []{move:ingrain}\n* being sapped by []{move:leech-seed}\n* being targeted by []{move:lock-on} or []{move:mind-reader}\n* []{move:magnet-rise}\n* []{move:perish-song}'s counter\n* []{move:power-trick}\n* []{move:substitute}; the doll's HP is unchanged\n\nThe replacement Pokémon does not trigger effects that respond to Pokémon switching in."
  },
  "129": {
    "short_effect":"Has double power against, and can hit, Pokémon attempting to switch out.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target attempts to [switch out]{mechanic:switch-out} this turn before the user acts, this move hits the target before it leaves and has double power.\n\nThis effect can still hit a Pokémon that [switches out]{mechanic:switches-out} when it has a []{move:substitute} up or when an ally has used []{move:follow-me}."
  },
  "130": {
    "short_effect":"Frees the user from binding moves, removes Leech Seed, and blows away Spikes.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Removes []{move:leech-seed} from the user, frees the user from []{move:bind}, []{move:clamp}, []{move:fire-spin}, []{move:magma-storm}, []{move:sand-tomb}, []{move:whirlpool}, and []{move:wrap}, and clears []{move:spikes}, []{move:stealth-rock}, and []{move:toxic-spikes} from the user's side of the [field]{mechanic:field}.  If this move misses or has [no effect]{mechanic:no-effect}, its effect doesn't activate."
  },
  "131": {
    "short_effect":"Inflicts 20 points of damage.",
    "effect":"Inflicts exactly 20 damage."
  },
  "133": {
    "short_effect":"Heals the user by half its max HP.  Affected by weather.",
    "effect":"Heals the user for half its max [HP]{mechanic:hp}.\n\nDuring []{move:sunny-day}, the healing is increased to 2/3 max [HP]{mechanic:hp}.\n\nDuring []{move:hail}, []{move:rain-dance}, or []{move:sandstorm}, the healing is decreased to 1/4 max [HP]{mechanic:hp}."
  },
  "136": {
    "short_effect":"Power and type depend upon user's IVs.  Power can range from 30 to 70.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power and type are determined by the user's [IV]{mechanic:iv}s.\n\nPower is given by `x * 40 / 63 + 30`.  `x` is obtained by arranging bit 1 from the [IV]{mechanic:iv} for each of [Special Defense]{mechanic:special-defense}, [Special Attack]{mechanic:special-attack}, [Speed]{mechanic:speed}, [Defense]{mechanic:defense}, [Attack]{mechanic:attack}, and [HP]{mechanic:hp} in that order.  (Bit 1 is 1 if the [IV]{mechanic:iv} is of the form `4n + 2` or `4n + 3`.  `x` is then 64 * [Special Defense]{mechanic:special-defense} [IV]{mechanic:iv} bit 1, plus 32 * [Special Attack]{mechanic:special-attack} [IV]{mechanic:iv} bit 1, etc.)\n\nPower is always between 30 and 70, inclusive.  Average power is 49.5.\n\nType is given by `y * 15 / 63`, where `y` is similar to `x` above, except constructed from bit 0.  (Bit 0 is 1 if the [IV]{mechanic:iv} is odd.)  The result is looked up in the following table.\n\nValue | Type\n----: | --------\n    0 | []{type:fighting}\n    1 | []{type:flying}\n    2 | []{type:poison}\n    3 | []{type:ground}\n    4 | []{type:rock}\n    5 | []{type:bug}\n    6 | []{type:ghost}\n    7 | []{type:steel}\n    8 | []{type:fire}\n    9 | []{type:water}\n   10 | []{type:grass}\n   11 | []{type:electric}\n   12 | []{type:psychic}\n   13 | []{type:ice}\n   14 | []{type:dragon}\n   15 | []{type:dark}\n\nThis move thus cannot be []{type:normal}.  Most other types have an equal 1/16 chance to be selected, given random [IV]{mechanic:iv}s.  However, due to the flooring used here, []{type:bug}, []{type:fighting}, and []{type:grass} appear 5/64 of the time, and []{type:dark} only 1/64 of the time."
  },
  "137": {
    "short_effect":"Changes the weather to rain for five turns.",
    "effect":"Changes the weather to rain for five turns, during which []{type:water} moves inflict 50% extra damage, and []{type:fire} moves inflict half damage.\n\nIf the user is holding []{item:damp-rock}, this effect lasts for eight turns.\n\n[]{move:thunder} has 100% accuracy.  If the target has used []{move:detect} or []{move:protect}, []{move:thunder} has a (100 - accuracy)% chance to break through the protection.\n\n[]{move:solar-beam} has half power.\n\n[]{move:moonlight}, []{move:morning-sun}, and []{move:synthesis} heal only 1/4 of the user's max [HP]{mechanic:hp}.\n\nPokémon with []{ability:swift-swim} have doubled original [Speed]{mechanic:speed}.\n\nPokémon with []{ability:forecast} become []{type:water}.\n\nPokémon with []{ability:dry-skin} heal 1/8 max [HP]{mechanic:hp}, Pokémon with []{ability:hydration} are cured of [major status effects]{mechanic:major-status-effects}, and Pokémon with []{ability:rain-dish} heal 1/16 max [HP]{mechanic:hp} at the end of each turn."
  },
  "138": {
    "short_effect":"Changes the weather to sunny for five turns.",
    "effect":"Changes the weather to sunshine for five turns, during which []{type:fire} moves inflict 50% extra damage, and []{type:water} moves inflict half damage.\n\nIf the user is holding []{item:heat-rock}, this effect lasts for eight turns.\n\nPokémon cannot become [frozen]{mechanic:frozen}.\n\n[]{move:thunder} has 50% accuracy.\n\n[]{move:solar-beam} skips its charge turn.\n\n[]{move:moonlight}, []{move:morning-sun}, and []{move:synthesis} heal 2/3 of the user's max [HP]{mechanic:hp}.\n\nPokémon with []{ability:chlorophyll} have doubled original [Speed]{mechanic:speed}.\n\nPokémon with []{ability:forecast} become []{type:fire}.\n\nPokémon with []{ability:leaf-guard} are not affected by [major status effects]{mechanic:major-status-effects}.\n\nPokémon with []{ability:flower-gift} change form; every Pokémon on their side of the [field]{mechanic:field} have their original [Attack]{mechanic:attack} and [Special Attack]{mechanic:special-attack} increased by 50%.\n\nPokémon with []{ability:dry-skin} lose 1/8 max [HP]{mechanic:hp} at the end of each turn.\n\nPokémon with []{ability:solar-power} have their original [Special Attack]{mechanic:special-attack} raised by 50% but lose 1/8 their max [HP]{mechanic:hp} at the end of each turn."
  },
  "139": {
    "short_effect":"Has a $effect_chance% chance to raise the user's Defense by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}. Has a $effect_chance% chance to raise the user's [Defense]{mechanic:defense} one [stage]{mechanic:stage}."
  },
  "140": {
    "short_effect":"Has a $effect_chance% chance to raise the user's Attack by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}. Has a $effect_chance% chance to raise the user's [Attack]{mechanic:attack} one [stage]{mechanic:stage}."
  },
  "141": {
    "short_effect":"Has a $effect_chance% chance to raise all of the user's stats by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}. Has a $effect_chance% chance to raise all of the user's stats one [stage]{mechanic:stage}."
  },
  "143": {
    "short_effect":"User pays half its max HP to max out its Attack.",
    "effect":"User pays half its max [HP]{mechanic:hp} to raise its [Attack]{mechanic:attack} to +6 [stages]{mechanic:stage}.  If the user cannot pay the [HP]{mechanic:hp} cost, this move will [fail]{mechanic:fail}."
  },
  "144": {
    "short_effect":"Discards the user's stat changes and copies the target's.",
    "effect":"Discards the user's [stat changes]{mechanic:stat-changes} and copies the target's.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "145": {
    "short_effect":"Inflicts twice the damage the user received from the last special hit it took.",
    "effect":"Targets the last opposing Pokémon to hit the user with a [special]{mechanic:special} move this turn.  Inflicts twice the damage that move did to the user.  If there is no eligible target, this move will [fail]{mechanic:fail}.  Type immunity applies, but other type effects are ignored.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}."
  },
  "146": {
    "short_effect":"Raises the user's Defense by one stage.  User charges for one turn before attacking.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Raises the user's [Defense]{mechanic:defense} by one [stage]{mechanic:stage}.  User then charges for one turn before attacking.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "147": {
    "short_effect":"Has a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to make each target [flinch]{mechanic:flinch}.\n\nIf the target is under the effect of []{move:bounce}, []{move:fly}, or []{move:sky-drop}, this move will hit with double power."
  },
  "148": {
    "short_effect":"Inflicts regular damage and can hit Dig users.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.\n\nIf the target is in the first turn of []{move:dig}, this move will hit with double power."
  },
  "149": {
    "short_effect":"Hits the target two turns later.",
    "effect":"Inflicts [typeless]{mechanic:typeless} [regular damage]{mechanic:regular-damage} at the end of the third turn, starting with this one.  This move cannot score a [critical hit]{mechanic:critical-hit}.  If the target [switches out]{mechanic:switches-out}, its replacement will be hit instead.  Damage is calculated at the time this move is used; [stat changes]{mechanic:stat-changes} and [switching out]{mechanic:switching-out} during the delay won't change the damage inflicted.  No move with this effect can be used against the same target again until after the end of the third turn.\n\nThis effect breaks through []{ability:wonder-guard}.\n\nIf the target is protected by []{move:protect} or []{move:detect} on the turn this move is used, this move will [fail]{mechanic:fail}.  However, the damage on the third turn will break through protection.\n\nThe damage is applied at the end of the turn, so it ignores []{move:endure} and []{item:focus-sash}.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "150": {
    "short_effect":"Inflicts regular damage and can hit Pokémon in the air.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.\n\nIf the target is under the effect of []{move:bounce}, []{move:fly}, or []{move:sky-drop}, this move will hit with double power."
  },
  "151": {
    "short_effect":"Has a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to make the target [flinch]{mechanic:flinch}.\n\nPower is doubled against Pokémon that have used []{move:minimize} since entering the [field]{mechanic:field}."
  },
  "152": {
    "short_effect":"Requires a turn to charge before attacking.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User charges for one turn before attacking.\n\nDuring []{move:sunny-day}, the charge turn is skipped.\n\nDuring []{move:hail}, []{move:rain-dance}, or []{move:sandstorm}, power is halved.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "153": {
    "short_effect":"Has a $effect_chance% chance to paralyze the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [paralyze]{mechanic:paralyze} the target.\n\nDuring []{move:rain-dance}, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of []{move:protect} and []{move:detect}.\n\nDuring []{move:sunny-day}, this move has 50% accuracy."
  },
  "154": {
    "short_effect":"Immediately ends wild battles.  No effect otherwise.",
    "effect":"Does nothing.  Wild battles end immediately."
  },
  "155": {
    "short_effect":"Hits once for every conscious Pokémon the trainer has.",
    "effect":"Inflicts [typeless]{mechanic:typeless} [regular damage]{mechanic:regular-damage}.  Every Pokémon in the user's party, excepting those that have fainted or have a [major status effect]{mechanic:major-status-effect}, attacks the target.  Calculated stats are ignored; the base stats for the target and assorted attackers are used instead.  The random factor in the damage formula is not used.  []{type:dark} Pokémon still get [STAB]{mechanic:stab}.\n\nThis effect breaks through []{ability:wonder-guard}."
  },
  "156": {
    "short_effect":"User flies high into the air, dodging all attacks, and hits next turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User flies high into the air for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, []{move:gust}, []{move:hurricane}, []{move:sky-uppercut}, []{move:smack-down}, []{move:thunder}, []{move:twister}, and []{move:whirlwind} still hit the user normally.  []{move:gust} and []{move:twister} also have double power against the user.\n\nThe damage from []{move:hail} and []{move:sandstorm} still applies during the immune turn.\n\nThe user may be hit during its immune turn if under the effect of []{move:lock-on}, []{move:mind-reader}, or []{ability:no-guard}.\n\nThis move cannot be used while []{move:gravity} is in effect.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "157": {
    "short_effect":"Raises user's Defense by one stage.",
    "effect":"Raises user's [Defense]{mechanic:defense} by one [stage]{mechanic:stage}.\n\nAfter this move is used, the power of []{move:ice-ball} and []{move:rollout} are doubled until the user leaves the [field]{mechanic:field}."
  },
  "159": {
    "short_effect":"Can only be used as the first move after the user enters battle.  Causes the target to flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Causes the target to []{mechanic:flinch}.  Can only be used on the user's first turn after entering the [field]{mechanic:field}."
  },
  "160": {
    "short_effect":"Forced to use this move for several turns.  Pokémon cannot fall asleep in that time.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User is forced to use this move for 2–5 turns, selected at random.  All Pokémon on the [field]{mechanic:field} wake up, and none can fall to [sleep]{mechanic:sleep} until the lock-in ends.\n\nPokémon cannot use []{move:rest} during this effect.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "161": {
    "short_effect":"Stores energy up to three times for use with Spit Up and Swallow.",
    "effect":"Raises the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage} each.  Stores energy for use with []{move:spit-up} and []{move:swallow}.  Up to three levels of energy can be stored, and all are lost if the user leaves the [field]{mechanic:field}.  Energy is still stored even if the stat boosts cannot be applied.\n\nIf the user uses []{move:baton-pass}, the stat boosts are passed as normal, but the stored energy is not."
  },
  "162": {
    "short_effect":"Power is 100 times the amount of energy Stockpiled.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power is equal to 100 times the amount of energy stored by []{move:stockpile}.  Ignores the random factor in the damage formula.  Stored energy is consumed, and the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} are reset to what they would be if []{move:stockpile} had not been used.  If the user has no energy stored, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "163": {
    "short_effect":"Recovers 1/4 HP after one Stockpile, 1/2 HP after two Stockpiles, or full HP after three Stockpiles.",
    "effect":"Heals the user depending on the amount of energy stored by []{move:stockpile}: 1/4 its max [HP]{mechanic:hp} after one use, 1/2 its max [HP]{mechanic:hp} after two uses, or fully after three uses.  Stored energy is consumed, and the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} are reset to what they would be if []{move:stockpile} had not been used.  If the user has no energy stored, this move will [fail]{mechanic:fail}."
  },
  "165": {
    "short_effect":"Changes the weather to a hailstorm for five turns.",
    "effect":"Changes the weather to hail for five turns, during which non-[]{type:ice} Pokémon are damaged for 1/16 their max [HP]{mechanic:hp} at the end of every turn.\n\nIf the user is holding []{item:icy-rock}, this effect lasts for eight turns.\n\n[]{move:blizzard} has 100% accuracy.  If the target has used []{move:detect} or []{move:protect}, []{move:blizzard} has a (100 - accuracy)% chance to break through the protection.\n\n[]{move:moonlight}, []{move:morning-sun}, and []{move:synthesis} heal only 1/4 of the user's max [HP]{mechanic:hp}.\n\nPokémon with []{ability:snow-cloak} are exempt from this effect's damage."
  },
  "166": {
    "short_effect":"Prevents the target from using the same move twice in a row.",
    "effect":"Prevents the target from attempting to use the same move twice in a row.  When the target leaves the [field]{mechanic:field}, this effect ends.\n\nIf the target is forced to attempt a repeated move due to []{item:choice-band}, []{item:choice-scarf}, []{item:choice-specs}, []{move:disable}, []{move:encore}, []{move:taunt}, only having [PP]{mechanic:pp} remaining for one move, or any other effect, the target will use []{move:struggle} instead.  The target is then free to use the forced move next turn, as it didn't use that move this turn."
  },
  "167": {
    "short_effect":"Raises the target's Special Attack by one stage and confuses the target.",
    "effect":"Raises the target's [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage}, then [confuses]{mechanic:confuses} it."
  },
  "168": {
    "short_effect":"Burns the target.",
    "effect":"[Burns]{mechanic:burns} the target."
  },
  "169": {
    "short_effect":"Lowers the target's Attack and Special Attack by two stages.  User faints.",
    "effect":"Lowers the target's [Attack]{mechanic:attack} and [Special Attack]{mechanic:special-attack} by two [stages]{mechanic:stage}.  User faints."
  },
  "170": {
    "short_effect":"Power doubles if user is burned, paralyzed, or poisoned.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the user is [burned]{mechanic:burned}, [paralyzed]{mechanic:paralyzed}, or [poisoned]{mechanic:poisoned}, this move has double power."
  },
  "171": {
    "short_effect":"If the user takes damage before attacking, the attack is canceled.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the user takes damage this turn before hitting, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "172": {
    "short_effect":"If the target is paralyzed, inflicts double damage and cures the paralysis.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is [paralyzed]{mechanic:paralyzed}, this move has double power, and the target is cured of its [paralysis]{mechanic:paralysis}."
  },
  "173": {
    "short_effect":"Redirects the target's single-target effects to the user for this turn.",
    "effect":"Until the end of this turn, any moves that opposing Pokémon target solely at the user's ally will instead target the user.  If both Pokémon on the same side of the [field]{mechanic:field} use this move on the same turn, the Pokémon that uses it last will become the target.\n\nThis effect takes priority over []{ability:lightning-rod} and []{ability:storm-drain}.\n\nIf the user's ally [switches out]{mechanic:switches-out}, opposing Pokémon may still hit it with []{move:pursuit}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "174": {
    "short_effect":"Uses a move which depends upon the terrain.",
    "effect":"Uses another move chosen according to the terrain.\n\nTerrain                   | Selected move\n------------------------- | ------------------\nBuilding                  | []{move:tri-attack}\nCave                      | []{move:rock-slide}\nDeep water                | []{move:hydro-pump}\nDesert                    | []{move:earthquake}\nGrass                     | []{move:seed-bomb}\nMountain                  | []{move:rock-slide}\nRoad                      | []{move:earthquake}\nShallow water             | []{move:hydro-pump}\nSnow                      | []{move:blizzard}\nTall grass                | []{move:seed-bomb}\n[]{move:electric-terrain} | []{move:thunderbolt}\n[]{move:grassy-terrain}   | []{move:energy-ball}\n[]{move:misty-terrain}    | []{move:moonblast}\n\nIn Pokémon Battle Revolution:\n\nTerrain        | Selected move\n-------------- | ------------------\nCourtyard      | []{move:tri-attack}\nCrystal        | []{move:rock-slide}\nGateway        | []{move:hydro-pump}\nMagma          | []{move:rock-slide}\nMain Street    | []{move:tri-attack}\nNeon           | []{move:tri-attack}\nStargazer      | []{move:rock-slide}\nSunny Park     | []{move:seed-bomb}\nSunset         | []{move:earthquake}\nWaterfall      | []{move:seed-bomb}\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "175": {
    "short_effect":"Raises the user's Special Defense by one stage.  User's Electric moves have doubled power next turn.",
    "effect":"Raises the user's [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage}.  If the user uses an []{type:electric} move next turn, its power will be doubled."
  },
  "176": {
    "short_effect":"For the next few turns, the target can only use damaging moves.",
    "effect":"Target is forced to only use damaging moves for the next 3–5 turns, selected at random.  Moves that select other moves not known in advance do not count as damaging.\n\n[]{move:assist}, []{move:copycat}, []{move:me-first}, []{move:metronome}, []{move:mirror-move}, and []{move:sleep-talk} do not directly inflict damage and thus may not be used.\n\n[]{move:bide}, []{move:counter}, []{move:endeavor}, []{move:metal-burst}, and []{move:mirror-coat} are allowed."
  },
  "177": {
    "short_effect":"Ally's next move inflicts half more damage.",
    "effect":"Boosts the power of the target's moves by 50% until the end of this turn.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}."
  },
  "178": {
    "short_effect":"User and target swap items.",
    "effect":"User and target permanently swap [held item]{mechanic:held-item}s.  Works even if one of the Pokémon isn't holding anything.  If either Pokémon is holding mail, this move will [fail]{mechanic:fail}.\n\nIf either Pokémon has []{ability:multitype} or []{ability:sticky-hold}, this move will [fail]{mechanic:fail}.\n\nIf this move results in a Pokémon obtaining []{item:choice-band}, []{item:choice-scarf}, or []{item:choice-specs}, and that Pokémon was the latter of the pair to move this turn, then the move it used this turn becomes its chosen forced move.  This applies even if both Pokémon had a choice item before this move was used.  If the first of the two Pokémon gains a choice item, it may select whatever choice move it wishes next turn.\n\nNeither the user nor the target can recover its item with []{move:recycle}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "179": {
    "short_effect":"Copies the target's ability.",
    "effect":"User's ability is replaced with the target's until the user leaves the [field]{mechanic:field}.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.\n\nIf the target has []{ability:flower-gift}, []{ability:forecast}, []{ability:illusion}, []{ability:imposter}, []{ability:multitype}, []{ability:stance-change}, []{ability:trace}, []{ability:wonder-guard}, or []{ability:zen-mode}, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "180": {
    "short_effect":"User will recover half its max HP at the end of the next turn.",
    "effect":"At the end of the next turn, user will be healed for half its max [HP]{mechanic:hp}.  If the user is [switched out]{mechanic:switched-out}, its replacement will be healed instead for half of the user's max HP.  If the user [faint]{mechanic:faint}s or is forcefully switched by []{move:roar} or []{move:whirlwind}, this effect will not activate."
  },
  "181": {
    "short_effect":"Randomly selects and uses one of the trainer's other Pokémon's moves.",
    "effect":"Uses a move from another Pokémon in the user's party, both selected at random.  Moves from fainted Pokémon can be used.  If there are no eligible Pokémon or moves, this move will [fail]{mechanic:fail}.\n\nThis move will not select []{move:assist}, []{move:chatter}, []{move:circle-throw}, []{move:copycat}, []{move:counter}, []{move:covet}, []{move:destiny-bond}, []{move:detect}, []{move:dig}, []{move:dive}, []{move:dragon-tail}, []{move:endure}, []{move:feint}, []{move:fly} []{move:focus-punch}, []{move:follow-me}, []{move:helping-hand}, []{move:me-first}, []{move:metronome}, []{move:mimic}, []{move:mirror-coat}, []{move:mirror-move}, []{move:phantom-force} []{move:protect}, []{move:quick-guard}, []{move:roar} []{move:shadow-force}, []{move:sketch}, []{move:sleep-talk}, []{move:snatch}, []{move:struggle}, []{move:switcheroo}, []{move:thief}, []{move:trick}, []{move:whirlwind}, or []{move:wide-guard}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:metronome} or []{move:sleep-talk}."
  },
  "182": {
    "short_effect":"Prevents the user from leaving battle.  User regains 1/16 of its max HP every turn.",
    "effect":"Prevents the user from [switching out]{mechanic:switching-out}.  User regains 1/16 of its max [HP]{mechanic:hp} at the end of every turn.  If the user was immune to []{type:ground} attacks, it will now take normal damage from them.\n\n[]{move:roar} and []{move:whirlwind} will not affect the user.  The user cannot use []{move:magnet-rise}.\n\nThe user may still use []{move:u-turn} to leave the [field]{mechanic:field}.\n\nThis effect can be passed with []{move:baton-pass}."
  },
  "183": {
    "short_effect":"Lowers the user's Attack and Defense by one stage after inflicting damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then lowers the user's [Attack]{mechanic:attack} and [Defense]{mechanic:defense} by one [stage]{mechanic:stage} each."
  },
  "184": {
    "short_effect":"Reflects back the first effect move used on the user this turn.",
    "effect":"The first non-damaging move targeting the user this turn that inflicts [major status effect]{mechanic:major-status-effect}s, [stat change]{mechanic:stat-change}s, or [trap]{mechanic:trap}ping effects will be reflected at its user.\n\n[]{move:defog}, []{move:memento}, and []{move:teeter-dance} are not reflected.\n\n[]{move:attract}, []{move:flatter}, []{move:gastro-acid}, []{move:leech-seed}, []{move:swagger}, []{move:worry-seed}, and []{move:yawn} are reflected.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "185": {
    "short_effect":"User recovers the item it last used up.",
    "effect":"User recovers the last item consumed by the user or a Pokémon in its position on the [field]{mechanic:field}.  The item must be used again before it can be recovered by this move again.  If the user is holding an item, this move [fail]{mechanic:fail}s.\n\nItems taken or given away by []{move:covet}, []{move:knock-off}, []{move:switcheroo}, []{move:thief}, or []{move:trick} may not be recovered."
  },
  "186": {
    "short_effect":"Inflicts double damage if the user takes damage before attacking this turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target damaged the user this turn and was the last to do so, this move has double power.\n\n[]{move:pain-split} does not count as damaging the user."
  },
  "187": {
    "short_effect":"Destroys Reflect and Light Screen.",
    "effect":"Destroys any []{move:light-screen} or []{move:reflect} on the target's side of the [field]{mechanic:field}, then inflicts [regular damage]{mechanic:regular-damage}.  The barriers are destroyed even if this move has [no effect]{mechanic:no-effect}."
  },
  "188": {
    "short_effect":"Target sleeps at the end of the next turn.",
    "effect":"Puts the target to [sleep]{mechanic:sleep} at the end of the next turn.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.  If the target leaves the [field]{mechanic:field}, this effect is canceled.  If the target has a status effect when this move is used, this move will [fail]{mechanic:fail}.\n\nIf the target is protected by []{move:safeguard} when this move is used, this move will [fail]{mechanic:fail}.\n\n[]{ability:insomnia} and []{ability:vital-spirit} prevent the [sleep]{mechanic:sleep} if the target has either at the end of the next turn, but will not cause this move to [fail]{mechanic:fail} on use."
  },
  "189": {
    "short_effect":"Target drops its held item.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Target loses its [held item]{mechanic:held-item}.\n\nNeither the user nor the target can recover its item with []{move:recycle}.\n\nIf the target has []{ability:multitype} or []{ability:sticky-hold}, it will take damage but not lose its item."
  },
  "190": {
    "short_effect":"Lowers the target's HP to equal the user's.",
    "effect":"Inflicts exactly enough damage to lower the target's [HP]{mechanic:hp} to equal the user's.  If the target's HP is not higher than the user's, this move has no effect.  Type immunity applies, but other type effects are ignored.  This effect counts as damage for moves that respond to damage."
  },
  "191": {
    "short_effect":"Inflicts more damage when the user has more HP remaining, with a maximum of 150 power.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power increases with the user's remaining [HP]{mechanic:hp} and is given by `150 * HP / max HP`, to a maximum of 150 when the user has full HP."
  },
  "192": {
    "short_effect":"User and target swap abilities.",
    "effect":"User and target switch abilities.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.\n\nIf either Pokémon has []{ability:multitype} or []{ability:wonder-guard}, this move will [fail]{mechanic:fail}."
  },
  "193": {
    "short_effect":"Prevents the target from using any moves that the user also knows.",
    "effect":"Prevents any Pokémon on the opposing side of the [field]{mechanic:field} from using any move the user knows until the user leaves the [field]{mechanic:field}.  This effect is live; if the user obtains new moves while on the [field]{mechanic:field}, these moves become restricted.  If no opposing Pokémon knows any of the user's moves when this move is used, this move will [fail]{mechanic:fail}."
  },
  "194": {
    "short_effect":"Cleanses the user of a burn, paralysis, or poison.",
    "effect":"Removes a [burn]{mechanic:burn}, [paralysis]{mechanic:paralysis}, or [poison]{mechanic:poison} from the user."
  },
  "195": {
    "short_effect":"If the user faints this turn, the PP of the move that fainted it drops to 0.",
    "effect":"If the user [faint]{mechanic:faint}s before it next acts, the move that fainted it will have its [PP]{mechanic:pp} dropped to 0.  End-of-turn damage does not trigger this effect."
  },
  "196": {
    "short_effect":"Steals the target's move, if it's self-targeted.",
    "effect":"The next time a Pokémon uses a beneficial move on itself or itself and its ally this turn, the user of this move will steal the move and use it itself.  Moves which may be stolen by this move are identified by the \"snatchable\" flag.\n\nIf two Pokémon use this move on the same turn, the faster Pokémon will steal the first beneficial move, and the slower Pokémon will then steal it again—thus, only the slowest Pokémon using this move ultimately gains a stolen move's effect.\n\nIf the user steals []{move:psych-up}, it will target the Pokémon that used []{move:psych-up}.  If the user was the original target of []{move:psych-up}, and the Pokémon that originally used it's affected by []{ability:pressure}, it will only lose 1 [PP]{mechanic:pp}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}."
  },
  "197": {
    "short_effect":"Inflicts more damage to heavier targets, with a maximum of 120 power.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power increases with the target's weight in kilograms, to a maximum of 120.\n\nTarget's weight | Power\n--------------- | ----:\nUp to 10kg      |    20\nUp to 25kg      |    40\nUp to 50kg      |    60\nUp to 100kg     |    80\nUp to 200kg     |   100\nAbove 200kg     |   120\n"
  },
  "198": {
    "short_effect":"Has a $effect_chance% chance to inflict a status effect which depends upon the terrain.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to inflict an effect chosen according to the terrain.\n\nTerrain        | Effect\n-------------- | -------------------------------------------------------------\nBuilding       | [Paralyze]{mechanic:paralyze}s target\nCave           | Makes target [flinch]{mechanic:flinch}\nDeep water     | Lowers target's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}\nDesert         | Lowers target's [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}\nGrass          | Puts target to [sleep]{mechanic:sleep}\nMountain       | Makes target [flinch]{mechanic:flinch}\nRoad           | Lowers target's [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}\nShallow water  | Lowers target's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}\nSnow           | [Freezes]{mechanic:freezes} target\nTall grass     | Puts target to [sleep]{mechanic:sleep}\n\nIn Pokémon Battle Revolution:\n\nTerrain        | Effect\n-------------- | -------------------------------------------------------------\nCourtyard      | [Paralyze]{mechanic:paralyze}s target\nCrystal        | Makes target [flinch]{mechanic:flinch}\nGateway        | Lowers target's [Attack]{mechanic:attack} by one [stage]{mechanic:stage}\nMagma          | Makes target [flinch]{mechanic:flinch}\nMain Street    | [Paralyze]{mechanic:paralyze}s target\nNeon           | [Paralyze]{mechanic:paralyze}s target\nStargazer      | Makes target [flinch]{mechanic:flinch}\nSunny Park     | Puts target to [sleep]{mechanic:sleep}\nSunset         | Lowers target's [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}\nWaterfall      | Puts target to [sleep]{mechanic:sleep}\n"
  },
  "199": {
    "short_effect":"User receives 1/3 the damage inflicted in recoil.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/3 the damage it inflicts in recoil."
  },
  "200": {
    "short_effect":"Confuses the target.",
    "effect":"[Confuse]{mechanic:confuse}s all targets."
  },
  "201": {
    "short_effect":"Has an increased chance for a critical hit and a $effect_chance% chance to [burn]{mechanic:burn} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User's [critical hit]{mechanic:critical-hit} rate is one level higher when using this move. Has a $effect_chance% chance to [burn]{mechanic:burn} the target."
  },
  "202": {
    "short_effect":"Halves all Electric-type damage.",
    "effect":"[]{type:electric} moves inflict half damage, regardless of target.  If the user leaves the [field]{mechanic:field}, this effect ends."
  },
  "203": {
    "short_effect":"Has a $effect_chance% chance to badly poison the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [badly poison]{mechanic:badly-poison} the target."
  },
  "204": {
    "short_effect":"If there be weather, this move has doubled power and the weather's type.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a weather move is active, this move has double power, and its type becomes the type of the weather move.  []{move:shadow-sky} is typeless for the purposes of this move."
  },
  "205": {
    "short_effect":"Lowers the user's Special Attack by two stages after inflicting damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then lowers the user's [Special Attack]{mechanic:special-attack} by two [stages]{mechanic:stage}."
  },
  "206": {
    "short_effect":"Lowers the target's Attack and Defense by one stage.",
    "effect":"Lowers the target's [Attack]{mechanic:attack} and [Defense]{mechanic:defense} by one [stage]{mechanic:stage}."
  },
  "207": {
    "short_effect":"Raises the user's Defense and Special Defense by one stage.",
    "effect":"Raises the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage}."
  },
  "208": {
    "short_effect":"Inflicts regular damage and can hit Bounce and Fly users.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.\n\nThis move can hit Pokémon under the effect of []{move:bounce}, []{move:fly}, or []{move:sky-drop}."
  },
  "209": {
    "short_effect":"Raises the user's Attack and Defense by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack} and [Defense]{mechanic:defense} by one [stage]{mechanic:stage} each."
  },
  "210": {
    "short_effect":"Has an increased chance for a critical hit and a $effect_chance% chance to poison the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User's [critical hit]{mechanic:critical-hit} rate is one level higher when using this move. Has a $effect_chance% chance to [poison]{mechanic:poison} the target."
  },
  "211": {
    "short_effect":"Halves all Fire-type damage.",
    "effect":"[]{type:fire} moves inflict half damage, regardless of target.  If the user leaves the [field]{mechanic:field}, this effect ends."
  },
  "212": {
    "short_effect":"Raises the user's Special Attack and Special Defense by one stage.",
    "effect":"Raises the user's [Special Attack]{mechanic:special-attack} and [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage} each."
  },
  "213": {
    "short_effect":"Raises the user's Attack and Speed by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack} and [Speed]{mechanic:speed} by one [stage]{mechanic:stage} each."
  },
  "214": {
    "short_effect":"User's type changes to match the terrain.",
    "effect":"User's type changes according to the terrain.\n\nTerrain        | New type\n-------------- | --------------\nBuilding       | []{type:normal}\nCave           | []{type:rock}\nDesert         | []{type:ground}\nGrass          | []{type:grass}\nMountain       | []{type:rock}\nOcean          | []{type:water}\nPond           | []{type:water}\nRoad           | []{type:ground}\nSnow           | []{type:ice}\nTall grass     | []{type:grass}\n\nIn Pokémon Battle Revolution:\n\nTerrain        | New type\n-------------- | --------------\nCourtyard      | []{type:normal}\nCrystal        | []{type:rock}\nGateway        | []{type:water}\nMagma          | []{type:rock}\nMain Street    | []{type:normal}\nNeon           | []{type:normal}\nStargazer      | []{type:rock}\nSunny Park     | []{type:grass}\nSunset         | []{type:ground}\nWaterfall      | []{type:grass}\n"
  },
  "215": {
    "short_effect":"Heals the user by half its max HP.",
    "effect":"Heals the user for half its max [HP]{mechanic:hp}.  If the user is []{type:flying}, its []{type:flying} type is ignored until the end of this turn."
  },
  "216": {
    "short_effect":"Disables moves and immunities that involve flying or levitating for five turns.",
    "effect":"For five turns (including this one), all immunities to []{type:ground} moves are disabled.  For the duration of this effect, the [evasion]{mechanic:evasion} of every Pokémon on the field is lowered by two [stages]{mechanic:stage}.  Cancels the effects of []{move:bounce}, []{move:fly}, and []{move:sky-drop}.\n\nSpecifically, []{type:flying} Pokémon and those with []{ability:levitate} or that have used []{move:magnet-rise} are no longer immune to []{type:ground} attacks, []{ability:arena-trap}, []{move:spikes}, or []{move:toxic-spikes}.\n\n[]{move:bounce}, []{move:fly}, []{move:sky-drop}, []{move:high-jump-kick}, []{move:jump-kick}, and []{move:splash} cannot be used while this move is in effect.\n\n*Bug*: If this move is used during a double or triple battle while Pokémon are under the effect of []{move:sky-drop}, Sky Drop's effect is not correctly canceled on its target, and it remains high in the air indefinitely.  As Sky Drop prevents the target from acting, the only way to subsequently remove it from the field is to faint it."
  },
  "217": {
    "short_effect":"Forces the target to have no evasion, and allows it to be hit by Psychic moves even if it's Dark.",
    "effect":"Resets the target's [evasion]{mechanic:evasion} to normal and prevents any further boosting until the target leaves the [field]{mechanic:field}.  A []{type:dark} Pokémon under this effect takes normal damage from []{type:psychic} moves.  This move itself ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers."
  },
  "218": {
    "short_effect":"If the target is asleep, has double power and wakes it up.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is [sleep]{mechanic:sleep}ing, this move has double power, and the target wakes up."
  },
  "219": {
    "short_effect":"Lowers user's Speed by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then lowers the user's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}."
  },
  "220": {
    "short_effect":"Power raises when the user has lower Speed, up to a maximum of 150.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power increases with the target's current [Speed]{mechanic:speed} compared to the user, given by `1 + 25 * target Speed / user Speed`, capped at 150."
  },
  "221": {
    "short_effect":"User faints.  Its replacement has its HP fully restored and any major status effect removed.",
    "effect":"User faints.  Its replacement's [HP]{mechanic:hp} is fully restored, and any [major status effect]{mechanic:major-status-effect} is removed.  If the replacement Pokémon is immediately fainted by a switch-in effect, the next replacement is healed by this move instead."
  },
  "222": {
    "short_effect":"Has double power against Pokémon that have less than half their max HP remaining.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target has less than half its max [HP]{mechanic:hp} remaining, this move has double power."
  },
  "223": {
    "short_effect":"Power and type depend on the held berry.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power and type are determined by the user's held berry.  The berry is consumed.  If the user is not holding a berry, this move will [fail]{mechanic:fail}."
  },
  "224": {
    "short_effect":"Hits through Protect and Detect.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Removes the effects of []{move:detect} or []{move:protect} from the target before hitting.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist} or []{move:metronome}."
  },
  "225": {
    "short_effect":"If target has a berry, inflicts double damage and uses the berry.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is holding a berry, this move has double power, and the user takes the berry and uses it immediately.\n\nIf the target is holding a []{item:jaboca-berry} or []{item:rowap-berry}, the berry is still removed, but has no effect.\n\nIf this move is [super effective]{mechanic:super-effective} and the target is holding a berry that can reduce this move's damage, it will do so, and will not be stolen."
  },
  "226": {
    "short_effect":"For three turns, friendly Pokémon have doubled Speed.",
    "effect":"For the next three turns, all Pokémon on the user's side of the [field]{mechanic:field} have their original [Speed]{mechanic:speed} doubled.  This effect remains if the user leaves the [field]{mechanic:field}."
  },
  "227": {
    "short_effect":"Raises one of a friendly Pokémon's stats at random by two stages.",
    "effect":"Raises one of the target's stats by two [stages]{mechanic:stage}.  The raised stat is chosen at random from any stats that can be raised by two stages.  If no stat is eligible, this move will [fail]{mechanic:fail}.\n\nIf the target has a []{move:substitute}, this move will have no effect, even if the user is the target.\n\nThis move cannot be copied by []{move:mirror-move}."
  },
  "228": {
    "short_effect":"Strikes back at the last Pokémon to hit the user this turn with 1.5× the damage.",
    "effect":"Targets the last opposing Pokémon to hit the user with a damaging move this turn.  Inflicts 1.5× the damage that move did to the user.  If there is no eligible target, this move will [fail]{mechanic:fail}.  Type immunity applies, but other type effects are ignored."
  },
  "229": {
    "short_effect":"User must switch out after attacking.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then the user immediately [switches out]{mechanic:switches-out}, and the trainer selects a replacement Pokémon from the party.  If the target [faint]{mechanic:faint}s from this attack, the user's trainer selects the new Pokémon to send out first.  If the user is the last Pokémon in its party that can battle, it will not [switch out]{mechanic:switch-out}.\n\nThe user may be hit by []{move:pursuit} when it [switches out]{mechanic:switches-out}, if it has been targeted and []{move:pursuit} has not yet been used.\n\nThis move may be used even if the user is under the effect of []{move:ingrain}.  []{move:ingrain}'s effect will end."
  },
  "230": {
    "short_effect":"Lowers the user's Defense and Special Defense by one stage after inflicting damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then lowers the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} by one [stage]{mechanic:stage} each."
  },
  "231": {
    "short_effect":"Power is doubled if the target has already moved this turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target uses a move or [switches out]{mechanic:switches-out} this turn before this move is used, this move has double power."
  },
  "232": {
    "short_effect":"Power is doubled if the target has already received damage this turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target takes damage this turn for any reason before this move is used, this move has double power."
  },
  "233": {
    "short_effect":"Target cannot use held items.",
    "effect":"Target cannot use its held item for five turns.  If the target leaves the [field]{mechanic:field}, this effect ends.\n\nIf a Pokémon under this effect uses []{move:bug-bite} or []{move:pluck} on a Pokémon holding a berry, the berry is destroyed but not used.  If a Pokémon under this effect uses []{move:fling}, it will [fail]{mechanic:fail}.\n\nThis effect is passed by []{move:baton-pass}."
  },
  "234": {
    "short_effect":"Throws held item at the target; power depends on the item.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power and type are determined by the user's [held item]{mechanic:held-item}.  The item is consumed.  If the user is not holding an item, or its item has no set type and power, this move will [fail]{mechanic:fail}.\n\nThis move ignores []{ability:sticky-hold}.\n\nIf the user is under the effect of []{move:embargo}, this move will [fail]{mechanic:fail}."
  },
  "235": {
    "short_effect":"Transfers the user's major status effect to the target.",
    "effect":"If the user has a [major status effect]{mechanic:major-status-effect} and the target does not, the user's status is transferred to the target."
  },
  "236": {
    "short_effect":"Power increases when this move has less PP, up to a maximum of 200.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power is determined by the [PP]{mechanic:pp} remaining for this move, after its [PP]{mechanic:pp} cost is deducted.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.\n\nPP remaining | Power\n------------ | ----:\n4 or more    |    40\n3            |    50\n2            |    60\n1            |    80\n0            |   200\n\nIf this move is activated by another move, the activating move's [PP]{mechanic:pp} is used to calculate power."
  },
  "237": {
    "short_effect":"Prevents target from restoring its HP for five turns.",
    "effect":"For the next five turns, the target may not use any moves that only restore [HP]{mechanic:hp}, and move effects that heal the target are disabled.  Moves that steal [HP]{mechanic:hp} may still be used, but will only inflict damage and not heal the target."
  },
  "238": {
    "short_effect":"Power increases against targets with more HP remaining, up to a maximum of 121 power.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power directly relates to the target's relative remaining [HP]{mechanic:hp}, given by `1 + 120 * current HP / max HP`, to a maximum of 121."
  },
  "239": {
    "short_effect":"User swaps Attack and Defense.",
    "effect":"The user's original [Attack]{mechanic:attack} and [Defense]{mechanic:defense} are swapped.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "240": {
    "short_effect":"Nullifies target's ability until it leaves battle.",
    "effect":"The target's ability is disabled as long as it remains on the [field]{mechanic:field}.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "241": {
    "short_effect":"Prevents the target from scoring critical hits for five turns.",
    "effect":"For five turns, opposing Pokémon cannot score [critical hits]{mechanic:critical-hit}."
  },
  "242": {
    "short_effect":"Uses the target's move against it before it attacks, with power increased by half.",
    "effect":"If the target has selected a damaging move this turn, the user will copy that move and use it against the target, with a 50% increase in power.\n\nIf the target moves before the user, this move will [fail]{mechanic:fail}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "243": {
    "short_effect":"Uses the target's last used move.",
    "effect":"Uses the last move that was used successfully by any Pokémon, including the user.\n\nThis move cannot copy itself, nor []{move:roar} nor []{move:whirlwind}.\n\nThis move cannot be copied by []{move:mirror-move}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "244": {
    "short_effect":"User swaps Attack and Special Attack changes with the target.",
    "effect":"User swaps its [Attack]{mechanic:attack} and [Special Attack]{mechanic:special-attack} [stat modifiers]{mechanic:stat-modifiers} modifiers with the target."
  },
  "245": {
    "short_effect":"User swaps Defense and Special Defense changes with the target.",
    "effect":"User swaps its [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} modifiers with the target."
  },
  "246": {
    "short_effect":"Power increases against targets with more raised stats, up to a maximum of 200.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power starts at 60 and is increased by 20 for every [stage]{mechanic:stage} any of the target's stats has been raised, capping at 200.  [Accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers do not increase this move's power."
  },
  "247": {
    "short_effect":"Can only be used after all of the user's other moves have been used.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  This move can only be used if each of the user's other moves has been used at least once since the user entered the [field]{mechanic:field}.  If this is the user's only move, this move will [fail]{mechanic:fail}."
  },
  "248": {
    "short_effect":"Changes the target's ability to Insomnia.",
    "effect":"Changes the target's ability to []{ability:insomnia}.\n\nIf the target's ability is []{ability:truant} or []{ability:multitype}, this move will [fail]{mechanic:fail}."
  },
  "249": {
    "short_effect":"Only works if the target is about to use a damaging move.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target has not selected a damaging move this turn, or if the target has already acted this turn, this move will [fail]{mechanic:fail}.\n\nThis move is not affected by []{ability:iron-fist}."
  },
  "250": {
    "short_effect":"Scatters poisoned spikes, poisoning opposing Pokémon that switch in.",
    "effect":"Scatters poisoned spikes around the opposing [field]{mechanic:field}, which [poison]{mechanic:poison} opposing Pokémon that enter the [field]{mechanic:field}.  A second layer of these spikes may be laid down, in which case Pokémon will be [badly poison]{mechanic:badly-poison}ed instead.  Pokémon immune to either []{type:ground} moves or being [poison]{mechanic:poison}ed are immune to this effect.  Pokémon otherwise immune to []{type:ground} moves are affected during []{move:gravity}.\n\nIf a []{type:poison} Pokémon not immune to []{type:ground} moves enters a [field]{mechanic:field} covered with poisoned spikes, the spikes are removed.\n\n[]{move:rapid-spin} will remove this effect from its user's side of the [field]{mechanic:field}.  []{move:defog} will remove this effect from its target's side of the [field]{mechanic:field}.\n\nThis move does not trigger []{ability:synchronize}, unless the Pokémon with []{ability:synchronize} was forced to enter the [field]{mechanic:field} by another effect such as []{move:roar}.\n\nPokémon entering the [field]{mechanic:field} due to []{move:baton-pass} are not affected by this effect."
  },
  "251": {
    "short_effect":"User and target swap stat changes.",
    "effect":"User swaps its [stat modifiers]{mechanic:stat-modifiers} with the target."
  },
  "252": {
    "short_effect":"Restores 1/16 of the user's max HP each turn.",
    "effect":"Restores 1/16 of the user's max [HP]{mechanic:hp} at the end of each turn.  If the user leaves the [field]{mechanic:field}, this effect ends.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "253": {
    "short_effect":"User is immune to Ground moves and effects for five turns.",
    "effect":"For five turns, the user is immune to []{type:ground} moves.\n\nIf the user is under the effect of []{move:ingrain} or has []{ability:levitate}, this move will [fail]{mechanic:fail}.\n\nThis effect is temporarily disabled by and cannot be used during []{move:gravity}.\n\nThis effect is passed on by []{move:baton-pass}."
  },
  "254": {
    "short_effect":"User takes 1/3 the damage inflicted in recoil.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/3 the damage it inflicts in recoil.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target.  [Frozen]{mechanic:frozen} Pokémon may use this move, in which case they will thaw."
  },
  "255": {
    "short_effect":"User takes 1/4 its max HP in recoil.",
    "effect":"Inflicts [typeless]{mechanic:typeless} [regular damage]{mechanic:regular-damage}.  User takes 1/4 its max [HP]{mechanic:hp} in recoil.  Ignores [accuracy]{mechanic:accuracy} and [evasion]{mechanic:evasion} modifiers.\n\nThis move is used automatically when a Pokémon cannot use any other move legally, e.g., due to having no [PP]{mechanic:pp} remaining or being under the effect of both []{move:encore} and []{move:torment} at the same time.\n\nThis move's recoil is not treated as recoil for the purposes of anything that affects recoil, such as the ability []{ability:rock-head}.  It also is not prevented by []{ability:magic-guard}.\n\nThis move cannot be copied by []{move:mimic}, []{move:mirror-move}, or []{move:sketch}, nor selected by []{move:assist} or []{move:metronome}, nor forced by []{move:encore}."
  },
  "256": {
    "short_effect":"User dives underwater, dodging all attacks, and hits next turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User dives underwater for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, []{move:surf}, and []{move:whirlpool} still hit the user normally, and their power is doubled if appropriate.\n\nThe user may be hit during its immune turn if under the effect of []{move:lock-on}, []{move:mind-reader}, or []{ability:no-guard}.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "257": {
    "short_effect":"User digs underground, dodging all attacks, and hits next turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User digs underground for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, []{move:earthquake}, []{move:fissure}, and []{move:magnitude} still hit the user normally, and their power is doubled if appropriate.\n\nThe user may be hit during its immune turn if under the effect of []{move:lock-on}, []{move:mind-reader}, or []{ability:no-guard}.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "258": {
    "short_effect":"Inflicts regular damage and can hit Dive users.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.\n\nIf the target is in the first turn of []{move:dive}, this move will hit with double power."
  },
  "259": {
    "short_effect":"Lowers the target's evasion by one stage.  Removes field effects from the enemy field.",
    "effect":"Lowers the target's [evasion]{mechanic:evasion} by one [stage]{mechanic:stage}.  Clears away fog.  Removes the effects of []{move:mist}, []{move:light-screen}, []{move:reflect}, []{move:safeguard}, []{move:spikes}, []{move:stealth-rock}, and []{move:toxic-spikes} from the target's side of the [field]{mechanic:field}.\n\nIf the target is protected by []{move:mist}, it will prevent the [evasion]{mechanic:evasion} change, then be removed by this move."
  },
  "260": {
    "short_effect":"For five turns, slower Pokémon will act before faster Pokémon.",
    "effect":"For five turns (including this one), slower Pokémon will act before faster Pokémon.  Move priority is not affected.  Using this move when its effect is already active will end the effect.\n\nPokémon holding []{item:full-incense}, []{item:lagging-tail}, or []{item:quick-claw} and Pokémon with []{ability:stall} ignore this effect."
  },
  "261": {
    "short_effect":"Has a $effect_chance% chance to freeze the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [freeze]{mechanic:freeze} the target.\n\nDuring []{move:hail}, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of []{move:protect} and []{move:detect}."
  },
  "262": {
    "short_effect":"Prevents the target from leaving battle and inflicts 1/16 its max HP in damage for 2-5 turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the [field]{mechanic:field}, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nIf the target is in the first turn of []{move:dive}, this move will hit with double power."
  },
  "263": {
    "short_effect":"User takes 1/3 the damage inflicted in recoil.  Has a $effect_chance% chance to paralyze the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/3 the damage it inflicts in recoil.  Has a $effect_chance% chance to [paralyze]{mechanic:paralyze} the target."
  },
  "264": {
    "short_effect":"User bounces high into the air, dodging all attacks, and hits next turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User bounces high into the air for one turn, becoming immune to attack, and hits on the second turn.  Has a $effect_chance% chance to [paralyze]{mechanic:paralyze} the target.\n\nDuring the immune turn, []{move:gust}, []{move:hurricane}, []{move:sky-uppercut}, []{move:smack-down}, []{move:thunder}, and []{move:twister} still hit the user normally.  []{move:gust} and []{move:twister} also have double power against the user.\n\nThe damage from []{move:hail} and []{move:sandstorm} still applies during the immune turn.\n\nThe user may be hit during its immune turn if under the effect of []{move:lock-on}, []{move:mind-reader}, or []{ability:no-guard}.\n\nThis move cannot be used while []{move:gravity} is in effect.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "266": {
    "short_effect":"Lowers the target's Special Attack by two stages if it's the opposite gender.",
    "effect":"Lowers the target's [Special Attack]{mechanic:special-attack} by two [stages]{mechanic:stage}.  If the user and target are the same gender, or either is genderless, this move will [fail]{mechanic:fail}."
  },
  "267": {
    "short_effect":"Causes damage when opposing Pokémon switch in.",
    "effect":"Spreads sharp rocks around the opposing [field]{mechanic:field}, damaging any Pokémon that enters the [field]{mechanic:field} for 1/8 its max [HP]{mechanic:hp}.  This damage is affected by the entering Pokémon's susceptibility to []{type:rock} moves.\n\n[]{move:rapid-spin} removes this effect from its user's side of the [field]{mechanic:field}."
  },
  "268": {
    "short_effect":"Has a higher chance to confuse the target when the recorded sound is louder.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has either a 1%, 11%, or 31% chance to [confuse]{mechanic:confuse} the target, based on the volume of the recording made for this move; louder recordings increase the chance of [confusion]{mechanic:confusion}.  If the user is not a []{pokemon:chatot}, this move will not cause [confusion]{mechanic:confusion}.\n\nThis move cannot be copied by []{move:mimic}, []{move:mirror-move}, or []{move:sketch}, nor selected by []{move:assist}, []{move:metronome}, or []{move:sleep-talk}."
  },
  "269": {
    "short_effect":"If the user is holding a appropriate plate or drive, the damage inflicted will match it.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the user is holding a plate or a drive, this move's type is the type corresponding to that item.\n\nNote: This effect is technically shared by both []{move:techno-blast} and []{move:judgment}; however, Techno Blast is only affected by drives, and Judgment is only affected by plates."
  },
  "270": {
    "short_effect":"User receives 1/2 the damage inflicted in recoil.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/2 the damage it inflicts in recoil."
  },
  "271": {
    "short_effect":"User faints, and its replacement is fully healed.",
    "effect":"User [faint]{mechanic:faint}s.  Its replacement's [HP]{mechanic:hp} and [PP]{mechanic:pp} are fully restored, and any [major status effect]{mechanic:major-status-effect} is removed."
  },
  "272": {
    "short_effect":"Has a $effect_chance% chance to lower the target's Special Defense by two stages.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to lower the target's [Special Defense]{mechanic:special-defense} by two [stages]{mechanic:stage}."
  },
  "273": {
    "short_effect":"User vanishes, dodging all attacks, and hits next turn.  Hits through Protect and Detect.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User vanishes for one turn, becoming immune to attack, and hits on the second turn.\n\nThis move ignores the effects of []{move:detect} and []{move:protect}.\n\nThis move cannot be selected by []{move:sleep-talk}."
  },
  "274": {
    "short_effect":"Has a $effect_chance% chance to [burn]{mechanic:burn} the target and a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target and a separate $effect_chance% chance to make the target [flinch]{mechanic:flinch}."
  },
  "275": {
    "short_effect":"Has a $effect_chance% chance to freeze the target and a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [freeze]{mechanic:freeze} the target and a separate $effect_chance% chance to make the target [flinch]{mechanic:flinch}."
  },
  "276": {
    "short_effect":"Has a $effect_chance% chance to paralyze the target and a $effect_chance% chance to make the target flinch.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [paralyze]{mechanic:paralyze} the target and a separate $effect_chance% chance to make the target [flinch]{mechanic:flinch}."
  },
  "277": {
    "short_effect":"Has a $effect_chance% chance to raise the user's Special Attack by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to raise the user's [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage}."
  },
  "278": {
    "short_effect":"Raises the user's Attack and accuracy by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack} and [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage}."
  },
  "279": {
    "short_effect":"Prevents any multi-target moves from hitting friendly Pokémon this turn.",
    "effect":"Moves with multiple targets will not hit friendly Pokémon for the remainder of this turn.  If the user is last to act this turn, this move will [fail]{mechanic:fail}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "280": {
    "short_effect":"Averages Defense and Special Defense with the target.",
    "effect":"Averages the user's unmodified [Defense]{mechanic:defense} with the target's unmodified Defense; the value becomes the unmodified Defense for both Pokémon. Unmodified [Special Defense]{mechanic:special-defense} is averaged the same way."
  },
  "281": {
    "short_effect":"Averages Attack and Special Attack with the target.",
    "effect":"Averages the user's unmodified [Attack]{mechanic:attack} with the target's unmodified Attack; the value becomes the unmodified Attack for both Pokémon. Unmodified [Special Attack]{mechanic:special-attack} is averaged the same way.\n\nThis effect applies before any other persistent changes to unmodified Attack or Special Attack, such as []{ability:flower-gift} during []{move:sunny-day}."
  },
  "282": {
    "short_effect":"All Pokémon's Defense and Special Defense are swapped for 5 turns.",
    "effect":"For five turns (including this one), every Pokémon's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} are swapped."
  },
  "283": {
    "short_effect":"Inflicts damage based on the target's Defense, not Special Defense.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Damage calculation always uses the target's [Defense]{mechanic:defense}, regardless of this move's damage class."
  },
  "284": {
    "short_effect":"Inflicts double damage if the target is Poisoned.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is [poisoned]{mechanic:poisoned}, this move has double power."
  },
  "285": {
    "short_effect":"Raises the user's Speed by two stages and halves the user's weight.",
    "effect":"Raises the user's [Speed]{mechanic:speed} by two [stages]{mechanic:stage}.  Halves the user's weight; this effect does not stack."
  },
  "286": {
    "short_effect":"Moves have 100% accuracy against the target for three turns.",
    "effect":"For three turns (including this one), moves used against the target have 100% [accuracy]{mechanic:accuracy}, but the target is immune to []{type:ground} damage.  Accuracy of one-hit KO moves is exempt from this effect.\n\nThis effect is removed by []{move:gravity}.  If Gravity is already in effect, this move will [fail]{mechanic:fail}."
  },
  "287": {
    "short_effect":"Negates held items for five turns.",
    "effect":"For five turns (including this one), passive effects of held items are ignored, and Pokémon will not use their held items."
  },
  "288": {
    "short_effect":"Removes any immunity to Ground damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Removes the target's [immunity]{mechanic:immune} to []{type:ground}-type damage.  This effect removes any existing Ground immunity due to []{ability:levitate}, []{move:magnet-rise}, or []{move:telekinesis}, and causes the target's []{type:flying} type to be ignored when it takes Ground damage.\n\nIf the target isn't immune to Ground damage, this move will [fail]{mechanic:fail}.\n\nThis move can hit Pokémon under the effect of []{move:bounce}, []{move:fly}, or []{move:sky-drop}, and ends the effect of Bounce or Fly."
  },
  "289": {
    "short_effect":"Always scores a critical hit.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Always scores a [critical hit]{mechanic:critical-hit}."
  },
  "290": {
    "short_effect":"Deals splash damage to Pokémon next to the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If this move successfully hits the target, any Pokémon adjacent to the target are damaged for 1/16 their max [HP]{mechanic:hp}."
  },
  "291": {
    "short_effect":"Raises the user's Special Attack, Special Defense, and Speed by one stage each.",
    "effect":"Raises the user's [Special Attack]{mechanic:special-attack}, [Special Defense]{mechanic:special-defense}, and [Speed]{mechanic:speed} by one [stage]{mechanic:stage} each."
  },
  "292": {
    "short_effect":"Power is higher when the user weighs more than the target, up to a maximum of 120.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  The greater the user's weight compared to the target's, the higher power this move has, to a maximum of 120.\n\nUser's weight                    | Power\n-------------------------------- | ----:\nUp to 2× the target's weight     |    40\nUp to 3× the target's weight     |    60\nUp to 4× the target's weight     |    80\nUp to 5× the target's weight     |   100\nMore than 5× the target's weight |   120\n"
  },
  "293": {
    "short_effect":"Hits any Pokémon that shares a type with the user.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Only Pokémon that share a type with the user will take damage from this move."
  },
  "294": {
    "short_effect":"Power is higher when the user has greater Speed than the target, up to a maximum of 150.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  The greater the user's [Speed]{mechanic:speed} compared to the target's, the higher power this move has, to a maximum of 150.\n\nUser's Speed                     | Power\n-------------------------------- | ----:\nUp to 2× the target's Speed      |    60\nUp to 3× the target's Speed      |    80\nUp to 4× the target's Speed      |   120\nMore than 4× the target's Speed  |   150\n"
  },
  "295": {
    "short_effect":"Changes the target's type to Water.",
    "effect":"Changes the target to pure []{type:water}-type until it leaves the field.  If the target has []{ability:multitype}, this move will [fail]{mechanic:fail}."
  },
  "296": {
    "short_effect":"Inflicts regular damage.  Raises the user's Speed by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Raises the user's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}."
  },
  "297": {
    "short_effect":"Lowers the target's Special Defense by two stages.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Lowers the target's [Special Defense]{mechanic:special-defense} by two [stages]{mechanic:stage}."
  },
  "298": {
    "short_effect":"Calculates damage with the target's attacking stat.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Damage is calculated using the target's attacking stat rather than the user's."
  },
  "299": {
    "short_effect":"Changes the target's ability to Simple.",
    "effect":"Changes the target's ability to []{ability:simple}."
  },
  "300": {
    "short_effect":"Copies the user's ability onto the target.",
    "effect":"Changes the target's ability to match the user's.  This effect ends when the target leaves battle."
  },
  "301": {
    "short_effect":"Makes the target act next this turn.",
    "effect":"The target will act next this turn, regardless of [Speed]{mechanic:speed} or move priority.\nIf the target has already acted this turn, this move will [fail]{mechanic:fail}."
  },
  "302": {
    "short_effect":"Has double power if it's used more than once per turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If []{move:round} has already been used this turn, this move's power is doubled.  After this move is used, any other Pokémon using it this turn will immediately do so (in the order they would otherwise act), regardless of [Speed]{mechanic:speed} or priority.  Pokémon using other moves will then continue to act as usual."
  },
  "303": {
    "short_effect":"Power increases by 100% for each consecutive use by any friendly Pokémon, to a maximum of 200.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If any friendly Pokémon used this move earlier this turn or on the previous turn, that use's power is added to this move's power, to a maximum of 200."
  },
  "304": {
    "short_effect":"Ignores the target's stat modifiers.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Damage calculation ignores the target's [stat modifiers]{mechanic:stat-modifiers}, including [evasion]{mechanic:evasion}."
  },
  "305": {
    "short_effect":"Removes all of the target's stat modifiers.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  All of the target's [stat modifiers]{mechanic:stat-modifiers} are reset to zero."
  },
  "306": {
    "short_effect":"Power is higher the more the user's stats have been raised, to a maximum of 31×.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Power is increased by 100% its original value for every [stage]{mechanic:stage} any of the user's stats have been raised.  [Accuracy]{mechanic:accuracy}, [evasion]{mechanic:evasion}, and lowered stats do not affect this move's power.  For a Pokémon with all five stats modified to +6, this move's power is 31×."
  },
  "307": {
    "short_effect":"Prevents any priority moves from hitting friendly Pokémon this turn.",
    "effect":"Moves with priority greater than 0 will not hit friendly Pokémon for the remainder of this turn.  If the user is last to act this turn, this move will [fail]{mechanic:fail}.\n\nThis move cannot be selected by []{move:assist} or []{move:metronome}."
  },
  "308": {
    "short_effect":"User switches places with the friendly Pokémon opposite it.",
    "effect":"User switches position on the field with the friendly Pokémon opposite it.  If the user is in the middle position in a triple battle, or there are no other friendly Pokémon, this move will [fail]{mechanic:fail}."
  },
  "309": {
    "short_effect":"Raises user's Attack, Special Attack, and Speed by two stages.  Lower user's Defense and Special Defense by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack}, [Special Attack]{mechanic:special-attack}, and [Speed]{mechanic:speed} by two [stages]{mechanic:stage} each.  Lowers the user's [Defense]{mechanic:defense} and [Special Defense]{mechanic:special-defense} by one []{mechanic:stage} each."
  },
  "310": {
    "short_effect":"Heals the target for half its max HP.",
    "effect":"Heals the target for half its max [HP]{mechanic:hp}."
  },
  "311": {
    "short_effect":"Has double power if the target has a major status ailment.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target has a [major status ailment]{mechanic:major-status-ailment}, this move has double power."
  },
  "312": {
    "short_effect":"Carries the target high into the air, dodging all attacks against either, and drops it next turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User carries the target high into the air for one turn, during which no moves will hit either Pokémon and neither can act.  On the following turn, the user drops the target, inflicting damage and ending the effect.\n\nIf the target is []{type:flying}-type, this move will function as normal but inflict no damage.\n\n[]{move:gust}, []{move:hurricane}, []{move:sky-uppercut}, []{move:smack-down}, []{move:thunder}, []{move:twister}, and []{move:whirlwind} can hit both the user and the target during this effect.  []{move:gust} and []{move:twister} will additionally have double power.\n\nThe damage from []{move:hail} and []{move:sandstorm} still applies during this effect.\n\nEither Pokémon may be hit during this effect if also under the effect of []{move:lock-on}, []{move:mind-reader}, or []{ability:no-guard}.\n\nThis move cannot be used while []{move:gravity} is in effect.\n\nThis move cannot be selected by []{move:sleep-talk}.\n\n*Bug*: If []{move:gravity} is used during a double or triple battle while this move is in effect, this move is not correctly canceled on the target, and it remains high in the air indefinitely.  As this move prevents the target from acting, the only way to subsequently remove it from the field is to faint it."
  },
  "313": {
    "short_effect":"Raises the user's Attack by one stage and its Speed by two stages.",
    "effect":"Raises the user's [Attack]{mechanic:attack} by one [stage]{mechanic:stage} and its [Speed]{mechanic:speed} by two stages."
  },
  "314": {
    "short_effect":"Ends wild battles.  Forces trainers to switch Pokémon.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}, then [switches]{mechanic:switch-out} the target out for another of its trainer's Pokémon, selected at random.\n\nIf the target is under the effect of []{move:ingrain} or []{ability:suction-cups}, or it has a []{move:substitute}, or its Trainer has no more usable Pokémon, it will not be switched out.  If the target is a wild Pokémon, the battle ends instead."
  },
  "315": {
    "short_effect":"Destroys the target's held berry.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the target is [holding]{mechanic:held-item} a [berry]{mechanic:berry}, it's destroyed and cannot be used in response to this move."
  },
  "316": {
    "short_effect":"Makes the target act last this turn.",
    "effect":"Forces the target to act last this turn, regardless of [Speed]{mechanic:speed} or move [priority]{mechanic:priority}.  If the target has already acted this turn, this move will [fail]{mechanic:fail}."
  },
  "317": {
    "short_effect":"Raises the user's Attack and Special Attack by one stage.",
    "effect":"Raises the user's [Attack]{mechanic:attack} and [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage} each.  During []{move:sunny-day}, raises both stats by two stages."
  },
  "318": {
    "short_effect":"Has double power if the user has no held item.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If the user has no [held item]{mechanic:held-item}, this move has double power."
  },
  "319": {
    "short_effect":"User becomes the target's type.",
    "effect":"User's type changes to match the target's."
  },
  "320": {
    "short_effect":"Has double power if a friendly Pokémon fainted last turn.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon fainted on the previous turn, this move has double power."
  },
  "321": {
    "short_effect":"Inflicts damage equal to the user's remaining HP.  User faints.",
    "effect":"Inflicts damage equal to the user's remaining [HP]{mechanic:hp}.  User faints."
  },
  "322": {
    "short_effect":"Raises the user's Special Attack by three stages.",
    "effect":"Raises the user's [Special Attack]{mechanic:special-attack} by three [stages]{mechanic:stage}."
  },
  "323": {
    "short_effect":"Raises the user's Attack, Defense, and accuracy by one stage each.",
    "effect":"Raises the user's [Attack]{mechanic:attack}, [Defense]{mechanic:defense}, and [accuracy]{mechanic:accuracy} by one [stage]{mechanic:stage} each."
  },
  "324": {
    "short_effect":"Gives the user's held item to the target.",
    "effect":"Transfers the user's [held item]{mechanic:held-item} to the target.  If the user has no held item, or the target already has a held item, this move will [fail]{mechanic:fail}."
  },
  "325": {
    "short_effect":"With [Grass Pledge]{move:grass-pledge}, halves opposing Pokémon's Speed for four turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon used []{move:grass-pledge} earlier this turn, all opposing Pokémon have halved [Speed]{mechanic:speed} for four turns (including this one)."
  },
  "326": {
    "short_effect":"With [Water Pledge]{move:water-pledge}, doubles the effect chance of friendly Pokémon's moves for four turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon used []{move:water-pledge} earlier this turn, moves used by any friendly Pokémon have doubled effect chance for four turns (including this one)."
  },
  "327": {
    "short_effect":"With [Fire Pledge]{move:fire-pledge}, damages opposing Pokémon for 1/8 their max HP every turn for four turns.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon used []{move:fire-pledge} earlier this turn, all opposing Pokémon will take 1/8 their max [HP]{mechanic:hp} in damage at the end of every turn for four turns (including this one)."
  },
  "328": {
    "short_effect":"Raises the user's Attack and Special Attack by one stage each.",
    "effect":"Raises the user's [Attack]{mechanic:attack} and [Special Attack]{mechanic:special-attack} by one [stage]{mechanic:stage} each."
  },
  "329": {
    "short_effect":"Raises the user's Defense by three stages.",
    "effect":"Raises the user's [Defense]{mechanic:defense} by three [stages]{mechanic:stage}."
  },
  "330": {
    "short_effect":"Has a $effect_chance% chance to put the target to sleep.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to put the target to [sleep]{mechanic:sleep}.\nIf the user is a []{pokemon:meloetta}, it will toggle between Aria and Pirouette Forme."
  },
  "331": {
    "short_effect":"Lowers the target's Speed by one stage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Lowers the target's [Speed]{mechanic:speed} by one [stage]{mechanic:stage}."
  },
  "332": {
    "short_effect":"Requires a turn to charge before attacking.  Has a $effect_chance% chance to paralyze the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [paralyze]{mechanic:paralysis} the target.  User charges for one turn before attacking."
  },
  "333": {
    "short_effect":"Requires a turn to charge before attacking.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [burn]{mechanic:burn} the target.  User charges for one turn before attacking."
  },
  "335": {
    "short_effect":"Lowers the user's Defense, Special Defense, and Speed by one stage each.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Lowers the user's [Defense]{mechanic:defense}, [Special Defense]{mechanic:special-defense}, and [Speed]{mechanic:speed} by one [stage]{mechanic:stage} each."
  },
  "336": {
    "short_effect":"With [Fusion Bolt]{move:fusion-bolt}, inflicts double damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon used []{move:fusion-bolt} earlier this turn, this move has double power."
  },
  "337": {
    "short_effect":"With [Fusion Flare]{move:fusion-flare}, inflicts double damage.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  If a friendly Pokémon used []{move:fusion-flare} earlier this turn, this move has double power."
  },
  "338": {
    "short_effect":"Has a $effect_chance% chance to confuse the target.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  Has a $effect_chance% chance to [confuse]{mechanic:confuse} the target.\n\nThis move can hit Pokémon under the effect of []{move:bounce}, []{move:fly}, or []{move:sky-drop}.\n\nDuring []{move:rain-dance}, this move has 100% accuracy.  During []{move:sunny-day}, this move has 50% accuracy."
  },
  "339": {
    "short_effect":"Deals both []{type:fighting} and []{type:flying}-type damage.",
    "effect":"Inflicts regular damage.  For the purposes of type effectiveness, this move is both []{type:fighting}- and []{type:flying}-type: its final effectiveness is determined by multiplying the effectiveness of each type against each of the target's types.\n\nFor all other purposes, this move is pure Fighting-type.  If this move's type is changed, its Fighting typing is overwritten, and its secondary type remains Flying.\n\nIf the target has used []{move:minimize} since entering battle, this move has double power and will never miss."
  },
  "340": {
    "short_effect":"Protects all friendly Pokémon from damaging moves.  Only works on the first turn after the user is sent out.",
    "effect":"Protects all friendly Pokémon from damaging moves.  Only works on the first turn after the user is sent out."
  },
  "341": {
    "short_effect":"Can only be used after the user has eaten a berry.",
    "effect":"Inflicts regular damage.  Can only be used if the user has eaten a berry since the beginning of the battle.\n\nAfter the user eats a berry, it may use this move any number of times until the end of the battle, even if it switches out.  Eating a held berry, eating a berry via []{move:bug-bite} or []{move:pluck}, or being the target of a [Flung]{move:fling} berry will enable this move.  Feeding a Pokémon a berry from the bag or using []{move:natural-gift} will not.\n\nIf the trainer chooses this move when it cannot be used, the choice is rejected outright and the trainer must choose another move."
  },
  "342": {
    "short_effect":"Raises the Attack and Special Attack of all []{type:grass} Pokémon in battle.",
    "effect":"Raises the Attack and Special Attack of all []{type:grass} Pokémon in battle."
  },
  "343": {
    "short_effect":"Covers the opposing field, lowering opponents' Speed by one stage upon switching in.",
    "effect":"Shoots a web over the opponents' side of the field, which lowers the Speed of any opposing Pokémon that enters the field by one stage.\n\nPokémon in the air, such as []{type:flying}-types and those with []{ability:levitate}, are unaffected.  []{move:rapid-spin} removes Sticky Web from the user's side of the field; []{move:defog} removes it from both sides."
  },
  "344": {
    "short_effect":"Raises the user's Attack by two stages if it KOs the target.",
    "effect":"Inflicts regular damage.  Raises the user's Attack by two stages if it KOs the target."
  },
  "345": {
    "short_effect":"Adds []{type:ghost} to the target's types.",
    "effect":"Adds []{type:ghost} to the target's types."
  },
  "346": {
    "short_effect":"Lowers the target's Attack and Special Attack by one stage.",
    "effect":"Lowers the target's Attack and Special Attack by one stage."
  },
  "347": {
    "short_effect":"Changes all []{type:normal} moves to []{type:electric} moves for the rest of the turn.",
    "effect":"Changes all Pokémon's []{type:normal} moves to []{type:electric} moves for the rest of the turn."
  },
  "348": {
    "short_effect":"Heals the user for half the total damage dealt to all targets.",
    "effect":"Heals the user for half the total damage dealt to all targets."
  },
  "349": {
    "short_effect":"Adds []{type:grass} to the target's types.",
    "effect":"Adds []{type:grass} to the target's types."
  },
  "350": {
    "short_effect":"Super-effective against []{type:water}.",
    "effect":"Deals regular damage.  This move is super-effective against the []{type:water} type.\n\nThe target's other type will affect damage as usual.  If this move's type is changed, it remains super-effective against Water regardless of its type."
  },
  "351": {
    "short_effect":"Lowers all targets' Attack and Special Attack by one stage.  Makes the user switch out.",
    "effect":"Lowers all targets' Attack and Special Attack by one stage.  Makes the user switch out."
  },
  "352": {
    "short_effect":"Inverts the target's stat modifiers.",
    "effect":"Inverts the target's stat modifiers."
  },
  "353": {
    "short_effect":"Drains 75% of the damage inflicted to heal the user.",
    "effect":"Deals regular damage.  Drains 75% of the damage inflicted to heal the user."
  },
  "354": {
    "short_effect":"Protects all friendly Pokémon from non-damaging moves.",
    "effect":"Protects all friendly Pokémon from non-damaging moves for the rest of the turn.\n\nUnlike other blocking moves, this move may be used consecutively without its chance of success falling."
  },
  "355": {
    "short_effect":"Raises the Defense of all []{type:grass} Pokémon in battle",
    "effect":"Raises the Defense of all []{type:grass} Pokémon in battle."
  },
  "356": {
    "short_effect":"For five turns, heals all Pokémon on the ground for 1/16 max HP each turn and strengthens their []{type:grass} moves to 1.5× their power.",
    "effect":"For five turns, heals all Pokémon on the ground for 1/16 their max HP each turn and strengthens their []{type:grass} moves to 1.5× their power.\n\nChanges []{move:nature-power} to []{move:energy-ball}."
  },
  "357": {
    "short_effect":"For five turns, protects all Pokémon on the ground from major status ailments and confusion, and halves the power of incoming []{type:dragon} moves.",
    "effect":"For five turns, protects all Pokémon on the ground from major status ailments and confusion and weakens []{type:dragon} moves used against them to 0.5× their power.\n\nChanges []{move:nature-power} to []{move:moonblast}."
  },
  "358": {
    "short_effect":"Changes the target's move's type to []{type:electric} if it hasn't moved yet this turn.",
    "effect":"Changes the target's move's type to []{type:electric} if it hasn't moved yet this turn."
  },
  "359": {
    "short_effect":"Prevents all Pokémon from fleeing or switching out during the next turn.",
    "effect":"Prevents all Pokémon from fleeing or switching out during the next turn."
  },
  "360": {
    "short_effect":"Blocks damaging attacks and lowers attacking Pokémon's Attack by two stages on contact.  Switches Aegislash to Shield Forme.",
    "effect":"Blocks damaging attacks and lowers attacking Pokémon's Attack by two stages on contact.  Switches Aegislash to Shield Forme."
  },
  "361": {
    "short_effect":"Lowers the target's Special Attack by one stage.",
    "effect":"Lowers the target's Special Attack by one stage."
  },
  "362": {
    "short_effect":"Blocks damaging attacks and damages attacking Pokémon for 1/8 their max HP.",
    "effect":"Blocks damaging attacks and damages attacking Pokémon for 1/8 their max HP."
  },
  "363": {
    "short_effect":"Raises a selected ally's Special Defense by one stage.",
    "effect":"Raises a selected ally's Special Defense by one stage."
  },
  "364": {
    "short_effect":"Lowers the target's Attack, Special Attack, and Speed by one stage if it is poisoned.",
    "effect":"Lowers the target's Attack, Special Attack, and Speed by one stage if it is poisoned."
  },
  "365": {
    "short_effect":"Explodes if the target uses a []{type:fire} move this turn, damaging it for 1/4 its max HP and preventing the move.",
    "effect":"Explodes if the target uses a []{type:fire} move this turn, damaging it for 1/4 its max HP and preventing the move."
  },
  "366": {
    "short_effect":"Takes one turn to charge, then raises the user's Special Attack, Special Defense, and Speed by two stages.",
    "effect":"Takes one turn to charge, then raises the user's Special Attack, Special Defense, and Speed by two stages."
  },
  "367": {
    "short_effect":"Raises the Defense and Special Defense of all friendly Pokémon with []{ability:plus} or []{ability:minus} by one stage.",
    "effect":"Raises the Defense and Special Defense of all friendly Pokémon with []{ability:plus} or []{ability:minus} by one stage."
  },
  "368": {
    "short_effect":"For five turns, prevents all Pokémon on the ground from sleeping and strengthens their []{type:electric} moves to 1.5× their power.",
    "effect":"For five turns, prevents all Pokémon on the ground from sleeping and strengthens their []{type:electric} moves to 1.5× their power.\n\nChanges []{move:nature-power} to []{move:thunderbolt}."
  },
  "369": {
    "short_effect":"Lowers the target's Special Attack by two stages.",
    "effect":"Lowers the target's Special Attack by two stages."
  },
  "370": {
    "short_effect":"Doubles prize money.",
    "effect":"Doubles prize money.\n\nStacks with a held item.  Only works once per battle."
  },
  "10001": {
    "short_effect":"Has an increased chance for a critical hit in Hyper Mode.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User's [critical hit]{mechanic:critical-hit} rate is one level higher when using this move while in [hyper mode]{mechanic:hyper-mode}."
  },
  "10002": {
    "short_effect":"User receives 1/2 its HP in recoil.",
    "effect":"Inflicts [regular damage]{mechanic:regular-damage}.  User takes 1/2 of its current [HP]{mechanic:hp} in recoil."
  },
  "10003": {
    "short_effect":"Halves HP of all Pokémon on the field.  Must recharge",
    "effect":"Halves [HP]{mechanic:hp} of all Pokémon on the field.  User loses its next turn to \"recharge\", and cannot attack or [switch]{mechanic:switch} out during that turn."
  },
  "10004": {
    "short_effect":"Lowers the target's evasion by two stages.",
    "effect":"Lowers the target's [evasion]{mechanic:evasion} by two [stages]{mechanic:stage}."
  },
  "10005": {
    "short_effect":"Removes [Light Screen]{move:light-screen}, [Reflect]{move:reflect}, and [Safeguard]{move:safeguard}.",
    "effect":"Removes the effects of []{move:light-screen}, []{move:reflect}, and []{move:safeguard}."
  },
  "10006": {
    "short_effect":"Changes the weather to Shadow Sky for five turns.",
    "effect":"Changes the weather to Shadow Sky for five turns.  Pokémon other than []{type:shadow} Pokémon take 1/16 their max [HP]{mechanic:hp} at the end of every turn.  This move is typeless for the purposes of []{move:weather-ball}."
  },
  "10007": {
    "short_effect":"Unknown.",
    "effect":"This move has a unique effect, but it is unreleased, so the specific effect is unknown."
  }
};

class Effect extends Object {}

export default {
  Effect,
  effects: Object.keys(data).map((id) => {
    const model = new Effect();

    model.id = id;
    Object.keys(data[id]).forEach((key) => {
      model[key] = data[id][key];
    })
    return model;
  }),
}
