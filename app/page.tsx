const generateProducts = (count: number = 25): Product[] => {
  const assetImages = [
    '/assets/diamond-cartier1.jpg',
    '/assets/diamond-cartier2.jpg',
    '/assets/diamond-pendant.jpg',
    '/assets/gold-choker.jpg',
    '/assets/heart-pendant.jpg'
  ];
  
  const shapes = ['Round Brilliant', 'Oval', 'Emerald Cut', 'Pear', 'Cushion'];
  const colors = ['D', 'E', 'F', 'G'];
  const clarities = ['IF', 'VVS1', 'VVS2', 'VS1'];
  const cuts = ['Ideal', 'Excellent'];
  
  const products: Product[] = [];
  
  for (let i = 0; i < count; i++) {
    const shape = shapes[i % shapes.length];
    const carat = (0.8 + Math.random() * 3.2).toFixed(2);
    const color = colors[i % colors.length];
    const clarity = clarities[i % clarities.length];
    const cut = cuts[i % cuts.length];
    const image = assetImages[i % assetImages.length]; // Cycle only through our 5 real elegant gold & diamond images
    
    const description = `GIA certified ${color} color, ${clarity} clarity, ${cut} cut ${carat}ct ${shape} diamond. Sourced from our family's direct global supply chain — from responsible mines in Botswana and Canada, through master cutters in Antwerp with 5 generations of expertise, to the heirloom goldsmiths who set it in 18K Fairmined gold. This stone exhibits exceptional fire, brilliance, and zero fluorescence. Every facet is hand-polished to Hearts & Arrows perfection. Complete with full traceability passport, laser inscription, and lifetime guarantee. A true family heirloom that carries our legacy of ethical sourcing, unmatched craftsmanship, and timeless elegance.`;

    products.push({
      id: i + 1,
      name: `${carat}ct ${shape} ${color} ${clarity}`,
      price: Math.floor(4500 + Math.random() * 28000),
      image,
      specs: `${color} Color • ${clarity} Clarity • ${cut} Cut • GIA Certified`,
      description,
      carat: parseFloat(carat),
      color,
      clarity,
      cut,
      shape
    });
  }
  return products;
};