// Constructor to display an underlying character or blank - whether the user guessed the correct letter.
var letter = function(character) {
    this.character = character;
    this.guessed = false;

    this.toString = function() {
        return this.guessed ? this.character: '_';
    }

    this.makeGuess = function(newGuess) {
        if (this.character.toLowerCase() === newGuess.toLowerCase()){
            this.guessed = true;
        }
    }


}

module.exports = Letter;