class TicTacToe {
    constructor() {
        this.field=[];
        this.symbol='x';
        for(var i=0;i<3;++i){
            this.field.push([]);
        }
    }

    getCurrentPlayerSymbol() {
            return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.field[rowIndex][columnIndex]=this.symbol;
        if(this.symbol=='x'){
            this.symbol='o';
        }
        else{
            this.symbol='x';
        }
    }

    isFinished() {
        if(getWinner()!=null || isDraw())
            return true;
        return false;
    }

    getWinner() {
        var a=this.field;
        for(var i=0;i<3;++i){
            if(a[i][0]==a[i][1] && a[i][1]==a[i][2]){
                return a[i][0];
            }
            if(a[0][i]==a[1][i] && a[1][i]==a[2][i]){
                return a[i][0];
            }
        }
        if(a[0][0]==a[1][1] && a[1][1]==a[2][2]){
            return a[0][0];
        }
        if(a[0][2]==a[1][1] && a[1][1]==a[2][0]){
            return a[1][1];
        }
        return null;
    }

    noMoreTurns() {
            var i=1;
            for(var i=0;i<3;++i){
                for(var j=0;j<3;++j){
                    if(this.field[i][j]==null){
                        i=0;
                    }
                }
            }
        if(i==1){
            return true;
        }
        return false;
    }

    isDraw() {
            if(noMoreTurns()==false && getWinner()==null)
                return true;
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
