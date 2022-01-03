using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication6.Models
{
    public class Student
    {
        [Key]
        public Guid StudentId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string  Address { get; set; }
    }
}
