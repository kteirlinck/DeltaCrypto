using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeltaCryptoApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeltawalletApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class WalletController : ControllerBase
    {
        public PortfolioContext _context { get; set; }
        public WalletController(PortfolioContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Wallet> GetWallets()
        {
            return _context.WalletInventory.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Wallet> Getwallet(long id)
        {
            var walletItem = _context.WalletInventory.SingleOrDefault(b => b.Id == id);


            if (walletItem == null)
            {
                return NotFound();
            }
            return walletItem;
        }

        [HttpPost]
        public async Task<ActionResult<Wallet>> Postwallet([FromBody]Wallet walletItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.WalletInventory.Add(walletItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Getwallet), new
            {
                id = walletItem.Id,
                funds = walletItem.Funds,
                totalCapitalValue = walletItem.TotalCapitalValue,
                assets = walletItem.Assets
            }, walletItem);
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> Deletewallet(long id)
        {
            var walletItem = await _context.WalletInventory.FindAsync(id);

            if (walletItem == null)
            {
                return NotFound();
            }

            _context.WalletInventory.Remove(walletItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> Putwallet(long id, Wallet walletItem)
        {
            if (id != walletItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(walletItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // StatCode 204 (No Content)
        }
    }
}