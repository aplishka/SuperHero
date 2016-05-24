// Global Variables
var HEAD = $("head");
var STYLE = document.createElement("style");
STYLE.id = "heroStylesheet";
STYLE.type = "text/css";

var getColorFromInput = function(id, defaultColor) {
  var color = $(id)[0].value;
  return color ? color : defaultColor;
};

var getHslColor = function(intValue, lightnessVariant) {
  var lightness = 50 + (lightnessVariant ? lightnessVariant : 0);
  return "hsl(" + intValue + ", 100%, " + lightness + "%)";
};

var createRandomHero = function(heroName) {
  var hero = createHero(heroName);
  HEAD.append(STYLE);

  return hero;
};

var createHero = function(heroName) {
  var heroMainColor = getColorFromInput("#heroMainColor", chance.integer({min: 0, max: 360}));
  var heroSecondaryColor = getColorFromInput("#heroSecondaryColor", chance.integer({min: 0, max: 360}));
  var heroTertiaryColor = getColorFromInput("#heroTertiaryColor", chance.integer({min: 0, max: 360}));
    
    // Create Hero
  var hero = createHeroElement(heroName);
  var helmet = createHelmet(hero, getHslColor(heroMainColor));
  createMaskForHelmet(hero, helmet, getHslColor(heroSecondaryColor));
  createArms(hero, getHslColor(heroMainColor), getHslColor(heroSecondaryColor));
  var body = createMediumBody(hero, heroMainColor);
  createPowerUnitForBody(hero, body, getHslColor(heroSecondaryColor));
  createLegs(hero, getHslColor(heroSecondaryColor), getHslColor(heroSecondaryColor), getHslColor(heroMainColor));

  return hero;
};

var replaceAll = function(string, search, replace) {
  return string.split(search).join(replace);
};

var createHeroElement = function(heroName) {
  var heroId = "hero_" + replaceAll(heroName, " ", "");
  var heroDivCss = "#" + heroId + " {  position: absolute; z-index: 900; margin-left: 200; margin-bottom:135px; bottom:0; }";
  addCssToStyleSheet(heroDivCss);

  var hero = $( "<div/>", {
    id: heroId
  });

  return hero;
};

var createHelmet = function(hero, color) {
  var heroHelmetCss = "#" + hero[0].id + " .helmet { width: 22px; height: 34px; background: " + color + "; position: absolute; margin-top: -33px; margin-left: 44px; border-top-left-radius: 10px; border-top-right-radius: 10px; overflow: hidden; }";
  var eyesCss = "#" + hero[0].id + " .helmet::before { content:''; width:7px; height:2px; background:white; position:absolute; margin-top:10px; margin-left:0px; z-index:3;  box-shadow:15px 0 0 0 white; }";

  addCssToStyleSheet(heroHelmetCss);
  addCssToStyleSheet(eyesCss);

    var helmet = $("<div/>", {
      "class": "helmet"
    })
    .appendTo(hero);

    return helmet;
};

var createMaskForHelmet = function(hero, helmet, color) {
  var heroMaskCss = "#" + hero[0].id + " .mask { width:10px; height:18px; background: " + color + "; position:relative; margin-top:7px; margin-left:6px; }";
  var heroMaskBeforeCss = "#" + hero[0].id + " .mask::before { content:''; width:13px; height:18px; background: " + color + "; position:absolute; transform:rotate(60deg); margin-top:-3px; margin-left:4px; }";
  var heroMaskAfterCss = "#" + hero[0].id + " .mask::after { content:''; width:13px; height:18px; background: " + color + "; position:absolute; transform:rotate(-60deg); margin-top:-3px; margin-left:-5px; }";  

  addCssToStyleSheet(heroMaskCss);
  addCssToStyleSheet(heroMaskBeforeCss);
  addCssToStyleSheet(heroMaskAfterCss);

    $("<div/>", {
      "class": "mask"
    })
    .appendTo(helmet);
};

var createMediumBody = function(hero, colorInt) {
  var color = getHslColor(colorInt);
  var color5darker = getHslColor(colorInt, -5);
  var color3darker = getHslColor(colorInt, -3);

  var chestCss = "#" + hero[0].id + " .body { height: 53px; width: 107px;  border-radius: 0 0 110px 110px; background: " + color + "; box-shadow: inset 10px 0px 0 0 " + color5darker + ", inset 20px 0px 0 0 " + color3darker + "; /*box-shadow: inset 10px 0px 0 0 darken(#ab3300,5%), inset 20px 0px 0 0 darken(#ab3300,3%); */padding-top:11px; z-index:50; }";
  var shoulderCss = "#" + hero[0].id + " .body::before { content:''; width:32px; height:32px; background: " + color5darker + "; /*background: darken(#ab3300,5%);*/ position:absolute; border-radius:50%; margin-left:-15px;  margin-top:-18px; box-shadow:105px 0 0 0 " + color + "; z-index:50; }";
  var stomachCss = "#" + hero[0].id + " .body::after { content:''; width:40px; height:30px; position:absolute; margin-top:20px; margin-left:35px; background-image: linear-gradient( to right, " + color5darker + ", 5%, " + color5darker + " 15%, " + color3darker + " 15%, " + color3darker + " 29%, " + color + " 20%, " + color + " 20% ); }";

  addCssToStyleSheet(chestCss);
  addCssToStyleSheet(shoulderCss);
  addCssToStyleSheet(stomachCss);

    var body = $("<div/>", {
      "class": "body"
    })
    .appendTo(hero);
  
  return body;
};

