function Work() {
  const projects = [
    {
      client: "Fruity INC",
      category: "Services: Content Development · Brand Outreach & Partnerships · Business Operations",
      banner: "/images/fruity-banner.jpeg",
      description: "FruityINC came to us during a key growth phase, looking to transition from a creator-led project into a structured, pitch-ready business. Our role was to help professionalise both the brand’s outward presence and its internal operations.",
      results: [
        "Led brand outreach and partnership conversations to open commercial opportunities",
        "Supported business operations, helping streamline workflows and decision-making",
        "Built a full, pitch-ready deck to position FruityINC as a viable partner for brands and collaborators",
        "Evolved into a structured, pitchable business with clear messaging and professional assets designed for partnerships and growth"
      ],
      image: "https://images.pexels.com/photos/1581575/pexels-photo-1581575.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "FitLife Gym",
      category: "Instagram Growth",
      description: "Grew Instagram following from 2K to 45K in 6 months with engaging fitness content and community building.",
      results: [
        "2,150% increase in followers",
        "Average engagement rate: 8.5%",
        "Generated 150+ gym memberships"
      ],
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "TechStartup Co",
      category: "TikTok Management",
      description: "Created viral tech content strategy resulting in 5 videos hitting over 1M views each.",
      results: [
        "500K+ followers gained",
        "12M+ total video views",
        "350% increase in website traffic"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "Bloom Beauty",
      category: "Full Package",
      description: "Complete social media transformation across Instagram, TikTok, and YouTube for beauty brand.",
      results: [
        "Combined 200K+ followers",
        "Product launch reached 2M people",
        "500% ROI on social ads"
      ],
      image: "https://images.pexels.com/photos/3373730/pexels-photo-3373730.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "Chef Marco's Kitchen",
      category: "YouTube Channel",
      description: "Built YouTube cooking channel from scratch to 100K subscribers with weekly recipe content.",
      results: [
        "100K subscribers in 8 months",
        "3M+ monthly views",
        "Monetization achieved month 4"
      ],
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "Urban Threads",
      category: "Instagram & TikTok",
      description: "Fashion brand social media management with focus on Gen-Z audience and trending content.",
      results: [
        "Instagram: 75K followers",
        "TikTok: 120K followers",
        "Monthly sales up 400%"
      ],
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      client: "GreenEarth Sustainability",
      category: "LinkedIn Professional",
      description: "B2B content strategy establishing thought leadership in sustainability sector.",
      results: [
        "50K+ LinkedIn followers",
        "Generated 200+ B2B leads",
        "Speaking opportunities gained"
      ],
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="page-content">
      <div className="work-hero">
        <h1 className="work-title">Our Work</h1>
        <p className="work-subtitle">Real results for real clients. See how we've helped brands grow their social presence.</p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-card">
            {project.banner ? (
              <div className="work-banner">
                <img src={project.banner} alt={`${project.client} banner`} className="work-banner-image" />
              </div>
            ) : (
              <div className="work-image-container">
                <img src={project.image} alt={project.client} className="work-image" />
                <div className="work-overlay">
                  <span className="work-category">{project.category}</span>
                </div>
              </div>
            )}

            <div className="work-content">
              <h3 className="work-client">{project.client}</h3>
              <p className="work-description">{project.description}</p>
              <div className="work-results">
                <h4 className="results-title">Results:</h4>
                <ul className="results-list">
                  {project.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
