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
                </div>
            `
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
    miss_me: "I miss you too. Here's something to remember me by...",
};

export default messageContent;