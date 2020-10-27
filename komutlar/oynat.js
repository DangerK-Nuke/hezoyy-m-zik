const Discord = require("discord.js")
const fs = require("fs")
const Hezoyy = "PİNK";
const HezoyyDogru = "BLUE";
const HezoyyHata = "RED";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  **Bu Komutu Kullanabilmek İçin Bir Ses Kanalında Olmanız Gerekiyor.**` }})
if (!args[0]) return message.channel.send({embed: {color: HezoyyHata, description: `<a:minikyanl:763031635532316694>  |  Şarkı Oynatabilmek İçin Bir Şarkı Adı Girin.` }})  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
message.channel.send({embed: {color: HezoyyDogru, description: `<a:minikdoru:763031811906732112>  |  \`${sarki.name}\` Adlı Şarkı **Hezoyy** Listesine Eklendi.` }})
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
 message.channel.send({embed: {color: HezoyyDogru, description: `<a:mzikal:763057353268002816>  |  Şu Anda Çalınan Şarkı :\n\`${sarki.name}\`` }})
sarki.queue.on('end', () => {
message.channel.send({embed: {color: HezoyyHata, description: `<a:minikdoru:763031811906732112>  |  Kuyruktaki Tüm Şarkılar Oynatıldı, Hezoyy Ses Kanalından Ayrılıyor.` }})
    })
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal","play"]
};