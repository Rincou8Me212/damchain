function preload() { //charge les images
    this.length = preload.arguments.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = new Image();
        this[i].src = preload.arguments[i];
    }
}
var pics = new preload("Images/black.png", "Images/gray.png",
    "Images/you1.png", "Images/you2.png", "Images/you3.png",
    "Images/me1.png", "Images/me2.png", "Images/me3.png");

var square_dim = 50;
var piece_toggled = false;
var my_turn = false;
var comp_move = false;
var game_is_over = false;
var next_round = true;
var moved = false;
var ini = 0;
var speed=false;
var speedy=false;
var mes = 0;
var avant = (8,8);
var apres = (8,8);
var ap = false;
var double_click = false;
var level_game = "level";
var positionX = 0,
    positionY = 0; // Je crée une position pour savoir quelle bouton j'ai appuyé
var newboard;


// ----------------------Tableaux chargement page et commencement----------------------
function createBoard() {
    board = new Array();
    for (var i = 0; i < 6; i++) {
        board[i] = new Array();
		
        for (var j = 0; j < 6; j++)
            board[i][j] = createBoard.arguments[6 * j + i];
    }
    board[-2] = new Array(); // prevents errors
    board[-1] = new Array(); // prevents errors
    board[6] = new Array(); // prevents errors
    board[7] = new Array(); // prevents errors
}
var board;
createBoard(	0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0);
const debut = getRandombegin();
board[debut.var1][debut.var2]=1;
board[(5-debut.var1)][(5-debut.var2)]=-1;

function boardpiece() {
    newboard = new Array();
    for (var i = 0; i < 3; i++) {
        newboard[i] = boardpiece.arguments[i];
    }
}
boardpiece(0, 0, 0);
newpiece();

function PageLoad(){
	
	
	
	
document.write("<h1 id='title'>DameChain</h1>");
document.write("<form class='ready' name='disp2'><input class='left' type=button id='button_click' value=' Prêt ' onClick='click_round()'><input class='middle' type=button id='button_click' value='Annuler' onClick='click_cancel()'><input type=button class='right' id='slide' value='Règles'></form><aside class='piece_to_add'>");

if (ini == 0) {
    for (var i = 0; i < 3; i++) {
        document.write("<a class='piece_add' href='javascript:clicked2(" + i + ")'>");
        document.write("<img src='");
        if (newboard[i] == 1) document.write("Images/you1.png");    
        else document.write("Images/gray.png");
        document.write("' width=" + square_dim + " height=" + square_dim + " name='space2" + i + "" + i + "' border=0></a>");
        ini = 1;
        }
		document.write("</aside>");
	document.write("<aside class='comp_right'>");
	for (var i = 0; i < 3; i++) {
        document.write("<a class='center2' href='javascript:new_round()'>");
        document.write("<img src='");
        if (i < appear_comp())document.write("Images/me1.png");
		else document.write("Images/gray.png");
        document.write("' width=" + square_dim + " height=" + square_dim +" name='space3" + i + "" + i +"' border=0></a>");
	}	
}
document.write("</aside>");
document.write("<table border=0 cellspacing=0 cellpadding=0 width=" + (square_dim * 6 + 8) + "'><tr><td><img src='Images/black.png' width=" + (square_dim * 6 + 8) + " height=4></td></tr>");
for (var j = 0; j < 6; j++) {
    document.write("<tr><td><img src='Images/black.png' width=4 height=" + square_dim + ">");
    for (var i = 0; i < 6; i++) {
        //if (moveable_space(i,j))
        document.write("<a href='javascript:clicked(" + i + "," + j + ")'>");
        document.write("<img src='");
		if (moveable_space(i, j)){
			if (board[i][j] == 1)document.write("Images/you1.png");
			else if (board[i][j] == -1) document.write("Images/me1.png");
			else document.write("Images/gray.png");
		} else {
			if (board[i][j] == 1)document.write("Images/you3.png");
			else if (board[i][j] == -1) document.write("Images/me3.png");
			else document.write("Images/black.png");
		}
        /*if (board[i][j] == 1) document.write("Images/you1.png");
        else if (board[i][j] == -1) document.write("Images/me1.png");
        else if (moveable_space(i, j)) document.write("Images/gray.png");
        else document.write("Images/black.png");*/
        document.write("' width=" + square_dim + " height=" + square_dim + " name='space" + i + "" + j + "' border=0>");
        if (moveable_space(i, j)) document.write("</a>");

    }
    document.write("<img src='Images/black.png' width=4 height=" + square_dim + "></td></tr>");
}
document.write("<tr><td><img src='Images/black.png' width=" + (square_dim * 6 + 8) + " height=4></td></tr></table>");

document.write("<form class='info' name='disp'><textarea name='message' wrap=virtual rows=3 cols=40></textarea><input type=button id='button_click' value=\"Red&eacute;marrer le jeu\" onClick=\"location.href+=''\"></form>");
document.write("<form class='pions' name='disp4'><img src= 'Images/you1.png' height=" + square_dim + "><img src= 'Images/gray.png' height=" + square_dim + "><div id='Num'>"+count(1)+"</div><img class='right2' src= 'Images/me1.png' height=" + square_dim + "><img class='right22' src= 'Images/gray.png' height=" + square_dim + "><div id='Numc'>"+count(-1)+"</div></form>");


document.write("<FORM><SELECT id='niveau'>"+
      "<OPTION VALUE='debutant' select='selected'> Mode Debutant </OPTION>"+
      "<OPTION VALUE='amateur'> Mode Amateur </OPTION>"+
	  "<OPTION VALUE='Multijoueur'> Mode Multijoueur </OPTION>"+
    "</SELECT></FORM>");


}
PageLoad();
message("Sélectionne une pièce à faire apparaitre (à gauche du plateau), puis clique sur une case du plateau.");

function boardmidle() {
    board_me = new Array();
	board_comp = new Array();
	board_chain = new Array();
    for (var i = -1; i < 7; i++) {
        board_me[i] = new Array();
		board_comp[i] = new Array();
		board_chain[i] = new Array();
        for (var j = -1; j < 7; j++)
            board_me[i][j] = boardmidle.arguments[6 * j + i];
			board_comp[i][j] = boardmidle.arguments[6 * j + i];
			board_chain[i][j] = boardmidle.arguments[6 * j + i];
    }
    //board_me[-1] =  board_comp[-1] =  board_chain[-1] = new Array(); // prevents errors
    //board_me[6] = board_comp[6] =  board_chain[6] =  new Array(); // prevents errors
	

 }
var board_me;
var board_comp;
var board_chain;
boardmidle(	0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0);	
		

//fonctions représentations
function Coord(x, y) {
    this.x = x;
    this.y = y;
}
function coord(x, y) {
    c = new Coord(x, y);
    return c;
}

