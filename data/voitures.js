/**
 * SIMPLICICAR ÉVREUX — data/voitures.js
 * Mis à jour le 03/04/2026 — 36 véhicules
 */

const CARS = [
  {
    brand: "Peugeot", model: "3008", year: 2020,
    version: "1.2 Puretech 130ch SS EAT6 Allure",
    km: "NC", price: "10 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-001",
    img: "https://www.simplicicar.com/10631231-large_default/peugeot-3008-12-puretech-130ch-ss-eat6-allure-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Volkswagen", model: "Tiguan", year: 2020,
    version: "2.0 TDI 150 DSG7 Carat Exclusive",
    km: "NC", price: "29 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-002",
    img: "https://www.simplicicar.com/10587247-large_default/volkswagen-tiguan-20-tdi-150-dsg7-carat-exclusive-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mini", model: "Hatch 5P", year: 2020,
    version: "One 102ch Edition Blackfriars",
    km: "NC", price: "13 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-003",
    img: "https://www.simplicicar.com/10586614-large_default/mini-hatch-5-portes-one-102-ch-edition-blackfriars-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Renault", model: "Kadjar", year: 2020,
    version: "dCi 110 Energy Zen",
    km: "NC", price: "10 480 \u20ac",
    energy: "Diesel", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-004",
    img: "https://www.simplicicar.com/10584750-large_default/renault-kadjar-dci-110-energy-ecosup2-zen-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "BMW", model: "S\u00e9rie 1 F20", year: 2020,
    version: "116i 136ch Lounge",
    km: "NC", price: "9 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-005",
    img: "https://www.simplicicar.com/10577795-large_default/bmw-serie-1-f20-116i-136-ch-lounge.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "BMW", model: "S\u00e9rie 2 Coup\u00e9 F22", year: 2020,
    version: "M235i 326ch",
    km: "NC", price: "32 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-006",
    img: "https://www.simplicicar.com/10580168-large_default/bmw-serie-2-coupe-f22-m235i-326-ch-garantie-12-mois.jpg",
    features: ["M235i", "Garantie 12 mois"],
    hi: ["M235i"]
  },
  {
    brand: "Porsche", model: "911 GT3", year: 2020,
    version: "4.0i RS PDK \u2014 Entretien Porsche",
    km: "NC", price: "179 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-007",
    img: "https://www.simplicicar.com/10546529-large_default/porsche-911-gt3-40i-rs-pdk-entretien-porsche-garantie-12-mois.jpg",
    features: ["GT3", "Garantie 12 mois"],
    hi: ["GT3"]
  },
  {
    brand: "Renault", model: "Clio IV R.S", year: 2020,
    version: "1.6 Turbo 200 EDC",
    km: "NC", price: "16 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-008",
    img: "https://www.simplicicar.com/10548100-large_default/renault-clio-iv-rs-16-turbo-200-edc-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Dacia", model: "Lodgy", year: 2020,
    version: "TCe 115ch 7 Places Stepway",
    km: "NC", price: "8 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-009",
    img: "https://www.simplicicar.com/10584136-large_default/dacia-lodgy-tce-115-ch-7-places-stepway-garantie-12-mois.jpg",
    features: ["7 Places", "Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "Classe A", year: 2020,
    version: "180 Sport Edition",
    km: "NC", price: "14 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-010",
    img: "https://www.simplicicar.com/10564446-large_default/mercedes-classe-a-180-sport-edition-garantie-12-mois.jpg",
    features: ["Sport Edition", "Garantie 12 mois"],
    hi: ["Sport Edition"]
  },
  {
    brand: "Seat", model: "Leon", year: 2020,
    version: "1.0 TSI 110 BVM6 Urban",
    km: "NC", price: "16 480 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-011",
    img: "https://www.simplicicar.com/10526957-large_default/seat-leon-10-tsi-110-bvm6-urban-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "BMW", model: "X3 G01", year: 2020,
    version: "sDrive18d 150ch BVA8 Luxury",
    km: "NC", price: "26 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-012",
    img: "https://www.simplicicar.com/10511911-large_default/bmw-x3-g01-sdrive18d-150ch-bva8-luxury-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mini", model: "Hatch 5P", year: 2020,
    version: "Cooper 136ch Edition Shoreditch",
    km: "NC", price: "11 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-013",
    img: "https://www.simplicicar.com/10584118-large_default/mini-hatch-5-portes-cooper-136-ch-edition-shoreditch-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "Classe A", year: 2020,
    version: "200d 8G-DCT AMG Line \u2014 Full Entretien",
    km: "NC", price: "21 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-014",
    img: "https://www.simplicicar.com/10628386-large_default/mercedes-classe-a-200-d-8g-dct-amg-line-full-entretien-mercedes-garantie-12-mois.jpg",
    features: ["AMG Line", "Full Entretien", "Garantie 12 mois"],
    hi: ["AMG Line", "Full Entretien"]
  },
  {
    brand: "Volkswagen", model: "Tiguan", year: 2020,
    version: "2.0 TDI 150 DSG7 4Motion Confortline Business",
    km: "NC", price: "17 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-015",
    img: "https://www.simplicicar.com/10526831-large_default/volkswagen-tiguan-business-20-tdi-150-dsg7-4motion-confortline-business-garantie-12-mois.jpg",
    features: ["Transmission intégrale", "Garantie 12 mois"],
    hi: []
  },
  {
    brand: "BMW", model: "S\u00e9rie 1 F40", year: 2020,
    version: "118d 150ch BVA8 M Sport",
    km: "NC", price: "28 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-016",
    img: "https://www.simplicicar.com/10606519-large_default/bmw-serie-1-f40-118d-150-ch-bva8-m-sport-garantie-12-mois.jpg",
    features: ["M Sport", "Garantie 12 mois"],
    hi: ["M Sport"]
  },
  {
    brand: "Mercedes", model: "Classe B", year: 2020,
    version: "160d 7G-DCT Sensation",
    km: "NC", price: "15 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-017",
    img: "https://www.simplicicar.com/10478095-large_default/mercedes-classe-b-160-d-7-g-dct-sensation-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "BMW", model: "S\u00e9rie 4 Gran Coup\u00e9 F36", year: 2020,
    version: "420d xDrive 184ch Luxury",
    km: "NC", price: "16 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-018",
    img: "https://www.simplicicar.com/10466832-large_default/bmw-serie-4-gran-coupe-f36-420d-xdrive-184-ch-luxury-a-garantie-12-mois.jpg",
    features: ["xDrive", "Transmission intégrale", "Garantie 12 mois"],
    hi: ["xDrive"]
  },
  {
    brand: "Peugeot", model: "508 SW", year: 2020,
    version: "BlueHDi 130ch SS EAT8 GT Line",
    km: "NC", price: "16 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-019",
    img: "https://www.simplicicar.com/10477244-large_default/peugeot-508-sw-bluehdi-130-ch-ss-eat8-gt-line-garantie-12-mois.jpg",
    features: ["GT Line", "Garantie 12 mois"],
    hi: ["GT Line"]
  },
  {
    brand: "Audi", model: "A4", year: 2020,
    version: "35 TFSI 150 S Tronic 7 Design",
    km: "NC", price: "20 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-020",
    img: "https://www.simplicicar.com/10593533-large_default/audi-a4-a4-35-tfsi-150-s-tronic-7-design-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "Classe A", year: 2020,
    version: "200d 7G-DCT Business Executive \u2014 Pack AMG",
    km: "NC", price: "17 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-021",
    img: "https://www.simplicicar.com/10546405-large_default/mercedes-classe-a-business-200-d-7g-dct-business-executive-edition-pack-amg-garantie-12-mois.jpg",
    features: ["Pack AMG", "Garantie 12 mois"],
    hi: ["Pack AMG"]
  },
  {
    brand: "Mercedes", model: "Classe C Cabriolet", year: 2020,
    version: "200 9G-Tronic 4MATIC Sportline",
    km: "NC", price: "28 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-022",
    img: "https://www.simplicicar.com/10557716-large_default/mercedes-classe-c-cabriolet-200-9g-tronic-4matic-sportline-garantie-12-mois.jpg",
    features: ["Sportline", "Cabriolet", "Transmission intégrale", "Garantie 12 mois"],
    hi: ["Sportline", "Cabriolet"]
  },
  {
    brand: "Mazda", model: "CX-30", year: 2020,
    version: "2.0L Skyactiv-X M Hybrid 180ch Sportline",
    km: "NC", price: "20 480 \u20ac",
    energy: "Hybride", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-023",
    img: "https://www.simplicicar.com/10565318-large_default/mazda-cx-30-2020-0l-skyactiv-x-m-hybrid-180-ch-4x2-bva6-sportline-garantie-12-mois.jpg",
    features: ["Sportline", "Hybride E-Tech", "Garantie 12 mois"],
    hi: ["Sportline", "Hybride E-Tech"]
  },
  {
    brand: "BMW", model: "X4 G02", year: 2020,
    version: "xDrive20d 190ch BVA8 M Sport",
    km: "NC", price: "39 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-024",
    img: "https://www.simplicicar.com/10586913-large_default/bmw-x4-g02-xdrive20d-190-ch-bva8-m-sport-garantie-12-mois.jpg",
    features: ["M Sport", "Transmission intégrale", "Garantie 12 mois"],
    hi: ["M Sport"]
  },
  {
    brand: "Citro\u00ebn", model: "C5", year: 2020,
    version: "HDi 160 FAP Exclusive A",
    km: "NC", price: "6 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-025",
    img: "https://www.simplicicar.com/10476442-large_default/citroen-c5-c5-hdi-160-fap-exclusive-a-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Harley Davidson", model: "Dyna Fat Bob", year: 2020,
    version: "1584",
    km: "NC", price: "9 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-026",
    img: "https://www.simplicicar.com/10600713-large_default/harley-davidson-dyna-fat-bob-1584-garantie-3-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mini", model: "Hatch 3P F56", year: 2020,
    version: "John Cooper Works BVA6 JCW Exclusive",
    km: "NC", price: "18 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-027",
    img: "https://www.simplicicar.com/10620634-large_default/mini-hatch-3-portes-f56-john-cooper-works-bva6-finition-jcw-exclusive-design-garantie-12-mois.jpg",
    features: ["JCW", "Garantie 12 mois"],
    hi: ["JCW"]
  },
  {
    brand: "BMW", model: "S\u00e9rie 2 Cabriolet F23", year: 2020,
    version: "218d 150ch Sport A",
    km: "NC", price: "17 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-028",
    img: "https://www.simplicicar.com/10558943-large_default/bmw-serie-2-cabriolet-f23-218d-150-ch-sport-a-garantie-12-mois.jpg",
    features: ["Cabriolet", "Garantie 12 mois"],
    hi: ["Cabriolet"]
  },
  {
    brand: "Volkswagen", model: "Polo GTI", year: 2020,
    version: "1.8 TSI 192 BMT DSG7",
    km: "NC", price: "16 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-029",
    img: "https://www.simplicicar.com/10475792-large_default/volkswagen-polo-18-tsi-192-bmt-dsg7-gti-garantie-12-mois.jpg",
    features: ["GTI", "Garantie 12 mois"],
    hi: ["GTI"]
  },
  {
    brand: "Renault", model: "Zo\u00e9 R110", year: 2020,
    version: "Intens \u2014 Batterie en location",
    km: "NC", price: "8 980 \u20ac",
    energy: "\u00c9lectrique", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-030",
    img: "https://www.simplicicar.com/10475169-large_default/renault-zoe-r110-intens-batterie-en-location-garantie-12-mois.jpg",
    features: ["100% Électrique", "Garantie 12 mois"],
    hi: ["100% Électrique"]
  },
  {
    brand: "Volkswagen", model: "Golf R-Line", year: 2020,
    version: "2.0 TDI 150 FAP DSG7",
    km: "NC", price: "18 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-031",
    img: "https://www.simplicicar.com/10559015-large_default/volkswagen-golf-20-tdi-150-fap-dsg7-r-line-garantie-12-mois.jpg",
    features: ["R-Line", "Garantie 12 mois"],
    hi: ["R-Line"]
  },
  {
    brand: "BMW", model: "Z3", year: 2020,
    version: "3.0i \u2014 Accessoires Origines BMW",
    km: "NC", price: "25 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-032",
    img: "https://www.simplicicar.com/10530126-large_default/bmw-z3-z3-30i-garantie-12-mois-accessoires-origines-bmw.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Land Rover", model: "Range Rover Sport", year: 2020,
    version: "SDV6 3.0L HSE Dynamic A",
    km: "NC", price: "19 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-033",
    img: "https://www.simplicicar.com/10614000-large_default/land-rover-range-rover-sport-sdv6-30l-hse-dynamic-a-garantie-12-mois.jpg",
    features: ["HSE Dynamic", "Garantie 12 mois"],
    hi: ["HSE Dynamic"]
  },
  {
    brand: "Volkswagen", model: "Golf", year: 2020,
    version: "1.6 TDI 105 BlueMotion Confortline",
    km: "NC", price: "8 480 \u20ac",
    energy: "Diesel", gearbox: "Manuelle",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-034",
    img: "https://www.simplicicar.com/10620927-large_default/volkswagen-golf-16-tdi-105-bluemotion-technology-fap-confortline-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Renault", model: "Talisman", year: 2020,
    version: "Blue dCi 160 EDC Intens \u2014 Full Entretien",
    km: "NC", price: "11 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-035",
    img: "https://www.simplicicar.com/10615055-large_default/renault-talisman-blue-dci-160-edc-intens-full-entretien-renault-garantie-12-mois.jpg",
    features: ["Full Entretien", "Garantie 12 mois"],
    hi: ["Full Entretien"]
  },
  {
    brand: "Renault", model: "Rafale", year: 2020,
    version: "1.2 E-TECH EDC 200 Esprit Alpine",
    km: "NC", price: "38 980 \u20ac",
    energy: "Hybride", gearbox: "Automatique",
    color: "NC", dpe: "B", garantie: "12 mois", ref: "SC-036",
    img: "https://www.simplicicar.com/10545238-large_default/renault-rafale-12-e-tech-edc-200-esprit-alpine-garantie-12-mois.jpg",
    features: ["Esprit Alpine", "Hybride E-Tech", "Garantie 12 mois"],
    hi: ["Esprit Alpine", "Hybride E-Tech"]
  }
];