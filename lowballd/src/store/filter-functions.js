export function getByKeyword(products, keyword) {
    const search = keyword;
  
    if (!search.length) {
      return products;
    } else {
      return products.filter(product => {
        if (product.color.indexOf(search) > -1) return product;
      });
    }
  }
  
  