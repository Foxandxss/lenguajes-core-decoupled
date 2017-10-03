using System.Linq;
using lenguajes.Models;

namespace lenguajes.Data
{
    public class DbInitializer
    {
        public static void Initialize(LenguajesDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Lenguajes.Any())
            {
                return; // DB has been seeded
            }
            var lenguajes = new Lenguaje[]
            {
                new Lenguaje() {
                    Name = "Javascript",
                    Logo = "javascript.png",
                    Rating = 3
                },
                new Lenguaje() {
                    Name = "Java",
                    Logo = "java.png",
                    Rating = 1
                },
                new Lenguaje() {
                    Name = "PHP",
                    Logo = "php.png",
                    Rating = 1
                },
                new Lenguaje() {
                    Name = "Python",
                    Logo = "python.png",
                    Rating = 2
                },
                new Lenguaje() {
                    Name = "C#",
                    Logo = "csharp.jpg",
                    Rating = 3
                }
            };

            foreach (Lenguaje l in lenguajes)
            {
                context.Lenguajes.Add(l);
            }
            context.SaveChanges();
        }
    }
}
