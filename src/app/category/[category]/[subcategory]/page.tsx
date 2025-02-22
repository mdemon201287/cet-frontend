// src/app/subcategory/[category]/[subCategory]/page.tsx
"use client"
import React from 'react';
import { useParams } from 'next/navigation';
 
const SubcategoryPage = () => {
  const { category, subCategory } = useParams();

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Subcategory: {subCategory}</h2>
      {/* Render content specific to this category/subcategory */}
    </div>
  );
};

export default SubcategoryPage;