function draw(x, y, w) {
	if (w==1){
		if (moveable_space(x,y)){
			document.images["space" + x + "" + y].src ="Images/you1.png";
		} else {
			document.images["space" + x + "" + y].src ="Images/you3.png";
		}
	} else if (w==-1){
		if (moveable_space(x,y)){
			document.images["space" + x + "" + y].src ="Images/me1.png";
		} else {
			document.images["space" + x + "" + y].src ="Images/me3.png";
		}

	} else if (w==2){
		document.images["space" + x + "" + y].src ="Images/you2.png";
	} else if (w==-2){
		document.images["space" + x + "" + y].src ="Images/me2.png";
	}
	//document.images["space" + x + "" + y].src = name;
}
function draw2(x, y, name) {
    document.images["space2" + x + "" + x].src = name;
}
function draw3(x,y){
	if (moveable_space(x,y)){
		document.images["space" + x + "" + y].src ="Images/gray.png";
	} else {
		document.images["space" + x + "" + y].src ="Images/black.png";
	}
}
function draw4(x, y, name) {
    document.images["space3" + x + "" + x].src = name;
}



//------------------------------  fonctions à chaque tour 
function click_round() { // fonction après click pour chaque tour

	if (!(game_over()) && !(draw_game())){
			if (game_cycle()){	
				if (all_piece_appear()) {
					next_round = false;
					recupert();
					if (!ap){
						ap=true;
						setTimeout("ap=false;",1000);
						for (var i = 0; i < 3; i++) {
							draw4(i,i,"Images/gray.png");
						}
						computer_appear();
					} else {
						setTimeout("next_round = true;new_round();", 900);
						message("Attention double clique. Attends une seconde.");
					}
				} else if ((!all_piece_appear()) && (ini > 0)) {
						message("Apparitions non terminé");
				}
			} else if (!game_cycle()){
				if (speed==true && moved==true){ // à cause de setTimeout si l'utilisateur est trop rapide
					message("Pas trop vite ! reclique sur prêt.");
				} else {
					speed=true;
					if (moved==true){
						computer_move();
					} else if (moved==false){
						message("Déplacement non terminé");
					}
				}
			}
	} else {
		if (game_over()){
			show_number();
		} else if (draw_game()){
			setTimeout("message('Match nul!  Allez on rejoue !');", 3500);
		}
	}
}
function new_round() {
	speedy=false;
	double_click=false;
	the_chain();
	show_number();
    if (!(game_over()) && !(draw_game())){
	if ((next_round) && (ini > 1)) {
        newpiece();
		if (game_cycle()){
			message("Phase Apparition.");
			for (var i = 0; i < 3; i++) {
				if (i < appear_comp()) draw4(i,i,"Images/me1.png");
			}
		} else if (!game_cycle()){
			if (mes == 0) message("Phase Déplacement : clique un de tes pions sur le plateau et clique sur une case pour le déplacer.");
			else  message("Phase Déplacement.");
		}
        for (var i = 0; i < 3; i++)
            if (newboard[i] == 1) draw2(i,i,"Images/you1.png");
    } 
	}
}
function game_cycle() {
	if ((appear() == 0) || (appear_comp() == 0)  || (moved)) {
        return false;
    } else {
        return true;
    }
}


//chaines
var nb=1;
function chain(i,j,p,think){
	board_chain[i][j]=p*8;
	if (think==true){
		for (var k = -1; k < 2; k++) {
			for (var l = -1; l < 2; l++){
				if (l!==k && l!==-k){
					if (p==1){
						if (board[i+l][j+k]==p && board_chain[i+l][j+k]!==p*8){ 
							nb= nb+1;
							chain(i+l,j+k,p,think);
						} 
					} else if (p==-1){
						if (board[i+l][j+k]==p && board_chain[i+l][j+k]!==p*8){ 
							nb= nb+1;
							chain(i+l,j+k,p,think);
						} 
					}
				}
			}
		}
	} else {
		for (var k = -1; k < 2; k++) {
			for (var l = -1; l < 2; l++){
				if (l!==k && l!==-k){
					if (p==1){
						if (board_me[i+l][j+k]==p && board_chain[i+l][j+k]!==p*8){ 
							nb= nb+1;
							chain(i+l,j+k,p,think);
						} 
					} else if (p==-1){
						if (board_comp[i+l][j+k]==p && board_chain[i+l][j+k]!==p*8){ 
							nb= nb+1;
							chain(i+l,j+k,p,think);
						} 
					}
				}
			}
		}
	}
	return nb;
}
function chain_piece(i,j,p,think){
	var z = 0;
	z = chain(i,j,p,think);
	nb=1;
	for (var k = 0; k < 6; k++) {
		for (var l = 0; l < 6; l++){
			board_chain[l][k] = 0;
		}
	}
	return  z;
}


// ------------------  Apparitions
function free(x, y) {
    if ((board[x - 1][y - 1] != -1) && (board[x - 1][y] != -1) && (board[x - 1][y + 1] != -1) && (board[x][y - 1] != -1) && (board[x][y + 1] != -1) && (board[x + 1][y - 1] != -1) && (board[x + 1][y] != -1) && (board[x + 1][y + 1] != -1)) {
        if ((board[x - 1][y - 1] == 0) || (board[x - 1][y] == 0) || (board[x - 1][y + 1] == 0) || (board[x][y - 1] == 0) || (board[x][y + 1] == 0) || (board[x + 1][y - 1] == 0) || (board[x + 1][y] == 0) || (board[x + 1][y + 1] == 0)) {
            return true;
        }
    } else {
        return false;
    }
}
function free_comp(x, y) {
    if ((board[x - 1][y - 1] != 1) && (board[x - 1][y] != 1) && (board[x - 1][y + 1] != 1) && (board[x][y - 1] != 1) && (board[x][y + 1] != 1) && (board[x + 1][y - 1] != 1) && (board[x + 1][y] != 1) && (board[x + 1][y + 1] != 1)) {
        if ((board[x - 1][y - 1] == 0) || (board[x - 1][y] == 0) || (board[x - 1][y + 1] == 0) || (board[x][y - 1] == 0) || (board[x][y + 1] == 0) || (board[x + 1][y - 1] == 0) || (board[x + 1][y] == 0) || (board[x + 1][y + 1] == 0)) {
            return true;
        }
    } else {
        return false;
    }
}

function appear() {
    if ((all_piece_appear) || (!next_round)) {
        var n = 0;
        for (var i = 0; i < 6; i++)
            for (var j = 0; j < 6; j++)
                if ((board[i][j] == 1) && (free(i, j))) {
                    if ((n < 3) && (n < (36 - count(1) - count(-1)))){
							n = n + 1;
                    } else n
                }
        return n;
    }
}
function appear_comp() {
    var n = 0;
    for (var i = 0; i < 6; i++)
        for (var j = 0; j < 6; j++)
            if ((board[i][j] == -1) && (free_comp(i, j))) {
                if ((n < 3) && (n < (36 - count(1) - count(-1)))) {
                    n = n + 1;
                } else n
            }
    return n;
}
function count(p){
	var c = 0;
	for (var i = 0; i < 6; i++){
        for (var j = 0; j < 6; j++){
            if (board[i][j] == p){
				c = c +1;
			}
		}
	}
	return c;
}

