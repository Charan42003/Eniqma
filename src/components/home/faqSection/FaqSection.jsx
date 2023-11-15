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
        title: "Is it a remote or an on-site Hackathon?",
        content: <p className="pl-3 text-primary">This year, we are only hosting an on-campus event, meaning it will be conducted in person rather than online.</p>,
    },
    {
        title: "What is the maximum and minimum number of particip...",
        content: <p className="pl-3 text-primary"> A group can have a minimum of 3 participants and a maximum of 5 participants. It is required to have at least one female participant in each group.</p>,
    },
    {
        title: "What do I pay to register for the event?",
        content: <p className="pl-3 text-primary">0, Nill, Nought, Cero, Nada. The East Point - Eniqma has no registration fee for all participants.</p>,
    },
    {
      title: "Will there be networking opportunities with industry professionals or sponsors?",
      content: <p className="pl-3 text-primary"> East Point Enigma aims to provide networking opportunities. Details about industry interactions or sponsor engagements will be shared closer to the event. </p>,
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