using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeltaCryptoApi.Model
{
    public class DBInitializer
    {
        public static void Initialize(PortfolioContext context)
        {
            //Recreate database
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            //Are there already books present ?
            if (!context.CryptoCurrencies.Any())
            {
                #region Cryptos
                var BTC = new Crypto() { Type = "Bitcoin", Price = 1 };
                var ETH = new Crypto() { Type = "Ethereum", Price = 2 };
                var EOS = new Crypto() { Type = "EOS", Price = 3 };
                var LTC = new Crypto() { Type = "Litecoin", Price = 4 };
                var XRP = new Crypto() { Type = "Ripple", Price = 5 };
                var BSV = new Crypto() { Type = "Bitcoin SV", Price = 6 };
                var BCH = new Crypto() { Type = "Bitcoin Cash", Price = 7 };
                var ZEC = new Crypto() { Type = "ZCash", Price = 8 };
                var TRX = new Crypto() { Type = "TRON", Price = 9 };
                var NEO = new Crypto() { Type = "NEO", Price = 10 };

                //var BTC = new Crypto() { Type = "Bitcoin"};
                //var ETH = new Crypto() { Type = "Ethereum"};
                //var EOS = new Crypto() { Type = "EOS"};
                //var LTC = new Crypto() { Type = "Litecoin"};
                //var XRP = new Crypto() { Type = "Ripple"};
                //var BSV = new Crypto() { Type = "Bitcoin SV"};
                //var BCH = new Crypto() { Type = "Bitcoin Cash"};
                //var ZEC = new Crypto() { Type = "ZCash"};
                //var TRX = new Crypto() { Type = "TRON"};
                //var NEO = new Crypto() { Type = "NEO"};

                context.CryptoCurrencies.Add(BTC);
                context.CryptoCurrencies.Add(ETH);
                context.CryptoCurrencies.Add(EOS);
                context.CryptoCurrencies.Add(LTC);
                context.CryptoCurrencies.Add(XRP);
                context.CryptoCurrencies.Add(BSV);
                context.CryptoCurrencies.Add(BCH);
                context.CryptoCurrencies.Add(ZEC);
                context.CryptoCurrencies.Add(TRX);
                context.CryptoCurrencies.Add(NEO);
                #endregion

                #region testing units
                var myWallet = new Wallet() { Funds = 100000, TotalCapitalValue = 100000 };
                var myBO = new BuyOrder() { BuyTarget = 5000 };
                var mySO = new SellOrder() { SellTargetLower = 4750, SellTargetUpper = 5500 };

                context.WalletInventory.Add(myWallet);
                context.BuyOrders.Add(myBO);
                context.SellOrders.Add(mySO);
                #endregion

                context.SaveChanges();
            }
        }
    }
}
