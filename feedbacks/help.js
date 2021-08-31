const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')
  
exports.help = new MessageEmbed()
	.setColor('#48B5DF')
	.setTitle('List of commands')
  .setDescription('Prefix is `g!`. For extra help, type `help [category]`.')
	.setThumbnail(identity.thumbnail)
	.addFields(
    {
      name: 'Fun Commands',
      value: '`gabut`, `troll`, `quote`, `who`, `callMe`, `forgetMe`'
    },
    {
      name: 'Utility Commands',
      value: '`info`, `help`'
    },
    {
      name: 'Math Commands',
      value: '`eval`, `simplify`, `solve`, `latex`'
    }
	)
	.setFooter('More commands in the future!', 'https://cdn.mee6.xyz/guild-images/831008344696422441/f66b66bb5ac0a68c5f307a12f10c250cea0b85ed7dbf263f3a5549a9bd3bd34d.jpeg')