 const scene = {
 	entrance: {
 		name: "Entrance",
 		message: {
 			'1': "You've been running from something and find yourself lost and in front of some Godforsaken door in a tree..",
 			'2': "You light a torch, to see where you've found yourself...",
 			'3': "A massive door stands before you. Like something out of a horror story, a set of hollow sockets glow red from the skull-shaped keystone above the door. They seem to be watching you.",
 			'4': "The door, fortified with steel bars, has a ring pull and a keyhole."

 		},
 		door: function() {
 			console.log("this is a door.")
 		}
 	},

 	entryWay: {
 		name: "The Entryway",
 		message: {
 			'1': "When you walk in, you are greeted by the smell of death.",
 			'2': "The light of your torch feels like it's being constrained. It's almost like the darkness is trying to crush you under it's weight. It would be a good idea to to always keep a torch lit, lest you test your fate."
 		}
 	},

 	smallGarden: {
 		name: "Small Garden",
 		message: {
 			'1': "Once you open the door, you are greeted by a small garden with a fountain and a well."
 		}
 	}


}