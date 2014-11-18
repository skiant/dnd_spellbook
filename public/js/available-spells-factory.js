angular.module('spellbook')
.factory('spellBookDB', [function(){
  var spells = {};

  spells[1] = [
    'Analyse de l\'équilibre',
    'Bénédiction',
    'Création d\'eau',
    'Détection de la magie',
    'Détection du mal',
    'Détection du poison',
    'Endurance Chaud/Froid',
    'Gardien sacré',
    'Gourdin Magique',
    'Injonction',
    'Lumière / Ténèbre',
    'Protection contre le mal',
    'Sanctuaire',
    'Sentinelle de Helm',
    'Soins légers'
  ]

  spells[2] = [
    'Altération du temps',
    'Augure',
    'Calmer les esprits',
    'Cantique',
    'Connaissance de l\'alignement / Alignement indétectable',
    'Création de symbole sacré',
    'Diable de poussière',
    'Discours captivant',
    'Détection des charmes',
    'Détection des pièges',
    'Flamme',
    'Immobilisation de personnes',
    'Lame enflamée',
    'Language des animaux',
    'Marteau Spirituel',
    'Métal brûlant',
    'Peau d\'écorce',
    'Piège de feu',
    'Ralentissement du poison',
    'Résistance au feu',
    'Sanctification',
    'Silence',
    'Wyverne de garde'
  ]

  return spells;
}])
