/**
 * SIMPLICICAR ÉVREUX — data/voitures.js
 * Mis à jour automatiquement — 36 véhicules
 */

const CARS = [
  {
    brand: "Peugeot", model: "", year: 2017,
    version: "3008 1.2 Puretech 130ch SS EAT6 Allure",
    km: "104 055 km", price: "10 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Marron", dpe: "B", garantie: "12 mois", ref: "SC-001",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10631231-large_default/peugeot-3008-12-puretech-130ch-ss-eat6-allure-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Volkswagen", model: "TIGUAN", year: 2018,
    version: "2.0 TDI 150 DSG7 Carat Exclusive",
    km: "83 250 km", price: "29 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-002",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10587247-large_default/volkswagen-tiguan-20-tdi-150-dsg7-carat-exclusive-garantie-12-mois.jpg",
    features: ["Carat Exclusive", "Garantie 12 mois"],
    hi: ["Carat Exclusive"]
  },
  {
    brand: "Mini", model: "HATCH", year: 2018,
    version: "5 PORTES One 102 ch Edition Blackfriars",
    km: "77 250 km", price: "13 480 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-003",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10586614-large_default/mini-hatch-5-portes-one-102-ch-edition-blackfriars-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Renault", model: "KADJAR dCi", year: 2017,
    version: "110 Energy eco2 Zen",
    km: "141 055 km", price: "10 480 \u20ac",
    energy: "Diesel", gearbox: "Manuelle",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-004",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10584750-large_default/renault-kadjar-dci-110-energy-ecosup2-zen-garantie-12-mois.jpg",
    features: ["Zen", "Garantie 12 mois"],
    hi: ["Zen"]
  },
  {
    brand: "Bmw", model: "SERIE", year: 2016,
    version: "1 F20 116i 136 ch Lounge",
    km: "128 370 km", price: "9 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-005",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10577795-large_default/bmw-serie-1-f20-116i-136-ch-lounge.jpg",
    features: ["Lounge", "Garantie 12 mois"],
    hi: ["Lounge"]
  },
  {
    brand: "Bmw", model: "SERIE", year: 2014,
    version: "2 COUPE F22 M235i 326 ch",
    km: "67 880 km", price: "32 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Noir", dpe: "C", garantie: "12 mois", ref: "SC-006",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10580168-large_default/bmw-serie-2-coupe-f22-m235i-326-ch-garantie-12-mois.jpg",
    features: ["M235i 326ch", "Coupé", "Garantie 12 mois"],
    hi: ["M235i 326ch"]
  },
  {
    brand: "Porsche", model: "", year: 2022,
    version: "911 GT3 4.0i RS PDK - Entretien Porsche",
    km: "21 500 km", price: "179 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Blanc", dpe: "D", garantie: "12 mois", ref: "SC-007",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10546529-large_default/porsche-911-gt3-40i-rs-pdk-entretien-porsche-garantie-12-mois.jpg",
    features: ["GT3 RS", "Garantie 12 mois"],
    hi: ["GT3 RS"]
  },
  {
    brand: "Renault", model: "CLIO IV R.S", year: 2014,
    version: "1.6 Turbo 200 EDC Garantie 12 mois",
    km: "72 580 km", price: "16 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Rouge", dpe: "C", garantie: "12 mois", ref: "SC-008",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10548100-large_default/renault-clio-iv-rs-16-turbo-200-edc-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Dacia", model: "LODGY TCe", year: 2019,
    version: "115 ch 7 Places Stepway",
    km: "107 220 km", price: "8 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-009",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10584136-large_default/dacia-lodgy-tce-115-ch-7-places-stepway-garantie-12-mois.jpg",
    features: ["7 Places", "Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "CLASSE A", year: 2016,
    version: "180 Sport Edition",
    km: "89 450 km", price: "14 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-010",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10564446-large_default/mercedes-classe-a-180-sport-edition-garantie-12-mois.jpg",
    features: ["Sport Edition", "Garantie 12 mois"],
    hi: ["Sport Edition"]
  },
  {
    brand: "Seat", model: "LEON", year: 2021,
    version: "1.0 TSI 110 BVM6 Urban",
    km: "57 510 km", price: "16 480 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "Noir", dpe: "B", garantie: "12 mois", ref: "SC-011",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10526957-large_default/seat-leon-10-tsi-110-bvm6-urban-garantie-12-mois.jpg",
    features: ["Urban", "Garantie 12 mois"],
    hi: ["Urban"]
  },
  {
    brand: "Bmw", model: "X3 G01 sDrive18d", year: 2020,
    version: "150ch BVA8 Luxury",
    km: "93 884 km", price: "26 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-012",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10511911-large_default/bmw-x3-g01-sdrive18d-150ch-bva8-luxury-garantie-12-mois.jpg",
    features: ["Luxury", "Garantie 12 mois"],
    hi: ["Luxury"]
  },
  {
    brand: "Mini", model: "HATCH", year: 2020,
    version: "5 PORTES Cooper 136 ch Edition Shoreditch",
    km: "58 940 km", price: "11 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-013",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10584118-large_default/mini-hatch-5-portes-cooper-136-ch-edition-shoreditch-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "CLASSE A", year: 2021,
    version: "200 d 8G-DCT AMG Line - Full Entretien Mercedes",
    km: "52 370 km", price: "21 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Noir", dpe: "B", garantie: "12 mois", ref: "SC-014",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10628386-large_default/mercedes-classe-a-200-d-8g-dct-amg-line-full-entretien-mercedes-garantie-12-mois.jpg",
    features: ["AMG Line", "Full Entretien", "Garantie 12 mois"],
    hi: ["AMG Line", "Full Entretien"]
  },
  {
    brand: "Volkswagen", model: "TIGUAN BUSINESS", year: 2017,
    version: "2.0 TDI 150 DSG7 4Motion Confortline Business",
    km: "131 040 km", price: "17 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Noir", dpe: "B", garantie: "12 mois", ref: "SC-015",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10526831-large_default/volkswagen-tiguan-business-20-tdi-150-dsg7-4motion-confortline-business-garantie-12-mois.jpg",
    features: ["4Motion", "Garantie 12 mois"],
    hi: ["4Motion"]
  },
  {
    brand: "Bmw", model: "SERIE", year: 2021,
    version: "1 F40 118d 150 ch BVA8 M Sport",
    km: "38 720 km", price: "28 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Bleu", dpe: "B", garantie: "12 mois", ref: "SC-016",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10606519-large_default/bmw-serie-1-f40-118d-150-ch-bva8-m-sport-garantie-12-mois.jpg",
    features: ["M Sport", "Garantie 12 mois"],
    hi: ["M Sport"]
  },
  {
    brand: "Mercedes", model: "CLASSE B", year: 2016,
    version: "160 d 7-G DCT Sensation",
    km: "119 250 km", price: "15 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-017",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10478095-large_default/mercedes-classe-b-160-d-7-g-dct-sensation-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Bmw", model: "SERIE", year: 2014,
    version: "4 GRAN COUPE F36 420d xDrive 184 ch Luxury A",
    km: "148 610 km", price: "16 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Noir", dpe: "C", garantie: "12 mois", ref: "SC-018",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10466832-large_default/bmw-serie-4-gran-coupe-f36-420d-xdrive-184-ch-luxury-a-garantie-12-mois.jpg",
    features: ["Luxury", "Coupé", "Garantie 12 mois"],
    hi: ["Luxury"]
  },
  {
    brand: "Peugeot", model: "", year: 2019,
    version: "508 SW BlueHDi 130 ch SS EAT8 GT Line",
    km: "131 850 km", price: "16 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-019",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10477244-large_default/peugeot-508-sw-bluehdi-130-ch-ss-eat8-gt-line-garantie-12-mois.jpg",
    features: ["GT Line", "Garantie 12 mois"],
    hi: ["GT Line"]
  },
  {
    brand: "Audi", model: "A4", year: 2020,
    version: "35 TFSI 150 S Tronic 7 Design",
    km: "68 920 km", price: "20 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-020",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10593533-large_default/audi-a4-a4-35-tfsi-150-s-tronic-7-design-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mercedes", model: "CLASSE A BUSINESS", year: 2017,
    version: "200 D 7G-DCT Business Executive Edition - Pack AMG",
    km: "142 100 km", price: "17 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-021",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10546405-large_default/mercedes-classe-a-business-200-d-7g-dct-business-executive-edition-pack-amg-garantie-12-mois.jpg",
    features: ["Pack AMG", "Garantie 12 mois"],
    hi: ["Pack AMG"]
  },
  {
    brand: "Mercedes", model: "CLASSE C CABRIOLET", year: 2017,
    version: "200 9G-Tronic 4Matic Sportline",
    km: "117 120 km", price: "28 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Noir", dpe: "B", garantie: "12 mois", ref: "SC-022",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10557716-large_default/mercedes-classe-c-cabriolet-200-9g-tronic-4matic-sportline-garantie-12-mois.jpg",
    features: ["Sportline", "Cabriolet", "Garantie 12 mois"],
    hi: ["Sportline", "Cabriolet"]
  },
  {
    brand: "Mazda", model: "CX-30", year: 2021,
    version: "2020 2.0L Skyactiv-X M Hybrid 180 ch 4x2 BVA6 Sportline",
    km: "52 200 km", price: "20 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Rouge", dpe: "B", garantie: "12 mois", ref: "SC-023",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10565318-large_default/mazda-cx-30-2020-0l-skyactiv-x-m-hybrid-180-ch-4x2-bva6-sportline-garantie-12-mois.jpg",
    features: ["Sportline", "Garantie 12 mois"],
    hi: ["Sportline"]
  },
  {
    brand: "Bmw", model: "X4 G02 xDrive20d", year: 2019,
    version: "190 ch BVA8 M Sport",
    km: "61 200 km", price: "39 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Noir", dpe: "B", garantie: "12 mois", ref: "SC-024",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10586913-large_default/bmw-x4-g02-xdrive20d-190-ch-bva8-m-sport-garantie-12-mois.jpg",
    features: ["M Sport", "Garantie 12 mois"],
    hi: ["M Sport"]
  },
  {
    brand: "Citroen", model: "C5 C5 HDi", year: 2011,
    version: "160 FAP Exclusive A",
    km: "185 500 km", price: "6 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Gris", dpe: "C", garantie: "12 mois", ref: "SC-025",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10476442-large_default/citroen-c5-c5-hdi-160-fap-exclusive-a-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Harley Davidson", model: "DYNA FAT BOB", year: 2012,
    version: "1584",
    km: "28 450 km", price: "9 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "Noir", dpe: "D", garantie: "12 mois", ref: "SC-026",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10600713-large_default/harley-davidson-dyna-fat-bob-1584-garantie-3-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Mini", model: "HATCH", year: 2017,
    version: "3 PORTES F56 John Cooper Works BVA6 Finition JCW Exclusive Design Garantie 12 mois",
    km: "65 700 km", price: "18 980 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Gris", dpe: "C", garantie: "12 mois", ref: "SC-027",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10620634-large_default/mini-hatch-3-portes-f56-john-cooper-works-bva6-finition-jcw-exclusive-design-garantie-12-mois.jpg",
    features: ["JCW", "Garantie 12 mois"],
    hi: ["JCW"]
  },
  {
    brand: "Bmw", model: "SERIE", year: 2017,
    version: "2 CABRIOLET F23 218d 150 ch Sport A",
    km: "77 400 km", price: "17 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-028",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10558943-large_default/bmw-serie-2-cabriolet-f23-218d-150-ch-sport-a-garantie-12-mois.jpg",
    features: ["Cabriolet", "Garantie 12 mois"],
    hi: ["Cabriolet"]
  },
  {
    brand: "Volkswagen", model: "POLO", year: 2018,
    version: "1.8 TSI 192 BMT DSG7 GTI Garantie 12 mois",
    km: "66 800 km", price: "16 480 \u20ac",
    energy: "Essence", gearbox: "Automatique",
    color: "Rouge", dpe: "C", garantie: "12 mois", ref: "SC-029",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10475792-large_default/volkswagen-polo-18-tsi-192-bmt-dsg7-gti-garantie-12-mois.jpg",
    features: ["GTI", "Garantie 12 mois"],
    hi: ["GTI"]
  },
  {
    brand: "Renault", model: "ZOE R110 Intens Batterie en location Garantie", year: 2020,
    version: "12 mois",
    km: "56 300 km", price: "8 980 \u20ac",
    energy: "\u00c9lectrique", gearbox: "Automatique",
    color: "Blanc", dpe: "A", garantie: "12 mois", ref: "SC-030",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10475169-large_default/renault-zoe-r110-intens-batterie-en-location-garantie-12-mois.jpg",
    features: ["Intens", "100% Électrique", "Garantie 12 mois"],
    hi: ["Intens", "100% Électrique"]
  },
  {
    brand: "Volkswagen", model: "GOLF", year: 2019,
    version: "2.0 TDI 150 FAP DSG7 R-Line",
    km: "77 800 km", price: "18 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-031",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10559015-large_default/volkswagen-golf-20-tdi-150-fap-dsg7-r-line-garantie-12-mois.jpg",
    features: ["R-Line", "Garantie 12 mois"],
    hi: ["R-Line"]
  },
  {
    brand: "Bmw", model: "Z3 Z3", year: 2002,
    version: "3.0i Garantie 12 mois Accessoires Origines BMW",
    km: "78 600 km", price: "25 980 \u20ac",
    energy: "Essence", gearbox: "Manuelle",
    color: "Rouge", dpe: "D", garantie: "12 mois", ref: "SC-032",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10530126-large_default/bmw-z3-z3-30i-garantie-12-mois-accessoires-origines-bmw.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Land Rover", model: "RANGE ROVER SPORT", year: 2015,
    version: "SDV6 3.0L HSE Dynamic A Garantie 12 mois",
    km: "142 800 km", price: "19 980 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Gris", dpe: "C", garantie: "12 mois", ref: "SC-033",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10614000-large_default/land-rover-range-rover-sport-sdv6-30l-hse-dynamic-a-garantie-12-mois.jpg",
    features: ["HSE Dynamic", "Garantie 12 mois"],
    hi: ["HSE Dynamic"]
  },
  {
    brand: "Volkswagen", model: "GOLF", year: 2013,
    version: "1.6 TDI 105 BlueMotion Technology FAP Confortline",
    km: "148 700 km", price: "8 480 \u20ac",
    energy: "Diesel", gearbox: "Manuelle",
    color: "Gris", dpe: "B", garantie: "12 mois", ref: "SC-034",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10620927-large_default/volkswagen-golf-16-tdi-105-bluemotion-technology-fap-confortline-garantie-12-mois.jpg",
    features: ["Garantie 12 mois"],
    hi: []
  },
  {
    brand: "Renault", model: "TALISMAN Blue dCi", year: 2018,
    version: "160 EDC Intens - Full Entretien Renault",
    km: "93 400 km", price: "11 480 \u20ac",
    energy: "Diesel", gearbox: "Automatique",
    color: "Blanc", dpe: "B", garantie: "12 mois", ref: "SC-035",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10615055-large_default/renault-talisman-blue-dci-160-edc-intens-full-entretien-renault-garantie-12-mois.jpg",
    features: ["Intens", "Full Entretien", "Garantie 12 mois"],
    hi: ["Intens", "Full Entretien"]
  },
  {
    brand: "Renault", model: "RAFALE", year: 2024,
    version: "1.2 E-TECH EDC 200 Esprit Alpine Garantie 12 mois",
    km: "14 800 km", price: "38 980 \u20ac",
    energy: "Hybride", gearbox: "Automatique",
    color: "Noir", dpe: "A", garantie: "12 mois", ref: "SC-036",
    img: "https://wsrv.nl/?url=https://www.simplicicar.com/10545238-large_default/renault-rafale-12-e-tech-edc-200-esprit-alpine-garantie-12-mois.jpg",
    features: ["Esprit Alpine", "Hybride E-Tech", "Garantie 12 mois"],
    hi: ["Esprit Alpine", "Hybride E-Tech"]
  }
];