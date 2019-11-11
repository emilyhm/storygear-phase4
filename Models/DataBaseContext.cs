using Microsoft.EntityFrameworkCore;

public class DataBaseContext : DbContext
    {
        public DataBaseContext (DbContextOptions<DataBaseContext> options)
            : base(options)
        {}

        public DbSet<storygear_csharp.Models.Products> Products { get; set; }
    }
