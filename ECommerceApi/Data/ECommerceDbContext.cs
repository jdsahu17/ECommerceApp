namespace ECommerceApi.Data;

using ECommerceApi.Models;
using Microsoft.EntityFrameworkCore;

public class ECommerceDbContext : DbContext
{
    public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options) : base(options) { }

    public DbSet<Product> Products { get; set; }
}
