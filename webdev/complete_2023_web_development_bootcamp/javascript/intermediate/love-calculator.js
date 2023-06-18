function calculateLove(name1, name2){
    const score =  Math.floor((Math.random()*100) + 1)
    if (score > 70){
        console.log("Your love score is " + score + "%.\nYou love each other like Kanye loves Kanye.");
    }else if (score > 30){
        console.log("Your love score is " + score + "%.");
    }else{
        console.log("Your love score is " + score + "%.\nYou go together like oil and water.");
    }
}

calculateLove("eu", "tu");

