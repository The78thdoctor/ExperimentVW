module.exports = (bot) => {
    bot.user.setActivity(`Controller of all Tardis Bots`, { type: "PLAYING", url: "https://www.twitch.tv/elarabots_discord" });
    var status = [
        `CONTROLLER OF ALL BOTS`
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        bot.user.setActivity(`${status[gameval]}`, { type: "PLAYING", url: "https://www.twitch.tv/elarabots_discord" });
    }, 10 * 1000);
}
// This is to set your bot's playing status it will randomize through the statuses
