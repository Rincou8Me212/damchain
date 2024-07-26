# Damchain

Concept du jeu : DameChain est un jeu qui se joue simultanément, c'est à dire que les deux joueurs ne jouent pas chacun leur tour, mais prévoient en même temps leurs apparitions ou déplacements.
Ainsi les appartions ou le déplacement planifiés par les deux joueurs sont compilés à la fin de chaque tour.
- Objectif : avoir au moins 21 pions, ou éliminer tous les pions adverses.
Le jeu se déroule en deux phases : apparitions et déplacements

- ✨A pparitions ✨

On peut faire apparaître un pion pour chaque pion libre sur le jeu. (Un pion est libre s'il ne touche aucun pion adverse et si au moins une case autour de lui est vide).
On peut faire apparaître jusqu'à 3 pions, à placer n'importe où sur le plateau.
Si 2 pions apparaissent sur la même case :
Si les 2 joueurs ont le même nombre de pions (avant les apparitions) alors les pions se suppriment.
Dans le cas contraire le joueur qui a le moins de pions est prioritaire : son pion reste sur la case.

## Changement de phases

On passe à la phase déplacement à chaque fois que l'un des adversaires n'a plus de pions libre.
On revient à la phase apparitions dès que les 2 joueurs ont chacun au moins un pion libre.

## Déplacements

En phase déplacement, les 2 joueurs déplacent simultanément leur pion dans n'importe quelle direction et d'une seule case seulement (diagonales comprises).
On élimine un pion adverse en se déplacant sur sa case, si notre chaine est supérieure. (une chaine est un ensemble de pions se touchant côte à côte, sur des cases à proximités, mais pas sur les diagonales). Exemple 1, Ex 2, Ex 3
Si le pion n'a pas de chaine il peut se faire éliminer par un seul pion.
Lorsque les 2 pions se déplacent sur une même case :
Le pion qui a la plus grande chaine l'emporte.
En cas d'égalité, les deux pions sont supprimés.Exemple 4

Définition :
Pion libre : Un pion est libre s'il ne touche aucun pion adverse et si au moins une case autour de lui est vide

Une chaine : une chaine est un ensemble de pions se touchant côte à côte, sur des cases à proximité, mais pas sur les diagonales