function newpiece() { // créer des nouveaux pions
    if (game_cycle()) {
        for (var i = 0; i < appear(); i++) {
            newboard[i] = 1;
        }
    }
}
newpiece();
function all_piece_appear() {
    if ((newboard[0] == 0) && (newboard[1] == 0) && (newboard[2] == 0)) {
        return true;
    } else {
        return false;
    }
}


//-------------------  Déplacements
function clicked(i, j) {
	if (ini==1 && piece_toggled==true){
		message("Maintenant clique sur prêt, comme à chaque fois que ton tour sera terminé.")
	}
	if (!game_over() && !draw_game()){
		console.log(game_cycle()+""+speedy);
		if (!(game_cycle()) && speedy==false) {
			if (my_turn) {
				if (mes==0){
					mes=1;
				} else if (mes==1){
					message("clique sur prêt pour terminé le tour.");
					mes=2;
				}
				if (integ(board[i][j]) == 1) toggle(i, j);
				else if (piece_toggled==true && double_click==false) {
					avant=selected;
					apres=coord(i,j);
					speedy=true;
					double_click =true;
					move(selected, coord(i, j));
					
					
					
				}else if (double_click==true){
					message("Attention double clique. ");
				} else message("Clique d'abord sur l'un de tes pions (les rouges), puis clique sur la case vers laquelle tu veux le déplacer.");
			} else {
				message("tour terminé, clique sur prêt !");
			}
		}
		if (game_cycle()) {
			if ((board[i][j] == 0 && board_me[i][j]==0) && (piece_toggled)) {
				newboard[positionX] = 0;
				draw(i, j,2);
				draw2(positionX, positionX, "Images/gray.png");
				board_me[i][j] = 1;
				piece_toggled = false;
				speed = false;
			}
		}
	}
}
function clicked2(i) {
    if (game_cycle() && !draw_game()) {
        if (next_round) {
            if (newboard[i] == 1) {
                toggle(i, i); // Maintenant je retiens la position
                Position(i, i); // Et je suis prêt pour poser la pièce sur le plateau
            } 
            else message("Clique sur l'un de tes pions à faire apparaitre, puis clique sur la case du plateau de ton choix.");
        } 
    }
}
function toggle(x, y) {
    if (!(game_cycle())) {
        if (my_turn) {
            if (piece_toggled)
				draw(selected.x,selected.y,1);
			if (piece_toggled && (selected.x == x) && (selected.y == y)) {
                piece_toggled = false;
            } else {
                piece_toggled = true;
				draw(x, y, 2);
				}
            selected = coord(x, y);
			
			} else {
				  if ((piece_toggled) && (integ(board[selected_c.x][selected_c.y])==-1))
					draw(selected_c.x,selected_c.y,-1);
				  if (piece_toggled && (selected_c.x == x) && (selected_c.y == y)) {
					piece_toggled = false;
				  } else {
					   piece_toggled = true;
					   draw(x,y,-2);
					}
					selected_c = coord(x,y);
				}
	}
    if ((game_cycle())) {
        if (my_turn) {
                if ((piece_toggled))
                    draw2(selected.x, selected.y, "Images/you1" + ".png");
            if (piece_toggled && (selected.x == x) && (selected.y == y)) {
                piece_toggled = false;
            } else {
                piece_toggled = true;
                draw2(x, y, "Images/you2" + ".png");
            }
            selected = coord(x, y);
        } else {
            if ((piece_toggled) && (integ(newboard[selected_c.x][selected_c.y]) == -1))
                draw2(selected_c.x, selected_c.y, "Images/me1" + ".png");
            if (piece_toggled && (selected_c.x == x) && (selected_c.y == y)) {
                piece_toggled = false;
            } else {
                piece_toggled = true;
                draw2(x, y, "Images/me2" + ".png");
            }
            selected_c = coord(x, y);
        }
    }
}

function moveable_space(i, j) {
    // calculates whether it is a gray (moveable)
    // or black (non-moveable) space
    return (((i % 2) + j) % 2 == 0);

}
function move(from, to) {
    my_turn = true;
    if (legal_move(from, to)) {
        if (board[to.x][to.y] == 0) {
            swap(from, to);
			moved =true;
        } else {
            swap(from, to);
			moved =true;
        }
		speedy=true;
		double_click =true;
		selected = to;
           setTimeout("toggle(" + to.x + "," + to.y + ");my_turn = false;speed = false;", 600);
    } else {
		speedy=false;
		double_click=false;
		speed=false;
	}
    return true;
}
function swap(from,to) {
 if (my_turn || comp_move) {
	 	 if (my_turn){
			 document.images["space"+to.x+""+to.y].src = document.images["space"+from.x+""+from.y].src;
			board_me[to.x][to.y]= 1;
			board_me[from.x][from.y] =-7;
			draw3(from.x,from.y);
		 } else if (comp_move){
			 board[to.x][to.y]=-1;
			 setTimeout("draw(" + to.x + "," + to.y + ",-1);", 500);
			 if (board_me[from.x][from.y]!==1){
				  board[from.x][from.y]=0;
				  draw3(from.x,from.y);
			 } else if (board_me[from.x][from.y]==1){
				 draw(from.x,from.y,1);
			 }
		 } 
	}
}
function swap2(x,y){
	draw(x,y,-1);
}
function remove(x, y) {
    if (my_turn || comp_move)
        draw2(x, y);
    board[x][y] = 0;
}
function move_comp(from, to) {
	toggle(from.x, from.y);
    comp_move = true;
	setTimeout("selected_c = coord(" + to.x + "," + to.y + ");piece_toggled = true;", 500);
	setTimeout("bak=my_turn;my_turn=false;toggle(" + to.x + "," + to.y + ");my_turn=bak;", 600);
	setTimeout(function () {compile_move(from,to);}, 400);
  
    return true;
}
function legal_move(from, to) {
    if ((to.x < 0) || (to.y < 0) || (to.x > 6) || (to.y > 6)) return false;
    piece = board[from.x][from.y];
    distance = coord(to.x - from.x, to.y - from.y);
    if (abs(distance.x) > 1 || abs(distance.y) > 1) {
        message("Déplacement non autorisé.");
        return false;
    }
    return true;
}

