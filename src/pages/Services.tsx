function Services() {
  const services = [
    {
      title: "Instagram Growth",
      price: "$299",
      period: "/month",
      features: [
        "10-15 posts per month",
        "Daily story management",
        "Engagement optimization",
        "Hashtag research",
        "Analytics reporting",
        "Content calendar"
      ],
      popular: false
    },
    {
      title: "TikTok Management",
      price: "$399",
      period: "/month",
      features: [
        "15-20 videos per month",
        "Trending sound integration",
        "Viral content strategy",
        "Video editing",
        "Performance analytics",
        "Growth optimization"
      ],
      popular: true
    },
    {
      title: "Full Package",
      price: "$799",
      period: "/month",
      features: [
        "All platforms included",
        "30+ posts per month",
        "24/7 community management",
        "Paid ads management",
        "Influencer outreach",
        "Monthly strategy calls"
      ],
      popular: false
    },
    {
      title: "YouTube Channel",
      price: "$599",
      period: "/month",
      features: [
        "4-8 videos per month",
        "Full video production",
        "SEO optimization",
        "Thumbnail design",
        "Channel growth strategy",
        "Analytics & reporting"
      ],
      popular: false
    },
    {
      title: "Twitter/X Growth",
      price: "$249",
      period: "/month",
      features: [
        "Daily tweet management",
        "Thread creation",
        "Engagement strategy",
        "Community building",
        "Viral content creation",
        "Analytics tracking"
      ],
      popular: false
    },
    {
      title: "LinkedIn Professional",
      price: "$349",
      period: "/month",
      features: [
        "Professional content",
        "B2B networking",
        "Thought leadership posts",
        "Article writing",
        "Profile optimization",
        "Lead generation"
      ],
      popular: false
    }
  ];

  return (
    <div className="page-content">
      <div className="services-hero">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Choose the perfect package for your social media growth</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.popular ? 'popular' : ''}`}>
            {service.popular && <div className="popular-badge">Most Popular</div>}
            <h3 className="service-title">{service.title}</h3>
            <div className="service-price">
              <span className="price">{service.price}</span>
              <span className="period">{service.period}</span>
            </div>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="service-btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
