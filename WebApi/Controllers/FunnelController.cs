using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/Funnel")]
    [ApiController]
    public class FunnelController : ControllerBase
    {
        private readonly FunnelContext _context;
        public FunnelController(FunnelContext context)
        {
            _context = context;

            if (_context.Funnels.Count() == 0)
            {
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 1,
                    ClientName = "Boothe, Marie",
                    TaxYear = 2017,
                    FunnelStatus = 4,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "P.Parter",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "92%"
                });
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 2,
                    ClientName = "Conley, Kaylin",
                    TaxYear = 2017,
                    FunnelStatus = 3,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "M.Manager",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "80%"
                });
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 3,
                    ClientName = "Abbot, Thalia",
                    TaxYear = 2017,
                    FunnelStatus = 1,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "P.Parter",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "0%"
                });
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 4,
                    ClientName = "Davidson, Henry",
                    TaxYear = 2017,
                    FunnelStatus = 2,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "P.Parter",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "45%"
                });
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 5,
                    ClientName = "Cooper, Henry",
                    TaxYear = 2017,
                    FunnelStatus = 3,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "M.Manager",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "63%"
                });
                _context.Funnels.Add(new Funnel
                {
                    FunnelId = 6,
                    ClientName = "Baldwin, Walker",
                    TaxYear = 2017,
                    FunnelStatus = 5,
                    FunnelOpened = DateTime.Now.ToShortDateString(),
                    Signer = "P.Parter",
                    LastActivity = DateTime.Now.ToShortDateString(),
                    PercentComplete = "100%"
                });
                _context.SaveChanges();
            }
        }
        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<Funnel>> Get()
        {
            throw new Exception()
            return _context.Funnels.ToList();
        }

        // GET api/<controller>/id
        [HttpGet("{id}", Name = "GetFunnel")]
        public ActionResult<Funnel> GetById(int id)
        {
            var item = _context.Funnels.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/id
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/id
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
