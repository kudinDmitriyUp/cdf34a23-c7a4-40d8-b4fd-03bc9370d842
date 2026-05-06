import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import ProductRatingCards from '@/components/sections/product/ProductRatingCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
      <HeroBillboardBrand
      brand="Retro Coffee"
      description="Step back in time and savor the timeless taste of our expertly crafted coffee. More than just a drink, it's an experience."
      primaryButton={{
        text: "Explore Our Menu",
        href: "#features",
      }}
      secondaryButton={{
        text: "Visit Us",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/teen-boy-with-book-near-vintage-counter-cafe_23-2147860813.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutTextSplit
      title="Our Story: A Timeless Brew"
      descriptions={[
        "Retro Coffee began with a simple passion: to bring back the golden age of coffee. We believe in tradition, quality, and the comforting ritual of a perfectly brewed cup. Every bean tells a story, and ours is steeped in heritage.",
        "From carefully selected ethically sourced beans to our unique roasting profiles, we honor the craft. Our cozy shop provides a nostalgic escape where every visit feels like coming home. Join us for a taste of the past, brewed for today.",
      ]}
      primaryButton={{
        text: "Learn More",
        href: "#",
      }}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesTaggedCards
      tag="Our Offerings"
      title="A Menu Crafted with Care"
      description="Discover a delightful array of coffee, teas, and bites, all prepared with the Retro touch. Each item is designed to transport you to simpler, more flavorful times."
      items={[
        {
          tag: "Coffee",
          title: "Signature Espresso Blends",
          description: "Experience our rich, full-bodied espresso, a perfect base for all your favorite coffee drinks.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-iced-dalgona-coffee-fluffy-creamy-whipped-coffee_181624-28491.jpg",
        },
        {
          tag: "Bakes",
          title: "Freshly Baked Pastries",
          description: "Indulge in our selection of croissants, muffins, and cakes, baked fresh every morning.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chocolate-cake-with-blueberry-tarts-coffee_23-2148689765.jpg",
        },
        {
          tag: "Savory",
          title: "Gourmet Sandwiches",
          description: "Perfect for lunch or a light snack, our sandwiches are made with fresh, local ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-sandwiches-wooden-desk-grey_140725-30115.jpg",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductRatingCards
      tag="Take Home"
      title="Bring the Retro Experience Home"
      description="Enjoy our premium coffee beans and stylish merchandise from the comfort of your home."
      products={[
        {
          brand: "Retro Roasters",
          name: "Classic Dark Roast",
          price: "$18.00",
          rating: 5,
          reviewCount: "120 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/cloth-bag-with-coffee-beans_23-2148937260.jpg",
        },
        {
          brand: "Retro Roasters",
          name: "Bright Morning Blend",
          price: "$17.50",
          rating: 4.5,
          reviewCount: "85 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-coffee-maker-with-roasted-coffee-beans-black-background_23-2147908274.jpg",
        },
        {
          brand: "RetroWare",
          name: "Vintage Ceramic Mug",
          price: "$12.00",
          rating: 4.8,
          reviewCount: "60 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cups-wooden-boards-arrangement-high-angle_23-2149514269.jpg",
        },
        {
          brand: "RetroGear",
          name: "Travel Tumbler",
          price: "$25.00",
          rating: 4.7,
          reviewCount: "45 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-coffee-beans-powder_23-2148441176.jpg",
        },
        {
          brand: "Retro Roasters",
          name: "Ultimate Gift Set",
          price: "$50.00",
          rating: 4.9,
          reviewCount: "30 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cup-tea-with-presents-flowers-light-background-breakfast-ceremony-flavor-fruit-food-color-morning-flower_140725-159261.jpg",
        },
        {
          brand: "RetroGear",
          name: "Manual Coffee Grinder",
          price: "$35.00",
          rating: 4.6,
          reviewCount: "70 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-emty-teapot_140725-12902.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialRatingCards
      tag="What Our Guests Say"
      title="A Taste of Satisfaction"
      description="Hear from our beloved customers who have made Retro Coffee their favorite spot."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Regular Customer",
          quote: "Retro Coffee is my daily escape. The ambiance is perfect, and their lattes are simply the best in town!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-colleagues-work-break-time_23-2149308456.jpg",
        },
        {
          name: "Mark T.",
          role: "Local Artist",
          quote: "I love sketching here. The quiet corners and the amazing coffee make it my creative sanctuary.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-woman-using-smartphone-restaurant_23-2147830542.jpg",
        },
        {
          name: "Emily R.",
          role: "Food Blogger",
          quote: "The pastries are heavenly, and the coffee is always perfectly brewed. A truly delightful experience!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/humorous-talks-with-close-friends-dinner-hot-spring-day-cafe_8353-10001.jpg",
        },
        {
          name: "David L.",
          role: "Coffee Enthusiast",
          quote: "Their dedication to quality beans and brewing methods is evident in every cup. A must-visit for serious coffee lovers.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-hands-with-portafilter_23-2147775911.jpg",
        },
        {
          name: "Jessica M.",
          role: "Book Club Member",
          quote: "We always meet here for our book club. The cozy atmosphere and friendly staff make it ideal for gathering.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/japanese-woman-drinking-coffee-reading-from-notebook-restaurant_23-2149319434.jpg",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      tag="Need Help?"
      title="Your Questions, Answered."
      description="Find quick answers to common questions about our coffee, services, and policies."
      items={[
        {
          question: "What are your opening hours?",
          answer: "We are open Monday to Friday from 7 AM to 6 PM, and Saturday to Sunday from 8 AM to 5 PM.",
        },
        {
          question: "Do you offer vegan or gluten-free options?",
          answer: "Yes, we have a selection of delicious vegan and gluten-free pastries and milk alternatives available. Please ask our staff for today's options.",
        },
        {
          question: "Can I order online for pickup?",
          answer: "Currently, we only accept in-person orders. We are working on an online ordering system and hope to launch it soon!",
        },
        {
          question: "Do you offer loyalty programs or discounts?",
          answer: "Yes, join our Retro Rewards program to earn points with every purchase and receive exclusive discounts and freebies. Ask our barista to sign up today!",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-people-making-drip-coffee_53876-40996.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
      tag="Connect With Us"
      text="Visit Retro Coffee Today for an Unforgettable Experience!"
      primaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com/?q=Retro+Coffee+Shop",
      }}
      secondaryButton={{
        text: "Call Us",
        href: "tel:+1234567890",
      }}
    />
  </div>
    </>
  );
}
