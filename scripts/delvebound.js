Hooks.once("init", () => {
    //Delete things that would get in the way
    delete CONFIG.DND5E.currencies.cp;
    delete CONFIG.DND5E.currencies.sp;
    delete CONFIG.DND5E.currencies.gp;
    delete CONFIG.DND5E.currencies.ep;
    delete CONFIG.DND5E.languages.druidic;
    //delete CONFIG.DND5E.languages.exotic;
    //delete CONFIG.DND5E.languages.standard;
    delete CONFIG.DND5E.sourcePacks.ITEMS;
    delete CONFIG.DND5E.spellSchools.abj;
    delete CONFIG.DND5E.spellSchools.con;
    delete CONFIG.DND5E.spellSchools.div;
    delete CONFIG.DND5E.spellSchools.enc;
    delete CONFIG.DND5E.spellSchools.evo;
    delete CONFIG.DND5E.spellSchools.ill;
    delete CONFIG.DND5E.spellSchools.nec;
    delete CONFIG.DND5E.spellSchools.trs;
    delete CONFIG.DND5E.weaponProficiencies.mar;
    delete CONFIG.DND5E.weaponProficiencies.sim;
    delete CONFIG.DND5E.weaponTypes.martialM;
    delete CONFIG.DND5E.weaponTypes.martialR;
    delete CONFIG.DND5E.weaponTypes.simpleM;
    delete CONFIG.DND5E.weaponTypes.simpleR;
    delete CONFIG.DND5E.weaponProficiencies.club;
    delete CONFIG.DND5E.weaponProficiencies.flail;
    delete CONFIG.DND5E.weaponProficiencies.greatclub;
    delete CONFIG.DND5E.weaponProficiencies.lighthammer;
    delete CONFIG.DND5E.weaponProficiencies.mace;
    delete CONFIG.DND5E.weaponProficiencies.maul;
    delete CONFIG.DND5E.weaponProficiencies.morningstar;
    delete CONFIG.DND5E.weaponProficiencies.quarterstaff;
    delete CONFIG.DND5E.weaponProficiencies.warhammer;
    delete CONFIG.DND5E.weaponProficiencies.dagger;
    delete CONFIG.DND5E.weaponProficiencies.rapier;
    delete CONFIG.DND5E.weaponProficiencies.scimitar;
    delete CONFIG.DND5E.weaponProficiencies.shortsword;
    delete CONFIG.DND5E.weaponProficiencies.greatsword;
    delete CONFIG.DND5E.weaponProficiencies.longsword;
    delete CONFIG.DND5E.weaponProficiencies.blowgun;
    delete CONFIG.DND5E.weaponProficiencies.handcrossbow;
    delete CONFIG.DND5E.weaponProficiencies.heavycrossbow;
    delete CONFIG.DND5E.weaponProficiencies.lightcrossbow;
    delete CONFIG.DND5E.weaponProficiencies.dart;
    delete CONFIG.DND5E.weaponProficiencies.longbow;
    delete CONFIG.DND5E.weaponProficiencies.net;
    delete CONFIG.DND5E.weaponProficiencies.shortbow;
    delete CONFIG.DND5E.weaponProficiencies.sling;
    delete CONFIG.DND5E.weaponProficiencies.battleaxe;
    delete CONFIG.DND5E.weaponProficiencies.greataxe;
    delete CONFIG.DND5E.weaponProficiencies.handaxe;
    delete CONFIG.DND5E.weaponProficiencies.sickle;
    delete CONFIG.DND5E.weaponProficiencies.warpick;
    delete CONFIG.DND5E.weaponProficiencies.glaive;
    delete CONFIG.DND5E.weaponProficiencies.halberd;
    delete CONFIG.DND5E.weaponProficiencies.javelin;
    delete CONFIG.DND5E.weaponProficiencies.lance;
    delete CONFIG.DND5E.weaponProficiencies.pike;
    delete CONFIG.DND5E.weaponProficiencies.spear;
    delete CONFIG.DND5E.weaponProficiencies.trident;
    delete CONFIG.DND5E.weaponProficiencies.whip;
    delete CONFIG.DND5E.weaponProficienciesMap.martialM;
    delete CONFIG.DND5E.weaponProficienciesMap.martialR;
    delete CONFIG.DND5E.weaponProficienciesMap.simpleM;
    delete CONFIG.DND5E.weaponProficienciesMap.simpleR;
    //Rename abilities
    foundry.utils.mergeObject(CONFIG.DND5E.abilities.dex, {label: "Agility", abbreviation: "agi"});
    foundry.utils.mergeObject(CONFIG.DND5E.abilities.con, {label: "Endurance", abbreviation: "end"});
    foundry.utils.mergeObject(CONFIG.DND5E.abilities.wis, {label: "Willpower", abbreviation: "wil"});
    foundry.utils.mergeObject(CONFIG.DND5E.abilities.cha, {label: "Personality", abbreviation: "per"});
    foundry.utils.mergeObject(CONFIG.DND5E.currencies.pp, {label: "Septims", abbreviation: "S"});
    foundry.utils.mergeObject(CONFIG.DND5E.inspiration, {label: "Luck"});
    //Add Daedra creature type
    CONFIG.DND5E.creatureTypes.daedra = {
            icon: "icons/creatures/unholy/demon-fire-horned-mask.webp",
            label: "Daedra",
            plural: "Daedra"
        };
        //Add support for Birthsigns(sort of)
    CONFIG.DND5E.featureTypes.birthsign = {
        label: "Birthsign"
        };
    // Source books
    CONFIG.DND5E.sourceBooks.delveboundbasic = "Basic Rules";
    // Languages 
    CONFIG.DND5E.languages.standard = {
        label: "Common Languages",
        children: {
            altmer: "Altmeris",
            bosmer: "Bosmeri",
            dunmer: "Dunmeri",
            argonian: "Jel",
            nord: "Nordic",
            orc: "Orcish",
            khajiit: "Ta'agra",
            common: "Tamrielic/Cyrodillic",
            redguard: "Yoku"
            }
        };
    CONFIG.DND5E.languages.exotic = {
        label: "Rare Languages",
        children: {
            akavir: "Akaviri",
            elven: "Aldmeris",
            wildelf: "Ayleidoon",
            olddunmer: "Chimeris",
            daedra: "Daedric",
            dragon: "Dovahzul",
            reachtongue: "Dugutach",
            dwemer: "Dwemeris",
            etada: "Ehlnofex",
            falmer: "Falmeris",
            hist: "Hist",
            kothringi: "Kothir",
            oldnord: "Nedic",
            oldbreton: "Bretic",
            colovian: "Colovian",
            nibenean: "Nibenean",
            maormer: "Pyandonean",
            sload: "Sload",
            tsaesci: "Tsaesci"
            }
        };
    CONFIG.DND5E.languages.beast = {
        label: "Beast Languages",
        children: {
            centurian: "Centurian",
            faerie: "Faerie",
            giantish: "Giantish",
            goblin: "Goblin",
            harpy: "Harpy",
            imp: "Impish",
            nymph: "Nymph",
            spriggan: "Spriggan"
            }
        };
    //Spell Schools
    CONFIG.DND5E.spellSchools.alteration = {
        label: "Alteration",
        icon: "...",
        fullkey: "Alteration",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.conjuration = {
        label: "Conjuration",
        icon: "...",
        fullkey: "Conjuration",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.destruction = {
        label: "Destruction",
        icon: "...",
        fullkey: "Destruction",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.illusion = {
        label: "Illusion",
        icon: "...",
        fullkey: "Illusion",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.mysticism = {
        label: "Mysticism",
        icon: "...",
        fullkey: "Mysticism",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.necromancy = {
        label: "Necromancy",
        icon: "...",
        fullkey: "Necromancy",
        reference: ""
        };
    CONFIG.DND5E.spellSchools.restoration = {
        label: "Restoration",
        icon: "...",
        fullkey: "Restoration",
        reference: ""
        };
    //Weapon Proficiencies
    CONFIG.DND5E.weaponProficiencies.blunt = "Blunt Weapons";
    CONFIG.DND5E.weaponProficiencies.shortblade = "Short Blade Weapons";
    CONFIG.DND5E.weaponProficiencies.longblade = "Long Blade Weapons";
    CONFIG.DND5E.weaponProficiencies.marksman = "Marksman Weapons";
    CONFIG.DND5E.weaponProficiencies.axe = "Axe Weapons";
    CONFIG.DND5E.weaponProficiencies.pole = "Polearm Weapons";
    CONFIG.DND5E.weaponProficiencies.hand = "Hand to Hand Weapons";
    CONFIG.DND5E.weaponProficienciesMap.blunt = "blunt";
    CONFIG.DND5E.weaponProficienciesMap.shortblade = "shortblade";
    CONFIG.DND5E.weaponProficienciesMap.longblade = "longblade";
    CONFIG.DND5E.weaponProficienciesMap.marksman = "marksman";
    CONFIG.DND5E.weaponProficienciesMap.axe = "axe";
    CONFIG.DND5E.weaponProficienciesMap.pole = "pole";
    CONFIG.DND5E.weaponProficienciesMap.hand = "hand";
    CONFIG.DND5E.weaponTypes.blunt = "Blunt";
    CONFIG.DND5E.weaponTypes.shortblade = "Short Blade";
    CONFIG.DND5E.weaponTypes.longblade = "Long Blade";
    CONFIG.DND5E.weaponTypes.marksman = "Marksman";
    CONFIG.DND5E.weaponTypes.axe = "Axe";
    CONFIG.DND5E.weaponTypes.pole = "Polearm";
    CONFIG.DND5E.weaponTypes.hand = "Hand to Hand";
    //Weapon Types
    CONFIG.DND5E.weaponIds.awl = "Compendium.delvebound.delvebound-items.Item.FooIWfTbyURP9HqW";
    CONFIG.DND5E.weaponIds.battleaxe = "Compendium.delvebound.delvebound-items.Item.VI8okWudUgGxOMZC";
    CONFIG.DND5E.weaponIds.blowgun = "Compendium.delvebound.delvebound-items.Item.FIJg87OT9uwCfBCi";
    CONFIG.DND5E.weaponIds.bostaff = "Compendium.delvebound.delvebound-items.Item.7YMrayI4jA9WxPEW";
    CONFIG.DND5E.weaponIds.bola = "Compendium.delvebound.delvebound-items.Item.DmMZOyMdd084WE7R";
    CONFIG.DND5E.weaponIds.broadsword = "Compendium.delvebound.delvebound-items.Item.kmTmF2XoucwjvmUB";
    CONFIG.DND5E.weaponIds.chakram = "Compendium.delvebound.delvebound-items.Item.WwMbNdFJwT8W6YjO";
    CONFIG.DND5E.weaponIds.claws = "Compendium.delvebound.delvebound-items.Item.rWxINPIT2TtHC7fq";
    CONFIG.DND5E.weaponIds.claymore = "Compendium.delvebound.delvebound-items.Item.qnHl4l6ytl2lCUXF";
    CONFIG.DND5E.weaponIds.club = "Compendium.delvebound.delvebound-items.Item.o27WW45enN5Z9uxn";
    CONFIG.DND5E.weaponIds.cutlass = "Compendium.delvebound.delvebound-items.Item.9jrv01V4InzCjzxb";
    CONFIG.DND5E.weaponIds.dagger = "Compendium.delvebound.delvebound-items.Item.veOcQP0zDOmamml7";
    CONFIG.DND5E.weaponIds.daikatana = "Compendium.delvebound.delvebound-items.Item.AX5Z5X5ivQtzH2b6";
    CONFIG.DND5E.weaponIds.dart = "Compendium.delvebound.delvebound-items.Item.CkShP9igVvnGt48q";
    CONFIG.DND5E.weaponIds.flail = "Compendium.delvebound.delvebound-items.Item.vk8lOEV0pVCgNivH";
    CONFIG.DND5E.weaponIds.glaive = "Compendium.delvebound.delvebound-items.Item.cw2b57OFsSeDVdbX";
    CONFIG.DND5E.weaponIds.greataxe = "Compendium.delvebound.delvebound-items.Item.IpeF9D5eJ7aQo0dZ";
    CONFIG.DND5E.weaponIds.greatclub = "Compendium.delvebound.delvebound-items.Item.yjdqcDMBuK2Z4nuA";
    CONFIG.DND5E.weaponIds.greatsword = "Compendium.delvebound.delvebound-items.Item.3mFStSKilPe7SGzI";
    CONFIG.DND5E.weaponIds.halberd = "Compendium.delvebound.delvebound-items.Item.5TRIr0bBQq5a2U2A";
    CONFIG.DND5E.weaponIds.handcrossbow = "Compendium.delvebound.delvebound-items.Item.vICebrkW7RrLpCjx";
    CONFIG.DND5E.weaponIds.handaxe = "Compendium.delvebound.delvebound-items.Item.KQgIBEXLj6IpWJ3z";
    CONFIG.DND5E.weaponIds.heavycrossbow = "Compendium.delvebound.delvebound-items.Item.NmLSyDXFWXdA7jWB";
    CONFIG.DND5E.weaponIds.javelin = "Compendium.delvebound.delvebound-items.Item.JokuB9lrn2UDWyPi";
    CONFIG.DND5E.weaponIds.kanabo = "Compendium.delvebound.delvebound-items.Item.5umSZV5lx1yT5WkI";
    CONFIG.DND5E.weaponIds.katana = "Compendium.delvebound.delvebound-items.Item.xzXi5Z47ndVUXN80";
    CONFIG.DND5E.weaponIds.katar = "Compendium.delvebound.delvebound-items.Item.NzZVydYUfMlfiupb";
    CONFIG.DND5E.weaponIds.knuckles = "Compendium.delvebound.delvebound-items.Item.xJNZuSk7aNp09Pft";
    CONFIG.DND5E.weaponIds.lance = "Compendium.delvebound.delvebound-items.Item.INSS28DMvvgAMaOH";
    CONFIG.DND5E.weaponIds.lightcrossbow = "Compendium.delvebound.delvebound-items.Item.QaHftGCLtuqkHEUD";
    CONFIG.DND5E.weaponIds.lighthammer = "Compendium.delvebound.delvebound-items.Item.V2b6nRj4WxI1s3Jv";
    CONFIG.DND5E.weaponIds.longbow = "Compendium.delvebound.delvebound-items.Item.4Vbaq89JPfW39OMe";
    CONFIG.DND5E.weaponIds.longsword = "Compendium.delvebound.delvebound-items.Item.4Bjdw3lbWJrOyF2M";
    CONFIG.DND5E.weaponIds.mace = "Compendium.delvebound.delvebound-items.Item.SLTorPgELlaOEMhC";
    CONFIG.DND5E.weaponIds.maul = "Compendium.delvebound.delvebound-items.Item.Y7YxXxeuKe1SeG9D";
    CONFIG.DND5E.weaponIds.morningstar = "Compendium.delvebound.delvebound-items.Item.2oD0mrRIjNtBKAFr";
    CONFIG.DND5E.weaponIds.naginata = "Compendium.delvebound.delvebound-items.Item.UI0npItCHGTkz3GG";
    CONFIG.DND5E.weaponIds.net = "Compendium.delvebound.delvebound-items.Item.kYL6UYNWAF1TuBsi";
    CONFIG.DND5E.weaponIds.nunchaku = "Compendium.delvebound.delvebound-items.Item.w4PsF1VO7wpnyezy";
    CONFIG.DND5E.weaponIds.pickaxe = "Compendium.delvebound.delvebound-items.Item.RHfNY9AfUKiDG2OB";
    CONFIG.DND5E.weaponIds.pike = "Compendium.delvebound.delvebound-items.Item.ClXsM0XzeOQeCzqa";
    CONFIG.DND5E.weaponIds.poleaxe = "Compendium.delvebound.delvebound-items.Item.VEXJc1RMGli0BPtt";
    CONFIG.DND5E.weaponIds.quarterstaff = "Compendium.delvebound.delvebound-items.Item.8OHfhb9ECAJXaBvh";
    CONFIG.DND5E.weaponIds.rapier = "Compendium.delvebound.delvebound-items.Item.nqEilLf5bGDS4tjX";
    CONFIG.DND5E.weaponIds.sabre = "Compendium.delvebound.delvebound-items.Item.ksbhqf1YmuuNIgdN";
    CONFIG.DND5E.weaponIds.scimitar = "Compendium.delvebound.delvebound-items.Item.fOQ9Tr3E2Om5QoF4";
    CONFIG.DND5E.weaponIds.shortbow = "Compendium.delvebound.delvebound-items.Item.jWHHPNcA8MZLaUan";
    CONFIG.DND5E.weaponIds.shortsword = "Compendium.delvebound.delvebound-items.Item.4LHPL1AYnVcEqzbz";
    CONFIG.DND5E.weaponIds.sickle = "Compendium.delvebound.delvebound-items.Item.KQXeuIRbIgayOaAu";
    CONFIG.DND5E.weaponIds.sling = "Compendium.delvebound.delvebound-items.Item.ojjLVFyPD9AcvIx3";
    CONFIG.DND5E.weaponIds.spear = "Compendium.delvebound.delvebound-items.Item.oY8jIHkay7HpVXBu";
    CONFIG.DND5E.weaponIds.tanto = "Compendium.delvebound.delvebound-items.Item.1aBySduknv5OVqy4";
    CONFIG.DND5E.weaponIds.tetsubo = "Compendium.delvebound.delvebound-items.Item.2XF3kkw3gSga1tEp";
    CONFIG.DND5E.weaponIds.throwingstar = "Compendium.delvebound.delvebound-items.Item.4E0fgIgwug2ZdH4B";
    CONFIG.DND5E.weaponIds.trident = "Compendium.delvebound.delvebound-items.Item.hEtDfzGqDs48Ft2W";
    CONFIG.DND5E.weaponIds.wakizashi = "Compendium.delvebound.delvebound-items.Item.DlczD3xkT12nbuS1";
    CONFIG.DND5E.weaponIds.waraxe = "Compendium.delvebound.delvebound-items.Item.IGJOMCx2i5vUEp47";
    CONFIG.DND5E.weaponIds.warpick = "Compendium.delvebound.delvebound-items.Item.VC9ecdbZUQMb3YEn";
    CONFIG.DND5E.weaponIds.warhammer = "Compendium.delvebound.delvebound-items.Item.2IRXuzpP6UOC1Izn";
    CONFIG.DND5E.weaponIds.warmace = "Compendium.delvebound.delvebound-items.Item.ykr3xsFv431GQnsG";
    CONFIG.DND5E.weaponIds.whip = "Compendium.delvebound.delvebound-items.Item.10b1aJ5yJEt0JzK4";
    //Ammo
    CONFIG.DND5E.ammoIds.arrow = "Compendium.delvebound.delvebound-items.Item.5t4PjTU6HSJCIguk";
    CONFIG.DND5E.ammoIds.blowgunNeedle = "Compendium.delvebound.delvebound-items.Item.lMhfLeAG4cC7FleA";
    CONFIG.DND5E.ammoIds.crossbowBolt = "Compendium.delvebound.delvebound-items.Item.wzvj03UiBWaOQBpU";
    CONFIG.DND5E.ammoIds.slingBullet = "Compendium.delvebound.delvebound-items.Item.oSvDJVyvttGGtI9y";
    //Birthsign support
    CONFIG.DND5E.featureTypes.birthSign = {
          label: "Birthsign Feature"
          };
    CONFIG.DND5E.defaultArtwork.Item.birthSign = "systems/dnd5e/icons/svg/items/feature.svg";
    //Compendium Remap
    CONFIG.DND5E.sourcePacks.ITEMS = "delvebound.delvebound-items";
    //translation?
    });
