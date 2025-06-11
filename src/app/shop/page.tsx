'use client';

import Image from 'next/image';
import { useState } from 'react';

const allProducts = [
  {
    name: '1" #2 Phillips Drywall Screw Setter Carded',
    price: "$2.15 / Each",
    image: "/phillips_drywall_screw_setter_carded.png",
    category: 'Tools',
    productnumber: '44022'
  },
  {
    name: '5 Pack Heavy Duty Utility Blades',
    category: 'Tools',
    price: '$1.09',
    image: "/5_Pack_Heavy_Duty_Utility_blades.png",
    productnumber: '11172'
  },
  {
    name: '5 Pack Heavy Duty Hook Blades',
    category: 'Tools',
    price: '$6.49',
    image: '/5_Pack_Heavy_Duty_Hook_Blades.png',
    productnumber: '11172'
  },
  {
    name: '100 Pack Utility Blades Dispenser',
    price: "$1.16 / Each",
    image: "/products/tool101.png",
    category: 'Tools',
  },
  {
    name: '100 Pack Heavy Duty Hook Blades',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool102.png"
  },
  {
    name: '11 x 4-1/2"- 1/4 x 1/2" U Notched Trowel - Pro Grip',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool103.png"
  },
  {
    name: '11 x 4-1/2"- 1/4 x 3/8" U Notched Trowel - Pro Grip',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool104.png"
  },
  {
    name: '11 x 4-1/2"- 1/4 x 1/4" U Notched Trowel - Pro Grip',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool105.png"
  },
   {
    name: '9-1/2 x 4" Tile Grouters Float',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool106.png"
  },
   {
    name: '11" Double-End Nail Puller',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool107.png"
  },
   {
    name: '7-1/2" Mini Pry Bar',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool108.png"
  },
   {
    name: '8" PRY-Claw Nail Puller',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool109.png"
  },
   {
    name: '16 oz. White Rubber Mallet',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool110.png"
  },
   {
    name: '5/32 x 4-1/2" Concrete Drill Bit Carded',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool111.png"
  },
   {
    name: 'Dead Blow Hammer - 32 oz Power Pro Grip',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool112.png"
  },
   {
    name: '5/32 x 5-1/2" Concrete Drill Bit Carded',
    category: 'Tools',
    price: '$2.99',
    image: "/products/tool113.png"
  },
  {
    name: '1-1/4" Pro Grip Chisel Knife',
    category: 'Tools',
    price: '6.99',
    image: "/products/tool114.png"
  },
  {
    name: '5 Gallon Mud Mixer',
    category: 'Tools',
    price: '25.99',
    image: "/products/tool115.png"
  },
  {
    name: '3/16 x 5-1/2" Concrete Drill Bit Carded',
    category: 'Tools',
    price: '25.99',
    image: "/products/tool116.png"
  },
  {
    name: 'Speed Mixer - 3 Gallon',
    category: 'Tools',
    price: '14.99',
    image: "/products/tool117.png"
  },
{
    name: '16 oz. Fiberglass Rip Hammer',
    category: 'Tools',
    price: '15.32',
    image: "/products/tool118.png"
  },
  {
    name: '5/32 x 7" SDS-Plus Hex Drive Bit',
    category: 'Tools',
    price: '8.60',
    image: "/products/tool119.png"
  },
{
    name: '20 oz. Fiberglass Rip Hammer',
    category: 'Tools',
    price: '16.69',
    image: "/products/tool120.png"
  },
{
    name: '3/16 x 7" SDS-Plus Hex Drive Bit',
    category: 'Tools',
    price: '8.73',
    image: "/products/tool121.png"
  },
{
    name: '16 oz. Solid Steel Rip Hammer',
    category: '',
    price: '28.71',
    image: "/products/tool122.png"
  },
{
    name: '20 oz. Solid Steel Rip Hammer',
    category: 'Tools',
    price: '32.12',
    image: "/products/tool123.png"
  },
{
    name: 'Double Interlock Retractable Utility Knife',
    category: 'Tools',
    price: '5.31',
    image: "/products/tool124.png"
  },
{
    name: '4 lb. Jacketed Fiberglass Engineers Hammer',
    category: 'Tools',
    price: '26.84',
    image: "/products/tool125.png"
  },
{
    name: '1/2" Wood Chisel',
    category: 'Tools',
    price: '6.16',
    image: "/products/tool126.png"
  },
{
    name: '3/4" Wood Chisel',
    category: 'Tools',
    price: '6.33',
    image: "/products/tool127.png"
  },
{
    name: '1" Wood Chisel',
    category: 'tools',
    price: '6.51',
    image: "/products/tool128.png"
  },
{
    name: '3 Pc. Premium Wood Chisel Set',
    category: 'Tools',
    price: '19.68',
    image: "/products/tool129.png"
  },
 {
    "name": "6 Pc Precision Screwdriver Set",
    "category": "",
    "price": "",
    "image": "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17106-1.jpg&width=1920&format=web"
  },
{
    name: '8 Pc Torx Tamper Key Set T8-T40 - S2 Tool Steel',
    category: 'Tools',
    price: '15.00',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17012-1.jpg&width=1920&format=webp"
  },
{
    name: 'Hand Rivet Tool with 60 Pc Rivet Assortment - NEW ITEM!!',
    category: 'Tools',
    price: '25.00',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f16302-1.jpg&width=1920&format=webp"
  },
{
    name: '1/4 x 4" Slotted Screwdriver',
    category: 'Tools',
    price: '4.74',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17191-1.jpg&width=1920&format=webp"
  },
{
    name: '25 x 1" Power Return Tape',
    category: 'Tools',
    price: '11.06',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f13125-1.jpg&width=1920&format=webp"
  },
{
    name: '3/16 x 6" Slotted Screwdriver',
    category: 'Tools',
    price: '4.55',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17186-1.jpg&width=1920&format=webp"
  },
{
    name: 'Rapid Reload® Retractable Utility Knife',
    category: 'Tools',
    price: '12.73',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f11193-1.jpg&width=1920&format=webp"
  },
{
    name: '#0 x 3" Phillips Screwdriver',
    category: 'Tools',
    price: '3.20',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17221-1.jpg&width=1920&format=webp"
  },
{
    name: '#1 x 4" Phillips Screwdriver',
    category: 'Tools',
    price: '4.26',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17226-1.jpg&width=1920&format=webp"
  },
{
    name: '#2 x 4" Robertson Screwdriver',
    category: 'Tools',
    price: '5.24',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f17264-1.jpg&width=1920&format=webp"
  },
{
    name: '12" Bar Clamp',
    category: 'Tools',
    price: '16.13',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f16212-1.jpg&width=1920&format=webp"
  },
{
    name: 'Sanding Sponge 46/80 Grit',
    category: 'Tools',
    price: '2.05',
    image: "https://ivyclassic.com/Admin/Public/GetImage.ashx?image=%2fFiles%2fImages%2fIVY+Image+Pattern%2fSingle+Item+Images%2f42000-1.jpg&width=1920&format=webp"
  },


];
export default function ShopPreview() {
  return (
    <section id="shop" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm tracking-widest text-muted-foreground font-semibold uppercase">
          Featured Materials & Tools
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-foreground">
          Our Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {allProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={`Photo of ${product.name}`}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-1">
                  Category: {product.category}
                </p>
                <p className="text-sm text-foreground font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/shop"
            className="inline-block px-6 py-2 text-sm font-medium border border-input text-foreground hover:bg-muted rounded-md transition"
          >
            View All Products
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            For bulk orders or specific inquiries, please{' '}
            <a href="/#contact" className="underline text-primary">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
