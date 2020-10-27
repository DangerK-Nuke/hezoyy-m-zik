const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})  
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şuanda Çalan Bir Şarkı Yok!` }})
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: HezoyyHata, description: `<a:kumuz:763134316972081242>  |  Ses Seviyesini Ayarlayabilmek İçin Bir Rakam Girin.` }})
if (args > 500) return message.channel.send({embed: {color: HezoyyHata, description: `<a:ses:763057068839534613>  |  Ses Seviyesini Sadece \`0\` ile \`500\` Arasında Ayarlayabilirsiniz. `}})
if (args < 0) return message.channel.send({embed: {color: HezoyyHata, description: `<a:ses:763057068839534613>  |  Ses Seviyesini Sadece \`0\` ile \`500\` Arasında Ayarlayabilirsiniz. ` }})
client.player.setVolume(message.guild.id, sesseviyesi * 10);
message.channel.send({embed: {color: HezoyyDogru, description: `<a:kumuz:763134316972081242>  |  Yeni Ses Seviyesi : \`${args.join(" ")}\`` }})
}

module.exports.config = {
  name: "ses",
  aliases: ["ses-seviyesi","sound","sound-level"]
};
