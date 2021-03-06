﻿using System;
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
    //[Authorize]
    [ApiController]
    public class BuyOrderController : ControllerBase
    {
        public PortfolioContext _context { get; set; }
        public BuyOrderController(PortfolioContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<BuyOrder> GetBuyOrders()
        {
            return _context.BuyOrders.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<BuyOrder> GetBuyOrder(long id)
        {
            var buyOrderItem = _context.BuyOrders.SingleOrDefault(b => b.Id == id);


            if (buyOrderItem == null)
            {
                return NotFound();
            }
            return buyOrderItem;
        }

        [Route("InsertBuyOrder")]
        [HttpPost]
        public async Task<ActionResult<BuyOrder>> PostBuyOrder([FromBody]BuyOrder buyOrderItem)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.BuyOrders.Add(buyOrderItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBuyOrder), new
            {
                id = buyOrderItem.Id,
                buyTarget = buyOrderItem.BuyTarget,
                quantity = buyOrderItem.Quantity,
                datePlaced = buyOrderItem.DatePlaced,
                dateExecuted = buyOrderItem.DateExecuted,
                crypto = buyOrderItem.Crypto
            }, buyOrderItem);
        }

        [Route("DeleteBuyOrder/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteBuyOrder(long id)
        {
            var buyOrderItem = await _context.BuyOrders.FindAsync(id);

            if (buyOrderItem == null)
            {
                return NotFound();
            }

            _context.BuyOrders.Remove(buyOrderItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Route("UpdateBuyOrder{id}")]
        [HttpPut]
        public async Task<IActionResult> PutBuyOrder(long id, BuyOrder buyOrderItem)
        {
            if (id != buyOrderItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(buyOrderItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // StatCode 204 (No Content)
        }
    }
}