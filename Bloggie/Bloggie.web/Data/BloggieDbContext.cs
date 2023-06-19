﻿using Bloggie.web.Models.Domain;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace Bloggie.web.Data
{
    public class BloggieDbContext : DbContext
    {
        public BloggieDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
