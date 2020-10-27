const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy= "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setImage(`https://i.ytimg.com/vi/${calan.id}/default.jpg?width=1920&height=1080`)
.setColor("#22BF41")
.setDescription(`<a:mzikal:763057353268002816>  |  Şu Anda Çalınan Şarkı :\n\`${calan.name}\``)
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
message.channel.send(calanembed)
};

module.exports.config = {
    name: "çalan",
    aliases: ["ringing","şuanda-çalan"]
};
