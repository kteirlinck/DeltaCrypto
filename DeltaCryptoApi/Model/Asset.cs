using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class Asset
    {
        [Key]
        public long Id { get; set; }
        public int UpdatedQuantity { get; set; }
        public int OldQuantity { get; set; }
        public int NewQuantity { get; set; }
        public int BoughtFor { get; set; }
        public Crypto Crypto { get; set; }
        public DateTime DateAcquired { get; set; }
    }
}
