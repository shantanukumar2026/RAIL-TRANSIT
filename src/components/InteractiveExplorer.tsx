import React, { useState, useMemo } from 'react';
import { 
  Search, Check, Download, 
  ChevronRight, ArrowRight, Eye, Table, Grid, Info, Sparkles, X, Compass
} from 'lucide-react';
import EngineeringDrawingModal from './EngineeringDrawingModal';

export interface ProductItem {
  id: string;
  category: string;
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
  {
    id: 'rail-0',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Under-chassis critical components of high speed German LHB/FIAT coaches',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Under-chassis critical components of high speed German LHB/FIAT coaches manufactured by Westpoint Industries.',
    img: '/images/amsted_bogie_axlebox.jpg',
    drawingImg: '/images/amsted_bogie_axlebox.jpg',
    cadFile: 'RAIL-0.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-1',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Control Arm Upper, Lower Right, Lower Left - SG 400/18',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Control Arm Upper, Lower Right, Lower Left - SG 400/18 manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'RAIL-1.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-2',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Centering Disc Assembly (All Types) - DIN 17182 GS-20Mn5V',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Centering Disc Assembly (All Types) - DIN 17182 GS-20Mn5V manufactured by Westpoint Industries.',
    img: '/images/amsted_centering_disc.jpg',
    drawingImg: '/images/amsted_centering_disc.jpg',
    cadFile: 'RAIL-2.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-3',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Brake support - GS-20Mn5V',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Brake support - GS-20Mn5V manufactured by Westpoint Industries.',
    img: '/images/amsted_brake_head.jpg',
    drawingImg: '/images/amsted_brake_head.jpg',
    cadFile: 'RAIL-3.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-4',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Set Of Console',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Set Of Console manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'RAIL-4.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-5',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Pin Bracket',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Pin Bracket manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'RAIL-5.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-6',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Bump Stop Bracket',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Bump Stop Bracket manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'RAIL-6.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-7',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Articulation Piece - IS 1030',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Articulation Piece - IS 1030 manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings_2.jpg',
    drawingImg: '/images/trackside_turnout_castings_2.jpg',
    cadFile: 'RAIL-7.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-8',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Axlebox Housing - IS 1030',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Axlebox Housing - IS 1030 manufactured by Westpoint Industries.',
    img: '/images/amsted_bogie_axlebox.jpg',
    drawingImg: '/images/amsted_bogie_axlebox.jpg',
    cadFile: 'RAIL-8.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-9',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Front and Rear Draft Lugs - Grade B & C',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Front and Rear Draft Lugs - Grade B & C manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'RAIL-9.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-10',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Railway Track Plates',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Railway Track Plates manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings_2.jpg',
    drawingImg: '/images/trackside_turnout_castings_2.jpg',
    cadFile: 'RAIL-10.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-11',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Castings for Buffers',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Castings for Buffers manufactured by Westpoint Industries.',
    img: '/images/real_train_wheelset_stock.jpg',
    drawingImg: '/images/real_train_wheelset_stock.jpg',
    cadFile: 'RAIL-11.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'rail-12',
    category: 'rail',
    categoryLabel: 'Rail Coach & Bogie Components',
    title: 'Other railway components',
    series: 'SERIES RAIL',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Other railway components manufactured by Westpoint Industries.',
    img: '/images/turnout_frog_manganese_stock.jpg',
    drawingImg: '/images/turnout_frog_manganese_stock.jpg',
    cadFile: 'RAIL-12.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-13',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Rotavator Gearbox 13x23',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Rotavator Gearbox 13x23 manufactured by Westpoint Industries.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'AGRI-13.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-14',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Rotavator Gearbox 13x25',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Rotavator Gearbox 13x25 manufactured by Westpoint Industries.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'AGRI-14.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-15',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Other castings for Rotavator',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Other castings for Rotavator manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'AGRI-15.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-16',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Reduction Gear Housing',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Reduction Gear Housing manufactured by Westpoint Industries.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'AGRI-16.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-17',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Castings for Combine Harvester',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Castings for Combine Harvester manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'AGRI-17.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-18',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Shackle',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Shackle manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'AGRI-18.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-19',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Brake Drums',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Brake Drums manufactured by Westpoint Industries.',
    img: '/images/locomotive_wheelset_stock.jpg',
    drawingImg: '/images/locomotive_wheelset_stock.jpg',
    cadFile: 'AGRI-19.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-20',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Flywheels',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Flywheels manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'AGRI-20.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-21',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Rotor Housing',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Rotor Housing manufactured by Westpoint Industries.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'AGRI-21.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'agri-22',
    category: 'agri',
    categoryLabel: 'Components for Agri Industry',
    title: 'Front Linkage - top and bottom',
    series: 'SERIES AGRI',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Front Linkage - top and bottom manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'AGRI-22.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-23',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Jacking Pad',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Jacking Pad manufactured by Westpoint Industries.',
    img: '/images/amsted_jacking_pad.jpg',
    drawingImg: '/images/amsted_jacking_pad.jpg',
    cadFile: 'LOCO-23.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-24',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Coupler Carrier',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Coupler Carrier manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'LOCO-24.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-25',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Bearing Adaptor Plate Assembly',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Bearing Adaptor Plate Assembly manufactured by Westpoint Industries.',
    img: '/images/real_train_wheelset_stock.jpg',
    drawingImg: '/images/real_train_wheelset_stock.jpg',
    cadFile: 'LOCO-25.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-26',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Brake Head for Brake rigging kit',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Brake Head for Brake rigging kit manufactured by Westpoint Industries.',
    img: '/images/amsted_brake_head.jpg',
    drawingImg: '/images/amsted_brake_head.jpg',
    cadFile: 'LOCO-26.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-27',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Equaliser Spring Seat',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Equaliser Spring Seat manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'LOCO-27.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'loco-28',
    category: 'loco',
    categoryLabel: 'Components for Locomotives',
    title: 'Fuel Pump Support',
    series: 'SERIES LOCO',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Fuel Pump Support manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'LOCO-28.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-29',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: '10 Ton Stub Axle',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality 10 Ton Stub Axle manufactured by Westpoint Industries.',
    img: '/images/locomotive_wheelset_stock.jpg',
    drawingImg: '/images/locomotive_wheelset_stock.jpg',
    cadFile: 'OEM-29.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-30',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: '8 Ton Knuckle',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality 8 Ton Knuckle manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'OEM-30.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-31',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Rotor',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Rotor manufactured by Westpoint Industries.',
    img: '/images/prod_rotavator_gearbox_13x23.jpg',
    drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg',
    cadFile: 'OEM-31.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-32',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Eliptcal Pin',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Eliptcal Pin manufactured by Westpoint Industries.',
    img: '/images/prod_pin_bracket.jpg',
    drawingImg: '/images/prod_pin_bracket.jpg',
    cadFile: 'OEM-32.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-33',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Sprockets for Undercarriage',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Sprockets for Undercarriage manufactured by Westpoint Industries.',
    img: '/images/prod_sprockets.jpg',
    drawingImg: '/images/prod_sprockets.jpg',
    cadFile: 'OEM-33.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'oem-34',
    category: 'oem',
    categoryLabel: 'Components for OEMs',
    title: 'Trailer Components',
    series: 'SERIES OEM',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Trailer Components manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'OEM-34.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-35',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Haulages',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Haulages manufactured by Westpoint Industries.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'MINING-35.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-36',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Winches',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Winches manufactured by Westpoint Industries.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'MINING-36.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-37',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Aeriel Ropeways',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Aeriel Ropeways manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'MINING-37.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-38',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Flanges',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Flanges manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'MINING-38.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-39',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Pulleys',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Pulleys manufactured by Westpoint Industries.',
    img: '/images/real_train_wheelset_stock.jpg',
    drawingImg: '/images/real_train_wheelset_stock.jpg',
    cadFile: 'MINING-39.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-40',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Gearboxes',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Gearboxes manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'MINING-40.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'mining-41',
    category: 'mining',
    categoryLabel: 'Cast Components for Mining',
    title: 'Roof bolter',
    series: 'SERIES MINING',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Roof bolter manufactured by Westpoint Industries.',
    img: '/images/istockphoto-1030443074-1024x1024.jpg',
    drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg',
    cadFile: 'MINING-41.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-42',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN8 Carbon Steel Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN8 Carbon Steel Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-42.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-43',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN9 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN9 Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-43.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-44',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN15 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN15 Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-44.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-45',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN18 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN18 Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-45.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-46',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN19 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN19 Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-46.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-47',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'EN24 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality EN24 Castings manufactured by Westpoint Industries.',
    img: '/images/trackside_turnout_castings.jpg',
    drawingImg: '/images/trackside_turnout_castings.jpg',
    cadFile: 'OTHER-47.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-48',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'IS 2708 Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality IS 2708 Castings manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'OTHER-48.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-49',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'High Chrome Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality High Chrome Castings manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'OTHER-49.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-50',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'Castings for Stone Crushers',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Castings for Stone Crushers manufactured by Westpoint Industries.',
    img: '/images/real_cnc_machining_stock.jpg',
    drawingImg: '/images/real_cnc_machining_stock.jpg',
    cadFile: 'OTHER-50.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-51',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'Ornamental Castings',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Ornamental Castings manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'OTHER-51.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
  },
  {
    id: 'other-52',
    category: 'other',
    categoryLabel: 'Other Industries',
    title: 'Heat Resistant Castings for Boilers',
    series: 'SERIES OTHER',
    specs: 'Standard Specification',
    compliance: ['ISO 9001:2015'],
    axleLoad: 'Variable',
    materialGrade: 'Standard Grade',
    tensileStrength: 'N/A',
    yieldStrength: 'N/A',
    hardness: 'N/A',
    desc: 'High-quality Heat Resistant Castings for Boilers manufactured by Westpoint Industries.',
    img: '/images/real_metal_casting_stock.jpg',
    drawingImg: '/images/real_metal_casting_stock.jpg',
    cadFile: 'OTHER-52.STEP',
    keyFeatures: ['Precision Manufactured', 'Quality Assured', 'Durable Construction']
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
    { id: 'rail', label: 'Rail Coach & Bogie Components' },
    { id: 'agri', label: 'Components for Agri Industry' },
    { id: 'loco', label: 'Components for Locomotives' },
    { id: 'oem', label: 'Components for OEMs' },
    { id: 'mining', label: 'Cast Components for Mining' },
    { id: 'other', label: 'Other Industries' }
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
              color: '#1B5E20', 
              fontWeight: 900, 
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              ENGINEERING PRODUCT &amp; SPECIFICATION EXPLORER
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#4CAF50', lineHeight: 1.6, margin: 0 }}>
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B5E20', margin: 0 }}>
                  Component &amp; Technical Spec Explorer
                </h3>
                <span style={{ fontSize: '0.825rem', color: '#4CAF50' }}>
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
                  color: '#4CAF50',
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
              <Search size={18} color="#4CAF50" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
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
                  color: '#1B5E20',
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
                    color: viewMode === 'grid' ? '#1B5E20' : '#4CAF50',
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
                    color: viewMode === 'table' ? '#1B5E20' : '#4CAF50',
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
                  color: activeCategory === cat.id ? '#FFFFFF' : '#4CAF50',
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
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
                    color: activeStandard === std.id ? '#1B5E20' : '#4CAF50',
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
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
                    color: activeAxleLoad === axle.id ? '#1B5E20' : '#4CAF50',
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

              <div style={{ fontSize: '0.825rem', color: '#4CAF50', fontWeight: 600 }}>
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
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1B5E20', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Full Form Glossary &amp; Technical Abbreviation Legend
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '8px 16px',
                fontSize: '0.8rem',
                color: '#2E7D32'
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
                  <div style={{ position: 'relative', height: '190px', background: '#1B5E20', overflow: 'hidden' }}>
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
                        color: '#1B5E20',
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
                        <span key={idx} style={{ background: '#F1F5F9', color: '#2E7D32', fontSize: '0.725rem', fontWeight: 600, padding: '2px 8px', borderRadius: '4px' }}>
                          {comp}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1B5E20', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                      {product.title}
                    </h3>

                    <p style={{ fontSize: '1rem', color: '#2E7D32', lineHeight: 1.5, margin: '0 0 1rem 0', flex: 1 }}>
                      {product.desc}
                    </p>

                    {/* Tech Spec Mini Table */}
                    <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '10px', fontSize: '0.775rem', border: '1px solid #F1F5F9', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#4CAF50', fontWeight: 500 }}>Material Grade:</span>
                        <strong style={{ color: '#1B5E20', fontWeight: 700 }}>{product.materialGrade.split(' ')[0]} {product.materialGrade.split(' ')[1] || ''}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#4CAF50', fontWeight: 500 }}>Tensile Strength:</span>
                        <strong style={{ color: '#1B5E20', fontWeight: 700 }}>{product.tensileStrength}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#4CAF50', fontWeight: 500 }}>CAD Reference:</span>
                        <code style={{ background: '#E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#1B5E20' }}>{product.cadFile.split('.')[0]}</code>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      
                      {/* Compare Checkbox Button */}
                      <button
                        onClick={() => toggleCompare(product.id)}
                        style={{
                          background: isCompared ? '#E8F5E9' : '#F1F5F9',
                          color: isCompared ? '#1B5E20' : '#4CAF50',
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
                  <tr style={{ background: '#1B5E20', color: '#FFFFFF', textTransform: 'uppercase', fontSize: '0.775rem', letterSpacing: '0.05em' }}>
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
                        <div style={{ fontWeight: 800, color: '#1B5E20' }}>{p.title}</div>
                        <span style={{ fontSize: '0.75rem', color: '#1B5E20', fontWeight: 700 }}>{p.series}</span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontWeight: 600 }}>
                        {p.categoryLabel}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ background: '#E0F2FE', color: '#0369A1', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          {p.axleLoad}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#2E7D32', fontWeight: 600 }}>
                        {p.specs}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4CAF50', fontSize: '0.8rem' }}>
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1B5E20', margin: 0 }}>
                  Side-by-Side Component Comparison Matrix
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#4CAF50' }}>
                  Comparing {comparedProducts.length} selected engineering components
                </span>
              </div>
              
              <button
                onClick={() => setComparedProductIds([])}
                style={{ background: '#F1F5F9', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', fontWeight: 600, color: '#4CAF50', cursor: 'pointer' }}
              >
                Clear Comparison
              </button>
            </div>

            {comparedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#4CAF50' }}>
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
                          <div style={{ fontWeight: 800, color: '#1B5E20', fontSize: '1rem' }}>{p.title}</div>
                          <div style={{ color: '#1B5E20', fontSize: '0.8rem', fontWeight: 700 }}>{p.series}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Category</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 600 }}>{p.categoryLabel}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Axle Load Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#0284C7', fontWeight: 700 }}>{p.axleLoad}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Standard Compliance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20' }}>
                          {p.compliance.join(', ')}
                        </td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Material Metallurgy</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontSize: '0.825rem' }}>{p.materialGrade}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Tensile Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 800 }}>{p.tensileStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Yield Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.yieldStrength}</td>
                      ))}
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>Hardness Rating</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '12px', color: '#1B5E20', fontWeight: 700 }}>{p.hardness}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontWeight: 700, color: '#4CAF50' }}>RFQ Action</td>
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
              <div style={{ background: '#1B5E20', color: '#FFF', padding: '1.5rem 2rem', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E2E8F0', height: '240px', background: '#1B5E20', marginBottom: '1rem', position: 'relative' }}>
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
                        color: '#1B5E20',
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
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B5E20', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Mechanical &amp; Metallurgical Parameters
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#4CAF50' }}>Primary Material Grade:</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.materialGrade}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#4CAF50' }}>Tensile Strength Rating:</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.tensileStrength}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#4CAF50' }}>Yield Strength:</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.yieldStrength}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#4CAF50' }}>Brinell Hardness (BHN):</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.hardness}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
                        <span style={{ color: '#4CAF50' }}>Compliance Standards:</span>
                        <strong style={{ color: '#1B5E20' }}>{selectedProduct.compliance.join(' | ')}</strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#4CAF50' }}>Downloadable CAD Reference:</span>
                        <code style={{ background: '#E2E8F0', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>{selectedProduct.cadFile}</code>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Key Features Bullet List */}
                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', marginBottom: '2rem', border: '1px solid #E2E8F0' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#1B5E20', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Key Engineering Features &amp; Innovations
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {selectedProduct.keyFeatures.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#2E7D32' }}>
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
                      color: '#1B5E20',
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
