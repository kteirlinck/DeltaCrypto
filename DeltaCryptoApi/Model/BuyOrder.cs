using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class BuyOrder : OrderMeta
    {
        [Key]
        public long Id { get; set; }

        public int BuyTarget { get; set; }
    }
}