//Maths
function integ(num) {
    if (num != null)
        return Math.round(num);
    else
        return null;
}
function abs(num) {
    return Math.abs(num);
}
function sign(num) {
    if (num < 0) return -1;
    else return 1;
}
function getRandom() {
    return 2 * Math.random() - 1;
}
function getRandom2(l) {
    return integ((l-1)* Math.random());
}
function getRandombegin(){
	var c = 0;
	var c = 0;
	lll = getRandom2(4);
	if (lll==0){
		c = getRandom2(6);
		cc = 0;
	} else if (lll==1){
		c = getRandom2(6);
		cc = 5;
	} else if (lll==2){
		cc = getRandom2(6);
		c = 0;
	} else if (lll==3){
		cc = getRandom2(6);
		c = 5;
	}
	return {var1 : c, var2 : cc};
}


//--------------------  fin de jeu
function game_over() { // make sure game is not over (return true if game is over)
    comp = you = false;
	comp20 = false;
	you20 = false;
	if (count(-1) > 20){
		comp20 = true;
	} else if (count(1) > 20){
		you20 = true;
	} 
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++) {
				if (integ(board[i][j]) == -1) comp = true;
				if (integ(board[i][j]) == 1) you = true;
			}
	}
    if ((!comp) || (you20)){
		message("Tu as gagné!");
		setTimeout("message('Tu as gagné!  Allez on rejoue !');", 3500);
		return true;
	} else if ((!you) || (comp20)) {
		message("Arg! Game over.");
		setTimeout("message('Arg! Game over.  Allez on rejoue !');", 3500);
		return true;
	} else return false;

}
function draw_game(){// en cas de match nul (pour les apparitions). Il faudra faire les déplacements
	if (count(1)== 17 && count(-1) == 17 && appear()>1 && appear_comp()>1){
		message("Match nul !");
		show_number();
		return true;
	} else {return false;}
}


// autres
function Position(x, y) { // La fonction initialise les instances position déclaré AVANT !!!
    this.positionX = x;
    this.positionY = y;
}
function position() { // Celle la me permet de récupérer les 2 positions d'un coup
    p = new Position(positionX, positionY);
    return p;
}


// affichages et boutons
function message(str) { // le message à afficher
    if (!game_is_over)
        document.disp.message.value = str;
}
function click_cancel(){ // pour le bouton Annuler
	if (game_cycle()){
		for (var j = 0; j < 6; j++) {
			for (var i = 0; i < 6; i++) {
				if (board_me[i][j]==1){
					board_me[i][j]=0;
					draw3(i,j);
					next_round=true;
					ini = 2;
					new_round();
					message("Apparitions annulés, rejoue !");
				}
			}
		}
	} else if (!game_cycle() && moved==true){
		if (speed==true){ // à cause de setTimeout si l'utilisateur est trop rapide
			message("Pas trop vite ! reclique sur Annuler.");
		} else {
			speed=true;
			speedy=false;
			double_click=false;
			if (board[apres.x][apres.y]==-1){
				 draw(avant.x,avant.y,1);
				 draw(apres.x,apres.y,-1);
				 board[avant.x][avant.y]=1;
				 board_me[apres.x][apres.y]= 0;
				 board_me[avant.x][avant.y]=0;
			} else if (board[apres.x][apres.y]==0){
				 draw(avant.x,avant.y,1);
				 draw3(apres.x,apres.y);
				 board[avant.x][avant.y]=1;
				 board_me[apres.x][apres.y]= 0;
				 board_me[avant.x][avant.y]=0;
			}
			message("Déplacement annulé, rejoue !");
			moved=false;
			my_turn=true;
		}
	}
}
function show_number(){ // pour le comptage des pions
	var chiffre = document.getElementById('Num');
	var chiffrec = document.getElementById('Numc');
	
	if (count(1)==0 || count(-1)>20){
		chiffre.innerHTML = count(1);
		chiffrec.innerHTML = "<font color=orange class='shadows'>"+count(-1)+"</font>";
	} else if (count(-1)==0 || count(1)>20){
		chiffre.innerHTML = "<font color=orange class='shadows'>"+count(1)+"</font>";
		chiffrec.innerHTML = count(-1);
	} else {
			chiffre.innerHTML = count(1);
			chiffrec.innerHTML = count(-1);
	}
}



//--------------------------------------- Partie Adversaire Programme ----------------------------------------------------------------------


function recupert(){ // récupert le niveau de jeu contre le programme
		var mylist = document.getElementById("niveau");
	if (mylist!== null){	
		var valeur = mylist.options[mylist.selectedIndex].value;
		level_game = valeur;
			if (valeur=="debutant"){
				mylist.removeChild(mylist.options[1]);
				mylist.id = "selection";
				//mylist.length=0;
			} else if (valeur=="amateur"){
				mylist.removeChild(mylist.options[0]);
				mylist.id = "selection";
			}
	}	
}


function Notion_chain() {
    board_next_chain = new Array();
	board_comp_chain = new Array();
    for (var i = -1; i < 7; i++) {
        board_next_chain[i] = new Array();
		board_comp_chain[i] = new Array();
        for (var j = -1; j < 7; j++)
            board_next_chain[i][j] = Notion_chain.arguments[6 * j + i];
			board_comp_chain[i][j] = Notion_chain.arguments[6 * j + i];
    }
 }
var board_next_chain;
var board_comp_chain;
Notion_chain(0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0);	

var list_place = new Array();
var list_place_chain = new Array();
var free_apparitions = new Array();
var bloque_you = new Array();
var link_chain = new Array();


function the_chain(){
	think=true;
	for (var k = 0; k < 6; k++) {//nettoyer les tableaux des tours précédents
		for (var l = 0; l < 6; l++){
			board_comp_chain[l][k] = 0;
		}
	}
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			if (board[i][j]==-1){
				board_comp_chain[i][j] = -1;
				var zz = 0;
				zz = chain(i,j,-1,think);
				nb=1;
					define_chain(zz);
					
					for (var k = 0; k < 6; k++) {
						for (var l = 0; l < 6; l++){
							board_chain[l][k] = 0;
						}
					}
			}
		}
		
	}	
	space_next_chain();
	return  true;
}
function define_chain(zz){
	for (var k = 0; k < 6; k++) {
		for (var l = 0; l < 6; l++){
			if (zz>(count(-1)/2)) { // chaine principale
				if (board_chain[l][k] == -8){
					board_comp_chain[l][k] = -18;
				}
			} else if (zz>3 && zz<(count(-1)/2 + 1)) { // chaines secondaires
				if (board_chain[l][k] == -8){
					board_comp_chain[l][k] = -12;
				}
			} else if (zz>1 && zz<4 && zz<(count(-1)/2 + 1)) { // chaines petites
				if (board_chain[l][k] == -8){
					board_comp_chain[l][k] = -6;
				}
			}
		}
	}
}
function space_next_chain(){
	for (var k = 0; k < 6; k++) {//nettoyer les tableaux des tours précédents
		for (var l = 0; l < 6; l++){
			board_next_chain[l][k] = 0;
		}
	}
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++){
			if (board[i][j]==0){
				for (var k = -1; k < 2; k++) {
					for (var l = -1; l < 2; l++){
						if (l!==k && l!==-k){
							if (board_comp_chain[i+l][j+k]== -18) board_next_chain[i][j]= board_next_chain[i][j] -10;
							if (board_comp_chain[i+l][j+k]== -12) board_next_chain[i][j]= board_next_chain[i][j] -4;
							if (board_comp_chain[i+l][j+k]== -6) board_next_chain[i][j]= board_next_chain[i][j] -2;
						}
					}
					
				}
			}
		}
	} 
}

