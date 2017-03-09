# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all
Comment.destroy_all

User.destroy_all
Question.destroy_all
Answer.destroy_all
Comment.destroy_all

user1 = User.create(email: "guest", password: "guestlog", first_name: "Anonymous", last_name: "Guest")
user2 = User.create(email: "snailirl@gmail.com", password: "snailirl", first_name: "Hugh", last_name: "Mannotsnail", avatar_url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Grapevinesnail_01.jpg")
user3 = User.create(email: "memetichazard@gmail.com", password: "dankmemes", first_name: "Joe", last_name: "Schmo", avatar_url: "http://www.snopes.com/app/uploads/2016/12/sad-keanu.jpg")
user4 = User.create(email: "lumberjack@gmail.com", password: "chopchop", first_name: "Unlucky", last_name: "Lumberjack", avatar_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Felling_axe.jpg/800px-Felling_axe.jpg")
user5 = User.create(email: "charles.s.bergman@gmail.com", password: "testing", first_name: "Chad", last_name: "Bergman", avatar_url: "https://www.facebook.com/photo.php?fbid=10203082254815554&l=c099019ef4")

topic1 = Topic.create(name: "Animal Attacks")

follow1 = Follow.create(user: user5, topic: topic1)


question1 = Question.create(title: "You and a super intelligent snail both get 1 million dollars,
  and you both become immortal, however you die if the snail touches you.
  It always knows where you are and slowly crawls toward you. WHat's your plan?",
  description: "", author_id: user1.id)
answer1 = Answer.create(question_id: question1.id, author_id: user2.id, content: "Ok, let's do this.
  First things first - That million dollars is practically worthless compared to immortality. Every dime of that cash can and should be spent ensuring that the snail never, ever reaches me.
  First things first, I keep an eye on him. It's tempting to want to hop on a plane or a train and get as far away as possible. But once I do that, he's gone and I'll never see him again until 3am on July 14th, 2072, when the sneaky little cuss slips in the door and slimes onto me before I ever wake up and notice him No, I'm going to be within visual distance of the snail, slowly moving away from it, until Snail Containment Plan Part A is done.
  Next I grab my phone. I call up someone I can trust with my life, and tell them to come to my location within the hour, and to bring a metal cash box, a good padlock, and a firearm. Once they arrive, I inform them of the deal and ask them to grab the snail, shove it into the metal box, and lock it up.
  Once the snail is temporarily secured, I ask my friend to carry around the box, never letting it out of their sight, and to prevent its opening with as much force as is required. We arrive at some reasonable figure for this service - Maybe $50,000.
  Now we can start in on the real work. I'm on the phone again, contracting with a tungsten machining service out of Willowbrook, IL. I ask them to construct for me a hollow tungsten sphere with a small, sealable opening, ideally via both exterior bolts and sintering. I ask them for a rush job and a thick wall depth, perhaps as much as a foot thick. The spherical shape should keep material costs as low as possible for a given thickness, but between the unusual object, large amount of tungsten, and speedy delivery, I invest a truly insane amount into this project - Let's say $100,000. I ask them to deliver it to my current location as fast as possible.
  Once the tungsten ball arrives, I have my friend stand well away from me and transfer the snail into the center of the sphere. I ask them to pour a little salt down into the hole after it, just to give the snail a little reminder of who he's dealing with. Once snail and salt are both inside, we seal the hollow sphere with the bolts.
  Tungsten is an amazing material. Incredibly tough, dense, and heat-resistant. You could drop it into molten lava and it wouldn't matter. Which, coincidentally, is almost what I'd like to do next.
  Now we make sure that damn thing stays shut. I find the nearest metal refinery and call them up. I also contract with a heavy machinery moving company to move the tungsten sphere to the refinery. Once the refinery has sintered the tungsten sphere shut, I buy an entire industrial crucible (those big buckets) of molten iron. And the crucible the iron came in. I have them drop the tungsten sphere into the molten iron, and let the whole mass cool in place. Mr. Snaily snail ain't going anywhere, but I'm probably down another $100,000.
  Now I'm on the phone to specialist movers. Chartering a boat. We're taking this thing halfway around the word. We take the boat right over the marianas trench - Not the deepest point, but deep enough - We push the whole assembly over the side. Literal tons of once-molten iron, refinery crucible, tungsten, salt, and snail slip over the side and begin dropping into the briny deep. Another $100,000 gone, but well worth the cost.
  Good. That's bought me a little breathing room. But we're not anywhere close to done yet. I still have at least $500,000 left. I'm going to invest it into solid business ventures and slow growing but secure assets. We're building a fortune - And who cares if it takes a few centuries? I'm frickin' immortal baby!
  But as I develop my fortune, it's getting invested into space. SpaceX, asteroid mining projects, whatever. I am trapped on the one planet in the entire universe where I can actually die, and I have no intention of staying there.
  Over the millennia, I slowly apply my fortune and influence to push mankind to the stars. And the moment living on another planet becomes viable, I'm there. And the instant a habitable planet is around another star? I'm on the first generation ship heading that direction.
  But I can't think in such a short sighted manner now. I'm immortal, and I need to think like it. Eventually, the sun is going to burn the earth to a crisp, and then that damn snail is going to be free. It might take him a few million years to land on something, but he'll do it eventually. And then he will construct a spacecraft and begin crawling towards me again.
  What I care about now is lightcones and black holes. Earth's gotta go. Sorry whatever's left of humanity. We evacuate anyone still on the old planet, and use a gravity tractor to push Earth into a black hole. A nice, big one so that hawking radiation will take an incredibly long time to evaporate it away into nothing.
  And then I board a ship. A fast ship. I accelerate to as close to lightspeed as I can get, piloting directly away from the black hole with the snail inside. I want to be so far away and moving so quickly that the heat death of the universe would occur far, far before the snail ever reaches me, even on the fastest ship his freakishly clever little brain can construct.
  So that's the way the universe ends. With nothing it in except for infrared heat, one hyperintelligent snail suspended in an inky void, and one human screaming away from it at .99C.
  Cheers.")
comment1 = Comment.create(content: "Decoy snail.", commentable_id: answer1.id,
  commentable_type: "Answer", author_id: user3.id )
answer5 = Answer.create(question_id: question1.id, author_id: user4.id,
  content: "Salt? Lots of salt?")

question2 = Question.create(title: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  description: "Please answer quick he keeps throwing wood at me and it's starting to hurt.",
  author_id: user4.id)
answer2 = Answer.create(question_id: question2.id, author_id: user3.id,
  content: "All of it. All of the wood.")
comment2 = Comment.create(content: "I do not know why I thought that information
  would help my situation but thanks.", commentable_id: answer2.id, commentable_type: "Answer", author_id: user4.id )



question3 = Question.create(title: "Do people like self-referential humor?",
  description: "Asking for a friend.",
  author_id: user5.id)
answer3 = Answer.create(question_id: question3.id, author_id: user4.id,
  content: "Nope. Self-referential humor is the lowest common denominator of comedy.
  Anyone who uses it thinking they're clever is an unfunny hack.")
comment3 = Comment.create(content: "My friend wants you to know that you're terrible.",
  commentable_id: answer3.id, commentable_type: "Answer", author_id: user5.id )

question4 = Question.create(title: "What if the entire continental US was on a decreasing slope from
West to East. How steep would the slope have to be to sustain the momentum needed to ride a bicycle the entire distance without pedaling?",
description: "", author_id: user5.id)
answer4 = Answer.create(question_id: question4.id, author_id: user2.id,
  content: "Too steep to actually build, sadly. But for the next best thing, I suggest a vacation to the Hawaiian island of Maui.
  I suspect this is the solution to many physics problems.
  First, the physics. Bikes coast downhill. On a long enough slope, a bike will reach a certain steady coasting speed. On a steep hill, their coasting speed will be faster, and on a gentle slope, they coast more slowly. If the slope is small enough, the bike will slow down and stop.
  I'm just gonna balance here until plate tectonics or something helps me out.
  The shallowest slope at which a bike will still roll steadily forward is determined by the bike's coefficient of rolling resistance. In fact, the formula for this minimum slope—measured in terms of vertical drop over horizontal distance—is incredibly simple:
  Minimum slope=Coefficient of rolling resistance
  Slope equals coefficient of friction[1] is a handy general rule in physics: The coefficient of friction between an object on a surface is just the shallowest slope at which the object slides.[2]
  Somehow, this makes me less nervous than seeing a glass sitting at the edge of a LEVEL table.
  For a nice bike under good conditions, the coefficient of rolling resistance can get as low as 0.002, or 1/500.[3] That means that to travel 500 miles horizontally, you'll need a vertical drop of at least 1 mile. To travel the roughly 2,500 miles from New York to LA, you'd need to start off at least 5 miles up, higher than North America's highest mountain. I suggest bringing oxygen tanks.
  In this scenario, where there's a giant slope stretching across the entire country, I'm somehow stuck wondering about the agency that maintains this sign. How many other signs are there? Do they send someone up the mountain to repair it every so often? Is driving from NY in a vehicle a cheaper way to access it than building an elevator to take them straight up from LA? So many questions!
  But be warned—the trip could take a while.
  A bike's rolling resistance mainly comes from the way the tire[4]​[5]​[6] deforms as it rolls, and it doesn't depend that much on how fast you're going. Air resistance, on the other hand, increases as you speed up, and under most conditions is the main drag force acting on a moving bike. To figure out how fast a bike will coast on a downhill slope, you need to calculate the point at which air resistance balances out the forward pull from gravity. At that point, the bike will stop accelerating. We can do that by using the formula for air resistance:
  Forward pull from gravity=Rolling resistance+Drag force
  mgsin(θ)=gcos(θ)Crm+12CdρAV2
  V=mgsin(θ)−gcos(θ)Crm12CdρA−−−−−−−−−−−−−−−−−−−−√
  (V is the speed of the bike, Cr and Cd are the coefficients of rolling resistance and air drag, θ is the slope angle, g is the acceleration of gravity, m is the mass of the bike and rider, A is the frontal area of the bike and rider, and ρ is the density of air.)
  For a very shallow slope of 0.2° or 0.3°, the bike would barely roll, and its top speed would be slower than a walking pace. You would need to add an extra few tenths of a degree to get the speed high enough to balance comfortably, and this would make the LA end of the slope even higher than the already implausible five miles.
  But still, bicycles are pretty impressive coasting machines.[7] Skis, which are pretty good at sliding, actually have a coefficient of friction about 10 times higher than a bike's rolling resistance.
  To ski from LA to New York, a skier would need to start off 10 times higher than a bike to make the same trip. Instead of the top of a mountain, they would need to start from near the edge of space. Not only is there no way to build a slope that tall, but ice isn't even stable at those low temperatures, so there'd be nothing to slide on.
  We could ski down the steep side.
  In practice, the longest horizontal distance you could travel on a bike with an ideal ramp is probably not more than a couple hundred miles, and that would require ideal conditions. In the real world, the longest such trip might[8] be the Haleakala downhill bike ride, which allows you to take a 35-mile trip from near the 10,000-foot summit all the way down to sea level with virtually no pedaling required.
  If you aim for the right spot along the coast, you can probably get quite a few feet BELOW sea level without pedaling, although swimming back up with the bike might be hard.
  (And if you can't make it to Maui yourself, you can at least enjoy the video search results for bicycle into water.)")
