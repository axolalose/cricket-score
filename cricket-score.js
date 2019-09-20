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
    function getTotal(){
        let total = 0;
        for(let cricket = 0; cricket < addedScore.length; cricket++){
            const winner = addedScore[cricket];
            if(action.type === type){
                total += winner.winnigTeam;
            }
        }

        return total;
    }
 
        function grandTotal (){
            
            return getTotal("scoring") + getTotal("wicketer") + getTotal("players"); 
        }



    return{
        addingScore,
        gettingScores,
        Added,
        getTotal,
        grandTotal
    }
}