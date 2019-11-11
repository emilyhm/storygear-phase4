using Microsoft.EntityFrameworkCore;

namespace storygear_csharp.Models
{
    public class productsContext
    {
        public class ProductsContext : DbContext
        {
            public ProductsContext()
            { }
            public ProductsContext(DbContextOptions<ProductsContext> options) : base(options)
            { }
            public DbSet<Products> Products { get; set; }
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { optionsBuilder.UseMySql("Server=localhost;Port=3306;Database=ecommerce;User=root;Password=password;"); }
        }
    }
}