var createPowerUnitForBody = function(hero, body, color) {
  var powerUnitCss = "#" + hero[0].id + " .powerUnit { width:17px; height:17px; background:white; border-radius:50%; margin:0 auto; box-shadow:0 0 0 5px " + color + "; }";
  addCssToStyleSheet(powerUnitCss);

    $("<div/>", {
      "class": "powerUnit"
    })
    .appendTo(body);
};

var createArms = function(hero, mainColor, secondaryColor) {
  var leftArmCss = "#" + hero[0].id + " .leftArm{ width:10px; height:45px; background: " + secondaryColor + "; position:absolute; margin-left:-6px; margin-top:18px; border-bottom-left-radius:20px; }";
  var leftGloveCss = "#" + hero[0].id + " .leftArm::before { content:''; height: 60px; width: 31px; border-radius: 60px 0px 0px 60px; background: " + mainColor + "; /*background: darken(#ab3300,5%);*/ position:absolute; margin-top:30px; margin-left:-21px; z-index:-1; }";
  var leftHandCss = "#" + hero[0].id + " .leftArm::after { content:''; width:10px; height:10px; border-radius:50%; background: " + mainColor + "; /*background: darken(#ab3300,5%);*/ position:absolute; margin-top:80px; margin-left:5px; }";
  var rightArmCss = "#" + hero[0].id + " .rightArm{ width:10px; height:45px; background: " + secondaryColor + "; position:absolute; margin-left:105px; margin-top:18px; border-bottom-right-radius:20px; }";
  var rightGloveCss = "#" + hero[0].id + " .rightArm::before { content:''; height: 60px; width: 31px; border-radius: 0px 60px 60px 0px; background: " + mainColor + "; /*background: darken(#ab3300,5%);*/ position:absolute; margin-top:30px; margin-left:0px; z-index:-1; }";
  var rightHandCss = "#" + hero[0].id + " .rightArm::after { content:''; width:10px; height:10px; border-radius:50%; background: " + mainColor + "; /*background: darken(#ab3300,5%);*/ position:absolute; margin-top:80px; margin-left:-5px; }";

  addCssToStyleSheet(leftArmCss);
  addCssToStyleSheet(leftGloveCss);
  addCssToStyleSheet(leftHandCss);
  addCssToStyleSheet(rightArmCss);
  addCssToStyleSheet(rightGloveCss);
  addCssToStyleSheet(rightHandCss);

    $("<div/>", {
      "class": "rightArm"
    })
    .appendTo(hero);

    $("<div/>", {
      "class": "leftArm"
    })
    .appendTo(hero);
};

var createLegs = function(hero, leftLegColor, rightLegColor, bootColor) {
  var leftLegCss = "#" + hero[0].id + " .leftLeg { width:10px; height:90px; background: " + leftLegColor + ";  position:absolute; margin-left:35px; margin-top:12px; border-top-right-radius:10px; }";
  var leftBootCss = "#" + hero[0].id + " .leftLeg::before { content:''; width:25px; height:65px; background: " + bootColor + "; /*background: darken(#ab3300,5%); */position:absolute; border-top-right-radius:20px; margin-top:60px; margin-left:-10px; }";
  var rightLegCss = "#" + hero[0].id + " .rightLeg { width:10px; height:90px; background: " + rightLegColor + ";  position:absolute; margin-left:65px; margin-top:12px; border-top-left-radius:10px; }";
  var rightBootCss = "#" + hero[0].id + " .rightLeg::before { content:''; width:25px; height:65px; background: " + bootColor + "; /*background: darken(#ab3300,5%); */position:absolute; border-top-left-radius:20px; margin-top:60px; margin-left:-5px; }";

  addCssToStyleSheet(leftLegCss);
  addCssToStyleSheet(leftBootCss);
  addCssToStyleSheet(rightLegCss);
  addCssToStyleSheet(rightBootCss);

    $("<div/>", {
      "class": "leftLeg"
    })
    .appendTo(hero);

    $("<div/>", {
      "class": "rightLeg"
    })
    .appendTo(hero);
};

var addCssToStyleSheet = function(css) {
  if (STYLE.styleSheet){
    STYLE.styleSheet.cssText = css;
  } else {
    STYLE.appendChild(document.createTextNode(css));
  }
};
