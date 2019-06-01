using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class SellOrderDTO
    {
        public long Id { get; set; }
        public int SellTargetUpper { get; set; }
        public int SellTargetLower { get; set; }
        public int Quantity { get; set; }
        public string DatePlaced { get; set; }
        public string DateExecuted { get; set; }
        public string CryptoId { get; set; }
        public int Price { get; set; }
    }
}
