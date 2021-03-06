import type { ICommand } from '../../types/command';
import { MessageEmbed } from 'discord.js';
export const command: ICommand = {
    label: 'avatar',
    options: {
        guildOnly: false,
        adminOnly: false,
    },
    execute: () => (msg) => {
    	const target = msg.mentions.users.first() ?? msg.author;
    	const avatar = target.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' || 'gif' });
    	return new MessageEmbed()
    		.setAuthor(target.tag, avatar)
    		.setColor(msg.member ? msg.member.displayColor : 'RANDOM')
    		.setTitle(`Avatar pedido por ${msg.author.tag}`)
    		.setDescription([
    			`[Referencia](https://www.google.com/searchbyimage?image_url=${avatar})`,
    			`[Avatar URL](${avatar})`
    		])
			.setImage(avatar);
    }
};