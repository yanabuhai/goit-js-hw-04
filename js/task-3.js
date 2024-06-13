const profile = {
  username: "Jacob",
  playTime: 300,

    changeUsername(newName) {
        for (const user of this.username) {
            if (user.name === username) {
                user.name = newName;
            }
        },
    }   
    updatePlayTime(hours){
            this.hours.push.playTime;
        }
     getInfo() {
         return `${Username} has ${amount} active hours!`;
     }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"