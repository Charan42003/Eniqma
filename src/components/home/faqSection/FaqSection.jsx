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
        title: "Lorem ipsum dolor sit amet,",
        content: <p className="pl-3 text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean  velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.</p>,
    },
    {
        title: "Nunc maximus, magna at ultricies elementum",
        content: <p className="pl-3 text-primary"> Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor. </p>,
    },
    {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: <p className="pl-3 text-primary">Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
         sed massa euismod dignissim. </p>,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: <p className="pl-3 text-primary"> Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor. </p>,
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