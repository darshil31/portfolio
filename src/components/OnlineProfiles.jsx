"use client";

import { useEffect, useRef } from "react";
import "./styles/OnlineProfiles.css";

const OnlineProfiles = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const profiles = [
    {
      platform: "LeetCode",
      username: "darshil3",
      link: "https://leetcode.com/darshil3/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      stats: "Solved 500+ problems",
    },
    {
      platform: "Codeforces",
      username: "darshil31",
      link: "https://codeforces.com/profile/darshil31",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
      stats: "Participated in 20+ contests",
    },
    {
      platform: "CodeChef",
      username: "darshilgoti",
      link: "https://www.codechef.com/users/darshilgoti",
      logo: "https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png",
      stats: "3★ coder",
    },
    {
      platform: "GitHub",
      username: "darshil31",
      link: "https://github.com/darshil31",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      stats: "10+ repositories",
    },
    {
      platform: "LinkedIn",
      username: "darshilgoti",
      link: "https://linkedin.com/in/darshilgoti",
      logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      stats: "500+ connections",
    },
  ];

  return (
    <section id="profiles" className="online-profiles">
      <div className="container">
        <h2 className="section-title">Online Profiles</h2>
        <div className="profiles-grid fade-in" ref={sectionRef}>
          {profiles.map((profile, index) => (
            <a
              href={profile.link}
              className="profile-card card"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="profile-logo">
                <img
                  src={profile.logo || "/placeholder.svg"}
                  alt={profile.platform}
                />
              </div>
              <h3 className="profile-platform">{profile.platform}</h3>
              <div className="profile-username">@{profile.username}</div>
              <div className="profile-stats">{profile.stats}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfiles;