//Déplacements
function on_board(a,b){
	if (a>=0 && a<=5 && b>=0 && b<=5) return true;
	else return false;
}
function move_somewhere(){
	console.log("n'importe où");
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board[i][j]==-1){
var one_move = false;
	if (i<5 && j<5 && board[i+1][j+1]!== -1 && !one_move){
		move_comp(coord(i,j),coord(i+1,j+1));
		one_move=true;
		return true;
	} else if (j<5 && board[i][j+1]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i,j+1));
		one_move=true;
		return true;
	} else if (i>0 && j<5 && board[i-1][j+1]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i-1,j+1));
		one_move=true;
		return true;
	} else if (i>0 && board[i-1][j]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i-1,j));
		one_move=true;
		return true;
	} else if (i>0 && j>0 && board[i-1][j-1]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i-1,j-1));
		one_move=true;
		return true;
	} else if (j>0 && board[i][j-1]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i,j-1));
		one_move=true;
		return true;
	} else if (i<5 && j>0 && board[i+1][j-1]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i+1,j-1));
		one_move=true;
		return true;
	} else if (i<5 && board[i+1][j]!==-1 && !one_move){
		move_comp(coord(i,j),coord(i+1,j));
		one_move=true;
		return true;
	} else return false;
			}
		}
	}
	
}
function possible_delete_chain(){
	var fait=false;
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board[i][j]==-1 && moved==true){
				board[i][j]=0;
						for (var k = -1; k < 2; k++) {
							for (var l = -1; l < 2; l++){
															
									if (board[i+k][j+l]==1 && chain_piece(i+k,j+l,1,true) < chain_piece(i+k,j+l,-1,true) && fait==false){
										console.log("élimine");
										board[i][j]=-1;
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										return true;
										break;
									} 
							}
						}
					if (fait==false) board[i][j]=-1;
			}
		}
	}
	if (fait==false) return false;
}
function possible_delete(){
	var fait=false;
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board[i][j]==-1 && moved==true){
				board[i][j]=0;
						for (var k = -1; k < 2; k++) {
							for (var l = -1; l < 2; l++){
									if (board[i+k][j+l]==1 && chain_piece(i+k,j+l,1,true)==1 && fait==false){
										console.log("élimine le");
										board[i][j]=-1;
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										return true;
										break;
									}
							}
						}
					if (fait==false) board[i][j]=-1;
			}
		}
	}
	if (fait==false) return false;
}
function stay_close(i,j,k,l){//ne pas quitter une chaine, ou rejoindre une plus grande
	var n = 0;
	var nn = 0;
	var h = 0;
	var hh = 0;
	h = board[i][j];
	hh = board[k][l];
	board[i][j]=-1;
	n = chain_piece(i,j,-1,true);
	board[i][j]=0;
	board[k][l]=-1;
	nn = chain_piece(k,l,-1,true);
	board[i][j]= h;
	board[k][l]=hh;
	if (n > nn) return false;
	else return true;
	
}
function possible_next_chain(cl){//pions n'appartenants pas à la chaine principale vers place libre si appear_comp est nul, vers la chaine sinon
	the_chain();
	var fait=false;
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board_comp_chain[i][j]== cl && moved==true){
				board[i][j]=0;
				the_chain();
				if (appear_comp()==0){
					for (var k = -1; k < 2; k++) {
						for (var l = -1; l < 2; l++){
							if (!(l==0 && k==0)){
								if (board[i+k][j+l]==0 && free_comp(i+k,j+l) && (board_next_chain[i+k][j+l]==-10 || board_next_chain[i+k][j+l]==-20 || board_next_chain[i+k][j+l]==-30 || board_next_chain[i+k][j+l]==-40) && fait==false && on_board(i+k,j+l)){
									console.log("place libre next chain "+cl);
									board[i][j]=-1;
									move_comp(coord(i,j),coord(i+k,j+l));
									fait=true;
									return true;
									break;
								}
							}
						}
					} 
				}else {
					for (var k = -1; k < 2; k++) {
						for (var l = -1; l < 2; l++){
							if (!(l==0 && k==0)){
								if (board[i+k][j+l]==0 && (board_next_chain[i+k][j+l]==-10 || board_next_chain[i+k][j+l]==-20 || board_next_chain[i+k][j+l]==-30 || board_next_chain[i+k][j+l]==-40) && fait==false && on_board(i+k,j+l)){
									console.log("place next chain");
									board[i][j]=-1;
									move_comp(coord(i,j),coord(i+k,j+l));
									fait=true;
									return true;
									break;
								}
							}
						}
					}
				}
				if (fait==false) board[i][j]=-1;
			}
		}
	}
	if (fait==false) return false;
}
function possible_free(close_to){//pion libre à côté d'une chaine ou non
	var fait=false;
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			if (board[i][j]==-1 && moved==true){
				board[i][j]=0;
					for (var k = -1; k < 2; k++) {
						for (var l = -1; l < 2; l++){
							if (!(l==0 && k==0)){
								if (close_to==true){
									if ((stay_close(i,j,i+k,j+l)) && board[i+k][j+l]==0 && free_comp(i+k,j+l) && fait==false && on_board(i+k,j+l)){
										console.log("place libre à côté chain "+(i+k)+" "+(j+l));
										board[i][j]=-1;
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										return true;
										break;
									}
								} else {
									if (board[i+k][j+l]==0 && free_comp(i+k,j+l) && fait==false && on_board(i+k,j+l)){
										console.log("place libre");
										board[i][j]=-1;
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										return true;
									break;
									}
								}
							}
						}
					}
				if (fait==false) board[i][j]=-1;
			}
		}
	}
	if (fait==false) return false;
}
function move_link(num){//faire le meilleur lien 
	var z = 0;
	var n = 0;
	var nn = 0;
	var hh = 0;
	var oo = 0;
var list_move_link = new Array();
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			if (board[i][j]==-1){
				for (var k = -1; k < 2; k++) {
					for (var l = -1; l < 2; l++){
						if (!(l==0 && k==0)){
							if (board[i+k][j+l]==0 && on_board(i+k,j+l)){
	n = chain_piece(i,j,-1,true);
	board[i][j]=0;
	board[i+k][j+l]=-1;
	nn = chain_piece(i+k,j+l,-1,true);
	board[i][j]= -1;
	board[i+k][j+l]=0;
	if (n < nn) {
		list_move_link[z]= {abscissea : i, ordonnéea : j, abscisseb : i+k, ordonnéeb : j+l, nombre : nn-n, taille : nn};
		z = z +1;
	}
							}
						}
					}
				}
			}
		}
	} 
	for (var o = 0; o < list_move_link.length; o++){
		if (list_move_link[o]["nombre"] > hh || ((list_move_link[o]["nombre"] == hh) && (getRandom2(2)==1)) ){
			hh = list_move_link[o]["nombre"];
			oo = o;
		} 
	} 
	if (hh > (num-1)){
		console.log("meilleur lien");
		move_comp(coord(list_move_link[oo]["abscissea"],list_move_link[oo]["ordonnéea"]),coord(list_move_link[oo]["abscisseb"],list_move_link[oo]["ordonnéeb"]));
		return true;
	} else return false;
}
function possible_place(cl){//faire le liens, vers chaine principale, vers pions
	the_chain();
	var fait=false;
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board_comp_chain[i][j]== cl){
				board[i][j]=0;
				console.log(cl);
					for (var k = -1; k < 2; k++) {
						for (var l = -1; l < 2; l++){
							if (!(l==0 && k==0)){
								if (board[i+k][j+l]==0 && fait==false){
									console.log("espace libre");
									if (board_next_chain[i+k][j+l] < -10 && (stay_close(i,j,i+k,j+l)) && board_next_chain[i+k][j+l]!==-20 && board_next_chain[i+k][j+l]!==-30 && board_next_chain[i+k][j+l]!==-40){
										console.log("link vers chain");
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										return true;
									} else if ((stay_close(i,j,i+k,j+l)) && (board_next_chain[i+k][j+l]!==0) && on_board(i+k,j+l)){
										console.log("link vers chain");
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										board[i][j]=-1;
										return true;
										break;
									}else if ((stay_close(i,j,i+k,j+l)) && on_board(i+k,j+l)){
										move_comp(coord(i,j),coord(i+k,j+l));
										fait=true;
										board[i][j]=-1;
										return true;
										break;
									}
								}
							}
						}
					}
				board[i][j]=-1;
			}
		}
	}
	if (fait==false) return false;
}

