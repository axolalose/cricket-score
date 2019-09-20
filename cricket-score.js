module.exports = function cricketScore(){
    let score;
    let wickets;
    let playersAvail;

    let addedScore = [];

    function addingScore(availScores){
        score =  Number(availScores.score);
        wickets =  Number(availScores.wickets);
        playersAvail = Number(availScores.playersAvail)
    }
    function gettingScores (){
        return{
            score,
            wickets,
            playersAvail
        };
    }

    function Added(winner){
        let winnigTeam = 0;

        if(winner === "scoring"){
            winnigTeam += 3;
        }else if(winner === "wicketer"){
            winnigTeam += 1;
        } else if( winner === "players"){
            winnigTeam += 10;
        }
        addedScore.push({
            type: winner,
            winnigTeam
        })

    }
    function getTotal(type){
        let total = 0;
        for(let cricket = 0; cricket < addedScore.length; cricket++){
            const winner = addedScore[cricket];
            if(winner.type === type){
                total += winner.winnigTeam;
            }
        }

        return total;
    }
 
        function grandTotal (){

            return getTotal("scoring") + getTotal("wicketer") + getTotal("players"); 
        }

        function seeScore(Score){
            var splitScore = Score.split(',');
            var total = 0;
             var wickets = 0; 
             var score = 0;
             var playersAvail = 0;
             for(let ball = 0; ball < addedScore.length; ball++){
                 const Score = addedScore[ball];
                 if(Score.wickets === 'scoreBoard'){
                   return 'W' + wickets;
                 }else if(Score.score === 'scoreBoard'){
                     return '1' + score;
                 }else(Score.playersAvail === 'scoreBoard')
                     return '1' + playersAvail;
                // else (Score.total === 'scoreBroad'){
                //     return "";
                //  }
             }

    
        }



    return{
        addingScore,
        gettingScores,
        Added,
        getTotal,
        grandTotal,
        seeScore
    }
}