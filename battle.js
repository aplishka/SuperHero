"use strict";

$.keyframe.debug = true;
$.keyframe.define([{
  name: "rightArmAttack",
  "0%": {
    "transform": "inherit",
    "margin-top": "18px",
    "margin-left": "105px"
  },
  "50%": {
    transform: "rotate(-90deg)",
    "margin-top": "-10px",
    "margin-left": "135px"
  },
  "100%": {
    transform: "rotate(0deg)",
    "margin-top": "18px",
    "margin-left": "105px"
  }
}]);

var playAnimation = function(id, animation, length) {
  $(id).playKeyframe({
    name: animation,
    duration: length,
    complete: function() { $(id).resetKeyframe(); }
  });
};

var attack = function(attacker, attackee) {
  return physicalAttack(attacker, attackee, (attacker.getDivName() + " .rightArm"), "rightArmAttack", "2s");
};

var physicalAttack = function(attacker, attackee, id, animation) {
  var isDead = false;
  $.when(playAnimation(id, animation, "2s"))
   .done(function() {
      var damageResult = attackee.takeDamage(attacker.physicalAttack());
      $("#fightText").append("<text>" + attackee.getHeroName() + " Health Remaining: " + damageResult['healthLeft'] + "</text>");
      if (damageResult['dead']) {
        isDead = true;
      }
  });

  return isDead;
};
