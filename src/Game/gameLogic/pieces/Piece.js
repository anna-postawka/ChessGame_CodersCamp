// klasa abstrakcyjna - od niej będą dziedziczyć wszystkie inne figury
// Odpowiedzialność: zdefiniowanie wszystkich właściwości i metod, które dzielą figury 
// Wszystkie klasy z folderu Pieces to klasy logiczne - służą do obliczeń i wewnętrzenej mechaniki gry, nie do 
// wyświetlania, ani tworzenia interfejsu
class Piece {
    constructor(position, color, movementPoints, moveDirection) {
        //zamiast podawanej właściwości name, bedzie ona pobierana z właściwości konstruktora .name
        // np. const pionek = new Piece(x,y,z...) pionek.constructor.name

        //np. [2,5],[x=1,y=3],[x:3,y:1]...
        this._position = position;
        // np. black or white
        this._color = color;
        // kierunki w których może poruszać się pionek np. forwardOnly,diagonally,leftAndRight
        this._moveDirection = moveDirection;
        //o ile pól pionek może się poruszyć np. pawn ma 2, knight ma 1, rook ma 7
        this._movementPoints = movementPoints;
        // możliwe promocje
        this.possiblePromotion = ["queen", "rook", "bishop", "knight"];

        this.promoted = false;
    }
    get _position() {
        return this._position;
    }
    get color() {
        return this.color;
    }
    get _moveDirection() {
        return this._moveDirection;
    }
    get _movementPoints() {
        return this._movementPoints;
    }

    moveChess() {
        //metoda odpowiedzialna za poruszanie się pionka
    }

    checkMoveChess() {
        // metoda sprawdzająca czy dany ruch jest możliwy
    }

    pieceLoss() {
        // metoda wywoływana w momencie gdy nasz pionek został zbity
    }

}

export default Piece;