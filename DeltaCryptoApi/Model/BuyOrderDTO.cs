using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class BuyOrderDTO
    {
        public long Id { get; set; }
        public int BuyTarget { get; set; }
        public int Quantity { get; set; }
        public string DatePlaced { get; set; }
        public string DateExecuted { get; set; }
        public long CryptoId { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
    }
}