function computer_move() {
	var i =0;
	var j = 0;
	var done=false;
	my_turn=false;
	if (level_game=="amateur"){
		 if (move_link(4)){
			done=true;
		} else if (possible_delete_chain()){
			done=true;
		} else if (move_link(3)){
			done=true;
		} else if (possible_next_chain(-1)){
			done=true;
		} else if (move_link(2)){
			done=true;
		} else if (possible_delete()){
			done=true;
		}else if (possible_next_chain(-6)){
			done=true;
		} else if (possible_next_chain(-12)){
			done=true;
		} else if (possible_free(true)){
			done=true;
		} else if (possible_place(-1)){
			done=true;
		} else if (possible_place(-6)){
			done=true;
		} else if (possible_place(-12)){
			done=true;
		} else if (possible_place(-18)){
			done=true;
		} else if (possible_free(false)){
			done=true;
		}else {
			move_somewhere();
			done=true;
		}	
		return true;
	} else if (level_game=="debutant"){ // mode débutant
	console.log("mode débutant");
		if (possible_delete_chain()){
			done=true;
		} else if (possible_delete()){
			done=true;
		} else if (possible_next_chain(-1)){
			done=true;
		} else if (move_link(2)){
			done=true;
		} else if (possible_free(true)){
			done=true;
		} else if (possible_place(-1)){
			done=true;
		} else if (possible_place(-6)){
			done=true;
		} else if (possible_place(-12)){
			done=true;
		} else if (possible_place(-18)){
			done=true;
		} else if (possible_free(false)){
			done=true;
		}else {
			move_somewhere();
			done=true;
		}	
		return true;
	}
}
function compile_move(from,to){
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			if (board_me[i][j]==1){
				var xme = i;
				var yme = j;
			} if (board_me[i][j]==-7){
				board_me[i][j]=0;
				board[i][j]=0;
			}else if (board[i][j]==1){
				board_me[i][j]=1;
				board_comp[i][j]=0;
			} else if (board[i][j]==-1){
				board_comp[i][j]=-1;
				board_me[i][j]=0;
			} else if (board[i][j]==0){
				board_me[i][j]=0;
				board_comp[i][j]=0;
			}
		}
	} board_comp[from.x][from.y]=0;board_comp[to.x][to.y]=-1;board[from.x][from.y] =0;board_me[xme][yme]=1;
							
//déplacement sur même case et à chaine égale
	if (board_me[to.x][to.y]== 1 && board_comp[to.x][to.y] == -1 && chain_piece(to.x,to.y,1,false)==chain_piece(to.x,to.y,-1,false) && board[to.x][to.y]== 0){
			draw3(from.x, from.y);
			draw(to.x,to.y,-2);
			setTimeout("draw3(" + to.x + "," + to.y + ");", 500);
			board[from.x][from.y] = board[to.x][to.y] = 0;
			
	} else {
//déplacement computer
		if (board_me[to.x][to.y]== 1 || board[to.x][to.y] == 1){
			if (chain_piece(to.x,to.y,1,false)==1){
				draw(to.x,to.y,-2);
				swap(from,to);
			} else {
				if (chain_piece(to.x,to.y,1,false) < chain_piece(to.x,to.y,-1,false)){
					draw(to.x,to.y,-2);
					swap(from,to);
					
					} else {
					draw(to.x,to.y,-2);
					setTimeout("draw(" + to.x + "," + to.y + ",1);", 500);
					board[to.x][to.y]= 1;
					piece_toggled = false;
						if (board_me[from.x][from.y]!==1){
							draw3(from.x, from.y);
							board[from.x][from.y]=0;
						} else if (board_me[from.x][from.y]==1){
							draw(from.x,from.y,1);
						}
				}
			}
		}  else if (board[to.x][to.y]== 0){
				draw(to.x,to.y,-2);
				swap(from,to);
				
			}
//déplacement joueur			
		if (board_comp[xme][yme]== -1 || board[xme][yme]== -1){
			if (chain_piece(xme,yme,-1,false)== 1){
				board[xme][yme] = 1;
			} else {
				if (chain_piece(xme,yme,-1,false) < chain_piece(xme,yme,1,false)){
					board[xme][yme] = 1;
				} else {
					draw(xme,yme,-1);
					board[xme][yme] = -1;
				}
			}
		}  else if (board[xme][yme]== 0){
					board[xme][yme] = 1;
			}	
		}	
			
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
				board_me[i][j]=0;
				board_comp[i][j]=0;
		}
	}	
        setTimeout("comp_move = false;my_turn = true;", 300);
		setTimeout("moved=false;", 900);
		setTimeout("new_round();", 1000);
}

