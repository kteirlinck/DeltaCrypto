using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class SellOrder : OrderMeta
    {
        [Key]
        public long Id { get; set; }

        public int SellTargetUpper { get; set; }
        public int SellTargetLower { get; set; }
    }
}
