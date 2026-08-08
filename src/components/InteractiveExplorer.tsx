import React, { useState, useMemo } from 'react';
import { 
  Search, Check, Download, 
  ChevronRight, ArrowRight, Eye, Table, Grid, Info, Sparkles, X, Compass
} from 'lucide-react';
import EngineeringDrawingModal from './EngineeringDrawingModal';

export interface ProductItem {
  id: string;
  category: 'lhb' | 'locomotive' | 'agri' | 'oem' | 'mining' | 'en_castings' | 'wagons' | 'bogies' | 'couplers' | 'trackwork' | 'castings' | 'readymix';
  categoryLabel: string;
  title: string;
  series: string;
  specs: string;
  compliance: string[];
  axleLoad: string;
  materialGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  hardness: string;
  desc: string;
  img: string;
  drawingImg: string;
  cadFile: string;
  keyFeatures: string[];
}

export const EXPLORER_PRODUCTS: ProductItem[] = [
  // 1. Freight Wagons (4 Items)
  {
    id: 'wag-01',
    category: 'wagons',
    categoryLabel: 'Freight Wagons',
    title: 'BCNHL (Bogie Covered High Capacity) Wagon',
    series: 'SERIES 2010',
    specs: 'RDSO (Research Designs & Standards Org.) Spec WD-06012 / IS 2062',
    compliance: ['RDSO Approved', 'IS 2062 Structural Steel', 'ISO 9001:2015'],
    axleLoad: '22.9T Freight',
    materialGrade: 'Micro-Alloyed High Tensile Steel (IS 2062 E450 Grade)',
    tensileStrength: '590 - 640 MPa (Megapascals)',
    yieldStrength: '450 MPa',
    hardness: '180 - 210 BHN (Brinell Hardness Number)',
    desc: 'Full Form: Bogie Covered Number High-Capacity Length Wagon. Designed for bagged cement, food grains & weather-sensitive cargo.',
    img: '/images/istockphoto-1271210664-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1271210664-1024x1024.jpg',
    cadFile: 'BCNHL-WD-06012-REV4.DWG',
    keyFeatures: ['Full Form: Bogie Covered Number High Length', 'Pneumatic door mechanism', 'Weatherproof stainless steel roof']
  },
  {
    id: 'wag-02',
    category: 'wagons',
    categoryLabel: 'Freight Wagons',
    title: 'BOXNHL (Bogie Open High Speed Stainless) Wagon',
    series: 'SERIES 2020',
    specs: '25-Ton Axle Load Stainless Steel (AAR M-201 / IRS T-12)',
    compliance: ['RDSO WD-09009', 'AAR (Assoc. of American Railroads) M-201', 'IRS T-12'],
    axleLoad: '25.0T Heavy Haul',
    materialGrade: 'Ferritic Stainless Steel (IRS M44 / AISI 409M)',
    tensileStrength: '480 - 520 MPa',
    yieldStrength: '320 MPa',
    hardness: '190 BHN',
    desc: 'Full Form: Bogie Open Extra High Speed Stainless Steel Wagon. Engineered for coal, iron ore, and heavy bulk minerals.',
    img: '/images/istockphoto-179573427-1024x1024.jpg',
    drawingImg: '/images/istockphoto-179573427-1024x1024.jpg',
    cadFile: 'BOXNHL-25T-M44.DWG',
    keyFeatures: ['Full Form: Bogie Open Extra High Speed Stainless', 'Ferritic SS body sides', 'High payload-to-tare ratio']
  },
  {
    id: 'wag-03',
    category: 'wagons',
    categoryLabel: 'Freight Wagons',
    title: 'BOBRN (Bogie Open Bottom Rapid Discharge) Hopper',
    series: 'SERIES 2030',
    specs: 'Air-Braked Pneumatic Rapid Door System (RDSO WD-91005)',
    compliance: ['RDSO (Research Designs & Standards Org.)', 'AAR S-400 Approved'],
    axleLoad: '22.9T Freight',
    materialGrade: 'CORTEN Corrosion-Resistant Steel & High-Strength Alloy',
    tensileStrength: '550 MPa',
    yieldStrength: '355 MPa',
    hardness: '195 BHN',
    desc: 'Full Form: Bogie Open Bottom Rapid Discharge Nitrogen Air-Braked Hopper Wagon. Enables automated unloading at thermal power plants.',
    img: '/images/istockphoto-1967717882-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1967717882-1024x1024.jpg',
    cadFile: 'BOBRN-HOPPER-AUTODOOR.STEP',
    keyFeatures: ['Full Form: Bogie Open Bottom Rapid Discharge', 'Automated trackside bottom discharge', 'Heavy duty air cylinder doors']
  },
  {
    id: 'wag-04',
    category: 'wagons',
    categoryLabel: 'Freight Wagons',
    title: 'BTPN (Bogie Tank Wagon for Liquid Cargo)',
    series: 'SERIES 2040',
    specs: 'RDSO Approved Pneumatic Tank Wagon (IS 2062 E250)',
    compliance: ['RDSO Approved', 'IS 2062 Structural Steel', 'ISO 9001:2015'],
    axleLoad: '20.3T Freight',
    materialGrade: 'High Tensile Structural Carbon Steel IS 2062',
    tensileStrength: '520 MPa',
    yieldStrength: '340 MPa',
    hardness: '185 BHN',
    desc: 'Full Form: Bogie Tank Wagon for Petroleum & Liquid Products. Heavy-duty cylindrical shell with top loading & bottom discharge valves.',
    img: '/images/istockphoto-1271210664-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1271210664-1024x1024.jpg',
    cadFile: 'BTPN-TANK-WAGON-RDSO.DWG',
    keyFeatures: ['Pressure-tested cylindrical tank', 'Safety relief valve assembly', 'Anti-surge baffle plates']
  },

  // 2. Bogies & Suspension (4 Items)
  {
    id: 'bog-01',
    category: 'bogies',
    categoryLabel: 'Bogies & Suspension',
    title: 'CASNUB 22HS (Cast Steel Freight Car) Bogie',
    series: 'SERIES 1000',
    specs: 'RDSO Approved 22.9 Ton Axle Load (AAR M-201 Grade B+)',
    compliance: ['RDSO Approved', 'AAR (Assoc. of American Railroads) M-201 Grade B+', 'ISO 9001:2015'],
    axleLoad: '22.9T Freight',
    materialGrade: 'AAR M-201 Grade B+ Quenched Cast Steel',
    tensileStrength: '620 MPa',
    yieldStrength: '415 MPa',
    hardness: '241 BHN',
    desc: 'Full Form: Cast Steel Freight Car Bogie Assembly. Features cast steel side frames, bolster, and elastomeric suspension pads.',
    img: '/images/locomotive_wheelset_stock.jpg',
    drawingImg: '/images/locomotive_wheelset_stock.jpg',
    cadFile: 'CASNUB-22HS-BOGIE.DWG',
    keyFeatures: ['Full Form: Cast Steel Freight Car Bogie', 'Constant contact side bearers', 'Elastomeric pad suspension']
  },
  {
    id: 'bog-02',
    category: 'bogies',
    categoryLabel: 'Bogies & Suspension',
    title: 'Barber Design High Capacity 32.5T Bogie',
    series: 'SERIES 1005',
    specs: 'Amsted SCT Licensed Barber S2 Variable Damping',
    compliance: ['Amsted SCT (Standard Car Truck Co. USA) License', 'AAR M-201 Grade E'],
    axleLoad: '32.5T Heavy Haul',
    materialGrade: 'High Tensile Grade E Cast Steel (AAR M-201)',
    tensileStrength: '825 MPa',
    yieldStrength: '690 MPa',
    hardness: '280 BHN',
    desc: 'Full Form: Amsted SCT (Standard Car Truck Company USA) Barber S2 Bogie for high-speed 32.5t axle load operations.',
    img: '/images/real_train_wheelset_stock.jpg',
    drawingImg: '/images/real_train_wheelset_stock.jpg',
    cadFile: 'BARBER-S2-325T-AMSTED.STEP',
    keyFeatures: ['Full Form: Amsted SCT (Standard Car Truck USA)', 'Variable friction damping', 'Split wedge pocket design']
  },
  {
    id: 'bog-03',
    category: 'bogies',
    categoryLabel: 'Bogies & Suspension',
    title: 'Finish Machined Axlebox Housing',
    series: 'SERIES 1020',
    specs: 'Forged Carbon Steel ASTM A668 / IS 1030',
    compliance: ['ASTM A668 Class D', 'RDSO Approved'],
    axleLoad: '25.0T Heavy Haul',
    materialGrade: 'Forged Carbon Steel ASTM A668',
    tensileStrength: '700 MPa',
    yieldStrength: '450 MPa',
    hardness: '220 BHN',
    desc: 'Full Form: 5-Axis CNC (Computer Numerical Control) Machined Axlebox Housing for high axle load freight & passenger bogies.',
    img: '/images/amsted_bogie_axlebox.jpg',
    drawingImg: '/images/amsted_bogie_axlebox.jpg',
    cadFile: 'AXLEBOX-HOUSING-CNC.STEP',
    keyFeatures: ['5-axis CNC finished bearing bore', 'Precision seal grooves', 'Ultrasound flaw scanned']
  },
  {
    id: 'bog-04',
    category: 'bogies',
    categoryLabel: 'Bogies & Suspension',
    title: 'CASNUB 22NLR (Low Ride Height Freight Car) Bogie',
    series: 'SERIES 1025',
    specs: 'RDSO Spec WD-21012 Low Platform Container Bogie',
    compliance: ['RDSO WD-21012', 'AAR M-201 Grade B+'],
    axleLoad: '22.0T Freight',
    materialGrade: 'Cast Steel AAR M-201 Grade B+ Normalized',
    tensileStrength: '600 MPa',
    yieldStrength: '380 MPa',
    hardness: '235 BHN',
    desc: 'Full Form: Cast Steel Low Ride Freight Bogie for double-stack container flat wagons and low platform logistics cars.',
    img: '/images/locomotive_wheelset_stock.jpg',
    drawingImg: '/images/locomotive_wheelset_stock.jpg',
    cadFile: 'CASNUB-22NLR-LOWRIDE.DWG',
    keyFeatures: ['Low deck height clearance', 'Enhanced lateral stability', 'Tapered roller bearing adaptors']
  },

  // 3. Couplers & Draft Gears (4 Items)
  {
    id: 'cpl-01',
    category: 'couplers',
    categoryLabel: 'Couplers & Draft',
    title: 'AAR Type H Tightlock Automatic Coupler',
    series: 'SERIES 3010',
    specs: 'AAR (Association of American Railroads) M-201 Grade E Steel',
    compliance: ['AAR M-201 Grade E', 'APTA (Amer. Public Transport Assoc.)', 'ISO 9001:2015'],
    axleLoad: 'High-Speed Rail',
    materialGrade: 'High Strength Cast Steel Alloy AAR Grade E',
    tensileStrength: '825 MPa',
    yieldStrength: '690 MPa',
    hardness: '241 - 311 BHN',
    desc: 'Full Form: AAR (Association of American Railroads) Type H Tightlock Automatic Centre Buffer Coupler.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'AAR-TYPE-H-TIGHTLOCK.STEP',
    keyFeatures: ['Full Form: AAR = Assoc. of American Railroads', 'Anti-telescoping safety interlock', 'Automatic air-pipe coupling']
  },
  {
    id: 'cpl-02',
    category: 'couplers',
    categoryLabel: 'Couplers & Draft',
    title: 'High-Capacity Friction Draft Gear (RDSO 56-K)',
    series: 'SERIES 3020',
    specs: 'Cardwell Westinghouse Tech / RDSO 56-K Specification',
    compliance: ['Cardwell Westinghouse Tech', 'RDSO 56-K Approved'],
    axleLoad: '32.5T Heavy Haul',
    materialGrade: 'Heat Treated Alloy Steel Friction Wedges',
    tensileStrength: '950 MPa',
    yieldStrength: '750 MPa',
    hardness: '320 BHN',
    desc: 'Full Form: RDSO (Research Designs & Standards Org.) 56-K High Energy Shock Buffering Friction Draft Gear.',
    img: '/images/amsted_centering_disc.jpg',
    drawingImg: '/images/amsted_centering_disc.jpg',
    cadFile: 'RDSO-56K-DRAFTGEAR.STEP',
    keyFeatures: ['Full Form: RDSO = Research Designs Standards Org', 'High energy absorption (45,000 ft-lbs)', 'Slack action suppression']
  },
  {
    id: 'cpl-03',
    category: 'couplers',
    categoryLabel: 'Couplers & Draft',
    title: 'AAR Type E Centre Buffer Freight Coupler',
    series: 'SERIES 3030',
    specs: 'AAR M-201 Grade E Heavy Freight Specification',
    compliance: ['AAR M-201 Grade E', 'RDSO Approved'],
    axleLoad: '25.0T Heavy Haul',
    materialGrade: 'Grade E Quenched & Tempered Cast Steel',
    tensileStrength: '825 MPa',
    yieldStrength: '690 MPa',
    hardness: '285 BHN',
    desc: 'Standard AAR Type E automatic centre buffer coupler for heavy haul freight wagons and locomotive trainlines.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'AAR-TYPE-E-COUPLER.STEP',
    keyFeatures: ['AAR Grade E cast steel', 'Heavy buff & draft impact resistance', 'Rotary bottom operation']
  },
  {
    id: 'cpl-04',
    category: 'couplers',
    categoryLabel: 'Couplers & Draft',
    title: 'Rubber Cushioning Draft Unit & Springs',
    series: 'SERIES 3040',
    specs: 'Elastomeric Cushioning Pad Unit (RDSO Spec)',
    compliance: ['RDSO Approved', 'ISO 9001:2015'],
    axleLoad: '22.9T Freight',
    materialGrade: 'High-Density Elastomer & Alloy Steel Housing',
    tensileStrength: '650 MPa',
    yieldStrength: '420 MPa',
    hardness: '65 Shore A Elastomer',
    desc: 'High-capacity elastomeric rubber cushion draft package for smooth train acceleration and impact shock isolation.',
    img: '/images/amsted_centering_disc.jpg',
    drawingImg: '/images/amsted_centering_disc.jpg',
    cadFile: 'RUBBER-CUSHION-DRAFT.STEP',
    keyFeatures: ['Rubber-to-metal bonded pads', 'Zero maintenance design', 'High buff load endurance']
  },

  // 4. Turnouts & Trackwork (4 Items)
  {
    id: 'trk-01',
    category: 'trackwork',
    categoryLabel: 'Turnouts & Track',
    title: '1 in 12 Cast Manganese Steel (CMS) Frog',
    series: 'SERIES 4010',
    specs: '12-14% Austenitic Hadfield Mn Steel (IRS T-29 / AREMA Ch. 4)',
    compliance: ['AREMA (Amer. Railway Eng.) Ch. 4', 'IRS T-29', 'RDSO Approved'],
    axleLoad: '32.5T Heavy Haul',
    materialGrade: 'Austenitic Hadfield Manganese Steel (12-14% Mn)',
    tensileStrength: '880 - 1000 MPa',
    yieldStrength: '450 MPa (Work Hardens to 550 BHN)',
    hardness: 'Initial 220 BHN (Hardens to 550 BHN)',
    desc: 'Full Form: CMS = Cast Manganese Steel (12-14% Austenitic Hadfield Steel) Crossing Frog for heavy haul turnouts.',
    img: '/images/turnout_frog_manganese_stock.jpg',
    drawingImg: '/images/turnout_frog_manganese_stock.jpg',
    cadFile: 'CMS-FROG-1IN12-RDSO.STEP',
    keyFeatures: ['Full Form: CMS = Cast Manganese Steel', 'Explosively pre-hardened running surface', 'Impact self-hardening property']
  },
  {
    id: 'trk-02',
    category: 'trackwork',
    categoryLabel: 'Turnouts & Track',
    title: 'Asymmetrical Thick Web Switch (TWS) Turnout',
    series: 'SERIES 4020',
    specs: '60kg UIC / AREMA High Speed Switch (IRS T-10)',
    compliance: ['AREMA (Amer. Railway Engineering) Ch. 4', 'UIC 60 Rail Spec'],
    axleLoad: '160km/h Speed',
    materialGrade: 'Forged Heat-Treated Asymmetrical Tongue Rail',
    tensileStrength: '1080 MPa',
    yieldStrength: '780 MPa',
    hardness: '320 - 360 BHN',
    desc: 'Full Form: TWS = Thick Web Switch Point Tongue Rail for 160km/h high-speed turnout switching.',
    img: '/images/trackside_turnout_castings_2.jpg',
    drawingImg: '/images/trackside_turnout_castings_2.jpg',
    cadFile: 'TWS-SWITCH-60KG-UIC.STEP',
    keyFeatures: ['Full Form: TWS = Thick Web Switch Point', 'Machined asymmetrical web profile', 'Integrated point machine drive']
  },
  {
    id: 'trk-03',
    category: 'trackwork',
    categoryLabel: 'Turnouts & Track',
    title: '1 in 8.5 Cast Manganese Steel Crossing Frog',
    series: 'SERIES 4030',
    specs: '12-14% Austenitic Hadfield Manganese Steel (IRS T-29)',
    compliance: ['IRS T-29 Standard', 'RDSO Approved'],
    axleLoad: '25.0T Heavy Haul',
    materialGrade: 'Austenitic Hadfield Steel (12-14% Mn)',
    tensileStrength: '850 MPa',
    yieldStrength: '430 MPa',
    hardness: '210 BHN (Hardens to 520 BHN)',
    desc: 'Heavy duty 1 in 8.5 cast manganese steel crossing frog for industrial freight siding turnouts and yard crossovers.',
    img: '/images/turnout_frog_manganese_stock.jpg',
    drawingImg: '/images/turnout_frog_manganese_stock.jpg',
    cadFile: 'CMS-FROG-1IN85.STEP',
    keyFeatures: ['Monobloc cast manganese structure', 'High impact fatigue resistance', 'Weldable leg extensions']
  },
  {
    id: 'trk-04',
    category: 'trackwork',
    categoryLabel: 'Turnouts & Track',
    title: 'Heavy Duty Railway Track Tie Plates & Fasteners',
    series: 'SERIES 4040',
    specs: 'IS 2062 / ASTM A148 Cast Steel Track Plate',
    compliance: ['AREMA Chapter 4', 'IS 2062 Steel'],
    axleLoad: '32.5T Heavy Haul',
    materialGrade: 'Structural Alloy Cast Steel IS 2062 E350',
    tensileStrength: '550 MPa',
    yieldStrength: '350 MPa',
    hardness: '190 BHN',
    desc: 'Precision cast steel track tie plates, canted rail seats, and heavy elastic clip fastening shoulder brackets.',
    img: '/images/trackside_turnout_castings_2.jpg',
    drawingImg: '/images/trackside_turnout_castings_2.jpg',
    cadFile: 'TRACK-TIE-PLATE-60KG.STEP',
    keyFeatures: ['1:40 canted rail seat angle', 'Integrated ribbing reinforcement', 'Galvanized corrosion protection']
  },

  // 5. Foundry Castings (4 Items)
  {
    id: 'cst-01',
    category: 'castings',
    categoryLabel: 'Foundry Castings',
    title: 'Jacking Pad for Diesel-Electric Locomotives',
    series: 'SERIES 1010',
    specs: 'AAR M-201 Grade E Cast Steel (FRA 229 Qualified)',
    compliance: ['AAR M-201 Grade E', 'FRA (Federal Railroad Admin) Qualified'],
    axleLoad: 'Locomotive Rating',
    materialGrade: 'High-Strength Cast Steel Alloy AAR Grade E',
    tensileStrength: '825 MPa',
    yieldStrength: '690 MPa',
    hardness: '241 - 311 BHN',
    desc: 'Full Form: FRA = Federal Railroad Administration (USA). Heavy-duty locomotive lifting pad for maintenance.',
    img: '/images/amsted_jacking_pad.jpg',
    drawingImg: '/images/amsted_jacking_pad.jpg',
    cadFile: 'LOCO-JACKING-PAD.STEP',
    keyFeatures: ['Full Form: FRA = Federal Railroad Administration', '150-Ton lifting point rating', 'Ribbed reinforcement geometry']
  },
  {
    id: 'cst-02',
    category: 'castings',
    categoryLabel: 'Foundry Castings',
    title: 'Ductile Iron Locomotive Brake Head Assembly',
    series: 'SERIES 1015',
    specs: 'ASTM (Amer. Soc. for Testing & Mat.) A536 Ductile Iron / AAR M-926',
    compliance: ['ASTM A536 80-55-06', 'AAR M-926'],
    axleLoad: 'Heavy Brake Rating',
    materialGrade: 'Ductile Cast Iron Grade 80-55-06',
    tensileStrength: '550 MPa',
    yieldStrength: '380 MPa',
    hardness: '187 - 255 BHN',
    desc: 'Full Form: ASTM = American Society for Testing and Materials. Precision cast locomotive brake head assembly.',
    img: '/images/amsted_brake_head.jpg',
    drawingImg: '/images/amsted_brake_head.jpg',
    cadFile: 'BRAKE-HEAD-ASTM-A536.STEP',
    keyFeatures: ['Full Form: ASTM = American Society for Testing', 'High thermal shock resistance', 'Quick-release shoe pin slot']
  },
  {
    id: 'cst-03',
    category: 'castings',
    categoryLabel: 'Foundry Castings',
    title: 'Machined Rotavator Gearbox 13x23 Casing',
    series: 'SERIES 1090',
    specs: 'SG (Spheroidal Graphite) Iron & Forged Alloy Steel',
    compliance: ['ISO 9001:2015', 'Agri OEM Standard'],
    axleLoad: '50-90 HP Tractor',
    materialGrade: 'Spheroidal Graphite Ductile Iron (SG 500/7)',
    tensileStrength: '500 N/mm²',
    yieldStrength: '320 N/mm²',
    hardness: '170 - 230 BHN',
    desc: 'Full Form: SG Iron = Spheroidal Graphite (Ductile) Cast Iron Heavy Casing & Gear Train.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'ROTAVATOR-GEARBOX-13X23.STEP',
    keyFeatures: ['Full Form: SG Iron = Spheroidal Graphite Cast Iron', 'Leakproof CNC gasket face', 'Heavy torque bevel gear seat']
  },
  {
    id: 'cst-04',
    category: 'castings',
    categoryLabel: 'Foundry Castings',
    title: '500kg Heavy Cast Steel Winch Drum',
    series: 'SERIES 1060',
    specs: 'ASTM (Amer. Soc. for Testing & Mat.) A27 Steel Alloy',
    compliance: ['ASTM A27 Grade 70-36', 'ISO 9001:2015'],
    axleLoad: '50-Ton Winch',
    materialGrade: 'Quenched & Tempered Steel Alloy ASTM A27',
    tensileStrength: '700 MPa',
    yieldStrength: '450 MPa',
    hardness: '210 - 250 BHN',
    desc: 'Full Form: ASTM = American Society for Testing and Materials. High-density 500kg cast steel winch drum.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'CAST-STEEL-DRUM-500KG.STEP',
    keyFeatures: ['500kg+ heavy cast steel construction', 'Machine grooved rope drum surface', 'Ultrasonic NDT crack inspected']
  },

  // 6. Ready-Mix Concrete (4 Items)
  {
    id: 'rmx-01',
    category: 'readymix',
    categoryLabel: 'Ready-Mix Concrete',
    title: 'M60 High Performance Concrete (HPC) Sleeper Grade',
    series: 'SERIES RMX-M60',
    specs: 'RDSO T-39 / IS 10262 Pre-Stressed Track Slab Standard',
    compliance: ['IS 10262 Concrete Mix Standard', 'RDSO T-39 Sleeper Spec'],
    axleLoad: '32.5T Heavy Haul',
    materialGrade: 'Portland Pozzolana Cement + Silica Fume & Polypropylene Fibre',
    tensileStrength: '60 N/mm² (28-day Compressive Strength)',
    yieldStrength: 'Flexural Strength 6.8 MPa',
    hardness: 'Slump 150-180mm Flowable',
    desc: 'Full Form: HPC = High Performance Concrete | IS = Indian Standard. Designed for pre-stressed railway sleepers & track slabs.',
    img: '/images/istockphoto-1196704251-2048x2048.jpg',
    drawingImg: '/images/istockphoto-1196704251-2048x2048.jpg',
    cadFile: 'RMX-M60-TRACKSLAB-SPEC.PDF',
    keyFeatures: ['Full Form: HPC = High Performance Concrete', 'Low water-cement ratio (0.32)', '50-year service life design']
  },
  {
    id: 'rmx-02',
    category: 'readymix',
    categoryLabel: 'Ready-Mix Concrete',
    title: 'M80 Ultra High Strength Concrete (UHSC) Bridge Pier Grade',
    series: 'SERIES RMX-M80',
    specs: 'Pre-Stressed Girder & Tunnel Lining Grade (IS 10262 / ASTM C1202)',
    compliance: ['IS 10262 High Strength Standard', 'ASTM C1202 Low Permeability'],
    axleLoad: 'Heavy Bridge Piers',
    materialGrade: 'Quartz Powder & Polypropylene Fibre Reinforced',
    tensileStrength: '80 N/mm² (28-day Compressive Strength)',
    yieldStrength: 'Flexural Strength 8.5 MPa',
    hardness: 'Slump Flow 650mm SCC (Self-Compacting Concrete)',
    desc: 'Full Form: UHSC = Ultra High Strength Concrete | SCC = Self-Compacting Concrete. Engineered for transit viaducts.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'RMX-M80-UHSC-SPEC.PDF',
    keyFeatures: ['Full Form: UHSC = Ultra High Strength Concrete', 'SCC = Self-Compacting Concrete', 'Polypropylene fiber anti-spalling']
  },
  {
    id: 'rmx-03',
    category: 'readymix',
    categoryLabel: 'Ready-Mix Concrete',
    title: 'M70 Pre-Stressed Railway Track Slab Concrete',
    series: 'SERIES RMX-M70',
    specs: 'High Speed Ballastless Track Slab Grade (IS 10262 / DIN 1045)',
    compliance: ['IS 10262 Standard', 'DIN 1045 Structural Spec'],
    axleLoad: '160km/h Speed',
    materialGrade: 'Micro-silica Enhanced High-Density Concrete Mix',
    tensileStrength: '70 N/mm² (28-day Compressive Strength)',
    yieldStrength: 'Flexural Strength 7.5 MPa',
    hardness: 'Slump Flow 600mm',
    desc: 'High density ballastless track slab concrete formulation for high-speed rail passenger corridors.',
    img: '/images/istockphoto-1196704251-2048x2048.jpg',
    drawingImg: '/images/istockphoto-1196704251-2048x2048.jpg',
    cadFile: 'RMX-M70-BALLASTLESS.PDF',
    keyFeatures: ['High fatigue vibration absorption', 'Low chloride ion permeability', 'Rapid strength gain']
  },
  {
    id: 'rmx-04',
    category: 'readymix',
    categoryLabel: 'Ready-Mix Concrete',
    title: 'Self-Compacting Concrete (SCC) 650mm Flow Grade',
    series: 'SERIES RMX-SCC',
    specs: 'EFNARC Guidelines / IS 10262 Self-Compacting Concrete',
    compliance: ['EFNARC European Guidelines', 'IS 10262 SCC'],
    axleLoad: 'Transit Viaducts',
    materialGrade: 'Polycarboxylate Ether Superplasticizer Mix',
    tensileStrength: '65 N/mm²',
    yieldStrength: 'Flexural Strength 7.0 MPa',
    hardness: '650mm Slump Flow',
    desc: 'Full Form: SCC = Self-Compacting Concrete. Highly flowable, non-segregating concrete that fills congested reinforcement without mechanical vibration.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'RMX-SCC-FLOW-SPEC.PDF',
    keyFeatures: ['Full Form: SCC = Self-Compacting Concrete', 'Self-leveling 650mm slump flow', 'Zero honeycombing guarantee']
  },

  // 7. German LHB / FIAT Coach Parts (4 Items)
  {
    id: 'lhb-01',
    category: 'lhb',
    categoryLabel: 'LHB / FIAT Coach Parts',
    title: 'Control Arm Upper, Lower Right & Lower Left (SG 400/18)',
    series: 'SERIES LHB-CTRL-01',
    specs: 'Conforming to DIN / EN / ISO Standards for High-Speed German LHB Coaches',
    compliance: ['DIN 17280', 'EN 1563', 'ISO 9001:2015'],
    axleLoad: '16-20T Passenger',
    materialGrade: 'Spheroidal Graphite Ductile Iron (SG 400/18)',
    tensileStrength: '400 N/mm²',
    yieldStrength: '250 N/mm²',
    hardness: '140 - 190 BHN',
    desc: 'Critical under-chassis control arm assembly (Upper, Lower Right, Lower Left) for German design LHB/FIAT high-speed passenger coach bogies.',
    img: '/images/locomotive_wheelset_stock.jpg',
    drawingImg: '/images/locomotive_wheelset_stock.jpg',
    cadFile: 'LHB-CONTROL-ARM-SG400.STEP',
    keyFeatures: ['Full Form: LHB = Linke-Hofmann-Busch German High Speed Coach', 'SG 400/18 Ductile Iron', 'Precision CNC machined pin bore']
  },
  {
    id: 'lhb-02',
    category: 'lhb',
    categoryLabel: 'LHB / FIAT Coach Parts',
    title: 'Centering Disc Assembly (DIN 17182 GS-20Mn5V)',
    series: 'SERIES LHB-DISC-02',
    specs: 'DIN 17182 GS-20Mn5V Manganese-Vanadium Cast Steel',
    compliance: ['DIN 17182', 'EN 10293', 'ISO 9001:2015'],
    axleLoad: 'High-Speed Rail',
    materialGrade: 'GS-20Mn5V Cast Manganese-Vanadium Alloy Steel',
    tensileStrength: '600 - 750 MPa',
    yieldStrength: '400 MPa',
    hardness: '200 - 240 BHN',
    desc: 'Full Form: Centering Disc Assembly (All Types) conforming to German DIN 17182 GS-20Mn5V for LHB secondary suspension bogie bolster alignment.',
    img: '/images/amsted_centering_disc.jpg',
    drawingImg: '/images/amsted_centering_disc.jpg',
    cadFile: 'CENTERING-DISC-GS20MN5V.STEP',
    keyFeatures: ['DIN 17182 Manganese-Vanadium alloy steel', 'High fatigue endurance', 'Sub-zero impact toughness']
  },
  {
    id: 'lhb-03',
    category: 'lhb',
    categoryLabel: 'LHB / FIAT Coach Parts',
    title: 'Brake Support Bracket (GS-20Mn5V Steel Alloy)',
    series: 'SERIES LHB-BRK-03',
    specs: 'DIN 17182 / EN 10293 High-Speed Disc Brake Mounting',
    compliance: ['DIN 17182 GS-20Mn5V', 'EN 15085 Welding Spec'],
    axleLoad: '160km/h Speed',
    materialGrade: 'GS-20Mn5V Quenched Alloy Cast Steel',
    tensileStrength: '650 MPa',
    yieldStrength: '420 MPa',
    hardness: '210 BHN',
    desc: 'Under-chassis brake caliper support bracket for German LHB bogie disc braking systems.',
    img: '/images/amsted_brake_head.jpg',
    drawingImg: '/images/amsted_brake_head.jpg',
    cadFile: 'LHB-BRAKE-SUPPORT.STEP',
    keyFeatures: ['GS-20Mn5V alloy steel', 'High thermal shock resistance', '100% Volumetric NDT tested']
  },
  {
    id: 'lhb-04',
    category: 'lhb',
    categoryLabel: 'LHB / FIAT Coach Parts',
    title: 'Set Of Console, Pin Bracket & Bump Stop Bracket',
    series: 'SERIES LHB-CONS-04',
    specs: 'IS 1030 / DIN EN 10293 Under-Chassis Bracket Set',
    compliance: ['IS 1030 Grade 230-450', 'DIN EN 10293'],
    axleLoad: 'LHB Passenger',
    materialGrade: 'Cast Steel IS 1030 Grade 230-450 / GS-20Mn5V',
    tensileStrength: '520 MPa',
    yieldStrength: '300 MPa',
    hardness: '185 BHN',
    desc: 'Complete under-chassis critical console, pin bracket, and bump stop bracket mounting set for LHB FIAT bogie frame assembly.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'LHB-BRACKET-SET.STEP',
    keyFeatures: ['Includes console, pin bracket & bump stop bracket', 'IS 1030 Grade 230-450 cast steel', 'Anti-vibration rubber pad seating']
  },

  // 8. Locomotive Components (4 Items)
  {
    id: 'loco-01',
    category: 'locomotive',
    categoryLabel: 'Locomotive Components',
    title: 'Locomotive Jacking Pad & Coupler Carrier',
    series: 'SERIES LOCO-JACK-01',
    specs: 'AAR M-201 Grade E Cast Steel (FRA 229 Qualified)',
    compliance: ['AAR M-201 Grade E', 'FRA 229 Qualified', 'ISO 9001:2015'],
    axleLoad: 'Locomotive Rating',
    materialGrade: 'High-Strength Cast Steel Alloy AAR Grade E',
    tensileStrength: '825 MPa',
    yieldStrength: '690 MPa',
    hardness: '241 - 311 BHN',
    desc: 'Full Form: Heavy-duty locomotive jacking pad and coupler carrier casting engineered for 150-ton lifting points in maintenance shops.',
    img: '/images/amsted_jacking_pad.jpg',
    drawingImg: '/images/amsted_jacking_pad.jpg',
    cadFile: 'LOCO-JACKING-PAD.STEP',
    keyFeatures: ['150-Ton lifting point rating', 'Ribbed reinforcement geometry', 'CMM 3D dimensional verification']
  },
  {
    id: 'loco-02',
    category: 'locomotive',
    categoryLabel: 'Locomotive Components',
    title: 'Bearing Adaptor Plate Assembly & Equaliser Spring Seat',
    series: 'SERIES LOCO-ADP-02',
    specs: 'AAR M-201 Grade B+ / ASTM A668 Class D',
    compliance: ['AAR M-201', 'ASTM A668', 'RDSO Approved'],
    axleLoad: '32.5T Heavy Freight',
    materialGrade: 'Forged Carbon Steel ASTM A668 Quenched',
    tensileStrength: '720 MPa',
    yieldStrength: '480 MPa',
    hardness: '220 BHN',
    desc: 'Precision machined bearing adaptor plate assembly, equaliser spring seat, and fuel pump support for locomotive bogie axleboxes.',
    img: '/images/prod_railway_track_plates.jpg',
    drawingImg: '/images/prod_railway_track_plates.jpg',
    cadFile: 'LOCO-BEARING-ADAPTOR.STEP',
    keyFeatures: ['Hardened wear liner surfaces', 'Compatible with Class I freight locomotives', 'High compressive fatigue strength']
  },
  {
    id: 'loco-03',
    category: 'locomotive',
    categoryLabel: 'Locomotive Components',
    title: 'Brake Head for Brake Rigging Kit & Fuel Pump Support',
    series: 'SERIES LOCO-BRK-03',
    specs: 'ASTM A536 80-55-06 Ductile Iron / AAR M-926 Specification',
    compliance: ['ASTM A536 80-55-06', 'AAR M-926'],
    axleLoad: 'Heavy Brake Rating',
    materialGrade: 'Ductile Cast Iron Grade 80-55-06',
    tensileStrength: '550 MPa',
    yieldStrength: '380 MPa',
    hardness: '187 - 255 BHN',
    desc: 'Locomotive brake rigging kit brake head and heavy fuel pump support bracket casting.',
    img: '/images/amsted_brake_head.jpg',
    drawingImg: '/images/amsted_brake_head.jpg',
    cadFile: 'LOCO-BRAKE-HEAD-RIGGING.STEP',
    keyFeatures: ['ASTM A536 Ductile Iron', 'Thermal dissipation fins', 'Quick-release shoe pin slot']
  },
  {
    id: 'loco-04',
    category: 'locomotive',
    categoryLabel: 'Locomotive Components',
    title: 'Fuel Pump Support & Locomotive Engine Mount',
    series: 'SERIES LOCO-MNT-04',
    specs: 'ASTM A536 Ductile Iron Heavy Mounting Support',
    compliance: ['ASTM A536 65-45-12', 'ISO 9001:2015'],
    axleLoad: 'Locomotive Rating',
    materialGrade: 'High-Ductility Cast Iron Grade 65-45-12',
    tensileStrength: '480 MPa',
    yieldStrength: '310 MPa',
    hardness: '175 BHN',
    desc: 'Heavy-duty locomotive engine fuel pump support bracket and anti-vibration engine mounting block casting.',
    img: '/images/amsted_jacking_pad.jpg',
    drawingImg: '/images/amsted_jacking_pad.jpg',
    cadFile: 'LOCO-FUEL-PUMP-MOUNT.STEP',
    keyFeatures: ['Vibration dampening geometry', 'Precision CNC bolt hole layout', 'Corrosion-resistant coating']
  },

  // 9. Agri Industry Castings (4 Items)
  {
    id: 'agri-01',
    category: 'agri',
    categoryLabel: 'Agri Industry',
    title: 'Rotavator Gearbox 13x23 Heavy Duty Casing',
    series: 'SERIES AGRI-ROTA-01',
    specs: 'SG (Spheroidal Graphite) Iron & Forged Alloy Steel Gear Train',
    compliance: ['ISO 9001:2015', 'Agri OEM Standard'],
    axleLoad: '50-90 HP Tractor',
    materialGrade: 'Spheroidal Graphite Ductile Iron (SG 500/7)',
    tensileStrength: '500 N/mm²',
    yieldStrength: '320 N/mm²',
    hardness: '170 - 230 BHN',
    desc: 'Full Form: Heavy industrial machined 13x23 rotavator gearbox housing and reduction gear train.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'AGRI-ROTAVATOR-13X23.STEP',
    keyFeatures: ['Full Form: SG Iron = Spheroidal Graphite Cast Iron', 'Leakproof CNC gasket face', 'Heavy torque bevel gear seat']
  },
  {
    id: 'agri-02',
    category: 'agri',
    categoryLabel: 'Agri Industry',
    title: 'Rotavator Gearbox 13x25 Dual Speed Heavy Duty Casing',
    series: 'SERIES AGRI-ROTA-02',
    specs: 'SG (Spheroidal Graphite) Iron 13x25 Dual Speed Casing',
    compliance: ['ISO 9001:2015', 'Agri OEM Standard'],
    axleLoad: '60-110 HP Tractor',
    materialGrade: 'Spheroidal Graphite Ductile Iron (SG 600/3)',
    tensileStrength: '600 N/mm²',
    yieldStrength: '370 N/mm²',
    hardness: '200 - 250 BHN',
    desc: 'Heavy-duty 13x25 dual-speed agricultural rotavator gearbox casing engineered for high-horsepower tractors.',
    img: '/images/prod_sonalika_rotavator_13x25.jpg',
    drawingImg: '/images/prod_sonalika_rotavator_13x25.jpg',
    cadFile: 'AGRI-ROTAVATOR-13X25.STEP',
    keyFeatures: ['Dual speed selector casing', 'Heavy duty PTO shaft seal', 'High-strength SG iron casting']
  },
  {
    id: 'agri-03',
    category: 'agri',
    categoryLabel: 'Agri Industry',
    title: 'Combine Harvester Reduction Gear Housing & Shackles',
    series: 'SERIES AGRI-COMB-03',
    specs: 'High-Tensile Ductile Iron & Forged Alloy Steel',
    compliance: ['ISO 9001:2015', 'OEM Agri Spec'],
    axleLoad: 'Harvester Rating',
    materialGrade: 'SG 600/3 Ductile Iron & Forged Alloy Steel',
    tensileStrength: '600 N/mm²',
    yieldStrength: '370 N/mm²',
    hardness: '200 - 250 BHN',
    desc: 'Heavy-duty reduction gear housings, combine harvester chassis castings, and high-tensile agricultural shackles.',
    img: '/images/real_steel_gears_stock.jpg',
    drawingImg: '/images/real_steel_gears_stock.jpg',
    cadFile: 'AGRI-COMBINE-REDUCTION.STEP',
    keyFeatures: ['SG 600/3 High-strength ductile iron', 'High torque reduction gear casing', 'Forged heavy lifting shackles']
  },
  {
    id: 'agri-04',
    category: 'agri',
    categoryLabel: 'Agri Industry',
    title: 'Brake Drums, Flywheels, Rotor Housing & 3-Point Linkage',
    series: 'SERIES AGRI-LINK-04',
    specs: 'Grade FG 260 Gray Iron / Forged Carbon Steel 3-Point Linkage',
    compliance: ['ISO 9001:2015', 'IS 210 FG 260'],
    axleLoad: 'Tractor Implement',
    materialGrade: 'High-Density Gray Cast Iron FG 260 & Forged Steel',
    tensileStrength: '260 - 350 N/mm²',
    yieldStrength: '180 N/mm²',
    hardness: '180 - 220 BHN',
    desc: 'Machined tractor brake drums, engine flywheels, rotor housings, and top/bottom front 3-point linkage arms.',
    img: '/images/prod_sonalika_rotavator_13x25.jpg',
    drawingImg: '/images/prod_sonalika_rotavator_13x25.jpg',
    cadFile: 'AGRI-TRACTOR-LINKAGE.STEP',
    keyFeatures: ['Dynamically balanced flywheels', 'Precision turned brake drum friction surface', 'Forged top & bottom linkage arms']
  },

  // 10. OEM & Stub Axles (4 Items)
  {
    id: 'oem-01',
    category: 'oem',
    categoryLabel: 'OEM Components',
    title: '10 Ton Stub Axle (Forged Alloy Steel AISI 4140)',
    series: 'SERIES OEM-AXL-01',
    specs: 'Forged Alloy Steel AISI 4140 / EN19 Heat Treated',
    compliance: ['Automotive OEM Spec', 'ISO 9001:2015'],
    axleLoad: '8.0-10.0T OEM',
    materialGrade: 'Quenched & Tempered Forged Alloy Steel 4140',
    tensileStrength: '850 - 1000 MPa',
    yieldStrength: '650 MPa',
    hardness: '280 - 320 BHN',
    desc: 'Heavy-duty 10-ton stub axle journals and 8-ton steering knuckles for commercial trailers, buses, and heavy machinery.',
    img: '/images/amsted_bogie_axlebox.jpg',
    drawingImg: '/images/amsted_bogie_axlebox.jpg',
    cadFile: 'OEM-STUB-AXLE-10T.STEP',
    keyFeatures: ['10-Ton load capacity', 'Induction hardened spindle journal', 'Sub-micron CMM dimensional auditing']
  },
  {
    id: 'oem-02',
    category: 'oem',
    categoryLabel: 'OEM Components',
    title: '8 Ton Steering Knuckle for Commercial Vehicles',
    series: 'SERIES OEM-KNK-02',
    specs: 'Forged Medium Carbon Alloy Steel EN19',
    compliance: ['OEM Heavy Vehicle Spec', 'ISO 9001:2015'],
    axleLoad: '8.0T Steering',
    materialGrade: 'Forged Alloy Steel EN19 Quenched',
    tensileStrength: '800 MPa',
    yieldStrength: '580 MPa',
    hardness: '275 BHN',
    desc: 'Precision forged 8-ton heavy commercial vehicle steering knuckle casting with machined kingpin bore seats.',
    img: '/images/amsted_bogie_axlebox.jpg',
    drawingImg: '/images/amsted_bogie_axlebox.jpg',
    cadFile: 'OEM-STEERING-KNUCKLE-8T.STEP',
    keyFeatures: ['Precision bored kingpin journal', 'High fatigue endurance forged steel', '100% magnetic flaw tested']
  },
  {
    id: 'oem-03',
    category: 'oem',
    categoryLabel: 'OEM Components',
    title: 'Rotor & Elliptical Pin Assembly',
    series: 'SERIES OEM-PIN-03',
    specs: 'Induction Hardened Boron Steel Elliptical Pin',
    compliance: ['Heavy Equipment OEM Spec', 'ISO 9001:2015'],
    axleLoad: 'Heavy Equipment',
    materialGrade: 'Boron Steel Alloy (Induction Hardened)',
    tensileStrength: '920 MPa',
    yieldStrength: '720 MPa',
    hardness: '52 - 58 HRC',
    desc: 'Precision turned drive rotor housing and induction hardened elliptical pin assembly for heavy industrial linkages.',
    img: '/images/prod_sprockets.jpg',
    drawingImg: '/images/prod_sprockets.jpg',
    cadFile: 'OEM-ELLIPTICAL-PIN.STEP',
    keyFeatures: ['Induction hardened wear skin', 'Elliptical cross-section pin geometry', 'High shear strength']
  },
  {
    id: 'oem-04',
    category: 'oem',
    categoryLabel: 'OEM Components',
    title: 'Undercarriage Drive Sprockets & Track Castings',
    series: 'SERIES OEM-SPRK-04',
    specs: 'Induction Hardened Steel Castings & Forgings',
    compliance: ['Heavy Equipment OEM Spec', 'ISO 9001:2015'],
    axleLoad: 'Tracked Crawler',
    materialGrade: 'Medium Carbon Boron Alloy Steel (Induction Hardened)',
    tensileStrength: '900 MPa',
    yieldStrength: '700 MPa',
    hardness: '50 - 55 HRC (Tooth Surface)',
    desc: 'Drive rotors, elliptical pin assemblies, track sprockets, and suspension brackets for tracked machinery and trailers.',
    img: '/images/prod_sprockets.jpg',
    drawingImg: '/images/prod_sprockets.jpg',
    cadFile: 'OEM-UNDERCARRIAGE-SPROCKET.STEP',
    keyFeatures: ['Deep induction hardened teeth', 'High wear resistance', 'Precision splined bore fit']
  },

  // 11. Mining Haulages & Winches (4 Items)
  {
    id: 'mine-01',
    category: 'mining',
    categoryLabel: 'Mining Industry',
    title: 'Mining Haulages & Heavy Steel Winch Drums',
    series: 'SERIES MINE-DRUM-01',
    specs: 'ASTM A27 Grade 70-36 Steel Alloy (Heavy Winch Rating)',
    compliance: ['ASTM A27', 'ISO 9001:2015', 'DGMS Mine Safety Approved'],
    axleLoad: '50-Ton Winch',
    materialGrade: 'Quenched & Tempered Steel Alloy ASTM A27',
    tensileStrength: '700 MPa',
    yieldStrength: '450 MPa',
    hardness: '210 - 250 BHN',
    desc: 'Full Form: Heavy-density 500kg+ cast steel drums for underground mining haulage systems and surface winches.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'MINING-HAULAGE-DRUM.STEP',
    keyFeatures: ['500kg+ heavy cast steel construction', 'Machine grooved rope drum surface', 'Ultrasonic NDT crack inspected']
  },
  {
    id: 'mine-02',
    category: 'mining',
    categoryLabel: 'Mining Industry',
    title: 'Aerial Ropeways, Flanges & Pulleys',
    series: 'SERIES MINE-PULL-02',
    specs: 'SG 600/3 Ductile Iron & High-Manganese Steel Alloy',
    compliance: ['Mine Safety Standard', 'ISO 9001:2015'],
    axleLoad: 'Mining Ropeway',
    materialGrade: 'High-Tensile SG Iron 600/3 & Manganese Alloy',
    tensileStrength: '650 MPa',
    yieldStrength: '400 MPa',
    hardness: '220 - 280 BHN',
    desc: 'Heavy flanged pulleys, aerial ropeway sheaves, mining reduction gearboxes, and roof bolter support castings.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'MINING-ROPEWAY-PULLEY.STEP',
    keyFeatures: ['Flame hardened pulley rope groove', 'Heavy flanged hub design', 'Abrasion-resistant mining roof bolter housing']
  },
  {
    id: 'mine-03',
    category: 'mining',
    categoryLabel: 'Mining Industry',
    title: 'Mining Reduction Gearbox Housing',
    series: 'SERIES MINE-GBX-03',
    specs: 'Heavy Ductile Iron SG 600/3 Casing',
    compliance: ['DGMS Mine Safety Standard', 'ISO 9001:2015'],
    axleLoad: 'Heavy Mining',
    materialGrade: 'Spheroidal Graphite Iron SG 600/3',
    tensileStrength: '600 MPa',
    yieldStrength: '380 MPa',
    hardness: '230 BHN',
    desc: 'Heavy-wall reduction gearbox housing designed for severe torque underground slurry pumps and conveyor drives.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'MINING-GEARBOX-HOUSING.STEP',
    keyFeatures: ['Heavy wall vibration damping', 'CNC precision bearing bores', 'Pressure tested casing']
  },
  {
    id: 'mine-04',
    category: 'mining',
    categoryLabel: 'Mining Industry',
    title: 'Underground Mining Roof Bolter Casing',
    series: 'SERIES MINE-BOLT-04',
    specs: 'Abrasion Resistant Steel Alloy Casting (DGMS)',
    compliance: ['DGMS Mine Safety Standard', 'ISO 9001:2015'],
    axleLoad: 'Roof Bolter',
    materialGrade: 'Quenched Alloy Cast Steel ASTM A148',
    tensileStrength: '750 MPa',
    yieldStrength: '520 MPa',
    hardness: '260 BHN',
    desc: 'High-impact roof bolter drill head and gear housing casting for underground coal and rock mining machinery.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'MINING-ROOF-BOLTER.STEP',
    keyFeatures: ['Explosion-proof joint faces', 'High impact abrasion resistance', 'Ultrasound flaw tested']
  },

  // 12. EN Alloys & High Chrome (4 Items)
  {
    id: 'en-01',
    category: 'en_castings',
    categoryLabel: 'EN Alloy Castings',
    title: 'EN8 & EN9 Engineering Carbon Steel Castings',
    series: 'SERIES EN-ALLOY-01',
    specs: 'BS EN 10083 High Tensile Medium Carbon Steels',
    compliance: ['BS EN 10083', 'IS 2708', 'ASTM A148'],
    axleLoad: 'EN Steel Alloy',
    materialGrade: 'EN8 / EN9 Medium Carbon Steel',
    tensileStrength: '700 - 850 MPa',
    yieldStrength: '450 - 550 MPa',
    hardness: '200 - 260 BHN',
    desc: 'Comprehensive range of EN8 and EN9 engineering carbon steel castings for heavy machinery axles, gears, and shafts.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'EN8-EN9-STEEL-CASTINGS.STEP',
    keyFeatures: ['Full Form: EN = European Norm Steel Standards', 'Good machinability & toughness', 'Normalized heat treatment']
  },
  {
    id: 'en-02',
    category: 'en_castings',
    categoryLabel: 'EN Alloy Castings',
    title: 'EN19 & EN24 High-Tensile Quenched Alloy Castings',
    series: 'SERIES EN-ALLOY-02',
    specs: 'BS EN 10083 Ni-Cr-Mo High Tensile Steel',
    compliance: ['BS EN 10083', 'ASTM A148 Grade 105-85'],
    axleLoad: 'High Tensile',
    materialGrade: 'EN19 (4140) & EN24 (4340) Ni-Cr-Mo Steel',
    tensileStrength: '850 - 1050 MPa',
    yieldStrength: '650 - 850 MPa',
    hardness: '280 - 340 BHN',
    desc: 'High-tensile EN19 and EN24 nickel-chromium-molybdenum steel castings quenched and tempered for extreme stress components.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'EN19-EN24-HIGH-TENSILE.STEP',
    keyFeatures: ['EN24 Ni-Cr-Mo high tensile steel', 'Extreme torsional fatigue resistance', 'Deep hardenability']
  },
  {
    id: 'en-03',
    category: 'en_castings',
    categoryLabel: 'EN Alloy Castings',
    title: 'IS 2708 Grade 3 Structural Steel Castings',
    series: 'SERIES EN-IS2708-03',
    specs: 'IS 2708 Grade 3 High Tensile Carbon Steel',
    compliance: ['IS 2708 Grade 3', 'ISO 9001:2015'],
    axleLoad: 'Structural Steel',
    materialGrade: 'Normalized Cast Carbon Steel IS 2708 Grade 3',
    tensileStrength: '640 MPa',
    yieldStrength: '380 MPa',
    hardness: '210 BHN',
    desc: 'Standard IS 2708 Grade 3 carbon steel castings for heavy industrial machinery frames, crane wheels, and gear blanks.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'IS2708-GRADE3-CASTING.STEP',
    keyFeatures: ['IS 2708 Grade 3 standard steel', 'Excellent weldability', 'Uniform grain refinement']
  },
  {
    id: 'en-04',
    category: 'en_castings',
    categoryLabel: 'EN Alloy Castings',
    title: 'High Chrome & Stone Crusher Jaw Plates (27% Cr)',
    series: 'SERIES EN-CRUSH-04',
    specs: 'IS 2708 & 27% High Chromium White Cast Iron (ASTM A532 Class III)',
    compliance: ['ASTM A532 Class III', 'IS 2708 Grade 3'],
    axleLoad: '27% High Chrome',
    materialGrade: '27% High Chrome White Iron & 14% Manganese Hadfield Steel',
    tensileStrength: '800 MPa',
    yieldStrength: '600 MPa',
    hardness: '58 - 65 HRC (Rockwell Hardness C Scale)',
    desc: 'High-chrome abrasion-resistant liners, stone crusher jaw plates, mantles, heat-resistant boiler grates, and ornamental castings.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'HIGH-CHROME-CRUSHER-JAW.STEP',
    keyFeatures: ['27% High Chrome white iron', '65 HRC max abrasion hardness', 'Heat resistant boiler grate castings']
  }
];

