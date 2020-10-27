const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>   |   **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>   |   Şuanda Çalan Bir Şarkı Yok!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '<a:mzikal:763057353268002816>   |   Şu Anda Çalınan Şarkı' : `\nKuyruk No: ${i}`} \n**Şarkı:** \`${song.name}\` \n**Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: HezoyyDogru, title: `<a:kumuz:763134316972081242>  | Slowex Müzik Kuyruğu`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: ["queue"]
};
