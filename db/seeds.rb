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
user2 = User.create(email: "snailirl@gmail.com", password: "snailirl", first_name: "Hugh", last_name: "Mannotsnail")
user3 = User.create(email: "memetichazard@gmail.com", password: "dankmemes", first_name: "Joe", last_name: "Schmo")
user4 = User.create(email: "lumberjack@gmail.com", password: "chopchop", first_name: "Unlucky", last_name: "Lumberjack")
user5 = User.create(email: "charles.s.bergman@gmail.com", password: "testing", first_name: "Chad", last_name: "Bergman")


question1 = Question.create(title: "You and a super intelligent snail both get 1 million dollars,
  and you both become immortal, however you die if the snail touches you.
  It always knows where you are and slowly crawls toward you. WHat's your plan?",
  description: "", author_id: user1.id)
question2 = Question.create(title: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  description: "Please answer quick he keeps throwing wood at me and it's starting to hurt.",
  author_id: user4.id)

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
answer2 = Answer.create(question_id: question2.id, author_id: user3.id,
  content: "All of it. All of the wood.")

comment1 = Comment.create(content: "Decoy snail.", commentable_id: answer1.id,
  commentable_type: "Answer", author_id: user3.id )
comment2 = Comment.create(content: "I do not know why I thought that information
would help my situation but thanks.", commentable_id: answer2.id, commentable_type: "Answer", author_id: user4.id )
