using lenguajes.Models;
using Microsoft.EntityFrameworkCore;

namespace lenguajes.Data
{
    public class LenguajesDbContext : DbContext
    {
        public LenguajesDbContext(DbContextOptions<LenguajesDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Lenguaje> Lenguajes { get; set; }
    }
}
