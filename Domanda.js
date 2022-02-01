    if (message.content == "w.coffee") {
        var embed = new Discord.MessageEmbed()


            .setTitle("Ordinato con successo!")
        var messaggi = [" ordinato il suo caffè quotidiano", " per te un caffè offerto dalla casa!", " ha deciso di rendere la sua giornata migliore con un buon caffè", " eccoti servito un caffè di cortesia"]
        var random = Math.floor(Math.random() * messaggi.length)            
            .setDescription(message.author.toString() + messaggi[random])
            .setThumbnail("https://caffemotta.com/wp-content/uploads/2020/06/tazza-caffe.png")
            .setColor("#b57412")
            .setTimestamp()
            .setImage("https://cdn.discordapp.com/attachments/785885207693361183/937992978377617408/bar-feelre.gif")

        message.channel.send({ embeds: [embed] })
    }