//Apparitions
function appear_place(){//places possibles
	var l = 0;
	var k = 0;
	const w = appear_comp();
	if (level_game=="amateur"){
		for (var i = 1; i < 5; i++) {
			for (var j = 1; j < 5; j++){
				if (board[i][j]==0){
					list_place[l] =  { abscisse : i, ordonnée : j};
					l=l+1;
				}
			}
		} 
	}
		if (l < w+1 || (count(1)+count(-1)>14)){
			k = 0;
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++){
					if (board[i][j]==0){
						list_place[k] =  { abscisse : i, ordonnée : j};
						k=k+1;
					}
				}
			} 
		} else {
			k = l;
		}
		return k;
}
function appear_place_next(){//places à côté de la chaine principale
	var l = 0;
	var k = 0;
	const w = appear_comp();
if (level_game=="amateur"){
	for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++){
			for (var o = 0; o < list_place.length; o++){//seulement dans la list_place (seulement à côté d'un seul pion)
				if (list_place[o]["abscisse"]==i && list_place[o]["ordonnée"]==j && board_next_chain[i][j]!==0){
					list_place_chain[l] =  { abscisse : i, ordonnée : j};
					l=l+1;
				}
			}
		}
	} 
}
	if (l < w+1 || (count(1)+count(-1)>14)){
		k = 0;
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++){
				for (var o = 0; o < list_place.length; o++){
					if (list_place[o]["abscisse"]==i && list_place[o]["ordonnée"]==j && board_next_chain[i][j]!==0){
						list_place_chain[k] =  { abscisse : i, ordonnée : j};
						k=k+1;
					}
				}
			}
		} 
	} else {
		k = l;
	}
	return k;
}
function appear_free(k,kk){//cherche les places libres
		var z = 0;
		next_chain=false;
	for (var j = 0; j < kk; j++){// à côté de la chaine principale
		if (free_comp(list_place_chain[j]["abscisse"],list_place_chain[j]["ordonnée"])){
			for (var i = 0; i < k; i++){
				if (list_place_chain[j]["abscisse"]==list_place[i]["abscisse"] && list_place_chain[j]["ordonnée"]==list_place[i]["ordonnée"]){
					free_apparitions[z]=i;
				}
			}		
			z=z+1;
		} 
	} 
	if (z<2){// n'importe où ailleur si on en a trouvé moins que 2
		z=0;
		for (var j = 0; j < k; j++){
			if (free_comp(list_place[j]["abscisse"],list_place[j]["ordonnée"])){
				free_apparitions[z]=j;
				z=z+1;
			} 
		}
	} 

	return z;
}
function main_chain(){
	var main = false;
	for (var k = 0; k < 6; k++) {
		for (var l = 0; l < 6; l++){
			if (board_comp_chain[l][k] == -18){
				main = true;
			}
		}
	}
	if (main== true || (count(-1)<4)) return true;
	else if (main== false) return false;
}
function appear_hight_link(){
	var h = 0;
	var ja = false;
	var m = {px : 1, py : 1};
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++){
			if (board_next_chain[i][j]!==0){
				var zz = 0;
				zz = chain_piece(i,j,-1,think);
				nb=1;
			}
			if (h<zz) {
				
				h = zz;
				m = {px : i, py : j};
			}
		}
	} 
	for (var o = 0; o < list_place.length; o++){
					if (list_place[o]["abscisse"]==m.px && list_place[o]["ordonnée"]==m.py){
						ja = true;
						return o;
					}
	}
	if (ja==false) return -1;
}
function appear_link(k,kk){
	var x = 0;
	for (var j = 0; j < kk; j++){
		var bnc = board_next_chain[list_place_chain[j]["abscisse"]][list_place_chain[j]["ordonnée"]];
	if ((bnc !== 0) && (bnc !== -10) && (bnc !== -20) && (bnc !== -30)){
			for (var i = 0; i < k; i++){
				if (list_place_chain[j]["abscisse"]==list_place[i]["abscisse"] && list_place_chain[j]["ordonnée"]==list_place[i]["ordonnée"]){
					link_chain[x]= {nombre : bnc, place : i};
					x=x+1;
				}
			}		
		} 
	} 
	var h=0;
	var xz=0;
	if (x==0){
		return { beste : 0, platz : 0, nummer : 0};
	} else {
		for (var l = 0; l < x; l++){
			h=xz;
			xz = link_chain[l]["nombre"];
			if (xz>h) xz=h;
			else y = link_chain[l]["place"];
		}
		return { beste : xz, platz : y, nummer : x};
	}

}
function bloque(x,y){//combien de pions on bloque
	var i = 0;
	for (var k = -1; k < 2; k++) {
		for (var l = -1; l < 2; l++){
				if (board[x+k][y+l]==1 && free(x+k,y+l)){
					i=i+1;
				}
		}
	}
	return i;
}
function bloque_appartions(k){//quelles sont les places où l'on bloque 
		var x = 0;
	for (var j = 0; j < k; j++){
		var i = bloque(list_place[j]["abscisse"],list_place[j]["ordonnée"]);
		if (i>0){
			bloque_you[x] =  { nombre : i, place : j};
			x=x+1;
		}
	} 
	var h=0;
	var z=0;
	if (x==0){
		return { beste : 0, platz : 0};
	} else {
		for (var l = 0; l < x; l++){
			h=z;
			z = bloque_you[l]["nombre"];
			if (z<h) z=h;
			else if (z==h){
				if (getRandom2(2)==1) y = bloque_you[l]["place"];
			}
			else y = bloque_you[l]["place"];
		}
		return { beste : z, platz : y, nummer : x};
	}
}
function begin(num){
	var o = 0;
	var list_place_begin = new Array();
	if (count(-1)<num){
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < 6; j++){
				if (board[i][j]==-1){
					for (var k = -1; k < 2; k++) {
						for (var l = -1; l < 2; l++){
							for (var m = 0; m < list_place.length; m++) {
								if (list_place[m]["abscisse"]==(i+k) && list_place[m]["ordonnée"]==(j+l)){
									list_place_begin[o]=m;
									o = o + 1;
								}
							}
						}
					}
				}
			}
		}
	}
	if (o!==0) {
		x = getRandom2(list_place_begin.length);
		return list_place_begin[x];
	} else return -1;
}

