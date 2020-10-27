const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send({embed: {color: HezoyyDogru, description: `<a:minikyanl:763031635532316694>  |  Döngü Deaktif Edildi...` }})
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send({embed: {color: HezoyyDogru, description: `<a:minikdoru:763031811906732112>  |  Döngü Aktif Edildi...` }})
    }
};

module.exports.config = {
    name: "döngü",
    aliases: ["loop"]
};
