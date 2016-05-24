// $.getScript("a.js", function() {// On Ready
  $(function() {
    var hero;
    var villain;

    $("#createHero").click(function() {
      hero = new Hero().initHeroClass();
      $("#heroText").html(hero.toString());
      $("#heroText").toggleClass("hidden");

      var heroDesign = createRandomHero(hero.getHeroName());
      $("#heroContainer").append(heroDesign);

      $(this).toggleClass("hidden");
      $("#createVillain").toggleClass("hidden");
    });

    $("#createVillain").click(function() {
      villain = new Hero().initHeroClass();
      $("#villainText").html(villain.toString());
      $("#villainText").toggleClass("hidden");

      var heroDesign = createRandomHero(villain.getHeroName());
      $("#villainContainer").append(heroDesign);

      $(this).toggleClass("hidden");
      $("#fight").toggleClass("hidden");
      $("#fightTextTitle").toggleClass("hidden");
    });

    $("#fight").click(function() {
      var damageResult = villain.takeDamage(hero.physicalAttack());
      $("#fightText").append("<text>Health Remaining: " + damageResult['healthLeft'] + "</text>");
      if (damageResult['dead']) {
        $(this).toggleClass('hidden');
        $("#youWin").toggleClass('hidden');
        $("#tryAgain").toggleClass('hidden');
      }
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

  var heroClasses = ["vigilante", "sidekick", "hero", "superHero", "legend", "god", "dimensionalBeing"];
  var getHeroClass = function() {
    return heroClasses[getRandIntInBounds(heroClasses.length)];
  };

  // Util functions
  var getRandIntInBounds = function(length) {
    return chance.integer({min: 0, max: length - 1});
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

      this.getCombat = function() {
        return this.combat;
      };

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
        that.name = chance.name();
        that.heroName = createRandomHeroName();
        that.race = getRace();
        that.country = chance.country({ full: true });
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
        var isDead = this.stats.takeDamage(attackMap);
        return { healthLeft: this.stats.getHealth(),
                 dead: isDead
        };
      };

      this.getHeroName = function() {
        return this.heroName;
      };

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
