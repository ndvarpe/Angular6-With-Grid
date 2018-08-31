using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class FunnelContext: DbContext
    {
        public FunnelContext(DbContextOptions<FunnelContext> options)
            : base(options)
        {
        }
        public DbSet<Funnel> Funnels { get; set; }
    }
}
