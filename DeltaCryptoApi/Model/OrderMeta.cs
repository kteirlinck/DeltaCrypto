using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public abstract class OrderMeta
    {
        public int Quantity { get; set; }
        public string DatePlaced { get; set; }
        public string DateExecuted { get; set; }
        public Crypto Crypto { get; set; }
    }
}
