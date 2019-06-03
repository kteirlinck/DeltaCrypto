using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class Wallet
    {
        [Key]
        public long Id { get; set; }

        public int Funds { get; set; }
        public int TotalCapitalValue { get; set; }

        //[JsonIgnore]
        public List<Asset> Assets { get; set; }
    }
}
