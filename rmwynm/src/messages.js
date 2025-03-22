import SlideShow from './components/SlideShow.js';

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
	miss_me: {
		card1: {
			type: 'html',
			size: [5, 1],
			html: `
				<h1 class="text-xl text-orange-600">I miss you too baby</h1>
				<p class='text-md pb-3'>I hope you're doing ok. Know that I'm just a call away. I will be here in spirit. 👻👻👻 I love youuuu</p>
				<img src="https://i.imgur.com/SGRnQke.jpeg" alt="Flowers" class="w-auto h-full rounded-lg object-cover">
			`
		},
		card2: {
			type: 'html',
			size: [5, 1],
			html: `
				<img src="https://images.pexels.com/photos/29752597/pexels-photo-29752597/free-photo-of-bright-orange-sulfur-cosmos-in-blooming-field.jpeg" alt="Voice Recording" class="w-auto h-full rounded-lg object-cover pb-3">
				<h1 class="text-xl text-green-600">Balik ka na dito :(</h1>
				<p class='text-md pt-3 pb-3'>Gusto na kita ulet makita. I miss you so much. namimiss ko na:</p>
				<ol class="list-decimal space-y-2 pl-6 pt-2">
					<li class="hover:text-green-700 transition-colors">yakap mong mahigpit</li>
					<li class="hover:text-green-700 transition-colors">tawa mong nakababasag pinggan</li>
					<li class="hover:text-green-700 transition-colors">ngiti mong nakakasilaw</li>
					<li class="hover:text-green-700 transition-colors">mata mong nakahahalina</li>
					<li class="hover:text-green-700 transition-colors">lammona yung other two.👀👀👀</li>
					<li class="hover:text-green-700 transition-colors">cuddows</li>
					<li class="hover:text-green-700 transition-colors">kissies</li>
					<li class="hover:text-green-700 transition-colors">amoy mong nakakabaliw</li>
					<li class="hover:text-green-700 transition-colors">kamay mong manipis</li>
					<li class="hover:text-green-700 transition-colors">buhok mong masarap kainin :></li>
				</ol>
				<p class="pt-4">Kala mo ikaw lang nakakamiss?! hmph. Ako rin :( all the time na wala ka</p>
				`
		},
		card3: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-orange-600">Find me in these memories</h1>
				<p class='text-md pt-3 pb-3'>I made a collage of pictures of us. Find me in these memories. I hope you enjoy looking at them. I miss you so much. I love you. 😘😘😘</p>
				<img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg" alt="Collage" class="w-auto h-full rounded-lg object-cover">
				`
		},
		card4: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-green-600">Our Map</h1>
				<p class='text-md pt-3 pb-3'>I made a map of all the places we've been together. I hope you enjoy looking at them. I miss you so much. I love you. 😘😘😘</p>
		
				<img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg" alt="Map" class="w-auto h-full rounded-lg object-cover">
				`
		},
		card5: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-orange-600">I made a doodle</h1>
				<p class='text-md pt
				-3 pb-3'>I made a doodle of something that reminds me of you. I hope you enjoy looking at it. I miss you so much. I love you. 😘😘😘<
			</p>
			<img src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg" alt="Doodle" class="w-auto h-full rounded-lg object-cover">
			`
		},	
	},
	need_laugh: 
	{
		card1: {
			type: 'html',
			size: [1, 1],
			html: 
			`
				<h1 class="text-xl text-orange-600">Shucks, di ako magaling magpatawa</h1>
				<p class='text-md'>hehehe kukuha nalang ako sa iba and I'll try to remember funny stuff. Sana matawa ka kahit di talaga huhuhuhuhuhu</p>
			`
		},
		card2: {
			type: 'html',
			size: [1, 1],
			html: 
			`
				<h1 class="text-xl text-green-600">SINO NAGDELETE</h1>
				<p>I was gonna put quotes from the time na nilandi kita sa gdocs. PERO DELETED NA RAW?! WTF?! that would've been funny.</p>
			`
		},
		card4: {
			type: 'component',
			size: [4, 2],
			title: 'Our First Date without Context',
			component: SlideShow,
			props: {
				photos: [
					"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d2f553d-c1cc-4e00-9c32-56d6a842f4b0_706x437.jpeg",
					"https://i.ytimg.com/vi/kh6qOG9KfOY/maxresdefault.jpg",
					"https://64.media.tumblr.com/dc7c8f66d80dd18c19b09b8fb92aac04/682eec13776ef06f-39/s540x810/2a92b320b89255721958619c066edf2de74a1da6.jpg",
					"https://c4.wallpaperflare.com/wallpaper/94/797/206/kimi-no-na-wa-comet-makoto-shinkai-starry-night-wallpaper-preview.jpg",
					"https://i.ytimg.com/vi/T1nNUOMS14g/maxresdefault.jpg",
					"https://media1.tenor.com/m/0d_jnGKQdEkAAAAC/eric-andre-let-me-out.gif",
					"https://i.ytimg.com/vi/yD8BE4LkVBg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLByHQScIgCgegomQwMlSBE688fucw",
					"https://i.ytimg.com/vi/pO_4Ko1-X6Q/maxresdefault.jpg",
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWnFsV5-k1WJNhtx6YosAOcg_XThqQENoCg&s",
					"https://img.freepik.com/premium-photo/man-walking-empty-road-middle-desert_856987-564.jpg",
					"https://y.yarn.co/7e292cec-b1a9-4763-9286-47c35a6bf996_text.gif",
				],
				objectFit: 'contain',
			}
		},
		card3: {
			type: 'html',
			size: [5, 1],
			html: `
				<h1 class="text-xl text-orange-600">Some inside jokes I remember</h1>
				<p class='text-md pt-3 pb-3'>Here's a list of inside jokes that I remember. Sorry na kung may nakalimutan.</p>
				<ol class="list-decimal space-y-2 pl-6 pt-2">
					<li class="hover:text-orange-600 transition-colors">Yung time na umamin ka 'implicitly' t'as sinabi ko na lang na "I like you too" kasi nakakahiya naman sayo</p>
					<li class="hover:text-orange-600 transition-colors">Yung time na muntik na tayo maligaw sa Pedro Gil, kahit alam ko naman nasaan yung jeep, tas sinisi mo saken</p>
					<li class="hover:text-orange-600 transition-colors">200 pesos per head. Yun lang.</p>
					<li class="hover:text-orange-600 transition-colors">Isa pa? Glutinous Rice</p>
					<li class="hover:text-orange-600 transition-colors">Yung natalo mo ko sa bowling :<</p>
					<li class="hover:text-orange-600 transition-colors">Yung sinigawan ko yung tricycle after nang mahabang paglalakad after Pride March</p>
					<li class="hover:text-orange-600 transition-colors">Yung pinagtripan ko si Jan sa ARSA Fest kasi badtrip ako sa kanya</p>
					<li class="hover:text-orange-600 transition-colors">Yung mga time na sobrang inaantok na ko, ta's I was in the middle of dreaming and talking to you</p>
					<li class="hover:text-orange-600 transition-colors">Eto recent, yung binasa mo kama ko tas nabasag mo yung baso (tho di nakakatawa nangyari after)</p>
					<li class="hover:text-orange-600 transition-colors">Yung nag-order tayo ng isang bucket ng chicken pero 2 lang natapos naten</p>
					<li class="hover:text-orange-600 transition-colors">Yung time na nagbake tayo tas maling-mali tas I was panicking kasi baka makita ni mama</p>
					<li class="hover:text-orange-600 transition-colors">Yung lasing na lasing tayo sa jazz bar</p>
			`
		},
		card5: {
			type: 'html',
			size: [4, 3],
			html: `
				<h1 class="text-2xl text-green-600 pb-4">Here are two videos side-by-side na baka magustuhan mo</h1>
				<div class="flex flex-row space-x-4">
					<div class="relative w-1/2 aspect-video">
						<iframe 
							src="https://www.youtube.com/embed/gVPQrUNpsB0" 
							title="Filipino core" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen="true"
							class="absolute top-0 left-0 w-full h-full rounded-lg"
							style="border: 0;">
						</iframe>
					</div>
					<div class="relative w-1/2 aspect-video">
						<iframe 
							src="https://www.youtube.com/embed/r9IWsM8MRrE" 
							title="PH
