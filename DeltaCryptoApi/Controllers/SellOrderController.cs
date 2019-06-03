using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DeltaCryptoApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeltaCryptoApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class SellOrderController : ControllerBase
    {
        public PortfolioContext _context { get; set; }
        public SellOrderController(PortfolioContext ctxt)
        {
            _context = ctxt;
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<SellOrder> GetsellOrder(long id)
        {
            var sellOrderItem = _context.SellOrders.SingleOrDefault(b => b.Id == id);


            if (sellOrderItem == null)
            {
                return NotFound();
            }
            return sellOrderItem;
        }

        [HttpPost]
        public async Task<ActionResult<SellOrder>> PostsellOrder([FromBody]SellOrder sellOrderItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.SellOrders.Add(sellOrderItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetsellOrder), new
            {
                id = sellOrderItem.Id,
                sellTargetUpper = sellOrderItem.SellTargetUpper,
                sellTargetLower = sellOrderItem.SellTargetLower,
                quantity = sellOrderItem.Quantity,
                datePlaced = sellOrderItem.DatePlaced,
                dateExecuted = sellOrderItem.DateExecuted,
                crypto = sellOrderItem.Crypto
            }, sellOrderItem);
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeletesellOrder(long id)
        {
            var sellOrderItem = await _context.SellOrders.FindAsync(id);

            if (sellOrderItem == null)
            {
                return NotFound();
            }

            _context.SellOrders.Remove(sellOrderItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> PutsellOrder(long id, SellOrder sellOrderItem)
        {
            if (id != sellOrderItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(sellOrderItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // StatCode 204 (No Content)
        }
    }
}