function change_list(j){
	for (var i = 0; i < list_place.length; i++){
		if (i > j -1){
			list_place[i] = list_place[i+1];
		}	
	}
	list_place.splice(list_place.length-1,1);
}
function computer_appear(){
	the_chain();
	const k = appear_place();
	var kk = appear_place_next();
	const w = appear_comp();
	var z = appear_free(k,kk);
	var best_bloque = bloque_appartions(k);
	var best_link = appear_link(k,kk);
	var best_used = false;
var n = nn = nnn = new Number;

if (level_game=="amateur"){
	if (!(game_over()) && !(draw_game())){
			console.log("mode Amateur");
        for (var i = 0; i < w; i++) {
                var c = i;
						console.log(z+"z et bloque "+best_bloque.beste+" "+best_bloque.platz+" " +best_bloque.nummer);
				if (c==0){ //pour la 1 apparition
						if (begin(3)!==-1){
							n = begin(3);
							console.log("1 début ");
						} else if (main_chain()==false && appear_hight_link()!==-1){
							n = appear_hight_link();
							console.log("1  main "+n);
						} else if (z>0) {
							n = free_apparitions[getRandom2(z)];
							console.log("1 free "+z);
						} else if (best_link.nummer>0){
								n = best_link.platz;
								console.log("1 link "+best_link.beste+" "+best_link.nummer);
						} else if (best_bloque.beste > 0){
							best_used = true;
							console.log("1 best_bloque");
							n = best_bloque.platz;
						} else if (kk > 0){
							console.log("1 appear_place_next");
							n = kk;
						} else n = getRandom2(k);
		board_comp[list_place[n]["abscisse"]][list_place[n]["ordonnée"]] = -1;	
		change_list(n);
		kk = appear_place_next();
		z = appear_free(k-1,kk);
		best_bloque = bloque_appartions(k-1);
		best_link = appear_link(k-1,kk);
				
				} else if (c==1){
 //pour la 2 apparition
						if ((count(1)+count(-1))<16){
							if (best_bloque.beste>1 && best_used==false){
								console.log("2 best_bloque");
								nn = best_bloque.platz;								
							}  else if (best_bloque.beste>1 && best_used==true && best_bloque.nummer>1){
								console.log("2 juste bloque");
								nn = bloque_you[getRandom2(best_bloque.nummer)]["place"];								
							} else if (z>1) {
								console.log("2 free");
								nn = free_apparitions[getRandom2(z)];
							} else nn = getRandom2(k-1);
						} else {
							if (best_bloque.beste>0 && best_used==false){
								nn = best_bloque.platz;	
								console.log("2 best_bloque"+best_bloque.beste+" platz "+nn);
							} else if (best_bloque.beste>0 && best_used==true && best_bloque.nummer>1){
								nn = bloque_you[getRandom2(best_bloque.nummer)]["place"];
								console.log("2 juste bloque");
							} else if (z>1) {
									nn = free_apparitions[getRandom2(z)];
									console.log("2 free");
							} else nn = getRandom2(k-1);
						} 
		board_comp[list_place[nn]["abscisse"]][list_place[nn]["ordonnée"]] = -1;
		change_list(nn);
		kk = appear_place_next();
		z = appear_free(k-2,kk);
		best_bloque = bloque_appartions(k-2);
		best_link = appear_link(k-2,kk);
					
				} else if (c==2){
 //pour la 3 apparition
						nnn = getRandom2(k-2);
						board_comp[list_place[nnn]["abscisse"]][list_place[nnn]["ordonnée"]] = -1;
					}
		}
		console.log("les n "+n+" "+nn+" "+nnn);
		next_round = true;
        ini = ini + 1;
		compilation();
	} else {
		if (game_over()){
			show_number();
		} else if (draw_game()){
			setTimeout("message('Match nul!  Allez on rejoue !');", 3500);
		}
	}
} else if (level_game=="debutant"){
	if (!(game_over()) && !(draw_game())){
        for (var i = 0; i < w; i++) {
                var c = i;
						console.log(z+"z et bloque "+best_bloque.beste+" "+best_bloque.platz+" " +best_bloque.nummer);
				if (c==0){ //pour la 1 apparition
						if (begin(3)!==-1){
							n = begin(3);
							console.log("1 début ");
						} else if (main_chain()==false && appear_hight_link()!==-1){
							n = appear_hight_link();
							console.log("1  main "+n);
						} else if (z>0) {
							n = free_apparitions[getRandom2(z)];
							console.log("1 free "+z);
						} else if (best_link.nummer>0){
								n = best_link.platz;
								console.log("1 link "+best_link.beste+" "+best_link.nummer);
						} else if (best_bloque.beste > 0){
							best_used = true;
							console.log("1 best_bloque");
							n = best_bloque.platz;
						} else if (kk > 0){
							console.log("1 appear_place_next");
							n = kk;
						} else n = getRandom2(k);
		board_comp[list_place[n]["abscisse"]][list_place[n]["ordonnée"]] = -1;	
		change_list(n);
		kk = appear_place_next();
		z = appear_free(k-1,kk);
		best_bloque = bloque_appartions(k-1);
		best_link = appear_link(k-1,kk);
				
				} else if (c==1){
 //pour la 2 apparition
						 nn = getRandom2(k-1);
		board_comp[list_place[nn]["abscisse"]][list_place[nn]["ordonnée"]] = -1;
		change_list(nn);
		kk = appear_place_next();
		z = appear_free(k-2,kk);
		best_bloque = bloque_appartions(k-2);
		best_link = appear_link(k-2,kk);
					
				} else if (c==2){
 //pour la 3 apparition
						nnn = getRandom2(k-2);
						board_comp[list_place[nnn]["abscisse"]][list_place[nnn]["ordonnée"]] = -1;
					}
		}
		console.log("les n "+n+" "+nn+" "+nnn);
		next_round = true;
        ini = ini + 1;
		compilation();
	} else {
		if (game_over()){
			show_number();
		} else if (draw_game()){
			setTimeout("message('Match nul!  Allez on rejoue !');", 3500);
		}
	}
}
}
function compilation(){
	const cy = count(1);
	const cc = count(-1);
	for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++){
			if ((board_comp[i][j]!==0)&&(board_comp[i][j] == - board_me[i][j])){
				if (cy> cc){
					board[i][j]= -1;
					draw(i, j, -2);
					setTimeout("draw(" + i+ "," + j + ",-1);", 500);
				} else if (cy< cc){
					board[i][j]= 1;
					draw(i, j, -2);
					setTimeout("draw(" + i+ "," + j + ",1);", 500);
				} else if (cy == cc){
					draw(i, j, -2);
					setTimeout("draw(" + i+ "," + j + ",1);", 500);
					setTimeout("draw3(" + i+ "," + j + ");", 900);
				}
				
			} else if ((board_comp[i][j] !== - board_me[i][j]) && (board_comp[i][j]==-1)){
				board[i][j]= -1;
				draw(i, j, -2);
				setTimeout("draw(" + i+ "," + j + ",-1);", 500);
			} else if ((board_comp[i][j] !== - board_me[i][j]) && (board_me[i][j]== 1)){
				board[i][j]= 1;
				draw(i, j, 1);
			}	
		}	
	}	
		for (var j = 0; j < 6; j++) {
					for (var i = 0; i < 6; i++) {
						if (board_me[i][j]==1){
							board_me[i][j]=0;
						}if (board_comp[i][j]==-1){
							board_comp[i][j]=0;
							
						}		
					} 
				}
		setTimeout("new_round();", 800);
		speed=true;
}

my_turn = true;
