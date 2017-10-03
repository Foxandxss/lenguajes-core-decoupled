using System.Linq;
using System.Threading.Tasks;
using lenguajes.Data;
using lenguajes.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lenguajes.Controllers
{
    [Route("api/[controller]")]
    public class LenguajesController : Controller
    {
        private readonly LenguajesDbContext _context;

        public LenguajesController(LenguajesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var  lenguajes = await _context.Lenguajes.ToArrayAsync();

            return Ok(lenguajes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var lenguaje = await _context.Lenguajes
                .Where(l => l.Id == id).SingleOrDefaultAsync(l => l.Id == id);

            return Ok(lenguaje);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Lenguaje lenguaje)
        {
            _context.Add(lenguaje);
            await _context.SaveChangesAsync();
            return CreatedAtAction("Post", lenguaje);
        }
    }
}
