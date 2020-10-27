const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
message.channel.send({embed: {color: HezoyyDogru, description: `<a:mzikal:763057353268002816>  |  \`${sarki.name}\` Adlı Şarkı Devam Ettiriliyor.` }})
};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et","continuation"]
};