import { ServiceItem, ProjectItem } from '../types';

export const COMPANY_DETAILS = {
  legalName: 'NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD',
  shortName: 'NIKESHI ELECTRONICS',
  phoneDisplay: '077 420 0364',
  phoneDial: 'tel:+94774200364',
  phoneIntl: '+94 77 420 0364',
  whatsappUrl: 'https://wa.me/94774200364',
  address: '39 Mile Post, Galgamuwa 60700, Sri Lanka',
  postalCode: '60700',
  city: 'Galgamuwa',
  province: 'North Western Province',
  country: 'Sri Lanka',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=39+Mile+Post,+Galgamuwa+60700,+Sri+Lanka',
  // Verified rule: Do not display an email until it is verified.
  emailStatus: 'pending_verification' as const,
  emailNotice:
    'Official corporate email is undergoing administrative verification. Please contact our technical team directly via direct phone call or WhatsApp.',
  businessHours: 'Monday – Saturday: 7:30 AM – 6:00 PM | Sunday: On-Call Support',
  primaryFocus:
    'Agricultural elephant and wildlife boundary electric fencing, industrial perimeter protection, solar energizers, and commercial electrical installations in Sri Lanka.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'agricultural-fencing',
    title: 'Agricultural & Wildlife Electric Fencing',
    shortDesc:
      'Heavy-duty multi-strand perimeter fencing engineered for farmlands, paddy fields, and estates to mitigate human-elephant and wildlife incursions.',
    fullDesc:
      'Specialized electric fence construction designed for the demanding climatic and terrain conditions of Sri Lanka dry zones. Built with high-tensile hot-dip galvanized wire, reinforced corner strainers, high-impact porcelain/UV-stabilized polycarbonate insulators, and calibrated pulsing energizers that provide an effective deterrent without causing lethal harm.',
    features: [
      'Multi-strand high-tensile wire layout (3 to 6 strands)',
      'Heavy-duty strain posts with reinforced concrete anchor footings',
      'Breakaway spring systems to prevent structural wire collapse',
      'High-visibility warning boards installed at mandatory intervals',
      'Vegetation-tolerant energizer units capable of delivering short, sharp pulses',
    ],
    specs: [
      { label: 'Wire Specification', value: '2.5mm High Tensile Heavy Galv (Class A)' },
      { label: 'Energizer Output Voltage', value: '7,000V – 9,500V Peak Pulse' },
      { label: 'Pulse Frequency', value: '1.0 – 1.2 Second Interval (Standard Safe Pulse)' },
      { label: 'Post Spacing', value: '4.0m – 6.0m depending on gradient and vegetation' },
    ],
    applications: [
      'Paddy fields & cultivation land in Galgamuwa and North Western regions',
      'Coconut, rubber, and mixed crop plantations',
      'Village border community-protection fence projects',
      'Livestock containment and wildlife boundary deterrence',
    ],
    iconName: 'ShieldAlert',
    image: '/src/assets/images/agricultural_fence_1792646325269.jpg',
  },
  {
    id: 'commercial-perimeter',
    title: 'Commercial & Industrial Perimeter Security',
    shortDesc:
      'Electrified wall-top and ground perimeter fences providing continuous physical intrusion deterrence and active alarm monitoring.',
    fullDesc:
      'Engineered perimeter security solutions for factories, warehouses, distribution centers, and secured storage yards. Combines physical barrier height, high-voltage non-lethal electrical shock, and real-time zone monitoring that triggers alarms immediately if wires are cut, bridged, or grounded.',
    features: [
      'Wall-top cantilever and straight bracket configurations',
      'Free-standing standalone electrified perimeter fences',
      'Bi-polar fence energizer systems for high-resistance conditions',
      'Integrated siren, strobe light, and alert trigger relays',
      'Tamper-resistant security enclosure boxes for key electronics',
    ],
    specs: [
      { label: 'Bracket Material', value: 'Hot-dip Galvanized Steel / Powder-Coated 32mm Angle' },
      { label: 'Intrusion Detection', value: 'Open Circuit / Short Circuit / Ground Alarm' },
      { label: 'Insulator Grade', value: 'Virgin Polycarbonate with UV Stabilizer' },
      { label: 'Operating Voltage', value: 'Dual Mode (Low-power monitoring & High-voltage arm)' },
    ],
    applications: [
      'Industrial fabrication yards and storage depots',
      'Commercial distribution warehouses',
      'Substations and critical infrastructure compounds',
      'Private commercial properties requiring 24/7 boundary defense',
    ],
    iconName: 'Building2',
    image: '/src/assets/images/perimeter_electric_fence_1792646340343.jpg',
  },
  {
    id: 'solar-energizers',
    title: 'Solar Energizers & Off-Grid Power Systems',
    shortDesc:
      'Autonomous solar-powered energizer units paired with deep-cycle battery backup for uninterrupted 24/7 electric fence operation in remote areas.',
    fullDesc:
      'Remote agricultural lands often lack reliable AC mains electricity. We fabricate and install self-sustaining solar energizer stations housed in heavy-duty weatherproof outdoor enclosures. Systems feature Tier-1 monocrystalline solar panels, MPPT charge controllers, deep-cycle batteries, and integrated lightning surge arrestors.',
    features: [
      'Monocrystalline solar PV panels matched to perimeter load',
      'Dedicated deep-cycle industrial storage batteries (3–5 day autonomy)',
      'Digital LED pulse and battery voltage monitoring displays',
      'Dual lightning surge divertor kits to protect sensitive electronics',
      'Heavy-duty lockable galvanized steel enclosures',
    ],
    specs: [
      { label: 'Stored Energy Range', value: '2.0 Joules to 15.0+ Joules (Configurable)' },
      { label: 'Battery Capacity', value: '12V 40Ah – 120Ah Deep Cycle AGM/Gel' },
      { label: 'Solar Array', value: '50W to 150W Monocrystalline PV module' },
      { label: 'Enclosure Rating', value: 'IP65 Weatherproof & Corrosion-Resistant' },
    ],
    applications: [
      'Off-grid agricultural plots without CEB grid connection',
      'Long-distance perimeter boundary installations',
      'Backup hybrid setups where grid power undergoes frequent outages',
    ],
    iconName: 'SunMedium',
    image: '/src/assets/images/solar_fence_energizer_1792646324225.jpg',
  },
  {
    id: 'electrical-installations',
    title: 'Industrial & Commercial Electrical Contracting',
    shortDesc:
      'Comprehensive electrical distribution, main control panels, phase balancing, conduit wiring, and equipment hookups.',
    fullDesc:
      'Expert electrical wiring and power distribution services compliant with Sri Lankan electrical safety standards. We handle main switchgear, sub-distribution boards (DBs), industrial motor connections, circuit breaker sizing, cable tray fabrication, and automated backup generator changeover panels.',
    features: [
      'Distribution board fabrication and phase distribution balancing',
      'Heavy-gauge armored cable laying and industrial conduit routing',
      'Surge protection devices (SPD) for tropical lightning zones',
      'Motor starter panels and automated control circuits',
      'Load calculations and comprehensive electrical safety inspections',
    ],
    specs: [
      { label: 'Voltage Compatibility', value: '230V Single Phase & 400V 3-Phase Systems' },
      { label: 'Protective Switchgear', value: 'MCB, MCCB, and Type 2 Surge Protection' },
      { label: 'Cable Standards', value: 'BS 5467 / SLS compliant copper armored cables' },
      { label: 'Panel Enclosures', value: 'Electro-galvanized sheet steel with powder coat' },
    ],
    applications: [
      'Industrial workshops, processing mills, and manufacturing sheds',
      'Agricultural processing facilities and water pump motor control',
      'Commercial building service upgrades and safety overhauls',
    ],
    iconName: 'Zap',
    image: '/src/assets/images/electrical_control_panel_1792646325520.jpg',
  },
  {
    id: 'earthing-maintenance',
    title: 'Earthing Systems, Lightning Protection & Audits',
    shortDesc:
      'Specialized low-resistance earth electrode arrays and routine fence line maintenance, clearing, and fault diagnostics.',
    fullDesc:
      'An electric fence is only as effective as its ground return circuit. In the dry, rocky or sandy soils typical of Galgamuwa and the North Western province, standard single-rod earthing frequently fails. We construct multi-rod electrolytic earth fields with conductivity enhancement compound (Bentonite) and provide comprehensive scheduled maintenance.',
    features: [
      'Multi-stake copper-clad earthing arrays connected in parallel',
      'Earth resistivity testing using calibrated ground resistance meters',
      'Vegetation leakage audits along fence perimeters with digital fault finders',
      'Insulator replacement and high-tensile wire re-tensioning',
      'Dedicated lightning earth diversion fields positioned away from main energizers',
    ],
    specs: [
      { label: 'Electrode Material', value: 'Copper-bonded steel rods (minimum 5/8" x 6ft)' },
      { label: 'Target Earth Resistance', value: '< 5 Ohms in standard soil (< 10 Ohms in dry season)' },
      { label: 'Connecting Conductor', value: '16mm² / 25mm² Bare copper stranded conductor' },
      { label: 'Soil Treatment', value: 'Bentonite conductivity enhancement clay' },
    ],
    applications: [
      'Dry-zone agricultural perimeter grounding',
      'Lightning-prone elevated terrain and open farmland',
      'Remediation of existing weak electric fence lines with low pulse shock',
    ],
    iconName: 'Activity',
  },
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'High-Tensile Perimeter Protection Setup',
    category: 'commercial',
    categoryLabel: 'Commercial Perimeter',
    location: 'North Western Province',
    perimeterScale: '1,400 Meters Total Boundary',
    description:
      'Representative installation standard demonstrating heavy-duty galvanized upright posts, multi-strand wire tensioning, warning signage, and tamper-sensing alert relays.',
    specifications: [
      'Galvanized steel strainer posts with concrete anchors',
      'Class A heavy-galvanized high-tensile wire',
      'Tamper & cut detection relay system',
      'Dual-zone pulsing energizer arrangement',
    ],
    image: '/src/assets/images/perimeter_electric_fence_1792646340343.jpg',
    imageNote:
      'Professional temporary image representative of commercial fence build quality and post alignment.',
  },
  {
    id: 'proj-02',
    title: 'Autonomous Solar Energizer & Battery Station',
    category: 'solar',
    categoryLabel: 'Solar Power System',
    location: 'Galgamuwa Agricultural Zone',
    perimeterScale: 'Multi-Kilometer Remote Array',
    description:
      'Representative technical setup featuring pole-mounted monocrystalline solar array, IP65 weatherproof control enclosure, digital voltage monitor, and deep-cycle battery storage.',
    specifications: [
      'Weatherproof lockable industrial cabinet',
      'Digital pulse monitor with real-time kV reading',
      'MPPT charging circuit with deep-cycle battery',
      'Heavy-duty lightning arrestor bypass',
    ],
    image: '/src/assets/images/solar_fence_energizer_1792646324225.jpg',
    imageNote:
      'Professional temporary image illustrative of solar energizer equipment and outdoor enclosure wiring.',
  },
  {
    id: 'proj-03',
    title: 'Multi-Strand Farmland Wildlife Barrier',
    category: 'agricultural',
    categoryLabel: 'Agricultural Boundary',
    location: 'Dry Zone Cultivation Sector',
    perimeterScale: '2,800 Meters Crop Defense',
    description:
      'Representative layout for crop protection against wildlife ingress. Demonstrates proper ground clearance, spacing, high-visibility warning placards, and sturdy tensioning.',
    specifications: [
      'Multi-tiered wire configuration with intermediate dropper stays',
      'High-impact UV-resistant insulators',
      'Engineered breakaway loops for animal safety',
      'Low-impedance energizer for dense grass resistance',
    ],
    image: '/src/assets/images/agricultural_fence_1792646325269.jpg',
    imageNote:
      'Professional temporary image representative of agricultural perimeter spacing and warning standard.',
  },
  {
    id: 'proj-04',
    title: 'Industrial Electrical Control & Distribution Panel',
    category: 'electrical',
    categoryLabel: 'Electrical Contracting',
    location: 'Commercial Processing Facility',
    perimeterScale: '3-Phase Main Switchgear',
    description:
      'Representative industrial electrical installation showcasing neatly organized circuit breakers, surge protection devices, copper earthing busbars, and labeled wiring channels.',
    specifications: [
      '400V 3-phase incoming distribution board',
      'Type 2 surge protection devices (SPD)',
      'Copper protective earth (PE) busbar grounding',
      'Clean cable trunking and circuit identification',
    ],
    image: '/src/assets/images/electrical_control_panel_1792646325520.jpg',
    imageNote:
      'Professional temporary image illustrative of industrial control panel wiring standards and grounding.',
  },
];

export const TECHNICAL_STANDARDS = [
  {
    title: 'Galvanized Corrosion Resistance',
    desc: 'All structural posts and high-tensile wires use Class A heavy hot-dip galvanization to withstand Sri Lanka tropical humidity and monsoon rainfall.',
  },
  {
    title: 'Safe Pulsed Deterrence',
    desc: 'Energizers deliver millisecond high-voltage pulses (non-continuous) conforming strictly to international electrical fence safety codes (IEC 60335-2-76).',
  },
  {
    title: 'Multi-Rod Earth Engineering',
    desc: 'Engineered earthing arrays with 3 to 5 interconnected copper rods to overcome the notoriously high electrical resistance of dry-zone soils.',
  },
  {
    title: 'Autonomous Solar Resilience',
    desc: 'Solar battery stations sized with a minimum 72-hour autonomy buffer to guarantee uninterrupted fence protection even during overcast monsoon days.',
  },
];
