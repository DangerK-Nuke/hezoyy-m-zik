const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE"
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
client.player.stop(message.guild.id);
message.channel.send({embed: {color: HezoyyDogru, description: `<a:minikyanl:763031635532316694>  |  Şarkı İstemediğinizden Dolayı Hezoyy Ses Kanalından Ayrıldı.` }})
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur","stop"]
};
