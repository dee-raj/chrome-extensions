
async function getMatchData(){
   return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0")
      .then(data => data.json())
      .then(data =>{
         if (data.status != "success") {
            document.getElementById("matches").innerHTML = JSON.parse(data.info);
         };
         const matchList = data.data;
         console.log(matchList);
         if (!matchList) return [];

         const releventData = matchList.map(match => `${match.name}, ${match.status}`);
         console.log(releventData);

         document.getElementById("matches").innerHTML = releventData.map(m => `<li>${m} </li>`).join();
         return
      })
      .catch(e => console.log(e));
}
getMatchData()
