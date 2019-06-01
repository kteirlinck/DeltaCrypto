using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeltaCryptoApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeltaCryptoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoController : ControllerBase
    {
        public PortfolioContext _context { get; set; }
        public CryptoController(PortfolioContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Crypto> GetCryptos()
        {
            return _context.CryptoCurrencies.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Crypto> Getcrypto(long id)
        {
            var cryptoItem = _context.CryptoCurrencies.SingleOrDefault(b => b.Id == id);


            if (cryptoItem == null)
            {
                return NotFound();
            }
            return cryptoItem;
        }

        [HttpPost]
        public async Task<ActionResult<Crypto>> Postcrypto([FromBody]Crypto cryptoItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.CryptoCurrencies.Add(cryptoItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Getcrypto), new
            {
                id = cryptoItem.Id,
                //price = cryptoItem.Price,
                type = cryptoItem.Type
            }, cryptoItem);
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> Deletecrypto(long id)
        {
            var cryptoItem = await _context.CryptoCurrencies.FindAsync(id);

            if (cryptoItem == null)
            {
                return NotFound();
            }

            _context.CryptoCurrencies.Remove(cryptoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> Putcrypto(long id, Crypto cryptoItem)
        {
            if (id != cryptoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(cryptoItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // StatCode 204 (No Content)
        }
    }
}