interface InteractiveExplorerProps {
  onRequestQuoteForProduct?: (productTitle: string) => void;
  isModalView?: boolean;
  onCloseModal?: () => void;
}

export const InteractiveExplorer: React.FC<InteractiveExplorerProps> = ({
  onRequestQuoteForProduct,
  isModalView = false,
  onCloseModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStandard, setActiveStandard] = useState<string>('all');
  const [activeAxleLoad, setActiveAxleLoad] = useState<string>('all');
  // View & Glossary States
  const [viewMode, setViewMode] = useState<'grid' | 'table' | 'compare'>('grid');
  const [showGlossary, setShowGlossary] = useState<boolean>(true);
  
  // Selected for Detailed CAD & Spec Drawer
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  
  // Selected items for Comparison Tool (max 3)
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);
  const [drawingModalProduct, setDrawingModalProduct] = useState<{ title: string; series: string; specs: string; img: string } | null>(null);

  // Available Standards Filter Options
  const standardsList = [
    { id: 'all', label: 'All Standards' },
    { id: 'RDSO', label: 'RDSO' },
    { id: 'AAR', label: 'AAR M-201' },
    { id: 'AREMA', label: 'AREMA' },
    { id: 'ASTM', label: 'ASTM' },
    { id: 'IS', label: 'IS / IRS Spec' }
  ];

  // Available Axle Load Filter Options
  const axleLoadList = [
    { id: 'all', label: 'All Axle Loads' },
    { id: '22.9', label: '22.9T Freight' },
    { id: '25.0', label: '25.0T Heavy Freight' },
    { id: '32.5', label: '32.5T Heavy Haul' },
    { id: 'High', label: 'High Speed / Pass.' }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'lhb', label: 'LHB / FIAT German Coach Parts' },
    { id: 'locomotive', label: 'Locomotive Components' },
    { id: 'agri', label: 'Agri Industry Castings' },
    { id: 'oem', label: 'OEM & Stub Axles' },
    { id: 'mining', label: 'Mining Haulages & Ropeways' },
    { id: 'en_castings', label: 'EN Alloys & High Chrome' },
    { id: 'wagons', label: 'Freight Wagons' },
    { id: 'bogies', label: 'Freight Bogies' },
    { id: 'couplers', label: 'Couplers & Draft Gears' },
    { id: 'trackwork', label: 'Turnouts & Track Plates' },
    { id: 'readymix', label: 'Ready-Mix Concrete' }
  ];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(item => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;

      // Standard match
      if (activeStandard !== 'all') {
        const matchesStandard = item.compliance.some(c => c.toLowerCase().includes(activeStandard.toLowerCase())) ||
                                item.specs.toLowerCase().includes(activeStandard.toLowerCase());
        if (!matchesStandard) return false;
      }

      // Axle Load match
      if (activeAxleLoad !== 'all') {
        const matchesAxle = item.axleLoad.toLowerCase().includes(activeAxleLoad.toLowerCase());
        if (!matchesAxle) return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          item.title.toLowerCase().includes(query) ||
          item.series.toLowerCase().includes(query) ||
          item.specs.toLowerCase().includes(query) ||
          item.materialGrade.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.cadFile.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [activeCategory, activeStandard, activeAxleLoad, searchQuery]);

  // Comparison toggle handler
  const toggleCompare = (id: string) => {
    setComparedProductIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 products at a time.');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const comparedProducts = useMemo(() => {
    return EXPLORER_PRODUCTS.filter(p => comparedProductIds.includes(p.id));
  }, [comparedProductIds]);

  return (
    <section 
      id="explorer" 
      style={{ 
        background: isModalView ? '#FFFFFF' : '#FAFBFD',
        padding: isModalView ? '1.5rem' : '4rem 1.5rem',
        borderBottom: isModalView ? 'none' : '1px solid #E2E8F0',
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      <div className={isModalView ? '' : 'container-custom'}>
        
        {/* Section Header */}
        {!isModalView && (
          <div style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(27, 94, 32, 0.08)', 
              color: '#1B5E20', 
              padding: '6px 16px', 
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <Sparkles size={16} color="#4CAF50" />
              <span>INTERACTIVE ENGINEERING SEARCH ENGINE</span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
              color: '#0F172A', 
              fontWeight: 900, 
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              ENGINEERING PRODUCT &amp; SPECIFICATION EXPLORER
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Search across 100+ AREMA, RDSO &amp; AAR certified railway components, heavy steel castings, and ready-mix concrete formulations. Filter by compliance, load rating, and mechanical tolerances.
            </p>
          </div>
        )}

        {/* Modal Top Bar if in Modal View */}
        {isModalView && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: '#1B5E20', color: '#FFF', padding: '8px', borderRadius: '6px', display: 'flex' }}>
                <Compass size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Component &amp; Technical Spec Explorer
                </h3>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>
                  Filter by RDSO / AAR standards, material grades, and CAD schematics
                </span>
              </div>
            </div>

            {onCloseModal && (
              <button 
                onClick={onCloseModal}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#475569',
                  transition: 'all 0.2s'
                }}
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Filter Controls Toolbar */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #E2E8F0',
          marginBottom: '2rem'
        }}>
          
          {/* Top Line: Search Bar + View Mode Toggles + Compare Counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            
            {/* Search Input Box */}
            <div style={{ flex: '1 1 320px', position: 'relative' }}>
              <Search size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search part name, spec (e.g. RDSO, CASNUB, M-201, M60), DWG filename..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 42px',
                  borderRadius: '8px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.925rem',
                  color: '#0F172A',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = '#1B5E20'}
                onBlur={e => e.target.style.borderColor = '#CBD5E1'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    fontSize: '0.8rem'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Switcher + Compare Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              
              {/* Compare Items Button */}
              {comparedProductIds.length > 0 && (
                <button
                  onClick={() => setViewMode('compare')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'compare' ? '#1B5E20' : '#E8F5E9',
                    color: viewMode === 'compare' ? '#FFF' : '#1B5E20',
                    border: '1px solid #4CAF50',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Compare ({comparedProductIds.length}/3)</span>
                </button>
              )}

              {/* Grid / Table View Toggles */}
              <div style={{ display: 'flex', background: '#F1F5F9', borderRadius: '8px', padding: '4px', border: '1px solid #E2E8F0' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'grid' ? '#1B5E20' : '#64748B',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Grid size={16} />
                  <span>Grid Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: viewMode === 'table' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'table' ? '#1B5E20' : '#64748B',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: viewMode === 'table' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Table size={16} />
                  <span>Spec Table</span>
                </button>
              </div>

            </div>

          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9', marginBottom: '1rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  background: activeCategory === cat.id ? '#1B5E20' : '#F8FAFC',
                  color: activeCategory === cat.id ? '#FFFFFF' : '#475569',
                  border: activeCategory === cat.id ? '1px solid #1B5E20' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Pill Filters: Standard & Axle Load */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Standards Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Standard:
              </span>
              {standardsList.map(std => (
                <button
                  key={std.id}
                  onClick={() => setActiveStandard(std.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeStandard === std.id ? 700 : 500,
                    background: activeStandard === std.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeStandard === std.id ? '#1B5E20' : '#64748B',
                    border: activeStandard === std.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {std.label}
                </button>
              ))}
            </div>

            {/* Axle Load Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Axle Load:
              </span>
              {axleLoadList.map(axle => (
                <button
                  key={axle.id}
                  onClick={() => setActiveAxleLoad(axle.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.775rem',
                    fontWeight: activeAxleLoad === axle.id ? 700 : 500,
                    background: activeAxleLoad === axle.id ? '#E8F5E9' : '#FFFFFF',
                    color: activeAxleLoad === axle.id ? '#1B5E20' : '#64748B',
                    border: activeAxleLoad === axle.id ? '1px solid #4CAF50' : '1px solid #CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {axle.label}
                </button>
              ))}
            </div>

            {/* Active Results Counter & Glossary Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setShowGlossary(!showGlossary)}
                style={{
                  background: showGlossary ? '#1B5E20' : '#E8F5E9',
                  color: showGlossary ? '#FFFFFF' : '#1B5E20',
                  border: '1px solid #4CAF50',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Info size={14} />
                <span>{showGlossary ? 'Hide Full Forms Guide' : 'View Full Forms & Acronym Glossary'}</span>
              </button>

              <div style={{ fontSize: '0.825rem', color: '#64748B', fontWeight: 600 }}>
                Showing <strong style={{ color: '#1B5E20' }}>{filteredProducts.length}</strong> components
              </div>
            </div>

          </div>

          {/* Expandable Acronym & Full Form Glossary Banner */}
          {showGlossary && (
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px dashed #CBD5E1',
              background: '#F8FAFC',
              borderRadius: '10px',
              padding: '1rem 1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <Info size={16} color="#1B5E20" />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Full Form Glossary &amp; Technical Abbreviation Legend
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '8px 16px',
                fontSize: '0.8rem',
                color: '#334155'
              }}>
                <div><strong style={{ color: '#1B5E20' }}>BCNHL:</strong> Bogie Covered Number High-Capacity Length Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>BOXNHL:</strong> Bogie Open High Speed Stainless Heavy Load Wagon</div>
                <div><strong style={{ color: '#1B5E20' }}>BOBRN:</strong> Bogie Open Bottom Rapid Discharge Nitrogen Hopper</div>
                <div><strong style={{ color: '#1B5E20' }}>CASNUB:</strong> Cast Steel Heavy Freight Wagon Bogie</div>
                <div><strong style={{ color: '#1B5E20' }}>CMS Frog:</strong> Cast Manganese Steel (12-14% Mn) Crossing Frog</div>
                <div><strong style={{ color: '#1B5E20' }}>TWS:</strong> Thick Web Switch Point Tongue Rail</div>
                <div><strong style={{ color: '#1B5E20' }}>RDSO:</strong> Research Designs &amp; Standards Organisation</div>
                <div><strong style={{ color: '#1B5E20' }}>AAR:</strong> Association of American Railroads</div>
                <div><strong style={{ color: '#1B5E20' }}>AREMA:</strong> Amer. Railway Engineering &amp; Maint.-of-Way Assoc.</div>
                <div><strong style={{ color: '#1B5E20' }}>IRS:</strong> Indian Railway Standards</div>
                <div><strong style={{ color: '#1B5E20' }}>FRA:</strong> Federal Railroad Administration (USA)</div>
                <div><strong style={{ color: '#1B5E20' }}>APTA:</strong> American Public Transportation Association</div>
                <div><strong style={{ color: '#1B5E20' }}>5-Axis CNC:</strong> 5-Axis Computer Numerical Control Milling</div>
                <div><strong style={{ color: '#1B5E20' }}>CMM:</strong> Coordinate Measuring Machine 3D Inspection</div>
                <div><strong style={{ color: '#1B5E20' }}>BHN:</strong> Brinell Hardness Number</div>
                <div><strong style={{ color: '#1B5E20' }}>HPC:</strong> High Performance Concrete (M60 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>UHSC:</strong> Ultra High Strength Concrete (M80 Grade)</div>
                <div><strong style={{ color: '#1B5E20' }}>SCC:</strong> Self-Compacting Concrete (650mm Flow)</div>
              </div>
            </div>
          )}

        </div>

        {/* ==================== VIEW 1: GRID CARDS VIEW ==================== */}
        {viewMode === 'grid' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredProducts.map(product => {
              const isCompared = comparedProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = '#4CAF50';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  {/* Card Media Preview Header */}
                  <div style={{ position: 'relative', height: '190px', background: '#0F172A', overflow: 'hidden' }}>
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                    />
                    
                    {/* Top Badges overlay */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                        background: '#1B5E20', 
                        color: '#FFF', 
                        fontSize: '0.7rem', 
                        fontWeight: 800, 
                        padding: '4px 10px', 
                        borderRadius: '4px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        {product.series}
                      </span>
                      
                      <span style={{ 
                        background: 'rgba(15, 23, 42, 0.85)', 
                        backdropFilter: 'blur(4px)',
                        color: '#38BDF8', 
                        fontSize: '0.7rem', 
                        fontWeight: 700, 
                        padding: '4px 10px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(56, 189, 248, 0.3)'
                      }}>
                        {product.axleLoad}
                      </span>
                    </div>

                    {/* Quick CAD Preview Button */}
                    <button
                      onClick={() => setDrawingModalProduct({
                        title: product.title,
                        series: product.series,
                        specs: product.specs,
                        img: product.drawingImg
                      })}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(4px)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      <Eye size={14} color="#1B5E20" />
                      <span>CAD Blueprint</span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Compliance pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                      {product.compliance.slice(0, 2).map((comp, idx) => (
                        <span key={idx} style={{ background: '#F1F5F9', color: '#334155', fontSize: '0.725rem', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>
                          {comp}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                      {product.title}
                    </h3>

                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.45, margin: '0 0 1rem 0', flex: 1 }}>
                      {product.desc}
                    </p>

                    {/* Tech Spec Mini Table */}
                    <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '10px', fontSize: '0.775rem', border: '1px solid #F1F5F9', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748B', fontWeight: 500 }}>Material Grade:</span>
                        <strong style={{ color: '#0F172A', fontWeight: 700 }}>{product.materialGrade.split(' ')[0]} {product.materialGrade.split(' ')[1] || ''}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748B', fontWeight: 500 }}>Tensile Strength:</span>
                        <strong style={{ color: '#1B5E20', fontWeight: 700 }}>{product.tensileStrength}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748B', fontWeight: 500 }}>CAD Reference:</span>
                        <code style={{ background: '#E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#0F172A' }}>{product.cadFile.split('.')[0]}</code>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      
                      {/* Compare Checkbox Button */}
                      <button
                        onClick={() => toggleCompare(product.id)}
                        style={{
                          background: isCompared ? '#E8F5E9' : '#F1F5F9',
                          color: isCompared ? '#1B5E20' : '#475569',
                          border: isCompared ? '1px solid #4CAF50' : '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Check size={14} color={isCompared ? '#1B5E20' : '#94A3B8'} />
                        <span>{isCompared ? 'Compared' : 'Compare'}</span>
                      </button>

                      {/* Full Spec Details Drawer Trigger */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        style={{
                          flex: 1,
                          background: '#1B5E20',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '8px 14px',
                          fontSize: '0.825rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(27,94,32,0.2)',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#2E7D32'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1B5E20'}
                      >
                        <span>Full Tech Spec</span>
                        <ChevronRight size={16} />
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== VIEW 2: SPECIFICATIONS TABLE VIEW ==================== */}
        {viewMode === 'table' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: '#0F172A', color: '#FFFFFF', textTransform: 'uppercase', fontSize: '0.775rem', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '14px 16px' }}>Series &amp; Title</th>
                    <th style={{ padding: '14px 16px' }}>Category</th>
                    <th style={{ padding: '14px 16px' }}>Axle Load / Rating</th>
                    <th style={{ padding: '14px 16px' }}>Specification Standard</th>
                    <th style={{ padding: '14px 16px' }}>Material Grade</th>
                    <th style={{ padding: '14px 16px' }}>Tensile Strength</th>
                    <th style={{ padding: '14px 16px' }}>CAD File</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p, idx) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 800, color: '#0F172A' }}>{p.title}</div>
                        <span style={{ fontSize: '0.75rem', color: '#1B5E20', fontWeight: 700 }}>{p.series}</span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontWeight: 600 }}>
                        {p.categoryLabel}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: '#E0F2FE', color: '#0369A1', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          {p.axleLoad}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#334155', fontWeight: 600 }}>
                        {p.specs}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#475569', fontSize: '0.8rem' }}>
                        {p.materialGrade}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#1B5E20' }}>
                        {p.tensileStrength}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <code style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem' }}>
                          {p.cadFile}
                        </code>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <button
                          onClick={() => setSelectedProduct(p)}
                          style={{
                            background: '#1B5E20',
                            color: '#FFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.775rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          View Specs
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================== VIEW 3: PRODUCT COMPARISON MATRIX ==================== */}
        {viewMode === 'compare' && (
          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Side-by-Side Component Comparison Matrix
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  Comparing {comparedProducts.length} selected engineering components
                </span>
              </div>
              
              <button
                onClick={() => setComparedProductIds([])}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#475569', cursor: 'pointer' }}
              >
                Clear Comparison
              </button>
            </div>

            {comparedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#64748B' }}>
                <Info size={40} color="#94A3B8" style={{ marginBottom: '1rem' }} />
                <p>No products selected for comparison. Switch to Grid view and click "Compare" on up to 3 products.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '220px', padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>Parameter</th>
                      {comparedProducts.map(p => (
                        <th key={p.id} style={{ padding: '12px', background: '#F8FAFC', borderBottom: '2px solid #CBD5E1', textAlign: 'left' }}>
                          <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>{p.title}</div>
                          <div style={{ color: '#1B5E20', fontSize: '0.8rem', fontWeight: 700 }}>{p.series}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Category</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0F172A', fontWeight: 600 }}>{p.categoryLabel}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Axle Load Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0284C7', fontWeight: 700 }}>{p.axleLoad}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Standard Compliance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0F172A' }}>
                          {p.compliance.join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Material Metallurgy</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0F172A', fontSize: '0.825rem' }}>{p.materialGrade}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Tensile Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 800 }}>{p.tensileStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Yield Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0F172A', fontWeight: 700 }}>{p.yieldStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>Hardness Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0F172A', fontWeight: 700 }}>{p.hardness}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#475569' }}>RFQ Action</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px' }}>
                          <button
                            onClick={() => {
                              if (onRequestQuoteForProduct) onRequestQuoteForProduct(p.title);
                            }}
                            style={{
                              background: '#1B5E20',
                              color: '#FFF',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '8px 14px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Request Quote
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ==================== SPECIFICATION & CAD DETAIL DRAWER MODAL ==================== */}
        {selectedProduct && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 1200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}>
              
              {/* Drawer Header */}
              <div style={{ background: '#0F172A', color: '#FFF', padding: '1.5rem 2rem', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ background: '#1B5E20', color: '#FFF', fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                      {selectedProduct.series}
                    </span>
                    <span style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 700 }}>
                      {selectedProduct.axleLoad}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>{selectedProduct.title}</h3>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div style={{ padding: '2rem' }}>
                
                {/* 2-Column layout: CAD Image + Technical Specifications */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                  
                  {/* Left Column: Image Preview & CAD blueprint trigger */}
                  <div>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E2E8F0', height: '240px', background: '#0F172A', marginBottom: '1rem', position: 'relative' }}>
                      <img src={selectedProduct.img} alt={selectedProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <button
                      onClick={() => setDrawingModalProduct({
                        title: selectedProduct.title,
                        series: selectedProduct.series,
                        specs: selectedProduct.specs,
                        img: selectedProduct.drawingImg
                      })}
                      style={{
                        width: '100%',
                        background: '#F1F5F9',
                        color: '#0F172A',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        padding: '10px',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <Eye size={18} color="#1B5E20" />
                      <span>Launch 2D CAD Spec Sheet Viewer</span>
                    </button>
                  </div>

                  {/* Right Column: Spec Properties Sheet */}
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Mechanical &amp; Metallurgical Parameters
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#64748B' }}>Primary Material Grade:</span>
                        <strong style={{ color: '#0F172A' }}>{selectedProduct.materialGrade}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#64748B' }}>Tensile Strength Rating:</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.tensileStrength}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#64748B' }}>Yield Strength:</span>
                        <strong style={{ color: '#0F172A' }}>{selectedProduct.yieldStrength}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#64748B' }}>Brinell Hardness (BHN):</span>
                        <strong style={{ color: '#0F172A' }}>{selectedProduct.hardness}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#64748B' }}>Compliance Standards:</span>
                        <strong style={{ color: '#0F172A' }}>{selectedProduct.compliance.join(' | ')}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748B' }}>Downloadable CAD Reference:</span>
                        <code style={{ background: '#E2E8F0', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>{selectedProduct.cadFile}</code>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Key Features Bullet List */}
                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', marginBottom: '2rem', border: '1px solid #E2E8F0' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Key Engineering Features &amp; Innovations
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {selectedProduct.keyFeatures.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                        <Check size={14} color="#4CAF50" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Request Quote & Download Datasheet */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      const prodTitle = selectedProduct.title;
                      setSelectedProduct(null);
                      if (onCloseModal) onCloseModal();
                      if (onRequestQuoteForProduct) onRequestQuoteForProduct(prodTitle);
                    }}
                    style={{
                      flex: 1,
                      background: '#1B5E20',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '12px 20px',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(27,94,32,0.3)'
                    }}
                  >
                    <span>Request Custom RFQ Quote for this Item</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => alert(`Simulated Download: ${selectedProduct.cadFile}`)}
                    style={{
                      background: '#FFFFFF',
                      color: '#0F172A',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '12px 20px',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Download size={18} color="#1B5E20" />
                    <span>Download Spec Sheet (.DWG / PDF)</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* CAD Drawing Blueprint Viewer Sub-Modal */}
        {drawingModalProduct && (
          <EngineeringDrawingModal
            isOpen={!!drawingModalProduct}
            onClose={() => setDrawingModalProduct(null)}
            productTitle={drawingModalProduct.title}
            productSeries={drawingModalProduct.series}
            productSpecs={drawingModalProduct.specs}
            productImg={drawingModalProduct.img}
          />
        )}

      </div>
    </section>
  );
};

export default InteractiveExplorer;
