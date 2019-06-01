using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class Crypto
    {
        [Key]
        public long Id { get; set; }

        public int Price { get; set; }
        public string Type { get; set; }
    }
}
