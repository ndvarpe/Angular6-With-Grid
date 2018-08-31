using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Funnel
    {
        [Key]
        public int FunnelId { get; set; }
        public string ClientName { get; set; }
        public int TaxYear { get; set; }
        public int FunnelStatus { get; set; }
        public string FunnelOpened { get; set; }
        public string Signer { get; set; }
        public string LastActivity { get; set; }
        public string PercentComplete { get; set; }
    }
}
