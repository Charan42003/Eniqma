import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const styles = {
  bgColor: 'transparent',
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: 'white',
  arrowColor: "white",
};

const config = {
  animate: true,
  arrowIcon: <i class="fa-solid fa-circle-chevron-up"></i>,
  tabFocus: true
};

const data = {
  title: "",
  rows: [
    {
      title: "Can I join East Point Enigma remotely, or is physical attendance mandatory?",
      content: <p className="pl-3 text-primary">East Point Enigma accommodates both on-site and remote participation. Details on how to engage virtually will be provided closer to the event.</p>,
    },
    {
      title: "Is there an age limit for participants?",
      content: <p className="pl-3 text-primary">East Point Enigma welcomes participants of all age groups. However, specific age-related eligibility criteria, if any, will be outlined in the participant guidelines.</p>,
    },
    {
      title: "What programming languages are accepted in East Point Enigma?",
      content: <p className="pl-3 text-primary">East Point Enigma is language-agnostic, allowing participants to code in their language of choice. The focus is on creativity and problem-solving.</p>,
    },
    {
      title: "Will there be pre-hackathon workshops or training sessions?",
      content: <p className="pl-3 text-primary">Details about any pre-event workshops or training sessions will be communicated to participants in advance to enhance their skills and preparedness.</p>,
    },
    {
      title: "How will East Point Enigma handle code plagiarism and intellectual property concerns?",
      content: <p className="pl-3 text-primary">East Point Enigma maintains strict policies against plagiarism. Guidelines on originality, code ownership, and intellectual property protection will be provided.</p>,
    },
    {
      title: "Can I participate if I'm not a student or professional in the technology field?",
      content: <p className="pl-3 text-primary">East Point Enigma is open to enthusiasts from all backgrounds. Whether you're a student, professional, or simply passionate about technology, you're welcome to join.</p>,
    },
    {
      title: "Are there opportunities for collaboration with other participants during the hackathon?",
      content: <p className="pl-3 text-primary">East Point Enigma encourages collaboration. Participants will have the chance to form teams and collaborate on projects during the event.</p>,
    },
    {
      title: "How can I stay informed about important announcements and updates?",
      content: <p className="pl-3 text-primary">Stay connected through our official communication channels, including email updates, social media platforms, and the East Point Enigma website for the latest information.</p>,
    },
    {
      title: "Will there be post-event resources or support for project development beyond the hackathon?",
      content: <p className="pl-3 text-primary">East Point Enigma aims to provide resources and support beyond the event. Details on post-hackathon opportunities will be shared during the closing ceremony.</p>,
    },
    {
      title: "How can I provide feedback or suggestions for improving future editions of East Point Enigma?",
      content: <p className="pl-3 text-primary">We value participant feedback. Share your insights through our feedback channels, accessible after the event, to contribute to the continuous improvement of East Point Enigma.</p>,
    },
  ],
};

function FaqSection() {
  return (
    <>
    <section className="py-20">
      <div className="container mx-auto flex flex-col justify-center items-center tracks-section-head">
        <h2 className="text-[18px] font-bold bg-gradient-to-[270deg] from-primary to-blue">FAQ's</h2>
      </div>
      <div className="px-[5%]">
        <Faq
          data={data}
          styles={styles}
          config={config}
        />
      </div>
    </section>
    </>
  )
}

export default FaqSection