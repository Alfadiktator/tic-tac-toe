class TicTacToe {
    constructor() {
        this.field=[];
        this.symbol='x';
        for(var i=0;i<3;++i){
            this.field.push([null,null,null]);
        }
    }

    getCurrentPlayerSymbol() {
            return (this.symbol).toString();
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
        if((this.getWinner()!=null) || (this.isDraw()))
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
            for(var i=0;i<3;++i){
                for(var j=0;j<3;++j){
                    if(this.field[i][j]==null){
                        return false;
                    }
                }
            }
            return true;
    }

    isDraw() {
            if((this.noMoreTurns()==true )&& (this.getWinner()==null)){
                return true;
            }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
    getDraw(){
        var a=this.field;
        console.log();
        for(var i=0;i<3;i++){
            console.log(a[i][0]+' '+a[i][1]+' '+a[i][2]);
        }
        console.log();
    }
}
