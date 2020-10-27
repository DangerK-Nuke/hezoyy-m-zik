const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
const sarki = await client.player.skip(message.guild.id);
message.channel.send({embed: {color: HezoyyDogru, description: `<a:mzikal:763057353268002816>  |  Diğer Şarkıya Geçildi :\n\`${sarki.name}\`` }})
};

module.exports.config = {
    name: "atla",
    aliases: ["geç","skip"]
};
