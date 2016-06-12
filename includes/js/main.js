// $.getScript("a.js", function() {// On Ready
  $(function() {
    var hero;
    var villain;

    $("#createHero").click(function() {
      hero = new Hero().initHeroClass();
      writeHeroInfoToCard("#heroInfoColumn", hero);
      $("#heroText").toggleClass("hidden");

      var heroDesign = createRandomHero(hero.getName(), hero.getHeroName());
      $("#heroContainer").append(heroDesign);

      $("#createContainer").toggleClass("hidden");
      createRandomPawn();
    });

    var writeStatsInfoToCard = function(cardId, stats) {
      var id = cardId + " .statsInfo";
      $(".health", $(cardId)).val(stats.getHealth()).attr("max", stats.getHealth());
      $(".strength", $(cardId)).val(stats.getStrength());
      $(".intelligence", $(cardId)).val(stats.getIntelligence());
      $(".speed", $(cardId)).val(stats.getSpeed());
      $(".combat", $(cardId)).val(stats.getCombat());
      $(".durability", $(cardId)).val(stats.getDurability());
      $(".power", $(cardId)).val(stats.getPower());
    };

    var writeHeroInfoToCard = function(cardId, hero) {
      var id = cardId + " .info";
      $("#name", $(id)).text(hero.getHeroName());
      $("#secretIdentity", $(id)).text(hero.getName());
      $("#sex", $(id)).text(hero.getSex());
      $("#race", $(id)).text(hero.getRace());
      $("#nationality", $(id)).text(hero.getCountry());
      $("#class", $(id)).text(hero.getHeroClass());

      writeStatsInfoToCard(cardId, hero.getStats());
    };

    var createRandomPawn = function() {
      villain = new Hero().initHeroClass().setHeroName("Grunt");
      writeHeroInfoToCard("#villainInfoColumn", villain);
      $("#villainText").toggleClass("hidden");

      var heroDesign = createPawn(villain.getName(), villain.getHeroName());
      $("#villainContainer").append(heroDesign);
    };

    var someoneDied = function(closingStatement) {
      $(closingStatement).toggleClass('hidden');
    };

    var attackPromise = function(attacker, attackee, closingStatement) {
      var isDead = attack(attacker, attackee);
        if(isDead) {
          someoneDied(closingStatement);
        }
      return isDead;
    };

    var updateHeroExperienceOnScreen = function(xpGained) {
      var xp = $("#heroInfoColumn .experience").val();
      $("#heroInfoColumn .experience").val(xp + xpGained);
    };

    var updateHeroHealthOnScreen = function() {
      $("#heroInfoColumn .health").val(hero.getStats().getHealth());
    };

    var updateVillainHealthOnScreen = function() {
      $("#villainInfoColumn .health").val(villain.getStats().getHealth());
    };

    var heroAttackPromise = function() {
      var promise = attackPromise(hero, villain, "#youWin");
      updateVillainHealthOnScreen();
      if(promise) {
        updateHeroExperienceOnScreen(1);
      }
      return promise;
    };

    var villainAttackPromise = function() {
      var promise = attackPromise(villain, hero, "#youLose");
      updateHeroHealthOnScreen();
      return promise;
    };

    $("#attack").click(function() {
      $.when(heroAttackPromise())
       .then(villainAttackPromise);
    });

    $("#tryAgain").click(function() {
      $("#heroText").toggleClass("hidden");
      $("#villainText").toggleClass("hidden");

      $("#fightTextTitle").toggleClass("hidden");
      $("#fightText text").remove();

      $("#createHero").toggleClass("hidden");

      $("#youWin").toggleClass('hidden');
      $("#tryAgain").toggleClass('hidden');
    });
  });

  // Game Stuff
  var importantEvents = [];

  var standardHeros = { /*Commander_Liberty : new Hero().initHeroClass("superHero")*/ };
  var standardVillians = { /*Retrograde : new Hero().initHeroClass("hero")*/ };

  // Hero generation Stuff
  var heroOriginStories = [];
  var villianOriginStories = [];

  var originStories = [];

  var powerClassQuotient = { vigilante: 0, sidekick: 1, hero: 2, superHero: 3, legend: 4, god: 5, dimensionalBeing: 6 };
  var powersByClasses = { vigilante: [],
                sidekick: [],
                hero: [],
                superHero: [],
                legend: [],
                god: [],
                dimensionalBeing: []
  };

  /* Got this list from here: https://en.m.wikipedia.org/wiki/List_of_superhuman_features_and_abilities_in_fiction */
  var powers = { powerInteraction:  ["powerAugmentation", "powerBestowal", "powerMimicry", "powerAbsorption", "powerNegation", "powerSensing"],
           physical:      ["acidGeneration", "animalMimicry", "biologicalManipulation", "bodyPartSubstitution", "boneManipulation", "physicalDuplication", "temporalDuplication",
                         "echolocation", "firebreathing", "healing", "invisibility", "invulnerability", "kineticAbsorption", "longevity", "matterIngestion", "merging", "pheromoneManipulation",
                         "poisonGeneration", "prehensileHair", "reactiveEvolution", "selfDetonation", "sonicScream", "vortexBreath", "superhumanDurability", "superhumanAgility", "superhumanSenses",
                         "superhumanStrength", "wallcrawling", "waterbreathing"],
           vision:        ["nightVision", "xrayVision", "heatVision", "telescopicVision", "freezeVision"],
           mental:        ["ecologicalEmpathy", "innateCapability", "omniLinguism", "omniScience", "superhumanIntelligence", "superhumanTracking"],
           psychic:       ["astralProjection", "crossDimensionalAwareness", "empathy", "spiritualMediumship", "precognition", "psychometry", "telepathy", "technopathy"],
           domination:      ["astralTrapping", "memoryManipulation", "mindControl", "possession", "psionicBlast", "psychicWeapons"],
           realityManipulation: ["animation", "darknessManipulation", "densityControl", "disintegration", "elementalTransmutation", "gravityManipulation", "immortality", "phasing", "lightManipulation",
                       "magnetismManipulation", "massManipulation", "microwaveManipulation", "molecularManipulation", "probabilityManipulation", "radiationManipulation", "realityWarping",
                       "resurrection", "soundManipulation", "timeManipulation"],
           elemental:       ["airManipulation", "animalControl", "iceManipulation", "earthManipulation", "electricManipulation", "fireManipulation", "plantManipulation", "waterManipulation", "stormManipulation"],
           energyManipulation:  ["concussionBeams", "energyBlasts", "energyConstructs", "energyConversion", "forceFieldGeneration"],
           transportation:    ["electricalTransportation", "omnipresence", "dimensionalTravel", "portalCreation", "summoning", "superhumanSpeed", "teleportation", "timeTravel"],
           flight:        ["gliding", "cosmicEnergyControl", "energyAuraProjection", "gravitationalManipulation", "magneticLevitation", "sonicRepulsionField", "telekineticPower", "thermoChemicalEnergy",
                       "windCurrentControl", "wings"],
           illusion:      ["mentalIllusion", "physicalIllusion"],
           shapeshifting:     ["animalMorphing", "elasticity", "inorganic", "liquification", "metamorphosis", "sizeShifting", "sublimation", "substanceMimicry"]
  };

  var races = ["human", "alien", "animal", "synthetic", "subHuman"];
  var getRace = function() {
    return races[getRandIntInBounds(races.length)];
  };

  var heroClassesWeightedChances = [250000, 100000, 10000, 1000, 100, 10, 1];
  var heroClasses = ["vigilante", "sidekick", "hero", "superHero", "legend", "god", "dimensionalBeing"];
  var getHeroClass = function() {
    return chance.weighted(heroClasses, heroClassesWeightedChances);
  };

  // Util functions
  var getRandIntInBounds = function(length) {
    return chance.integer({min: 0, max: length - 1});
  };

  var getSexOfNewHero = function() {
    return chance.weighted(["male", "female", "transgender"], [101, 100, 0.3]);
  };

  // Our main classes
  var Stats = function() {
      var health;
      var strength;
      var intelligence;
      var speed;
      var combat;
      var durability;
      var power;

      // Constructor
      var __construct = function(that) {
        that.health = 0;
        that.strength = 1;
        that.intelligence = 0;
        that.speed = 0;
        that.combat = 0;
        that.durability = 0;
        that.power = 0;
      }(this);

      this.initStats = function(quotient) {
        this.health       = 10 * Math.pow(2, quotient);
        this.strength     = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        this.intelligence = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        this.speed        = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        this.combat       = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        this.durability   = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        this.power        = chance.integer({min: 1, max: 3}) * Math.pow(2, quotient);
        return this;
      };

      // Getters
      this.getHealth = function() {
        return this.health;
      };

      this.getStrength = function() {
        return this.strength;
      };

      this.getIntelligence = function() {
        return this.intelligence;
      };

      this.getSpeed = function() {
        return this.speed;
      };

      this.getCombat = function() {
        return this.combat;
      };

      this.getDurability = function() {
        return this.durability;
      };

      this.getPower = function() {
        return this.power;
      };

      // Useful functions
      this.takeDamage = function(attackMap) {
        var damage = attackMap['combat'] + attackMap['strength'];
        this.health -= damage;
        return this.checkIfDead();
      };

      this.checkIfDead = function() {
        return parseInt(this.health) <= 0;
      };

      this.heal = function(amount) {
        this.health += amount;
      };

      this.toString = function() {
          return "Health: " + this.health +
               ", Strength: " + this.strength +
               ", Intelligence: " + this.intelligence +
               ", Speed: " + this.speed +
               ", Combat: " + this.combat +
               ", Durability: " + this.durability +
               ", Power: " + this.power;
      };
  };

  var Hero = function() {
      var sex;
      var name;
      var heroName;
      var race;
      var country;
      var heroClass;
      this.stats;

      var sidekicks = [];
      var nemeses = [];
      var partners = [];
      var teams = [];

      var experienceEarned = 0;

      // Constructor
      var __construct = function(that) {
        that.sex = getSexOfNewHero();
        that.name = chance.name({ gender: (that.sex === "transgender" ? chance.gender() : that.sex)});
        that.heroName = createRandomHeroName();
        that.race = getRace();
        that.country = getCountryByChanceByPopulation();
      }(this);

      this.initHeroClass = function() {
        return this.initHeroClass(getHeroClass());
      };

      this.initHeroClass = function(heroClass) {
        this.heroClass = heroClass ? heroClass : getHeroClass();
        this.stats = new Stats().initStats(powerClassQuotient[this.heroClass]);
        return this;
      };

      this.addSidekick = function() {
        this.sidekicks.add(new Hero().initHeroClass("sidekick"));
      };

      // Fighting Functions
      this.physicalAttack = function() {
        return { strength: this.stats.getStrength(),
                 combat:   this.stats.getCombat()
        };
      };

      this.takeDamage = function(attackMap) {
        var initialHealth = this.stats.getHealth();

        var isDead = this.stats.takeDamage(attackMap);
        var healthLeft = this.stats.getHealth();
        
        return { damageDone: initialHealth - healthLeft,
                 healthLeft: healthLeft,
                 dead: isDead
        };
      };

      this.getDivName = function() {
        return "#hero_" + replaceAll(this.name, " ", "") + "_" + replaceAll(this.heroName, " ", "");
      };

      // Getters
      this.getHeroName = function() {
        return this.heroName;
      };

      this.getSex = function() {
        return this.sex;
      };

      this.getName = function() {
        return this.name;
      };

      this.getRace = function() {
        return this.race;
      };

      this.getCountry = function() {
        return this.country;
      };

      this.getHeroClass = function() {
        return this.heroClass;
      };

      this.getStats = function() {
        return this.stats;
      };

      // Setters
      this.setHeroName = function(name) {
        this.heroName = name;
        return this;
      };

      // Class functions
      this.toString = function() {
          return "Name: " + this.name +
               ", Hero Name: " + this.heroName +
               ", Race: " + this.race +
               ", Country: " + this.country +
               ", Class: " + this.heroClass +
               ", Stats: {" + this.stats.toString() + "}";
      };
  };
// });
