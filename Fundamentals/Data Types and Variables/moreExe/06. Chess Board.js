function chessBoard(n){
    let board = `<div class="chessboard">\n`;
    let black = true;

    for(let i = 1; i <= n; i++){
        board += ` <div>\n`;
        for(let i2 = 1; i2 <= n; i2++){
            if(black = true){
                board += `  <span class="black"></span>\n`;
                black = false;
            }else if (black = false){
                board += `  <span class="white"></span>\n`;
                black = true;
            }
        }
        board += ` </div>\n`;
    }
    board += `</div>`;
    console.log(board);

}

chessBoard(3)