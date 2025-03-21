// Helper function to get random accent color
const getRandomAccent = () => {
  // Choose randomly between green and orange
  const colors = [
    'border-green-500 bg-green-50 text-green-700',  // Green accent
    'border-orange-500 bg-orange-50 text-orange-700' // Orange accent
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Blockquote Tailwind CSS classes with random accent
const blockquoteStyle = `p-4 my-4 border-l-4 rounded-r-lg ${getRandomAccent()}`;

const messageContent = {
    first_read: {
        card1: {
            type: 'html',
            size: [5, 3],
            html:`
                <div class="flex flex-col items-center justify-center">
                    <div class="w-full h-full text-center">
                        <h1 class="font-bold text-4xl text-green-600">Happy Anniversary!</h1>
                        <h2 class="text-2xl">I can't believe it's already been a year...</h2>
                    </div>
                    
                    <div class="p-2"></div>
                    
                    <div class="w-full">
                        <p class="text-lg text-justify indent-8">I hope that you decided to read this first, kahit na naglagay ako ng choices sa harap. I would like to preface everything by saying that this anniversary gift is in no way serious. I was thinking for a while on what to do and this is like the brightest idea I have. Still, I try to make this the best way I can-by compiling everything that I have in memory. I know it looks like minadali lang but I hope you appreciate the effort that I still put into this project. There will be times na dumaldal lang ako or I'm just spilling everything in my mind, but now that these all come from my heart. I love you.</p>
                        <p class="text-lg text-justify indent-8 pt-4">It's been a long year for us, but it still feels like I've only been with you for a while. We've had our disagreements (frequently) and we've had our major aways. I have always been glad that you chose to forgive me in situations where I have felt short. Thank you for choosing me again and again. I know that at times its hard but please don't give up on me agad. It's my first time, it's also yours and we know we both have growing up to do. Especially, maturing in relationships. I'll stand by you in your darkest moments, and I'll hope that you'll do the same. I'm sorry that I can't give you your ideal version of love but know that I'm trying my best.</p>
                        <p class="text-lg text-justify indent-8 pt-4">You know naman that I'm not one for giving gifts. I don't know how to give gifts effectively or from the heart. It's has always been my last resort in both receiving and giving when it comes to love languages. Honestly, I don't know why I'm not versed it giving out gifts. I just don't always know what to give nor what to say, and I always feel like my gift may never be enough for them. So I never bothered. But this time I'm bothering (BOTHERING?!) parang mali, pero yes, I am efforting. I'll try to be better this year, be active in social media, boast you to people, regularly take you on dates (if may money) and regularly give you gifts. This year, I'll pay attention, I'll do better. For you.</p>
                        <p class="text-lg text-justify pt-4">Happy Anniversary, my love.</p>
                    </div>

                </div>
            `
        },
    },
    bad_day: {
        card3: {
            type: 'html',
            size: [5, 1],
            html: `
                <blockquote class="${blockquoteStyle}">WHO DID THIS TO MY BABY?!</blockquote>
                <img src="https://i.pinimg.com/1200x/64/79/d0/6479d02399150cab5bfc74d7f98a6a55.jpg" alt="Angry" class="w-auto h-full rounded-lg">
                `
        },
        card2: {
            type: 'html',
            size: [6,2],
            html: `
                <h1 class="text-xl text-orange-500 pb-4"> Here's an orange cat video compilation. I hope it 'kinda' helps.</h1>
                <div class="relative h-full aspect-video">
                    <iframe 
                        src="https://www.youtube.com/embed/odnWQvT2MYM" 
                        title="Orange Cat Video Compilation" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen="true"
                        class="absolute top-0 left-0 w-full h-full rounded-lg"
                        style="border: 0;">
                    </iframe>
                </div>
                `
        },
        card1: {
            type: 'html',
            size: [1,1],
            html: `
                <h1 class="text-xl text-orange-500">I love you</h1>
                <p>Remember that I love you, no matter what. It's us against the world (your problems).</p>
            `
        },
        card4: {
            type: 'html',
            size: [3, 2],
            html: `
                <h1 class="text-xl text-green-600">It will be ok bb :(</h1>
                <p>I know it's probably painful now. But trust that this will only hurt for a while. It will end. In 3 months, or even weeks, we can look back and laugh at it. In years, we'd probably forget about it. Don't let this one bad day ruin yourself. Tomorrow is a new day, let's not be anchored to the past. Everyday we always have the chance to renew ourselves. I'm here for you if you need me.</p>
                <p class="pt-4">Here are some cute animals for you:</p>
                <div class="flex items-center overflow-auto">
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG93bHR4c24yeTJhZzJidWdrNTRlcG90czAydnpyMW1tNGFzODBibSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbhLF9VRbTHZLgwgz2/giphy.gif" alt="Dancing Ferret" class="h-full">
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVsMHh5aTVlbnU0YTcxeHVlNDVrMHlsOHEyaWZobWxwcGNjeDJoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif" alt="Dancing Raccoon" class="h-full">  
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3hxY3V0emtodGZhYjNkZmtvYzc2Ym91aGgzODl6MzVzM3BzOXVjZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uXQbPS73Y3qU/giphy.gif" alt="Dancing Raccoon" class="h-full"> 
                    <img src="https://media.giphy.com/media/uELtzAhhqpRKg/giphy.gif?cid=790b7611t8g6vuu8hebrfw43e1kzkehot06jti5kgeywq74z&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Dancing Raccoon" class="h-full">  
                    <img src="https://media.giphy.com/media/2kWd9w1PXcuLRPozyr/giphy.gif?cid=ecf05e47q9u0swy9so2gfcngxdy4yjxg1m3hzr0vq34ueyxm&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Dancing Raccoon" class="h-full">  
                </div>          `
        },
        card5: {
            type: 'html',
            size: [3, 1],	
            html: `
                <h1 class="text-2xl text-orange-500">Here are some things you can do:</h1>
                <ol class="list-decimal space-y-2 pl-6 pt-2">
                    <li class="hover:text-orange-600 transition-colors">Talk / rant to me. Let it out bb.</li>
                    <li class="hover:text-orange-600 transition-colors">Listen to some good music.</li>
                    <li class="hover:text-orange-600 transition-colors">Distract yourself with food!!</li>
                    <li class="hover:text-orange-600 transition-colors">Take a nap</li>
                    <li class="hover:text-orange-600 transition-colors">Cry, breathe and reset bb</li>
                    <li class="hover:text-orange-600 transition-colors">Watch a comfort series</li>
                    <li class="hover:text-orange-600 transition-colors">Take a walk / jog</li>
                </ol>
                <p class="pt-4">My personal favorite is <strong>taking a walk</strong>. It helps me reconnect us with nature. It's also calming. :) </p>
            `
        }
        
    },
    never_knew: {
		card1: {
			type: 'html',
			size: [1, 1],
			html: `
				<h1 class="text-xl text-orange-600">Nahihirapan ako magisip</h1>
				<p class='text-md'>
					Sa sobrang daldal ko di ko alam kung ano yung nasabi ko na tsaka di ko pa nasasabi. HUHUHUHUHUHUHU
				</p>
			`
		},
	    	card5: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-green-600">I Gambled.</h1>
				<p class='text-md pt-3 pb-3'>I feel guilty saying this just now, but after the mines thing where I lost 20 pesos, I tried doing blackjack. I won was great at it and my peak was 500 pesos. Then I lost it all (Net loss  was like 100 pesos). Then I tried the Perya Color Game with the bonus 20 pesos you have when you first log in. I peaked at 300 pesos. Then I lost it all. I'm so bad, I stopped na. I promise! I will tell you if I ever gamble again. I'm sorry. I love you.</p>
				<hr class="border-t-2 border-gray-300 my-4">
			`	
		},
	    	card2: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-orange-600">I Have Plenty of Unfinished Gifts for You.</h1>
				<p class='text-md pt-3 pb-3'>In the past year, I have started around 3 gifts that were supposed to be for you. I have not finished or made progress on a single one. They are all just hidden in my room, waiting for me to finish them. The problem is, I probably won't finish them, since the time to give them has already passed. One was for your birthday, another one for valentine's and the last one was this one. Still, I'll probably give you this one even if it's not yetfinished. I think It's because I'm really not good at giving gifts, especially when it's arts and crafts.</p>
				<hr class="border-t-2 border-gray-300 my-4">
			`
		},
	    	card3: {
			type: 'html',
			size: [6, 1],
			html: `
				<h1 class="text-xl text-green-600">Na-Guidance ako Nung Elementary</h1>
				<p class='text-md pt-3 pb-3'>
					Lagi ko namang sinasabi sayo na I was not a perfectly good kid. I was friends with the bullies and such. For the context of our story, we have this friend CJ, who, as I recall, might be autistic. This was grade 3. We were a gang of four. You have me, the smart one, L, the handsome one, K, the stupid one, and A, the charming one. Now, L decided to get CJ's pencil case. He went to the other side of the classroom and lured CJ there, then when CJ was near, he would throw the pencil case to K, then K to A, then A to me. So it's a game of catch. I was the last one to catch it, and CJ cried when the pencil case was in my hand. He gave up, the teacher came, saw me with the pencil case, and I was sent to the guidance office. I just sat there, and was scolded at. I said my sorries then I just proceeded with my day. CJ's mom was a lawyer, we all hated him and her. So I am still not regretting it.
				</p>
				<img src="https://images.pexels.com/photos/3777882/pexels-photo-3777882.jpeg" alt="Pencil Case" class="w-auto h-full rounded-lg object-cover">
			`
		},
	    	card4: {
			type: 'html',
			size: [4, 1],
			html: `
				<h1 class="text-xl text-orange-600">Guinaidance ko Sarili ko nung HS</h1>
				<p class='text-md pt-3 pb-3'>
					Long story short, tinanong ng teacher ko bakit wala akong libro. Sabi ko, Di niyo po sinabi na dalhin ngayon kasi minsan po di naman natin ginagamit. Ta's nagparinig siya sa klase na dapat daw laging may dalang libro. Sabi niya sa'kin mismo na ba't daw yung anak niya lahat ng libro laging dala. Sabi ko, without hesitation, 'di po ba kayo naaawa sa anak niyo?'. Pinalo ako ng katabi. Nagwalk-out yung teacher. problem is the teacher is the guidance counselor, so diretso ako don. Nag-sorry ta's umiyak.
				</p>
				<img src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Books" class="w-auto h-full rounded-lg object-cover">
			`
		},
	    	card6: {
			type: 'html',
			size: [1, 1],
			html: `
				<h1 class="text-xl text-green-600">Sorry naging Confessional</h1>
				<p class='text-md'>Sorry naging Confessional, wala na kong alam na di ko pa nasasabi sayo. Inabot ako 1 hour para magisip</p>
			`
		}
    },
    feel_lucky: {
		card1: {
			type: 'html',
			size: [1, 1],
			html: `
				<h1 class="text-xl text-orange-600">Ako Lucky to have you YIEEE</h1>
				<p class='text-md'>
					Try mo nga laruin lahat ng ma nakalagay dito. I hope you enjoy it. I love you. (Ipunin mo ang swerte, so be careful)
				</p>
			`
		},
	    	card2: {
			type: 'html',
			size: [5, 2],
			html: `
				<h1 class="text-xl text-green-600">Perya Color Game</h1>
				<p class='text-md'>
					Choose a color, and see what you get. Good luck!
				</p>
			`
		},
	    	card3: {
			type: 'html',
			size: [4, 1],
			html: `
				<h1 class="text-xl text-orange-600">Coin Flip</h1>
				<p class='text-md'>
					Heads or Tails? Choose one and see what you get. Good luck!
				</p>
			`
		},
    },
    finish_reading: {
	    card1: {
		    type: 'html',
		    size: [6, 3],
		    html: `
		    	<div class="flex flex-col items-center justify-center">
				<div class="w-full h-full text-center">
					<h1 class="font-bold text-4xl text-green-600">Yehey! Congratulations!</h1>
					<h2 class="text-2xl">I hope you didn't skip to the end. :(</h2>
				</div>
			</div>

			<div class="p-2"></div>

			<div class="w-full">
				<p class='text-lg text-justify indent-8 pt-4'>I am typing in class right now, naghahapit para matapos to. I don't even know if I could finish this but I am trying my best believe me. I hope you enjoyed this big surprise. I was hoping to start this a month before, but f***king thesis and acads and stuff. Sadyang hanggang dito lang natapos ko. I know you won't read every single one naman agad, and I trust that you really read them when the time comes. (Para more time for me to update hehehe) pero kidding aside, whenever you do read this message, I hope we're and especially you are doing fine.</p>

				<p class='text-lg text-justify indent-8 pt-4'>I am writing this at a time where you are really not doing well. I am hopeful that the future Zyka who is reading this is healthy and happy with the life she's chosen (ofc a life with me yieee). Ok, spoiler, ang immature ko pa at this time, sana naman the guy with you right now has grown so much and has only increased his love for you.</p> 

				<p class='text-lg text-justify indent-8 pt-4'>This is me speaking in the past, speaking in behalf of me in the future. I'm sorry for the things I have done wrong, and I hope we're at the time where you have forgiven me for them and we both have moved on. Thank you for being the best partner in the world. I could not possibly catch up with your efforts and imagination of what we could be. I hope that I am doing my part as well as you right now. I hope that we have learned to be more open and honest with each other. I hope you have learned to communicate your thoughts and feelings better than before and you are at such a wonderful place right now.</p>

				<p class='text-lg text-justify indent-8 pt-4'>Ok now this is me speaking in the past, for the past. It's been a wonderful year for us, and I hope that we have lasted many more years into your time. You were such an amazing person this year. I know that at the time of this writing you are not mentally well, but I still believe you have grown so much. I hope that you have learned to love yourself more and that you have learned to take care of yourself more. I hope that you have learned to be more patient and understanding with yourself.</p>

				<p class='text-lg text-justify indent-8 pt-4'>Lastly, I just wanted to say that I love you, and I will continue to love you for the rest of my life. Happy Anniversary, my love. May God, the universe, and the stars bless us with more years to come. I love you.</p>

				

			</div>

			
			</div>
		    `
	    },
    },
};

export default messageContent;
