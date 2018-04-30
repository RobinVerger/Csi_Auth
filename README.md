# CsiFront

@Auteur Robin:
A l'attention des formateurs.

Vous trouverez la base de donnee necessaire a l'utilisation du projet dans le dossier '/src/assets/' sous le nom de fil_rouge_2
.sql. Copiez ce fichier sur votre bureau.
Cette base de donne n'est pas la meme que celle utilisee par mon equipe.

Pour installer la base de donnee, ouvrez votre console Mysql et entrez: 

1.  => 'CREATE DATABASE fil_rouge_2'
2.  => 'USE fil_rouge_2'
3.  => source 'EMPLACEMENT DU FICHIER fil_rouge_2.sql' (pour plus de simplicite, drag and drop le fichier depuis votre bureau)


## Utilisation

Dans votre fenetre de commande, naviguez jusqu'au dossier csiFront. Depuis ce dossier vous pouvez :

1. `ng serve` pour lancer le projet front sous le localhost:4200
2. `ng build` pour construire le projet, le projet sera stocke dans le dossier 'dist/'
3. `ng test` pour lancer les test unitaires. Veuillez noter que seul le fichier a un test redigé 'ApiService.service.ts', tous les autres fichiers seront evalue comme etant faux. 

________________________________________________________________________________________________________________________
@Author Robin

- this repository contains the front-end part of the project, as said in the https://github.com/jipaow/CSI-Back detail cards, create and update forms are based on https://github.com/jipaow/suspectFront first draft but mainly optimized and refactored by Kayetan.
- for more details about project conception please refer to https://github.com/jipaow/CSI-Back read me (in french language).
