import { PartnersCard } from "../../Components/Partners/PartnersCard.jsx";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "It has started its journey at 1977 and expanded in diversified products in the last 47 years. The group is operating business in the sector of Float Glass, Polymer, Ceramic, Furniture, insulation and many more, The Group was established in the year 1977.",
      name: "Nasir Group",
      designation: "Nasir Group (NG) is one of the largest business conglomerates in Bangladesh",
      src: "https://i.ibb.co.com/yCrR5Fd/Nasir-group.png",
    },
    {
      quote:
        "PRAN RFL Group, one of the most reputed conglomerates in Bangladesh, is in market since 1981. It started mainly with Foundry business and gradually diversified to Light Engineering, PVC Fittings, Plastics, Food and Beverage and Agro-Processing. It has it's marketing and selling network in 145 countries as of date.",
      name: "Pran-RFL Group",
      designation: "PRAN RFL Group, one of the most reputed conglomerates in Bangladesh, is in market since 1981. It started mainly with Foundry business and gradually diversified to Light Engineering, PVC Fittings, Plastics, Food and Beverage and Agro-Processing. It has it's marketing and selling network in 145 countries as of date",
      src: 'https://i.ibb.co.com/svGWShSJ/Pran-RFL-group.jpg',
    },
    {
      quote:
        "Dong Bang Group of companies began with the establishment of Dong Bang Textiles Ltd., at Chittagong in 1997.Since then the group has expanded substantially to become one of the Largest group in Textile / Dyeing sector in Bangladesh with 14,000 employees",
      name: "Dong-Bang Group",
      designation: "Dong Bang Group of companies began with the establishment of Dong Bang Textiles Ltd., at Chittagong in 1997.Since then the group has expanded substantially to become one of the Largest group in Textile / Dyeing sector in Bangladesh with 14,000 employees",
      src: "https://i.ibb.co.com/C5dw7fFC/Dong-Bong-group.jpg",
    }
  ];
  return <PartnersCard testimonials={testimonials} />;
}