Filipino Core and Mentality Compilation (Try Not to Laugh) " 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen="true"
							class="absolute top-0 left-0 w-full h-full rounded-lg"
							style="border: 0;">
						</iframe>
					</div>
				</div>
			`
		}
	},
	feel_insecure: {
		card1: {
			type: 'html',
			size: [1, 1],
			html: `
				<h1 class="text-xl text-orange-600">Baby, You are the most beautiful person in the world.</h1>
				<p class='text-md'>In my eyes, you are the best person in the world. In a world that's full of hate, you're kindness shines the brightest. You don't have to change anything about yourself. You are perfect the way you are. I love you.</p>
			`
		},
		card2: {
			type: 'html',
			size: [5, 1],
			html: `
				<img src="https://images.pexels.com/photos/28916640/pexels-photo-28916640/free-photo-of-vibrant-autumn-leaves-in-a-lush-forest.jpeg" alt="Autumn Leaves" class="w-auto h-full rounded-lg object-cover pb-3">
				<h1 class="text-xl text-green-600">Here are 10 (non-physical) things I love about you:</h1>
				<ol class="list-disc space-y-2 pl-6 pt-2">
					<li class="hover:text-green-700 transition-colors">Your unbreaking kindness to those around you</li>
					<li class="hover:text-green-700 transition-colors">Your emotional intelligence that rivals mine</li>
					<li class="hover:text-green-700 transition-colors">Your empathy to all aspects, to the point that I can't say something assertive, without a counter-argument (I love it)</li>
					<li class="hover:text-green-700 transition-colors">Your self awareness that I can't even fathom, this is why I'm very interested to enter your mind</li>
					<li class="hover:text-green-700 transition-colors">Your self-sacrifice for the people you love, even if it means you'll have to pretend not to be hurt just to make them happy</li>
					<li class="hover:text-green-700 transition-colors">Your unnatural sense of humor that I can't even understand at times, but I love it</li>
					<li class="hover:text-green-700 transition-colors">Your unwavering motivation to experience new things, even if it means you'll have to do it alone</li>
					<li class="hover:text-green-700 transition-colors">Speaking of, your bravery to do things alone. I have done that only like once or twice</li>
					<li class="hover:text-green-700 transition-colors">Your patience and understanding to me, even if I'm not the best person to be with at times</li>
					<li class="hover:text-green-700 transition-colors">You wear your heart on your sleeve, being vulnerable to me, even if its difficult to you</li>
			`
		},
		card3: {
			type: 'html',
			size: [6, 1],
			html: `
				<h1 class="text-xl text-orange-600">You've overcome this before.</h1>
				<p class='text-md pt-3'>I may have not been with you for long to know every struggle you've been through, but I know that you've been through a lot of things before. And You're here right now, You've overcome them all. You are strong. You are brave. You are resilient. You are loved. You are enough. I love you.</p>
				<blockquote class="${blockquoteStyle}">Lagi nilang sinasabi na <strong>Malayo na, Malayo pa.</strong> pero, tandaan natin na maaaring <i>Malayo pa</i> ang kailangang tahakin, <i>Malayo na</i> ang ating narating. Kaya pahinga bb.</blockquote>
				<p class="pb-3">Here's a photo of us at one of our best moments. I love every version of you.</p>
				<img src="https://i.imgur.com/3oWoorc.jpeg" alt="Autumn Leaves" class="w-auto h-full rounded-lg object-cover object-top">
			`
		},
		card4: {
			type: 'html',
			size: [5, 1],
			html: `
				<h1 class="text-xl text-green-600">You have always been enough.</h1>
				<p class='text-md pt-3 pb-3'>You have always been enough. You have always been enough for me. You have always been enough for the people around you. You have always been enough for yourself. You have always been enough for the world. You are enough.</p>
				<img src="https://cdnb.artstation.com/p/assets/images/images/023/090/969/large/nicolai-maybituin-d3.jpg?1578053679" alt="Autumn Leaves" class="w-auto h-full rounded-lg object-cover">
				<blockquote class="${blockquoteStyle}">You have always made me feel loved. At times, I feel like I don't deserve your patience and understanding, but you give it to me all the same. I love you. You are loved. </blockquote>
				<p class='text-md'>From my heart, there is no one else I would rather be with. To me, you are everything. I love you for who you are, for who you were, and for who you will be. All the quirks, all the flaws, all the imperfections, I love them all. Pipiliin kita sa araw-araw I love you not for what you do for me, or what you make me feel. I love you for the you you are. you are my favorite person in the world, and I am grateful to have you in my life.</p>
			`
		},
		card5: {
			type: 'html',
			size: [1, 1],
			html: `
				<h1 class="text-xl text-orange-600">Repeat this to yourself:</h1>
				<p class='text-md'>I am enough. I am loved. I am strong. I am brave. I am resilient. I am beautiful. I am kind. I am smart. I am worthy
				`
		}
	},
	feel_lonely: {
		/*
			A story about a time you felt lonely and how they helped you through it.
			A playlist of songs that remind you of them, with a note like "I’m always with you in these melodies."
			A photo of something that symbolizes your connection, like a matching item or a place you both love.
		*/
		card1: {
			type: 'html',
			size: [3, 1],
			html: `
				<h1 class="text-xl text-orange-600">I'm sending you a virtual hug!</h1>
				<p class='text-md pb-3'>I hope you feel it and feel less lonely. I love you.</p>
				<img src="https://i.imgur.com/Cyfv498.gif" alt="Virtual Hug" class="w-auto h-full rounded-lg object-cover">
			`
		},
		card2: {
			type: 'html',
			size: [4, 1],
			html: `
				<img src='https://images.pexels.com/photos/24461780/pexels-photo-24461780/free-photo-of-orange-tulips-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Orange Tulips' class='w-auto h-full rounded-lg object-cover pb-3'>
				<h1 class="text-xl text-green-600">Here are some ways you can reach out to me or others:</h1>
				<ol class="list-decimal space-y-2 pl-6 pt-2">
					<li class="hover:text-green-700 transition-colors">Talk to me. Call me. Anything. I'm always here for you. We can meet up</li>
					<li class="hover:text-green-700 transition-colors">Talk to your friends. They're always there for you (I hope).</li>
					<li class="hover:text-green-700 transition-colors">Volunteer somewhere. You've had some experience, and kudos to you for that. Volunteering is a great way to meet new people and make new friends.</li>
					<li class="hover:text-green-700 transition-colors">Join a workshop, event, class, or club. You can learn WHILE meeting new people!!</li>
					<li class="hover:text-green-700 transition-colors"><strong>(PERSONAL FAVORITE)</strong> Go for a walk, visit a park, sit outside and people watch. It's a great way to be around people without having to interact with them.</li>
					`
		},
		card3: {
			type: 'html',
			size: [3, 1],
			html: `
				<div class="relative border-2 border-dashed border-orange-500 bg-white text-black p-4 rounded-md w-full h-full overflow-hidden">
					<!-- Coupon Header -->
					<div class="absolute -top-4 -right-4 bg-green-600 text-white text-xs px-4 py-1 rotate-12 shadow-md z-10">
						VALID FOREVER
					</div>
					
					<!-- Scissors Icon -->
					<div class="absolute top-2 left-2 text-orange-500">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
						</svg>
					</div>
					
					<!-- Coupon Title -->
					<h1 class="text-center font-bold text-xl text-green-700 mb-2 mt-4">PROMISE COUPON</h1>
					
					<!-- Coupon Content -->
					<div class="text-center mb-3">
						<p class="text-md font-semibold mb-3">This coupon entitles the bearer to:</p>
						<p class="text-xl font-bold text-orange-600 mb-3">My Promise to Always Be There</p>
						<p class="text-sm italic mb-4">No matter the time, place, or circumstance</p>
						
						<div class="border-t border-b border-gray-300 py-2 my-3">
						<p class="text-sm">I promise to be your shoulder to cry on, your hand to hold, and your person to call whenever you need me. Distance may separate us physically, but I'm always just one call away. You are never truly alone as long as I'm alive.</p>
						</div>
					</div>
					
					<!-- Coupon Footer -->
					<div class="flex justify-between items-center mt-2">
						<div class="text-xs text-gray-500">
						<p>No Expiration Date</p>
						<p>Cannot be transferred</p>
						</div>
						
						<div class="border-b border-black w-24">
						<p class="text-center text-xs mt-1">Joaquin Alvarez</p>
						</div>
					</div>
					
					<!-- Corner Decorations -->
					<div class="absolute bottom-2 right-2 text-green-700">❤️</div>
				</div>
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
